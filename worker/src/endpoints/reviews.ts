import type { AppContext } from "../types";
import { getAuthorizedReviewSession } from "./reviewAuth";

type ReviewEnv = Env & {
  REVIEWS_DB?: D1Database;
  SENDGRID_API_KEY?: string;
  REVIEW_FROM_EMAIL?: string;
  REVIEW_SITE_URL?: string;
  ALLOWED_ORIGINS?: string;
};

type InvitationRow = {
  id: string;
  token: string;
  customer_name: string;
  customer_email: string;
  status: string;
  created_at: string;
  sent_at: string | null;
  submitted_at: string | null;
};

type ReviewRow = {
  id: string;
  invitation_id: string;
  customer_name: string;
  customer_email: string;
  rating: number;
  review_text: string;
  status: string;
  created_at: string;
  moderated_at: string | null;
  moderated_by: string | null;
};

function json(c: AppContext, body: unknown, status = 200, headers: Record<string, string> = {}) {
  return c.json(body, status as 200, { "Cache-Control": "no-store", ...headers });
}

function db(c: AppContext): D1Database | null {
  return (c.env as ReviewEnv).REVIEWS_DB || null;
}

function randomToken(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function clean(value: unknown, max = 5000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function allowedOrigin(c: AppContext): string {
  const origin = c.req.header("Origin") || "";
  const allowed = new Set(
    ((c.env as ReviewEnv).ALLOWED_ORIGINS || "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean),
  );
  return allowed.has(origin) ? origin : "https://alphazonelabs.com";
}

function publicHeaders(c: AppContext): Record<string, string> {
  return {
    "Access-Control-Allow-Origin": allowedOrigin(c),
    "Access-Control-Allow-Methods": "GET,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

async function requireAdmin(c: AppContext) {
  const session = await getAuthorizedReviewSession(c);
  if (!session) return { response: json(c, { error: "Authentication required." }, 401), session: null };
  return { response: null, session };
}

async function sendReviewEmail(env: ReviewEnv, invitation: InvitationRow): Promise<void> {
  if (!env.SENDGRID_API_KEY) throw new Error("SENDGRID_API_KEY is not configured.");
  const from = env.REVIEW_FROM_EMAIL || "info@alphazonelabs.com";
  const siteUrl = (env.REVIEW_SITE_URL || "https://review.alphazonelabs.com").replace(/\/$/, "");
  const reviewUrl = `${siteUrl}/submit.html?token=${encodeURIComponent(invitation.token)}`;
  const firstName = invitation.customer_name.split(/\s+/)[0] || "there";

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: invitation.customer_email, name: invitation.customer_name || undefined }] }],
      from: { email: from, name: "Alpha Zone Labs" },
      subject: "How was your experience with Alpha Zone Labs?",
      content: [
        {
          type: "text/plain",
          value: `Hi ${firstName},\n\nThank you for working with Alpha Zone Labs. We would appreciate a brief review of your experience.\n\nLeave your review: ${reviewUrl}\n\nThank you,\nAlpha Zone Labs`,
        },
        {
          type: "text/html",
          value: `<!doctype html><html><body style="margin:0;background:#fff8e8;font-family:Arial,sans-serif;color:#171717"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px"><tr><td align="center"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#fff;border:1px solid #e7e5e4;border-radius:20px;padding:36px"><tr><td><p style="margin:0 0 12px;color:#7f0010;font-size:12px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase">Alpha Zone Labs</p><h1 style="margin:0 0 18px;font-family:Georgia,serif;font-size:30px">Tell us about your experience.</h1><p style="margin:0 0 16px;line-height:1.7">Hi ${firstName},</p><p style="margin:0 0 24px;line-height:1.7">Thank you for working with Alpha Zone Labs. Your feedback helps us improve and helps future customers understand what it is like to work with us.</p><p style="margin:0 0 28px"><a href="${reviewUrl}" style="display:inline-block;padding:14px 22px;border-radius:999px;background:#9f0712;color:#fff;text-decoration:none;font-weight:700">Leave a review</a></p><p style="margin:0;color:#57534e;font-size:13px;line-height:1.6">This private link is connected to your review invitation.</p></td></tr></table></td></tr></table></body></html>`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`SendGrid rejected the email (${response.status}): ${detail.slice(0, 300)}`);
  }
}

export async function ReviewPublicOptions(c: AppContext) {
  return new Response(null, { status: 204, headers: publicHeaders(c) });
}

export async function ReviewCreateInvitation(c: AppContext) {
  const auth = await requireAdmin(c);
  if (auth.response) return auth.response;
  const database = db(c);
  if (!database) return json(c, { error: "REVIEWS_DB is not configured." }, 503);

  const body = await c.req.json<{ name?: string; email?: string }>().catch(() => ({}));
  const customerName = clean(body.name, 120);
  const customerEmail = clean(body.email, 254).toLowerCase();
  if (!customerEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
    return json(c, { error: "A valid customer email is required." }, 400);
  }

  const invitation: InvitationRow = {
    id: crypto.randomUUID(),
    token: randomToken(),
    customer_name: customerName,
    customer_email: customerEmail,
    status: "created",
    created_at: new Date().toISOString(),
    sent_at: null,
    submitted_at: null,
  };

  await database.prepare(
    `INSERT INTO review_invitations (id, token, customer_name, customer_email, status, created_at)
     VALUES (?, ?, ?, ?, ?, ?)`,
  ).bind(invitation.id, invitation.token, invitation.customer_name, invitation.customer_email, invitation.status, invitation.created_at).run();

  try {
    await sendReviewEmail(c.env as ReviewEnv, invitation);
    invitation.status = "sent";
    invitation.sent_at = new Date().toISOString();
    await database.prepare("UPDATE review_invitations SET status = ?, sent_at = ? WHERE id = ?")
      .bind(invitation.status, invitation.sent_at, invitation.id).run();
  } catch (error) {
    await database.prepare("UPDATE review_invitations SET status = ? WHERE id = ?").bind("email_failed", invitation.id).run();
    return json(c, { error: error instanceof Error ? error.message : "The invitation could not be emailed." }, 502);
  }

  return json(c, { ok: true, invitation: { id: invitation.id, email: invitation.customer_email, status: invitation.status } }, 201);
}

export async function ReviewListAdmin(c: AppContext) {
  const auth = await requireAdmin(c);
  if (auth.response) return auth.response;
  const database = db(c);
  if (!database) return json(c, { error: "REVIEWS_DB is not configured." }, 503);

  const results = await database.prepare(
    `SELECT r.id, r.invitation_id, r.customer_name, r.customer_email, r.rating, r.review_text,
            r.status, r.created_at, r.moderated_at, r.moderated_by
     FROM reviews r ORDER BY r.created_at DESC LIMIT 200`,
  ).all<ReviewRow>();
  return json(c, { reviews: results.results || [] });
}

export async function ReviewModerate(c: AppContext) {
  const auth = await requireAdmin(c);
  if (auth.response || !auth.session) return auth.response;
  const database = db(c);
  if (!database) return json(c, { error: "REVIEWS_DB is not configured." }, 503);

  const id = c.req.param("id");
  const body = await c.req.json<{ action?: string }>().catch(() => ({}));
  const action = clean(body.action, 20).toLowerCase();
  const nextStatus = action === "approve" ? "approved" : action === "deny" ? "denied" : "";
  if (!nextStatus) return json(c, { error: "Action must be approve or deny." }, 400);

  const result = await database.prepare(
    "UPDATE reviews SET status = ?, moderated_at = ?, moderated_by = ? WHERE id = ?",
  ).bind(nextStatus, new Date().toISOString(), auth.session.email, id).run();
  if (!result.meta.changes) return json(c, { error: "Review not found." }, 404);
  return json(c, { ok: true, id, status: nextStatus });
}

export async function ReviewGetInvitation(c: AppContext) {
  const database = db(c);
  if (!database) return json(c, { error: "Review service is not configured." }, 503);
  const token = clean(c.req.param("token"), 128);
  const invitation = await database.prepare(
    "SELECT id, customer_name, customer_email, status FROM review_invitations WHERE token = ?",
  ).bind(token).first<{ id: string; customer_name: string; customer_email: string; status: string }>();
  if (!invitation) return json(c, { error: "This review invitation is invalid." }, 404);
  if (invitation.status === "submitted") return json(c, { error: "A review has already been submitted with this link." }, 409);
  return json(c, { invitation: { name: invitation.customer_name, email: invitation.customer_email } });
}

export async function ReviewSubmit(c: AppContext) {
  const database = db(c);
  if (!database) return json(c, { error: "Review service is not configured." }, 503);
  const token = clean(c.req.param("token"), 128);
  const body = await c.req.json<{ name?: string; rating?: number; review?: string }>().catch(() => ({}));
  const rating = Number(body.rating);
  const reviewText = clean(body.review, 3000);
  const submittedName = clean(body.name, 120);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return json(c, { error: "Select a rating from 1 to 5." }, 400);
  if (reviewText.length < 10) return json(c, { error: "Please provide at least 10 characters of feedback." }, 400);

  const invitation = await database.prepare(
    "SELECT id, customer_name, customer_email, status FROM review_invitations WHERE token = ?",
  ).bind(token).first<{ id: string; customer_name: string; customer_email: string; status: string }>();
  if (!invitation) return json(c, { error: "This review invitation is invalid." }, 404);
  if (invitation.status === "submitted") return json(c, { error: "A review has already been submitted with this link." }, 409);

  const now = new Date().toISOString();
  const reviewId = crypto.randomUUID();
  await database.batch([
    database.prepare(
      `INSERT INTO reviews (id, invitation_id, customer_name, customer_email, rating, review_text, status, created_at)
       VALUES (?, ?, ?, ?, ?, ?, 'pending', ?)`,
    ).bind(reviewId, invitation.id, submittedName || invitation.customer_name, invitation.customer_email, rating, reviewText, now),
    database.prepare("UPDATE review_invitations SET status = 'submitted', submitted_at = ? WHERE id = ?").bind(now, invitation.id),
  ]);
  return json(c, { ok: true, message: "Thank you. Your review was submitted for approval." }, 201);
}

export async function ReviewListPublished(c: AppContext) {
  const database = db(c);
  if (!database) return json(c, { reviews: [] }, 200, publicHeaders(c));
  const results = await database.prepare(
    `SELECT id, customer_name, rating, review_text, created_at
     FROM reviews WHERE status = 'approved' ORDER BY moderated_at DESC, created_at DESC LIMIT 12`,
  ).all<{ id: string; customer_name: string; rating: number; review_text: string; created_at: string }>();
  return json(c, { reviews: results.results || [] }, 200, publicHeaders(c));
}

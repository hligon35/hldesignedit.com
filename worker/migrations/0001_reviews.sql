CREATE TABLE IF NOT EXISTS review_invitations (
  id TEXT PRIMARY KEY,
  token TEXT NOT NULL UNIQUE,
  customer_name TEXT NOT NULL DEFAULT '',
  customer_email TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'created',
  created_at TEXT NOT NULL,
  sent_at TEXT,
  submitted_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_review_invitations_email
  ON review_invitations(customer_email);

CREATE INDEX IF NOT EXISTS idx_review_invitations_status
  ON review_invitations(status);

CREATE TABLE IF NOT EXISTS reviews (
  id TEXT PRIMARY KEY,
  invitation_id TEXT NOT NULL UNIQUE,
  customer_name TEXT NOT NULL DEFAULT '',
  customer_email TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  review_text TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TEXT NOT NULL,
  moderated_at TEXT,
  moderated_by TEXT,
  FOREIGN KEY (invitation_id) REFERENCES review_invitations(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_reviews_status_created
  ON reviews(status, created_at DESC);

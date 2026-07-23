const CONFIG = {
  SHEET_ID: '1_BCjr6r1YlKRZmiPh0Qc6Xb2cqWErs4JahrvyzWORrw',
  SHEET_NAME: 'Discovery Responses',
  OWNER_EMAIL: 'hligon@alphazonelabs.com',
  SENDER_NAME: 'Alpha Zone Labs',
  REPLY_TO: 'hligon@alphazonelabs.com',
  LOGO_URL: 'https://alphazonelabs.com/alpha-zone-labs-logo.png'
};

function doPost(e) {
  try {
    const data = JSON.parse((e && e.parameter && e.parameter.payload) || '{}');
    validateSubmission_(data);

    const sheet = getOrCreateSheet_();
    appendSubmission_(sheet, data);
    sendOwnerEmail_(data);
    sendClientEmail_(data);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error(error);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function testDoPost() {
  const testSubmission = {
    submittedAt: new Date().toISOString(),
    contact: {
      businessName: 'Test Business',
      contactName: 'Test Client',
      contactEmail: 'hligon@getsparqd.com'
    },
    selectedPlatforms: ['Google Workspace', 'QuickBooks'],
    platformResponses: {
      adaptiveDiscovery: {
        features: ['Lead intake', 'Payments', 'Reporting'],
        cost: '$50-$100',
        future: 'Evaluate each platform and recommend the best path'
      }
    },
    goals: [
      'Project path: Build It Better',
      'Industry: Professional and local services',
      'Business type: Consulting',
      'Team size: 2-5 employees',
      'Required integrations: Accounting, CRM, Calendar',
      'Migration: Customer records (Under 100)',
      'Brand readiness: Brand is complete with logo and guidelines',
      'Sensitive data: No sensitive information',
      'Compliance: No known requirements',
      'Support needs: Hosting, Maintenance and security updates'
    ],
    customerFeatures: ['Request a consultation', 'Pay invoices or deposits'],
    ownerFeatures: ['Manage leads and contacts', 'Create proposals and estimates'],
    transition: 'Evaluate each platform and recommend the best path',
    monthlyBudget: '$51-$100',
    projectBudget: '$2,501-$5,000',
    timeline: 'Within 60-90 days',
    success: 'Less manual work',
    source: 'Apps Script manual test'
  };

  return doPost({
    parameter: {
      payload: JSON.stringify(testSubmission)
    }
  });
}

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.openById(CONFIG.SHEET_ID);
  let sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME);

  if (!sheet) sheet = spreadsheet.insertSheet(CONFIG.SHEET_NAME);

  const headers = [
    'Submitted At', 'Business Name', 'Contact Name', 'Email',
    'Platforms', 'Platform Details', 'Goals', 'Customer Features',
    'Owner Features', 'Transition Preference', 'Monthly Budget',
    'Project Budget', 'Launch Timing', 'Success Priority', 'Source'
  ];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight('bold')
      .setBackground('#111111')
      .setFontColor('#ffffff');
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function appendSubmission_(sheet, data) {
  const platformDetails = Object.entries(data.platformResponses || {})
    .map(([key, response]) => [
      key,
      'Features: ' + (response.features || []).join(', '),
      'Cost: ' + (response.cost || ''),
      'Future: ' + (response.future || '')
    ].join(' | '))
    .join('\n');

  sheet.appendRow([
    new Date(data.submittedAt || new Date()),
    data.contact.businessName,
    data.contact.contactName,
    data.contact.contactEmail,
    (data.selectedPlatforms || []).join(', '),
    platformDetails,
    (data.goals || []).join('\n'),
    (data.customerFeatures || []).join(', '),
    (data.ownerFeatures || []).join(', '),
    data.transition || '',
    data.monthlyBudget || '',
    data.projectBudget || '',
    data.timeline || '',
    data.success || '',
    data.source || ''
  ]);

  sheet.autoResizeColumns(1, 15);
  sheet.getRange(sheet.getLastRow(), 1, 1, 15).setWrap(true).setVerticalAlignment('top');
}

function sendOwnerEmail_(data) {
  const logoBlob = getLogoBlob_();
  const options = {
    to: CONFIG.OWNER_EMAIL,
    subject: 'New quote discovery: ' + data.contact.businessName,
    htmlBody: ownerTemplate_(data, Boolean(logoBlob)),
    name: CONFIG.SENDER_NAME,
    replyTo: data.contact.contactEmail
  };
  if (logoBlob) options.inlineImages = { alphaZoneLogo: logoBlob };
  MailApp.sendEmail(options);
}

function sendClientEmail_(data) {
  const logoBlob = getLogoBlob_();
  const options = {
    to: data.contact.contactEmail,
    subject: 'We received your Alpha Zone Labs request',
    htmlBody: clientTemplate_(data, Boolean(logoBlob)),
    name: CONFIG.SENDER_NAME,
    replyTo: CONFIG.REPLY_TO
  };
  if (logoBlob) options.inlineImages = { alphaZoneLogo: logoBlob };
  MailApp.sendEmail(options);
}

function ownerTemplate_(data, hasInlineLogo) {
  const overview = [
    labeledRow_('Business', data.contact.businessName),
    labeledRow_('Contact', data.contact.contactName),
    labeledRow_('Email', data.contact.contactEmail),
    labeledRow_('Project path', data.transition || ''),
    labeledRow_('Project budget', data.projectBudget || ''),
    labeledRow_('Monthly target', data.monthlyBudget || ''),
    labeledRow_('Timeline', data.timeline || ''),
    labeledRow_('Success priority', data.success || '')
  ].join('');

  const discoveryRows = (data.goals || []).map(goalRow_).join('');

  const featureRows = [
    labeledRow_('Customer capabilities', (data.customerFeatures || []).join(', ')),
    labeledRow_('Owner and team capabilities', (data.ownerFeatures || []).join(', ')),
    labeledRow_('Current platforms', (data.selectedPlatforms || []).join(', '))
  ].join('');

  const platformRows = Object.entries(data.platformResponses || {})
    .map(([platform, response]) => labeledRow_(platform, [
      'Features: ' + (response.features || []).join(', '),
      'Cost: ' + (response.cost || ''),
      'Direction: ' + (response.future || '')
    ].join('\n')))
    .join('');

  return emailShell_(
    'New discovery submission',
    'A prospective client completed the Alpha Zone Labs adaptive quote and discovery form.',
    section_('Project overview', overview) +
    section_('Discovery details', discoveryRows) +
    section_('Features and platforms', featureRows + platformRows),
    hasInlineLogo
  );
}

function clientTemplate_(data, hasInlineLogo) {
  return emailShell_(
    'Thank you, ' + escapeHtml_(data.contact.contactName) + '.',
    'We received your project discovery form for <strong>' + escapeHtml_(data.contact.businessName) + '</strong>.',
    '<div style="padding:20px;border:1px solid #f1d9dc;border-left:5px solid #c1121f;background:#fffdf7;border-radius:12px;">' +
      '<div style="font-size:16px;font-weight:800;color:#171717;">What happens next?</div>' +
      '<p style="margin:9px 0 0;line-height:1.7;color:#404040;">We will review your business type, current setup, required features, integrations, budget, timing, and operational needs. A member of the Alpha Zone Labs team will follow up with the recommended next step.</p>' +
    '</div>' +
    '<p style="margin:24px 0 0;color:#6b7280;line-height:1.7;text-align:center;">You do not need to submit the form again.</p>',
    hasInlineLogo
  );
}

function emailShell_(title, intro, content, hasInlineLogo) {
  const logo = hasInlineLogo
    ? '<img src="cid:alphaZoneLogo" width="72" alt="Alpha Zone Labs" style="display:block;width:72px;max-width:72px;height:auto;border:0;">'
    : '<div style="font-size:16px;font-weight:900;letter-spacing:.08em;color:#ffffff;">AZL</div>';

  return '<!doctype html><html><body style="margin:0;background:#f6f2e8;font-family:Arial,Helvetica,sans-serif;color:#171717;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;background:#f6f2e8;padding:24px 12px;"><tr><td align="center">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;max-width:700px;background:#ffffff;border:1px solid #e7e5e4;border-radius:18px;overflow:hidden;">' +
    '<tr><td style="background:#111111;padding:24px 22px;">' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>' +
        '<td width="88" valign="middle" align="left">' + logo + '</td>' +
        '<td valign="middle" align="center" style="color:#ffffff;text-align:center;">' +
          '<div style="color:#fff4dd;font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">Alpha Zone Labs</div>' +
          '<h1 style="margin:0;font-size:28px;line-height:1.2;color:#ffffff;">' + title + '</h1>' +
        '</td>' +
        '<td width="88">&nbsp;</td>' +
      '</tr></table>' +
    '</td></tr>' +
    '<tr><td style="padding:30px;">' +
      '<p style="margin:0 0 24px;font-size:16px;line-height:1.7;color:#404040;text-align:center;">' + intro + '</p>' + content +
    '</td></tr>' +
    '<tr><td align="center" style="padding:22px 30px;border-top:4px solid #c1121f;background:#fff4dd;color:#404040;font-size:12px;line-height:1.7;text-align:center;">' +
      '<strong style="color:#171717;">Alpha Zone Labs</strong><br>' +
      'Websites, AI, automation, software, and digital solutions.<br>' +
      '<a href="https://alphazonelabs.com" style="color:#c1121f;font-weight:700;text-decoration:none;">alphazonelabs.com</a>' +
    '</td></tr></table></td></tr></table></body></html>';
}

function section_(title, rows) {
  if (!rows) return '';
  return '<div style="margin:0 0 26px;">' +
    '<div style="padding:10px 14px;background:#111111;border-left:5px solid #c1121f;color:#ffffff;font-size:15px;font-weight:800;border-radius:8px 8px 0 0;">' + escapeHtml_(title) + '</div>' +
    '<div style="padding:0 14px;border:1px solid #e7e5e4;border-top:0;border-radius:0 0 8px 8px;background:#fffdf7;">' + rows + '</div>' +
  '</div>';
}

function labeledRow_(label, value) {
  const safeValue = escapeHtml_(value || 'Not provided').replace(/\n/g, '<br>');
  return '<div style="padding:13px 0;border-bottom:1px solid #e7e5e4;line-height:1.65;">' +
    '<strong style="display:inline;color:#171717;">' + escapeHtml_(label) + ':</strong> ' +
    '<span style="color:#404040;">' + safeValue + '</span>' +
  '</div>';
}

function goalRow_(line) {
  const text = String(line || '');
  const separator = text.indexOf(':');
  if (separator < 1) return labeledRow_('Detail', text);
  return labeledRow_(text.slice(0, separator), text.slice(separator + 1).trim());
}

function getLogoBlob_() {
  try {
    const response = UrlFetchApp.fetch(CONFIG.LOGO_URL, { muteHttpExceptions: true });
    if (response.getResponseCode() < 200 || response.getResponseCode() >= 300) {
      throw new Error('Logo request returned HTTP ' + response.getResponseCode());
    }
    return response.getBlob().setName('alpha-zone-labs-logo.png');
  } catch (error) {
    console.error('Logo could not be loaded: ' + error);
    return null;
  }
}

function validateSubmission_(data) {
  if (!data.contact || !data.contact.businessName || !data.contact.contactName || !data.contact.contactEmail) {
    throw new Error('Missing required contact fields.');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact.contactEmail)) {
    throw new Error('Invalid email address.');
  }
}

function escapeHtml_(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
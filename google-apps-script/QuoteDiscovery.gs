const CONFIG = {
  SHEET_NAME: 'Quote Discovery Responses',
  OWNER_EMAIL: 'hligon@alphazonelabs.com',
  SENDER_NAME: 'Alpha Zone Labs',
  REPLY_TO: 'hligon@alphazonelabs.com',
};

function doPost(e) {
  try {
    const data = JSON.parse((e.parameter && e.parameter.payload) || '{}');
    validateSubmission_(data);

    const sheet = getOrCreateSheet_();
    appendSubmission_(sheet, data);
    sendOwnerEmail_(data);
    sendClientEmail_(data);

    return HtmlService.createHtmlOutput(
      '<!doctype html><html><body><script>' +
      'window.parent.postMessage({type:"ALPHA_QUOTE_SUCCESS"},"*");' +
      '</script></body></html>'
    );
  } catch (error) {
    console.error(error);
    return HtmlService.createHtmlOutput(
      '<!doctype html><html><body><script>' +
      'window.parent.postMessage({type:"ALPHA_QUOTE_ERROR"},"*");' +
      '</script></body></html>'
    );
  }
}

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(CONFIG.SHEET_NAME);
  }

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
    .map(([key, response]) => {
      return [
        key,
        'Features: ' + (response.features || []).join(', '),
        'Cost: ' + (response.cost || ''),
        'Future: ' + (response.future || '')
      ].join(' | ');
    })
    .join('\n');

  sheet.appendRow([
    new Date(data.submittedAt || new Date()),
    data.contact.businessName,
    data.contact.contactName,
    data.contact.contactEmail,
    (data.selectedPlatforms || []).join(', '),
    platformDetails,
    (data.goals || []).join(', '),
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
}

function sendOwnerEmail_(data) {
  const subject = 'New quote discovery: ' + data.contact.businessName;
  const htmlBody = ownerTemplate_(data);

  MailApp.sendEmail({
    to: CONFIG.OWNER_EMAIL,
    subject,
    htmlBody,
    name: CONFIG.SENDER_NAME,
    replyTo: data.contact.contactEmail,
  });
}

function sendClientEmail_(data) {
  const subject = 'We received your Alpha Zone Labs request';
  const htmlBody = clientTemplate_(data);

  MailApp.sendEmail({
    to: data.contact.contactEmail,
    subject,
    htmlBody,
    name: CONFIG.SENDER_NAME,
    replyTo: CONFIG.REPLY_TO,
  });
}

function ownerTemplate_(data) {
  const platformRows = Object.entries(data.platformResponses || {})
    .map(([platform, response]) => row_(platform, [
      'Features: ' + (response.features || []).join(', '),
      'Cost: ' + (response.cost || ''),
      'Preference: ' + (response.future || '')
    ].join('<br>')))
    .join('');

  return emailShell_(
    'New discovery submission',
    'A new client completed the Alpha Zone Labs quote discovery form.',
    row_('Business', data.contact.businessName) +
    row_('Contact', data.contact.contactName) +
    row_('Email', data.contact.contactEmail) +
    row_('Goals', (data.goals || []).join(', ')) +
    row_('Customer features', (data.customerFeatures || []).join(', ')) +
    row_('Owner features', (data.ownerFeatures || []).join(', ')) +
    row_('Transition', data.transition || '') +
    row_('Monthly target', data.monthlyBudget || '') +
    row_('Project budget', data.projectBudget || '') +
    row_('Timeline', data.timeline || '') +
    row_('Success priority', data.success || '') +
    platformRows
  );
}

function clientTemplate_(data) {
  return emailShell_(
    'Thank you, ' + escapeHtml_(data.contact.contactName) + '.',
    'We received your business platform and custom system discovery form for <strong>' +
      escapeHtml_(data.contact.businessName) + '</strong>.',
    '<div style="padding:18px;border-left:4px solid #c8a95b;background:#f7f2ff;border-radius:0 12px 12px 0;">' +
      '<strong>What happens next?</strong>' +
      '<p style="margin:8px 0 0;line-height:1.6;color:#555;">Someone from our team will review your current platforms, priorities, budget, and goals. We will get back with you with the recommended next step.</p>' +
    '</div>' +
    '<p style="margin:24px 0 0;color:#666;line-height:1.6;">You do not need to submit the form again.</p>'
  );
}

function emailShell_(title, intro, content) {
  return '<!doctype html><html><body style="margin:0;background:#f4f1f8;font-family:Arial,Helvetica,sans-serif;color:#222;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 12px;background:#f4f1f8;"><tr><td align="center">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;background:#fff;border:1px solid #e7dff0;border-radius:20px;overflow:hidden;">' +
    '<tr><td style="padding:30px;background:linear-gradient(135deg,#111111,#4c1d95);color:#fff;">' +
    '<div style="color:#c8a95b;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:10px;">Alpha Zone Labs</div>' +
    '<h1 style="margin:0;font-size:30px;line-height:1.15;">' + title + '</h1></td></tr>' +
    '<tr><td style="padding:30px;">' +
    '<p style="margin:0 0 22px;font-size:16px;line-height:1.7;">' + intro + '</p>' + content +
    '</td></tr>' +
    '<tr><td style="padding:20px 30px;border-top:1px solid #eee;background:#fafafa;color:#777;font-size:12px;line-height:1.6;">' +
    'Alpha Zone Labs<br>Websites, AI, automation, software, and digital solutions.' +
    '</td></tr></table></td></tr></table></body></html>';
}

function row_(label, value) {
  return '<div style="padding:14px 0;border-bottom:1px solid #eee;">' +
    '<div style="font-size:12px;font-weight:700;color:#6d28d9;text-transform:uppercase;letter-spacing:1px;">' + escapeHtml_(label) + '</div>' +
    '<div style="margin-top:6px;line-height:1.6;color:#333;">' + value + '</div>' +
    '</div>';
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
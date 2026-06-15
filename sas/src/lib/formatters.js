export function formatTimestamp(timestamp) {
  if (!timestamp) {
    return 'Unknown date';
  }

  const date = new Date(timestamp);

  if (Number.isNaN(date.getTime())) {
    return 'Unknown date';
  }

  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(date);
}

export function formatScore(score) {
  if (typeof score !== 'number' || Number.isNaN(score)) {
    return '--';
  }

  return `${Math.round(score)}/100`;
}

export function toSentenceCase(value) {
  if (!value) {
    return '';
  }

  return value
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (character) => character.toUpperCase());
}
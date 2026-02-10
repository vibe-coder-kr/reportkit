export function sanitizeHtml(html: string): string {
  // Basic HTML sanitization to prevent XSS
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+="[^"]*"/gi, '');
}

export function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export function generateId(prefix: string = 'rk'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}
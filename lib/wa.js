export const waLink = 'https://wa.me/966531826230';

export function buildWaPrefill(lang, form) {
  const greeting = lang === 'ar' ? 'مرحباً كودسوديو، أنا' : "Hi Codesudio, I'm";
  const interested = lang === 'ar' ? 'مهتم بـ: ' : 'Interested in: ';
  const name = form.name || '';
  const service = form.service ? `${interested}${form.service}. ` : '';
  const message = form.message || '';
  const text = `${greeting} ${name}. ${service}${message}`.trim();
  return `${waLink}?text=${encodeURIComponent(text)}`;
}

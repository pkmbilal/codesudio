export const waLink = 'https://wa.me/966531826230';

export function buildWaPrefill(lang, form) {
  const labels =
    lang === 'ar'
      ? {
          greeting: 'مرحبا كودسوديو، أريد حجز مكالمة استكشافية.',
          name: 'الاسم',
          phone: 'الجوال',
          email: 'البريد',
          service: 'الخدمة',
          message: 'الرسالة',
        }
      : {
          greeting: "Hi Codesudio, I'd like to book a discovery call.",
          name: 'Name',
          phone: 'Phone',
          email: 'Email',
          service: 'Service',
          message: 'Message',
        };

  const fieldLines = [
    [labels.name, form.name],
    [labels.phone, form.phone],
    [labels.email, form.email],
    [labels.service, form.service],
    [labels.message, form.message],
  ]
    .filter(([, value]) => value?.trim())
    .map(([label, value]) => `${label}: ${value.trim()}`);

  const text = [labels.greeting, ...fieldLines].join('\n');
  return `${waLink}?text=${encodeURIComponent(text)}`;
}

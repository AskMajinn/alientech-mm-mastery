export const EMAIL = "hello@mmmastery.com";
export const PHONE_DISPLAY = "(555) 123-4567";
export const PHONE_TEL = "+15551234567";

export function mailtoHref(subject: string, bodyTemplate: string): string {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyTemplate)}`;
}

export function telHref(): string {
  return `tel:${PHONE_TEL}`;
}

export const REFERRAL_CODE = 'STAR-GCQJ-N6NC';
export const REFERRAL_URL =
  'https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC';
export const HUB_URL = 'https://dayonecitizen.com';
export const SITE_URL = 'https://screferralreward.com';

export const HERO_IMAGES: { src: string; alt: string }[] = Array.from(
  { length: 12 },
  (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    return {
      src: `/images/hero/hero-${num}.jpg`,
      alt: `Star Citizen referral hero image ${num}`
    };
  }
);

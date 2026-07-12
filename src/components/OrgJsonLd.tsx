import { SITE_URL } from '@/data/referral';

export default function OrgJsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'screferralreward.com',
    url: SITE_URL,
    description:
      'Star Citizen referral code site — get 50,000 UEC bonus with code STAR-GCQJ-N6NC.',
    author: {
      '@type': 'Person',
      name: 'Doc_Flanigan',
      url: 'https://dayonecitizen.com'
    },
    publisher: {
      '@type': 'Person',
      name: 'Doc_Flanigan',
      url: 'https://dayonecitizen.com'
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

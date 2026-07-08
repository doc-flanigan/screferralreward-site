/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        // Event tracking retired 2026-07-08 — freeflyevent.com is the
        // network's live event site; this passive funnel doesn't track dates.
        source: '/event-tracker',
        destination: 'https://freeflyevent.com',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

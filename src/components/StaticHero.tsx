import Image from 'next/image';

/**
 * Static cinematic hero band. Replaces the HeroCarousel on this site —
 * a passive, set-and-forget page wants one great image with zero client JS,
 * not an 18-slide rotator. Server component; image is priority-loaded.
 */
export default function StaticHero({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-white/10 aspect-[21/9] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 1024px"
        className="object-cover"
      />
      {/* Light grounding gradient only — the artwork should read clearly */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent pointer-events-none"
        aria-hidden
      />
    </div>
  );
}

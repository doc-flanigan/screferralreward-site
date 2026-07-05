'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { HERO_IMAGES } from '@/data/referral';

type Props = {
  intervalMs?: number;
  className?: string;
};

const START = 15;

export default function HeroCarousel({ intervalMs = 5000, className = '' }: Props) {
  const [index, setIndex] = useState(START);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % HERO_IMAGES.length),
      intervalMs
    );
    return () => clearInterval(id);
  }, [intervalMs, paused]);

  const current = HERO_IMAGES[index];

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-white/5 bg-charcoalMid aspect-[16/9] ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Star Citizen referral imagery"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={current.src}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority={index === START}
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/30 pointer-events-none" />

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-6 bg-gold' : 'w-1.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

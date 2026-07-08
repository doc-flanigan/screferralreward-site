'use client';

import { useEffect, useMemo, useState } from 'react';
import { REFERRAL_EVENTS, STANDARD_BONUS } from '@/data/events';

function pickNextEvent() {
  const now = Date.now();
  // Date-derived only — an event is relevant while its window hasn't ended.
  const upcoming = REFERRAL_EVENTS
    .filter((e) => new Date(e.endDate).getTime() > now)
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );
  return upcoming[0];
}

function diffParts(targetMs: number, fromMs: number) {
  const ms = Math.max(0, targetMs - fromMs);
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  const seconds = Math.floor((ms % 60_000) / 1000);
  return { days, hours, minutes, seconds };
}

export default function CountdownTimer() {
  const event = useMemo(() => pickNextEvent(), []);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!event) {
    return (
      <div className="rounded-xl bg-charcoalMid border border-white/5 p-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">No Active Event</p>
        <p className="text-platinum/80">
          Standard <span className="text-gold font-bold">{STANDARD_BONUS}</span> bonus is
          always available — claim any time with code{' '}
          <span className="font-mono text-gold">STAR-GCQJ-N6NC</span>.
        </p>
      </div>
    );
  }

  const target = new Date(event.startDate).getTime();
  const parts = now != null ? diffParts(target, now) : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const live = now != null && now >= target && now <= new Date(event.endDate).getTime();

  return (
    <div className="rounded-xl bg-charcoalMid border border-gold/30 p-6">
      <div className="flex items-center justify-center gap-2 mb-4">
        <span
          className={`inline-block w-2 h-2 rounded-full ${
            live ? 'bg-green-400 animate-pulse' : 'bg-gold'
          }`}
        />
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          {live ? 'Event Live' : 'Next Event'}
        </p>
      </div>
      <p className="text-center font-display text-xl text-platinum mb-1">{event.name}</p>
      <p className="text-center text-sm text-gold mb-6">{event.reward}</p>

      <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
        {(['days', 'hours', 'minutes', 'seconds'] as const).map((k) => (
          <div
            key={k}
            className="bg-charcoal border border-white/10 rounded-lg p-3 text-center"
          >
            <div className="font-mono text-2xl sm:text-3xl text-gold tabular-nums">
              {now == null ? '—' : String(parts[k]).padStart(2, '0')}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-platinum/60 mt-1">
              {k}
            </div>
          </div>
        ))}
      </div>

      {event.note && (
        <p className="text-center text-xs text-platinum/50 mt-4">{event.note}</p>
      )}
    </div>
  );
}

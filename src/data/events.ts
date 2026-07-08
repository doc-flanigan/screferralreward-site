export type ReferralEvent = {
  name: string;
  startDate: string; // ISO
  endDate: string; // ISO
  reward: string; // What the new player (recruit) receives
  note?: string;
  source?: string;
};

export type EventStatus = 'past' | 'live' | 'upcoming';

// Status is ALWAYS derived from dates — never stored. A hardcoded status
// field went stale in July 2026 (a May event still marked 'live'), so the
// field was removed entirely. Pages using this must set `revalidate` so the
// derived status refreshes without a deploy.
export function getEventStatus(e: ReferralEvent, now: Date = new Date()): EventStatus {
  const t = now.getTime();
  if (t < new Date(e.startDate).getTime()) return 'upcoming';
  if (t <= new Date(e.endDate).getTime()) return 'live';
  return 'past';
}

// All entries describe the event from the new-player's perspective — what
// signing up with a referral code during this window actually gets you.
// Verified against RSI Comm-Link transmissions via api.star-citizen.wiki
// and the network claims ledger (docs/claims/).

export const REFERRAL_EVENTS: ReferralEvent[] = [
  {
    name: 'Invictus Launch Week 2955',
    startDate: '2025-05-15',
    endDate: '2025-05-27',
    reward: '50,000 UEC + Aegis Avenger Titan free-fly loan',
    note: 'From May 15–27, 2025, every player received an Aegis Avenger Titan to fly for the duration of the event, plus rental access to nearly 150 ships at the Bevic Convention Center on ArcCorp. New accounts that signed up with a referral code during this window also received the standard 50,000 UEC bonus.',
    source:
      'https://robertsspaceindustries.com/en/comm-link/transmission/20491-About-Invictus-Launch-Week-2955'
  },
  {
    name: 'IAE 2955 — Intergalactic Aerospace Expo',
    startDate: '2025-11-20',
    endDate: '2025-12-03',
    reward: '50,000 UEC + Star Kitten Racing Gear Pack + free-fly access to ~200 ships',
    note: 'Per the official IAE 2955 announcement: when a new citizen signed up with a referral code AND picked up a game package during the event, they received an exclusive Star Kitten Racing Gear Pack on top of the standard 50,000 UEC bonus. Free-fly access let new accounts try nearly 200 ships across the show floor at the Vision Center, Orison.',
    source:
      'https://robertsspaceindustries.com/en/comm-link/transmission/20797-IAE-2955-About'
  },
  {
    name: 'DefenseCon 2956',
    startDate: '2026-05-14',
    endDate: '2026-05-27',
    reward: '50,000 UEC + Free Fly access',
    note: 'DefenseCon 2956 (the 2956-era successor to Invictus Launch Week) ran as a Free Fly event May 14–27, 2026. New accounts using a referral code during the window received the standard 50,000 UEC bonus, which remains available year-round.',
    source:
      'https://robertsspaceindustries.com/en/comm-link/transmission/21147-DefenseCon-2956-About'
  },
];

// Standard new-recruit bonus — always available outside event windows.
export const STANDARD_BONUS = '50,000 UEC';

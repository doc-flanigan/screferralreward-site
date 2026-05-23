export type ReferralEvent = {
  name: string;
  startDate: string; // ISO
  endDate: string; // ISO
  reward: string; // What the new player (recruit) receives
  status: 'past' | 'live' | 'upcoming';
  note?: string;
  source?: string;
};

// All entries describe the event from the new-player's perspective — what
// signing up with a referral code during this window actually gets you.
// Verified verbatim against RSI Comm-Link transmissions via api.star-citizen.wiki.

export const REFERRAL_EVENTS: ReferralEvent[] = [
  {
    name: 'Invictus Launch Week 2955',
    startDate: '2025-05-15',
    endDate: '2025-05-27',
    reward: '50,000 UEC + Aegis Avenger Titan free-fly loan',
    status: 'past',
    note: 'From May 15–27, 2025, every player received an Aegis Avenger Titan to fly for the duration of the event, plus rental access to nearly 150 ships at the Bevic Convention Center on ArcCorp. New accounts that signed up with a referral code during this window also received the standard 50,000 UEC bonus.',
    source:
      'https://robertsspaceindustries.com/en/comm-link/transmission/20491-About-Invictus-Launch-Week-2955'
  },
  {
    name: 'IAE 2955 — Intergalactic Aerospace Expo',
    startDate: '2025-11-20',
    endDate: '2025-12-03',
    reward: '50,000 UEC + Star Kitten Racing Gear Pack + free-fly access to ~200 ships',
    status: 'past',
    note: 'Per the official IAE 2955 announcement: when a new citizen signed up with a referral code AND picked up a game package during the event, they received an exclusive Star Kitten Racing Gear Pack on top of the standard 50,000 UEC bonus. Free-fly access let new accounts try nearly 200 ships across the show floor at the Vision Center, Orison.',
    source:
      'https://robertsspaceindustries.com/en/comm-link/transmission/20797-IAE-2955-About'
  },
  {
    name: 'Invictus Launch Week 2956 — Expected',
    startDate: '2026-05-15',
    endDate: '2026-05-27',
    reward: '50,000 UEC + free-fly access (expected)',
    status: ‘live’,
    note: ‘Based on RSI’s historical Invictus cadence. Expect a free-fly window paired with the standard 50,000 UEC referral bonus; any extra recruit-side perks (themed gear pack, loaner ship) will be announced via RSI Comm-Link closer to the event.',
    source: 'https://robertsspaceindustries.com/en/comm-link?text=Referral+Bonus'
  }
];

// Standard new-recruit bonus — always available outside event windows.
export const STANDARD_BONUS = '50,000 UEC';

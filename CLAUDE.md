# CLAUDE.md — screferralreward.com

Current state of the site, the hard rules for changing it, and where the
authoritative facts live. This file replaces the original Agent 1–7 build
spec — the site is built; this is the maintenance contract.

## What this site is

A single-purpose conversion site that promotes one referral code:
**STAR-GCQJ-N6NC**. New players who sign up with that code get 50,000 UEC.
That is the whole pitch. The site does not promote anyone else's code, does
not teach existing backers how to recruit, and does not include a "for
veterans" rewards ladder. The site has been intentionally pruned of any
content that competes with that single funnel.

## Domain

- **Live domain:** `screferralreward.com` (singular)
- The plural `screferralrewards.com` was never registered — earlier code/copy
  used the plural by mistake. All user-facing references now use the singular.
- npm package name and GitHub repo slug remain `screferralrewards-site`
  (plural) as historical artifacts; these are internal IDs and do not need
  to be renamed.

## Quick Reference

```
Referral code:  STAR-GCQJ-N6NC
Enlist URL:     https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC
Hub:            https://dayonecitizen.com
Conventions:    E:\Claude Code\sc-portfolio\SHARED_CONVENTIONS.md
```

## Pages

```
/                  Homepage. Above-fold ReferralCodeBox + 24h-rule warning.
                   Sections: How It Works, Countdown, UEC Spend Grid, current
                   event card, Event History preview, FAQ (8 q's), final CTA.

/get-the-code      Five-step signup walkthrough. Screenshot placeholders.

/event-tracker     Countdown timer + full event history table.

/sitemap.xml       Auto-generated from src/app/sitemap.ts
/robots.txt        Auto-generated from src/app/robots.ts
```

`/rewards-ladder` was deleted in commit `3b3df7b` — it described how to
recruit other people, which conflicts with the single-funnel goal.

## Data layer

All facts that drive page content live in `src/data/`. Edit these files,
not the components, when something on the site needs to change.

- `src/data/referral.ts` — referral code, full enlist URL, hub URL, site URL,
  hero image list. Single source of truth for the code/URL pair.
- `src/data/events.ts` — referral bonus event history. Every entry must
  include a `source` URL pointing at an RSI Comm-Link transmission.
- `src/data/faq.ts` — eight FAQ questions. Each answer should be defensible
  against the RSI Knowledge Base wording.
- `src/data/rewardsLadder.ts` was removed alongside `/rewards-ladder`.

## Verification rule (READ THIS BEFORE EDITING DATA)

Every factual claim on the site must be verifiable against one of these
authoritative sources. Do **not** treat third-party referral aggregator sites
as ground truth — they have a commercial incentive to repeat unverified
claims.

1. **Star Citizen Wiki** — `starcitizen.tools` (especially `/Referral_program`)
2. **Official RSI** — `robertsspaceindustries.com` and the RSI Knowledge Base
   at `support.robertsspaceindustries.com`
3. **Star Citizen Wiki API** — `https://api.star-citizen.wiki/api/comm-links`
   (full Comm-Link bodies as JSON; the field is `translations.en_EN`).
   This is the practical source — RSI Comm-Link pages themselves are
   JS-rendered and 403 most scrapers; the wiki API is the easy way in.
4. **Developer Tracker** — `developertracker.com/star-citizen` (CIG staff
   Spectrum activity not surfaced as Comm-Links).

Sister agent `sc-news` (defined at `o7citizen-main/.claude/agents/sc-news.md`,
copied into this project) wraps these sources for SC research/digests; copy
or symlink it into `.claude/agents/sc-news.md` for new sessions.

When a referral event Comm-Link describes only one side ("you'll get a
P-52 Merlin"), look for the sibling event-overview Comm-Link (e.g. the
"IAE 2955 About" page) — it usually documents both sides ("the new citizen
will receive…"). Quote the both-sides version.

## Tone rules

- **Recruit-perspective only.** All event/reward copy describes what the new
  player gets. Never list the recruiter's reward in the public-facing table.
- **No fabricated specifics.** If a date or reward isn't in an authoritative
  source, leave it out. Better to write less than to invent plausibly.
- **No third-person veteran content.** No "track your referrals," no "share
  your code," no "climb the ladder."

## Referral details

- **Code:** STAR-GCQJ-N6NC
- **Enlist URL:** https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC
- **Hub:** https://dayonecitizen.com
- **Bonus:** 50,000 UEC, automatic at signup with the code (no purchase
  required for the recruit's bonus). 24-hour grace period if applied
  retroactively.

## Color palette (Tailwind names)

```
charcoal      #111418
charcoalMid   #1c2128
gold          #ffd700
goldDark      #ccac00
platinum      #e8e8e8
muted         #6b7280
```

## Hosting

- Vercel project: `screferralrewards-site` (team `scottgayden-5755s-projects`)
- GitHub: `doc-flanigan/screferralrewards-site`
- Auto-deploy on push to `main`
- Production domains in Vercel: apex `screferralreward.com` is primary;
  `www.screferralreward.com` 301-redirects to it. Canonical URLs, sitemap,
  and JSON-LD must all use the apex (`SITE_URL` in `src/data/referral.ts`).

## Network Conventions

See `E:\Claude Code\sc-portfolio\SHARED_CONVENTIONS.md` for footer spec,
tone rules, commit convention, and tech stack.

## Things explicitly out of scope

- Promoting any other referral code, randomizer, or aggregator.
- Recruitment ladder content for existing backers.
- Any "make money" / "earn rewards by referring friends" copy.
- Cross-linking to a `screferralbonus.com` sister site (that brand was
  dropped — see commit `71db698`).

## Click Tracking

Added 2026-05-17. Every referral CTA click fires a background POST to `/api/log` which writes a row to the shared Google Sheet and posts an embed to the #referral-clicks Discord channel.

**Env vars required** (Vercel project settings + `.env.local`):
- `CLICK_TRACKER_SHEET_URL` — Google Apps Script web app deploy URL
- `DISCORD_CLICK_WEBHOOK_URL` — Discord channel webhook URL

**Key files:**
- `src/app/api/log/route.ts` — server-side handler (parallel Sheet + Discord calls)
- `src/components/CTAButton.tsx` — `handleClick` fires the fetch on CTA click

> **Note:** Endpoint was renamed from `/api/track-click` → `/api/log` because adblocker filter lists (EasyPrivacy, uBlock Origin) blocked the original URL pattern client-side.

### TODO: Verify end-to-end on this site
- [ ] Click CTA **with** adblocker enabled → Sheet row appears within 5s
- [ ] Click CTA **with** adblocker enabled → Discord embed appears in #referral-clicks
- [ ] Click CTA **without** adblocker → same as above

---

## SEO

**Network role:** Conversion satellite — new player referral code funnel
**Search engine:** Both

**Primary keywords:**
- "star citizen referral code"
- "rsi referral code"
- "star citizen referral rewards"
- "star citizen referral program"
- "star citizen enlist referral"

**Note:** Live domain is singular `screferralreward.com`. Do not use plural in copy or links. The plural `screferralrewards.com` 301-redirects here.

**Cross-links this site must send (body copy only):**
- → dayonecitizen.com: "New player? Get your Day One guide first"
- → freeflyevent.com: "Check if there's a Free Fly event — try the game before you buy"

**Do not:**
- Add veteran tier ladder or recruitment content — new players only
- Place cross-portfolio links in footers or link lists — editorial/body copy only
- Target new keywords without updating `E:\Claude Code\sc-portfolio\docs\seo\keyword-research.md`

**Full strategy:** `E:\Claude Code\sc-portfolio\docs\seo\README.md`

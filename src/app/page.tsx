import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import ReferralCodeBox from '@/components/ReferralCodeBox';
import HeroCarousel from '@/components/HeroCarousel';
import CountdownTimer from '@/components/CountdownTimer';
import HowItWorks from '@/components/HowItWorks';
import UecSpendGrid from '@/components/UecSpendGrid';
import EventHistoryTable from '@/components/EventHistoryTable';
import FaqAccordion from '@/components/FaqAccordion';
import SectionHeading from '@/components/SectionHeading';
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd';
import FaqJsonLd from '@/components/FaqJsonLd';
import OrgJsonLd from '@/components/OrgJsonLd';
import { REFERRAL_EVENTS } from '@/data/events';

export default function Home() {
  const currentEvent =
    REFERRAL_EVENTS.find((e) => e.status === 'live') ??
    REFERRAL_EVENTS.find((e) => e.status === 'upcoming');

  return (
    <main>
      <OrgJsonLd />
      <FaqJsonLd />
      <BreadcrumbsJsonLd items={[{ name: 'Home', url: '/' }]} />
      {/* ABOVE FOLD — referral code visible without scroll */}
      <section className="relative px-4 sm:px-6 pt-10 sm:pt-14 pb-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Star Citizen Referral Program · 2026
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            Get <span className="text-gold">50,000 UEC</span> Free —
            <br className="hidden sm:block" /> Star Citizen Referral Code
          </h1>
          <p className="text-platinum/75 text-base sm:text-lg max-w-xl mx-auto">
            Use code <span className="font-mono text-gold">STAR-GCQJ-N6NC</span> at signup to
            instantly add 50,000 UEC to your hangar. No fluff, no expired offers — works for
            any new RSI account.
          </p>

          <div className="pt-2">
            <ReferralCodeBox />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <CTAButton label="Create Account & Claim Bonus" trackingLabel="homepage-cta" />
          </div>

          <div className="mx-auto max-w-md mt-2 rounded-md border border-yellow-400/40 bg-yellow-400/5 px-4 py-3 text-sm text-yellow-200/90 flex items-start gap-2">
            <span aria-hidden>⚠️</span>
            <span>
              You have <strong>24 hours after signup</strong> to enter a referral code. Codes
              cannot be added later.
            </span>
          </div>
        </div>
      </section>

      {/* HERO CAROUSEL */}
      <section className="px-4 sm:px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <HeroCarousel />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="How It Works"
            title="Three Steps. Five Minutes. 50,000 UEC."
            subtitle="The referral bonus is automatic — no support tickets, no waiting periods. Apply the code at signup and the credits land automatically when your account is created."
          />
          <HowItWorks />
          {/* SEO cross-link: dayonecitizen */}
          <p className="text-center text-sm text-muted mt-6">
            New to Star Citizen?{' '}
            <a
              href="https://dayonecitizen.com"
              className="text-gold underline hover:text-goldDark"
              target="_blank"
              rel="noopener"
            >
              Get your Day One guide
            </a>{' '}
            before you dive in.
          </p>
        </div>
      </section>

      {/* COUNTDOWN TIMER */}
      <section className="px-4 sm:px-6 py-16 bg-charcoalMid/40 border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Bonus Event Tracker"
            title="Time Your Signup For Maximum UEC"
            subtitle="Anniversary, IAE, Invictus — RSI runs periodic bonus windows that stack on top of the standard referral reward. Standard bonus is always available."
          />
          <CountdownTimer />
          <p className="text-sm text-muted mt-3 text-center">
            Not ready to buy yet?{' '}
            <a
              href="https://freeflyevent.com"
              className="text-gold underline hover:text-goldDark"
              target="_blank"
              rel="noopener"
            >
              Check if there&apos;s a Free Fly event
            </a>{' '}
            — you can try Star Citizen before you commit.
          </p>
        </div>
      </section>

      {/* WHAT 50K UEC BUYS */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Spend Your Bonus"
            title="What 50,000 UEC Actually Gets You"
            subtitle="UEC is the in-game currency for components, weapons, gear, and consumables. 50,000 UEC is enough to outfit a starter ship and a full personal loadout."
          />
          <UecSpendGrid />
        </div>
      </section>

      {/* CURRENT EVENT */}
      {currentEvent && (
        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-3xl mx-auto bg-charcoalMid border border-gold/30 rounded-xl p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
              {currentEvent.status === 'live' ? 'Active Now' : 'Upcoming'}
            </p>
            <h3 className="font-display text-2xl text-platinum mb-2">{currentEvent.name}</h3>
            <p className="text-gold mb-3">{currentEvent.reward}</p>
            {currentEvent.note && (
              <p className="text-sm text-platinum/65 mb-5">{currentEvent.note}</p>
            )}
            <p className="text-xs text-platinum/40 mb-4">
              {/* Maintenance: edit src/data/events.ts to update event details. */}
              Edit <code className="font-mono text-platinum/60">src/data/events.ts</code> to
              keep this section current.
            </p>
            <CTAButton size="md" label="Claim Bonus Now →" trackingLabel="homepage-cta" />
          </div>
        </section>
      )}

      {/* EVENT HISTORY */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Event History"
            title="Past & Upcoming Bonus Windows"
            subtitle="A reference of recent referral bonus events. Use this to estimate when the next high-bonus window is likely."
          />
          <EventHistoryTable />
          <div className="text-center mt-8">
            <Link
              href="/event-tracker"
              className="inline-block text-sm text-gold hover:underline"
            >
              Open the full event tracker →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-4 sm:px-6 py-16 bg-charcoalMid/40 border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Quick answers about how the Star Citizen referral program works in 2026."
          />
          <FaqAccordion />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 sm:px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-platinum">
            Ready to claim your <span className="text-gold">50,000 UEC?</span>
          </h2>
          <p className="text-platinum/70">
            Code <span className="font-mono text-gold">STAR-GCQJ-N6NC</span> works on any new
            RSI account. Apply at signup and the credits land automatically when you
            register.
          </p>
          <ReferralCodeBox />
          <CTAButton trackingLabel="homepage-cta" />
        </div>
      </section>
    </main>
  );
}

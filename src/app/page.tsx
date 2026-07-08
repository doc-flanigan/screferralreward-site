import CTAButton from '@/components/CTAButton';
import ReferralCodeBox from '@/components/ReferralCodeBox';
import StaticHero from '@/components/StaticHero';
import HowItWorks from '@/components/HowItWorks';
import UecSpendGrid from '@/components/UecSpendGrid';
import FaqAccordion from '@/components/FaqAccordion';
import SectionHeading from '@/components/SectionHeading';
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd';
import FaqJsonLd from '@/components/FaqJsonLd';
import OrgJsonLd from '@/components/OrgJsonLd';
import { PageSources } from '@/components/PageSources';

export default function Home() {

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

      {/* HERO IMAGE */}
      <section className="px-4 sm:px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <StaticHero
            src="/images/hero/hero-15.jpg"
            alt="A formation of Star Citizen fighters flying over a lake at sunset"
          />
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

      {/* EVENTS POINTER */}
      <section className="px-4 sm:px-6 py-16 bg-charcoalMid/40 border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Events & Free Fly"
            title="The Bonus Never Expires. Events Just Add Extras."
            subtitle="The 50,000 UEC referral bonus is available year-round. A few times a year, RSI events layer extra perks and free-trial windows on top."
          />
          <p className="text-center text-platinum/75">
            Want to try the game free first, or see what event is running?{' '}
            <a
              href="https://freeflyevent.com"
              className="text-gold underline hover:text-goldDark"
              target="_blank"
              rel="noopener"
            >
              freeflyevent.com
            </a>{' '}
            tracks Free Fly windows and event dates day by day.
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

      <PageSources route="/" />
    </main>
  );
}

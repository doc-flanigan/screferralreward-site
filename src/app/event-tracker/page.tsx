import type { Metadata } from 'next';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import CountdownTimer from '@/components/CountdownTimer';
import EventHistoryTable from '@/components/EventHistoryTable';
import SectionHeading from '@/components/SectionHeading';
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd';
import { PageSources } from '@/components/PageSources';
import StaticHero from '@/components/StaticHero';

// FAQPage structured data — mirrors the visible "Quick answers" section.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the Star Citizen referral bonus available outside event windows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The standard 50,000 UEC referral bonus is permanent — any new RSI account created with a referral code receives it, event or no event. Event windows only layer extra rewards on top.'
      }
    },
    {
      '@type': 'Question',
      name: 'When do referral bonus events usually happen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They tend to cluster around major Star Citizen events — Invictus Launch Week in May, the Intergalactic Aerospace Expo (IAE) in November, and anniversary promotions. Exact windows are announced on the official RSI site.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I try Star Citizen for free while I wait for a bonus window?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, during Free Fly events — limited windows several times a year when anyone can play with a free RSI account. Star Citizen is not free-to-play outside those events.'
      }
    }
  ]
};

// Re-render daily so date-derived event statuses stay current without a deploy.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Star Citizen Referral Bonus Events — History & Upcoming',
  description:
    'Tracking Star Citizen referral bonus events: when bonus UEC is doubled, paired with free-fly weeks, or layered with Anniversary/IAE/Invictus promotions. Past events plus the next expected window.',
  alternates: { canonical: '/event-tracker' }
};

export default function EventTrackerPage() {
  return (
    <main>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Event Tracker', url: '/event-tracker' }
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="px-4 sm:px-6 pt-12 pb-10">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Event Tracker</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl">
            Star Citizen Referral Bonus Events
          </h1>
          <p className="text-platinum/75">
            RSI periodically boosts the standard 50,000 UEC referral bonus during major
            events. Time your signup to the next window for maximum value.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <CountdownTimer />
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-10">
        <div className="max-w-5xl mx-auto">
          <StaticHero
            src="/images/hero/hero-16.jpg"
            alt="Two Star Citizen bombers flying above golden sunset clouds"
          />
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 bg-charcoalMid/40 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Event History"
            title="Past & Upcoming Bonus Windows"
            subtitle="Reference table of recent and announced referral bonus events. Use the cadence to predict the next high-value window."
          />
          <EventHistoryTable />
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Watch The Calendar"
            title="Don&apos;t Miss The Next Bonus Window"
            subtitle="Bonus windows track the big Star Citizen events — Invictus in May, IAE in November, and anniversary promotions in between."
          />
          <div className="bg-charcoalMid border border-gold/30 rounded-xl p-6 sm:p-8 text-center">
            <p className="text-platinum/80 mb-4">
              freeflyevent.com tracks the next free-trial and event window day by day —
              the same events referral bonuses usually attach to.
            </p>
            <a
              href="https://freeflyevent.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-md border border-gold text-gold hover:bg-gold hover:text-charcoal transition-colors font-bold"
            >
              Check the event calendar →
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 bg-charcoalMid/40 border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Quick Answers"
            title="Event Questions"
            subtitle="The short version."
          />
          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((q) => (
              <div
                key={q.name}
                className="bg-charcoalMid border border-white/5 rounded-xl p-5 sm:p-6"
              >
                <h3 className="font-display text-lg text-platinum mb-2">{q.name}</h3>
                <p className="text-sm text-platinum/70 leading-relaxed">
                  {q.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-20 text-center bg-charcoalMid/40 border-t border-white/5">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-display font-bold text-3xl sm:text-4xl">
            Standard Bonus Always Available
          </h2>
          <p className="text-platinum/70">
            Even outside event windows, the 50,000 UEC referral bonus is permanent. Use code{' '}
            <span className="font-mono text-gold">STAR-GCQJ-N6NC</span> any time.
          </p>
          <CTAButton trackingLabel="event-tracker-cta" />
          <div>
            <Link href="/" className="text-sm text-platinum/60 hover:text-gold">
              ← Back to home
            </Link>
          </div>
        </div>
      </section>

      <PageSources route="/event-tracker" />
    </main>
  );
}

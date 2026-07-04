import type { Metadata } from 'next';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import CountdownTimer from '@/components/CountdownTimer';
import EventHistoryTable from '@/components/EventHistoryTable';
import SectionHeading from '@/components/SectionHeading';
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd';
import { PageSources } from '@/components/PageSources';
import { HUB_URL } from '@/data/referral';

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
            eyebrow="Set A Reminder"
            title="Don&apos;t Miss The Next Bonus Window"
            subtitle="The dayonecitizen.com network publishes a free new-citizen newsletter that flags upcoming free-fly weekends, IAE, and bonus UEC promos before they go live."
          />
          <div className="bg-charcoalMid border border-gold/30 rounded-xl p-6 sm:p-8 text-center">
            <p className="text-platinum/80 mb-4">
              Subscribe at the hub to get email reminders 48 hours before each known bonus
              event window opens.
            </p>
            <a
              href={HUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-md border border-gold text-gold hover:bg-gold hover:text-charcoal transition-colors font-bold"
            >
              Visit dayonecitizen.com →
            </a>
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

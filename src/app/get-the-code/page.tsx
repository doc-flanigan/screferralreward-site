import type { Metadata } from 'next';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import ReferralCodeBox from '@/components/ReferralCodeBox';
import SectionHeading from '@/components/SectionHeading';
import { REFERRAL_CODE } from '@/data/referral';
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd';
import { DiscordCTA } from '@/components/DiscordCTA';

export const metadata: Metadata = {
  title: `Star Citizen Referral Code ${REFERRAL_CODE} — 50,000 UEC`,
  description:
    'Step-by-step guide to applying Star Citizen referral code STAR-GCQJ-N6NC at signup. Includes the 24-hour rule, where to paste the code, and what happens next.',
  alternates: { canonical: '/get-the-code' }
};

const STEPS = [
  {
    n: '1',
    title: 'Open the RSI signup page',
    body: 'Click the CTA button below — it sends you straight to the Roberts Space Industries signup page with the referral code pre-filled.',
    note: 'If you already have an RSI account from years ago, you cannot retroactively apply a code. You need a brand-new account.'
  },
  {
    n: '2',
    title: 'Confirm STAR-GCQJ-N6NC is in the field',
    body: 'On the signup form, scroll to the "Referral Code" field. The code STAR-GCQJ-N6NC should be pre-populated — if it is missing, paste it manually.',
    note: 'The field is sometimes labelled "Recruitment Code" depending on the page version. Same field.'
  },
  {
    n: '3',
    title: 'Complete signup within 24 hours',
    body: 'Fill in your email, handle, password, and country. Submit the form. The 24-hour clock for applying a referral code starts when the account is created.',
    note: 'Use a secure password — RSI accounts hold your pledge history and any UEC you accumulate.'
  },
  {
    n: '4',
    title: 'Receive 50,000 UEC automatically',
    body: 'Per the official RSI referral program, anyone registering with a referral code automatically receives 50,000 UEC — no purchase required. The credit appears in your account once signup completes.',
    note: 'Applying the code retroactively (within the 24-hour window) is also valid, but RSI notes there may be a delay before the bonus credits. Apply at signup for instant credit.'
  },
  {
    n: '5',
    title: 'Spend or save your UEC',
    body: 'The 50,000 UEC sits in your hangar wallet. Use it at in-game shops and kiosks for components, weapons, armor, or save it as a trade float. UEC does not expire.',
    note: 'Note: actually playing the game requires a Game Package (separate purchase), or access during a Free Fly window. Your 50,000 UEC bonus is independent of either.'
  }
];

export default function GetTheCodePage() {
  return (
    <main>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Get the Code', url: '/get-the-code' }
        ]}
      />
      <section className="px-4 sm:px-6 pt-12 pb-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            How To Apply The Code
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl">
            Get the Star Citizen Referral Code:{' '}
            <span className="text-gold font-mono">STAR-GCQJ-N6NC</span>
          </h1>
          <p className="text-platinum/75">
            Five steps. The whole process takes under five minutes if you have payment ready.
          </p>
          <div className="pt-4">
            <ReferralCodeBox />
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-12">
        <div className="max-w-3xl mx-auto space-y-5">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="relative bg-charcoalMid border border-white/5 rounded-xl p-6 sm:p-8 hover:border-gold/30 transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full bg-gold text-charcoal font-display font-bold text-xl flex items-center justify-center shadow-gold">
                  {s.n}
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-xl text-platinum mb-2">{s.title}</h2>
                  <p className="text-platinum/75 leading-relaxed mb-3">{s.body}</p>
                  <div className="border-l-2 border-gold/40 pl-3 text-sm text-platinum/55 italic">
                    {s.note}
                  </div>
                  {/* SCREENSHOT PLACEHOLDER: Add /public/images/get-the-code/step-{n}.jpg */}
                  <div className="mt-4 aspect-[16/8] rounded-md border border-dashed border-white/10 bg-charcoal/60 flex items-center justify-center text-platinum/30 text-xs">
                    Screenshot placeholder — step {s.n}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 bg-charcoalMid/40 border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="What Happens Next"
            title="After You Apply The Code"
            subtitle="What to expect once your account is created and the bonus has been triggered."
          />
          <ul className="space-y-3 text-platinum/80">
            <li className="flex gap-3">
              <span className="text-gold font-bold">→</span>
              <span>
                Your account is credited with 50,000 UEC automatically. RSI notes there may
                be a brief delay if the code is applied retroactively rather than at signup.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold">→</span>
              <span>
                You can spend that UEC at any in-game shop or kiosk during your sessions —
                ship components, weapons, armor, consumables.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold">→</span>
              <span>
                If you want to actually fly, you&apos;ll either pledge for a Game Package or
                wait for an RSI Free Fly window. Either way, your 50,000 UEC bonus is
                already yours.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold">→</span>
              <span>
                Download the RSI Launcher from your account dashboard, install Star Citizen,
                and you&apos;re ready to fly when you have Game Package access.
              </span>
            </li>
          </ul>
          <div className="mt-10 text-center">
            <CTAButton trackingLabel="get-code-cta" />
            <DiscordCTA />
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-12 text-center">
        <Link href="/" className="text-sm text-gold hover:underline">
          ← Back to home
        </Link>
      </section>
    </main>
  );
}

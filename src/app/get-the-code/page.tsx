import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';
import ReferralCodeBox from '@/components/ReferralCodeBox';
import SectionHeading from '@/components/SectionHeading';
import StaticHero from '@/components/StaticHero';
import { REFERRAL_CODE } from '@/data/referral';
import BreadcrumbsJsonLd from '@/components/BreadcrumbsJsonLd';
import { DiscordCTA } from '@/components/DiscordCTA';
import { PageSources } from '@/components/PageSources';
import { VERIFIED_DISPLAY } from '@/data/verification';

// FAQPage structured data — mirrors the visible "Quick answers" section.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where do I enter the Star Citizen referral code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the Referral Code field on the RSI signup form. Paste STAR-GCQJ-N6NC there and a "Referral code successfully applied" confirmation appears before you finish creating the account.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I add a referral code after creating my account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only within about 24 hours of account creation, via your account settings. After that window the code can no longer be applied, so enter it at signup if you can.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do I need to buy anything to get the 50,000 UEC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The bonus credits when you create a free RSI account with a referral code — no purchase required. Playing the game itself requires a Game Package or a Free Fly event, but the bonus is yours either way.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much is the referral bonus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '50,000 UEC — the persistent in-game currency, spendable at in-game shops on components, weapons, armor, and gear.'
      }
    }
  ]
};

export const metadata: Metadata = {
  title: `Referral Code ${REFERRAL_CODE} — 50,000 UEC`,
  description:
    'Step-by-step guide to applying Star Citizen referral code STAR-GCQJ-N6NC at signup. Includes the 24-hour rule, where to paste the code, and what happens next.',
  alternates: { canonical: '/get-the-code' }
};

type Step = {
  n: string;
  title: string;
  body: string;
  note: string;
  shot?: { src: string; alt: string; caption: string };
};

const STEPS: Step[] = [
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
    note: 'The field is sometimes labelled "Recruitment Code" depending on the page version. Same field.',
    shot: {
      src: '/images/rsi-signup-referral-code-field.jpg',
      alt: 'Star Citizen RSI signup form with the Referral Code field highlighted, showing code STAR-GCQJ-N6NC successfully applied.',
      caption: 'The Referral Code field on the RSI signup page, with the code applied.'
    }
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

// HowTo structured data — derived directly from the visible STEPS array so
// the schema can never drift from the rendered walkthrough.
const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: `How to Apply Star Citizen Referral Code ${REFERRAL_CODE}`,
  description:
    'Five-step walkthrough for applying a Star Citizen referral code at signup and receiving the 50,000 UEC bonus.',
  totalTime: 'PT5M',
  step: STEPS.map((s) => ({
    '@type': 'HowToStep',
    position: Number(s.n),
    name: s.title,
    text: s.body
  }))
};

export default function GetTheCodePage() {
  return (
    <main>
      <BreadcrumbsJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Get the Code', url: '/get-the-code' }
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
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
          <p className="text-sm font-semibold text-gold">
            Verified working {VERIFIED_DISPLAY} — checked on the live RSI
            signup page. Re-checked monthly.
          </p>
          <p className="text-sm text-platinum/70">
            This is <span className="text-gold">Doc_Flanigan&apos;s</span> code — a real
            Star Citizen player who runs this site and puts his name on it.
          </p>
          <p className="text-sm text-platinum/60">
            The signup button pre-fills this code for you — no typing needed.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-12">
        <div className="max-w-5xl mx-auto">
          <StaticHero
            src="/images/hero/hero-17.jpg"
            alt="An F8C Lightning fighter on a landing pad in a hazy Star Citizen city"
          />
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
                  {s.shot && (
                    <figure className="mt-4 overflow-hidden rounded-md border border-white/10">
                      <Image
                        src={s.shot.src}
                        alt={s.shot.alt}
                        width={1200}
                        height={1000}
                        className="h-auto w-full"
                      />
                      <figcaption className="bg-charcoal/60 px-3 py-2 text-xs text-platinum/50">
                        {s.shot.caption}
                      </figcaption>
                    </figure>
                  )}
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

      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Quick Answers"
            title="Referral Code Questions"
            subtitle="The short version of everything above."
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
          <p className="text-center text-sm text-muted mt-8">
            Want the full walkthrough with screenshots?{' '}
            <a
              href="https://dayonecitizen.com/referral-code"
              className="text-gold underline hover:text-goldDark"
              target="_blank"
              rel="noopener"
            >
              See the step-by-step referral guide on dayonecitizen.com
            </a>
            .
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-12 text-center">
        <Link href="/" className="text-sm text-gold hover:underline">
          ← Back to home
        </Link>
      </section>

      <PageSources route="/get-the-code" />
    </main>
  );
}

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-charcoalMid mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-3 text-sm">
        <div>
          <h3 className="font-display font-bold text-gold mb-3 uppercase tracking-widest text-xs">
            Fan Disclaimer
          </h3>
          <p className="text-platinum/70 leading-relaxed">
            screferralreward.com is an unofficial fan site. Star Citizen® and Roberts Space
            Industries® are trademarks of Cloud Imperium Rights LLC. This site is not endorsed
            by or affiliated with the Cloud Imperium group of companies. All ship names, logos,
            and game content are the property of their respective owners. Made by a backer, for
            backers.
          </p>
        </div>
        <div>
          <h3 className="font-display font-bold text-gold mb-3 uppercase tracking-widest text-xs">
            Affiliate Disclosure
          </h3>
          <p className="text-platinum/70 leading-relaxed">
            Affiliate disclosure: This site uses Star Citizen referral code STAR-GCQJ-N6NC. Referral code owners may receive an in-game bonus if you sign up. Your rewards are not affected.
          </p>
          <p className="mt-3 text-platinum/70 leading-relaxed">
            The code belongs to Doc_Flanigan, the real Star Citizen player who
            runs this site — disclosed openly and verified monthly.
          </p>
        </div>
        <div>
          <h3 className="font-display font-bold text-gold mb-3 uppercase tracking-widest text-xs">
            Made by the Community
          </h3>
          <div className="flex items-start gap-3">
            <Image
              src="/images/made-by-community.png"
              alt="Star Citizen — Made by the Community badge"
              width={120}
              height={60}
              className="rounded bg-charcoal p-2"
            />
          </div>
          <p className="mt-4 text-platinum/50 text-xs">
            Part of the dayonecitizen.com fan-site network.
          </p>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-xs text-platinum/40 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} screferralreward.com — run by Doc_Flanigan</span>
          <span>o7 ✊ — fly safe, citizen.</span>
        </div>
      </div>
    </footer>
  );
}

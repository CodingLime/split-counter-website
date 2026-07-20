import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=app.splitcounter";
const APP_STORE_URL = "https://apps.apple.com/us/app/split-counter-mtg-utility/id6446151892";

const features = [
  {
    name: 'From commander damage to poison counters',
    accent: 'blue',
    description:
      "Track your life total in any format, from 1v1 to a full commander pod. Log commander damage under the matching opponent colour and it's deducted from your life total automatically — partner commanders included. And of course, there's a spot for those nasty poison counters too.",
    image: <StaticImage src="../images/screenshots/9-gameplay-4p-dmg.png" alt="Split Counter tracking commander damage in a four player game" className="h-full w-full object-cover object-center" />
  },
  {
    name: 'Flip coins and roll dice',
    accent: 'amber',
    description:
      "Need a coin flip (or five) for those sweet Krark, the Thumbless triggers? We have you covered. Quick dice rolls from a D4 up to a D20 are built right in, so you never skip a beat digging through your bag mid-game.",
    image: <StaticImage src="../images/screenshots/7-in-game-settings.png" alt="Split Counter in-game tools for coin flips and dice rolls" className="h-full w-full object-cover object-center" />
  },
  {
    name: 'Search cards, in and out of games',
    accent: 'amber',
    description:
      "Look up any card straight from the home screen — or without ever leaving your game. Check oracle text, format legality, prices on Cardmarket and TCGplayer, and most importantly the official rulings, so you can settle interactions at the table from one place.",
    image: <StaticImage src="../images/screenshots/6-search-in-game.jpg" alt="Searching for a card during a game in Split Counter" className="h-full w-full object-cover object-center" />
  },
  {
    name: 'Games with up to 6 players',
    accent: 'blue',
    description:
      "From a 1v1 duel to a six player free-for-all, Split keeps track of the whole table. Multiple layouts for four players and up mean the app mirrors everyone's real position at the table — with commander damage and poison counters for every seat. Nobody gets left out.",
    image: <StaticImage src="../images/screenshots/8-gameplay-6p.png" alt="Split Counter six player game layout" className="h-full w-full object-cover object-center" />
  },
];

const StoreButtons = ({ dark = false }: { dark?: boolean }) => (
  <div className="flex flex-col gap-3 sm:flex-row">
    <a
      target="_blank"
      rel="noreferrer"
      href={PLAY_STORE_URL}
      className={
        dark
          ? "flex items-center justify-center gap-3 rounded-xl bg-paper px-6 py-3 transition-transform hover:-translate-y-0.5"
          : "flex items-center justify-center gap-3 rounded-xl bg-ink px-6 py-3 transition-transform hover:-translate-y-0.5"
      }
    >
      <StaticImage src="../images/play-store.png" alt="" className="w-6" />
      <span className="text-left leading-tight">
        <span className={dark ? "block text-[0.65rem] uppercase tracking-widest text-ink-muted" : "block text-[0.65rem] uppercase tracking-widest text-paper/60"}>Get it on</span>
        <span className={dark ? "block text-sm font-semibold text-ink" : "block text-sm font-semibold text-paper"}>Google Play</span>
      </span>
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      href={APP_STORE_URL}
      className={
        dark
          ? "flex items-center justify-center gap-3 rounded-xl bg-paper px-6 py-3 transition-transform hover:-translate-y-0.5"
          : "flex items-center justify-center gap-3 rounded-xl bg-ink px-6 py-3 transition-transform hover:-translate-y-0.5"
      }
    >
      <StaticImage src="../images/apple-logo.png" alt="" className={dark ? "w-6 invert" : "w-6"} />
      <span className="text-left leading-tight">
        <span className={dark ? "block text-[0.65rem] uppercase tracking-widest text-ink-muted" : "block text-[0.65rem] uppercase tracking-widest text-paper/60"}>Download on the</span>
        <span className={dark ? "block text-sm font-semibold text-ink" : "block text-sm font-semibold text-paper"}>App Store</span>
      </span>
    </a>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Diagonal split background — echoes the two halves of the app icon */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #eef7fc 0%, #eef7fc 50%, #eef1f4 50%, #eef1f4 100%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, transparent 49.85%, rgba(7,23,34,0.12) 49.85%, rgba(7,23,34,0.12) 50.15%, transparent 50.15%)' }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="max-w-xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-split-blue-500">
            The MTG table companion
          </p>
          <h1 className="mt-4 font-montserrat text-5xl font-bold tracking-tight text-ink sm:text-6xl">
            Every counter.
            <br />
            <span className="text-split-blue-500">Every game</span>
            <span className="text-split-amber-500">.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink-muted">
            Track life totals, commander damage (partners included!) and poison counters — then look up
            prices and rulings without leaving the table.
          </p>
          <div className="mt-10" id="download">
            <StoreButtons />
          </div>
        </div>
        <div className="relative mx-auto flex max-w-full items-end justify-center gap-4 sm:gap-6">
          <div className="hidden aspect-[1179/2556] w-40 -rotate-3 overflow-hidden rounded-3xl border border-ink/10 shadow-phone sm:block lg:w-44">
            <StaticImage
              src="../images/screenshots/2-gameplay-2p.png"
              alt="Split Counter two player game"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-[1179/2556] w-40 -translate-y-6 overflow-hidden rounded-3xl border border-ink/10 shadow-phone sm:w-48 lg:w-52">
            <StaticImage
              src="../images/screenshots/1-main.png"
              alt="Split Counter home screen"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-[1179/2556] w-36 rotate-3 overflow-hidden rounded-3xl border border-ink/10 shadow-phone sm:w-40 lg:w-44">
            <StaticImage
              src="../images/screenshots/3-gameplay-4p.png"
              alt="Split Counter four player game"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureSection = () => {
  return (
    <section className="bg-paper py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl sm:mx-auto sm:text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-split-amber-600">Features</p>
          <h2 className="mt-3 font-montserrat text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            The best way to track your games
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink-muted">
            From your pod's life totals to rolling dice and checking rulings mid-game.
            And more to come.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col gap-8 rounded-3xl border border-ink/5 bg-white p-8 sm:flex-row sm:items-center"
            >
              <div className="mx-auto aspect-[1179/2556] w-40 flex-none overflow-hidden rounded-2xl border border-ink/10 sm:mx-0">
                {feature.image}
              </div>
              <div>
                <div
                  className={
                    feature.accent === 'blue'
                      ? "h-1 w-10 rounded-full bg-split-blue-500"
                      : "h-1 w-10 rounded-full bg-split-amber-500"
                  }
                />
                <h3 className="mt-4 font-montserrat text-lg font-bold leading-7 text-ink">{feature.name}</h3>
                <p className="mt-3 text-base leading-7 text-ink-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #003959 0%, #071722 55%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, transparent 49.8%, rgba(255,169,0,0.5) 49.8%, rgba(255,169,0,0.5) 50.05%, transparent 50.05%)' }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-10 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-24">
        <div>
          <h2 className="font-montserrat text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            Ready to start a game?
          </h2>
          <p className="mt-3 text-lg text-split-amber-400">
            Download Split Counter and rule the table.
          </p>
        </div>
        <StoreButtons dark />
      </div>
    </section>
  );
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="bg-paper">
      <NavBar />
      <main>
        <HeroSection />
        <FeatureSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <html lang="en" />
      <meta name="description" content={`Track your games like never before. From your life total, to commander damage (partners included!), to search about cards you want to know prices or rulings.`} />
      <title>Split Counter App</title>
    </>
  );
};

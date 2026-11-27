import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=app.splitcounter";
const APP_STORE_URL = "https://apps.apple.com/us/app/split-counter-mtg-utility/id6446151892";

const poster = "h-full w-full object-cover object-center";

const features = [
  {
    name: 'Your commanders on the table',
    accent: 'blue',
    description:
      "Choose each player's commander, and partner, from the game menu. Their art fills that player's panel behind the life total, so everyone can see who's who at a glance.",
    image: <StaticImage src="../images/screenshots/02-board-commander-art.png" alt="Four player game with each player's commander art behind their life total" className={poster} />
  },
  {
    name: 'Pick from every artwork',
    accent: 'amber',
    description:
      "Prefer the Secret Lair version? Pick from any of your commander's printed artworks, straight from the game menu.",
    image: <StaticImage src="../images/screenshots/05-commander-artwork-picker.png" alt="Commander artwork picker showing every printed artwork of a card" className={poster} />
  },
  {
    name: 'A player panel built for Commander',
    accent: 'amber',
    description:
      "Life sits in the middle. Swipe one way for poison and energy, the other way for commander damage, tracked per opponent with partners included. Badges show what's being tracked and turn to warning and lethal colours as a player gets close to losing.",
    image: <StaticImage src="../images/screenshots/03b-counters-default-theme.png" alt="Player panels showing poison, energy and commander damage counters" className={poster} />
  },
  {
    name: 'Pick up where you left off',
    accent: 'blue',
    description:
      "Games save as you play. Close the app mid-game, and Home shows your unfinished game with its setup and when you last played. Tap to continue.",
    image: <StaticImage src="../images/screenshots/01-home-continue-game.png" alt="Home screen with a Continue Game card for an unfinished game" className={poster} />
  },
  {
    name: 'Search cards without leaving the game',
    accent: 'blue',
    description:
      "Look up any card from Home or mid-game without leaving the board. Star your favourite cards, sort them into lists of your own, and rerun recent searches in a tap.",
    image: <StaticImage src="../images/screenshots/08b-in-game-search-nicol-bolas.png" alt="Searching for Nicol Bolas from the in-game search sheet" className={poster} />
  },
  {
    name: 'Legality and prices for every format',
    accent: 'amber',
    description:
      "Card details with oracle text, official rulings, prices and every print. Legality covers all 23 formats, with the most common shown first, so you can settle questions at the table.",
    image: <StaticImage src="../images/screenshots/10-card-legality-prices.png" alt="Card details showing format legality and prices" className={poster} />
  },
  {
    name: 'Make the board yours with themes',
    accent: 'amber',
    description:
      "Choose Classic, Gradient, Midnight or Pattern for the game board, and use the Color Order editor to decide which player gets which colour.",
    image: <StaticImage src="../images/screenshots/11-board-themes.png" alt="Game board theme picker with Gradient, Midnight, Pattern and Classic" className={poster} />
  },
  {
    name: 'Room for up to six players',
    accent: 'blue',
    description:
      "From a 1v1 duel to a six player free-for-all, with more than one layout for each player count so the app mirrors where everyone sits. And every player can tap, hold and swipe at the same time, so nobody waits their turn.",
    image: <StaticImage src="../images/screenshots/13b-six-players-default-theme.png" alt="Six player game layout" className={poster} />
  },
];

const whatsNew = [
  { name: 'Games that save themselves', description: 'Continue an unfinished game from Home, with its setup and when you last played.' },
  { name: 'Commander art', description: "Each player's commander, and partner, fills their panel. Pick any of the card's artworks." },
  { name: 'A new player panel', description: 'Swipe for poison, energy and commander damage, with warning and lethal badges.' },
  { name: 'Everyone at once', description: 'Every player can now tap, hold and swipe at the same time.' },
  { name: 'Board themes', description: 'Classic, Gradient, Midnight or Pattern, plus the new Color Order editor.' },
  { name: 'Life History', description: "Every player's life changes are logged, including who dealt commander damage." },
  { name: 'A redesigned game menu', description: 'Dice, who goes first, card search, life history and commanders, all one tap away.' },
  { name: 'Favorites, lists and search history', description: 'Star cards, sort them into lists, and rerun recent searches.' },
];

const extras = [
  { name: 'Life History', description: "A log of every player's life changes, including who dealt commander damage." },
  { name: 'Dice, coins and who goes first', description: 'Roll a D4 up to a D20, flip a coin, or let the app pick who starts.' },
  { name: 'Quick-start buttons', description: 'Four buttons on Home that you set up yourself: player count, starting life and layout.' },
  { name: 'Restart in one tap', description: 'Run it back without setting the table up again.' },
  { name: 'Share any card', description: "Send a card's image, details or rulings to your playgroup." },
  { name: 'Light or dark', description: 'The app follows light or dark mode, or your system setting.' },
  { name: 'Hold to change faster', description: 'Tap to change life by 1, or hold to change it faster.' },
  { name: 'A guided tour', description: 'New to Split Counter? A short tour walks you through Home and your first game.' },
];

const StoreButtons = ({ dark = false }: { dark?: boolean }) => (
  <div className="flex flex-col gap-3 sm:inline-grid sm:grid-cols-2">
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
      <StaticImage src="../images/play-store.png" alt="" className={dark ? "w-6 invert" : "w-6"} />
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
          <a
            href="#whats-new"
            className="inline-flex items-center gap-2 rounded-full border border-split-amber-300 bg-split-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-split-amber-800 transition-colors hover:bg-split-amber-100"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-split-amber-500" />
            Split Counter 2.0 is here
          </a>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-split-blue-500">
            The MTG table companion
          </p>
          <h1 className="mt-4 font-montserrat text-5xl font-bold tracking-tight text-ink sm:text-6xl">
            Every counter.
            <br />
            <span className="text-split-blue-500">Every game</span>
            <span className="text-split-amber-500">.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink-muted">
            Track life, poison, energy and commander damage for 2 to 6 players, with your commander's
            art behind each player and games that save as you play. Then look up prices and rulings
            without leaving the table.
          </p>
          <div className="mt-10" id="download">
            <StoreButtons />
          </div>
        </div>
        <div className="relative mx-auto flex max-w-full items-end justify-center gap-4 sm:gap-6">
          <div className="hidden aspect-[1080/2424] w-40 -rotate-3 overflow-hidden rounded-3xl border border-ink/10 shadow-phone sm:block lg:w-44">
            <StaticImage
              src="../images/screenshots/03b-counters-default-theme.png"
              alt="Poison, energy and commander damage counters"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="aspect-[1080/2424] w-44 -translate-y-6 overflow-hidden rounded-3xl border border-ink/10 shadow-phone sm:w-52 lg:w-56">
            <StaticImage
              src="../images/screenshots/02-board-commander-art.png"
              alt="Four player game with commander art behind each life total"
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
          </div>
          <div className="aspect-[1080/2424] w-36 rotate-3 overflow-hidden rounded-3xl border border-ink/10 shadow-phone sm:w-40 lg:w-44">
            <StaticImage
              src="../images/screenshots/01-home-continue-game.png"
              alt="Home screen with a Continue Game card"
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
            From your pod's life totals and commander damage to checking rulings mid-game,
            all in one app built for Commander.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col gap-8 rounded-3xl border border-ink/5 bg-white p-8 sm:flex-row sm:items-center"
            >
              <div className="mx-auto aspect-[1080/2424] w-48 flex-none overflow-hidden rounded-2xl border border-ink/10 shadow-phone sm:mx-0 sm:w-44">
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

const WhatsNewSection = () => {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-28" id="whats-new">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, #062c42 0%, #071722 60%)' }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-split-amber-400">What's new in 2.0</p>
          <h2 className="mt-3 font-montserrat text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            Our biggest update yet
          </h2>
          <p className="mt-5 text-lg leading-8 text-paper/70">
            A rebuilt game board, games that save themselves, and your commanders on the table.
            Plus faster performance, lower memory use and plenty of fixes.
          </p>
        </div>
        <dl className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {whatsNew.map((item, i) => (
            <div key={item.name} className="border-t border-paper/10 pt-6">
              <dt className="flex items-center gap-3 font-montserrat text-base font-bold text-paper">
                <span
                  aria-hidden="true"
                  className={i % 2 === 0 ? "h-2 w-2 flex-none rounded-full bg-split-blue-400" : "h-2 w-2 flex-none rounded-full bg-split-amber-500"}
                />
                {item.name}
              </dt>
              <dd className="mt-2 text-sm leading-6 text-paper/60">{item.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

const ExtrasSection = () => {
  return (
    <section className="border-t border-ink/5 bg-paper-deep/50 py-24 sm:py-28" id="more">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl sm:mx-auto sm:text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-split-blue-500">And there's more</p>
          <h2 className="mt-3 font-montserrat text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Made for your table
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {extras.map((item, i) => (
            <div key={item.name} className="rounded-2xl border border-ink/5 bg-white p-6">
              <div className={i % 2 === 0 ? "h-1 w-8 rounded-full bg-split-blue-500" : "h-1 w-8 rounded-full bg-split-amber-500"} />
              <h3 className="mt-4 font-montserrat text-base font-bold text-ink">{item.name}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted">{item.description}</p>
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
        <WhatsNewSection />
        <FeatureSection />
        <ExtrasSection />
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
      <meta name="description" content={`Split Counter is a life counter for Magic: The Gathering and Commander. Track life, poison, energy and commander damage for 2 to 6 players, with commander art, saved games and Scryfall card search.`} />
      <title>Split Counter App</title>
    </>
  );
};

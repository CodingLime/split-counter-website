import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/#features' },
  { name: 'Blog', href: '#' },
];

const features = [
  {
    name: 'Track everything from commander damage to poison counters',
    description:
      'Keep track of your life points, be it in a 1v1 game, commander game, anything. Talking about commander, keep track of that too! Add de commander damage on the respective enemy colors, and it will reduce de same amount from your life points. Does an opponent have partner commanders ? You can also keep track of that too. And those nasty poison counters ? Of course we have a spot to keep track of them too!',
    image: <StaticImage src="../images/screenshots/9-gameplay-4p-dmg.png" alt="" className="h-full w-full object-cover object-center" />
  },
  {
    name: 'Flip coins and roll dices',
    description:
      'Need to flip a coin or more for those sweet Krark, the Thumbless triggers ? We have you covered! Or How about rolling some dice quickly ? Be it form a D4 to a D20 ? We have all of them, never skip a beat looking for them, there are right here in your app!',
    image: <StaticImage src="../images/screenshots/7-in-game-settings.png" alt="" className="h-full w-full object-cover object-center" />
  },
  {
    name: 'Search for cards, both in and out of games',
    description:
      'Ever wanted to search about a card quickly ? Just open the app and at the bottom right from the start you can do that. Or how about during a game ? We have that too! See info about oracle text, in what formats a card is legal, prices on cardmarket or TCGplayer, and more important, see ruling information about the card, so you can clear up interactions during your games, all from one place!',
    image: <StaticImage src="../images/screenshots/6-search-in-game.jpg" alt="" className="h-full w-full object-cover object-center" />
  },
  {
    name: 'Track games up to 6 Players',
    description:
      "Be it from a 1v1 game to a 6 player game, Split helps you keep track of all those games! And even with multiple designs for 4 players and up, so Split reprents accurately all your positions on the table. And be it 1v1 or 6 players, you can track always their commander damage, poison counters, etc. Don't leave anyone out with Split!",
    image: <StaticImage src="../images/screenshots/8-gameplay-6p.png" alt="" className="h-full w-full object-cover object-center" />
  },
];

const HeroSection = () => {
  return (
    <div className="relative overflow-y-clip overflow-x-clip lg:-mb-12 bg-white">
      <div className="pt-16 pb-96 sm:pt-20 sm:pb-40 lg:pt-20 lg:pb-48">
        <div className="relative mx-auto max-w-6xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-sm">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Split Counter
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              {"Track your games like never before. From your life total, to commander damage (partners included!), to search about cards you want to know prices or rulings."}
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none -mb-2 lg:absolute lg:inset-y-0 lg:-mx-auto lg:w-10/12 lg:max-w-6xl"
              >
                <div className="absolute transform mt-20 sm:-mt-20 sm:left-52 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/4 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    {/* 2 LEFT */}
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 -mt-72 sm:mt-0 lg:-mt-32">
                      <div className="h-full w-44 overflow-hidden rounded-lg mt-0 sm:-mt-64 lg:mt-0 sm:opacity-0 lg:opacity-100">
                        <StaticImage
                          src="../images/screenshots/3-gameplay-4p.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-full w-44 overflow-hidden rounded-lg">
                        <StaticImage
                          src="../images/screenshots/2-gameplay-2p.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    {/* 3 MIDDLE */}
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 sm:mt-20 lg:mt-32">
                      <div className="h-full w-44 overflow-hidden rounded-lg">
                        <StaticImage
                          src="../images/screenshots/1-main.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-full w-44 overflow-hidden rounded-lg">
                        <StaticImage
                          src="../images/screenshots/6-search-in-game.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-full w-44 overflow-hidden rounded-lg">
                        <StaticImage
                          src="../images/screenshots/5-card-detail-counterbalance.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    {/* 2 RIGHT */}
                    <div className="grid flex-shrink-0 grid-cols-1 custom-margin-top gap-y-6 lg:gap-y-8 sm:-mt-52 lg:-mt-32">
                      <div className="h-full w-44 overflow-hidden rounded-lg">
                        <StaticImage
                          src="../images/screenshots/7-in-game-settings.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-full w-44 overflow-hidden rounded-lg">
                        <StaticImage
                          src="../images/screenshots/4-search-outside-game.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=app.splitcounter"
                className="inline-block mt-2 mr-2 rounded-md border border-transparent bg-split-blue py-3 px-6 text-center font-medium text-white hover:bg-gray-700"
              >
                {'Download Android'}
              </a>
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/split-counter-mtg-utility/id6446151892"
                className="inline-block mt-2 rounded-md border border-transparent bg-split-blue py-3 px-10 text-center font-medium text-white hover:bg-gray-700"
              >
                {'Download iOS' + ' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSectionFlex = () => {
  return (
    <div className="relative overflow-y-clip overflow-x-clip  bg-white">

    </div>
  );
};

const FeatureSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 id="features" className="text-xl font-semibold leading-8 text-split-blue">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">The best way to track your games</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            From tracking your pods life totals, to rolling dices and searching for cards to know about their rullings. And more to come...
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                {/* <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-split-blue text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div> */}
                {/* {feature.image} */}
                <div className="h-96 w-44 overflow-hidden rounded-lg mt-0 mx-auto sm:mt-0 md:mx-auto lg:mt-0 lg:opacity-100">
                  {feature.image}
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CTA = () => {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block text-white">Ready to start a game?</span>
          <span className="block text-split-yellow">Download the Split App now!</span>
        </h2>
        <div className="mt-8 sm:flex justify-center lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=app.splitcounter"
              className="inline-block mt-2 mr-2 rounded-md border border-transparent bg-split-yellow py-3 px-6 text-center font-medium text-black hover:bg-gray-200"
            >
              {'Download Android'}
            </a>
          </div>
          <div className="sm:ml-3 inline-flex rounded-md shadow">
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/split-counter-mtg-utility/id6446151892"
              className="inline-block mt-2 rounded-md border border-transparent bg-split-yellow py-3 px-10 text-center font-medium text-black hover:bg-gray-300"
            >
              {'Download iOS' + ' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const IndexPage: React.FC<PageProps> = () => {

  return (
    <div className="isolate bg-white">
      <NavBar />
      <main className="p-5 sm:p-10 lg:p-20">
        <HeroSection />
        <FeatureSection />
        <CTA />
      </main>
      <footer>
        <Footer />
      </footer>
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

export const onRenderBody = ({ setHtmlAttributes }: any) => {
  setHtmlAttributes({ lang: "en" });
};
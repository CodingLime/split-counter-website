import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { StaticImage } from 'gatsby-plugin-image';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Download', href: '#' },
  { name: 'Blog', href: '#' },
];

const HeroSection = () => {
  return (
    <div className="relative overflow-y-clip overflow-x-clip bg-white">
      <div className="pt-16 pb-80 sm:pt-20 sm:pb-40 lg:pt-20 lg:pb-48">
        <div className="relative mx-auto max-w-6xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-sm">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Your life counter app
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Dolor voluptas minus voluptate et porro veritatis. Est et aut dolorum labore qui tenetur fugiat quia.…
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
                      <div className="h-full w-44 overflow-hidden rounded-lg opacity-100">
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
                href="#"
                className="inline-block mt-2 mr-2 rounded-md border border-transparent bg-gray-800 py-3 px-6 text-center font-medium text-white hover:bg-gray-700"
              >
                Download Android
              </a>
              <a
                href="#"
                className="inline-block mt-2 rounded-md border border-transparent bg-gray-800 py-3 px-8 text-center font-medium text-white hover:bg-gray-700"
              >
                Download iOS
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

const IndexPage: React.FC<PageProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="isolate bg-white">
      <div className="pt-12 mx-auto max-w-7xl">
        <div>
          <nav className="flex mx-10 h-20 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-initial" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Split Counter App</span>
                <StaticImage className="w-24" src="../images/icon-no-bg.png" alt="Slip counter app logo" />
              </a>
            </div>
            <div className="flex sm:hidden lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden sm:flex sm:flex-auto sm:gap-x-12 lg:flex ml-16 sm:ml-8 lg:min-w-0 lg:flex-auto lg:justify-start lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-semibold text-lg text-gray-900 hover:text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
            {/* <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Feeling cute, might delete later
              </a>
            </div> */}
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 sm:hidden lg:hidden">
              <div className="flex mx-10 h-20 items-center justify-between">
                <div className="flex">
                  <a href="#" className="-m-1.5 mt-8 p-1.5">
                    <span className="sr-only">Split Counter App</span>
                    <StaticImage className="w-24" src="../images/icon-no-bg.png" alt="Slip counter app logo" />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-20 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6 mx-10">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-1 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
      <main className="p-5 sm:p-10 lg:p-20" /* style={pageStyles} */>
        <HeroSection />
      </main>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

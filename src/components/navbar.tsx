import * as React from "react";
import type { HeadFC } from "gatsby";
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { StaticImage } from 'gatsby-plugin-image';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    /* { name: 'Blog', href: '#' }, */
];

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="isolate bg-white">
            <nav className="pt-12 mx-auto max-w-7xl">
                <div>
                    <nav className="flex mx-8 sm:mx-10 h-20 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-initial" aria-label="Global">
                            <a href="/" className="-m-1.5 p-1.5">
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
                    </nav>
                    <Dialog as="div" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
                        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 sm:hidden lg:hidden">
                            <div className="flex mx-10 h-20 items-center justify-between">
                                <div className="flex">
                                    <a href="#" className="-m-1.5 -ml-9 mt-11 p-1.5">
                                        <span className="sr-only">Split Counter App</span>
                                        <StaticImage className="w-24" src="../images/icon-no-bg.png" alt="Slip counter app logo" />
                                    </a>
                                </div>
                                <div className="flex">
                                    <button
                                        type="button"
                                        className=" mt-11 ml-56 inline-flex items-center justify-center rounded-md p-5 text-gray-700"
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
            </nav>
        </div>
    );
};

export default NavBar;

export const Head: HeadFC = () => <title>Split Counter App</title>;

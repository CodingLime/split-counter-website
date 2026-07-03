import * as React from "react";
import type { HeadFC } from "gatsby";
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { StaticImage } from 'gatsby-plugin-image';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
];

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 border-b border-ink/5 bg-paper/80 backdrop-blur-md">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Global">
                <a href="/" className="flex items-center gap-2.5">
                    <span className="sr-only">Split Counter App</span>
                    <StaticImage className="w-9" src="../images/icon-no-bg.png" alt="Split Counter app logo" />
                    <span className="font-montserrat text-lg font-bold tracking-tight text-ink">
                        Split<span className="text-split-blue-500">Counter</span>
                    </span>
                </a>
                <div className="hidden items-center gap-8 sm:flex">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold text-ink-muted transition-colors hover:text-ink">
                            {item.name}
                        </a>
                    ))}
                    <a
                        href="/#download"
                        className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-split-blue-500"
                    >
                        Get the app
                    </a>
                </div>
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-ink sm:hidden"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </nav>
            <Dialog as="div" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
                <Dialog.Panel className="fixed inset-0 z-50 overflow-y-auto bg-paper px-4 py-2 sm:hidden">
                    <div className="flex h-16 items-center justify-between px-2">
                        <a href="/" className="flex items-center gap-2.5" onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">Split Counter App</span>
                            <StaticImage className="w-9" src="../images/icon-no-bg.png" alt="Split Counter app logo" />
                            <span className="font-montserrat text-lg font-bold tracking-tight text-ink">
                                Split<span className="text-split-blue-500">Counter</span>
                            </span>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-ink"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 space-y-1 px-2">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block rounded-lg px-3 py-2.5 text-base font-semibold text-ink hover:bg-paper-deep"
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="/#download"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-4 block rounded-lg bg-ink px-3 py-2.5 text-center text-base font-semibold text-paper"
                        >
                            Get the app
                        </a>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default NavBar;

export const Head: HeadFC = () => <title>Split Counter App</title>;

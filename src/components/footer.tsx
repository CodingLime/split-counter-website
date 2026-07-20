import React from "react";
import type { HeadFC } from "gatsby";
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {

    return (
        <footer className="border-t border-paper/10 bg-ink">
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
                    <a href="/" className="flex items-center gap-2.5">
                        <StaticImage className="w-9" src="../images/icon-no-bg.png" alt="Split Counter app logo" />
                        <span className="font-montserrat text-lg font-bold tracking-tight text-paper">
                            Split<span className="text-split-amber-500">Counter</span>
                        </span>
                    </a>
                    <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-paper/70">
                        <a href="/#features" className="transition-colors hover:text-paper">Features</a>
                        <a href="/#download" className="transition-colors hover:text-paper">Download</a>
                        <Link to={"/privacy-policy"} className="transition-colors hover:text-paper">Privacy Policy</Link>
                        <Link to={"/terms-and-conditions"} className="transition-colors hover:text-paper">Terms &amp; Conditions</Link>
                    </nav>
                </div>
                <div className="mt-12 space-y-4 border-t border-paper/10 pt-8 text-center text-xs leading-5 text-paper/40 md:text-left">
                    <p>{"Split Counter App is not affiliated with, endorsed, sponsored, or specifically approved by Wizards of the Coast LLC. Split Counter App may use the trademarks and other intellectual property of Wizards of the Coast LLC, which is permitted under Wizards' Fan Site Policy. MAGIC: THE GATHERING® is a trademark of Wizards of the Coast. For more information about Wizards of the Coast or any of Wizards' trademarks or other intellectual property, please visit their website at https://company.wizards.com/."}</p>
                    <p>{"Card prices and other card data are provided by https://www.scryfall.com/. Scryfall makes no guarantee about its price information and recommends you see stores for final prices and details."}</p>
                    <p className="text-paper/60">{`Copyright © Split Counter App ${new Date().getFullYear()}.`}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

export const Head: HeadFC = () => <title>Split Counter App</title>;

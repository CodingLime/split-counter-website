import React from "react";
import type { HeadFC } from "gatsby";
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'Blog', href: '#' },
];

const Footer = () => {

    return (
        <footer>
            <div className="bg-gray-900">
                <div className="max-w-5xl mx-auto text-white py-10">
                    <div className="text-center">
                        <h3 className="text-3xl mb-3"> Download Split Counter App</h3>
                        <p>Track all yours games, the right way, with a complete tool.</p>
                        <div className="sm:flex mx-10 sm:mx-0 justify-center my-10">
                            <a href="https://play.google.com/store/apps/details?id=app.splitcounter" target="_blank" className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                                <StaticImage src="../images/play-store.png" alt="" className="w-7 md:w-8" />
                                <div className="text-left ml-3">
                                    <p className='text-xs text-gray-200'>Download on </p>
                                    <p className="text-sm md:text-base"> Google Play Store </p>
                                </div>
                            </a>
                            <a href="https://apps.apple.com/us/app/split-counter-mtg-utility/id6446151892" target="_blank" className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2 pr-14 mt-6 sm:mt-0">
                                <StaticImage src="../images/apple-logo.png" alt="" className="w-7 md:w-8" />
                                <div className="text-left ml-3">
                                    <p className='text-xs text-gray-200'>Download on </p>
                                    <p className="text-sm md:text-base"> Apple Store </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="mt-14 flex flex-col md:flex-row md:justify-between items-center text-sm text-white">
                        <p className="order-2 md:order-1 mt-8 md:mt-0"> {`Copyright © Split Counter App ${new Date().getFullYear()}.`} </p>
                        <div className="order-1 md:order-2">
                            <span className="px-2">About us</span>
                            <span className="px-2 border-l">Contact us</span>
                            <Link to={"/privacy-policy"}><span className="px-2 border-l">Privacy Policy</span></Link>
                            <Link to={"/terms-and-conditions"}><span className="px-2 border-l">Terms & Conditions</span></Link>
                        </div>
                    </div>
                    <div className="mt-14 flex flex-col md:flex-row md:justify-between items-center text-sm text-white">
                        <p className="order-2 md:order-1 mt-8 md:mt-0 text-center"> {"Split counter app is not affiliated with, endorsed, sponsored, or specifically approved by Wizards of the Coast LLC. Split counter app may use the trademarks and other intellectual property of Wizards of the Coast LLC, which is permitted under Wizards' Fan Site Policy. MAGIC: THE GATHERING® is a trademark of Wizards of the Coast. For more information about Wizards of the Coast or any of Wizards' trademarks or other intellectual property, please visit their website at https://company.wizards.com/."} </p>
                    </div>
                    <div className="mt-7 flex flex-col md:flex-row md:justify-between items-center text-sm text-white">
                        <p className="order-2 md:order-1 mt-8 md:mt-0 text-center"> {"Card prices and other card data are provided by https://www.scryfall.com/. Scryfall makes no guarantee about its price information and recommends you see stores for final prices and details."} </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

export const Head: HeadFC = () => <title>Split Counter App</title>;

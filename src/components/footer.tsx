import React from "react";
import type { HeadFC, PageProps } from "gatsby";
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
                <div className="max-w-2xl mx-auto text-white py-10">
                    <div className="text-center">
                        <h3 className="text-3xl mb-3"> Download Split Counter App</h3>
                        <p>Track all yours games, the right way, with a complete tool.</p>
                        <div className="sm:flex mx-10 sm:mx-0 justify-center my-10">
                            <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                                <StaticImage src="../images/play-store.png" alt="" className="w-7 md:w-8" />
                                <div className="text-left ml-3">
                                    <p className='text-xs text-gray-200'>Download on </p>
                                    <p className="text-sm md:text-base"> Google Play Store </p>
                                </div>
                            </div>
                            <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2 pr-14 mt-6 sm:mt-0">
                                <StaticImage src="../images/apple-logo.png" alt="" className="w-7 md:w-8" />
                                <div className="text-left ml-3">
                                    <p className='text-xs text-gray-200'>Download on </p>
                                    <p className="text-sm md:text-base"> Apple Store </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-14 flex flex-col md:flex-row md:justify-between items-center text-sm text-white">
                        <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Split Counter App, 2022. </p>
                        <div className="order-1 md:order-2">
                            <span className="px-2">About us</span>
                            <span className="px-2 border-l">Contact us</span>
                            <span className="px-2 border-l">Privacy Policy</span>
                            <span className="px-2 border-l">Terms of Service</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

export const Head: HeadFC = () => <title>Split Counter App</title>;

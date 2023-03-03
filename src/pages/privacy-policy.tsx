import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const PrivacyPolicy: React.FC<PageProps> = () => {

    return (
        <div className="isolate bg-white">
            <nav className="pt-12 mx-auto max-w-7xl">
                <NavBar />
            </nav>
            <main className="p-5 sm:p-10 lg:p-20">

            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;

export const Head: HeadFC = () => <title>Privacy Policy | Split Counter App</title>;
import {
    FacebookIcon,
    InstagramIcon,
    ArrowDown,
    ArrowBigDown,
    TwitterIcon,
} from "lucide-react";
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Card, CardContent } from "../components/ui/card";
import mainGIF from "../images/sara-e-ricardo/Save-the-Date-Sara-e-Ricardo.gif";
import main2GIF from "../images/sara-e-ricardo/2GIF.gif";

const SaraERicardo: React.FC<{ data: any }> = ({ data }) => {
    // Location data for mapping
    const locations = [
        {
            title: "CERIMÓNIA 14h",
            name: "Santuário da Nª Senhora do Castelo",
            image: getImage(data.ceremonyImage), // from GraphQL query
            borderWidth: "border-8",
            googleMapLink: "https://maps.app.goo.gl/5bwnTnFPrN6bKB139"
        },
        {
            title: "PARTY",
            name: "Quinta da Cerca",
            image: getImage(data.partyImage), // from GraphQL query
            borderWidth: "border-[10px]",
            googleMapLink: "https://maps.app.goo.gl/ZVxBEypk82Qhi5Jr5"
        },
    ];

    // Footer links
    const footerLinks = ["About us", "Terms of Service", "Privacy Policy", "FAQ"];

    return (
        <div className="flex justify-center w-full bg-[#F1695B]">
            <div className="flex flex-col relative w-full max-w-md min-h-screen bg-[#F1695B]">
                {/* Hero Section */}
                <div className="flex flex-col items-center px-8 min-h-screen flex-shrink-0 justify-between">
                    {/* Top content */}
                    <div className="flex flex-col items-center w-full pt-8">
                        <div className="flex justify-center font-['Barrio'] text-white text-[32px] tracking-[-0.64px] leading-[48px] mb-4">
                            SR
                        </div>
                        <div className="flex justify-center font-['Barrio'] text-white text-[32px] tracking-[-0.64px] leading-[48px] mb-2">
                            Sara e Ricardo
                        </div>
                    </div>

                    {/* Center content - GIF */}
                    <div className="w-full flex-grow flex items-center justify-center">
                        {/* This div will constrain the actual dimensions */}
                        <div className="w-96 h-96 md:w-80 md:h-80 flex items-center justify-center">
                            <img
                                className="max-h-full max-w-full object-contain"
                                alt="Save the date sara e ricardo"
                                src={main2GIF}
                                style={{ width: 'auto', height: 'auto' }} // Override any conflicting styles
                            />
                        </div>
                    </div>

                    {/* Bottom content */}
                    <div className="flex flex-col items-center w-full pb-10">
                        <div className="flex justify-center font-['AppleGothic-Regular'] text-white text-2xl tracking-[-0.48px] leading-8 text-center mb-6">
                            Estamos a dar o nó e queremos que venhas celebrar conosco este momento
                            tão especial
                        </div>

                        <div className="flex flex-col items-center">
                            <ArrowDown className="w-6 h-6 text-white mb-2" />
                            <div className="font-p2-medium text-white text-center">
                                Scroll
                            </div>
                        </div>
                    </div>
                </div>

                {/* When Section */}
                <div className="flex flex-col bg-white py-16">
                    <div className="flex flex-col items-center mb-16">
                        <div className="font-header-h2 text-[#93ad8c] text-[32px] text-center tracking-[-0.64px] leading-10 mb-4">
                            Quando?
                        </div>
                        <div className="font-['Alata'] text-[#93ad8c] text-2xl text-center leading-6">
                            28 de Junho de 2025
                        </div>
                    </div>

                    {/* Where Section */}
                    <div className="flex flex-col items-center px-8">
                        <div className="font-['Alata'] text-[#F1695B] text-[32px] text-center tracking-[-0.64px] leading-10 mb-8">
                            Onde?
                        </div>

                        <div className="flex flex-col gap-8 w-full">
                            {locations.map((location, index) => (
                                <div key={index} className="flex flex-col items-center gap-4">
                                    <div className="font-['Alata'] text-rose-300 text-base text-center tracking-[3.20px] leading-6">
                                        {location.title}
                                    </div>
                                    <a
                                        href={location.googleMapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full max-w-[358px] cursor-pointer"
                                    >
                                        <Card
                                            className={`flex w-full max-w-[358px] h-52 items-end gap-2.5 p-5 rounded-lg ${location.borderWidth} border-white overflow-hidden relative hover:opacity-90 transition-opacity`}
                                        >
                                            {/* Check if image exists before rendering */}
                                            {location.image && (
                                                <div className="absolute inset-0 z-0">
                                                    <GatsbyImage
                                                        image={location.image}
                                                        alt={location.name}
                                                        className="h-full w-full"
                                                        style={{ position: "absolute" }}
                                                    />
                                                </div>
                                            )}
                                            {/* Gradient overlay */}
                                            <div
                                                className="absolute inset-0 z-1"
                                                style={{
                                                    background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 30%)'
                                                }}
                                            />
                                            <CardContent className="p-0 z-10 relative">
                                                <div className="flex items-center gap-1">
                                                    <StaticImage
                                                        className="w-6 h-6"
                                                        alt="Icon location"
                                                        src="../images/sara-e-ricardo/icon-location.svg"
                                                    />
                                                    <div className="font-p1-medium text-white">
                                                        {location.name}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Confirmation Section */}
                <div className="flex flex-col bg-[#A1B89B] py-8">
                    <div className="flex flex-col items-center px-8 mb-8">
                        <div className="font-header-h2 text-white text-[32px] text-center tracking-[-0.64px] leading-10 mb-4">
                            Confirmações
                        </div>
                        <div className="font-p1-regular text-white text-center">
                            Agradecemos a vossa confirmação até:
                            <br /> 30 de abril de 2025
                        </div>
                    </div>

                    {/* SVG container with overflow allowed */}
                    <div className="relative px-8 pb-8 overflow-visible">
                        {/* SVG background zoomed in and with overflow */}
                        <div className="absolute left-0 right-0 top-0 transform -translate-y-10 flex justify-center overflow-visible">
                            <div className="w-full max-w-[858px] h-48 overflow-visible scale-105 origin-top">
                                <StaticImage
                                    className="w-full h-full z-0"
                                    alt="Vector"
                                    src="../images/sara-e-ricardo/vector.svg"
                                    objectFit="cover"
                                />
                            </div>
                        </div>

                        {/* Cards container */}
                        <div className="relative z-10 flex flex-col items-center gap-4 pt-8">
                            <Card
                                key={0}
                                className="flex flex-col w-[248px] h-[280px] bg-white rounded-lg shadow-lg relative"
                            >
                                <CardContent className="p-0 flex flex-col items-center">
                                    <StaticImage
                                        className="w-[223px] h-[200px] object-cover mt-6"
                                        alt="Rectangle"
                                        src={"../images/sara-e-ricardo/sara.jpg"}
                                    />
                                    <div className="absolute bottom-4 text-center font-p1-medium text-[#6c8d64]">
                                        {"Sara"} • {"938 695 159"}
                                    </div>
                                </CardContent>
                            </Card>
                            <Card
                                key={1}
                                className="flex flex-col w-[248px] h-[280px] bg-white rounded-lg shadow-lg relative"
                            >
                                <CardContent className="p-0 flex flex-col items-center">
                                    <StaticImage
                                        className="w-[223px] h-[200px] object-cover mt-6"
                                        alt="Rectangle"
                                        src={"../images/sara-e-ricardo/ricardo-bw.jpg"}
                                    />
                                    <div className="absolute bottom-4 text-center font-p1-medium text-[#6c8d64]">
                                        {"Ricardo"} • {"967 496 354"}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="flex flex-col bg-neutral-600 py-12 px-8 mt-auto">
                    <div className="flex flex-col items-start w-full">
                        <div className="flex justify-center font-['Barrio'] text-white text-[32px] tracking-[-0.64px] leading-[48px] mb-8">
                            SR
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mb-12">
                        {footerLinks.map((link, index) => (
                            <div
                                key={index}
                                className="font-p1-regular text-neutral-50 hover:text-neutral-0 transition-colors"
                            >
                                {link}
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <FacebookIcon className="w-6 h-6 text-neutral-50 hover:text-neutral-0 transition-colors" />
                        <InstagramIcon className="w-6 h-6 text-neutral-50 hover:text-neutral-0 transition-colors" />
                        <TwitterIcon className="w-6 h-6 text-neutral-50 hover:text-neutral-0 transition-colors" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export const query = graphql`
  query {
    ceremonyImage: file(relativePath: { eq: "sara-e-ricardo/frame-7.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    partyImage: file(relativePath: { eq: "sara-e-ricardo/frame-7-1.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default SaraERicardo;
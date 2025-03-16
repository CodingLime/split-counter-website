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
            title: "CERIMÓNIA",
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
        <main className="relative w-full mx-auto bg-[#f1695b] overflow-hidden">
            {/* Header Section - Now full screen */}
            <section className="relative h-screen flex flex-col items-center justify-center">
                <StaticImage
                    className="w-[86px] h-[54px] mb-2"
                    alt="Wedding logo"
                    src="../images/sara-e-ricardo/group-6-svg.svg"
                />

                <h1 className="w-[329px] font-['Montserrat',Helvetica] font-normal text-neutral-50 text-2xl tracking-[-0.48px] leading-9 text-center mb-4">
                    Sara e Ricardo
                </h1>

                <div className="w-96 h-96 md:w-80 md:h-80 flex items-center justify-center mb-6">
                    <img
                        className="max-h-full max-w-full object-contain"
                        alt="Save the date sara e ricardo"
                        src={main2GIF}
                        style={{ width: 'auto', height: 'auto' }} // Override any conflicting styles
                    />
                </div>

                <p className="w-[284px] font-['AppleGothic-Regular',Helvetica] font-normal text-neutral-50 text-lg text-center tracking-[-0.36px] leading-[27px] mb-8">
                    Estamos a dar o nó e queremos que venhas celebrar connosco este momento
                    tão especial
                </p>

                {/* Scroll Indicator */}
                <div className="flex flex-col items-center">
                    <StaticImage className="w-6 h-6" alt="Icon south" src="../images/sara-e-ricardo/icon-south.svg" />
                    <span className="font-p2-medium text-white text-center whitespace-nowrap mt-2">
                        Scroll
                    </span>
                </div>
            </section>


            {/* When Section */}
            <section className="flex flex-col items-center pt-24 pb-24">
                <h2 className="font-['Montserrat',Helvetica] font-normal text-white text-[32px] text-center tracking-[-0.64px] leading-10 mb-12">
                    quando?
                </h2>

                <div className="w-56 h-[150px] mb-8">
                    <StaticImage
                        className="w-[225px] h-[151px]"
                        alt="Calendar illustration"
                        src="../images/sara-e-ricardo/group.png"
                    />
                </div>

                <div className="font-['Montserrat',Helvetica] font-normal text-white text-xl text-center tracking-[2.00px] leading-6">
                    14H <br />
                    28 DE JUNHO DE 2025
                </div>
            </section>

            {/* Where Section */}
            <section className="flex flex-col items-center bg-white py-12 px-4 relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute w-full h-full top-12 left-0 z-0 overflow-hidden">
                    <StaticImage
                        className="absolute w-[751px] h-[184px] top-[500px] left-[0px]"
                        alt="Vector"
                        src="../images/sara-e-ricardo/vector-rose.svg"
                    />

                    <StaticImage
                        className="absolute w-[924px] h-[207px] top-[191px] left-[0px]"
                        alt="Vector"
                        src="../images/sara-e-ricardo/vector-rose.svg"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col items-center w-full z-10">
                    <h1 className="font-['Montserrat',Helvetica] font-normal text-[#f1695b] text-[32px] text-center tracking-[-0.64px] leading-10 mb-12">
                        onde?
                    </h1>

                    <div className="flex flex-col gap-16 w-full max-w-md">
                        {locations.map((location, index) => (
                            <div key={index} className="flex flex-col items-center gap-4">
                                <h3 className="w-full mt-[-1.00px] font-['Montserrat',Helvetica] font-normal text-[#f1695b] text-xl text-center tracking-[2.00px] leading-6">
                                    {location.title}
                                </h3>
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
            </section>

            {/* Confirmation Section */}
            <section className="flex flex-col items-center bg-[#A1B89B] py-16 px-8 relative overflow-hidden">
                <div className="flex flex-col items-center w-full mb-8">
                    <p className="w-full text-[#6f7a6a] text-base text-center leading-6 font-['Montserrat',Helvetica]">
                        Agradecemos a vossa confirmação até:
                        <br />
                        <span className="font-semibold">30 de abril de 2025</span>
                    </p>
                </div>

                {/* Background decorations */}
                <div className="absolute w-full h-full top-12 left-0 z-0 overflow-hidden">
                    <StaticImage
                        className="absolute w-[731px] h-[164px] top-[100px] left-[0px]"
                        alt="Vector"
                        src="../images/sara-e-ricardo/vector.svg"
                    />
                </div>

                {/* Cards container */}
                <div className="flex flex-col items-center gap-8 pt-8 z-10">
                    <Card
                        key={0}
                        className="flex flex-col w-[248px] h-[280px] bg-white rounded-lg shadow-lg relative"
                    >
                        <CardContent className="p-0 flex flex-col items-center">
                            <StaticImage
                                className="w-[223px] h-[198px] object-cover mt-6"
                                alt="Sara"
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
                                className="w-[223px] h-[198px] object-cover mt-6"
                                alt="Ricardo"
                                src={"../images/sara-e-ricardo/ricardo-bw.jpg"}
                            />
                            <div className="absolute bottom-4 text-center font-p1-medium text-[#6c8d64]">
                                {"Ricardo"} • {"967 496 354"}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Photo Section */}
            <section className="relative w-full bg-[#f1695b] flex flex-col items-center py-20">
                <StaticImage
                    className="w-[246px] h-[349px]"
                    alt="Polaroid image"
                    src="../images/sara-e-ricardo/polaroid-3-3-img-1.png"
                />
            </section>
        </main>
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
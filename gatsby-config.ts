import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Split Counter App - MTG Utility`,
    siteUrl: `https://www.splitcounter.app/`,
    description: `Track your games like never before. From your life total, to commander damage (partners included!), to search about cards you want to know prices or rulings.`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Barrio\:400`, // Load Barrio font
          `Montserrat\:400,700` // Montserrat font (Regular 400 & Bold 700)
        ],
        display: "swap",
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`, // Adjust this path if needed
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales`,
        name: `locale`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`pt`, `en`],  // Make sure 'pt' comes first
        defaultLanguage: `en`,  // Set Portuguese as the default
        siteUrl: `https://splitcounter.app/`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          detection: {
            order: ['navigator', 'htmlTag', 'path', 'subdomain'], // Check browser settings first
            caches: ['localStorage'], // Remember user’s choice
          },
        },
        pages: [
          {
            matchPath: "/:lang?/sara-e-ricardo/",
            languages: ["pt", "en"],  // Ensure both languages are available
          },
        ],
        translationPath: `${__dirname}/src/locales`, // Ensure translation files are loaded
        defaultNS: "common", // Default namespace (should match JSON filenames)
      },
    },
  ],
};

export default config;

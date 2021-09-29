import { config } from "dotenv"
import { GatsbyConfig } from "gatsby"
config({
  path: `./.env`,
})

export default {
  siteMetadata: {
    description:
      "My name is AmirMohamamd MirzaeiRad, and this is my portfolio.",
    author: "AmirMohammad MirzaeiRad",
    title: "AmirMohammad MirzaeiRad",
    siteUrl: "https://portfolio.amirmuha.com",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/icons`,
      },
    },
    {
      resolve: "gatsby-plugin-apollo",
      options: {
        uri: "localhost:3333/graphql",
        credentials: true,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Portfolio",
        fieldName: "portfolio",
        url: `http://localhost:3333/graphql`,
      },
    },
  ],
} as GatsbyConfig

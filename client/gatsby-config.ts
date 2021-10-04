import { config } from "dotenv"
import { PluginOptions as TypeGenPluginOptions } from "gatsby-plugin-typegen/types"
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
    "gatsby-plugin-debug-build",
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: "./src/__generated__/gatsby-types.d.ts",
        emitSchema: {
          "./src/__generated__/gatsby-schema.graphql": true,
          "./src/__generated__/gatsby-introspection.json": true,
        },
        emitPluginDocuments: {
          "src/__generated__/gatsby-plugin-documents.graphql": true,
        },
      } as TypeGenPluginOptions,
    },
    {
      resolve: "gatsby-background-image-es5",
      options: {
        specialChars: "/:",
      },
    },
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
        url: process.env.GRAPHQL_API,
      },
    },
  ],
} as GatsbyConfig

import { GatsbyConfig } from "gatsby"
import { PluginOptions as TypeGenPluginOptions } from "gatsby-plugin-typegen/types"
import { config } from "dotenv"

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
    serverUrl: process.env.GATSBY_SERVER_API!,
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio | portfolio.amirmuha.com`,
        short_name: `Portfolio`,
        icon: "src/icons/favicon.webp",
        icons: [
          {
            src: "src/icons/16x16.webp",
            sizes: "16x16",
            type: "image/ico",
          },
          {
            src: "src/icons/32x32.webp",
            sizes: "32x32",
            type: "image/ico",
          },
          {
            src: "src/icons/48x48.webp",
            sizes: "48x48",
            type: "image/ico",
          },
          {
            src: "src/icons/64x64.webp",
            sizes: "64x64",
            type: "image/ico",
          },
          {
            src: "src/icons/96x96.webp",
            sizes: "96x96",
            type: "image/ico",
          },
          {
            src: "src/icons/128x128.webp",
            sizes: "128x128",
            type: "image/ico",
          },
          {
            src: "src/icons/192x192.webp",
            sizes: "192x192",
            type: "image/ico",
          },
          {
            src: "src/icons/256x256.webp",
            sizes: "256x256",
            type: "image/ico",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        autoFix: true,
        language: "typescript",
        includeResolvers: true,
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
        url: process.env.GATSBY_GRAPHQL_API,
      },
    },
  ],
} as GatsbyConfig

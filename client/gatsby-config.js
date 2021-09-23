require("dotenv").config({
  path: `./.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    description:
      "My name is AmirMohamamd MirzaeiRad, and this is my portfolio.",
    author: "AmirMohammad MirzaeiRad",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-plugin-image",
      name: "images",
      path: "./src/images/*",
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Portfolio",
        fieldName: "portfolio",
        url: `http://localhost:3333/graphql`,
        headers: {
          Authorization: `Bearer ${process.env.GRAPHQL_API_TOKEN}`,
        },
      },
    },
  ],
};

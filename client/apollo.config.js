const path = require("path")
module.exports = {
  client: {
    name: "portfolio",
    tagName: "graphql",
    // includes: [
    //   "./src/**/*.{ts,tsx}",
    //   "./src/__generated__/gatsby-plugin-documents.graphql",
    // ],
    service: {
      name: "Gatsby-GraphQL",
      // url: "http://localhost:8000/___graphql",
      localSchemaFile: path.join(
        __dirname,
        "./src/__generated__/gatsby-schema.graphql"
      ),
    },
  },
}

const path = require("path")
const fs = require("fs")

module.exports = {
  parser: "@babel/eslint-parser",
  plugins: ["graphql"],
  rules: {
    "graphql/template-strings": [
      "error",
      {
        env: `relay`,
        schemaString: fs.readFileSync(
          path.resolve(
            __dirname,
            "./src/__generated__/gatsby-introspection.json"
          ),
          { encoding: "utf-8", flag: "r" }
        ),
        tagName: `graphql`,
      },
    ],
  },
}

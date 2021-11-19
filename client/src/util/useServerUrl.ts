import { graphql, useStaticQuery } from "gatsby"

const SERVER_API_QUERY = graphql`
  {
    site {
      siteMetadata {
        serverUrl
      }
    }
  }
`
export const useServerUrl = () => {
  const { site } = useStaticQuery<{ site: GatsbyTypes.Site }>(SERVER_API_QUERY)
  return site?.siteMetadata?.serverUrl
}

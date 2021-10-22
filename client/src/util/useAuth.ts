import { ApolloClient, gql, InMemoryCache } from "@apollo/client"
import { useEffect, useState } from "react"
const isBrowswer = !!window
const AUTH = "authorization"
const client = new ApolloClient({
  uri: (window as any).__SERVER_API__ + "/graphql",
  credentials: "include",
  cache: new InMemoryCache(),
})

export const useAuth = () => {
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  useEffect(() => {
    client
      .query({
        query: gql`
          query GetAdmin {
            getAdmin {
              email
            }
          }
        `,
      })
      .then(res => {
        setData(res.data)
        setError(null)
      })
      .catch(e => {
        setError(e.message)
        setData(null)
      })
  })
  return {
    error: error || undefined,
    data: data || undefined,
  }
}

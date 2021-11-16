import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import { useEffect, useState } from "react"
const isBrowswer = typeof window !== "undefined"

const client = isBrowswer ? new ApolloClient({
  uri: (window as any).__SERVER_API__ + "/graphql",
  credentials: "include",
  cache: new InMemoryCache(),
}): null

export const useAuth = () => {
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  useEffect(() => {
    isBrowswer ? client!
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
      }):null
  })
  return {
    error: error || undefined,
    data: data || undefined,
  }
}

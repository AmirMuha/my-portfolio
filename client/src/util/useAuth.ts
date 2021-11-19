import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import { useEffect, useState } from "react"

import { useServerUrl } from './useServerUrl';

const isBrowswer = typeof window !== "undefined"


export const useAuth = () => {
  const SERVER_API = useServerUrl()
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const client = isBrowswer ? new ApolloClient({
    uri: SERVER_API + "/graphql",
    credentials: "include",
    cache: new InMemoryCache(),
  }): null
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
  }, [])
  return {
    error: error || undefined,
    data: data || undefined,
  }
}

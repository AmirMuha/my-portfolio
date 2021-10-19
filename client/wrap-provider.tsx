import fetch from "cross-fetch"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { createUploadLink } from "apollo-upload-client"
import { WrapRootElementBrowserArgs } from "gatsby"
import React, { FC } from "react"
import { Provider } from "react-redux"
import { store } from "./src/store/store"

const uploadLink = createUploadLink({
  credentials: "include",
  uri: "http://localhost:3333/graphql",
  fetch,
})
export const wrapRootElement: FC<WrapRootElementBrowserArgs> = ({
  element,
}) => {
  const cache = new InMemoryCache()
  const client = new ApolloClient({
    link: uploadLink,
    connectToDevTools: true,
    cache,
  })
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>{element}</Provider>
    </ApolloProvider>
  )
}

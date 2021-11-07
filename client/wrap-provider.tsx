import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client"
import React, { FC } from "react"

import { Provider } from "react-redux"
import { WrapRootElementBrowserArgs } from "gatsby"
import { createUploadLink } from "apollo-upload-client"
import fetch from "cross-fetch"
import { store } from "./src/store/store"

const uploadLink = createUploadLink({
  credentials: "include",
  uri: "http://localhost:3333/graphql",
  fetch,
})
export const wrapRootElement: FC<WrapRootElementBrowserArgs> = ({
  element,
}) => {
  if (window) {
    ;(window as any).__SERVER_API__ = "http://localhost:3333"
  }
  const cache = new InMemoryCache()
  const client = new ApolloClient({
    link:  uploadLink,
    connectToDevTools: true,
    cache,
  })
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>{element}</Provider>
    </ApolloProvider>
  )
}

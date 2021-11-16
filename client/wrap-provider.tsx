import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  split,
} from "@apollo/client"
import React, { FC } from "react"

import { Provider } from "react-redux"
import { WebSocketLink } from "@apollo/client/link/ws"
import { WrapRootElementBrowserArgs } from "gatsby"
import { createUploadLink } from "apollo-upload-client"
import fetch from "cross-fetch"
import { getMainDefinition } from "@apollo/client/utilities"
import { store } from "./src/store/store"

const isBrowswer = typeof window !== "undefined"
const wsLink = isBrowswer ? new WebSocketLink({
  uri: "ws://localhost:3333/graphql",
  options: {
    reconnect: true,
  },
}): null

const uploadLink = createUploadLink({
  credentials: "include",
  uri: "http://localhost:3333/graphql",
  fetch,
})

const splitLink = isBrowswer ? split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    )
  },
  wsLink as any,
  uploadLink
): uploadLink
export const wrapRootElement: FC<WrapRootElementBrowserArgs> = ({
  element,
}) => {
  if (isBrowswer) {
    ;(window as any).__SERVER_API__ = "http://localhost:3333"
  }
  const cache = new InMemoryCache()
  const client = new ApolloClient({
    link: splitLink || uploadLink,
    connectToDevTools: true,
    cache,
  })
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>{element}</Provider>
    </ApolloProvider>
  )
}

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { createUploadLink } from "apollo-upload-client"
import { WrapPageElementBrowserArgs, WrapRootElementBrowserArgs } from "gatsby"
import React, { FC } from "react"
import Layout from "./src/components/Layout"
export const wrapPageElement: FC<WrapPageElementBrowserArgs> = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>
}

const uploadLink = createUploadLink({
  credentials: "include",
  uri: "http://localhost:3333/graphql",
})
const cache = new InMemoryCache()
export const wrapRootElement: FC<WrapRootElementBrowserArgs> = ({
  element,
}) => {
  const client = new ApolloClient({
    link: uploadLink,
    connectToDevTools: true,
    cache,
  })
  return <ApolloProvider client={client}>{element}</ApolloProvider>
}

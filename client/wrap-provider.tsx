import { WrapPageElementBrowserArgs, WrapRootElementBrowserArgs } from "gatsby"
import React, { FC } from "react"
import { createUploadLink } from "apollo-upload-client"
import Layout from "./src/components/Layout"
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  InMemoryCache,
} from "@apollo/client"
export const wrapPageElement: FC<WrapPageElementBrowserArgs> = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>
}

// const httpLink = new HttpLink({
//   uri: "http://localhost:3333/graphql",
//   credentials: "include",
// })
const uploadLink = createUploadLink({
  credentials: "include",
  uri: "http://localhost:3333/graphql",
})
// console.log(uploadLink.concat(httpLink))
const cache = new InMemoryCache()
export const wrapRootElement: FC<WrapRootElementBrowserArgs> = ({
  element,
}) => {
  const client = new ApolloClient({
    link: uploadLink,
    // uri: "http://localhost:3333/graphql",
    // credentials: "include",
    connectToDevTools: true,
    cache,
  })
  return <ApolloProvider client={client}>{element}</ApolloProvider>
}

import { PageProps } from "gatsby"
import React, { FC } from "react"
import { SEO } from "../../components/SEO"

const Messages: FC<PageProps> = ({ children, params, data }) => {
  return (
    <>
      <SEO title="Adding New Messages To Stack" />
      Adding new Messages to stack
    </>
  )
}

export default Messages

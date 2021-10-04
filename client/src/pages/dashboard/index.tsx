import { PageProps } from "gatsby"
import React, { FC } from "react"
import { SEO } from "../../components/SEO"

const Dashboard: FC<PageProps> = ({ children, params, data }) => {
  return (
    <>
      <SEO title="Adding New Dashboard To Stack" />
      Adding new Dashboard to stack
    </>
  )
}

export default Dashboard

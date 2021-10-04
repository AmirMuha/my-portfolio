import { PageProps } from "gatsby"
import React, { FC } from "react"
import { SEO } from "../../../components/SEO"

const AddTech: FC<PageProps> = ({ children, params, data }) => {
  return (
    <>
      <SEO title="Adding New AddTech To Stack" />
      Adding new AddTech to stack
    </>
  )
}

export default AddTech

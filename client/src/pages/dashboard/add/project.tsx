import { PageProps } from "gatsby"
import React, { FC } from "react"
import { SEO } from "../../../components/SEO"

const AddProject: FC<PageProps> = ({ children, params, data }) => {
  return (
    <>
      <SEO title="Adding New AddProject To Stack" />
      Adding new AddProject to stack
    </>
  )
}

export default AddProject

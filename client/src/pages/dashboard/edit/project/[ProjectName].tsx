import { PageProps } from "gatsby"
import React, { FC } from "react"
import { SEO } from "../../../../components/SEO"

const EditProject: FC<PageProps> = ({ children, params, data }) => {
  return (
    <>
      <SEO title="Adding New EditProject To Stack" />
      Adding new EditProject to stack
    </>
  )
}

export default EditProject

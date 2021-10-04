import { PageProps } from "gatsby"
import React, { FC } from "react"
import { SEO } from "../../../components/SEO"

const EditAboutMe: FC<PageProps> = ({ children, params, data }) => {
  return (
    <>
      <SEO title="Adding New EditAboutMe To Stack" />
      Adding new EditAboutMe to stack
    </>
  )
}

export default EditAboutMe

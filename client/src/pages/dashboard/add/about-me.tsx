import { PageProps } from "gatsby"
import React, { FC } from "react"
import { SEO } from "../../../components/SEO"

const AddAboutMe: FC<PageProps> = ({ children, params, data }) => {
  return (
    <>
      <SEO title="Adding New AddAboutMe To Stack" />
      Adding new AddAboutMe to stack
    </>
  )
}

export default AddAboutMe

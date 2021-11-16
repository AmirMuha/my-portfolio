import { Meta, SEO } from "../components/SEO"
import { PageProps, graphql } from "gatsby"
import React, { FC } from "react"

import InPageMenu from "../components/App/InPageMenu"
import Layout from "../components/Layout"
import Markdown from "../components/utility/Markdown"
import TheSection from "../components/App/TheSection"
const meta: Meta = [
  {
    name: "description",
    content: "My name is AmirMuhammad MirzaeiRad, A FullStack developer.",
  },
]

interface QueryTypes extends PageProps {
  data: {
    portfolio: {
      abouts: GatsbyTypes.Portfolio_About[]
    }
  }
}
const AboutMe: FC<QueryTypes> = ({ data }) => {
  const {
    portfolio: { abouts },
  } = data
  return (
    <>
      <SEO title="Adding New AboutMe To Stack" meta={meta} />
      <Layout header={{ brand: "AM.PORTFOLIO", page: "about" }} nav={false}>
        <TheSection
          name="What Now ?"
          style={{ paddingBottom: 25 }}
          id="what-now"
        >
          <InPageMenu pipes="left" />
        </TheSection>
        {abouts.map(p => (
          <TheSection key={p.id} id={p.id} name={p.title}>
            <div className="px-5 pb-8">
              <Markdown>{p.body}</Markdown>
            </div>
          </TheSection>
        ))}
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    portfolio {
      abouts {
        body
        id
        title
      }
    }
  }
`

export default AboutMe

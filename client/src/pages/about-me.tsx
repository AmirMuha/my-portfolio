import { PageProps, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import InPageMenu from "../components/App/InPageMenu"
import TheSection from "../components/App/TheSection"
import Layout from "../components/Layout"
import { Meta, SEO } from "../components/SEO"
import { graphql } from "gatsby"
const meta: Meta = [
  {
    name: "description",
    content: "My name is AmirMuhammad MirzaeiRad, A FullStack developer.",
  },
]

const query = graphql`
  query {
    portfolio {
      abouts {
        id
        title
        body
      }
    }
  }
`
interface QueryTypes {
  data: {
    portfolio: {
      abouts: GatsbyTypes.Portfolio_About[]
    }
  }
}
const AboutMe: FC<PageProps> = props => {
  const { data } = useStaticQuery<QueryTypes>(query)
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
            <p className="px-5 pb-8">{p.body}</p>
          </TheSection>
        ))}
      </Layout>
    </>
  )
}

export default AboutMe

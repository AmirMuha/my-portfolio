import { PageProps } from "gatsby"
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

const AboutMe: FC<PageProps> = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="Adding New AboutMe To Stack" meta={meta} />
      <Layout nav={false}>
        <TheSection name="What Now ?" id="what-now">
          <InPageMenu pipes="left" style={{ paddingBottom: 25 }} />
        </TheSection>
        <TheSection id="who-am-i" name="Who Am I ?">
          <p className="px-5 pb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            expedita quia modi quasi eveniet dolorum esse temporibus? Alias
            quibusdam rem dolorem explicabo consequatur eaque autem a aperiam
            molestias corrupti, possimus sed unde, debitis eum impedit porro
            aliquam culpa nulla, odio voluptas ea. Iusto deserunt iste illo
            tempora quis, quaerat id ducimus magni vitae necessitatibus aliquid
            tempore fuga architecto porro ad esse corporis, consequatur cum!
            Ratione expedita dolor porro excepturi? Pariatur facilis similique
            tempore quia laborum mollitia odio, quae modi ipsum sed voluptates
            sunt exercitationem cupiditate tempora dolorum debitis vel rerum
            quibusdam earum, totam, consequuntur commodi hic aliquid. Cumque
            reprehenderit atque commodi facilis dolorum, laborum beatae ea amet
            ad possimus, perspiciatis provident, minima deserunt ex numquam
            aspernatur cum! Error, aspernatur nam!
          </p>
        </TheSection>
        <TheSection id="short-story" className="mb-10" name="Short Story">
          <p className="px-5 pb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            expedita quia modi quasi eveniet dolorum esse temporibus? Alias
            quibusdam rem dolorem explicabo consequatur eaque autem a aperiam
            molestias corrupti, possimus sed unde, debitis eum impedit porro
            aliquam culpa nulla, odio voluptas ea. Iusto deserunt iste illo
            tempora quis, quaerat id ducimus magni vitae necessitatibus aliquid
            tempore fuga architecto porro ad esse corporis, consequatur cum!
            Ratione expedita dolor porro excepturi? Pariatur facilis similique
            tempore quia laborum mollitia odio, quae modi ipsum sed voluptates
            sunt exercitationem cupiditate tempora dolorum debitis vel rerum
            quibusdam earum, totam, consequuntur commodi hic aliquid. Cumque
            reprehenderit atque commodi facilis dolorum, laborum beatae ea amet
            ad possimus, perspiciatis provident, minima deserunt ex numquam
            aspernatur cum! Error, aspernatur nam!
          </p>
        </TheSection>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    portfolio {
      abouts {
        id
      }
    }
  }
`
export default AboutMe

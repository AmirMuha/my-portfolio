import { PageProps, graphql } from "gatsby"
import { Project, Stack as StackTypes } from "../types/graphql-types"
import React, { FC } from "react"

import ContactMe from "../components/App/ContactMe"
import InPageMenu from "../components/App/InPageMenu"
import Layout from "../components/Layout"
import Projects from "../components/App/Projects"
import { SEO } from "../components/SEO"
import Stack from "../components/App/Stack"
import TheHero from "../components/App/TheHero"
import TheSection from "../components/App/TheSection"

interface Props extends PageProps {
  data: {
    portfolio: {
      projects: Project[]
      stacks: StackTypes[]
      me: GatsbyTypes.Portfolio_Admin
    }
  }
}

const Home: FC<Props> = ({ data }) => {
  return (
    <>
      <SEO titleTemplate="%s" title="AmirMohammad MirzaeiRad" />
      <Layout>
        <TheHero data={data?.portfolio?.me} />
        <TheSection
          className="sm:hidden"
          style={{ paddingBottom: 25 }}
          id="what-next"
          name="What Next ?"
        >
          <InPageMenu pipes="left" />
        </TheSection>
        <TheSection id="projects" name="Projects">
          <Projects data={data?.portfolio?.projects || []} />
        </TheSection>
        <TheSection id="stack" name="Stack">
          <Stack data={data?.portfolio?.stacks} />
        </TheSection>
        <TheSection
          id="contact-me"
          style={{ paddingBottom: 25 }}
          name="Contact Me"
        >
          <ContactMe
            skypeUrl={data?.portfolio?.me?.skype}
            instagramUrl={data?.portfolio?.me?.instagram}
            whatsappNumber={data?.portfolio?.me?.whatsapp}
            linkedInUrl={data?.portfolio?.me?.linkedIn}
            adminEmail={data?.portfolio?.me?.email}
            id="footer"
          />
        </TheSection>
        <TheSection
          style={{ marginBottom: 50, paddingBottom: 25 }}
          name="What Now ?"
          id="what-now"
        >
          <InPageMenu pipes="left" />
        </TheSection>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    portfolio {
      projects {
        name
        image
        id
        github_url
        createdAt
        app_url
        summary
        updatedAt
        type
        tech_categories {
          name
          id
          techs {
            name
            id
          }
        }
      }
      stacks {
        id
        title
        image
      }
      me {
        email
        github
        heroImage
        instagram
        skype
        linkedIn
        lname
        resumes
        whatsapp
      }
    }
  }
`

export default Home

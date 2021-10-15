import { PageProps } from "gatsby"
import React, { FC } from "react"
import Stack from "../../components/App/Stack"
import TheSection from "../../components/App/TheSection"
import Dash_Hero from "../../components/Dashboard/Dash_Hero"
import Dash_Layout from "../../components/Dashboard/Dash_Layout"
import Dash_Message from "../../components/Dashboard/Dash_Message"
import Dash_Projects from "../../components/Dashboard/Dash_Projects"
import { SEO } from "../../components/SEO"

const Dashboard: FC<PageProps> = ({ children, params, data }) => {
  return (
    <>
      <SEO title="Dashboard" />
      <Dash_Layout>
        <div className="my-10">
          <Dash_Hero />
          <div className="">
            <TheSection
              name="Projects"
              style={{ paddingBottom: 25 }}
              id="projects"
            >
              <Dash_Projects />
            </TheSection>
            <TheSection name="Stack" id="stack">
              <Stack editable />
            </TheSection>
            <TheSection
              name="Messages"
              style={{ paddingBottom: 25 }}
              id="messages"
            >
              <div className="messages--container">
                <Dash_Message />
                <Dash_Message />
                <Dash_Message />
              </div>
            </TheSection>
          </div>
        </div>
      </Dash_Layout>
    </>
  )
}

export default Dashboard

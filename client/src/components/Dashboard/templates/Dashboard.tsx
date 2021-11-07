import {
  QueryMessages,
  QueryProjectsWithTechCategories,
} from "../../../util/queries"
import React, { FC, useEffect } from "react"

import Dash_Hero from "../Dash_Hero"
import Dash_Layout from "../Dash_Layout"
import Dash_Message from "../Dash_Message"
import Dash_Projects from "../Dash_Projects"
import Loading from "../../UI/Loading"
import { SEO } from "../../SEO"
import Stack from "../../App/Stack"
import TheSection from "../../App/TheSection"
import UnsavedProjects from "../UnsavedProjects"
import { useQuery } from "@apollo/client"

const Dashboard: FC = () => {
  const {
    data: projectQueryData,
    loading: projectsLoading,
    refetch: refetchProjects,
  } = useQuery<{
    projects: GatsbyTypes.Portfolio_Project[]
  }>(QueryProjectsWithTechCategories)
  const { data: messagesQueryData, loading: messagesLoading } = useQuery<{
    messages: GatsbyTypes.Portfolio_Message[]
  }>(QueryMessages)
  useEffect(() => {
    refetchProjects()
  }, [])

  if (projectsLoading || messagesLoading) {
    return <Loading />
  }
  return (
    <>
      <SEO title="Dashboard" />
      <Dash_Layout>
        <UnsavedProjects />
        <div className="my-10">
          <Dash_Hero />
          <div className="">
            {projectQueryData?.projects.length! > 0 && (
              <TheSection
                name="Projects"
                style={{ paddingBottom: 25 }}
                id="projects"
              >
                <Dash_Projects data={projectQueryData?.projects || []} />
              </TheSection>
            )}
            <TheSection name="Stack" id="stack">
              <Stack editable />
            </TheSection>
            {messagesQueryData?.messages.length! > 0 && (
              <TheSection
                name="Messages"
                style={{ paddingBottom: 25 }}
                id="messages"
              >
                <div className="messages--container">
                  {messagesQueryData?.messages?.length! > 0 &&
                    messagesQueryData?.messages?.map(m => (
                      <Dash_Message key={m.id} data={m} />
                    ))}
                </div>
              </TheSection>
            )}
          </div>
        </div>
      </Dash_Layout>
    </>
  )
}

export default Dashboard

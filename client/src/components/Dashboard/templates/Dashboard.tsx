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
import { useQueryDashboardStuffQuery } from "../../../types/graphql-types"

const Dashboard: FC = () => {
  const { data, loading, error, refetch } = useQueryDashboardStuffQuery()
  useEffect(() => {
    refetch()
  }, [])
  console.log(data)

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <SEO title="Dashboard" />
      <Dash_Layout>
        <UnsavedProjects />
        <div className="my-10">
          <Dash_Hero />
          <div>
            {data?.projects.length! > 0 && (
              <TheSection
                name="Projects"
                style={{ paddingBottom: 25 }}
                id="projects"
              >
                <Dash_Projects data={(data?.projects as any) || []} />
              </TheSection>
            )}
            <TheSection name="Stack" id="stack">
              <Stack
                editable
                adminEmail={data?.me?.email}
                data={data?.stacks as any}
              />
            </TheSection>
            {data?.messages.length! > 0 && (
              <TheSection
                name="Messages"
                style={{ paddingBottom: 25 }}
                id="messages"
              >
                <div className="messages--container">
                  {data?.messages?.length! > 0 &&
                    data?.messages?.map(m => (
                      <Dash_Message key={m.id} data={m as any} />
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

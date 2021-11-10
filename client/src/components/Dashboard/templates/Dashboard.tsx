import React, { FC, useEffect, useState } from "react"
import {
  useQueryDashboardStuffQuery,
  useSubscribeMessagesSubscription,
} from "../../../types/graphql-types"

import Dash_Hero from "../Dash_Hero"
import Dash_Layout from "../Dash_Layout"
import Dash_Message from "../Dash_Message"
import Dash_Projects from "../Dash_Projects"
import Loading from "../../UI/Loading"
import { SEO } from "../../SEO"
import Stack from "../../App/Stack"
import TheSection from "../../App/TheSection"
import UnsavedProjects from "../UnsavedProjects"

const Dashboard: FC = () => {
  const { data, loading, error, refetch } = useQueryDashboardStuffQuery()
  const { data: newMessage } = useSubscribeMessagesSubscription()
  const [messages, setMessages] = useState<any[]>([])
  useEffect(() => {
    refetch()
  }, [])
  useEffect(() => {
    if(data && data.messages) {
      setMessages(data.messages)
    }
  },[data?.messages])
  useEffect(() => {
    if(newMessage) {
      setMessages(prev => {
        return [...prev, newMessage.subscribeMessages]
      })
    }
  }, [newMessage])

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
                refetch={refetch}
                adminEmail={data?.me?.email}
                data={data?.stacks as any}
              />
            </TheSection>
            {messages && messages.length > 0 && (
              <TheSection
                name="Messages"
                style={{ paddingBottom: 25 }}
                id="messages"
              >
                <div className="messages--container">
                  {messages.map(m => (
                    <Dash_Message refetch={refetch} key={m.id} data={m as any} />
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

import React, { FC, useEffect, useReducer, useState } from "react"
import {
  useAdminEmailQuery,
  useQueryMessagesQuery,
  useSubscribeMessagesSubscription
} from "../../../types/graphql-types"

import Alert from "../../UI/Alert"
import Button from "../../UI/Button"
import Dash_Layout from "../Dash_Layout"
import Dash_Message from "../Dash_Message"
import Input from "../../UI/Input"
import Loading from "../../UI/Loading"
import { SEO } from "../../SEO"
import TheSection from "../../App/TheSection"
import { useAlert } from "../../../util/useAlert"
import {
  useAlertGraphqlError,
} from "../../../util/useAlertGraphqlError"

const filterInitialState: FilterInitialState = {
  answered: false,
  read: false,
  all: true,
}
interface FilterInitialState {
  answered: boolean
  read: boolean
  all: boolean
}

type FilterActions = "SET_ANSWERED" | "SET_READ" | "SET_ALL"
type FilterReducerFnType = (
  state: FilterInitialState,
  action: { type: FilterActions; value: boolean }
) => FilterInitialState

const filterReducer: FilterReducerFnType = (state, action) => {
  switch (action.type) {
    case "SET_ANSWERED":
      if (action.value) {
        return {
          read: false,
          answered: action.value,
          all: false,
        }
      } else {
        return {
          ...state,
          answered: action.value,
          all: false,
        }
      }
    case "SET_READ":
      if (action.value) {
        return {
          answered: false,
          read: action.value,
          all: false,
        }
      } else {
        return {
          ...state,
          read: action.value,
          all: false,
        }
      }
    case "SET_ALL":
      if (action.value) {
        return {
          read: false,
          answered: false,
          all: true,
        }
      } else {
        return {
          ...state,
          all: false,
        }
      }
    default:
      return {} as any
  }
}

const Messages: FC = () => {
  const [filter, dispatchFilter] = useReducer(filterReducer, filterInitialState)
  const { data: adminEmail } = useAdminEmailQuery()
  const { data, loading, refetch } = useQueryMessagesQuery()
  const {
    isOpen: isAlertOpen,
    title: alertTitle,
    message: alertMessage,
    setAlert,
  } = useAlert()
  const { data: newMessage } = useSubscribeMessagesSubscription()

  const [messages, setMessages] = useState<any[]>([])
  const [searchValue, setSearchValue] = useState<string>("")
  const getSearchValue = (v: string) => {
    setSearchValue(v)
  }
  useEffect(() => {
    if (data && data.messages) {
      setMessages(data.messages)
    }
  }, [data])
  useEffect(() => {
    if (newMessage) {
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
      {isAlertOpen && (
        <Alert
          backdrop
          cb={() => {
            refetch()
          }}
          title={alertTitle}
          message={alertMessage}
          onClose={() => setAlert({ isOpen: false })}
          header
        />
      )}
      <SEO title="Adding New Messages To Stack" />
      <Dash_Layout>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <TheSection
            name="Search"
            id="search-for-message"
            style={{ paddingBottom: 25 }}
          >
            <div className="ml-5 sm:mr-5 flex items-center">
              <Input
                id="search"
                color="200"
                style={{ padding: "5px 8px" }}
                containerClasses="flex-grow"
                placeholder="Ex. email@email.com, subject"
                name="search"
                value={searchValue}
                getValue={getSearchValue}
              />
              <Button normal outline>
                Search
              </Button>
            </div>
          </TheSection>
          <TheSection
            name="Filter"
            id="filter-messages"
            className="lg:col-span-2 lg:col-start-2"
            style={{ paddingBottom: 25 }}
          >
            <div className="ml-5 flex items-center gap-3 flex-wrap">
              <Input
                id="all-filter"
                name="all-filter"
                label="All"
                type="checkbox"
                checked={filter.all}
                getValue={v =>
                  dispatchFilter({
                    type: "SET_ALL",
                    value: !filter.all,
                  })
                }
              />
              <Input
                id="answered-filter"
                name="answered-filter"
                label="Answered"
                type="checkbox"
                checked={filter.answered}
                getValue={v =>
                  dispatchFilter({
                    type: "SET_ANSWERED",
                    value: !filter.answered,
                  })
                }
              />
              <Input
                id="unread-filter"
                name="unread-filter"
                label="Unread"
                type="checkbox"
                checked={filter.read}
                getValue={v =>
                  dispatchFilter({
                    type: "SET_READ",
                    value: !filter.read,
                  })
                }
              />
            </div>
          </TheSection>
        </div>
        <TheSection
          name="Messages"
          id="messages"
          className="mb-10"
          style={{ paddingBottom: 25 }}
        >
          <div className="messages--container">
            {messages.length! > 0 &&
              messages.map(m => (
                <Dash_Message
                  adminEmail={adminEmail?.me?.email!}
                  key={m.id}
                  refetch={refetch}
                  data={m as any}
                />
              ))}
          </div>
        </TheSection>
      </Dash_Layout>
    </>
  )
}

export default Messages

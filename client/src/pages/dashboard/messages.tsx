import { PageProps } from "gatsby"
import React, { FC, useState } from "react"
import TheSection from "../../components/App/TheSection"
import Dash_Layout from "../../components/Dashboard/Dash_Layout"
import Dash_Message from "../../components/Dashboard/Dash_Message"
import { SEO } from "../../components/SEO"
import Button from "../../components/UI/Button"
import Input from "../../components/UI/Input"

const Messages: FC<PageProps> = ({ children, params, data }) => {
  const [searchValue, setSearchValue] = useState<string>("")
  const getSearchValue = (v: string) => {
    setSearchValue(v)
  }
  return (
    <>
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
            <div className="ml-5"></div>
          </TheSection>
        </div>
        <TheSection name="Messages" id="messages" style={{ paddingBottom: 25 }}>
          <div className="messages--container">
            <Dash_Message />
            <Dash_Message />
            <Dash_Message />
            <Dash_Message />
            <Dash_Message />
            <Dash_Message />
          </div>
        </TheSection>
      </Dash_Layout>
    </>
  )
}

export default Messages

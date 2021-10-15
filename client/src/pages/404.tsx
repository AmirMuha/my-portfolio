import { PageProps } from "gatsby"
import React, { FC } from "react"
import InPageMenu from "../components/App/InPageMenu"
import TheSection from "../components/App/TheSection"
import Layout from "../components/Layout"

const NotFound: FC<PageProps> = ({ location }) => {
  return (
    <>
      <Layout nav={false}>
        <div className="my-16 mx-5 py-16 px-5 break-words sm:m-16 text-center sm:p-16 text-md font-semibold bg-palatte-200">
          <div className="mx-5">Couldn't find</div>
          <span className="inline font-light text-sm text-palatte-400">
            {location.href}
          </span>
        </div>
        <TheSection
          className=""
          style={{ paddingBottom: 25 }}
          id="what-next"
          name="What Next ?"
        >
          <InPageMenu pipes="left" />
        </TheSection>
      </Layout>
    </>
  )
}

export default NotFound

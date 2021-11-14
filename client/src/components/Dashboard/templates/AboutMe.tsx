import React, { FC, useEffect, useState } from "react"
import {
  useAboutsQuery,
  useAdminEmailQuery,
  useCreateAboutMutation
} from "../../../types/graphql-types"

import Alert from "../../UI/Alert"
import Button from "../../UI/Button"
import Dash_About from "../../Dashboard/Dash_About"
import Dash_Layout from "../Dash_Layout"
import Input from "../../UI/Input"
import Loading from "../../UI/Loading"
import Markdown from "../../utility/Markdown"
import Modal from "../../UI/Modal"
import { SEO } from "../../SEO"
import TextArea from "../../UI/TextArea"
import { useAlert } from "../../../util/useAlert"
import { useAlertGraphqlError } from "../../../util/useAlertGraphqlError"

const EditAboutMe: FC = () => {
  const {
    isOpen: isAlertOpen,
    title: alertTitle,
    message: alertMessage,
    setAlert,
  } = useAlert()
  const [isCreateAboutBoxOpen, setIsCreateAboutBoxOpen] =
    useState<boolean>(false)
  const [abouts, setAbouts] = useState<any[]>([])
  const [aboutTitle, setAboutTitle] = useState<string>("")
  const [aboutBody, setAboutBody] = useState<string>("")
  const [isBodyPreviewBoxOpen, setIsBodyPreviewBoxOpen] =
    useState<boolean>(false)

  const { data, loading, error, refetch } = useAboutsQuery()
  const { data: admin } = useAdminEmailQuery()
  const [
    mutateNewAbout,
    { error: createAboutError, loading: createAboutLoading },
  ] = useCreateAboutMutation()

  useEffect(() => {
    if (data?.abouts && data?.abouts?.length > 0) {
      setAbouts(data.abouts)
    }
  }, [data])
  useAlertGraphqlError(createAboutError, createAboutLoading, setAlert)

  const createAbout = (e: React.FormEvent) => {
    e.preventDefault()
    if (!aboutTitle && !aboutBody && admin?.me?.email) {
      setAlert({
        isOpen: true,
        message: `${
          aboutTitle ? "Title" : "Body"
        } field are required, please provide some value.`,
        title: "Error",
      })
      return
    }
    mutateNewAbout({
      variables: {
        adminEmail: admin?.me?.email!,
        body: aboutBody,
        title: aboutTitle,
      },
    })
      .then(res => {
        setAlert({
          isOpen: true,
          title: "Success",
          message: "Created about successfully.",
        })
        setAbouts(prev => {
          return [...prev, res.data?.createAbout]
        })
        setIsCreateAboutBoxOpen(false)
        setAboutBody("")
        setAboutTitle("")
      })
      .catch(() => {})
  }
  if (loading && !error) {
    return <Loading />
  }

  return (
    <>
      {isAlertOpen && (
        <Alert
          backdrop
          header
          title={alertTitle}
          message={alertMessage}
          onClose={() => setAlert({ isOpen: false })}
          cb={() => refetch()}
        />
      )}
      <SEO title="Adding New AboutMe To Stack" />
      <Dash_Layout>
        {abouts.map(({ title, body, id }) => (
          <Dash_About key={id} refetch={refetch} data={{id, title, body}} />
        ))}
        <div className="my-10 w-full">
          <Button
            normal
            outline
            className="w-full"
            onClick={() => setIsCreateAboutBoxOpen(true)}
          >
            Add A New Block
          </Button>
        </div>
      </Dash_Layout>
      {isCreateAboutBoxOpen && (
        <Modal
          header
          title="Create A New About Block"
          maxWidth="800px"
          onClose={() => setIsCreateAboutBoxOpen(false)}
        >
          <div>
            <form onSubmit={createAbout}>
              <Input
                id="about-title"
                name="about-title"
                label="Title"
                color="200"
                textColor="500"
                placeholder="Enter the title"
                getValue={v => setAboutTitle(v)}
                value={aboutTitle}
                required
              />
              <div className="relative">
                {isBodyPreviewBoxOpen ? (
                  <div className="text-palatte-500">
                    <h3 className="">Body</h3>
                    <div className="w-full border-palatte-200 bg-palatte-200 text-palatte-500 px-3 py-2">
                      <Markdown>
                        {aboutBody || "Start writing the body."}
                      </Markdown>
                    </div>
                  </div>
                ) : (
                  <TextArea
                    id="new-description"
                    name="new-description"
                    color="200"
                    textColor="500"
                    rows={10}
                    label="Description"
                    getValue={v => setAboutBody(v)}
                    value={aboutBody}
                  />
                )}
                <button
                  type="button"
                  onClick={() => setIsBodyPreviewBoxOpen(prev => !prev)}
                  className="border border-palatte-500 bg-palatte-500 text-palatte-100 text-tiny px-3 py-1 absolute right-1 top-8"
                >
                  {isBodyPreviewBoxOpen ? "Raw Text" : "preview"}
                </button>
              </div>
              <div className="flex gap-2 items-center justify-end">
                <Button
                  type="button"
                  onClick={() => setIsCreateAboutBoxOpen(false)}
                  color="100"
                  textColor="500"
                  borderColor="500"
                  outline
                  normal
                >
                  Close
                </Button>
                <Button type="submit" outline normal>
                  Save
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  )
}

export default EditAboutMe

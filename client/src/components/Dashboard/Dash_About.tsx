import React, { FC, useEffect, useState } from "react"
import {
  useDeleteAboutMutation,
  useUpdateAboutBodyMutation,
  useUpdateAboutTitleMutation
} from "../../types/graphql-types"

import Alert from "../UI/Alert"
import Confirm from "../UI/Confirm"
import Editable from "./Editable"
import TheSection from "../App/TheSection"
import { useAlert } from "../../util/useAlert"
import { useAlertGraphqlError } from "../../util/useAlertGraphqlError"

interface Props {
  refetch: () => void
  data: {
    id: string
    title: string
    body: string
  }
}
const Dash_About: FC<Props> = ({ data, refetch }) => {
  const [aboutTitle, setAboutTitle] = useState<string>("")
  const [aboutBody, setAboutBody] = useState<string>("")
  const {
    isOpen: isAlertOpen,
    title: alertTitle,
    message: alertMessage,
    setAlert,
  } = useAlert()
  const [isConfirmDeleteBoxOpen, setIsConfirmDeleteBoxOpen] = useState<{
    isOpen: boolean
  }>({ isOpen: false })
  const [
    mutateUpdateBody,
    { error: updateBodyError, loading: updateBodyLoading },
  ] = useUpdateAboutBodyMutation()
  const [
    mutateUpdateTitle,
    { error: updateTitleError, loading: updateTitleLoading },
  ] = useUpdateAboutTitleMutation()
  const [
    mutateDelete,
    { error: deleteAboutError, loading: deleteAboutLoading },
  ] = useDeleteAboutMutation()

  useEffect(() => {
    setAboutBody(data.body)
    setAboutTitle(data.title)
  }, [data])

  useAlertGraphqlError(updateBodyError, updateBodyLoading, setAlert)
  useAlertGraphqlError(updateTitleError, updateTitleLoading, setAlert)
  useAlertGraphqlError(deleteAboutError, deleteAboutLoading, setAlert)

  const updateAboutTitle = () => {
    if (!aboutTitle) {
      setAlert({
        isOpen: true,
        message: `${
          aboutTitle ? "Title" : "Body"
        } field are required, please provide some value.`,
        title: "Error",
      })
      return
    }
    mutateUpdateTitle({
      variables: {
        id: data.id,
        title: aboutTitle,
      },
    })
      .then(() => {
        setAlert({
          isOpen: true,
          message: "Updated the about successfully.",
          title: "Success",
        })
      })
      .catch(() => {})
  }

  const updateAboutBody = () => {
    if (!aboutBody) {
      setAlert({
        isOpen: true,
        message: `${
          aboutTitle ? "Title" : "Body"
        } field are required, please provide some value.`,
        title: "Error",
      })
      return
    }
    mutateUpdateBody({
      variables: {
        id: data.id,
        body: aboutBody,
      },
    })
      .then(() => {
        setAlert({
          isOpen: true,
          message: "Updated the about successfully.",
          title: "Success",
        })
      })
      .catch(() => {})
  }

  const deleteAbout = () => {
    if (!data.id) {
      setAlert({
        isOpen: true,
        title: "Error",
        message: "Id is required to delete the about.",
      })
      return
    }
    mutateDelete({
      variables: {
        id: data.id,
      },
    })
      .then(() => {
        setAlert({
          isOpen: true,
          title: "Success",
          message: "Deleted the about successfully.",
        })
      })
      .catch(() => {})
  }

  return (
    <>
      {isConfirmDeleteBoxOpen.isOpen && (
        <Confirm
          header
          title="Delete About Block"
          text={`Are you sure you want to delete about block with id of ${data.id}`}
          onClose={() => setIsConfirmDeleteBoxOpen({ isOpen: false })}
          getValue={v => {
            if (v) {
              deleteAbout()
            }
          }}
        />
      )}
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
      <TheSection
        onDeleteSection={() => setIsConfirmDeleteBoxOpen({ isOpen: true })}
        titleEditable
        titleValue={aboutTitle}
        getTitleValue={v => setAboutTitle(v)}
        onSaveTitleValue={updateAboutTitle}
        key={data.id}
        id={data.id}
        name={data.title}
      >
        <div className="px-5 pb-8">
          <Editable
            textarea
            textareaRows={20}
            value={aboutBody}
            getValue={v => setAboutBody(v)}
            onSave={updateAboutBody}
            mode="IN_POSITION"
            position="tr"
            positionPlace="outside"
          />
        </div>
      </TheSection>
    </>
  )
}
export default Dash_About

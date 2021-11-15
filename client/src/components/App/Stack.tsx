import Input, { File } from "../UI/Input"
import React, { FC, PropsWithChildren, useState } from "react"
import {
  Stack as StackType,
  useCreateStackMutation,
  useDeleteFileMutation,
  useDeletestackMutation,
  useUploadFileMutation,
} from "../../types/graphql-types"

import Alert from "../UI/Alert"
import Button from "../UI/Button"
import Confirm from "../UI/Confirm"
import Modal from "../UI/Modal"
import SmallPipe from "../UI/SmallPipe"
import { useAlert } from "../../util/useAlert"
import { useAlertGraphqlError } from "../../util/useAlertGraphqlError"

interface Props {
  data?: StackType[]
  editable?: boolean
  adminEmail?: string
  refetch?: () => void
}
const Stack: FC<PropsWithChildren<Props>> = ({
  adminEmail,
  data,
  editable = false,
  refetch,
}) => {
  const [isStackCreateOpen, setStackCreateOpen] = useState<boolean>(false)
  const [
    mutateDeleteImage,
    { error: deleteImageError, loading: deleteImageLoading },
  ] = useDeleteFileMutation()
  const [
    mutateNewStack,
    { error: createStackError, loading: createStackLoading },
  ] = useCreateStackMutation()
  const [
    mutateNewImage,
    { error: uploadFileError, loading: uploadFileLoading },
  ] = useUploadFileMutation()
  const [
    mtuateStackDelete,
    { error: deleteStackError, loading: deleteStackLoading },
  ] = useDeletestackMutation()

  const {
    isOpen: alertIsOpen,
    title: alertTitle,
    message: alertMessage,
    setAlert,
  } = useAlert()
  const [newStackTitle, setNewStackTitle] = useState<string>("")
  const [newStackImageFile, setNewStackImageFile] = useState<File>()
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState({
    isOpen: false,
    id: "",
  })
  useAlertGraphqlError(deleteImageError, deleteImageLoading, setAlert)
  useAlertGraphqlError(createStackError, createStackLoading, setAlert)
  useAlertGraphqlError(uploadFileError, uploadFileLoading, setAlert)
  useAlertGraphqlError(deleteStackError, deleteStackLoading, setAlert)
  const unknownError = () => {
    setAlert({
      isOpen: true,
      title: "Error",
      message: "Unknown Error: Something went wrong, please try again later.",
    })
  }

  const saveStack = () => {
    if (!newStackImageFile || !newStackTitle) {
      setAlert({
        isOpen: true,
        title: "Error",
        message:
          !newStackTitle && !newStackImageFile
            ? "Both image and title are required, please provide some values."
            : `${
                !newStackTitle ? "Title" : "Image"
              } is required, Please choose your image.`,
      })
      return
    }
    mutateNewImage({
      variables: {
        file: newStackImageFile,
        isEdit: true,
      },
    })
      .then(res => {
        if (res.data) {
          mutateNewStack({
            variables: {
              email: adminEmail!,
              title: newStackTitle,
              image: res.data.uploadSingleFile,
            },
          })
            .then(() => {
              setAlert({
                isOpen: true,
                title: "Success",
                message: "New stack created successfully.",
              })
              setNewStackTitle("")
              setNewStackImageFile(undefined)
              setStackCreateOpen(false)
              refetch && refetch()
            })
            .catch(() => {
              mutateDeleteImage({
                variables: {
                  filename: res.data!.uploadSingleFile,
                  isTemp: false
                },
              }).catch(() => {})
            })
        } else {
          unknownError()
        }
      })
      .catch(() => {})
  }
  const deleteStackItem = (d: boolean, id: string) => {
    if (d) {
      mtuateStackDelete({
        variables: {
          id,
        },
      })
        .then(res => {
          if (res.data && res.data.deleteStack) {
            mutateDeleteImage({
              variables: {
                filename: res.data.deleteStack.image,
                isTemp: false
              },
            })
              .then(() => {
                setAlert({
                  isOpen: true,
                  title: "Success",
                  message: "Deleted the stack successfully.",
                })
              })
              .catch(() => {})
          } else {
            unknownError()
          }
          refetch && refetch()
        })
        .catch(() => {})
    }
  }

  return (
    <>
      {isStackCreateOpen && (
        <Modal
          header
          title="Create New Stack"
          maxWidth="700px"
          onClose={() => {
            setStackCreateOpen(false)
            setNewStackTitle("")
            setNewStackImageFile(undefined)
          }}
        >
          <div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
            <div className="flex-grow">
              <Input
                label="Title"
                placeholder="Enter the title"
                color="200"
                value={newStackTitle}
                id="stack-title"
                textColor="500"
                name="stack-title"
                getValue={v => setNewStackTitle(v)}
              />
            </div>
            <div className="flex-grow">
              <Input
                label="Image"
                color="200"
                value={newStackImageFile?.name}
                id="new-stack"
                name="new-stack"
                type="file"
                buttonTitle="Choose"
                getValue={(_, f) => setNewStackImageFile(f[0])}
              />
            </div>
            <Button className="col-span-2" normal outline onClick={saveStack}>
              Save
            </Button>
          </div>
        </Modal>
      )}
      {alertIsOpen && (
        <Alert
          onClose={() => setAlert({ isOpen: false })}
          message={alertMessage}
          title={alertTitle}
          header
          backdrop
        />
      )}
      {editable ? (
        <div>
          <SmallPipe className="flex w-full items-center mb-5">
            <Button
              className="w-full"
              normal
              outline
              onClick={() => setStackCreateOpen(true)}
            >
              Create New Stack
            </Button>
          </SmallPipe>
          {data?.length! > 0 && (
            <div
              style={{ width: "100vw" }}
              className="bg-palatte-500 w-full pb-2 pt-3"
            >
              <ul className="flex stack px-3 items-center gap-2">
                {data?.map(s => (
                  <li title={`Delete ${s.title}`}>
                    <button
                      onClick={() =>
                        setIsConfirmDeleteOpen({ isOpen: true, id: s.id })
                      }
                    >
                      <img
                        src={`${(window as any).__SERVER_API__}/${s.image}`}
                        alt={s.title}
                      />
                    </button>
                  </li>
                ))}
              </ul>
              {isConfirmDeleteOpen.isOpen && (
                <Confirm
                  header
                  title={`Deleting Stack Item`}
                  text="Are you sure you want to delete NodeJS Stack Item ?"
                  getValue={v => deleteStackItem(v, isConfirmDeleteOpen.id)}
                  onClose={() =>
                    setIsConfirmDeleteOpen({ isOpen: false, id: "" })
                  }
                ></Confirm>
              )}
            </div>
          )}
        </div>
      ) : (
        <div
          style={{ width: "100vw" }}
          className="bg-palatte-500 w-full pb-2 pt-3"
        >
          <ul className="flex px-3 stack items-center gap-2">
            {data?.map(s => (
              <li title={s.title}>
              <img
                src={`${(window as any).__SERVER_API__}/${s.image}`}
                alt={s.title}
              />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Stack

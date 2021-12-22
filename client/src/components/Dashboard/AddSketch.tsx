import Input, { File } from "../UI/Input"
import React, {
  FC,
  PropsWithChildren,
  Reducer,
  useReducer,
  useState,
} from "react"
import {
  useCreateSketchMutation,
  useUploadAndSketchImageDownloadablesMutation,
} from "../../types/graphql-types"

import Alert from "../UI/Alert"
import Button from "../UI/Button"
import InBoxLoading from "../UI/InBoxLoading"
import Markdown from "../utility/Markdown"
import Modal from "../UI/Modal"
import SmallPipe from "../UI/SmallPipe"
import TextArea from "../UI/TextArea"
import { addNewSketchReducer } from "../../store/editProject"
import { createPortal } from "react-dom"
import { setSketchReducer } from "../../store/newProjectSlice"
import { useAlert } from "../../util/useAlert"
import { useAlertGraphqlError } from "../../util/useAlertGraphqlError"
import { useTheDispatch } from "../../store/store"

const isBrowser = typeof window !== "undefined"
interface ReducerState {
  description: string
  summary: string
  downloadables: File | null
  downloadables_name: string
  image: File | null
  imageName: string
  title: string
}
interface ReducerAction {
  type:
    | "RESET"
    | "TITLE"
    | "DESCRIPTION"
    | "SUMMARY"
    | "IMAGE"
    | "DOWNLOADABLES"
  value: any
}
const initialState: ReducerState = {
  description: "",
  summary: "",
  downloadables_name: "",
  downloadables: null,
  title: "",
  image: null,
  imageName: "",
}

const reducer: Reducer<ReducerState, ReducerAction> = (
  state,
  { type, value }
) => {
  switch (type) {
    case "RESET":
      return {
        ...initialState,
      }
    case "DESCRIPTION":
      return {
        ...state,
        description: value || "",
      }
    case "SUMMARY":
      return {
        ...state,
        summary: value || "",
      }
    case "TITLE":
      return {
        ...state,
        title: value || "",
      }
    case "IMAGE":
      return {
        ...state,
        image: value[0] || null,
        imageName: value[0]?.name || "",
      }
    case "DOWNLOADABLES":
      return {
        ...state,
        downloadables: value || null,
        downloadables_name: value[0]?.name || "",
      }
    default:
      return state
  }
}
interface Props {
  projectId?: string
  mode?: "ADD" | "EDIT"
}

const AddSketch: FC<PropsWithChildren<Props>> = ({
  projectId,
  mode = "EDIT",
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isNewSketchUploading, setIsNewSketchUploading] = useState<boolean>(false)
  const dispatchNewSketch = useTheDispatch()
  const [
    mutateFiles,
    { error: uploadFilesError, loading: uploadFilesLoading },
  ] = useUploadAndSketchImageDownloadablesMutation()
  const [
    mutateNewSketch,
    { error: createSketchError, loading: createSketchLoading },
  ] = useCreateSketchMutation()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const {
    title: alertTitle,
    isOpen: isAlertOpen,
    message: alertMessage,
    setAlert,
  } = useAlert()
  const [isSummaryPreviewBoxOpen, setIsSummaryPreviewBoxOpen] =
    useState<boolean>(false)
  const [isDescriptionPreviewBoxOpen, setIsDescriptionPreviewBoxOpen] =
    useState<boolean>(false)
  const [sketch, dispatch] = useReducer(reducer, initialState)
  useAlertGraphqlError(createSketchError, createSketchLoading, setAlert)
  useAlertGraphqlError(uploadFilesError, uploadFilesLoading, setAlert)
  const unknownError = () => {
    setAlert({
      isOpen: true,
      title: "Error",
      message: "unknown Error: Something went wrong.",
    })
  }

  const save = (e: React.FormEvent) => {
    e.preventDefault()
    let hasError = false
    setIsLoading(true)
    setIsNewSketchUploading(true)
    for (const s in sketch) {
      if (!sketch[s]) {
        setAlert({
          isOpen: true,
          title: "Error",
          message: `${s} field is required please provide some value.`,
        })
        setIsNewSketchUploading(false)
        hasError = true
      }
      if (
        s === "summary" &&
        (sketch[s].length < 50 || sketch[s].length > 150)
      ) {
        setAlert({
          isOpen: true,
          title: "Error",
          message:
            "Summary must be at least 50 and at most 150 charactors long.",
        })
        setIsNewSketchUploading(false)
        hasError = true
      } else if (s === "description" && sketch[s].length === 0) {
        setAlert({
          isOpen: true,
          title: "Error",
          message: "Description is required, please provide a description.",
        })
        setIsNewSketchUploading(false)
        hasError = true
      }
    }

    if (!hasError) {
      if (mode === "ADD") {
        mutateFiles({
          variables: {
            image: sketch.image,
            downloadables: sketch.downloadables,
            isEdit: false,
          },
        })
          .then(res => {
            if (res?.data?.uploadSingleFile && res?.data?.uploadFilesToZip) {
              dispatchNewSketch(
                setSketchReducer({
                  ...sketch,
                  image: res.data.uploadSingleFile,
                  downloadables: res.data.uploadFilesToZip,
                })
              )
              setIsNewSketchUploading(false)
              setIsOpen(false)
              dispatch({ type: "RESET", value: "" })
            }
          })
          .catch(() => {
            setIsNewSketchUploading(false)
          })
      } else {
        mutateFiles({
          variables: {
            image: sketch.image,
            downloadables: sketch.downloadables,
            isEdit: true,
          },
        })
          .then(res => {
            if (res.data) {
              mutateNewSketch({
                variables: {
                  projectId: projectId!,
                  summary: sketch.summary,
                  description: sketch.description,
                  downloadables: res.data.uploadFilesToZip,
                  image: res.data.uploadSingleFile,
                  title: sketch.title,
                },
              })
                .then(resp => {
                  if (resp.data) {
                    setAlert({
                      isOpen: true,
                      title: "Success",
                      message: "Added a new sketch successfully.",
                    })
                    dispatchNewSketch(
                      addNewSketchReducer({
                        id: resp.data.createSketch.id,
                        description: resp.data.createSketch.description,
                        summary: resp.data.createSketch.summary,
                        title: resp.data.createSketch.title,
                        image: resp.data.createSketch.image,
                        downloadables: resp.data.createSketch.downloadables,
                      })
                    )
                    setIsNewSketchUploading(false)
                    setIsOpen(false)
                    dispatch({ type: "RESET", value: "" })
                  } else {
                    unknownError()
                  }
                })
                .catch(() => {
                  setIsNewSketchUploading(false)
                })
            }
          })
          .catch(() => {
            setIsNewSketchUploading(false)
          })
      }
    }
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && isBrowser &&
        createPortal(
          <div className="fixed top-0 left-0 w-full h-full">
            <InBoxLoading text="Loading" />
          </div>,
          document.body
        )}
      {isAlertOpen && (
        <Alert
          header
          position="TOP"
          onClose={() => setAlert({ isOpen: false, message: "" })}
          title={alertTitle}
          message={alertMessage}
          backdrop
          autoClose={5}
        />
      )}
      <div>
        <SmallPipe className="mb-5">
          <Button
            onClick={() => setIsOpen(true)}
            normal
            outline
            className="w-full"
          >
            Add A New Sketch
          </Button>
        </SmallPipe>
        {isOpen && (
          <Modal
            header
            stickyHeader
            title="Adding A New Sketch"
            onClose={() => setIsOpen(false)}
          >
            {
              isNewSketchUploading && 
              <InBoxLoading />
            }
            <form onSubmit={save} className="w-full">
              <div className="mb-3">
                <Input
                  label="Title"
                  id="title"
                  name="title"
                  placeholder="Enter The Title"
                  textColor="500"
                  color="200"
                  value={sketch.title}
                  getValue={v => dispatch({ type: "TITLE", value: v })}
                />
                <div className="relative">
                  {isSummaryPreviewBoxOpen ? (
                    <div className="text-palatte-500">
                      <h3 className="">Summary</h3>
                      <div className="w-full px-3 py-2 border-palatte-200 bg-palatte-200 text-palatte-500">
                        <Markdown>{sketch.summary || "Nothing Yet !"}</Markdown>
                      </div>
                    </div>
                  ) : (
                    <TextArea
                      id="new-summary"
                      name="new-summary"
                      color="200"
                      textColor="500"
                      rows={5}
                      label="Summary"
                      getValue={v => dispatch({ type: "SUMMARY", value: v })}
                      value={sketch.summary}
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => setIsSummaryPreviewBoxOpen(prev => !prev)}
                    className="absolute px-3 py-1 border border-palatte-500 bg-palatte-500 text-palatte-100 text-tiny right-1 top-8"
                  >
                    {isSummaryPreviewBoxOpen ? "Raw Text" : "preview"}
                  </button>
                </div>
                <div className="relative">
                  {isDescriptionPreviewBoxOpen ? (
                    <div className="text-palatte-500">
                      <h3 className="">Description</h3>
                      <div className="w-full px-3 py-2 border-palatte-200 bg-palatte-200 text-palatte-500">
                        <Markdown>
                          {sketch.description || "Nothing Yet !"}
                        </Markdown>
                      </div>
                    </div>
                  ) : (
                    <TextArea
                      id="new-description"
                      name="new-description"
                      color="200"
                      textColor="500"
                      rows={5}
                      label="Description"
                      getValue={v =>
                        dispatch({ type: "DESCRIPTION", value: v })
                      }
                      value={sketch.description}
                    />
                  )}
                  <button
                    type="button"
                    onClick={() =>
                      setIsDescriptionPreviewBoxOpen(prev => !prev)
                    }
                    className="absolute px-3 py-1 border border-palatte-500 bg-palatte-500 text-palatte-100 text-tiny right-1 top-8"
                  >
                    {isDescriptionPreviewBoxOpen ? "Raw Text" : "preview"}
                  </button>
                </div>
                <Input
                  type="file"
                  maxSize={50}
                  label="Downloadables"
                  buttonTitle="Choose Downloadables"
                  id="downloadables"
                  name="downloadables"
                  pattern=".pdf, .ppt"
                  multiple
                  value={sketch.downloadables_name}
                  getValue={(_, f) =>
                    dispatch({ type: "DOWNLOADABLES", value: f })
                  }
                />
                <Input
                  type="file"
                  label="Image"
                  buttonTitle="Choose Image"
                  pattern="image/*"
                  id="new-image"
                  name="new-image"
                  value={sketch.imageName}
                  getValue={(_, f) => dispatch({ type: "IMAGE", value: f })}
                />
              </div>
              <div className="flex items-center justify-end gap-2">
                <Button
                  onClick={() => {
                    dispatch({ type: "RESET", value: "" })
                    setIsOpen(false)
                  }}
                  normal
                  outline
                  borderColor="500"
                  color="100"
                  textColor="500"
                >
                  Close
                </Button>
                <Button type="submit" normal outline>
                  Save
                </Button>
              </div>
            </form>
          </Modal>
        )}
      </div>
    </>
  )
}

export default AddSketch

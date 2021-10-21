import { useMutation } from "@apollo/client"
import React, {
  FC,
  PropsWithChildren,
  Reducer,
  useReducer,
  useState,
} from "react"
import { setSketchReducer } from "../../store/newProjectSlice"
import { useTheDispatch } from "../../store/store"
import { UploadSingleFileMutation } from "../../util/mutations"
import { useAlert } from "../../util/useAlert"
import Alert from "../UI/Alert"
import Button from "../UI/Button"
import Input, { File } from "../UI/Input"
import Modal from "../UI/Modal"
import SmallPipe from "../UI/SmallPipe"
import TextArea from "../UI/TextArea"
import Markdown from "../utility/Markdown"

interface ReducerState {
  description: string
  summary: string
  download_link: string
  image: File | null
  imageName: string
  title: string
}
interface ReducerAction {
  type: "TITLE" | "DESCRIPTION" | "SUMMARY" | "IMAGE" | "DOWNLOAD_LINK"
  value: any
}
const initialState: ReducerState = {
  description: "",
  summary: "",
  download_link: "",
  title: "",
  image: null,
  imageName: "",
}

const reducer: Reducer<ReducerState, ReducerAction> = (
  state,
  { type, value }
) => {
  switch (type) {
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
    case "DOWNLOAD_LINK":
      return {
        ...state,
        downloadUrl: value || "",
      }
    default:
      return state
  }
}
interface Props {
  data: any
}

const AddSketch: FC<PropsWithChildren<Props>> = ({ data }) => {
  const dispatchNewSketch = useTheDispatch()
  const [mutateImage] = useMutation(UploadSingleFileMutation)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { isOpen: errorIsOpen, message: errorMsg, setAlert } = useAlert()
  const [isSummaryPreviewBoxOpen, setIsSummaryPreviewBoxOpen] =
    useState<boolean>(false)
  const [isDescriptionPreviewBoxOpen, setIsDescriptionPreviewBoxOpen] =
    useState<boolean>(false)
  const [sketch, dispatch] = useReducer(reducer, initialState)
  const save = () => {
    // mutate the new sketch
    let hasError = false
    for (const s in sketch) {
      if (!sketch[s]) {
        hasError = true
        setAlert({
          isOpen: true,
          message: `${s} field is required please provide some value.`,
        })
      }
    }
    if (!hasError) {
      mutateImage({ variables: { file: sketch.image } })
        .then(res => {
          if (res.data?.uploadSingleFile) {
            dispatchNewSketch(
              setSketchReducer({
                ...sketch,
                image: res.data.uploadSingleFile,
              })
            )
          }
        })
        .catch(e => {
          console.log(e)
          setAlert({
            isOpen: true,
            message: `Something went wrong during uploading the image: ${sketch.imageName}.`,
            title: "Server Error",
          })
        })
    }
  }
  return (
    <>
      {errorIsOpen && (
        <Alert
          header
          position="CENTER"
          onClose={() => setAlert({ isOpen: false, message: "" })}
          title="Error"
          message={errorMsg}
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
                    <div className="w-full border-palatte-200 bg-palatte-200 text-palatte-500 px-3 py-2">
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
                  onClick={() => setIsSummaryPreviewBoxOpen(prev => !prev)}
                  className="border border-palatte-500 bg-palatte-500 text-palatte-100 text-tiny px-3 py-1 absolute right-1 top-8"
                >
                  {isSummaryPreviewBoxOpen ? "Raw Text" : "preview"}
                </button>
              </div>
              <div className="relative">
                {isDescriptionPreviewBoxOpen ? (
                  <div className="text-palatte-500">
                    <h3 className="">Description</h3>
                    <div className="w-full border-palatte-200 bg-palatte-200 text-palatte-500 px-3 py-2">
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
                    getValue={v => dispatch({ type: "DESCRIPTION", value: v })}
                    value={sketch.description}
                  />
                )}
                <button
                  onClick={() => setIsDescriptionPreviewBoxOpen(prev => !prev)}
                  className="border border-palatte-500 bg-palatte-500 text-palatte-100 text-tiny px-3 py-1 absolute right-1 top-8"
                >
                  {isDescriptionPreviewBoxOpen ? "Raw Text" : "preview"}
                </button>
              </div>
              <Input
                label="Download Url"
                id="download-url"
                name="download-url"
                placeholder="Enter The Download URL"
                textColor="500"
                color="200"
                value={sketch.download_link}
                getValue={v => dispatch({ type: "DOWNLOAD_LINK", value: v })}
              />
              <Input
                type="file"
                label="Image"
                buttonTitle="Choose Image"
                id="new-image"
                name="new-image"
                value={sketch.imageName}
                getValue={(_, f) => dispatch({ type: "IMAGE", value: f })}
              />
            </div>
            <div className="flex items-center gap-2 justify-end">
              <Button
                onClick={() => setIsOpen(false)}
                normal
                outline
                borderColor="500"
                color="100"
                textColor="500"
              >
                Close
              </Button>
              <Button onClick={save} normal outline>
                Save
              </Button>
            </div>
          </Modal>
        )}
      </div>
    </>
  )
}

export default AddSketch

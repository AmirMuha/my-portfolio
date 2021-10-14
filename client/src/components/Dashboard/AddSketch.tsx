import React, {
  FC,
  PropsWithChildren,
  Reducer,
  useReducer,
  useState,
} from "react"
import Button from "../UI/Button"
import Input, { File } from "../UI/Input"
import Modal from "../UI/Modal"
import SmallPipe from "../UI/SmallPipe"
import TextArea from "../UI/TextArea"
import Markdown from "../utility/Markdown"

interface ReducerState {
  description: string
  summary: string
  downloadUrl: string
  descriptionPDF: string
  previewUrl: string
  image: File | null
}
interface ReducerAction {
  type:
    | "DESCRIPTION_PDF"
    | "DESCRIPTION"
    | "SUMMARY"
    | "IMAGE"
    | "DOWNLOAD_URL"
    | "PREVIEW_URL"
  value: any
}
const initialState: ReducerState = {
  description: "",
  summary: "",
  descriptionPDF: "",
  downloadUrl: "",
  previewUrl: "",
  image: null,
}

const reducer: Reducer<ReducerState, ReducerAction> = (
  state,
  { type, value }
) => {
  switch (type) {
    case "DESCRIPTION":
      return {
        ...state,
        description: value,
      }
    case "DESCRIPTION_PDF":
      return {
        ...state,
        descriptionPDF: value,
      }
    case "SUMMARY":
      return {
        ...state,
        summary: value,
      }
    case "IMAGE":
      return {
        ...state,
        image: value,
      }
    case "PREVIEW_URL":
      return {
        ...state,
        previewUrl: value,
      }
    case "DOWNLOAD_URL":
      return {
        ...state,
        downloadUrl: value,
      }
    default:
      return state
  }
}
interface Props {
  data: any
}

const AddSketch: FC<PropsWithChildren<Props>> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isSummaryPreviewBoxOpen, setIsSummaryPreviewBoxOpen] =
    useState<boolean>(false)
  const [isDescriptionPreviewBoxOpen, setIsDescriptionPreviewBoxOpen] =
    useState<boolean>(false)
  const [sketch, dispatch] = useReducer(reducer, initialState)
  const save = () => {
    // mutate the new sketch
    console.log(`new sketch added , value: ${sketch}`)
  }
  return (
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
                    <Markdown>{sketch.description || "Nothing Yet !"}</Markdown>
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
              value={sketch.downloadUrl}
              getValue={v => dispatch({ type: "DOWNLOAD_URL", value: v })}
            />
            <Input
              label="Preview Url"
              id="preview-url"
              name="preview-url"
              placeholder="Enter The Preview URL"
              textColor="500"
              color="200"
              value={sketch.previewUrl}
              getValue={v => dispatch({ type: "PREVIEW_URL", value: v })}
            />
            <Input
              type="file"
              label="Image"
              buttonTitle="Choose Image"
              id="new-image"
              name="new-image"
              value={sketch.image}
              getValue={v => dispatch({ type: "IMAGE", value: v })}
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
  )
}

export default AddSketch

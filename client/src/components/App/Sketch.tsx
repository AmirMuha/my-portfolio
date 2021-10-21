import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react"
import { setSketchReducer } from "../../store/newProjectSlice"
import { useTheDispatch } from "../../store/store"
import { useAlert } from "../../util/useAlert"
import Editable from "../Dashboard/Editable"
import Alert from "../UI/Alert"
import Button from "../UI/Button"
import Modal from "../UI/Modal"
import Markdown from "../utility/Markdown"
interface Props {
  editable?: boolean
  mode?: "ADD" | "EDIT"
  data: GatsbyTypes.Portfolio_Sketch
}
const Sketch: FC<PropsWithChildren<Props>> = ({
  mode = "EDIT",
  data,
  editable = false,
}) => {
  const dispatch = useTheDispatch()
  const { isOpen: isErrorOpen, message: errorMsg, setAlert } = useAlert()
  const [summary, setSummary] = useState<string>(data.summary)
  const [downloadLink, setDownloadLink] = useState<string>(data.download_link)
  const [description, setDescription] = useState<string>(data.description)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [imageFile, setImage] = useState<any>(null)
  const paragraphRef = useRef<HTMLParagraphElement>()
  useEffect(() => {
    paragraphRef.current?.scrollTo(0, 0)
  }, [paragraphRef])
  const getDownloadLink = (v: string) => {
    console.log(v)
    setDownloadLink(v)
  }
  const updateFn = (field: keyof GatsbyTypes.Portfolio_Sketch, val: string) => {
    if (val) {
      if (mode === "ADD") {
        dispatch(
          setSketchReducer({
            updateField: field,
            updateValue: val,
            id: data.id,
          })
        )
      } else {
        // editing
      }
    } else {
      setAlert({
        isOpen: true,
        message: `${field} field is required, please provide a value.`,
      })
    }
  }
  const updateDownloadLink = (v: string) => {
    // mutate the update
    updateFn("download_link", v)
    console.log("Updating the download, new Value => " + v)
  }
  const updateSketchDescription = (v: string) => {
    // mutate the update
    updateFn("description", v)
    console.log("Updating the Description, new Value => " + v)
  }
  const updateSketchSummary = (v: string) => {
    // mutate the update
    updateFn("summary", v)
    console.log("Updating the summary, new Value => " + v)
  }
  const getDescriptionValue = (v: string) => {
    console.log(v)
    setDescription(v)
  }
  const getSketchSummary = (v: string) => {
    console.log(v)
    setSummary(v)
  }
  const getImageFile = (f: File) => {
    console.log(f)
    setImage(f)
  }
  const updateImage = () => {
    // mutate the update
    console.log("Updating the image ...")
  }
  return (
    <>
      {isErrorOpen && (
        <Alert
          header
          title="Error"
          onClose={() => setAlert({ isOpen: false, message: "" })}
          backdrop
          position="CENTER"
          message={errorMsg}
          autoClose={5}
        />
      )}
      {editable ? (
        <div className="pl-5 pb-7 relative">
          <div
            style={{
              width: "auto",
              height: 400,
              maxWidth: 500,
            }}
            className="relative"
          >
            <div className="overflow-hidden">
              <img
                src={`${(window as any).__SERVER_API__}/${data.image}`}
                alt={data.title}
                style={{
                  width: "auto",
                  height: 400,
                  maxWidth: 500,
                }}
                className="object-cover object-center"
              />
            </div>
            <div className="p-1.5 absolute border-5 md:border-10 border-palatte-500 bg-palatte-200 bg-opacity-50 top-0 left-0 right-0 bottom-0">
              <div className="flex items-center justify-between">
                <Button
                  toUrl={`${(window as any).__SERVER_API__}/${
                    data.download_link
                  }`}
                  outline
                  target="_blank"
                  className="relative"
                  borderColor="100"
                  disabled
                  textColor="100"
                  color="500"
                >
                  Download
                  <Editable
                    customInputId={`download-${data.id}`}
                    title="Download URL"
                    mode="MODAL"
                    custom
                    inputType="url"
                    onSave={updateDownloadLink}
                    getValue={getDownloadLink}
                    value={downloadLink}
                  />
                </Button>
              </div>
            </div>
            <Editable
              file
              positionPlace="inside"
              mode="IN_POSITION"
              editButtonStyle={{ bottom: 10, right: 10 }}
              acceptableFileTypes="image/*"
              onSave={updateImage}
              getValue={getImageFile}
              value=""
            />
          </div>
          <div className="ml-10 border-l-5 border-palatte-500 md:border-l-10">
            <Editable
              className="px-5 py-3"
              mode="IN_POSITION"
              editButtonStyle={{ marginTop: 15 }}
              textarea
              position="tr"
              positionPlace="inside"
              getValue={getSketchSummary}
              onSave={updateSketchSummary}
              value={summary}
            />
            <Button
              textColor="500"
              fill
              style={{ borderLeft: 0, width: "100%" }}
              normal
              onClick={() => setIsOpen(prev => !prev)}
              outline
              color="100"
            >
              Read More
            </Button>
          </div>
          {isOpen && (
            <Modal
              header
              stickyHeader
              title={data.title}
              onClose={() => setIsOpen(prev => !prev)}
            >
              <div className="relative">
                <div>
                  <Editable
                    textarea
                    value={description}
                    getValue={getDescriptionValue}
                    mode="IN_POSITION"
                    position="tr"
                    positionPlace="inside"
                    textareaRows={20}
                    onSave={v => updateSketchDescription(v)}
                  />
                </div>
              </div>
            </Modal>
          )}
        </div>
      ) : (
        <div>
          <div className="pl-5 pb-7 relative overflow-y-scroll">
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src={`${(window as any).__SERVER_API__}/${data.image}`}
                  alt={data.title}
                  style={{
                    width: "auto",
                    height: 400,
                    maxWidth: 500,
                  }}
                  className="object-cover object-center"
                />
              </div>
              <div className="p-1.5 absolute border-5 md:border-10 border-palatte-500 bg-palatte-200 bg-opacity-50 top-0 left-0 right-0 bottom-0">
                <div className="flex items-center justify-between">
                  <Button
                    toUrl={data.download_link}
                    outline
                    target="_blank"
                    borderColor="100"
                    textColor="100"
                    color="500"
                  >
                    Download
                  </Button>
                </div>
              </div>
            </div>
            <div className="ml-10 border-l-5 border-palatte-500 md:border-l-10">
              <div style={{ margin: 0 }} className="px-5 py-3">
                <Markdown>{data.summary}</Markdown>
              </div>
              <Button
                textColor="500"
                fill
                style={{ borderLeft: 0, width: "100%" }}
                normal
                outline
                color="100"
                onClick={() => setIsOpen(prev => !prev)}
              >
                Read More
              </Button>
            </div>
          </div>
          {isOpen && (
            <Modal
              stickyHeader
              header
              title={data.title}
              onClose={() => setIsOpen(prev => !prev)}
            >
              <div className="relative">
                <div style={{ margin: 0 }}>
                  <Markdown>{data.description}</Markdown>
                </div>
              </div>
            </Modal>
          )}
        </div>
      )}
    </>
  )
}

export default Sketch

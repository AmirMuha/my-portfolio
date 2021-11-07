import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState
} from "react"
import { deleteReducer, setSketchReducer } from "../../store/newProjectSlice"
import {
  deleteSketchReducer,
  updateDownloadLinkReducer,
  updateSketchDescriptionRedcuer,
  updateSketchImageReducer,
  updateSketchSummaryReducer
} from "../../store/editProject"
import {
  useDeleteSketchMutation,
  useUpdateImageMutation,
  useUpdateSketchDescriptionMutation,
  useUpdateSketchDownloadLinkMutation,
  useUpdateSketchSummaryMutation
} from "../../types/graphql-types"

import Alert from "../UI/Alert"
import Button from "../UI/Button"
import Confirm from "../UI/Confirm"
import { Delete } from "../../icons/iconsJSX"
import Editable from "../Dashboard/Editable"
import Markdown from "../utility/Markdown"
import Modal from "../UI/Modal"
import { useAlert } from "../../util/useAlert"
import { useAlertGraphqlError } from "../../util/useAlertGraphqlError"
import { useTheDispatch } from "../../store/store"

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
  const [
    mutateSummary,
    { error: updateSketchSummaryError, loading: updateSketchSummaryLoading },
  ] = useUpdateSketchSummaryMutation()
  const [
    mutateImageUpdate,
    { error: udpateSketchImageError, loading: updateSketchImageLoading },
  ] = useUpdateImageMutation()
  const [
    mutateDescription,
    {
      error: updateSketchDescriptionError,
      loading: updateSketchDescriptionLoading,
    },
  ] = useUpdateSketchDescriptionMutation()
  const [
    mutateDownloadLink,
    {
      error: updateSketchDownloadLinkError,
      loading: updateSketchDownloadLinkLoading,
    },
  ] = useUpdateSketchDownloadLinkMutation()
  const [
    mutateSketchDelete,
    { error: deleteSketchError, loading: deleteSketchLoading },
  ] = useDeleteSketchMutation()
  const dispatch = useTheDispatch()
  const {
    isOpen: isAlertOpen,
    message: alertMessage,
    setAlert,
    title: alertTitle,
  } = useAlert()
  useAlertGraphqlError(
    updateSketchSummaryError,
    updateSketchSummaryLoading,
    setAlert
  )
  useAlertGraphqlError(
    updateSketchDescriptionError,
    updateSketchDescriptionLoading,
    setAlert
  )
  useAlertGraphqlError(
    udpateSketchImageError,
    updateSketchImageLoading,
    setAlert
  )
  useAlertGraphqlError(
    updateSketchDownloadLinkError,
    updateSketchDownloadLinkLoading,
    setAlert
  )
  useAlertGraphqlError(deleteSketchError, deleteSketchLoading, setAlert)
  const [isConfirmOpen, setConfirmBox] = useState(false)
  const imageRef = useRef<HTMLImageElement>()
  const [summary, setSummary] = useState<string>(data.summary)
  const [downloadLink, setDownloadLink] = useState<string>(data.download_link)
  const [description, setDescription] = useState<string>(data.description)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [imageFile, setImage] = useState<any>(null)
  const paragraphRef = useRef<HTMLParagraphElement>()
  useEffect(() => {
    paragraphRef.current?.scrollTo(0, 0)
  }, [paragraphRef])

  const unknownError = () => {
    setAlert({
      isOpen: true,
       title: "Error",
       message: "Unknown Error: Something went wrong."
    })
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
      }
    } else {
      setAlert({
        isOpen: true,
        message: `${field} field is required, please provide a value.`,
      })
    }
  }
  const updateDownloadLink = (v: string) => {
    if (mode === "ADD") {
      updateFn("download_link", v)
    } else {
      mutateDownloadLink({
        variables: {
          id: data.id,
          download_link: v,
        },
      })
        .then(res => {
          if(res.data && res.data.updateSketch) {
            setAlert({
              isOpen: true,
              message: "Updated downloadLink successfully.",
              title: "Success",
            })
            dispatch(
              updateDownloadLinkReducer({
                id: data.id,
                download_link: res.data.updateSketch.download_link,
              })
            )
          } else {
            unknownError()
          }
        })
    }
  }

  const updateSketchDescription = (v: string) => {
    if(v || v.length > 500) {
      if (mode === "ADD") {
        updateFn("description", v)
      } else {
        mutateDescription({
          variables: {
            id: data.id,
            description: v,
          },
        })
          .then(res => {
            if(res.data && res.data.updateSketch) {
              setAlert({
                isOpen: true,
                message: "Updated sketch description successfully.",
                title: "Success",
              })
              dispatch(
                updateSketchDescriptionRedcuer({
                  id: data.id,
                  description: res.data.updateSketch.description,
                })
              )
            } else {
              unknownError()
            }
          })
        }
    } else {
      setAlert({
        isOpen: true,
        title: "Error",
        message: "Description must be at least 500 charactors long."
      })
    }
  }

  const updateSketchSummary = (v: string) => {
    if(v && v.length >50 && v.length < 150) {
      if (mode === "ADD") {
        updateFn("summary", v)
      } else {
        mutateSummary({
          variables: {
            id: data.id,
            summary: v,
          },
        })
          .then(res => {
            if(res.data && res.data.updateSketch) {
              setAlert({
                isOpen: true,
                title: "Success",
                message: "Updated sketch summary successfully.",
              })
              dispatch(
                updateSketchSummaryReducer({
                  id: data.id,
                  summary: res.data.updateSketch.summary,
                })
              )
            } else {
              unknownError()
            }
          })
      }
    } else {
      setAlert({
        isOpen: true,
        title: "Error",
        message: "Summary must be at least 50 and at most 150 charactors long."
      })
    }
  }

  const updateImage = () => {
    if (mode === "ADD") {
    } else {
      mutateImageUpdate({
        variables: {
          id: data.id,
          prevname: data.image,
          file: imageFile[0],
          field: "sketch",
        },
      })
        .then(res => {
          if(res.data && res.data.updateImage) {
            setAlert({
              isOpen: true,
              title: "Success",
              message: "Updated sketch image successfully.",
            })
            dispatch(
              updateSketchImageReducer({
                id: data.id,
                image: res.data.updateImage,
              })
            )
          } else {
            unknownError()
          }
        })
    }
  }

  const deleteSketch = (v: boolean) => {
    if (v) {
      if (mode === "ADD") {
        dispatch(deleteReducer({ id: data.id, field: "sketches" }))
      } else {
        mutateSketchDelete({
          variables: {
            id: data.id,
          },
        }).then(() => {
          setAlert({
            isOpen: true,
            title: "Success",
            message: "Deleted sketch successfully",
          })
          dispatch(
            deleteSketchReducer({
              id: data.id,
            })
          )
        })
      }
    }
  }

  const getDownloadLink = (v: string) => {
    setDownloadLink(v)
  }
  const getDescriptionValue = (v: string) => {
    setDescription(v)
  }
  const getSketchSummary = (v: string) => {
    setSummary(v)
  }
  const getImageFile = (f: File) => {
    setImage(f)
    const newImageSrc = URL.createObjectURL(f[0])
    if (imageRef.current) {
      imageRef.current.src = newImageSrc
    }
  }

  return (
    <>
      {isAlertOpen && (
        <Alert
          header
          title={alertTitle}
          onClose={() => setAlert({ isOpen: false, message: "" })}
          backdrop
          position="TOP"
          message={alertMessage}
          autoClose={5}
        />
      )}
      {editable ? (
        <div className="pl-5 pb-7 relative">
          {isConfirmOpen && (
            <Confirm
              header
              text={`Are you sure you want to delete sketch with id of ${data.id} ?`}
              getValue={v => deleteSketch(v)}
              title={`Deleting sketch with id of ${data.id}`}
              onClose={() => setConfirmBox(false)}
            />
          )}
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
                src={`${(window as any).__SERVER_API__}/${
                  mode === "ADD" ? "temp/" : ""
                }${data.image}`}
                alt={data.title}
                ref={imageRef as any}
                style={{
                  width: "auto",
                  height: 400,
                  maxWidth: 500,
                }}
                className="object-cover object-center"
              />
            </div>
            <div className="p-1.5 absolute border-5 md:border-10 border-palatte-500 bg-palatte-200 bg-opacity-50 top-0 left-0 right-0 bottom-0">
              <span
                onClick={() => setConfirmBox(true)}
                className="cursor-pointer absolute top-2 right-2"
              >
                {Delete}
              </span>
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
                  src={`${(window as any).__SERVER_API__}/temp/${data.image}`}
                  alt={data.title}
                  ref={imageRef as any}
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

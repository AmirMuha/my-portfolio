import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react"
import Editable from "../Dashboard/Editable"
import Button from "../UI/Button"
import Modal from "../UI/Modal"
import Markdown from "../utility/Markdown"
const sampleText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, doloribus ratione. Consequatur, maiores pariatur architecto magnam odio, iusto fugiat culpa sint sit, aliquam veritatis fuga quaerat dolorum odit similique atque earum cumque. Dolor consectetur reprehenderit, atque vero aperiam eligendi rerum magni voluptatibus similique fugit id consequatur autem, aut commodi? Qui, explicabo? Rerum, nobis et ab cumque quia saepe similique. Officia sint ducimus saepe voluptatem consequatur temporibus exercitationem placeat doloribus voluptas odit est, minima quasi in nisi. Reprehenderit ipsam, suscipit ad placeat eum aliquid, adipisci explicabo impedit quidem quisquam autem eaque qui provident nobis sunt veniam laborum ducimus nesciunt fugiat sequi! Ratione quidem modi minus explicabo? Rerum quibusdam facere neque totam earum facilis quidem nulla minima vero deleniti beatae dolores quam, dicta asperiores excepturi nisi autem libero iusto provident! Voluptates, nemo! Repellat quidem quae inventore ipsum necessitatibus nesciunt, nam similique debitis laboriosam ex voluptatibus beatae dolorum iste saepe tenetur est non. In necessitatibus et molestiae voluptatem quasi, temporibus, similique, magnam alias officia omnis nam impedit. Dolorem repellendus debitis repudiandae corporis. Illum magni mollitia aliquid debitis praesentium, velit rerum. Dolor delectus sequi error id esse, autem nihil asperiores temporibus pariatur incidunt laborum animi optio consequuntur minus eligendi, quas unde debitis vel voluptatum cupiditate sapiente, totam nobis reprehenderit est. Aspernatur distinctio blanditiis minus, temporibus id nam eligendi quisquam suscipit ut facere? Autem repellendus nesciunt saepe et distinctio excepturi neque fuga. Perferendis dolores ad id velit, doloribus nesciunt quo suscipit quasi porro consequatur assumenda, vel perspiciatis officia rerum adipisci est eveniet. Autem aperiam labore tenetur ratione? Necessitatibus placeat minus provident porro ad iusto temporibus laudantium nam, vero ex deserunt aliquam numquam harum ullam et aspernatur velit animi modi id, voluptate dicta cum nesciunt fuga voluptas. Voluptate vero eius facere cumque temporibus, rerum debitis porro quis! Placeat sunt, voluptate soluta adipisci velit temporibus magni in.`
interface Props {
  editable?: boolean
  data: GatsbyTypes.Portfolio_Sketch
}
let sample =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quaerat quibusdam iusto repudiandae recusandae dolor eum. Maxime provident ipsam animi, qui fuga tempora temporibus dignissimos sint minima vel? Inventore, sed?"
const Sketch: FC<PropsWithChildren<Props>> = ({ data, editable = false }) => {
  const [summary, setSummary] = useState<string>(data.summary)
  const [downloadUrl, setDownloadUrl] = useState<string>(data.download_link)
  const [previewUrl, setPreviewUrl] = useState<string>("")
  const [description, setDescription] = useState<string>(data.description)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isPreviewBoxOpen, setIsPreviewBoxOpen] = useState<boolean>(false)
  const [imageFile, setImage] = useState<any>(null)
  const paragraphRef = useRef<HTMLParagraphElement>()
  useEffect(() => {
    paragraphRef.current?.scrollTo(0, 0)
  }, [paragraphRef])
  const { file } = useStaticQuery<GatsbyTypes.MyQueryQuery>(graphql`
    query {
      file(name: { eq: "pexels-pixabay-355952" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)
  let image
  if (file && file.childImageSharp) {
    image = getImage(file.childImageSharp.gatsbyImageData)
  }
  const bgImage = convertToBgImage(image)
  const getDownloadUrl = (v: string) => {
    console.log(v)
    setDownloadUrl(v)
  }
  const getPreviewUrl = (v: string) => {
    console.log(v)
    setPreviewUrl(v)
  }
  const updateDownloadUrl = (v: string) => {
    // mutate the update
    console.log("Updating the download, new Value => " + v)
  }
  const updatePreviewUrl = (v: string) => {
    // mutate the update
    console.log("Updating the preview, new Value => " + v)
  }
  const updateSketchDescription = (v: string) => {
    // mutate the update
    console.log("Updating the Description, new Value => " + v)
  }
  const updateSketchSummary = (v: string) => {
    // mutate the update
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
      {editable ? (
        <div className="pl-5 pb-7 relative">
          <div className="relative">
            <BackgroundImage
              style={{
                maxHeight: 300,
                minHeight: 200,
              }}
              Tag="div"
              className="w-full"
              {...bgImage}
            ></BackgroundImage>
            <div className="p-1.5 absolute border-5 md:border-10 border-palatte-500 bg-palatte-200 bg-opacity-50 top-0 left-0 right-0 bottom-0">
              <div className="flex items-center justify-between">
                <Button
                  toUrl={data.download_link}
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
                    onSave={updateDownloadUrl}
                    getValue={getDownloadUrl}
                    value={downloadUrl}
                  />
                </Button>

                <Button
                  toUrl="/"
                  className="relative"
                  outline
                  target="_blank"
                  disabled
                  borderColor="100"
                  textColor="100"
                  color="500"
                >
                  Preview
                  <Editable
                    customInputId={`preview-${data.id}`}
                    title="Preview URL"
                    mode="MODAL"
                    custom
                    inputType="url"
                    onSave={updatePreviewUrl}
                    getValue={getPreviewUrl}
                    value={previewUrl}
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
              <BackgroundImage
                style={{
                  maxHeight: 300,
                  minHeight: 200,
                }}
                Tag="div"
                className="w-full"
                {...bgImage}
              ></BackgroundImage>
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
                  <Button
                    toUrl="/"
                    outline
                    target="_blank"
                    borderColor="100"
                    textColor="100"
                    color="500"
                  >
                    Preview
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

import React, {
  CSSProperties,
  FC,
  PropsWithChildren,
  useRef,
  useState,
} from "react"
import { createPortal } from "react-dom"
import { Edit, Close, Done } from "../../icons/iconsJSX"
import Button from "../UI/Button"

interface Props {
  text?: boolean
  file?: boolean
  onSave: () => void
  onClose?: () => void
  getValue: (v: any) => void
  value: any
  mode: "MODAL" | "IN_POSITION"
  position?: "tr" | "br"
  acceptableFileTypes?: string
  positionNum?: "inside" | "outside"
  inputClassName?: string
  inputStyle?: CSSProperties
  buttonClassName?: string
  buttonStyle?: CSSProperties
  className?: string
  style?: CSSProperties
}

const Editable: FC<PropsWithChildren<Props>> = ({
  text = false,
  mode = "IN_POSITION",
  file = false,
  position = "br",
  positionNum = "outside",
  onClose,
  acceptableFileTypes,
  onSave,
  getValue,
  value,
  inputClassName,
  inputStyle,
  buttonClassName,
  buttonStyle,
  className,
  style,
}) => {
  const [isEnable, setIsEnable] = useState<boolean>(false)
  const fileRef = useRef<HTMLInputElement>()
  return (
    <>
      {mode === "IN_POSITION" && (
        <>
          {text && (
            <div style={style} className={`${className} relative`}>
              <textarea
                readOnly={!isEnable}
                onChange={e => getValue(e.currentTarget.value)}
                value={value}
                rows={8}
                style={{ ...inputStyle }}
                className={`${inputClassName} w-full resize-none bg-palatte-100 placeholder-opacity-50 text-palatte-500 placeholder-palatte-500`}
              />
              {isEnable ? (
                <div
                  className={`flex items-center gap-1 absolute ${
                    positionNum === "outside"
                      ? position === "br"
                        ? "-bottom-4 -right-4"
                        : "-top-4 -right-4"
                      : position === "br"
                      ? "bottom-0 right-0"
                      : "top-0 right-0"
                  }`}
                >
                  <Button
                    outline
                    borderColor="400"
                    color="100"
                    normal
                    onClick={() => {
                      onSave()
                      setIsEnable(prev => !prev)
                    }}
                    style={{ ...buttonStyle, padding: "4px 7px" }}
                    className={`${buttonClassName} rounded-full bg-palatte-500`}
                  >
                    <span className="icon-s-1 text-palatte-100 gap-1 text-tiny flex items-center">
                      Save {Done}
                    </span>
                  </Button>
                  <Button
                    outline
                    borderColor="400"
                    color="100"
                    normal
                    onClick={() => setIsEnable(prev => !prev)}
                    style={{ ...buttonStyle, padding: "6px" }}
                    className={`${buttonClassName} rounded-full`}
                  >
                    <span className="icon-s-1">{Close}</span>
                  </Button>
                </div>
              ) : (
                <Button
                  outline
                  borderColor="400"
                  color="100"
                  normal
                  style={{ padding: "6px" }}
                  className={`rounded-full absolute ${
                    positionNum === "outside"
                      ? position === "br"
                        ? "-bottom-4 -right-4"
                        : "-top-4 -right-4"
                      : position === "br"
                      ? "bottom-0 right-0"
                      : "top-0 right-0"
                  }`}
                >
                  {Edit}
                </Button>
              )}
            </div>
          )}
          {file && (
            <>
              <input
                type="file"
                ref={fileRef as any}
                onChange={e => getValue(e.currentTarget.files)}
                hidden
                accept={acceptableFileTypes}
                // datatype=""
                multiple={false}
                className={`hidden`}
              />
              {isEnable ? (
                <div
                  className={`flex items-center gap-1 absolute ${
                    positionNum === "outside"
                      ? position === "br"
                        ? "-bottom-4 -right-4"
                        : "-top-4 -right-4"
                      : position === "br"
                      ? "bottom-0 right-0"
                      : "top-0 right-0"
                  }`}
                >
                  <Button
                    outline
                    borderColor="400"
                    color="100"
                    normal
                    onClick={() => {
                      onSave()
                      setIsEnable(prev => !prev)
                    }}
                    style={{ ...buttonStyle, padding: "4px 7px" }}
                    className={`${buttonClassName} rounded-full bg-palatte-500`}
                  >
                    <span className="icon-s-1 text-palatte-100 gap-1 text-tiny flex items-center">
                      Save {Done}
                    </span>
                  </Button>
                  <Button
                    outline
                    borderColor="400"
                    color="100"
                    normal
                    onClick={() => setIsEnable(prev => !prev)}
                    style={{ ...buttonStyle, padding: "6px" }}
                    className={`${buttonClassName} rounded-full`}
                  >
                    <span className="icon-s-1">{Close}</span>
                  </Button>
                </div>
              ) : (
                <Button
                  outline
                  borderColor="400"
                  color="100"
                  normal
                  onClick={() => {
                    fileRef.current?.click()
                    setIsEnable(prev => !prev)
                  }}
                  style={{ padding: "6px" }}
                  className={`rounded-full absolute ${
                    positionNum === "outside"
                      ? position === "br"
                        ? "-bottom-4 -right-4"
                        : "-top-4 -right-4"
                      : position === "br"
                      ? "bottom-0 right-0"
                      : "top-0 right-0"
                  }`}
                >
                  {Edit}
                </Button>
              )}
            </>
          )}
        </>
      )}
      {mode === "MODAL" &&
        isEnable &&
        createPortal(
          <div>
            <div
              onClick={() => setIsEnable(prev => !prev)}
              className="bg-palatte-500 top-0 bottom-0 right-0 left-0 w-full opacity-20 h-full fixed"
            ></div>
            <dialog
              open={isEnable}
              style={{ maxHeight: "80vh", maxWidth: "900px" }}
              className="bg-palatte-100 fixed md:divide-x overflow-scroll divide-palatte-500 divide-y top-1/2 w-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-palatte-500"
            >
              <header className="bg-palatte-500 px-5 py-3 font-bold text-palatte-100"></header>
            </dialog>
          </div>,
          document.body
        )}
      {mode === "MODAL" && !isEnable && (
        <Button
          outline
          borderColor="400"
          color="100"
          normal
          onClick={() => setIsEnable(prev => !prev)}
          style={{ padding: "6px" }}
          className={`rounded-full ${
            position === "br"
              ? "absolute -bottom-4 -right-4"
              : "absolute bottom-0 right-0"
          }`}
        >
          {Edit}
        </Button>
      )}
    </>
  )
}

export default Editable

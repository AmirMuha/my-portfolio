import React, { CSSProperties, FC, PropsWithChildren, useRef } from "react"
import { Close, Done, Edit } from "../../../icons/iconsJSX"
import Button from "../../UI/Button"

interface Props {
  style?: CSSProperties
  className?: string
  saveAndCloseContainerStyle?: CSSProperties
  buttonClassName?: string
  buttonStyle?: CSSProperties
  editButtonStyle?: CSSProperties
  isEnable: boolean
  acceptableFileTypes: string
  positionPlace?: "outside" | "inside"
  position?: "br" | "tr"
  value: string
  onSave: (v?: any) => void
  getValue: (v?: any) => void
  onClose: () => void
  onOpen: () => void
}

const Editable_FileInput: FC<PropsWithChildren<Props>> = ({
  buttonClassName,
  positionPlace,
  buttonStyle,
  saveAndCloseContainerStyle,
  position,
  onClose,
  onOpen,
  style,
  className,
  editButtonStyle,
  isEnable,
  onSave,
  acceptableFileTypes,
  getValue,
}) => {
  const fileRef = useRef<HTMLInputElement>()
  return (
    <div className={className} style={style}>
      <input
        type="file"
        ref={fileRef as any}
        onChange={e => {
          getValue && getValue(e.currentTarget.files)
          onOpen()
        }}
        hidden
        accept={acceptableFileTypes}
        multiple={false}
        className={`hidden`}
      />
      {isEnable ? (
        <div
          className={`flex items-center gap-1 absolute ${
            positionPlace === "outside"
              ? position === "br"
                ? "-bottom-4 -right-4"
                : "-top-4 -right-4"
              : position === "br"
              ? "bottom-0 right-0"
              : "top-0 right-0"
          } ${saveAndCloseContainerStyle}`}
        >
          <Button
            outline
            borderColor="400"
            color="100"
            normal
            onClick={() => {
              onSave()
              onClose()
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
            onClick={() => {
              onClose()
            }}
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
          }}
          style={{ padding: "6px", ...editButtonStyle }}
          className={`rounded-full absolute ${
            positionPlace === "outside"
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
  )
}

export default Editable_FileInput

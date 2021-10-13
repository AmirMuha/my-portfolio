import React, {
  CSSProperties,
  useState,
  useRef,
  FC,
  PropsWithChildren,
} from "react"
import { Close, Done, Edit } from "../../../icons/iconsJSX"
import Button from "../../UI/Button"

interface Props {
  style?: CSSProperties
  className?: string
  textareaStyle?: CSSProperties
  textareaClassName?: string
  saveAndCloseContainerStyle?: CSSProperties
  buttonClassName?: string
  buttonStyle?: CSSProperties
  editButtonStyle?: CSSProperties
  isEnable: boolean
  positionPlace?: "outside" | "inside"
  position?: "br" | "tr"
  value: string
  onSave: (v?: any) => void
  getValue: (v?: any) => void
  onClose: () => void
  onOpen: () => void
}

const Editable_TextArea: FC<PropsWithChildren<Props>> = ({
  onOpen,
  buttonClassName,
  positionPlace,
  buttonStyle,
  saveAndCloseContainerStyle,
  position,
  onClose,
  style,
  className,
  editButtonStyle,
  isEnable,
  onSave,
  textareaClassName,
  value,
  textareaStyle,
  getValue,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>()
  const save = () => {
    if (textAreaRef.current) {
      onSave(textAreaRef.current.value)
    }
  }
  return (
    <div style={style} className={`${className} relative`}>
      <textarea
        readOnly={!isEnable}
        ref={textAreaRef as any}
        onChange={e => getValue(e.currentTarget.value)}
        rows={8}
        style={{ ...textareaStyle }}
        value={value}
        className={`${textareaClassName} w-full resize-none bg-palatte-100 placeholder-opacity-50 text-palatte-500 placeholder-palatte-500`}
      />
      {isEnable ? (
        <div
          style={{ ...saveAndCloseContainerStyle }}
          className={`flex items-center gap-1 absolute ${
            positionPlace === "outside"
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
              save()
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
            onClick={onClose}
            style={{ ...buttonStyle, padding: "6px" }}
            className={`${buttonClassName} rounded-full`}
          >
            <span className="icon-s-1">{Close}</span>
          </Button>
        </div>
      ) : (
        <Button
          onClick={onOpen}
          outline
          borderColor="400"
          color="100"
          normal
          style={{ padding: "6px", ...editButtonStyle }}
          className={`rounded-full absolute ${
            positionPlace === "outside"
              ? position === "br"
                ? "-bottom-4 -right-4"
                : "-top-4 -right-4"
              : position === "br"
              ? "bottom-0 right-0"
              : "top-0 right-0"
          } ${buttonClassName}`}
        >
          {Edit}
        </Button>
      )}
    </div>
  )
}

export default Editable_TextArea

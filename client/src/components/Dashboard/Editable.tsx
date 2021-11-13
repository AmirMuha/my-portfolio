import React, {
  CSSProperties,
  FC,
  HTMLInputTypeAttribute,
  PropsWithChildren,
  useState,
} from "react"

import Button from "../UI/Button"
import { Edit } from "../../icons/iconsJSX"
import Editable_Custom from "./Editable/Editable_Custom"
import Editable_FileInput from "./Editable/Editable_FileInput"
import Editable_QAndA from "./Editable/Editable_QAndA"
import Editable_TechCategory from "./Editable/Editable_TechCategory"
import Editable_TextArea from "./Editable/Editable_TextArea"

export interface QAndAEditTypes {
  id: string
  question: string
  answer: string
}
interface Props {
  inputType?: HTMLInputTypeAttribute
  title?: string
  custom?: boolean
  file?: boolean
  QAndA?: boolean
  techCategory?: boolean
  value?: any
  textareaRows?: number
  mode: "MODAL" | "IN_POSITION"
  position?: "tr" | "br"
  acceptableFileTypes?: string
  positionPlace?: "inside" | "outside"
  editButtonStyle?: CSSProperties
  saveAndCloseContainerStyle?: CSSProperties
  buttonStyle?: CSSProperties
  style?: CSSProperties
  textareaStyle?: CSSProperties
  buttonClassName?: string
  textareaClassName?: string
  customInputId?: string
  className?: string
  techValue?: string
  techCategoryValue?: string
  textarea?: boolean
  onSave: (v?: any) => void
  QAndAOnSave?: (v: any) => void
  getValue?: (v: any) => void
  getTechCategoryValue?: (v: any) => void
  onDeleteTech?: (id: string) => void
  type?: "ADD" | "EDIT"
  multiple?: boolean
}
const Editable: FC<PropsWithChildren<Props>> = ({
  custom = false,
  multiple = false,
  type = "EDIT",
  mode = "IN_POSITION",
  file = false,
  textareaRows,
  QAndA = false,
  techCategory = false,
  position = "br",
  positionPlace = "outside",
  title,
  inputType,
  acceptableFileTypes = "*",
  onSave,
  getValue,
  value,
  editButtonStyle,
  saveAndCloseContainerStyle,
  buttonClassName,
  buttonStyle,
  className,
  customInputId,
  textareaStyle,
  textareaClassName,
  style,
  textarea = false,
  onDeleteTech,
}) => {
  const [isEnable, setIsEnable] = useState<boolean>(false)

  return (
    <>
      {mode === "IN_POSITION" && (
        <>
          {textarea && (
            <Editable_TextArea
              value={value}
              getValue={v => getValue && getValue(v)}
              onSave={v => onSave(v)}
              onOpen={() => setIsEnable(prev => !prev)}
              onClose={() => setIsEnable(prev => !prev)}
              className={className}
              style={style}
              isEnable={isEnable}
              position={position}
              buttonClassName={buttonClassName}
              textareaRows={textareaRows}
              buttonStyle={buttonStyle}
              saveAndCloseContainerStyle={saveAndCloseContainerStyle}
              editButtonStyle={editButtonStyle}
              positionPlace={positionPlace}
              textareaClassName={textareaClassName}
              textareaStyle={textareaStyle}
            />
          )}
          {file && (
            <Editable_FileInput
              acceptableFileTypes={acceptableFileTypes}
              value={value}
              getValue={v => getValue && getValue(v)}
              onSave={v => onSave(v)}
              onOpen={() => setIsEnable(prev => !prev)}
              onClose={() => setIsEnable(prev => !prev)}
              className={className}
              style={style}
              isEnable={isEnable}
              position={position}
              multiple={multiple}
              buttonClassName={buttonClassName}
              buttonStyle={buttonStyle}
              saveAndCloseContainerStyle={saveAndCloseContainerStyle}
              editButtonStyle={editButtonStyle}
              positionPlace={positionPlace}
            />
          )}
        </>
      )}
      {mode === "MODAL" && isEnable && custom && (
        <Editable_Custom
          value={value}
          id={customInputId as string}
          getValue={v => getValue && getValue(v)}
          onSave={v => onSave(v)}
          title={title || "Edit"}
          onClose={() => setIsEnable(prev => !prev)}
          inputType={inputType}
        />
      )}
      {mode === "MODAL" && isEnable && techCategory && (
        <Editable_TechCategory
          data={value as any}
          mode={type}
          onClose={() => setIsEnable(prev => !prev)}
          onDeleteTech={id => onDeleteTech && onDeleteTech(id)}
          onSave={v => onSave(v)}
          buttonClassName={buttonClassName}
          buttonStyle={buttonStyle}
          editButtonStyle={editButtonStyle}
          title={title || "Editing Tech Category"}
        />
      )}
      {mode === "MODAL" && isEnable && QAndA && (
        <Editable_QAndA
          values={value}
          title={title || "Edit Q&A"}
          onSave={v => onSave(v)}
          onClose={() => setIsEnable(prev => !prev)}
        />
      )}
      {mode === "MODAL" && !isEnable && (
        <Button
          outline
          borderColor="400"
          color="100"
          normal
          onClick={() => setIsEnable(prev => !prev)}
          style={{ padding: "6px", ...editButtonStyle }}
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

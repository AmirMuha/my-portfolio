import React, { FC, PropsWithChildren, useRef } from "react"
import Button from "../../UI/Button"
import Input from "../../UI/Input"
import Modal from "../../UI/Modal"

interface Props {
  id: string
  title: string
  inputType?: string
  value: any
  onClose: () => void
  onSave: (v?: any) => void
  getValue: (v?: any) => void
}

const Editable_Custom: FC<PropsWithChildren<Props>> = ({
  title,
  onClose,
  onSave,
  inputType = "text",
  getValue,
  value,
}) => {
  const inputRef = useRef<HTMLInputElement>()
  return (
    <Modal
      header
      title={title}
      onClose={onClose}
      containerClass="flex items-center gap-1"
    >
      <Input
        id={title as string}
        name={title}
        type={inputType}
        color="200"
        style={{ fontSize: "0.80rem" }}
        ref={inputRef as any}
        placeholder={`Enter the ${title}`}
        getValue={v => getValue && getValue(v)}
        containerClasses="flex-grow"
        value={value}
      />
      <Button
        onClick={() => {
          onSave(inputRef.current?.value)
          onClose()
        }}
        normal
        outline
      >
        Save
      </Button>
    </Modal>
  )
}

export default Editable_Custom

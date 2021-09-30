import React, { FC, HTMLInputTypeAttribute, PropsWithChildren } from "react"

interface Props {
  type?: HTMLInputTypeAttribute
  getValue(value: string): void
  id: string
  label?: string
  value: any
  name?: string
  color?: "100" | "200" | "300" | "400" | "500"
  textColor?: "100" | "200" | "300" | "400" | "500"
}

const Input: FC<PropsWithChildren<Props>> = ({
  label,
  value,
  textColor = "100",
  color = "100",
  id,
  name = label,
  getValue,
  type = "text",
}) => {
  return (
    <div>
      <label
        className={`block text-left text-palatte-${textColor}`}
        htmlFor={id}
        id={id}
      >
        {label}
      </label>
      <input
        name={name}
        className={`px-3 py-1 w-full bg-palatte-${color}`}
        id={id}
        type={type}
        onChange={e => getValue(e.currentTarget.value)}
        value={value}
      />
    </div>
  )
}

export default React.memo(Input)

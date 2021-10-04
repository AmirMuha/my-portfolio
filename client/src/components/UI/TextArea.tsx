import React, { FC, PropsWithChildren } from "react"

interface Props {
  name?: string
  id: string
  cols?: number
  rows?: number
  value: string
  getValue(value: string): void
  label?: string
  color?: "100" | "200" | "300" | "400" | "500"
  textColor?: "100" | "200" | "300" | "400" | "500"
}

const TextArea: FC<PropsWithChildren<Props>> = ({
  value,
  label,
  name = label,
  color = "100",
  textColor = "100",
  getValue,
  id,
  cols,
  rows,
}) => {
  return (
    <div>
      <label className={`block text-left text-palatte-${textColor}`} htmlFor="">
        {label}
      </label>
      <textarea
        name={name}
        id={id}
        className={`px-3 py-2 w-full bg-palatte-${color}`}
        cols={cols}
        onChange={e => getValue(e.currentTarget.value)}
        rows={rows}
        value={value}
      ></textarea>
    </div>
  )
}

export default React.memo(TextArea)

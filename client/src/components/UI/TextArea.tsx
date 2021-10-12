import React, { CSSProperties, FC, PropsWithChildren } from "react"

interface Props {
  name?: string
  id: string
  cols?: number
  rows?: number
  value: string
  getValue(value: string): void
  label?: string
  outline?: boolean
  required?: boolean
  color?: "100" | "200" | "300" | "400" | "500"
  textColor?: "100" | "200" | "300" | "400" | "500"
  borderColor?: "100" | "200" | "300" | "400" | "500"
  className?: string
  style?: CSSProperties
}

const TextArea: FC<PropsWithChildren<Props>> = ({
  value,
  outline = false,
  label,
  name = label,
  color = "100",
  textColor = "100",
  className,
  style,
  getValue,
  required = false,
  id,
  cols,
  borderColor,
  rows,
}) => {
  return (
    <div>
      <label className={`block text-left text-palatte-${textColor}`} htmlFor="">
        {label}
      </label>
      <textarea
        style={style}
        name={name}
        required
        id={id}
        className={`${className} px-3 py-2 w-full ${
          outline ? `border border-palatte${borderColor}` : ""
        } bg-palatte-${color}`}
        cols={cols}
        onChange={e => getValue(e.currentTarget.value)}
        rows={rows}
        value={value}
      ></textarea>
    </div>
  )
}

export default React.memo(TextArea)

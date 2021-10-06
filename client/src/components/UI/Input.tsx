import React, {
  FC,
  HTMLInputTypeAttribute,
  PropsWithChildren,
  useCallback,
  useRef,
} from "react"
import Button from "./Button"

export interface File {
  name: string
  ext: string
  type: string
  size: number
}
export type GetValue<T, F> = (value: T, files?: F) => void
interface Props {
  type?: HTMLInputTypeAttribute
  buttonTitle?: string
  placeholder?: string
  getValue: GetValue<string, any>
  className?: string
  containerClasses?: string
  id: string
  style?: React.CSSProperties
  label?: string
  value: any
  name?: string
  color?: "100" | "200" | "300" | "400" | "500" | "transparent"
  textColor?: "100" | "200" | "300" | "400" | "500"
}

const Input: FC<PropsWithChildren<Props>> = ({
  label,
  value,
  textColor = "100",
  style,
  color = "100",
  className,
  containerClasses,
  id,
  placeholder,
  buttonTitle,
  name = label,
  getValue,
  type = "text",
}) => {
  const fileRef = useRef<HTMLInputElement>()
  const fileInputClick = useCallback(() => {
    fileRef.current?.click()
  }, [])
  if (type === "file" && fileRef && value) {
    const arr = value.split("\\")
    value = arr[arr.length - 1]
  }
  return (
    <div className={containerClasses}>
      {type === "file" && (
        <>
          <label htmlFor={id} id={id} className="block">
            {`${label}`}
          </label>
          <div className="flex">
            <div className="px-3 py-2 w-full bg-palatte-200 truncate">
              {value ? (
                <p className="text-palatte-500">
                  {value && value}
                  {
                    <span className="text-palatte-300">
                      {` ${
                        fileRef.current?.files?.length! > 1
                          ? `and ${fileRef.current?.files?.length! - 1} more`
                          : ""
                      }`}
                    </span>
                  }
                </p>
              ) : (
                <p className="text-palatte-300">No files chosen yet !</p>
              )}
            </div>
            <Button
              color="400"
              normal
              style={{ minWidth: "fit-content" }}
              onClick={fileInputClick}
            >
              {buttonTitle ? buttonTitle : label}
            </Button>
          </div>
          <input
            multiple={true}
            hidden={true}
            onChange={e =>
              getValue(e.currentTarget.value, e.currentTarget?.files)
            }
            ref={fileRef as any}
            type="file"
            className="hidden"
          />
        </>
      )}
      {type === "text" && (
        <>
          <label
            className={`block text-left text-palatte-${textColor}`}
            htmlFor={id}
            id={id}
          >
            {label}
          </label>
          <input
            name={name}
            placeholder={placeholder}
            style={style}
            className={`px-3 py-2 w-full ${className} bg-palatte-${color}`}
            id={id}
            type={type}
            onChange={e => getValue(e.currentTarget.value)}
            value={value}
          />
        </>
      )}
    </div>
  )
}

export default React.memo(Input)

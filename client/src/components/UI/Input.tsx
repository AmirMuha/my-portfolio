import React, {
  ForwardRefRenderFunction,
  HTMLInputTypeAttribute,
  useCallback,
  useRef,
} from "react"
import Alert from "./Alert"
import {useAlert} from "../../util/useAlert" 
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
  getValue: GetValue<any, any>
  checked?: boolean
  pattern?: string
  readOnly?: boolean
  required?: boolean
  className?: string
  containerClasses?: string
  id: string
  style?: React.CSSProperties
  offon?: boolean
  multiple?: boolean
  label?: string
  value?: any
  name?: string
  color?: "100" | "200" | "300" | "400" | "500" | "transparent"
  textColor?: "100" | "200" | "300" | "400" | "500"
  maxSize?: number
}

const Input: ForwardRefRenderFunction<unknown, Props> = (
  {
    label = "",
    checked,
    value,
    textColor = "100",
    style,
    color = "100",
    multiple = false,
    pattern,
    required = false,
    readOnly = false,
    className,
    containerClasses,
    offon = false,
    id,
    placeholder,
    buttonTitle,
    name = label,
    getValue,
    type = "text",
    maxSize= 5
  },
  ref
) => {
  const {isOpen: isAlertOpen, message: fileMessage, title: fileTitle,setAlert} = useAlert();
  const fileRef = useRef<HTMLInputElement>()
  const fileInputClick = useCallback(() => {
    fileRef.current?.click()
  }, [])
  if (type === "file" && fileRef && value) {
    const arr = value.split("\\")
    value = arr[arr.length - 1]
  }

  const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e?.currentTarget?.files?.length! > 0) {
      const numberOfFiles = new Array(e?.currentTarget?.files?.length!).fill(1);
      let userTotalUploadSize = 0;
      numberOfFiles.forEach((f,i) => {
        userTotalUploadSize += e?.currentTarget?.files?.item(i)?.size!
      })
      if(userTotalUploadSize > maxSize * 1000000) {
        setAlert({
          isOpen: true,
          title: "Error",
          message: `The maximum upload size in total is 5MB, your total size is ${(userTotalUploadSize/1000000).toFixed(2) + "MB"}`
        })
      } else {
        getValue(e.currentTarget.value, e.currentTarget?.files)
      }
    }
  }
  return (
    <>
      {
        isAlertOpen && 
        <Alert header title={fileTitle} message={fileMessage} onClose={() => setAlert({isOpen: false})} />
      }
    <div className={containerClasses}>
      {type === "file" && (
        <>
          <label htmlFor={id} id={id} className="block">
            {`${label}`}
          </label>
          <div className="flex">
            <div
              onClick={fileInputClick}
              className="w-full px-3 py-2 truncate bg-palatte-200"
            >
              {value ? (
                <p style={{ margin: 0 }} className="text-palatte-500">
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
                <p style={{ margin: 0 }} className="text-palatte-300">
                  No files chosen yet !
                </p>
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
            multiple={multiple}
            hidden
            accept={pattern}
            name={name}
            required={required}
            onChange={e =>
              fileInputChangeHandler(e)
            }
            ref={fileRef as any}
            type="file"
            aria-hidden="true"
            className="hidden"
          />
        </>
      )}
      {type !== "file" && type !== "checkbox" && (
        <>
          <label
            className={`block text-left text-palatte-${textColor}`}
            htmlFor={id}
            id={id}
          >
            {label}
          </label>
          <input
            ref={ref as any}
            name={name}
            placeholder={placeholder}
            style={style}
            className={`px-3 py-2 w-full ${className} bg-palatte-${color}`}
            id={id}
            autoComplete="off"
            autoCorrect="off"
            readOnly={readOnly}
            required={required}
            type={type}
            pattern={pattern}
            onChange={e => getValue(e.currentTarget.value)}
            value={value}
          />
        </>
      )}
      {!offon && type === "checkbox" && type !== "file" && (
        <>
          <label
            style={style}
            className={`${className} checkbox items-center flex gap-1`}
          >
            {label}
            <input
              type="checkbox"
              required={required}
              readOnly={readOnly}
              checked={checked}
              id={id}
              onChange={e => getValue(e.currentTarget.checked)}
              name={name}
            />
            <div className="w-5 h-5 box"></div>
          </label>
        </>
      )}
      {offon && type === "checkbox" && type !== "file" && (
        <>
          <label
            style={style}
            className={`${className} checkbox items-center flex gap-1`}
          >
            {label}
            <input
              type="checkbox"
              readOnly={readOnly}
              required={required}
              id={id}
              checked={checked}
              onChange={e => getValue(e.currentTarget.checked)}
              name={name}
            />
            <div className="w-5 h-5 check-container">
              <div
                className={`check ${
                  checked === true ? "check-on" : "check-off"
                }`}
              ></div>
            </div>
          </label>
        </>
      )}
    </div>
  </>
  )
}

const InputRefForward = React.forwardRef(Input)
export default React.memo(InputRefForward)

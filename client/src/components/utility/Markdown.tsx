import React, { CSSProperties, FC, PropsWithChildren } from "react"
import MarkdownToJSX from "markdown-to-jsx"
interface Props {}

const Markdown: FC<PropsWithChildren<Props>> = ({ children }) => {
  if (typeof children !== "string") {
    return null
  }
  return (
    <MarkdownToJSX
      options={{
        overrides: {
          a: {
            props: {
              style: {
                textDecoration: "underline",
              } as CSSProperties,
            },
          },
          h1: {
            props: {
              style: {
                fontSize: "1.875rem",
              } as CSSProperties,
            },
          },
          h2: {
            props: {
              style: {
                fontSize: "1.5rem",
              } as CSSProperties,
            },
          },
          h3: {
            props: {
              style: {
                fontSize: "1.25rem",
              } as CSSProperties,
            },
          },
          h4: {
            props: {
              style: {
                fontSize: "1.125rem",
              } as CSSProperties,
            },
          },
          h5: {
            props: {
              style: {
                fontSize: "1rem",
              } as CSSProperties,
            },
          },
          h6: {
            props: {
              style: {
                fontSize: "0.75rem",
              } as CSSProperties,
            },
          },
        },
      }}
    >
      {children as string}
    </MarkdownToJSX>
  )
}

export default Markdown

import React, { useState } from "react"
export const useAlert = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")
  const [title, setTitle] = useState<string>("")
  const setAlert = (obj: {
    isOpen?: boolean
    message?: string
    title?: string
  }) => {
    if (obj.isOpen !== undefined) {
      setIsOpen(obj.isOpen)
    }
    if (obj.title) {
      setTitle(obj.title)
    }
    if (obj.message) {
      setMessage(obj.message)
    }
  }
  return {
    isOpen,
    message,
    title,
    setAlert,
  }
}

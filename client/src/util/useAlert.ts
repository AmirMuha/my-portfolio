import React, { useState } from "react"

interface UseAlertReturnType {
  isOpen: boolean,
  message: string,
  title: string,
  setAlert: (obj: {
    isOpen?: boolean,
    title?: string,
    message?: string
  }) => void
}

export const useAlert = ():UseAlertReturnType => {
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

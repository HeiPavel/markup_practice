'use client'

import { useState, createContext, ReactNode } from 'react'

type FormContextType = {
  open: boolean
  setOpen: (val: boolean) => void
}

const defaulValue: FormContextType = {
  open: false,
  setOpen: () => undefined
}

export const FormContext = createContext<FormContextType>(defaulValue)

export function FormData({children}: Readonly<{children: ReactNode}>) {
  const [open, setOpen] = useState(false)

  const context:FormContextType = {
    open,
    setOpen
  }

  return (
    <FormContext.Provider value={context}>
      {children}
    </FormContext.Provider>
  )
}
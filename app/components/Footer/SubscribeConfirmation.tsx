'use client'

import { SyntheticEvent, useContext } from 'react'
import { Snackbar, SnackbarOrigin, Slide, SlideProps, SnackbarCloseReason } from '@mui/material'
import { FormContext } from './FormData'

const position: SnackbarOrigin = {
  vertical: 'bottom',
  horizontal: 'right'
}

const SlideMessage = (props: SlideProps) => {
    return (
      <Slide 
        {...props} 
        direction='left'
      />
    )
  }

export function SubscribeConfirmation() {
  const {open, setOpen} = useContext(FormContext)

  const handleClose = () => setOpen(false)

  return (
    <Snackbar
      open={open}
      anchorOrigin={position}
      onClose={handleClose}
      autoHideDuration={1000000}
      message='Subscription seccessful'
      slots={{transition: SlideMessage}}
    >
    </Snackbar>
  )
}
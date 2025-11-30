'use client'

import { useContext } from 'react'
import { Snackbar, SnackbarOrigin, Slide, SlideProps } from '@mui/material'
import { FormContext } from './FormData'
import {ReactComponent as CheckIcon} from '@/public/icons/check_icon.svg'

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

const Message = () => {
  return (
    <div className='flex items-center gap-2 font-jakarta text-white leading-7'>
      <CheckIcon className='size-5'/>
      <p>Subscribed successfully</p>
    </div>
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
      autoHideDuration={3000}
      message={<Message/>}
      slots={{
        transition: SlideMessage
      }}
      className='min-w-72 !left-auto'
      slotProps={{
        content: {
          className: '!bg-green'
        }
      }}
    >
    </Snackbar>
  )
}
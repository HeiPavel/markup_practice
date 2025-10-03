'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Drawer } from '@mui/material'
import { Nav } from './Nav'
import { ServiceLogo } from './ServiceLogo'
import {ReactComponent as BurgerMenu} from '@/public/icons/burger_menu.svg'
import {ReactComponent as CloseIcon} from '@/public/icons/close_icon.svg'
import homeProLogo from '@/public/image/home_pro_logo.png'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const navMenu = () => {
    return (
      <div className='h-full flex flex-col bg-blue-medium-dark'>
        <div className='h-14 px-6 flex justify-between items-center'>
          <Image
            src={homeProLogo}
            alt='Home logo image'
          />
          <CloseIcon onClick={() => setOpen(false)}/>
        </div>
        <div className='pb-9 grow flex flex-col justify-between items-center'>
          <Nav setOpen={setOpen}/>
          <ServiceLogo/>
        </div>
      </div>
    )
  }

  return (
    <div className='block desktop:hidden'>
      <BurgerMenu
        className={`${open ? 'hidden' : 'block'}`}
        onClick={() => setOpen(true)}
      />
      <Drawer
        open={open}
        anchor='right'
        children={navMenu()}
        aria-hidden={false}
        sx={{
          '.MuiPaper-root': {
            width: '272px'
          }
        }}
      />
    </div>
  )
}
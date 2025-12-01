import { Newsletter } from './Newsletter'
import { FooterLogo } from './FooterLogo'
import { Menus } from './Menus/Menus'

export function Footer() {
  return (
    <footer 
      id='contact'
      className='bg-turquoise-medium'
    >
      <div className='box-container bg-turquoise-medium flex justify-center pt-9 laptop:pt-12 pb-8 pro:pb-[74px] isolate'>
        <div className='grow px-6 md:px-20 max-w-[1650px]'>
          <Newsletter/>
          <div className='tablet:px-6 mt-8 md:mt-14 flex gap-8 max-pro:flex-col pro:justify-between'>
            <FooterLogo/>
            <Menus/>
          </div>
        </div>
      </div>
      <div className='w-full border-t border-t-border-white py-4 pro:py-8 bg-turquoise-medium'>
        <p className='font-jakarta pro:text-lg text-white text-center leading-7'>
          &copy;2023 HomePro. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
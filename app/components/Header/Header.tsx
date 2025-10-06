import Image from 'next/image'
import { ServiceLogo } from './ServiceLogo'
import { Nav } from './Nav'
import { MobileNav } from './MobileNav'
import homeProLogo from '@/public/image/home_pro_logo.png'

export function Header() {
  return (
    <header className='h-14 laptop:h-20 bg-blue-medium-dark'>
      <div className='h-full box-container px-6 md:px-10 laptop:px-16 flex justify-center items-center'>
        <div className='grow max-w-[1600px] h-full flex justify-between items-center'>
          <Image
            src={homeProLogo}
            alt='Home logo image'
          />
          <div className='hidden laptop:block'>
            <Nav/>
          </div>
          <div className='hidden laptop:block'>
            <ServiceLogo/>
          </div>
          <MobileNav/>
        </div>
      </div>
    </header>
  )
}
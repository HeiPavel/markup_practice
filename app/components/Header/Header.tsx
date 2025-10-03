import Image from 'next/image'
import { ServiceLogo } from './ServiceLogo'
import { Nav } from './Nav'
import { MobileNav } from './MobileNav'
import homeProLogo from '@/public/image/home_pro_logo.png'

export function Header() {
  return (
    <header className='h-14 desktop:h-20 px-6 md:px-10 desktop:px-16 bg-blue-medium-dark flex justify-center items-center'>
      <div className='grow max-w-[1600px] h-full flex justify-between items-center'>
        <Image
          src={homeProLogo}
          alt='Home logo image'
        />
        <div className='hidden desktop:block'>
          <Nav/>
        </div>
        <div className='hidden desktop:block'>
          <ServiceLogo/>
        </div>
        <MobileNav/>
      </div>
    </header>
  )
}
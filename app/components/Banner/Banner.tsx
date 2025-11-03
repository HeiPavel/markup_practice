import Image from 'next/image'
import { CommonContent } from '../Common/CommonContent'
import banner_desktop from '@/public/image/banner_image_desktop.png'
import banner_mobile from '@/public/image/banner_image_mobile.png'

const title = [
  'Already to improve',
  'or repair your home?',
  'Let’s Talk!'
]

export function Banner() {
  return (
    <section className='bg-blue-medium-dark'>
      <div className='box-container relative laptop:min-h-[655px] laptop:max-desktop:pr-16 desktop:pl-20 bg-blue-medium-dark overflow-hidden clip-path-banner flex items-stretch'>
        <div className='grow flex max-tablet:pt-14 tablet:max-md:pt-24 md:max-laptop:pt-32 max-laptop:flex-col laptop:max-desktop:flex-row-reverse gap-9 pro:gap-6 laptop:gap-10 fhd:gap-14 laptop:justify-end items-center'>
          <CommonContent
            title={title}
            isCentered={false}
          />
          <div className='h-full max-laptop:w-full flex md:max-laptop:justify-end items-end laptop:max-desktop:basis-[700px]'>
            <Image
              src={banner_desktop}
              alt='Banner desktop image'
              className='hidden md:block laptop:max-desktop:hidden'
            />
            <Image
              src={banner_mobile}
              alt='Banner mobile image'
              className='md:hidden laptop:block desktop:hidden'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
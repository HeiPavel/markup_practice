import { HeroImage } from './HeroImage'
import { Tagline } from './Tagline'
import { Feature } from './Feature'
import { HeroButton } from './HeroButton'
import { Highlights } from './Highlights'
import leftMan from '@/public/image/left_man.png'
import rightMan from '@/public/image/right_man.png'

export function Hero() {
  return(
    <div className='relative bg-blue-medium-dark fhd:before:h-[45px] fhd:before:w-full fhd:before:absolute fhd:before:bottom-0 fhd:before:bg-white'>
      <div className='box-container relative overflow-hidden bg-blue-medium-dark clip-path-hero'>
        <div className='px-4 flex gap-10 justify-center desktop:justify-between'>
          <HeroImage
            image={leftMan}
            isLeft={true}
          />
          <div className='mt-6 laptop:mt-12 fhd:mt-20 desktop:pb-4 fhd:pb-10 flex flex-col items-center justify-around gap-10'>
            <div className='flex flex-col items-center'>
              <Tagline/>
              <p className='mt-4 desktop:mt-6 font-jakarta font-extrabold text-white text-center text-[32px] leading-[40px] tablet:text-5xl md:text-[56px] md:leading-[64px] fhd:text-[64px] fhd:leading-[76px] whitespace-nowrap'>
                Need Improvement<br/>
                or rapair your home?<br/>
                we can help!
              </p>
              <div className='mt-6 flex gap-6 laptop:gap-10'>
                <Feature text='free quotes'/>
                <Feature text='100% commitment-free'/>
              </div>
              <HeroButton/>
            </div>
            <Highlights/>
          </div>
          <HeroImage
            image={rightMan}
            isLeft={false}
          />
        </div>
      </div>
    </div>
  )
}
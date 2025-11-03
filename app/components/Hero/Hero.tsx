import { HeroImage } from './HeroImage'
import { Tagline } from './Tagline'
import { CommonContent } from '../Common/CommonContent'
import { Highlights } from './Highlights'
import leftMan from '@/public/image/left_man.png'
import rightMan from '@/public/image/right_man.png'

const title = [
  'Need Improvement',
  'or rapair your home?',
  'we can help!'
]

export function Hero() {
  return(
    <section className='relative bg-blue-medium-dark fhd:before:h-[45px] fhd:before:w-full fhd:before:absolute fhd:before:bottom-0 fhd:before:bg-white'>
      <div className='box-container relative overflow-hidden bg-blue-medium-dark clip-path-hero'>
        <div className='px-4 flex gap-10 justify-center desktop:justify-between'>
          <HeroImage
            image={leftMan}
            isLeft={true}
          />
          <div className='mt-6 laptop:mt-12 fhd:mt-20 desktop:pb-4 fhd:pb-10 flex flex-col items-center justify-around gap-10'>
            <div className='flex flex-col items-center gap-3 md:gap-6'>
              <Tagline/>
              <CommonContent 
                title={title}
                isCentered={true}
              />
            </div>
            <Highlights/>
          </div>
          <HeroImage
            image={rightMan}
            isLeft={false}
          />
        </div>
      </div>
    </section>
  )
}
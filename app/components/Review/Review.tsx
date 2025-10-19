import { ReviewLogo } from './ReviewLogo'
import { ReviewSwiper } from './ReviewSwiper'

export function Review() {
  return (
    <section 
      id='blog'
      className='bg-white'
    >
      <div className='box-container py-8 tablet:py-16 laptop:py-32'>
        <div className='mx-auto max-w-[1130px] max-laptop:px-6'>
          <p className='font-jakarta font-bold text-black-light text-center text-balance text-2xl leading-8 tablet:text-4xl tablet:leading-12 md:text-[52px] md:leading-16'>
            Here our original reviews from trusted platform
          </p>
          <ReviewLogo/>
          <ReviewSwiper numberOfBullets={4}/>
        </div>
      </div>
    </section>
  )
}
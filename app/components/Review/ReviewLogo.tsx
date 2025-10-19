import Image from 'next/image'
import reviewLogo from '@/public/image/review_logo.png'

export function ReviewLogo() {
  return (
    <div className='laptop:mx-[72px] mt-8 laptop:mt-16 relative md:pt-6 pb-6 flex justify-center review-logo-border'>
      <Image
        src={reviewLogo}
        alt='Review Logo image'
        className='w-32 tablet:w-52 h-auto'
      />
    </div>
  )
}
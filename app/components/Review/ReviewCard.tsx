import Image from 'next/image'
import { SlideDataType } from './slideData'
import { Rating } from '@mui/material'
import {ReactComponent as StarIcon} from '@/public/icons/star.svg' 

export function ReviewCard({name, review, rate, photo}: SlideDataType) {
  return (
    <>
      <div className='pb-2 laptop:pb-10 font-jakarta'>
        <p className='mx-auto max-w-[740px] text-center text-lg tablet:text-xl leading-7 tablet:leading-8 text-gray-dark'>{review}</p>
        <div className='mt-6 tablet:mt-10 flex justify-center items-center gap-4 tablet:gap-8'>
          <div className='relative shrink-0 size-[52px] tablet:size-[76px] rounded-full overflow-hidden'>
            <Image
              src={photo}
              alt='User photo'
              className='object-cover'
              fill
            />
          </div>
          <div>
            <p className='capitalize text-xl tablet:text-2xl text-black-light font-bold leading-7 tablet:leading-8'>{name}</p>
            <Rating
             value={rate}
             readOnly={true}
             icon={<StarIcon className='text-yellow size-[17px] tablet:size-[26px]'/>}
             emptyIcon={<StarIcon className='text-gray-light size-[17px] tablet:size-[26px]'/>}
             classes={{
              root: 'mt-1 tablet:mt-2',
              icon: 'flex justify-center items-center size-6 tablet:size-9'
             }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
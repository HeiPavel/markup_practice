'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { NavigationArrow } from './NavigationArrow'
import { ReviewCard } from './ReviewCard'
import { slideData } from './slideData'
import 'swiper/css'
import 'swiper/css/navigation'

const AMOUNT_OF_SLIDES = slideData.length

export function ReviewSwiper({numberOfBullets}: {numberOfBullets: number}) {
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const [paginationWidth] = useState((numberOfBullets * 2 - 1) * 12 + 28)
  const [left, setLeft] = useState(AMOUNT_OF_SLIDES > numberOfBullets ? Math.floor(numberOfBullets / 2) * 24 : 0)
  const [active, setActive] = useState(0)

  return(
    <>
      <div className='md:max-laptop:mx-12 relative tablet:px-12 pro:px-[72px] py-6 tablet:py-10'>
        <NavigationArrow
          isLeft={true}
          isDisabled={isBeginning}
          isMobile={false}
        />
        <NavigationArrow
          isLeft={false}
          isDisabled={isEnd}
          isMobile={false}
        />
        <Swiper
          className='h-full max-w-full'
          wrapperClass='flex h-full'
          slidesPerView={1}
          navigation={{
            nextEl: '.next-review',
            prevEl: '.prev-review'
          }}
          modules={[Navigation, Pagination]}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning)
            setIsEnd(swiper.isEnd)
            setActive(swiper.activeIndex)
            if (AMOUNT_OF_SLIDES > numberOfBullets) setLeft(prev => prev - (swiper.activeIndex - active) * 24)
          }}
          pagination={{
            type: 'bullets',
            el: '.review-pagination',
            clickable: true,
            bulletClass: 'review-bullet',
            bulletActiveClass: 'review-bullet-active',
            renderBullet: (index, className) => '<span class="' + className + '"></span>'
          }}
        >
          {
            slideData.map((data, index) => (
              <SwiperSlide>
                <ReviewCard
                  key={index}
                  {...data}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <div className='mx-auto px-6 max-w-[400px] flex justify-between tablet:justify-center items-center'>
        <NavigationArrow
          isLeft={true}
          isDisabled={isBeginning}
          isMobile={true}
        />
        <div 
          className='overflow-hidden'
          style={{
            width: `${paginationWidth}px`
          }}
        >
          <div 
            className={`relative review-pagination flex gap-3 ${AMOUNT_OF_SLIDES <= numberOfBullets ? 'justify-center contain-layout-paint' : ''} transition-all ease-in-out duration-300`}
            style={{
              left: `${left}px`
            }}
          >
          </div>
        </div>
        <NavigationArrow
          isLeft={false}
          isDisabled={isEnd}
          isMobile={true}
        />
      </div>
    </>
  )
}
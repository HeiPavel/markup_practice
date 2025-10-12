import Image from 'next/image'
import { ServicesContent } from './ServicesContent/ServicesContent'
import roofWorkers from '@/public/image/roof_workers.png'

export function Services() {
  return (
    <section 
      id='services'
      className='bg-white'
    >
      <div className='box-container px-6 laptop:px-16 pt-16 pb-8 laptop:pt-32 laptop:pb-16 flex justify-center'>
        <div className='grow max-w-[1432px] flex flex-col-reverse laptop:flex-row laptop:justify-between items-center gap-8 tablet:gap-16'>
          <ServicesContent/>
          <div className='relative'>
            <Image
              src={roofWorkers}
              alt='Services workers photo'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
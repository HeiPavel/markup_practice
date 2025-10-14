import { ServicesCard } from './ServicesCard'
import { MoreServices } from './MoreServices'
import { cardData } from './cardData'

export function OurServicesList() {
  return (
    <div className='mt-8 laptop:mt-14 grid max-md:gap-y-8 grid-cols-1 sm:grid-cols-[repeat(auto-fill,_360px)] justify-center justify-items-center'>
      {
        cardData.map(({Icon, title, description}, index) => (
          <ServicesCard
            key={index}
            Icon={Icon}
            title={title}
            description={description}
          />
        ))
      }
      <MoreServices/>
    </div>
  )
}
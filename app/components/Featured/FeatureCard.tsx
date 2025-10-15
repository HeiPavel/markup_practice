import { CardType } from '../Common/types'

export function FeatureCard({Icon, title, description}: CardType) {
  return (
    <div className='max-md:max-w-[450px] flex max-md:flex-col max-md:items-center gap-3 md:gap-8'>
      <Icon className='shrink-0 size-20 md:size-[100px]'/>
      <div className='font-jakarta max-md:text-center'>
        <p className='font-semibold md:font-bold text-lg md:text-2xl leading-7 md:leading-8 text-white'>{title}</p>
        <p className='mt-3 text-lg leading-7 text-gray-medium sm:max-md:text-balance'>{description}</p>
      </div>
    </div>
  )
}
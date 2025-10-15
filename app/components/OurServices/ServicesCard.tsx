import { CardType } from '../Common/types'

export function ServicesCard({Icon, title, description}: CardType) {
  return (
    <div className='sm:px-8 md:py-8 max-sm:max-w-[296px] flex flex-col gap-4 max-md:items-center'>
      <div className='size-16 rounded-[20px] flex justify-center items-center bg-blue-medium-dark'>
        <Icon/>
      </div>
      <div className='font-jakarta max-md:text-center'>
        <p className='font-bold text-2xl leading-8 text-black-light'>{title}</p>
        <p className='mt-3 text-lg leading-7 text-gray-dark'>{description}</p>
      </div>
    </div>
  )
}
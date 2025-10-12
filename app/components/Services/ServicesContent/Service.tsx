import {ReactComponent as CheckIcon} from '@/public/icons/check_icon.svg'

export function Service({text}: {text: string}) {
  return (
    <div className='flex gap-3 items-center text-blue-medium'>
      <CheckIcon className='size-4 shrink-0'/>
      <p className='font-jakarta font-semibold tablet:font-bold text-base tablet:text-xl leading-6 tablet:leading-7 text-nowrap'>{text}</p>
    </div>
  )
}
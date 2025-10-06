import {ReactComponent as CheckIcon} from '@/public/icons/check_icon.svg'

type Props = {
  text: string
}

export function Feature({text}: Props) {
  return (
    <div className='flex gap-2 items-center'>
      <CheckIcon/>
      <p className='capitalize font-jakarta text-sm tablet:text-base md:text-lg laptop:text-xl text-turquoise-medium'>{text}</p>
    </div>
  )
}
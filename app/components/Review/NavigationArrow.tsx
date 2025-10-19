import {ReactComponent as ArrowLeft} from '@/public/icons/arrow_left.svg'
import {ReactComponent as ArrowRight} from '@/public/icons/arrow_right.svg'

type Props = {
  isLeft: boolean
  isDisabled: boolean
  isMobile: boolean
}

export function NavigationArrow({isLeft, isDisabled, isMobile}: Props) {
  return (
    <button 
      disabled={isDisabled}
      className={`
        ${isMobile ? 'md:hidden' : 'max-md:hidden absolute top-[70px]'} ${isLeft ? 'prev-review md:-left-6 pro:left-0' : 'next-review md:-right-6 pro:right-0'} 
        shrink-0 flex justify-center items-center size-12 rounded-full ${isDisabled ? 'bg-gray-light' : 'bg-turquoise-medium cursor-pointer'}
      `}
    >
      {isLeft ? <ArrowLeft/> : <ArrowRight/>}
    </button>
  )
}
import {ReactComponent as PhoneIcon} from '@/public/icons/phone_icon.svg'

export function CallButton() {
  return (
    <button className='mt-6 tablet:mt-10 md:mt-12 p-2 bg-turquoise-medium flex items-center gap-4 rounded-full cursor-pointer'>
      <span className='pl-3.5 text-white font-jakarta font-bold text-lg tablet:text-2xl'>Call Us Now</span>
      <div className='size-8 tablet:size-12 rounded-full bg-white flex justify-center items-center'>
        <PhoneIcon className='size-4 tablet:size-6'/>
      </div>
    </button>
  )
}
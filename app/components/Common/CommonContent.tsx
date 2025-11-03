import { Fragment } from 'react'
import { Feature } from './Feature'
import { CallButton } from './CallButton'

type Props = {
  title: string[]
  isCentered: boolean
}

export function CommonContent({title, isCentered}: Props) {
  return(
    <div className={`flex flex-col items-center ${!isCentered ? 'laptop:max-desktop:items-end desktop:items-start' : ''}`}>
      <p className={`font-jakarta font-extrabold text-white text-center ${!isCentered ? 'laptop:max-desktop:text-right desktop:text-left' : ''} 
        text-[32px] leading-[40px] tablet:text-5xl tablet:leading-14 md:text-[56px] md:leading-[64px] fhd:text-[64px] fhd:leading-[76px] whitespace-nowrap`}>
        {title.map((text, index) => (
          <Fragment key={index}>
            {text}<br/>
          </Fragment>
        ))}
      </p>
      <div className='mt-6 max-tablet:w-full max-tablet:max-w-[329px] flex max-tablet:justify-between gap-3 tablet:gap-6 laptop:gap-10'>
        <Feature text='free quotes'/>
        <Feature text='100% commitment-free'/>
      </div>
      <CallButton/>
    </div>
  )
}
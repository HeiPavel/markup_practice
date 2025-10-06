export type HighlightType = {
  text: string
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export function Highlight({text, Icon}: HighlightType) {
  const splitedText = text.split(',')

  return (
    <div className='relative px-5 py-6 fhd:px-8 fhd:py-0 flex flex-col fhd:flex-row items-center gap-2 tablet:gap-4 highlight-border'>
      <div className='size-8 tablet:size-12 shrink-0 flex justify-center items-center bg-blue-medium rounded-full'>
        <Icon className='size-4 tablet:size-6'/>
      </div>
      <p className='font-jakarta font-semibold text-white text-sm tablet:text-lg leading-6 text-center fhd:text-left'>
        {splitedText[0]}
        <br/>
        {splitedText[1]}
      </p>
    </div>
  )
}
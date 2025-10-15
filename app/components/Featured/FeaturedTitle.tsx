export function FeaturedTitle() {
  return (
    <div className='relative tablet:pb-6 laptop:pb-10 fhd:pb-14 featured-border'>
      <div className='mx-auto max-tablet:max-w-[450px] tablet:max-fhd:max-w-2xl flex max-fhd:flex-col gap-3 tablet:gap-4 laptop:gap-8 fhd:gap-0 fhd:justify-between items-center fhd:items-end font-jakarta max-fhd:text-center'>
        <p className='fhd:basis-3xl font-bold text-2xl tablet:text-4xl pro:text-[52px] leading-8 tablet:leading-12 pro:leading-16 text-white max-fhd:text-balance'>Fast, Friendly, and Satisfaction Guarantee</p>
        <p className='fhd:basis-[613px] text-lg leading-7 text-gray-medium sm:max-fhd:text-balance'>No matter how big or small your work is, whether it's for the interior or exterior of your home, we are ready to serve and help you solve your home problems.</p>
      </div>
    </div>
  )
}
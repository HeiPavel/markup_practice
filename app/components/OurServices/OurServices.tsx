import { OurServicesTitle } from './OurServicesTitle'
import { OurServicesList } from './OurServicesList'

export function OurServices() {
  return (
    <section className='bg-white'>
      <div className='box-container max-md:px-6 desktop:px-8 py-8 tablet:py-10 laptop:py-28 flex justify-center'>
        <div className='grow max-w-[1440px]'>
          <OurServicesTitle/>
          <OurServicesList/>
        </div>
      </div>
    </section>
  )
}
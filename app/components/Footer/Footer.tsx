import { Newsletter } from './Newsletter'

export function Footer() {
  return (
    <section 
      id='contact'
      className='bg-turquoise-medium'
    >
      <div className='box-container flex justify-center pt-9 laptop:pt-12 pb-[74px]'>
        <div className='grow px-6 md:px-20 max-w-[1650px]'>
          <Newsletter/>
          <div className='px-6 mt-14 flex justify-between'>

          </div>
        </div>
      </div>
    </section>
  )
}
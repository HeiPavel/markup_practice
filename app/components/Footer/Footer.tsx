import { Newsletter } from './Newsletter'

export function Footer() {
  return (
    <section className='bg-turquoise-medium'>
      <div className='box-container flex justify-center pt-12 pb-[74px]'>
        <div className='grow px-20 max-w-[1650px]'>
          <Newsletter/>
          <div className='px-6 mt-14 flex justify-between'>

          </div>
        </div>
      </div>
    </section>
  )
}
import { ServicesTite } from './ServicesTitle'
import { ServicesTypes } from './ServicesTypes'
import { ServicesNote } from './ServicesNote'

export function ServicesContent() {
  return (
    <div className='max-w-[560px]'>
      <ServicesTite/>
      <ServicesTypes/>
      <ServicesNote/>
    </div>
  )
}
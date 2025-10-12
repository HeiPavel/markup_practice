import { Service } from './Service'

const serviceTypes = [
  'Repair and Installation',
  'Plumbing',
  'Maintenance',
  'Budget-friendly',
  'Home Security Services',
  'Eco-friendly solutions'
]

export function ServicesTypes() {
  return (
    <div className='mt-8 tablet:mt-14 grid grid-cols-1 tablet:grid-cols-2 tablet:grid-rows-3 gap-y-6 tablet:gap-y-8 tablet:gap-x-14'>
      {
        serviceTypes.map((text, index) => (
          <Service
            key={index}
            text={text}
          />
        ))
      }
    </div>
  )
}
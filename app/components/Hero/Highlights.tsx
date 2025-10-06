import { Highlight, HighlightType } from './Highlight'
import {ReactComponent as GuaranteeIcon} from '@/public/icons/guarantee_icon.svg'
import {ReactComponent as ClockIcon} from '@/public/icons/clock_icon.svg'
import {ReactComponent as MapPinIcon} from '@/public/icons/map_pin_icon.svg'
import {ReactComponent as CalendarIcon} from '@/public/icons/calendar_icon.svg'

const data: HighlightType[] = [
  {
    text: 'Satisfaction, Guarantee',
    Icon: GuaranteeIcon
  },
  {
    text: '24H, Availability',
    Icon: ClockIcon
  },
  {
    text: 'Local US, Professional',
    Icon: MapPinIcon
  },
  {
    text: 'Flexible, Appointments',
    Icon: CalendarIcon
  }
]

export function Highlights() {
  return (
    <div className='grid grid-cols-2 grid-rows-2 fhd:flex'>
      {
        data.map((props, index) => (
          <Highlight 
            key={index}
            {...props}
          />
        ))
      }
    </div>
  )
}
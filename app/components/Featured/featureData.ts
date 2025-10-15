import { CardType } from '../Common/types'
import {ReactComponent as SatisfactionGuaranteeIcon} from '@/public/icons/satisfaction_guarantee_icon.svg'
import {ReactComponent as QuotesIcon} from '@/public/icons/quotes_icon.svg'
import {ReactComponent as LocalIcon} from '@/public/icons/local_icon.svg'
import {ReactComponent as FastServiceIcon} from '@/public/icons/fast_service_icon.svg'
import {ReactComponent as AppointmentIcon} from '@/public/icons/appointments_icon.svg'
import {ReactComponent as CommitmentIcon} from '@/public/icons/commitment_icon.svg'

export const featureData: CardType[] = [
  {
    Icon: SatisfactionGuaranteeIcon,
    title: 'Satisfaction Guarantee',
    description: 'You don\'t need to worry about scams or our performance results. our company has been verified and strives for optimal results'
  },
  {
    Icon: QuotesIcon,
    title: 'Free Quotes',
    description: 'Get personalized cost estimates without any obligation. Experience transparency and peace of mind as you explore our service.'
  },
  {
    Icon: LocalIcon,
    title: 'Local Professionals',
    description: 'Our services cover the Nationwide, US area, including urban, suburban, and rural locations for both long and short term maintenance'
  },
  {
    Icon: FastServiceIcon,
    title: 'Fast 24-Hour Service',
    description: 'Need fast handling for repairs to drains, leaks or something else? Our experts are available anytime to help you solve the problem'
  },
  {
    Icon: AppointmentIcon,
    title: 'Flexible Appointments',
    description: 'We offer convenient appointment times that can accommodate your busy schedule, day or night, 7 days a week.'
  },
  {
    Icon: CommitmentIcon,
    title: '100% Commitment-Free',
    description: 'You are free to ask us about the problems you are facing. We offer a no-commitment approach to put your mind at ease'
  }
]
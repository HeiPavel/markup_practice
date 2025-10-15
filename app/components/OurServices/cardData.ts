import { CardType } from '../Common/types'
import {ReactComponent as PlumbingIcon} from '@/public/icons/plumbing_icon.svg'
import {ReactComponent as RoofIcon} from '@/public/icons/roof_icon.svg'
import {ReactComponent as WallIcon} from '@/public/icons/wall_icon.svg'
import {ReactComponent as WoodIcon} from '@/public/icons/wood_icon.svg'
import {ReactComponent as RepairIcon} from '@/public/icons/repair_icon.svg'
import {ReactComponent as BathroomIcon} from '@/public/icons/bathroom_icon.svg'
import {ReactComponent as DoorIcon} from '@/public/icons/door_icon.svg'

export const cardData: CardType[] = [
  {
    Icon: PlumbingIcon,
    title: 'Plumbing services',
    description: 'Drain pipe leaking, pipe clogged, replace the pipe line'
  },
  {
    Icon: RoofIcon,
    title: 'Roofing repair',
    description: 'Roof leaks, tile replacement, roof cleaning and maintenance'
  },
  {
    Icon: WallIcon,
    title: 'Mold Removal',
    description: 'Removing and cleaning mildew, Restoration and Prevention'
  },
  {
    Icon: WoodIcon,
    title: 'Tree Trimming',
    description: 'Trimming and cleaning, Deadwood removal, Tree shaping'
  },
  {
    Icon: RepairIcon,
    title: 'Appliance Repair',
    description: 'repair of washing machines, refrigerators, Air conditioner, etc'
  },
  {
    Icon: BathroomIcon,
    title: 'Bathroom Remodeling',
    description: 'Design and Consulting, installation, Repairing, tile repair'
  },
  {
    Icon: DoorIcon,
    title: 'Locksmith',
    description: 'Lock Installation and Repair, Duplication, Lock Rekeying'
  },
]
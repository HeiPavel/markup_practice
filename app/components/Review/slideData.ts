import { StaticImageData } from 'next/image'
import kende from '@/public/image/kende.png'
import turner from '@/public/image/turner.png'
import roberts from '@/public/image/roberts.png'
import kelly from '@/public/image/kelly.png'

export type SlideDataType = {
  name: string
  review: string
  rate: number
  photo: StaticImageData
}

export const slideData: SlideDataType[] = [
  {
    name: 'Kende Attila',
    review: 'Roof repairs can be a real headache, but HomePro makes it easy! Their roofing team turned my leaky roof into a stockade. With their craftsmanship and the best materials, my house is now ready to weather any storm.',
    rate: 4,
    photo: kende
  },
  {
    name: 'James Turner',
    review: 'HomePro handled our bathroom remodel perfectly. The tiles were installed with precision, and the new fixtures look fantastic. It took a bit longer than expected, but the quality made it worth the wait!',
    rate: 4,
    photo: turner
  },
  {
    name: 'Emily Roberts',
    review: 'I couldn’t be happier with the kitchen renovation! HomePro’s crew worked fast, kept everything clean, and the result looks straight out of a magazine. They turned my outdated kitchen into a modern, bright space that I absolutely love.',
    rate: 5,
    photo: roberts
  },
  {
    name: 'Liam Kelly',
    review: 'The painting service was good overall, but the team arrived a bit late, which delayed the schedule. Still, the final color and texture are great, and I appreciate their effort to fix minor issues promptly.',
    rate: 3,
    photo: kelly
  },
]
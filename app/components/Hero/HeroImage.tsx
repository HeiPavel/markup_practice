import Image, {StaticImageData} from 'next/image'

type Props = {
  image: StaticImageData,
  isLeft: boolean
}

export function HeroImage({image, isLeft}: Props) {
  return (
    <div className={`mb-[61px] self-start relative hidden desktop:block basis-[412px] aspect-[0.495] ${isLeft ? 'hero-image-gradient-left' : 'hero-image-gradient-right'}`}>
      <Image
        src={image}
        alt='Hero image'
        className='w-full h-auto'
      />
    </div>
  )
}
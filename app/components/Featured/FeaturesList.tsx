import { FeatureCard } from './FeatureCard'
import { featureData } from './featureData'

export function FeaturesList() {
  return (
    <div className='mt-12 md:mt-14 mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-[minmax(550px,_800px)] fhd:grid-cols-[repeat(2,_628px)] fhd:gap-x-16 gap-y-12 md:gap-y-14 justify-center justify-items-center'>
      {
        featureData.map((data, index) => (
          <FeatureCard
            key={index}
            {...data}
          />
        ))
      }
    </div>
  )
}
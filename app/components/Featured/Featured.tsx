import { FeaturedTitle } from './FeaturedTitle'
import { FeaturesList } from './FeaturesList'

export function Featured() {
  return (
    <section className='bg-white'>
      <div className='box-containter px-6 tablet:px-8 laptop:px-16 py-5 tablet:py-6'>
        <div className='relative overflow-hidden px-8 tablet:px-16 laptop::px-28 fhd:px-44 py-8 tablet:py-10 pro:py-16 bg-blue-medium-dark clip-path-featured rounded-3xl'>
          <FeaturedTitle/>
          <FeaturesList/>
        </div>
      </div>
    </section>
  )
}
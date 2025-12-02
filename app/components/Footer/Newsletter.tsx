import { Form } from './Form'
import { FormData } from './FormData'
import { SubscribeConfirmation } from './SubscribeConfirmation'

export function Newsletter() {
  return (
    <div className='flex max-laptop:flex-col laptop:justify-between gap-6 laptop:gap-10 bg-turquoise-light p-5 tablet:p-6 rounded-3xl font-jakarta'>
      <div className='text-white shrink-0'>
        <p className='text-2xl font-bold leading-8'>Stay Connected with Our Newsletter</p>
        <p className='mt-3 text-lg leading-7'>Subscribe to our newsletter to get more news, promo, or news services</p>
      </div>
      <FormData>
        <Form/>
        <SubscribeConfirmation/>
      </FormData>
    </div>
  )
}
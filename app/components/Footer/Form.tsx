'use client'

import { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {z} from 'zod'
import { ErrorMessage } from '@hookform/error-message'

const schema = z.object({
  email: z.string()
    .min(1, {message: 'Email required'})
    .max(128, {message: 'Max length 128 characters.'})
    .email()
})

type EmailInput = z.infer<typeof schema>

export function Form() {
  const [isFocused, setIsFocused] = useState(false)

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitSuccessful
    },
    reset
  } = useForm<EmailInput>({
    resolver: zodResolver(schema),
    mode: 'onSubmit'
  })

  const onSubmit: SubmitHandler<EmailInput> = (data) => {
    console.log(data)
  }

  useEffect(() => {
    if (isSubmitSuccessful) reset()
  }, [isSubmitSuccessful, reset])

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className={`h-14 tablet:h-[76px] w-full laptop:max-w-[516px] flex gap-3 laptop:gap-4 
        p-2 tablet:p-3 rounded-full bg-white font-jakarta outline-2 
        ${errors.email ? 'outline-red' : isFocused ? 'outline-blue-gradient' : 'outline-transparent'} 
        transition-colors ease-in-out duration-150`}
    >
      <div className='relative h-full grow'>
        <input
          type='text'
          {...register('email')}
          placeholder='Email address'
          className='relative overflow-x-hidden size-full pl-2 tablet:pl-4 text-lg leading-7 
            placeholder:text-gray-medium outline-0 text-black bg-white transparent-autofill'
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <ErrorMessage
          errors={errors}
          name='email'
          render={({message}) => (
            <p className='absolute -bottom-6 tablet:-bottom-8 left-2 tablet:left-4 text-xs tablet:text-sm text-red'>{message}</p>
          )}
        />
      </div>
      <button
        type='submit' 
        className='px-4 tablet:px-9 py-2 bg-turquoise-medium text-center font-bold tablet:text-lg text-white 
          leading-6 rounded-full cursor-pointer'
      >
        Subscribe
      </button>
    </form>
  )
}
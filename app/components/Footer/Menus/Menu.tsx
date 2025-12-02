export type MenuType = {
  title: string
  options: string[]
}

export function Menu({title, options}: MenuType) {
  return (
    <dl className='font-jakarta text-white leading-8 flex flex-col gap-3'>
      <dt className='mb-3 font-bold text-2xl'>
        {title}
      </dt>
      {
        options.map((option, index) => (
          <dd
            key={index}
            className='ml-0 text-xl cursor-pointer'
          >
            {option}
          </dd>
        ))
      }
    </dl>
  )
}
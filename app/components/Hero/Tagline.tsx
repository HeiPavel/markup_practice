const content = ['maintenances', '•', 'rapairs', '•', 'Improvements']

export function Tagline() {
  return(
    <div className='flex gap-4 pro:gap-6 items-center'>
      {
        content.map((text, index) => (
          <p 
            key={index}
            className='font-jakarta odd:font-semibold odd:text-sm md:odd:font-bold md:odd:text-xl text-xs md:text-base text-gray-medium capitalize'
          >
            {text}
          </p>
        ))
      }
    </div>
  )
}
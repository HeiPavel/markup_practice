'use client'

type LinkTitle = 'about' | 'services' | 'blog' | 'contact'

type LinksType = Record<LinkTitle, string>

type Props = {
  setOpen?: (open: boolean) => void
}

const links: LinksType = {
  about: 'about us',
  services: 'services',
  blog: 'our blog',
  contact: 'contact'
}

export function Nav({setOpen}: Props) {
  return (
    <nav className='flex flex-col desktop:flex-row justify-center desktop:justify-normal desktop:gap-14'>
      {
        Object.keys(links).map((linkTitle, index) => (
          <a
            key={index}
            href={`#${linkTitle !== 'about' ? linkTitle : ''}`}
            className='py-8 desktop:py-0 capitalize font-jakarta font-bold text-lg text-white transition-all link-text-shadow'
            onClick={() => setOpen ? setOpen(false) : undefined}
          >
            {links[linkTitle as keyof LinksType]}
          </a>
        ))
      }
    </nav>
  )
}
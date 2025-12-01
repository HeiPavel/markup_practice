import Image from 'next/image'
import logo from '@/public/image/home-pro-white.png'
import {ReactComponent as YoutubeIcon} from '@/public/icons/youtube.svg'
import {ReactComponent as InstagramIcon} from '@/public/icons/instagram.svg'
import {ReactComponent as Facebookcon} from '@/public/icons/facebook.svg'
import {ReactComponent as TwitterIcon} from '@/public/icons/twitter.svg'
import {ReactComponent as MailIcon} from '@/public/icons/mail.svg'

const icons = [YoutubeIcon, InstagramIcon, Facebookcon, TwitterIcon, MailIcon]

export function FooterLogo() {
  return (
    <div className='max-w-[460px]'>
      <Image
        src={logo}
        alt='Home pro logo image'
      />
      <p className='mt-8 font-jakarta text-lg leading-7 text-white max-tablet:text-balance'>
        Home Pro is your premier destination for top-notch smart home service and repair.
      </p>
      {<div className='mt-8 flex gap-6'>
        {icons.map((Icon, index) => <Icon key={index}/>)}
      </div>}
    </div>
  )
}
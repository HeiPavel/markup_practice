import { Menu, MenuType } from './Menu'

const menuData: MenuType[] = [
  {
    title: 'Company',
    options: [
      'About us',
      'Services',
      'Our Blog',
      'Contact'
    ]
  },
  {
    title: 'Legal',
    options: [
      'Terms',
      'Privacy',
      'Cookies',
      'License'
    ]
  }
]

export function Menus() {
  return (
    <div className='flex gap-16 laptop:gap-[102px]'>
      {
        menuData.map((data, index) => (
          <Menu
            key={index}
            {...data}
          />
        ))
      }
    </div>
  )
}
//
import Logo from '@/assets/logo.svg?react'

//
import Menu from './Menu'
import MobileMenu from './MobileMenu'

//
const Nav = () => {
  return (
    <div className="fixed z-10 w-full h-[80px] flex justify-between items-center
      px-4 bg-[#fdfeff] text-gray-500 dark:bg-black dark:text-gray-100">
      <div>
        <Logo style={{ width: '110px', height: '100%' }}/>
      </div>
      <Menu />
      <MobileMenu />
    </div>
  )
}

export default Nav

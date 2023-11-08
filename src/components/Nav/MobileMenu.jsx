//
import { Link } from 'react-scroll'

//
import { useState } from 'react'

//
import { FaBars, FaTimes } from 'react-icons/fa'

//
import ThemeToggle from './ThemeToggle'

//
const itemsList = ['Home', 'About', 'Skills', 'Projects', 'Contact']

//
const ListItem = ({ tag, onNavToggle }) => {
  return (
    <Link to={tag} smooth={true} duration={500}
      className='py-6 w-full text-center text-4xl cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700'
      onClick={onNavToggle}
    >
      <li className='h-full flex items-center justify-center p-5'>{tag}</li>
    </Link>
  )
}

//
const MobileMenu = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <>
      {/* Burger */}
      <div className='md:hidden flex items-center cursor-pointer'>
        <ThemeToggle />
        {!nav ? <FaBars className='z-10' onClick={handleClick}/> : <FaTimes className='z-10' onClick={handleClick}/>}
      </div>
      {/* list */}
      <ul className={!nav ? 'hidden' : 'md:hidden absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center dark:bg-[#0f0f0f]'}>
        { itemsList.map(item => <ListItem key={item} tag={item} onNavToggle={handleClick}/>) }
      </ul>
    </>
  )
}

export default MobileMenu

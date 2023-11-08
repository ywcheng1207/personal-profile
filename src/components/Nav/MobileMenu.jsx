//
import { Link } from 'react-scroll'

//
import { useState } from 'react'

//
import { FaBars, FaTimes } from 'react-icons/fa'

//
const MobileMenu = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <>
      {/* Burger */}
      <div className='md:hidden z-10' onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* list */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link to="home" smooth={true} duration={500} onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="about" smooth={true} duration={500} onClick={handleClick}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl' >
          <Link to="work" smooth={true} duration={500} onClick={handleClick}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl' >
          <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul></>
  )
}

export default MobileMenu

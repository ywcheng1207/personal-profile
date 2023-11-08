//
import { Link } from 'react-scroll'

//
import { useSelector, useDispatch } from 'react-redux'
import { selectTheme, handleTheme } from '@/store/slices/themeSlice'

//
import { BsMoonStars } from 'react-icons/bs'
import { BiSolidSun } from 'react-icons/bi'

const items = {
  Home: 'Home',
  Skills: 'Skills',
  About: 'About',
  Projects: 'Projects'
}

//
const ListItem = ({ tag, text }) => {
  return (
    <Link to={tag} smooth={true} duration={500}
      className='h-full cursor-pointer hover:bg-red-400 hover:text-white transition-colors duration-300'>
      <li className='h-full flex items-center p-10'>{text}</li>
    </Link>
  )
}

//
const Menu = () => {
  const themeState = useSelector(selectTheme)
  const dispatch = useDispatch()

  return (
    <ul className='hidden h-full md:flex '>
      {Object.entries(items).map(([key, value]) => {
        return <ListItem key={key} tag={key} text={value}/>
      })}
      <li onClick={() => dispatch(handleTheme())} className='px-4 flex items-center cursor-pointer'>
        {themeState.theme === 'light' ? <BiSolidSun size={20} color='#3d74c7' /> : <BsMoonStars size={20} color='yellow'/> }
      </li>
    </ul>
  )
}

export default Menu

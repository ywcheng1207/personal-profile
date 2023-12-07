//
import { Link } from 'react-scroll'

//
import ThemeToggle from './ThemeToggle'

//
const itemsList = ['Home', 'About', 'Skills', 'Projects', 'Contact']

//
const ListItem = ({ tag }) => {
  return (
    <Link to={tag} smooth={true} duration={500}
      className='h-full cursor-pointer hover:bg-red-400 hover:text-white transition-colors duration-300'>
      <li className='h-full flex items-center px-10'>{tag}</li>
    </Link>
  )
}

//
const Menu = () => {
  return (
    <ul className='hidden h-full md:flex '>
      {
        itemsList.map(item => {
          return <ListItem key={item} tag={item} />
        })
      }
      <ThemeToggle />
    </ul>
  )
}

export default Menu

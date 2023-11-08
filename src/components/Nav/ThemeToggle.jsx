//
import { useSelector, useDispatch } from 'react-redux'
import { selectTheme, handleTheme } from '@/store/slices/themeSlice'

//
import { BsMoonStars } from 'react-icons/bs'
import { BiSolidSun } from 'react-icons/bi'

//
const ThemeToggle = () => {
  const themeState = useSelector(selectTheme)
  const dispatch = useDispatch()

  return (
    <li onClick={() => dispatch(handleTheme())} className='px-4 flex items-center cursor-pointer'>
      {themeState.theme === 'light' ? <BiSolidSun size={20} color='#3d74c7' /> : <BsMoonStars size={20} color='yellow'/> }
    </li>
  )
}

export default ThemeToggle

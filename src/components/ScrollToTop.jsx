//
import { GoMoveToTop } from 'react-icons/go'

//
import { Link } from 'react-scroll'

//
const ScrollToTop = () => {
  return (
    <Link to='Home' smooth={true} duration={500} className='absolute bottom-10 right-10 w-[50] p-3 cursor-pointer'>
      <GoMoveToTop size={30} color='#9CA3AF'/>
    </Link>
  )
}

export default ScrollToTop

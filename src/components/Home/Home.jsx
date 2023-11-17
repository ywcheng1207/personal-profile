//
import { useSelector } from 'react-redux'
import { selectTheme } from '@/store/slices/themeSlice'

const Home = () => {
  const themeState = useSelector(selectTheme)

  return (
    <div name='Home'
      className={`w-full relative h-screen bg-backImg bg-cover bg-fixed bg-center bg-no-repeat 
      ${themeState.theme === 'light' ? 'blur-boundary' : 'blur-boundary-dark sepia-[.25]'}`}
    >
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-7xl text-white font-bold'> Hi there!</h1>
        <h2 className='text-2xl sm:text-3xl typing-effect-white'>I'm YWJ, a passionate developer.</h2>
      </div>
    </div>
  )
}

export default Home

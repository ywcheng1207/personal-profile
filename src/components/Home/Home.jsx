//
import { useSelector } from 'react-redux'
import { selectTheme } from '@/store/slices/themeSlice'

//
import GitHub from '@/assets/github.svg'
import Medium from '@/assets/medium.svg'
import Person from '@/assets/person.svg'

//
const Home = () => {
  const themeState = useSelector(selectTheme)

  return (
    <div name='Home'
      className={`w-full relative h-screen bg-backImg bg-cover bg-fixed bg-center bg-no-repeat 
      ${themeState.theme === 'light' ? 'blur-boundary' : 'blur-boundary-dark sepia-[.25]'}`}
    >
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-6xl text-neutral-300 font-bold home-text-font-fam'> Welcome ! I'm YWJ. </h1>
        <div className='flex gap-3 mt-10'>
          <a
            href='https://github.com/ywcheng1207'
            target="_blank" rel="noreferrer"
            title='GitHub'
            className='w-8 block hover:scale-105'
          >
            <img src={GitHub} alt="GitHub" />
          </a>
          <a
            href='https://medium.com/@ywcheng1207'
            target="_blank" rel="noreferrer"
            title='Medium'
            className='w-8 block hover:scale-105'
          >
            <img src={Medium} alt="Medium" />
          </a>
          <a
            href='https://www.cakeresume.com/dashboard'
            target="_blank" rel="noreferrer"
            title='CakeResume'
            className='w-8 block hover:scale-105'
          >
            <img src={Person} alt="CakeResume" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home

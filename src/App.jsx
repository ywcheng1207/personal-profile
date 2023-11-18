//
import Nav from '@/components/Nav/Nav'
import Home from '@/components/Home/Home'
import About from '@/components/About/About'
import Skills from '@/components/Skills/Skills'
import Projects from '@/components/Projects/Projects'
import Contact from '@/components/Contact/Contact'

//
import { useSelector } from 'react-redux'
import { selectTheme } from '@/store/slices/themeSlice'

//
import { gsap } from 'gsap'
import { useLayoutEffect } from 'react'

//
function App () {
  const themeState = useSelector(selectTheme)

  useLayoutEffect(() => {
    const preLoad = gsap.timeline()
    preLoad
      .to('#loadingValue', { width: '100%', duration: 2 })
      .to('#loadingBar', { opacity: 0, duration: 0.1 })
      .to('#quote', { opacity: 0, duration: 0.1 })
      .to('#preLoadContainer', { height: 0, duration: 0.5 })
  }, [])

  return (
    <>
      <div className={themeState.theme}>
        <div className='flex justify-center items-center flex-col fixed left-0 top-0 z-30 w-full h-full bg-white dark:bg-[#0f0f0f]' id='preLoadContainer'>
          <div className="text-4xl text-slate-900 dark:text-white home-text-font-fam" id='quote' >Welcome</div>
          <div className="relative mt-3 w-full h-1 rounded-sm bg bg-slate-300 dark:bg-gray-700" id='loadingBar'>
            <div className="absolute bg-slate-100 dark:bg-gray-400 w-0 h-1" id='loadingValue'></div>
          </div>
        </div>
      </div>

      <div className={themeState.theme}>
        <div className='min-w-fit font-serif  app'>
          <Nav />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App

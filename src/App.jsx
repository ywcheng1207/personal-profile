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
    const headerCover = gsap.timeline()
    headerCover
      .to('.loadingValue', { width: '100%', duration: 2 })
      .to('.loadingBar', { opacity: 0, duration: 0.1 })
      .to('.quote', { opacity: 0, duration: 0.1 })
      .to('.headerCover', { height: 0, duration: 0.5 })
  }, [])

  return (
    <>
      <div className="headerCover">
        <div className="quote home-text-font-fam" id="quote" >Welcome</div>
        <div className="loadingBar">
          <div className="loadingValue"></div>
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

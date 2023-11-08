//
import Nav from '@/components/Nav/Nav'
import Home from '@/components/Home/Home'
import About from '@/components/About/About'
import Skills from '@/components/Skills/Skills'
import Projects from '@/components/Projects/Projects'
import Contact from './components/Contact/Contact'

//
import { useSelector } from 'react-redux'
import { selectTheme } from '@/store/slices/themeSlice'

function App () {
  const themeState = useSelector(selectTheme)

  return (
    <div className={themeState.theme}>
      <div className='min-w-fit font-serif'>
        <Nav />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App

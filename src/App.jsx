//
import Nav from '@/components/Nav/Nav'
import Home from '@/components/Home/Home'
import About from '@/components/About/About'

//
import { useSelector } from 'react-redux'
import { selectTheme } from './store/slices/themeSlice'

function App () {
  const themeState = useSelector(selectTheme)

  return (
    <div className={themeState.theme}>
      <Nav />
      <Home />
      <About />
    </div>
  )
}

export default App

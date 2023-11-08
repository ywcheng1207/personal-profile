//
import Nav from '@/components/Nav/Nav'
import Home from '@/components/Home/Home'

//
import { useSelector } from 'react-redux'
import { selectTheme } from './store/slices/themeSlice'

function App () {
  const themeState = useSelector(selectTheme)

  return (
    <div className={themeState.theme}>
      <Nav />
      <Home />
    </div>
  )
}

export default App

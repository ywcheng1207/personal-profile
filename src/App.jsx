//
import Nav from '@/components/Nav/Nav'

//
import { useSelector } from 'react-redux'
import { selectTheme } from './store/slices/themeSlice'

function App () {
  const themeState = useSelector(selectTheme)

  return (
    <div className={themeState.theme}>
      <Nav />
    </div>
  )
}

export default App

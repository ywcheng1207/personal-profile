//
import { createSlice } from '@reduxjs/toolkit'

const initTheme = {
  theme: localStorage.getItem('theme') || 'light'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: initTheme,
  reducers: {
    handleTheme: (state, _action) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', state.theme)
    }
  }
})

export const {
  handleTheme
} = themeSlice.actions
export const selectTheme = (state) => state.theme
export default themeSlice.reducer

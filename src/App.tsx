import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaultTheme'
import { LocationProvider } from './context/locationContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <LocationProvider>
          <Router />
        </LocationProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}

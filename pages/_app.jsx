// Global Styles
import '../src/styles/global.css'
import 'swiper/swiper.min.css'

// Contexts
import { AppProvider } from '../src/contexts/AppContext'

// Theme
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppProvider>
  )
}

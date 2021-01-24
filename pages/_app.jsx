import Head from 'next/head'
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
    <React.Fragment>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes'
        />
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          rel='preload'
          as='style'
          href='https://fonts.googleapis.com/css2?family=Merriweather:wght@400;900'
        />
        <link
          rel='stylesheet'
          media='print'
          onLoad="this.onload=null;this.removeAttribute('media');"
          href='https://fonts.googleapis.com/css2?family=Merriweather:wght@400;900'
        />
        <noscript>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Merriweather:wght@400;900'
          />
        </noscript>
        <link rel='manifest' href='/manifest.json' />
        {/* <link
          href='/icons/icon-192x192.png'
          rel='icon'
          type='image/png'
          sizes='16x16'
        />
        <link
          href='/icons/icon-192x192.png'
          rel='icon'
          type='image/png'
          sizes='32x32'
        /> */}
        <link rel='apple-touch-icon' href='/iconst/icon-256x256.png' />
        <meta name='theme-color' content='#fdd835' />
      </Head>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AppProvider>
    </React.Fragment>
  )
}

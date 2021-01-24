import { Fragment } from 'react'
import Head from 'next/head'
import { Box } from 'rebass'
import Header from '../header'

export * from './styled'

export const Layout = ({ children, title, description, keywords }) => {
  return (
    <Fragment>
      <Head>
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Oswald:wght@700&family=Potta+One&display=swap'
          rel='stylesheet'
        />
        <title>{title}</title>
      </Head>

      <Header />

      <Box as='main' minHeight='100vh' width='100vw' paddingTop='6rem' pb={4}>
        {children}
      </Box>
    </Fragment>
  )
}

Layout.defaultProps = {
  title: 'Çanakkale Napoli Pizza 17 - En uygun pizzalar.',
  description: "Çanakkale'nin en güzel ve en ucuz pizzacısı.",
  keywords:
    'Pizza,Çanakkale pizza,Ucuz pizza,2 kişilik pizza,Büyük boy pizza,Orta boy pizza,Küçük boy pizza'
}

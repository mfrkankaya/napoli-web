import { Fragment } from 'react'
import Head from 'next/head'
import { Box, Image } from 'rebass'
import Header from '../header'
import Footer from '../footer'
import { WhatsappWrapper } from './styled'

export * from './styled'

export const Layout = ({ children, title, description, keywords }) => {
  return (
    <Fragment>
      <Head>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <title>{title}</title>
      </Head>

      <Header />

      <Box as='main' minHeight='100vh' width='100vw' paddingTop='6rem' pb={4}>
        {children}
      </Box>
      <Footer />
      <WhatsappWrapper href='https://wa.me/905312833131?text=İyi%20günler,%20sipariş%20vermek%20istiyorum.'>
        <Image src='img/whatsapp.png' loading='lazy' width={48} />
      </WhatsappWrapper>
    </Fragment>
  )
}

Layout.defaultProps = {
  title: 'Çanakkale Napoli Pizza - En uygun pizzalar.',
  description: "Çanakkale'nin en güzel ve en ucuz pizzacısı.",
  keywords:
    'Pizza,Çanakkale pizza,Ucuz pizza,2 kişilik pizza,Büyük boy pizza,Orta boy pizza,Küçük boy pizza'
}

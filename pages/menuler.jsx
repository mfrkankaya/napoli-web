import React from 'react'
import { Container, Layout, Text, Box } from '../src/components/common'
import Products from '../src/components/products'
import Welcome from '../src/components/welome'
import { axios, separateProducts } from '../src/utils'

const Pizzalar = ({ menus, popularMenus }) => {
  return (
    <Layout title='Çanakkale Napoli Pizza - En uygun ve lezzetli menüler.'>
      <Welcome
        text='Menüler'
        ctaText='Menünü seçmek için tıkla'
        centered
        smallSpace
      />

      <Container>
        <Text mb={3} fontSize='2rem' fontWeight='900'>
          En Popüler Menüler
        </Text>
        <Products products={popularMenus} />
      </Container>

      <Box pt={5} mt={5} />

      <Container>
        <Text mb={3} fontSize='2rem' fontWeight='900'>
          Tüm Menüler
        </Text>
        <Products id='products' products={menus} />
      </Container>
    </Layout>
  )
}

export default Pizzalar

export async function getStaticProps() {
  try {
    const { data: products } = await axios.get('products')
    const { menus } = separateProducts(products)

    const {
      data: { products: popularProducts }
    } = await axios.get('popular-contents')
    const { menus: popularMenus } = separateProducts(popularProducts)

    return {
      props: {
        menus,
        popularMenus
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        error: true
      }
    }
  }
}

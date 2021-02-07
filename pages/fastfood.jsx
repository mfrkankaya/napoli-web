import React from 'react'
import { Container, Layout, Text, Box } from '../src/components/common'
import Products from '../src/components/products'
import Welcome from '../src/components/welome'
import { axios, separateProducts } from '../src/utils'

const Pizzalar = ({ fastfoods }) => {
  return (
    <Layout title='Çanakkale Napoli Pizza - En uygun ve lezzetli hamburger ve fast food ürünleri.'>
      <Welcome
        text='Fast Food'
        ctaText='Yiyeceğini seçmek için tıkla'
        centered
        smallSpace
      />

      <Container>
        <Text mb={3} fontSize='2rem' fontWeight='900'>
          Tüm Fast Food ürünleri
        </Text>
        <Products id='products' products={fastfoods} />
      </Container>
    </Layout>
  )
}

export default Pizzalar

export async function getStaticProps() {
  try {
    const { data: products } = await axios.get('products')
    const { fastfoods } = separateProducts(products)

    return {
      props: {
        fastfoods
      }
    }
  } catch (error) {
    return {
      props: {
        error: true
      }
    }
  }
}

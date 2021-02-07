import React from 'react'
import { Container, Layout, Text, Box } from '../src/components/common'
import Products from '../src/components/products'
import Welcome from '../src/components/welome'
import { axios, separateProducts } from '../src/utils'

const Pizzalar = ({ salads }) => {
  return (
    <Layout>
      <Welcome text='Salatalar' ctaText='Salatanı seçmek için tıkla' />

      <Container>
        <Text mb={3} fontSize='2rem' fontWeight='900'>
          Tüm Salatalar
        </Text>
        <Products id='products' products={salads} />
      </Container>
    </Layout>
  )
}

export default Pizzalar

export async function getStaticProps() {
  try {
    const { data: products } = await axios.get('products')
    const { salads } = separateProducts(products)

    return {
      props: {
        salads
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

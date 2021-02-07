import React from 'react'
import { Container, Layout, Text, Box } from '../src/components/common'
import Products from '../src/components/products'
import Welcome from '../src/components/welome'
import { axios, separateProducts } from '../src/utils'

const Pizzalar = ({ drinks }) => {
  return (
    <Layout>
      <Welcome
        text='İçecekler'
        ctaText='İçeceğini seçmek için tıkla'
        centered
        smallSpace
      />

      <Container>
        <Text mb={3} fontSize='2rem' fontWeight='900'>
          Tüm İçecekler
        </Text>
        <Products id='products' products={drinks} />
      </Container>
    </Layout>
  )
}

export default Pizzalar

export async function getStaticProps() {
  try {
    const { data: products } = await axios.get('products')
    const { drinks } = separateProducts(products)

    return {
      props: {
        drinks
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

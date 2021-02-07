import React from 'react'
import { Container, Layout, Text, Box } from '../src/components/common'
import Products from '../src/components/products'
import Welcome from '../src/components/welome'
import { axios, separateProducts } from '../src/utils'

const Pizzalar = ({ pizzas, popularPizzas }) => {
  return (
    <Layout>
      <Welcome text='Pizzalar' ctaText='Pizzanı seçmek için tıkla' />

      <Container>
        <Text mb={3} fontSize='2rem' fontWeight='900'>
          En Popüler Pizzalar
        </Text>
        <Products products={popularPizzas} priceType={'1'} />
      </Container>

      <Box pt={5} mt={5} />

      <Container>
        <Text mb={3} fontSize='2rem' fontWeight='900'>
          Tüm Pizzalar
        </Text>
        <Products id='products' products={pizzas} priceType={'1'} />
      </Container>
    </Layout>
  )
}

export default Pizzalar

export async function getStaticProps() {
  try {
    const { data: products } = await axios.get('products')
    const { pizzas } = separateProducts(products)

    const {
      data: { products: popularProducts }
    } = await axios.get('popular-contents')
    const { pizzas: popularPizzas } = separateProducts(popularProducts)

    return {
      props: {
        pizzas,
        popularPizzas
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

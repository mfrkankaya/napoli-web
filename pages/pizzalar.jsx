import React from 'react'
import { Container, Layout, Text, Box } from '../src/components/common'
import Products from '../src/components/products'
import Welcome from '../src/components/welome'
import { axios, separateProducts } from '../src/utils'
import { useRouter } from 'next/router'

const Pizzalar = ({ pizzas, popularPizzas }) => {
  const router = useRouter()
  const { kisi: priceType = '1' } = router.query

  return (
    <Layout>
      <Welcome
        text='Pizzalar'
        ctaText='Pizzanı seçmek için tıkla'
        centered
        smallSpace
      />

      <Container>
        <Text mb={3} fontSize='2rem' fontWeight='900'>
          En Popüler Pizzalar <Box as='br' display={['unset', 'none']} />(
          {priceType} Kişilik)
        </Text>
        <Products products={popularPizzas} priceType={priceType} />
      </Container>

      <Box pt={5} mt={5} />

      <Container>
        <Text mb={3} fontSize='2rem' fontWeight='900'>
          Tüm Pizzalar <Box as='br' display={['unset', 'none']} />({priceType}{' '}
          Kişilik)
        </Text>
        <Products id='products' products={pizzas} priceType={priceType} />
      </Container>
    </Layout>
  )
}

export default Pizzalar

export async function getStaticProps(ctx) {
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
    return {
      props: {
        error: true
      }
    }
  }
}

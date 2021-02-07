import { useState } from 'react'
import { axios, separateProducts } from '../src/utils'
import { Container, Layout, Text, Box } from '../src/components/common'
import Propositions from '../src/components/propositions'
import { propositions } from '../src/data/propositions'
import { Flex } from 'rebass'
import Welcome from '../src/components/welome'
import Products from '../src/components/products'
import { CheckButton } from '../src/components/products/styled'

const Home = ({
  pizzas,
  menus,
  salads,
  drinks,
  fastfoods,
  popularPizzas,
  popularMenus,
  slideImages,
  error
}) => {
  const [selectedProductTab, setSelectedProductTab] = useState('pizzas')
  const [priceType, setPriceType] = useState('1')

  const tabHandler = tab => () => setSelectedProductTab(tab)
  const priceTypeHandler = pT => () => setPriceType(pT)

  const pizzasSelected = selectedProductTab === 'pizzas'

  const productsToRender = () => {
    if (selectedProductTab === 'pizzas') return pizzas
    if (selectedProductTab === 'menus') return menus
    if (selectedProductTab === 'salads') return salads
    if (selectedProductTab === 'drinks') return drinks
    if (selectedProductTab === 'fasts') return fastfoods
    return []
  }

  return (
    <Layout>
      <Welcome />

      <Container>
        <Text mb={3} fontSize='2rem' fontWeight='900'>En Popüler Pizzalar</Text>
        <Products products={popularPizzas} priceType={'1'} />
      </Container>
      <Box mb={5} />
      <Container>
        <Text mb={3} fontSize='2rem' fontWeight='900'>En Popüler Menüler</Text>
        <Products products={popularMenus} priceType={'1'} />
      </Container>
      <Box width='100%' py={5} my={5}>
        <Container>
          <Propositions propositions={propositions} />
        </Container>
      </Box>

      <Container>
        <Flex mb={2} overflowX='auto'>
          <CheckButton
            onClick={tabHandler('pizzas')}
            active={selectedProductTab === 'pizzas'}>
            Pizzalar
          </CheckButton>
          <CheckButton
            onClick={tabHandler('menus')}
            active={selectedProductTab === 'menus'}>
            Menüler
          </CheckButton>
          <CheckButton
            onClick={tabHandler('fasts')}
            active={selectedProductTab === 'fasts'}>
            Fast Food
          </CheckButton>
          <CheckButton
            onClick={tabHandler('salads')}
            active={selectedProductTab === 'salads'}>
            Salatalar
          </CheckButton>
          <CheckButton
            onClick={tabHandler('drinks')}
            active={selectedProductTab === 'drinks'}>
            İçecekler
          </CheckButton>
        </Flex>
        <Flex
          overflowX='auto'
          opacity={pizzasSelected ? 1 : 0}
          style={{ pointerEvents: pizzasSelected ? 'all' : 'none' }}>
          <CheckButton
            small
            onClick={priceTypeHandler('1')}
            active={priceType === '1'}>
            1 Kişilik
          </CheckButton>
          <CheckButton
            small
            onClick={priceTypeHandler('3')}
            active={priceType === '3'}>
            3 Kişilk
          </CheckButton>
          <CheckButton
            small
            onClick={priceTypeHandler('4')}
            active={priceType === '4'}>
            4 Kişilik
          </CheckButton>
          <CheckButton
            small
            onClick={priceTypeHandler('6')}
            active={priceType === '6'}>
            6 Kişilik
          </CheckButton>
        </Flex>
        <Box mb={4} />
        <Products
          id='products'
          products={productsToRender()}
          priceType={priceType}
        />
      </Container>
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  try {
    const { data: products } = await axios.get('products')
    const { pizzas, menus, salads, drinks, fastfoods } = separateProducts(
      products
    )

    // const {
    //   data: { items: slideImages }
    // } = await axios.get('slides')

    const {
      data: { products: popularProducts }
    } = await axios.get('popular-contents')
    const { pizzas: popularPizzas, menus: popularMenus } = separateProducts(
      popularProducts
    )

    return {
      props: {
        // products,
        pizzas,
        menus,
        salads,
        drinks,
        fastfoods,
        popularPizzas,
        popularMenus
        // slideImages
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

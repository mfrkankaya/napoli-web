import React, { useEffect } from 'react'
import { axios, separateProducts } from '../src/utils'
import { Container, Layout, Text, Box } from '../src/components/common'
import Propositions from '../src/components/propositions'
import { propositions } from '../src/data/propositions'
import { Image } from 'rebass'
import Welcome from '../src/components/welome'

const Home = ({
  products,
  popularPizzas,
  popularMenus,
  slideImages,
  error
}) => {
  return (
    <Layout>
      <Welcome />

      <Box width='100%' py={5} my={5}>
        <Container>
          <Propositions propositions={propositions} />
        </Container>
      </Box>
    </Layout>
  )
}

export default Home

// export async function getServerSideProps() {
//   try {
//     const {
//       data: { products }
//     } = await axios.get('products')
//     const { pizzas, menus, salads, drinks, fastfoods } = separateProducts(
//       products
//     )

//     const {
//       data: { products: popularProducts }
//     } = await axios.get('popular-contents')
//     const {
//       data: { items: slideImages }
//     } = await axios.get('slides')

//     const { pizzas: popularPizzas, menus: popularMenus } = separateProducts(
//       popularProducts
//     )

//     return {
//       props: {
//         products,
//         pizzas,
//         menus,
//         salads,
//         drinks,
//         fastfoods,
//         popularPizzas,
//         popularMenus,
//         slideImages
//       }
//     }
//   } catch (error) {
//     return {
//       props: {
//         error: true
//       }
//     }
//   }
// }

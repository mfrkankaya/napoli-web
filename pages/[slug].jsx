import React from 'react'
import { Layout } from '../src/components/common'
import { Product } from '../src/components/productPage'
import { axios } from '../src/utils'

const ProductPage = ({ product }) => {
  const {
    name,
    description,
    category: { name: categoryName },
    image: { url: imageURL },
    singlePrice,
    price1,
    price3,
    price4,
    price6
  } = product

  return (
    <Layout
      title={`${name} ${categoryName} - Çanakkale Napoli Pizza`}
      description={`En güzel ${name} ${categoryName}.`}>
      <Product {...product} />
    </Layout>
  )
}

export default ProductPage

export async function getStaticProps({ params }) {
  try {
    const { data: products } = await axios.get(`products?slug=${params.slug}`)

    return {
      props: {
        product: products[0]
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

export async function getStaticPaths() {
  try {
    const { data: products } = await axios.get('products')
    const paths = products.map(product => ({ params: { slug: product.slug } }))
    return {
      paths,
      fallback: false
    }
  } catch (error) {
    return {
      paths: [],
      fallback: false
    }
  }
}

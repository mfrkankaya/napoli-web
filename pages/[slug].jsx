import React from 'react'
import { Layout } from '../src/components/common'
import { Product } from '../src/components/productPage'
import { axios } from '../src/utils'

const getFullName = ({ name, categoryName }) => {
  if (categoryName !== 'Pizza') return name
  return `${name} ${categoryName}`
}

const ProductPage = ({ product }) => {
  const {
    name,
    category: { name: categoryName }
  } = product

  const fullName = getFullName({ name, categoryName })
  return (
    <Layout
      title={`${fullName} - Çanakkale Napoli Pizza`}
      description={`En güzel ${fullName}.`}>
      <Product {...product} fullName={fullName} />
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

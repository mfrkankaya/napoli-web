import {
  ProductWrapper,
  ProudctsGridView,
  ProductImage,
  ProductImagePlaceHolder
} from './styled'
import Link from 'next/link'
import { Text } from '../common'
import { Flex } from 'rebass'

const getPrice = ({
  price1,
  price3,
  price4,
  price6,
  singlePrice,
  priceType
}) => {
  if (singlePrice) return singlePrice
  if (priceType === '1') return price1
  if (priceType === '3') return price3
  if (priceType === '4') return price4
  return price6
}

export const Product = ({
  image,
  name,
  price1,
  price3,
  price4,
  price6,
  singlePrice,
  priceType
}) => {
  const price = getPrice({
    price1,
    price3,
    price4,
    price6,
    singlePrice,
    priceType
  })

  return (
    <Link href='/fadfad'>
      <ProductWrapper>
        <ProductImage src={image.url} alt={name} />
        <ProductImagePlaceHolder />
        <Flex justifyContent='space-between' mt={3}>
          <Text potta color='primary'>
            {name}
          </Text>

          <Text oswald fontSize='0.875rem' opacity='0.75'>
            {price} ₺
          </Text>
        </Flex>
      </ProductWrapper>
    </Link>
  )
}

const Products = ({ products = [], priceType, id }) => {
  return (
    <ProudctsGridView id={id}>
      {products.map(product => (
        <Product key={product.id} {...product} priceType={priceType} />
      ))}
    </ProudctsGridView>
  )
}

export default Products

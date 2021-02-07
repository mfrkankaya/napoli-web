import React from 'react'
import { Flex } from 'rebass'
import { Container, Text } from '../common'
import { ProductName, ProductImage } from './styled'

export const Product = ({
  name,
  category: { name: categoryName },
  image: { url: imageURL },
  description
}) => {
  return (
    <Container>
      <Flex mt={5} flexDirection='column' width='100%'>
        <ProductName as='h1'>
          {name} {categoryName}
        </ProductName>

        <Text mt={1} prio={2}>{description}</Text>

        <picture>
          <source
            srcSet={imageURL.replace(/.jpg|.png|.jpeg/, '.webp')}
            type='image/webp'
          />
          <source srcSet={imageURL} type='image/jpeg' />
          <ProductImage
            src={imageURL}
            alt={`${name} ${categoryName}`}
            loading='lazy'
          />
        </picture>
      </Flex>
    </Container>
  )
}

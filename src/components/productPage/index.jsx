import React from 'react'
import { Flex } from 'rebass'
import { Box, Container, Text } from '../common'
import { ProductName, ProductImage, ProductPrice, PriceWrapper } from './styled'

const renderPrice = ({ singlePrice, price1, price3, price4, price6 }) => {
  if (singlePrice)
    return (
      <PriceWrapper>
        <Text fontSize={['0.875rem', '1rem']} textAlign='center' noWhiteSpace>
          Fiyat
        </Text>
        <ProductPrice>{singlePrice} ₺</ProductPrice>
      </PriceWrapper>
    )

  return (
    <React.Fragment>
      {price1 && (
        <PriceWrapper>
          <Text fontSize={['0.875rem', '1rem']} textAlign='center' noWhiteSpace>
            1 Kişilik
          </Text>
          <ProductPrice sans>{price1} ₺</ProductPrice>
        </PriceWrapper>
      )}

      {price3 && (
        <PriceWrapper>
          <Text fontSize={['0.875rem', '1rem']} textAlign='center' noWhiteSpace>
            3 Kişilik
          </Text>
          <ProductPrice sans>{price3} ₺</ProductPrice>
        </PriceWrapper>
      )}

      {price4 && (
        <PriceWrapper>
          <Text fontSize={['0.875rem', '1rem']} textAlign='center' noWhiteSpace>
            4 Kişilik
          </Text>
          <ProductPrice sans>{price4} ₺</ProductPrice>
        </PriceWrapper>
      )}

      {price6 && (
        <PriceWrapper>
          <Text fontSize={['0.875rem', '1rem']} textAlign='center' noWhiteSpace>
            6 Kişilik
          </Text>
          <ProductPrice sans>{price6} ₺</ProductPrice>
        </PriceWrapper>
      )}
    </React.Fragment>
  )
}

export const Product = ({
  name,
  category: { name: categoryName },
  image: { url: imageURL },
  description,
  price1,
  price3,
  price4,
  price6,
  singlePrice,
  fullName
}) => {
  return (
    <Container>
      <Flex mt={5} flexDirection='column' width='100%'>
        <ProductName as='h1'>{fullName}</ProductName>

        <Text mt={1} prio={2}>
          {description}
        </Text>

        <Flex mt={4} flexDirection={['column', 'row']}>
          <Box width={['100%', '50%']}>
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
          </Box>

          <Box width={['100%', '50%']} ml={[0, 4]} mt={[4, 0]}>
            <Flex justifyContent={['center', 'flex-start']}>
              {renderPrice({ price1, price3, price4, price6, singlePrice })}
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Container>
  )
}

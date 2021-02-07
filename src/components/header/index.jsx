import React from 'react'
import { Box, Flex } from 'rebass'
import { CustomSvg } from '../../svgs'
import { Container, Text } from '../common'
import { HeaderWrapper, Logo } from './styled'
import { colors } from '../../theme'

const Header = () => {
  return (
    <HeaderWrapper>
      <Container height='4rem' display='flex' alignItems='center'>
        <Logo src='icons/pizza.png' alt='Çanakkale Pizza Logo' />
        <Box ml={3} />
        <Text as='h1' color='#111'>
          Napoli Pizza
        </Text>
      </Container>
      <Box width='100%' backgroundColor='#111'>
        <Container height='2rem' display='flex' alignItems='center'>
          <Flex alignItems='center'>
            <CustomSvg name='call' fill={colors.primary} />
            <Text
              ml={1}
              sans
              fontSize='1.25rem'
              color='primary'
              fontWeight='bold'>
              0286 217 7747
            </Text>
          </Flex>

          <Flex alignItems='center' ml={3}>
            <CustomSvg name='smartphone' fill={colors.primary} />
            <Text
              ml={1}
              sans
              fontSize='1.25rem'
              color='primary'
              fontWeight='bold'>
              0531 283 3131
            </Text>
          </Flex>
        </Container>
      </Box>
    </HeaderWrapper>
  )
}

export default Header

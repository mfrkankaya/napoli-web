import React from 'react'
import { Box, Flex } from 'rebass'
import { Container, Text } from '../common'
import { HeaderWrapper } from './styled'

const Header = () => {
  return (
    <HeaderWrapper>
      <Container height='4rem' display='flex' alignItems='center'>
        <Text as='h1' potta color='#111'>
          Napoli Pizza
        </Text>
      </Container>
      <Box width='100%' backgroundColor='#111'>
        <Container height='2rem' display='flex' alignItems='center'>
          <Text oswald fontSize='1.25rem' color='primary'>
            0212 553 58 11
          </Text>
        </Container>
      </Box>
    </HeaderWrapper>
  )
}

export default Header

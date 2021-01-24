import React from 'react'
import { Flex } from 'rebass'
import { Container, Text } from '../common'
import {
  WelcomeWrapper,
  Mask,
  WelcomeTitle,
  WelcomeSubTitle,
  CTAButton
} from './styled'

const Welcome = () => {
  const moveToPizzas = () => {
    window.scrollTo({ top: 500, behavior: 'smooth' })
  }

  return (
    <WelcomeWrapper>
      <Mask>
        <Container height='100%'>
          <Flex flexDirection='column' justifyContent='center' height='100%'>
            <WelcomeTitle>Napoli Pizza'ya Hoşgeldiniz.</WelcomeTitle>
            <CTAButton onClick={moveToPizzas} mt={5}>
              Hemen Pizzanızı Seçin
            </CTAButton>
          </Flex>
        </Container>
      </Mask>
    </WelcomeWrapper>
  )
}

export default Welcome

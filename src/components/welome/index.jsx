import React from 'react'
import { Flex } from 'rebass'
import { Container } from '../common'
import {
  WelcomeWrapper,
  Mask,
  WelcomeTitle,
  CTAButton
} from './styled'

const Welcome = () => {
  const moveToPizzas = () => {
    window.scrollTo({ top: document.getElementById('products').getBoundingClientRect().top - 250, behavior: 'smooth' })
  }

  return (
    <WelcomeWrapper>
      <Mask>
        <Container height='100%'>
          <Flex flexDirection='column' justifyContent='center' height='100%'>
            <WelcomeTitle>Napoli Pizza'ya Hoşgeldin.</WelcomeTitle>
            <CTAButton onClick={moveToPizzas} mt={5}>
              Pizzanı seçmek için tıkla
            </CTAButton>
          </Flex>
        </Container>
      </Mask>
    </WelcomeWrapper>
  )
}

export default Welcome

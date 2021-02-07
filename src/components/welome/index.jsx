import React from 'react'
import { Flex } from 'rebass'
import { Container } from '../common'
import { WelcomeWrapper, Mask, WelcomeTitle, CTAButton } from './styled'

const Welcome = ({ text, ctaText }) => {
  const moveToProducts = () => {
    window.scrollTo({
      top:
        document.getElementById('products').getBoundingClientRect().top - 250,
      behavior: 'smooth'
    })
  }

  return (
    <WelcomeWrapper>
      <Mask>
        <Container height='100%'>
          <Flex flexDirection='column' justifyContent='center' height='100%'>
            <WelcomeTitle>{text}</WelcomeTitle>
            <CTAButton onClick={moveToProducts} mt={5}>
              {ctaText}
            </CTAButton>
          </Flex>
        </Container>
      </Mask>
    </WelcomeWrapper>
  )
}

export default Welcome

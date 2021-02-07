import React from 'react'
import { Flex } from 'rebass'
import { Container } from '../common'
import { WelcomeWrapper, Mask, WelcomeTitle, CTAButton } from './styled'

const Welcome = ({ text, ctaText, centered, smallSpace }) => {
  const moveToProducts = () => {
    window.scrollTo({
      top:
        document.getElementById('products').getBoundingClientRect().top -
        250 +
        window.scrollY,
      behavior: 'smooth'
    })
  }

  return (
    <WelcomeWrapper>
      <Mask>
        <Container height='100%'>
          <Flex
            flexDirection='column'
            justifyContent='center'
            height='100%'
            alignItems={centered ? 'center' : 'flex-start'}>
            <WelcomeTitle textAlign={centered ? 'center' : 'left'}>
              {text}
            </WelcomeTitle>
            <CTAButton onClick={moveToProducts} smallSpace={smallSpace}>
              {ctaText}
            </CTAButton>
          </Flex>
        </Container>
      </Mask>
    </WelcomeWrapper>
  )
}

export default Welcome

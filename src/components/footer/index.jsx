import React from 'react'
import { Flex } from 'rebass'
import { Container, Text } from '../common'
import { FooterBrand, FooterWrapper, SocialIcon } from './styled'

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Flex justifyContent='space-between' alignItems='center' mb={3}>
          <FooterBrand color='primary'>Napoli Pizza</FooterBrand>
          <Flex alignItems='center'>
            <a href='https://www.facebook.com/17napolipizza/' target='blank'>
              <SocialIcon name='facebook' size={36} />
            </a>
            <a
              href='https://instagram.com/canakkale17napolipizza?igshid=dqw0k1ez71q3'
              target='blank'
              style={{ marginLeft: '1rem' }}>
              <SocialIcon name='instagram' size={36} />
            </a>
          </Flex>
        </Flex>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.6701562629855!2d26.39870921588475!3d40.14963047976345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b1a925c84e9501%3A0x77ede3b9711b6dec!2sNapoli%20Pizza!5e0!3m2!1str!2str!4v1611611886585!5m2!1str!2str'
          width='100%'
          height='450'
          style={{
            border: '0.25rem solid #454545',
            borderRadius: '1rem',
            opacity: 0.75
          }}
          frameborder='0'
          allowfullscreen=''
          aria-hidden='false'
          tabindex='0'
        />

        <Text
          textAlign='center'
          opacity='0.5'
          width='100%'
          fontSize='0.75rem'
          mt={3}>
          Napoli Pizza © 2021
        </Text>
      </Container>
    </FooterWrapper>
  )
}

export default Footer

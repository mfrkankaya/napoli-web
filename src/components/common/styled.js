import styled, { css } from 'styled-components'
import { Box as RBox, Text as RText } from 'rebass'
import { layout, color, typography, space } from 'styled-system'

export const Box = styled(RBox)`
  ${layout}
  ${color}
  ${space}
`
export const Container = styled(Box).attrs({ margin: '0 auto' })`
  max-width: 80rem;
  padding: 0 2rem;

  @media (max-width: 576px) {
    padding: 0 1rem;
  }
`

export const Text = styled(RText)`
  ${({ theme: { colors }, prio = 0 }) => css`
    color: ${colors.text[prio]};
  `}

  ${({ sans }) => sans && 'font-family: sans-serif;'}
  
  ${({ merriweather }) => merriweather && 'font-family: "Merriweather", serif;'}
  
  ${({ noWhiteSpace }) => noWhiteSpace && 'white-space: nowrap;'}

  ${color}${typography}
`

export const WhatsappWrapper = styled.a`
  display: none;
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  z-index: 100;

  @media (max-width: 576px) {
    display: unset;
  }
`

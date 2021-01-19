import styled, { css } from 'styled-components'
import {
  Box,
  Flex,
  Text as RText,
  Button as RButton,
  Card,
  Image
} from 'rebass'
import { switchProp } from 'styled-tools'

export const Container = styled(Box).attrs({ margin: '0 auto' })`
  max-width: 80rem;
  padding: 0 1.5rem;
`

export const Text = styled(RText)`
  ${({ theme: { colors }, prio = 0 }) => css`
    color: ${colors.text[prio]};
  `}

  ${({ potta }) =>
    potta &&
    css`
      font-family: 'Potta One', cursive;
    `}

  ${({ oswald }) =>
    oswald &&
    css`
      font-family: 'Oswald', sans-serif;
    `}
  
  ${({ merriweather }) =>
    merriweather &&
    css`
      font-family: 'Merriweather', serif;
    `}
`

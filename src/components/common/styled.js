import styled, { css } from 'styled-components'
import {
  Box,
  Flex,
  Text as RText,
  Button as RButton,
  Card,
  Image
} from 'rebass'

export const Container = styled(Box).attrs({ margin: '0 auto' })`
  max-width: 80rem;
  padding: 0 1.5rem;
`

export const Text = styled(RText)`
  ${({ theme: { colors }, prio = 0 }) => css`
    color: ${colors.text[prio]};
  `}
`

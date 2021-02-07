import { Box, Flex, Image } from 'rebass'
import styled, { css } from 'styled-components'
import { Text } from '../common'

export const ProductName = styled(Text)`
  ${({ theme: { colors } }) => css`
    color: ${colors.primary};
    font-weight: 900;
  `}
`

export const ProductImage = styled.img`
  margin-top: 2rem;
  max-width: 512px;
  border-radius: 1rem;
  opacity: 0.8;
  ${({ theme: { colors } }) => css`
    border: 0.25rem solid ${colors.primary};
  `}
`

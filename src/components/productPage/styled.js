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
  width: 100%;
  border-radius: 1rem;
  opacity: 0.8;
  ${({ theme: { colors } }) => css`
    border: 0.25rem solid ${colors.primary};
  `}
`

export const PriceWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  margin: 0 1rem !important;
`

export const ProductPrice = styled(Text)`
  ${({ theme: { colors } }) => css`
    color: ${colors.primary};
    font-weight: 900;
    font-size: 2rem;
    margin-top: 0.5rem !important;

    @media (max-width: 576px) {
      font-size: 1.5rem;
    }
  `}
`

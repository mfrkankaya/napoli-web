import { Box, Image } from 'rebass'
import styled, { css } from 'styled-components'

export const HeaderWrapper = styled(Box).attrs({ as: 'header' })`
  width: 100vw;
  height: 6rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  ${({ theme: { colors } }) => css`
    background-color: ${colors.primary};
  `}
`

export const Logo = styled(Image)`
  width: 3rem;
`
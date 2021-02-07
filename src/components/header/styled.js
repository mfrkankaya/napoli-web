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

export const NavlinkStyled = styled.a`
  color: #222;
  text-decoration: none;
  cursor: pointer;
  margin: 0 0.5rem;
`

export const DropdownList = styled(Box)`
  pointer-events: none;
  position: absolute;
  top: 100%;
  opacity: 0;
  transform: translateY(1rem);
  width: 10rem;
  background: #111;
  border-radius: 0.25rem;
  z-index: 20;
  transition: 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;

  ${({ theme: { colors } }) => css`
    border: 1px solid ${colors.primary};

    ${NavlinkStyled} {
      font-weight: 700;
      font-size: 1rem;
      color: ${colors.primary} !important;
      padding: 1rem;
      margin: 0;

      &:hover {
        background: #222;
      }
    }
  `}
`

export const DropdownWrapper = styled(Box)`
  position: relative;

  &:hover ${DropdownList} {
    pointer-events: all;
    opacity: 1;
    transform: translateY(0);
  }
`

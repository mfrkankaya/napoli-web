import { Box, Image, Flex, Text } from 'rebass'
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

  @media (max-width: 325px) {
    width: 2rem;
  }
`

export const NavlinkStyled = styled.a`
  color: #222;
  text-decoration: none;
  cursor: pointer;
  margin: 0 0.5rem;
`

export const BrandSpacer = styled(Box)`
  margin-left: 1rem !important;

  @media (max-width: 325px) {
    margin-left: 0.5rem !important;
  }
`

export const BrandText = styled(Text)`
  color: #111;

  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
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

export const DesktopNavs = styled(Flex)`
  @media (max-width: 768px) {
    display: none !important;
  }
`

export const MenuButtonStick = styled.span`
  display: block;
  width: 100%;
  height: 0.25rem;
  background: #111;
  border-radius: 1rem;
  margin: 0.2rem 0;
  transition: 0.4s ease-in-out;
`

export const MenuButton = styled(Flex)`
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  right: 1rem;
  top: 1rem;
  width: 2rem;
  height: 2rem;

  ${({ active }) =>
    active &&
    css`
      ${MenuButtonStick}  {
        margin: 0;

        &:nth-of-type(1) {
          transform: rotate(45deg);
          margin-bottom: -0.25rem;
        }

        &:nth-of-type(2) {
          transform: translateX(10rem);
          opacity: 0;
        }

        &:nth-of-type(3) {
          transform: rotate(-45deg);
          margin-top: -0.25rem;
        }
      }
    `}
`

export const MobileNavs = styled(Flex)`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.primary};
    flex-direction: column;
    width: 100vw;
    height: calc(100vh - 6rem);
    left: 0;
    bottom: 0;
    position: fixed;
    transform: translateX(100%);
    transition: 0.4s ease-in-out;
    z-index: 500;
    justify-content: center;
    align-items: center;
  `}

  ${({ active }) =>
    active &&
    css`
      transform: translateX(0);
    `}

  ${NavlinkStyled} {
    font-size: 1.5rem;
    padding: 0.5rem;
  }

  ${DropdownList} {
    left: 0;
    transform: translateX(-10%) !important;

    ${NavlinkStyled} {
      font-size: 1rem;
      padding: 1rem;
      text-align: center;
    }
  }
`

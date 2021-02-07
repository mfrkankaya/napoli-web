import React, { useState, Fragment } from 'react'
import { Box, Flex } from 'rebass'
import { CustomSvg } from '../../svgs'
import { Container, Text } from '../common'
import {
  DropdownList,
  HeaderWrapper,
  Logo,
  NavlinkStyled,
  DropdownWrapper,
  DesktopNavs,
  MenuButton,
  MenuButtonStick,
  MobileNavs
} from './styled'
import { colors } from '../../theme'
import Link from 'next/link'
import { navlinks } from '../../data'

const Navlink = ({ label, isDropdown, dropdownList, closeMenu, ...props }) => {
  if (!isDropdown) {
    return (
      <Link {...props}>
        <NavlinkStyled onClick={closeMenu}>{label}</NavlinkStyled>
      </Link>
    )
  }

  return (
    <DropdownWrapper>
      <NavlinkStyled>{label}</NavlinkStyled>
      <DropdownList>
        {dropdownList.map(({ label, href }) => (
          <Link key={`dropdown${href}`} href={href}>
            <NavlinkStyled onClick={closeMenu}>{label}</NavlinkStyled>
          </Link>
        ))}
      </DropdownList>
    </DropdownWrapper>
  )
}

const Header = () => {
  const [menuActive, setMenuActive] = useState(false)
  const toggleMenu = () => setMenuActive(!menuActive)
  const closeMenu = () => setMenuActive(false)

  const mapLinks = navlinks.map(navlink => (
    <Navlink key={navlink.href} {...navlink} closeMenu={closeMenu} />
  ))

  return (
    <Fragment>
      <HeaderWrapper>
        <Container height='4rem' display='flex' alignItems='center'>
          <Logo src='icons/pizza.png' alt='Çanakkale Pizza Logo' />
          <Box ml={3} />
          <Link href='/'>
            <a>
              <Text as='h1' color='#111'>
                Napoli Pizza
              </Text>
            </a>
          </Link>

          <DesktopNavs ml={4}>{mapLinks}</DesktopNavs>

          <MenuButton active={menuActive} onClick={toggleMenu}>
            <MenuButtonStick />
            <MenuButtonStick />
            <MenuButtonStick />
          </MenuButton>
        </Container>
        <Box width='100%' backgroundColor='#111'>
          <Container height='2rem' display='flex' alignItems='center'>
            <Flex alignItems='center'>
              <CustomSvg name='call' fill={colors.primary} />
              <Text
                ml={1}
                sans
                fontSize='1.25rem'
                color='primary'
                fontWeight='bold'>
                0286 217 7747
              </Text>
            </Flex>
          </Container>
        </Box>
      </HeaderWrapper>
      <MobileNavs active={menuActive}>{mapLinks}</MobileNavs>
    </Fragment>
  )
}

export default Header

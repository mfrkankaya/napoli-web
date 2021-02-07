import React from 'react'
import { Box, Flex } from 'rebass'
import { CustomSvg } from '../../svgs'
import { Container, Text } from '../common'
import {
  DropdownList,
  HeaderWrapper,
  Logo,
  NavlinkStyled,
  DropdownWrapper
} from './styled'
import { colors } from '../../theme'
import Link from 'next/link'
import { navlinks } from '../../data'

const Navlink = ({ label, isDropdown, dropdownList, ...props }) => {
  if (!isDropdown) {
    return (
      <Link {...props}>
        <NavlinkStyled>{label}</NavlinkStyled>
      </Link>
    )
  }

  return (
    <DropdownWrapper>
      <NavlinkStyled>{label}</NavlinkStyled>
      <DropdownList>
        {dropdownList.map(({ label, href }) => (
          <Link key={`dropdown${href}`} href={href}>
            <NavlinkStyled>{label}</NavlinkStyled>
          </Link>
        ))}
      </DropdownList>
    </DropdownWrapper>
  )
}

const Header = () => {
  return (
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

        <Flex ml={4}>
          {navlinks.map(navlink => (
            <Navlink key={navlink.href} {...navlink} />
          ))}
        </Flex>
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
  )
}

export default Header

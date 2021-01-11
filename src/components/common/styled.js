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

export const Text = styled(RText)`
  ${({ theme: { colors }, prio = 0 }) => css`
    color: ${colors.text[prio]};
  `}
`

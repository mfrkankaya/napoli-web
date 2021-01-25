import styled, { css } from 'styled-components'
import { color } from 'styled-system'
import { CustomSvg } from '../../svgs'

export const FooterWrapper = styled.footer`
  width: 100vw;
  margin-top: 4rem;
  padding: 4rem 0;
  background-color: #111111;
`

export const FooterBrand = styled.div`
  font-size: 2rem;
  font-weight: bold;
  ${color}
`

export const SocialIcon = styled(CustomSvg)`
  fill: whitesmoke;
  transition: 0.4s ease-in-out;
  cursor: pointer;
  opacity: 0.85;

  &:hover {
    ${({
      theme: {
        colors: { primary }
      }
    }) => css`
      fill: ${primary};
      opacity: 1;
    `}
  }
`

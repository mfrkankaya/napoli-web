import { Button } from 'rebass'
import styled, { css } from 'styled-components'
import { Box, Text } from '../common'

export const WelcomeWrapper = styled(Box)`
  background-image: url('/img/pizzabg.webp');
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  min-height: 80vh;
  position: relative;
`

export const Mask = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #0009, #000);
  z-index: 5;
`

export const WelcomeTitle = styled(Text)`
  font-size: 8rem;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

export const WelcomeSubTitle = styled(Text)`
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const CTAButton = styled.button`
  ${({
    theme: {
      colors: { primary }
    }
  }) => css`
    background: transparent;
    border-radius: 0.5rem;
    border: 1px solid ${primary};
    color: ${primary};
    width: fit-content;
    cursor: pointer;
    padding: 1rem 3rem;
    font-size: 1.5rem;
    font-family: 'Merriweather', serif;
    font-weight: bold;
    margin-top: 3rem;
    transition: 0.2s ease-in-out;
  
    @media (max-width: 576px){
      width: 100%;
      font-size: 1.15rem;
    }

    &:hover{
      background: ${primary};
      color: #111;
    }
  `}
`

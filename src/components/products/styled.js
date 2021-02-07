import styled, { css } from 'styled-components'
import { Box, Text } from '../common'

export const ProductImagePlaceHolder = styled(Box)`
  width: 100%;
  background: #111;
  box-shadow: 0 0.5rem 1rem -0.25rem #0005;
  z-index: 0;
  padding-top: 100%;
  border-radius: 0.5rem;
`
export const ProductImage = styled.img`
  position: absolute;
  width: calc(100% - 2rem);
  top: 1rem;
  left: 1rem;
  border-radius: 0.5rem;
  opacity: 0.85;
  z-index: 1;
`

export const PricesWrapper = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & > div:nth-of-type(2),
  & > div:nth-of-type(4) {
    display: flex;
    justify-content: flex-end;
  }
`

export const ProductName = styled(Text)`
  ${({
    theme: {
      colors: { primary }
    }
  }) => css`
    color: ${primary} !important;
    font-weight: 900;
  `}
`

export const ProductPrice = styled(Text)`
  font-weight: bold;
  font-size: 0.875rem;
  opacity: 0.75rem;
`

export const ProductWrapper = styled.a`
  ${({
    theme: {
      colors: { primary }
    }
  }) => css`
    display: flex;
    position: relative;
    flex-direction: column;
    text-decoration: none;
    border-radius: 0.5rem;
    padding: 1rem;
    background-color: #212121;
    border: 1px solid #565656;
    cursor: pointer;

    &:hover {
      border-color: ${primary};
      ${ProductImage} {
        opacity: 1;
      }
    }
  `}
`

export const CheckButton = styled.button`
  ${({
    theme: {
      colors: { primary }
    },
    active,
    small
  }) => css`
    padding: 0.5rem 1rem;
    background: transparent;
    white-space: nowrap;
    font-size: 1.25rem;
    color: ${primary};
    border: 1px solid ${primary};
    margin-right: 1rem;
    border-radius: 0.25rem;
    cursor: pointer;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    ${active &&
    css`
      background: ${primary};
      color: #212121;
    `}

    ${small &&
    css`
      font-size: 0.875rem !important;
    `}
  `}
`

export const ProudctsGridView = styled(Box)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);

    ${ProductName}{
      font-size: 0.875rem;
    }
  }

  @media (max-width: 375px) {
    gap: 0.5rem;

    ${ProductWrapper} {
      padding: 0.5rem;
    }

    ${ProductImage} {
      width: calc(100% - 1rem);
      top: 0.5rem;
      left: 0.5rem;
    }
  }
`

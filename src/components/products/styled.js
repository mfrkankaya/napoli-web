import { Button, Image } from 'rebass'
import styled, { css } from 'styled-components'
import { Box } from '../common'

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
    grid-template-columns: repeat(1, 1fr);
  }
`

export const ProductImagePlaceHolder = styled(Box)`
  position: absolute;
  width: calc(100% - 2rem);
  background: #111;
  z-index: 0;
  top: 1rem;
  left: 1rem;
  padding-top: calc(100% - 2rem);
  border-radius: 0.5rem;
`
export const ProductImage = styled(Image)`
  width: 100%;
  border-radius: 0.5rem;
  opacity: 0.75;
  box-shadow: 0 0.5rem 1rem -0.25rem #0005;
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

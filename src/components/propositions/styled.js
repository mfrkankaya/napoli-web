import styled, { css } from 'styled-components'
import { Box } from '../common'

export const PropositionsGridView = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const PropositionWrapper = styled(Box)`
  ${({
    theme: {
      colors: { primary }
    }
  }) => css`
    border-radius: 0.5rem;
    background-color: ${primary};
    padding: 2rem;
  `}
`

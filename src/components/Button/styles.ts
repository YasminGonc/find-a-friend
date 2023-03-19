import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    all: unset;
    background-color: ${theme.colors.yellow};
    border-radius: ${theme.borderRadius};
    padding: ${theme.spacings.medium};
    cursor: pointer;
    color: ${theme.colors.blue};

    svg {
      width: 20px;
      height: 20px;
    }

    &:focus {
      border: 2px solid ${theme.colors.blue};
    }
  `}
`

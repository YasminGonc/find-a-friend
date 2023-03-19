import styled, { css } from 'styled-components'

export const Wrapper = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius};
    border: none;
    padding: ${theme.spacings.medium};

    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.extraBold};
    text-align: center;

    &::placeholder {
      color: ${theme.colors.rose};
      font-weight: ${theme.font.light};
    }
  `}
`

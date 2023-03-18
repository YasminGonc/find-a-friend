import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before, &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      background-color: ${theme.colors.bg};
    }

    button {
      cursor: pointer;
    }

    body,
    input,
    button,
    textarea,
    select {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.normal};
    }
  `}
`

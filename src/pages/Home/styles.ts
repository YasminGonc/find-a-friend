import styled, { css } from 'styled-components'
import * as HeadingStyles from '@/components/Heading/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    padding: 12.4rem 11.3rem;
    background-color: ${theme.colors.secondary};

    display: grid;
    grid-template-columns: 1fr 1fr;
  `}
`
export const TextContent = styled.div`
  ${({ theme }) => css`
    width: 487px;

    ${HeadingStyles.Wrapper}:nth-child(2) {
      margin: ${theme.spacings.huge} 0 10rem 0;
    }
  `}
`

export const ImageContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    form {
      display: flex;
      gap: ${theme.spacings.small};
    }
  `}
`

import styled, { css } from 'styled-components'
import { HeadingProps } from '.'

export const Wrapper = styled.h2<Pick<HeadingProps, 'size' | 'weight'>>`
  ${({ theme, size, weight }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes[size!]};
    font-weight: ${theme.font[weight!]};
  `}
`

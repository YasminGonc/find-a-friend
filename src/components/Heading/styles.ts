import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

const wrapperModifier = {
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.extraBold};
    line-height: 90%;
  `,
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.semiBold};
  `,
}

export const Wrapper = styled.h2<Pick<HeadingProps, 'size'>>`
  ${({ theme, size }) => css`
    color: ${theme.colors.white};

    ${!!size && wrapperModifier[size](theme)}
  `}
`

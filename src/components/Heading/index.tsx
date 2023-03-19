import * as S from './styles'

export type HeadingProps = {
  children: string
  size?: 'normal' | 'huge'
}

export function Heading({ children, size = 'normal' }: HeadingProps) {
  return <S.Wrapper size={size}>{children}</S.Wrapper>
}

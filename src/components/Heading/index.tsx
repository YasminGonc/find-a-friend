import * as S from './styles'

export type HeadingProps = {
  children: string
  size?: 'huge' | 'xlarge'
  weight?: 'semiBold' | 'extraBold'
}

export function Heading({
  children,
  size = 'xlarge',
  weight = 'semiBold',
}: HeadingProps) {
  return (
    <S.Wrapper size={size} weight={weight}>
      {children}
    </S.Wrapper>
  )
}

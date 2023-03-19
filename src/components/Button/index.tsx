import { ReactNode } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children?: string
  icon?: ReactNode
}

export function Button({ children, icon }: ButtonProps) {
  return (
    <S.Wrapper>
      {icon}
      {children}
    </S.Wrapper>
  )
}

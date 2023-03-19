import { SelectHTMLAttributes, useState } from 'react'
import * as S from './styles'
import { CaretDown, CaretUp } from 'phosphor-react'

export type SelectProps = {
  label: string
  ariaLabel: string
  sideLabel?: boolean
  inputsize?: 'large' | 'medium'
  options: string[]
} & SelectHTMLAttributes<HTMLSelectElement>

export function Select({
  label,
  ariaLabel,
  sideLabel = false,
  inputsize = 'medium',
  options,
}: SelectProps) {
  const [open, setOpen] = useState(false)

  function handleOpenChange() {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  function handleOnValueChange(value: string) {
    console.log(value)
  }

  return (
    <S.Wrapper sideLabel={sideLabel}>
      <S.FilterLabel>{label}</S.FilterLabel>

      <S.SelectRoot
        onOpenChange={handleOpenChange}
        open={open}
        onValueChange={handleOnValueChange}
      >
        <S.SelectTrigger aria-label={ariaLabel} inputsize={inputsize}>
          <S.SelectValue placeholder="Selecione" />
          <S.SelectIcon>{open ? <CaretUp /> : <CaretDown />}</S.SelectIcon>
        </S.SelectTrigger>

        <S.SelectPortal>
          <S.SelectContent>
            <S.SelectViewport>
              {options.map((option) => (
                <S.SelectItem key={option} value={option}>
                  <S.SelectText>{option}</S.SelectText>
                </S.SelectItem>
              ))}
            </S.SelectViewport>
          </S.SelectContent>
        </S.SelectPortal>
      </S.SelectRoot>
    </S.Wrapper>
  )
}

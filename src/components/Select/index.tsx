import { SelectHTMLAttributes, useState } from 'react'
import * as S from './styles'
import { CaretDown, CaretUp } from 'phosphor-react'

export type SelectProps = {
  label: string
  ariaLabel: string
  sideLabel?: boolean
  inputsize?: 'large' | 'medium'
  options: string[]
  onValueChange?: (value: string) => void
} & SelectHTMLAttributes<HTMLSelectElement>

export function Select({
  label,
  ariaLabel,
  sideLabel = false,
  inputsize = 'medium',
  options,
  onValueChange,
}: SelectProps) {
  const [open, setOpen] = useState(false)

  function handleOpenChange() {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  return (
    <S.Wrapper sideLabel={sideLabel}>
      <S.FilterLabel>{label}</S.FilterLabel>

      <S.SelectRoot
        onOpenChange={handleOpenChange}
        open={open}
        onValueChange={onValueChange}
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

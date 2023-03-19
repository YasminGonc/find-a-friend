import { SelectHTMLAttributes, useState } from 'react'
import * as S from './styles'
import { CaretDown, CaretUp } from 'phosphor-react'

export type SelectProps = {
  label: string
  name: string
  sideLabel: boolean
  inputSize?: 'large' | 'medium'
  options: {
    value: string | number
    label: string
  }[]
} & SelectHTMLAttributes<HTMLSelectElement>

export function Select({
  label,
  name,
  options,
  sideLabel = false,
  inputSize = 'medium',
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenSelect() {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  return (
    <S.Wrapper>
      <S.FilterLabel htmlFor={name}>{label}</S.FilterLabel>

      <S.FilterWrapper onClick={handleOpenSelect}>
        <S.FilterInput name={name} id={name} inputSize={inputSize}>
          <S.FilterInputOption value="" disabled selected>
            Selecione
          </S.FilterInputOption>

          {options.map((option) => {
            return (
              <S.FilterInputOption key={option.value} value={option.value}>
                {option.label}
              </S.FilterInputOption>
            )
          })}
        </S.FilterInput>

        {isOpen ? <CaretUp weight="bold" /> : <CaretDown weight="bold" />}
      </S.FilterWrapper>
    </S.Wrapper>
  )
}

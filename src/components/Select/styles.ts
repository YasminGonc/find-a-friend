import styled, { css } from 'styled-components'
import { SelectProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const FilterLabel = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.lineHeight};
  `}
`

export const FilterWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    & > svg {
      color: ${theme.colors.white};
      position: absolute;
      right: 18px;
      top: 50%;
      transform: translateY(-50%);
    }
  `}
`

export const FilterInput = styled.select<Pick<SelectProps, 'inputSize'>>`
  ${({ theme, inputSize }) => css`
    width: 100%;
    height: 60px;

    color: ${theme.colors.white};
    font-size: ${theme.font.sizes[inputSize!]};
    font-weight: ${theme.font.extraBold};
    line-height: ${theme.font.lineHeight};

    background-color: ${theme.colors.select};
    border: none;
    border-radius: ${theme.borderRadius};
    outline: none;
    padding: ${theme.spacings.medium};
    appearance: none;
  `}
`

export const FilterInputOption = styled.option`
  font-family: 'Nunito';
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: #ffffff;
  padding: 5px 7px;
`

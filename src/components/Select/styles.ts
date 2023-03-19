import styled, { css, DefaultTheme } from 'styled-components'
import * as Select from '@radix-ui/react-select'
import { SelectProps } from '.'

const wrapperMofifier = {
  sideLabel: (theme: DefaultTheme) => css`
    flex-direction: row;
    align-items: center;
    gap: ${theme.spacings.medium};

    ${SelectTrigger} {
      svg {
        margin-left: 1rem;
      }
    }
  `,
}

export const Wrapper = styled.div<Pick<SelectProps, 'sideLabel'>>`
  ${({ theme, sideLabel }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};

    ${sideLabel && wrapperMofifier.sideLabel(theme)}
  `}
`

export const FilterLabel = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 1.4rem;
    line-height: ${theme.font.lineHeight};
  `}
`

export const SelectRoot = styled(Select.Root)``

export const SelectTrigger = styled(Select.Trigger)<
  Pick<SelectProps, 'inputsize'>
>`
  ${({ theme, inputsize }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${theme.colors.white};
    font-size: ${theme.font.sizes[inputsize!]};
    font-weight: ${theme.font.extraBold};
    line-height: ${theme.font.lineHeight};

    background-color: ${theme.colors.select};
    border: none;
    border-radius: ${theme.borderRadius};
    padding: ${theme.spacings.medium};
    outline: none;

    &:focus {
      border: 1px solid ${theme.colors.white};
    }
  `}
`

export const SelectValue = styled(Select.Value)``

export const SelectIcon = styled(Select.Icon)``

export const SelectPortal = styled(Select.Portal)`
  width: 30rem;
`

export const SelectContent = styled(Select.Content)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.select};
    border-radius: ${theme.borderRadius};
  `}
`

export const SelectViewport = styled(Select.Viewport)``

export const SelectItem = styled(Select.Item)`
  ${({ theme }) => css`
    height: 2.5rem;
    display: flex;
    align-items: center;
    border-radius: ${theme.borderRadius};
    padding: ${theme.spacings.medium};
    outline: none;
    color: ${theme.colors.white};

    &[data-highlighted] {
      color: ${theme.colors.white};
      background-color: ${theme.colors.lightBrown};
    }

    &[data-state='checked'] {
      color: ${theme.colors.white};
    }
  `}
`

export const SelectText = styled(Select.ItemText)``

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

import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helper'

import { TextField } from '.'

describe('<TextField />', () => {
  it('should render a disabled text field', () => {
    renderWithTheme(<TextField />)

    expect(screen.getByPlaceholderText('Cidade')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Cidade')).toBeDisabled()
  })
})

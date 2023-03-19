// renderizar label ao lado
// renderizar select large

import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helper'

import { Select } from '.'
import options from './mock'

describe('<Select />', () => {
  it('should render select', () => {
    renderWithTheme(
      <Select
        label="Idade"
        ariaLabel="Selecione uma idade"
        options={options}
      />,
    )

    expect(screen.getByText('Idade')).toBeInTheDocument()
  })
})

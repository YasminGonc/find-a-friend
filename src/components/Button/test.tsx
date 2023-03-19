import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helper'
import { MagnifyingGlass } from 'phosphor-react'

import { Button } from '.'

describe('<Button />', () => {
  it('should render button with an icon', () => {
    renderWithTheme(<Button icon={<MagnifyingGlass data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})

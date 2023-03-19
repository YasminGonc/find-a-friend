import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test/helper'

import { Heading } from '.'

describe('<Heading />', () => {
  it('shoul render large and semi bold heading by default', () => {
    renderWithTheme(<Heading>Find a friend</Heading>)

    expect(
      screen.getByRole('heading', { name: /find a friend/i }),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /find a friend/i })).toHaveStyle(
      {
        'font-size': '2.4rem',
        'font-weight': '600',
      },
    )
  })

  it('shoul render huge and extra bold heading', () => {
    renderWithTheme(<Heading size="huge">Find a friend</Heading>)

    expect(
      screen.getByRole('heading', { name: /find a friend/i }),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /find a friend/i })).toHaveStyle(
      {
        'font-size': '7.2rem',
        'font-weight': '800',
      },
    )
  })
})

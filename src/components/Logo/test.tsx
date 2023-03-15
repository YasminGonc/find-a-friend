import { render, screen } from '@testing-library/react'

import { Logo } from '.'

describe('<Logo />', () => {
  it('shoul render heading', () => {
    render(<Logo />)

    expect(screen.getByRole('heading', { name: /logo/i })).toBeInTheDocument()
  })
})

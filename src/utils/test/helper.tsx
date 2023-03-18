import { render, RenderResult } from '@testing-library/react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../styles/themes/defaultTheme'

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>)

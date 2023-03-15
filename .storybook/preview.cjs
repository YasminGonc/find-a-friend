import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../src/styles/global'
import { defaultTheme } from '../src/styles/themes/defaultTheme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'friend-light',
    values: [
      {
        name: 'friend-red',
        value: '#E44449'
      },
      {
        name: 'friend-light',
        value: '#FDECED'
      }
    ]
  }
}

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: defaultTheme
    },
    defaultTheme: 'default',
    Provider: ThemeProvider,
    GlobalStyles,
  })
];
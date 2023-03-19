import { StoryObj, Meta } from '@storybook/react'
import { TextField } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {},
  parameters: {
    backgrounds: {
      default: 'friend-red',
    },
  },
} as Meta

export const Default: StoryObj = {}

import { StoryObj, Meta } from '@storybook/react'
import { MagnifyingGlass } from 'phosphor-react'
import { Button, ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    icon: <MagnifyingGlass weight="bold" />,
  },
  argTypes: {
    icon: {
      type: 'symbol',
    },
  },
  parameters: {
    backgrounds: {
      default: 'friend-red',
    },
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

import { StoryObj, Meta } from '@storybook/react'
import { Select, SelectProps } from '.'

import options from './mock'

export default {
  title: 'Select',
  component: Select,
  args: {
    label: 'Idade',
    ariaLabel: 'Selecione uma idade',
    sideLabel: false,
    options,
    inputsize: 'medium',
  },
  argTypes: {
    inputsize: {
      control: {
        type: 'radio',
      },
    },
    valueChange: { action: 'take value' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '30rem' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'friend-red',
    },
  },
} as Meta<SelectProps>

export const Default: StoryObj<SelectProps> = {}

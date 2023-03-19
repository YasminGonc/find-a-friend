import { StoryObj, Meta } from '@storybook/react'
import { Select, SelectProps } from '.'

import options from './mock'

export default {
  title: 'Select',
  component: Select,
  args: {
    label: 'Busque',
    name: 'Estado',
    options,
    inputSize: 'medium',
  },
  argTypes: {
    inputSize: {
      control: {
        type: 'radio',
      },
    },
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

import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Encontre o animal de estimação ideal para seu estilo de vida!',
    size: 'xlarge',
    weight: 'semiBold',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '40rem' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'friend-red',
    },
  },
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

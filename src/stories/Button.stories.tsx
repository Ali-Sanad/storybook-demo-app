import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from '../components/Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    handleClick: {
      action: 'handleClick'
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args} />
)

export const Blue = Template.bind({})

Blue.args = {
  label: 'Hello Blue',
  backgroundColor: 'blue',
  size: 'md'
}

export const Red = Template.bind({})

Red.args = {
  label: 'Hello Red',
  backgroundColor: 'red',
  size: 'md'
}

export const Green = Template.bind({})

Green.args = {
  label: 'Hello Green',
  backgroundColor: 'green',
  size: 'md'
}

export const Samll = Template.bind({})

Samll.args = {
  label: 'Hello Small',
  backgroundColor: 'gray',
  size: 'sm'
}

export const Medium = Template.bind({})

Medium.args = {
  label: 'Hello Medium',
  backgroundColor: 'gray',
  size: 'md'
}

export const Large = Template.bind({})

Large.args = {
  label: 'Hello Large',
  backgroundColor: 'gray',
  size: 'lg'
}

export const LongLabel = Template.bind({})

LongLabel.args = {
  label: 'Hello Long '.repeat(5),
  backgroundColor: 'gray',
  size: 'lg'
}

import Stack, { StackProps } from '../components/Stack'
import { Meta, Story } from '@storybook/react'
import Button from '../components/Button'

export default {
  title: 'Components/Stack',
  component: Stack
} as Meta<StackProps>

const Template: Story<StackProps & { numberOfItems: number }> = args => {
  const { numberOfItems } = args

  const itemStyle = {
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const renderItems = [...Array(numberOfItems)].map((_, index) => (
    <Button
      key={index}
      backgroundColor='red'
      label={`Item ${index + 1}`}
      size='lg'
      {...itemStyle}
    />
  ))
  return <Stack {...args}>{renderItems}</Stack>
}

export const Horizontal = Template.bind({})

Horizontal.args = {
  direction: 'row',
  spacing: 2,
  wrap: false,
  numberOfItems: 5
}

export const Vertical = Template.bind({})

Vertical.args = {
  direction: 'column',
  spacing: 2,
  wrap: false,
  numberOfItems: 5
}

export const NoSpacing = Template.bind({})

NoSpacing.args = {
  direction: 'row',
  spacing: 0,
  wrap: false,
  numberOfItems: 5
}

export const Wraping = Template.bind({})

Wraping.args = {
  direction: 'row',
  spacing: 2,
  wrap: true,
  numberOfItems: 30
}

export const Empty = Template.bind({})

Empty.args = {
  direction: 'row',
  wrap: false,
  numberOfItems: 0
}

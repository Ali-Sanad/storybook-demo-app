import { ReactNode } from 'react'

export type StackProps = {
  children: ReactNode
  spacing: number
  wrap: boolean
  direction: 'row' | 'column'
}

const Stack = ({
  children,
  spacing = 2,
  direction = 'row',
  wrap = false
}: StackProps) => {
  const style = {
    display: 'flex',
    gap: `${spacing * 0.25}rem`,
    flexDirection: direction,
    flexWrap: wrap ? 'wrap' : 'nowrap'
  } as const

  return <div style={style}>{children}</div>
}

export default Stack

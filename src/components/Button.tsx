export type ButtonProps = {
  label: string
  backgroundColor: string
  color?: string
  size?: 'sm' | 'md' | 'lg'
  handleClick?: () => void
}

const Button = ({
  label,
  backgroundColor = 'red',
  color = 'white',
  size = 'md',
  handleClick = () => {},
  ...args
}: ButtonProps) => {
  let scale = 1
  if (size === 'sm') scale = 0.75
  if (size === 'lg') scale = 1.5

  const style = {
    color,
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    ...args
  } as const

  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  )
}

export default Button

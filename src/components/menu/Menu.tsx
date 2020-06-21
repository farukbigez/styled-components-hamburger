import React from 'react'
import { StyledMenu } from './Menu.styled'

interface Props {
  open: boolean
}

export const linkNames = `{linkNames}`.trim()

const Menu: React.FC<Props> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">{linkNames}</a>
      <a href="/">{linkNames}</a>
      <a href="/">{linkNames}</a>
    </StyledMenu>
  )
}

export default Menu

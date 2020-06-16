import React from 'react'
import { StyledMenu } from './Menu.styled'

interface Props {
   open: boolean
}

const Menu: React.FC<Props> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">About us</a>
      <a href="/">Pricing</a>
      <a href="/">Contact</a>
    </StyledMenu>
  )
}

export default Menu

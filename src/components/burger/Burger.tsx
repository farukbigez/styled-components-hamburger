import React from 'react'
import { StyledBurger } from './Burger.styled'

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
}

const Burger: React.FC<Props> = ({ setOpen, open }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger
import React from 'react'
import { Burger, Menu } from './components'

export const App: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} />
    </>
  )

}

export default App
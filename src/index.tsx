import React from 'react'
import { Burger, Menu } from './components'

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const node = React.useRef(null)

  return (
    <>
      <div ref={node} >
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
        </div>
      </>
  )

}

export default App
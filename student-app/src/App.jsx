import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar1 from './Navbar1'
import Button1 from './Button1'
import Card1 from '../card1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div>
      <Navbar1></Navbar1>
      <h1>Hello</h1>
    </div>
    <div>
      <Button1></Button1>
    </div>
    <div>
      <Card1></Card1>
    </div>
    </div>
  )
}

export default App

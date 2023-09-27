import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1 onClick={handleClick}>Tienda de plantas y carrito de compras</h1>
      <p>{count}</p>
    </>
  )
}

export default App

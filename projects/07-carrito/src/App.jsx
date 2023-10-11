import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }
  const handleClear = () => {
    setCount(0)
  }
  return (
    <>
      <h1 onClick={handleClick}>Tienda de plantas y carrito de compras</h1>
      <p>{count}</p>
      <button onClick={handleClear}>Clear</button>
    </>
  )
}

export default App

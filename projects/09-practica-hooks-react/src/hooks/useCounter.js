import { useState } from "react"

const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        setCounter(counter + value)
    }
    const decrement = (value = 1, negative) => {
        if (!negative && counter - value < 0) {
            setCounter(0)
            return
        }
        setCounter(counter - value)
    }
    const reset = () => {
        setCounter (0)
    }
  return {
    counter,
    increment,
    decrement,
    reset,
  }
}

export default useCounter
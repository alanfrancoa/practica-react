import Incrementar from "./Incrementar"
 import { useState, useCallback } from "react"

const CallBackComponent = () => {
    
    const [counter, setCounter] = useState(0)

    const incrementarPadre = useCallback(
        (val) => {
            setCounter(contador => contador + val)// Utilizamos los valores internos, para poder hacer los cambios. Ya que sino memoriza el primer valor. 
        }
      , []
    )
    

  return (
    <>
    <h2>Contador: {counter}</h2>
    <Incrementar incrementar={incrementarPadre}  />
    </>
  )
}

export default CallBackComponent
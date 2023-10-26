import useCounter from "../hooks/useCounter"

const ContadorComponent = () => {
    const {counter, increment, decrement, reset} = useCounter()


  return (
    <>
    <h1>Contador: {counter}</h1>
    <button className="btn btn-primary" onClick={() => increment()}>+1</button>
    <button className="btn btn-danger" onClick={() => reset()}>Reset</button>
    <button className="btn btn-primary" onClick={() => decrement(1, false)}>-1</button>
    </>
  )
}

export default ContadorComponent
import { useState } from "react"
const useForm = (initialForm = {} ) => {
    const [formState, setFormState] = useState(initialForm)
    
    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value //va en corchetes para que se pueda modificar el valor, el que sea el Key en corchetes
        })
    }
  return {
    ...formState,
    formState,
    onInputChange,
  }
}

export default useForm
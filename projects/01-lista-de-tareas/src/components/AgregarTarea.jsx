import {useState} from 'react'
import propTypes from 'prop-types'

const AgregarTarea = ({agregarTarea}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        agregarTarea(inputValue)
    }
  return (
    <form onSubmit={onSubmit}>
        <input 
            type='text'
            placeholder='Ingresá la nueva tarea'
            value={inputValue}
            onChange={onInputChange}        
        />
    </form>
  )
}

export default AgregarTarea

AgregarTarea.propTypes = {
    agregarTarea: propTypes.string.isRequired,
}
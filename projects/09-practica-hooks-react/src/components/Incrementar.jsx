import PropTypes from "prop-types"
import {memo} from "react"

const Incrementar = memo(function Incrementar({ incrementar }) {
    console.log('Me estoy redibujando')
    return (
      <button onClick={() => incrementar(1000)}>+1</button>
    )
  })
  
  Incrementar.propTypes = {
      incrementar: PropTypes.func.isRequired, 
    }

export default Incrementar

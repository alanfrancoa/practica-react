import { UserContext } from "../context/UserContext"
import useForm from "../hooks/useForm"
import { useContext } from "react"

const LoginScreen = () => {
  const initialForm = {
    nombre: '',
    tecnologia: '',
    mail: '',
    redes: '',
  }

  const {formState, nombre, tecnologia, mail, redes, onInputChange} = useForm(initialForm)
  
  const {setUsuario} = useContext(UserContext)

  const onSubmit = (e) => {
    e.preventDefault()
    setUsuario(formState)
  }
  return (
    <>
    <form className="container" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input 
          type="text" 
          className="form-control" 
          name="nombre"
          value={nombre}
          onChange={onInputChange}></ input>
      </div>
      <div className="mb-3">
        <label htmlFor="tecnologia" className="form-label">Tecnologia</label>
        <input 
          type="text" 
          className="form-control" 
          name="tecnologia"
          value={tecnologia}
          onChange={onInputChange}></ input>
      </div>
      <div className="mb-3">
        <label htmlFor="mail" className="form-label">e-mail</label>
        <input 
          type="text" 
          className="form-control" 
          name="mail"
          value={mail}
          onChange={onInputChange}></ input>
      </div>
      <div className="mb-3">
        <label htmlFor="redes" className="form-label">Redes</label>
        <input 
          type="text" 
          className="form-control" 
          name="redes"
          value={redes}
          onChange={onInputChange}></ input>
      </div>
      <button type="submit" className="btn btn-primary">Registrar Usuario</button>
    </form>
    </>
  )
}

export default LoginScreen
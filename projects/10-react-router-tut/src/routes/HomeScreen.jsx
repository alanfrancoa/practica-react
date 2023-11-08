import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const HomeScreen = () => {
  const { usuario } = useContext(UserContext)
  return (
    <table className="table table-stripped">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Tecnologia</th>
          <th scope="col">e-mail</th>
          <th scope="col">Redes</th>
        </tr>
      </thead>
    <tbody>
      <tr>
        <th scope="row">{usuario.nombre}</th>
        <td>{usuario.tecnologia}</td>
        <td>{usuario.mail}</td>
        <td>{usuario.redes}</td>
      </tr>
    </tbody>
  </table>
  )
}

export default HomeScreen
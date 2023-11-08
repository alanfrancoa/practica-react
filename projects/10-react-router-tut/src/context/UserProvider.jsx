import {UserContext} from './UserContext.jsx'
import { useState } from 'react'

const UserProvider = ({children}) => {
  const [usuario, setUsuario] = useState({})

  return (
    <UserContext.Provider value={{usuario, setUsuario}}>
        {children} 
    </UserContext.Provider>
    //provee los datos del user, a los childrens, de esta manera se pasa de padre a hijos y asi consecutivamente.
  )
}


export default UserProvider
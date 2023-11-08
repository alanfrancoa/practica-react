import {UserContext} from './UserContext.jsx'

const usuario = {
    nombre: 'Alan Alvarez',
    tecnologia: 'React',
    mail: 'alvarezalanfranco@gmail.com',
    redes: '@alanfrancoa',
}

const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{usuario}}>
        {children} 
    </UserContext.Provider>
    //provee los datos del user, a los childrens, de esta manera se pasa de padre a hijos y asi consecutivamente.
  )
}


export default UserProvider
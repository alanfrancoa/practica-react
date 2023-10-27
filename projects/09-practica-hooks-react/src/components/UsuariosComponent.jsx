import useFetch from "../hooks/useFetch"

const UsuariosComponent = () => {
    const {data, isLoading, errors} = useFetch('https://jsonplaceholder.typicode.com/users')
    
    return (
    <>
    <h1>Lista de usuarios:</h1>
    {   isLoading 
        ? <h4>Cargando...</h4> 
        : errors ? <p>Hay un error: {errors}</p>
        : <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Website</th>
                </tr>
            </thead>
            <tbody>
                {data.map(user => {
                    return (
                        <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                    </tr>
                    )
                })}

                
            </tbody>
        </table>
    }
        
    </>
  )
}

export default UsuariosComponent
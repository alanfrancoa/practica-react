import useForm from "../hooks/useForm"

const FormularioComponent = () => {
    const initialForm = {
        userName: '',
        email: '',
        password: '',
    
    }
    const {userName, email, password, formState, onInputChange} = useForm(initialForm)


    const onSubmit = (event) => {
        event.preventDefault() //para que no se actualice la pagina
        console.log(formState)
    }
  return (
    <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input 
                type="userName" 
                className="form-control" 
                name="userName"
                placeholder="Write your username"
                value={userName}
                onChange = {onInputChange}
             />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input 
                type="email" 
                className="form-control" 
                name="email" 
                placeholder="Write your e-mail"
                value={email}
                onChange = {onInputChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                className="form-control" 
                name="password"
                placeholder="Password" 
                value={password}
                onChange = {onInputChange}
            />
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
</form>
  )
}

export default FormularioComponent
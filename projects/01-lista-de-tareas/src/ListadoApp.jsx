import {useState} from 'react'
import propTypes from 'prop-types'
import AgregarTarea from './Components/AgregarTarea'
const Item = ({ nombre, visto }) => {
    return (
        <li>{nombre}
            {visto ? '✅' : '⛔'}
        </li> //cuando visto true, lo hace, caso contrario sale. 
    )
}
const ListadoApp = () => {
    let listadoSecciones = [
        { nombre:'Instalaciones Necesarias', visto:true },
        {nombre:'Uso de Vite', visto:true },
        {nombre:'Componentes', visto:true },
        {nombre:'Variables en JSX', visto:true },
        {nombre:'Props', visto:true },
        {nombre:'Eventos', visto:true },
        {nombre:'useState', visto:true },
        {nombre:'Redux', visto:false },
        {nombre:'Custom Hooks', visto:false },
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones)
    console.log(arreglo)
    const addTask = () => {
        setArreglo([... arreglo, {nombre: 'nuevo', visto: false}])
    }
    return (
        <>
            <h1>Listado de temas a estudiar:</h1>
            <AgregarTarea />
            <ol>
                {arreglo.map(item => (
                    <Item key={item.nombre} nombre={item.nombre} visto={item.visto} />
                ))}
            </ol>
            <button onClick={()=> addTask()}>Agregar tarea</button>
        </>
    )
}

export default ListadoApp

Item.propTypes = {
    nombre: propTypes.string.isRequired,
    visto: propTypes.bool.isRequired,
}
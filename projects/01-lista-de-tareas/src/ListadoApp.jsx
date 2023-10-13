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
        { id: 0, nombre:'Instalaciones Necesarias', visto:true },
        { id: 1, nombre:'Uso de Vite', visto:true },
        { id: 2, nombre:'Componentes', visto:true },
        { id: 3, nombre:'Variables en JSX', visto:true },
        { id: 4, nombre:'Props', visto:true },
        { id: 5, nombre:'Eventos', visto:true },
        { id: 6, nombre:'useState', visto:true },
        { id: 7, nombre:'Redux', visto:false },
        { id: 8, nombre:'Custom Hooks', visto:false },
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones)

    const onAgregarTarea = (val) => {
        let valor = val.trim()
        if (valor < 1) return// si es menor a uno sale del metodo
        const envio = {
            id: arreglo.length,
            nombre: valor,
            visto: false,
        }
        setArreglo([...arreglo, envio])
    }
    return (
        <>
            <h1>Listado de temas a estudiar:</h1>
            <AgregarTarea agregarTarea={onAgregarTarea}/>
            <ol>
                {arreglo.map(item => (
                    <Item key={item.id} nombre={item.nombre} visto={item.visto} />
                ))}
            </ol>
        </>
    )
}

export default ListadoApp

Item.propTypes = {
    nombre: propTypes.string.isRequired,
    visto: propTypes.bool.isRequired,
}
import { useState } from "react"
import PropTypes from 'prop-types';
import "../styles/card.css"

const Card = ({ imagen, titulo, descripcion, precio }) => {

    const [added, setAdded] = useState(false)

    const clickAgregar = () => {setAdded(true)}
    const clickQuitar = () => {setAdded(false)}

    return (
        <div className="tarjeta">
            <img src={imagen} alt={titulo} className="tarjeta-imagen" />
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{titulo}</h3>
                <p className="tarjeta-descripcion">{descripcion}</p>
                <p className="tarjeta-precio">{precio}</p>
                {added
                    ? <button type="button" className="boton-quitar" onClick={clickQuitar}>Quitar del carrito</button>
                    : <button type="button" className="boton-agregar" onClick={clickAgregar}>Agregar del carrito</button>
                }
            </div>



        </div>
    )
}

Card.propTypes = {
    imagen: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    // Asegura que 'imagen' sea un string y sea requerido en el componente
};

export default Card
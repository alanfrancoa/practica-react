
import { useState, useEffect, createContext } from 'react'
//import PropTypes from 'prop-types'

const ProductosContext = createContext()


 const ProductosProvider = ({ children }) => {

    const [productos, setProductos] = useState([])

    const fetchProductos = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            console.log(data)
            setProductos(data)
            
            
        }
        catch (e) {
            console.error("Hay error: ", e)
        }
    }

    useEffect(() => {
        fetchProductos()
    }, [])

    return (
        <ProductosContext.Provider value={productos}>
            {children}
        </ ProductosContext.Provider>
    )
}

export {ProductosContext, ProductosProvider} 
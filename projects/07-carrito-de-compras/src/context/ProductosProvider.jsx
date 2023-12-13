import { useState, useEffect } from 'react';
import { ProductosContext } from './ProductosContext'; 

export const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);

    const fetchProductos = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProductos(data);
        } catch (e) {
            console.error("Hay error: ", e);
        }
    };

    useEffect(() => {
        fetchProductos();
    }, []);

    return (
        <ProductosContext.Provider value={productos}>
            {children}
        </ProductosContext.Provider>
    );
};

import { CarritoContext } from './CarritoContext';
import { useReducer } from 'react';

const initialState = [];

const comprasReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case '[CARRITO] Agregar Compra':
      return [...state, action.payload];
    case '[CARRITO] Aumentar Cantidad':
      // Lógica para aumentar la cantidad
      break;
    case '[CARRITO] Reducir Cantidad':
      // Lógica para reducir la cantidad
      break;
    case '[CARRITO] Eliminar Compra':
      return state.filter(compra => compra.id !== action.payload);
    default:
      return state;
  }
};

export const CarritoProvider = ({ children }) => {
  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
    const action = {
      type: '[CARRITO] Agregar Compra',
      payload: compra
    };
    dispatch(action);
  };

  const aumentarCantidad = (id) => {
    const action = {
      type: '[CARRITO] Aumentar Cantidad',
      payload: id
    };
    dispatch(action);
  };

  const disminuirCantidad = (id) => {
    const action = {
      type: '[CARRITO] Reducir Cantidad',
      payload: id
    };
    dispatch(action);
  };

  const eliminarCompra = (id) => {
    const action = {
      type: '[CARRITO] Eliminar Compra',
      payload: id
    };
    dispatch(action);
  };

  return (
    <CarritoContext.Provider value={{ listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
      {children}
    </CarritoContext.Provider>
  );
};

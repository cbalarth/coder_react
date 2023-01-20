import React, {createContext, useState} from 'react'
import catalogo from '../catalogo.json'

export const CarritoContext = createContext("");

const CarritoContextProvider = ({children}) => {

    const productos = catalogo.cards

    const [carrito, setCarrito] = useState([]);

    const addCarrito = (producto) => {
        setCarrito([...carrito, producto])
    }

    return (
        <CarritoContext.Provider value={{productos, carrito, addCarrito}}> 
            {children}
        </CarritoContext.Provider>
)
}

export default CarritoContextProvider
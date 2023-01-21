import React, {createContext, useState} from 'react'
import useFirebase from '../hook/useFirebase'

export const CarritoContext = createContext("");

const CarritoContextProvider = ({children}) => {

    const {productos} = useFirebase()

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
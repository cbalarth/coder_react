import React, {useContext} from 'react'
import {CarritoContext} from '../../context/CarritoContext'

const Cart = () => {

    const {carrito} = useContext(CarritoContext)
    console.log(carrito)

    const condition = carrito.length > 0

    return (
        <div>
            <h1>CART</h1>
            {!condition && <p>No hay productos agregados al carrito...</p>}

            {carrito.map((element, index) => (
                <div key={index}>
                    <h2>{element.title}</h2>
                    <h2>Cantidad = {element.cantidad}</h2>
                    <h2>Precio Unitario = {element.price}</h2>
                    <h2>Precio Total = {element.priceTotal}</h2>
                </div>
            ))}

        </div>
    )
}

export default Cart
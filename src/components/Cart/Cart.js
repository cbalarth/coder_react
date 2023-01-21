import React, {useContext} from 'react'
import {CarritoContext} from '../../context/CarritoContext'
import './Cart.css'
import Swal from "sweetalert2"

const Cart = () => {

    const {carrito} = useContext(CarritoContext)
    console.log(carrito)

    const condition = carrito.length > 0

    let totalFinal = 0
    carrito.forEach(element => {
        totalFinal = totalFinal + element.priceTotal
    });
    console.log(totalFinal)

    const alerta = (e) => {
        e.preventDefault()
        Swal.fire(
            {
            position: 'center',
            icon: 'success',
            title: "COMPRA EXITOSA",
            text: `Felicidades, hemos aceptado tu compra por $${totalFinal}. Enviamos el comprobante al correo inscrito.`,
            timer: 15000,
            timerProgressBar: true,
            customClass: {popup: 'contSWAL',},
        })
    }


    return (
        <div>
            <h1>CART</h1>
            {!condition && <p>No hay productos agregados al carrito...</p>}

            {carrito.map((element, index) => (
                <div className="productoCarrito" key={index}>
                    <h2>{element.title}</h2>
                    <h2>Cantidad = {element.cantidad}</h2>
                    <h2>Precio Unitario = {element.price}</h2>
                    <h2>Precio Total = {element.priceTotal}</h2>
                </div>
            ))}
            <h2>Total = {totalFinal}</h2>
            <form className="formularioCarrito" onSubmit={alerta}>
                <p>Nombre</p>
                <input type="text" required/><br />
                <p>Dirección</p>
                <input type="text" required/><br />
                <p>Correo</p>
                <input type="email" required/><br /><br />
                <button>COMPRAR</button>
            </form>
        </div>
    )
}

export default Cart
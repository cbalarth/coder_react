import React, {useContext} from 'react'
import {CarritoContext} from '../../context/CarritoContext'
import {NavLink} from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {

    const {carrito} = useContext(CarritoContext)

    return (
        <div>
            <span className="carritoNum">{carrito.length}</span>
            <NavLink to="/cart">
                <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="" className="carritoLogo"/>
            </NavLink>
        </div>
    )
}

export default CartWidget
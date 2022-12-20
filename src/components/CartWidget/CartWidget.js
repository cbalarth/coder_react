import React from 'react'
import {NavLink} from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <span className="carritoNum">5</span>
            <NavLink to="/cart">
                <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="" className="carritoLogo"/>
            </NavLink>
        </div>
    )
}

export default CartWidget
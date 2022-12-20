import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light fondoNavbar">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Tienda Balart</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ordenNavbar">
                {/*CATEOGORÍAS*/}
                    <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/counter1">Counter 1</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/counter2">Counter 2</NavLink></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><NavLink className="dropdown-item" to="/api1">API 1</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/api2">API 2</NavLink></li>
                            </ul>
                        </li>
                    {/*EJERCICIOS*/}
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Ejercicios</NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink className="dropdown-item" to="/counter1">Counter 1</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/counter2">Counter 2</NavLink></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><NavLink className="dropdown-item" to="/api1">API 1</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/api2">API 2</NavLink></li>
                        </ul>
                    </li>
                </ul>
                <CartWidget/>
                </div>
            </div>
        </nav>
    )
}

export default navbar
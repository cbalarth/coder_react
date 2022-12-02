import React from 'react'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light fondoNavbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">Tienda Balart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorías
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Categoría 1</a></li>
                            <li><a className="dropdown-item" href="#">Categoría 2</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Ofertas</a></li>
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
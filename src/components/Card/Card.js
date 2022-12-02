import React from 'react'
import './Card.css'

const Card = (props) => {
    const {titulo, descripcion, img, btnClassName} = props;
    
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
                <a href="#" className={ btnClassName || "btn btn-primary"}>Comprar</a>
            </div>
        </div>
    )
}

export default Card
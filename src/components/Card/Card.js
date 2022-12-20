import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

const Card = (props) => {
    const {id, titulo, precio, img, btnClassName} = props;
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{precio}</p>
                <Link to={`/item/${id}`}>
                    <button className={ btnClassName || "btn btn-primary"}>Comprar</button>
                </Link>
            </div>
        </div>
    )
}

export default Card
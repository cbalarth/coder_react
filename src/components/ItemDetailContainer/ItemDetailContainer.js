import React from 'react'
import {useParams} from 'react-router-dom'
import catalogo from '../../catalogo.json'
import CartAdder from '../CartAdder/CartAdder'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const {sku} = useParams()

    const card = catalogo.cards.filter((item) => item.sku === sku)[0]
    console.log(card)

    return (
        <div>
            <img src={card.img} alt="" />
            <h1>SKU: {sku}</h1>
            <h1>TITULO: {card.title}</h1>
            <h1>PRECIO: {card.price}</h1>
            <CartAdder/>
        </div>
    )
}

export default ItemDetailContainer
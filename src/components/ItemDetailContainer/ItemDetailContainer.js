import React, {useContext, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import catalogo from '../../catalogo.json'
import CartAdder from '../CartAdder/CartAdder'
import './ItemDetailContainer.css'
import {CarritoContext} from '../../context/CarritoContext'
import useFirebase from '../../hook/useFirebase'

const ItemDetailContainer = () => {

    const {productos} = useFirebase()
    useEffect(() => {
        return () => {
        }
        }, [productos])

    const {sku} = useParams()

    const card = catalogo.cards.filter((item) => item.sku === sku)[0]
    console.log(card)

    const {addCarrito} = useContext(CarritoContext)

    return (
        <div>
            <img src={card.img} alt="" />
            <h1>SKU: {sku}</h1>
            <h1>TITULO: {card.title}</h1>
            <h1>PRECIO: {card.price}</h1>
            <h1>STOCK: {card.stock}</h1>
            <CartAdder item={card} addCarrito={addCarrito}/>
        </div>
    )
}

export default ItemDetailContainer
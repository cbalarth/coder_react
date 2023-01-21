import React, {useContext, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import CartAdder from '../CartAdder/CartAdder'
import {CarritoContext} from '../../context/CarritoContext'
import useFirebase from '../../hook/useFirebase'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const {id} = useParams()
    const {producto, getProducto} = useFirebase()

    useEffect(() => {
        getProducto({id})
        console.log(producto)
        // eslint-disable-next-line
    }, [])

    // const card = catalogo.cards.filter((item) => item.sku === sku)[0]
    // console.log(card)

    const {addCarrito} = useContext(CarritoContext)

    return (
        <div>
            <img src={producto.img} alt="" />
            <h1>ID: {producto.id}</h1>
            <h1>SKU: {producto.sku}</h1>
            <h1>TITULO: {producto.title}</h1>
            <h1>PRECIO: {producto.price}</h1>
            <h1>STOCK: {producto.stock}</h1>
            <CartAdder item={producto} addCarrito={addCarrito}/>
        </div>
    )
}

export default ItemDetailContainer
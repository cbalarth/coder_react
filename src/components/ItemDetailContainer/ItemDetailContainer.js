import React from 'react'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {

    const {sku} = useParams()

    return (
        <h1>SKU: {sku}</h1>
    )
}

export default ItemDetailContainer
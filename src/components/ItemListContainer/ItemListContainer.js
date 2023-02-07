import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Card from '../Card/Card'
import Spinner from '../Spinner/Spinner'
import useFirebase from '../../hook/useFirebase'

const ItemListContainer = ({filter}) => {

    const {productos, getProductos, loading} = useFirebase()
    useEffect(() => {
        getProductos()
        console.log(productos)
        // eslint-disable-next-line
    }, [])

    const {catID} = useParams()
    const productosFiltrados = catID? productos.filter((item) => item.catID === catID) : productos

    return (
        <div className="row row-centered pos">
            {loading && <Spinner/>}
            {productosFiltrados.map(({id, sku,title,price,img, btnClassName}, index) => (
                <Card
                key={index}
                id={id}
                sku={sku}
                title={title}
                price={price}
                img={img}
                btnClassName={btnClassName}
            />)
            ) }
        </div>
    )
}

export default ItemListContainer
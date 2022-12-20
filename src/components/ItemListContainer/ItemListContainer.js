import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Card from '../Card/Card'
import catalogo from '../../catalogo.json'
import Spinner from '../Spinner/Spinner'

const ItemListContainer = () => {
    const [loading, setLoading] = useState(false)

    const getCards = () => {
        setLoading(true)
        const operacion = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    status:200,
                    data:catalogo.cards
                })
            },3000)
        })
        operacion.then((resultado) => {     //Resultado si la promesa se resuelve.
            setCards(resultado.data)
            console.log(resultado)
        }).catch((err) => {                 //Resultado si la promesa se rechaza.
            console.log("ERROR EN EL CATCH: "+err)
        }).finally(() => {
            console.log("Promesa finalizada.")
            setLoading(false)
        })
    }
    
    const [cards, setCards] = useState([])
    
    useEffect(() => {
        getCards()
        return () => {
            setCards([])
        }
    }, [])

    const {catID} = useParams()
    const cardsFiltrado = catID? cards.filter((item) => item.catID === catID) : cards
    console.log(cardsFiltrado)

    return (
        <div className="d-flex">
            {/* <h1>Categoría: {catID}</h1> */}
            {loading && <Spinner/>}
            {cardsFiltrado.map(({sku,title,price,img, btnClassName}, index) => (
                <Card
                key={index}
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
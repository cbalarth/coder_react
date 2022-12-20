import React, {useState, useEffect} from 'react'
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

    return (
        <div className="d-flex">
            {loading && <Spinner/>}
            {cards.map(({sku, titulo,descripcion,img,btnClassName}, index) => (
                <Card
                key={index}
                sku={sku}
                titulo={titulo}
                descripcion={descripcion}
                img={img}
                btnClassName={btnClassName}
            />)
            ) }
        </div>
    )
}

export default ItemListContainer
import React from 'react'
import Card from '../Card/Card';

const cards = [
    {
        titulo:"Producto 1",
        descripcion:"$1001",
        img:"https://assets.stickpng.com/images/580b57fbd9996e24bc43bf75.png",
    },
    {
        titulo:"Producto 2",
        descripcion:"$1002",
        img:"https://images.vexels.com/media/users/3/153096/isolated/preview/9f420eda3be1ce9b846edc9cba4bc84a-icono-de-trazo-de-camiseta-de-cuello-redondo.png",
        btnClassName:"btn btn-danger fs-1"
    }
]

const ItemListContainer = () => {
    return (
        <div>
            { cards.map(({titulo,descripcion,img,btnClassName},index) => (
                <Card
                key={index}
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
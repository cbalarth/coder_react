import React, {useState, useEffect} from 'react'
import './CartAdder.css'

const CartAdder = (props) => {

    const {addCarrito, item} = props;
    const {stock}=item;
    const {price}=item;

    const [contador, setContador] = useState(1)
    const sumar = () => {
        if(contador<stock) {
            setContador(contador+1)
        }
    }
    const restar = () => {
        if(contador>1) {
            setContador(contador-1)
        }
    }
    
    useEffect(() => {
        return () => {
        }
    }, [
        contador
    ])

    const agregaProducto = {
        ...item,
        cantidad:contador,
        priceTotal:price*contador
    }
    
    return (
        <div className="CartAdder">
            <button onClick={restar}>-1</button>
            <button onClick={sumar}>+1</button>
            <h2>Agregar al carrito: {contador} unidades.</h2>
            <button className="btn btn-primary" onClick={() => addCarrito(agregaProducto)}>Agregar</button>
        </div>
    )
}

export default CartAdder
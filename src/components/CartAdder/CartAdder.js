import React, {useState, useEffect} from 'react'
import './CartAdder.css'

const CartAdder = () => {
    const [contador, setContador] = useState(0)
    const sumar = () => setContador(contador+1)
    const restar = () => {
        if(contador>=1) {
            setContador(contador-1)
        }
    }
    
    useEffect(() => {
        return () => {
        }
    }, [
        contador
    ])
    
    return (
        <div className="CartAdder">
            <button onClick={restar}>-1</button>
            <button onClick={sumar}>+1</button>
            <h2>Agregar al carrito: {contador} unidades.</h2>
            <button className="btn btn-primary">Agregar</button>
        </div>
    )
}

export default CartAdder
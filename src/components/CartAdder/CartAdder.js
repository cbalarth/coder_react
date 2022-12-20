import React, {useState, useEffect} from 'react'

const CartAdder = () => {
    const [contador, setContador] = useState(0)
    const sumar = () => setContador(contador+1)
    const restar = () => {
        if(contador>=1) {
            setContador(contador-1)
        }
    }
    
    useEffect(() => {
        console.log("Mount")
        if(contador===3){
            console.log("El contador llegó a 3.")
        }
        return () => {
            console.log("Dismount")
        }
    }, [
        contador
    ])
    
    return (
        <div>
            <button onClick={restar}>-1</button>
            <button onClick={sumar}>+1</button>
        </div>
    )
}

export default CartAdder
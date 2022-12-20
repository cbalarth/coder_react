import React, {useState, useEffect} from 'react'

const Counter = (props) => {
    const {nombre} = props

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
        <div className='contadorcito'>
            <h1>{nombre}</h1>
            <h2>El valor del contador es: {contador}</h2>
            <button onClick={sumar}>sumar</button>
            <button onClick={restar}>restar</button>
        </div>
    )
}

export default Counter
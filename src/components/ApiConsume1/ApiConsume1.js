import axios from 'axios'
import React, {useState, useEffect} from 'react'

const ApiConsume1 = () => {
    
    const [img, setImg] = useState("")

    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
                const img = res.data.sprites.other['official-artwork']['front_default']
                setImg(img)
            } catch (error) {
                console.log(error)
            }
        }

        getData()
        
        return () => {
            setImg("")
        }
    }, [])
    
    return (
        <div>
            {img ? <img src={img} alt="pokemon"/> : ""}
        </div>
    )
}

export default ApiConsume1
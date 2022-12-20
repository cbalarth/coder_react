import axios from 'axios'
import React, {useState, useEffect} from 'react'

const ApiConsume2 = () => {
    
    const [img, setImg] = useState("")
    const [search, setSearch] = useState("")

    async function getData(name) {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name || "ditto"}`) //Toma Ditto como valor predeterminado.
            const img = res.data.sprites.other['official-artwork']['front_default']
            setImg(img)
        } catch (error) {
            alert("ERROR: Pokemon no existente.")
        }
    }

    useEffect(() => {
        getData() //Hace el primer consumo sin ingresar valor, por tanto usará el valor predeterminado.
        return () => {
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setSearch("")
    }

    return (
        <div>
            {img ? <img src={img} alt="pokemon"/> : ""}
            <form onSubmit={handleSubmit}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button type="submit" onClick={() => getData(search.toLowerCase())}>Buscar</button>
            </form>
        </div>
    )
}

export default ApiConsume2
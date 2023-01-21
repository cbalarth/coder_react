import {useState,useEffect} from 'react'
import {db} from '../firebase'
import {collection, doc, getDoc, getDocs} from 'firebase/firestore'

const useFirebase = () => {

    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     getProductos()
    // return () => {
    // }
    // }, [])

    useEffect(() => {
    }, [productos])
    
    const getProductos = async () => {
        // setLoading(true)
        try {
            const data1 = collection(db,'productos')
            const col1 = await getDocs(data1)
            const res1 = col1.docs.map(doc => doc={id:doc.id,...doc.data()})
            setProductos(res1)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log("Error al importar colección de productos.")
            console.log(error)
        }
    }

    const getProducto = async ({id}) => {
        setLoading(true)
        try {
            const data2 = doc(db,"productos",id)
            const col2 = await getDoc(data2)
            let res2 = col2.data()
            setProducto({id:col2.id,...res2})
            setLoading(false)
        } catch (error) {
            console.log("Error al importar producto específico.")
            console.log(error)
        }
    }

    return {
        productos,
        getProductos,
        producto,
        getProducto,
        loading,
        setLoading
    }
}

export default useFirebase
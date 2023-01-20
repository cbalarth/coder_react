import {useState, useEffect} from 'react'
import {db} from '../firebase'
import {collection, doc, getDoc, getDocs} from 'firebase/firestore'

const useFirebase = () => {

    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})

    useEffect(() => {
        getProductos()
        return () => {
        }
    }, [productos])

    useEffect(() => {
    }, [productos])
    
    const getProductos = async () => {

        try {
            const prodCol = collection(db, 'productos')
            await getDocs(prodCol).then((snapshot) => {
                if(snapshot.size === 0){
                    console.log("Base de datos vacía.")
                }
                setProductos(snapshot.docs.map((doc) => {
                    return {
                        id:doc.id,
                        ...doc.data()
                    }
                }))
            })

        } catch (error) {
            
        }

    }

    const getProducto = async (id) => {

        try {
            const document = doc(db, 'productos', id)
            const response = await getDoc(document)
            setProducto({id:response.id,...response.data()})
        } catch (error) {
            console.log("ERROR")
        }

    }

    return {
        productos,
        getProductos,
        producto,
        getProducto
    }
}

export default useFirebase
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Cart from './components/Cart/Cart'

import Counter from './components/Counter/Counter'
import ApiConsume1 from './components/ApiConsume1/ApiConsume1'
import ApiConsume2 from './components/ApiConsume2/ApiConsume2'
import Error404 from './components/Error404/Error404'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/item/:sku' element={<ItemDetailContainer/>}/>
          <Route path='/category/:catID' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>

          <Route path='/counter1' element={<Counter nombre="Componente 1"/>}/>
          <Route path='/counter2' element={<Counter nombre="Componente 2"/>}/>
          <Route path='/api1' element={<ApiConsume1/>}/>
          <Route path='/api2' element={<ApiConsume2/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </Router>
    </div>
  )
} 

export default App
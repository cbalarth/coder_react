import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  let name = "Carlos Balart";
  let styles = {
    color: "red",
    backgroundColor: "white"
  }

  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
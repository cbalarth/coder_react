import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Card from './components/Card/Card';

function App() {

  let name = "Carlos Balart";
  let styles = {
    color: "red",
    backgroundColor: "white"
  }

  const cards = [
    {
      titulo:"Producto 1",
      descripcion:"$1001",
      img:"https://assets.stickpng.com/images/580b57fbd9996e24bc43bf75.png",
    },
    {
      titulo:"Producto 2",
      descripcion:"$1002",
      img:"https://images.vexels.com/media/users/3/153096/isolated/preview/9f420eda3be1ce9b846edc9cba4bc84a-icono-de-trazo-de-camiseta-de-cuello-redondo.png",
      btnClassName:"btn btn-danger fs-1"
    }
  ]

  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <header className="App-header bg-primary">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={styles}>Nombre: {name}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      { cards.map(({titulo,descripcion,img,btnClassName},index) => (
      <Card
      key={index}
      titulo={titulo}
      descripcion={descripcion}
      img={img}
      btnClassName={btnClassName}
      />)
      ) }

    </div>
  );
}

export default App;
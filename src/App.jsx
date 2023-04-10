import Galeria from "./Galeria"
import imagenUno from './img/auto1.jpeg'
import imagenDos from './img/auto2.jpg'
import imagenTres from './img/auto3.jpg'
import imagenCuatro from './img/auto4.jpg'
import imagenCinco from './img/auto5.jpg'


const autosDeportivos = [
  {
    nombre: "auto1",
    img: imagenUno
  },
  {
    nombre: "auto2",
    img: imagenDos
  },
  {
    nombre: "auto3",
    img: imagenTres
  },
  {
    nombre: "auto4",
    img: imagenCuatro
  },
  {
    nombre: "auto5",
    img: imagenCinco
  }
]

function App() {

  return (
    <div className="App">
      <Galeria autosDeportivos = {autosDeportivos}/>
    </div>
  )
}

export default App

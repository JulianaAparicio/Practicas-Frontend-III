import '../styles/App.css';
import Veterinaria from '../components/Veterinaria';

function App() {
  const Perros = [{
    nombre: "Cony",
    edad: "5",
    sexo: "Hembra",
    raza: "Caniche",
    tamanio: "Pequeño"
  },
  {
    nombre: "Teo",
    edad: "1",
    sexo: "Macho",
    raza: "Golden",
    tamanio: "Grande"
  },
  {
    nombre: "Uma",
    edad: "8",
    sexo: "Hembra",
    raza: "Jack Russell",
    tamanio: "Pequeño"
  },
  {
    nombre: "Lisa",
    edad: "15",
    sexo: "Hembra",
    raza: "Pastor Alemán",
    tamanio: "Grande"
  }
];


  return (
    <div className="App">
      <Veterinaria perros = {Perros}></Veterinaria>
    </div>
  );
}

export default App;

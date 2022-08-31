// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// Tiene que tener un estado para contabilizar lo que voy comprando.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto 
// Item.
// PROPS: App deberá pasar por props lo necesario a sus componentes internos.

import { useState } from "react"
import Cabecera from "./components/Cabecera"
import Listado from "./components/Listado"

function App() {

  const [totalCounter, setTotalCounter] = useState(0)

  const increaseItem = (count) => {
    setTotalCounter(totalCounter + count);
  }
  
  
  return (
    <div className="App">
      <Cabecera total={totalCounter} />
      <Listado functionAmount={increaseItem} />
    </div>
  );
}

export default App;

import React, { Component, useState } from 'react'
import Button from './Button'
import './styles/App.css';

const App = () => {
  const colors = ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]
  const [Colores, setColores] = useState(colors);

  /* ESPACIO DE TRABAJO
  - Armar la estructura para una Class Component
  - Hacer un state con el arreglo de los colores
  - Vamos a usar una funcion shuffle mas abajo y vamos a enviarla por props... que
    formas tenemos para no perder el contexto?
  */


  /* ESPACIO DE TRABAJO
  Funcion Shuffle
  Aqui deberan hacer una funcion que me retorne un nuevo arreglo con los
  colores mezclados
  */

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const mezclar = () => {
    setColores(shuffle(colors));

  }

  
    return (
      <div className="container">
        
        <div className="panel">
          {Colores.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        <Button fn={mezclar} />
      </div>

    )
}

export default App;

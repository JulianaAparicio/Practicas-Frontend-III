import React from "react";
import Titulo from "../components/Titulo";
import "../styles/titulo.css";

const palabras = [ "HOLA", "HOLA", "HOLA", "MUNDO" ];

function App () {
    return (
    <div>
      {
        palabras.map((palabra, index) => <Titulo key={index}>{palabra}</Titulo>)
      }
    </div>
    )
}

export default App;
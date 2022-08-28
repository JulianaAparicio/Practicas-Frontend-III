// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

// App le tiene que pasar esa cantidad que tiene de estado a Cabecera (por props) así puede 
// mostrarlo en el span

import React from "react"

const Cabecera = ({totalCounter}) => {
  
  return (
    <header>
        <h1>Carrito de compras</h1>
        <p>Cantidad de productos <span>{totalCounter}</span></p>        
    </header>
  )
}

export default Cabecera;

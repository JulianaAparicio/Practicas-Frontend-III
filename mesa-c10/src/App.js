import './styles/App.css';
import Pizza from './component/Pizza';
import {useState, useEffect } from 'react'

export default function App() {

  const [pedido, setPedido] = useState("");
  useEffect(()=> {
    setTimeout(() => {
      setPedido("Pizzas")
    }, 2000);
  }, [])

  useEffect(()=> {
      return setPedido("")
  }, [])

  const cancelar = () => {
    alert("Tu pedido ha sido cancelado.")
    setPedido("")
  }

  return (
    <div className="App">
      <Pizza name = "Pizzas"/>
      <button onClick={cancelar}>Cancelar pedido</button>
    </div>
  );
}


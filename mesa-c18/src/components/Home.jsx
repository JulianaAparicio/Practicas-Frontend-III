import React from 'react'
import "../styles/Home.css"
import items from "../items.json"

const Home = () => {

    /* ESPACIO DE TRABAJO 
    Hacer que cada producto nos dirija al producto especifico, tienen dos alternativas
    Opcion A: Podemos utilizar un evento y las props
    Opcion B: Usar un Link que nos lleve a la ruta /product/NOMBRE_DEL_PRODUCTO 
    */
    
    return (
            <div className="home__container" >
                {items.map(item => (
                    // ESPACIO DE TRABAJO
                    <div key={item.id} className="home__product">
                        <p id="home__title">{item.name}</p>
                        <img id="home__image" src={`/images/${item.id}.png`} alt={item.name} />
                        <p>${item.price}</p>
                    </div>
                ))}
            </div>
    )
}

export default Home;

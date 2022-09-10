import React, { useState } from 'react'
import "../styles/Search.css"
import items from "../items.json"
import { withRouter } from 'react-router-dom'


const Search = () => {

    const [input, setInput] = useState("");

    // Funcion que actualiza el estado del input

    const handleChange = (event) => {
        setInput({inputValue: event.target.value})
    }

    // ESPACIO DE TRABAJO (Usar withRouter en el archivo Navbar.jsx antes de trabajar aqui)
    const handleSubmit = () =>  {
        if(input.inputValue) {
            // Filtramos nuestro arreglo de items y vemos si alguno incluye el inputValue
            const item = items.filter( product => product.name.includes(input.inputValue));
            // variable que utilizaremos para ir a la ruta del producto (/product/urlItem)
            const urlItem = item[0].name;
            console.log(`/product/${urlItem}`);
        }
        
        // Si no hay input, que la pagina te lleve a la Home 
        if(!input.inputValue) console.log("Llevame al inicio");
    };

    const {inputValue} = input;

    return (
        <div className="search__container">
            <input onChange={handleChange} type="text" value={inputValue} />
            <button onClick={handleSubmit}><img width="12px" src="/images/lupa.png" alt="lupa" /></button>
        </div>
    )
}

export default withRouter(Search);
import React from 'react'
import "../styles/Search.css"
import items from "../items.json"

const Search = () => {

    // Funcion que actualiza el estado del input
    const handleChange = (event) => this.setState({inputValue: event.target.value});

    // ESPACIO DE TRABAJO (Usar withRouter en el archivo Navbar.jsx antes de trabajar aqui)
    const handleSubmit = () =>  {
        if(this.state.inputValue) {
            // Filtramos nuestro arreglo de items y vemos si alguno incluye el inputValue
            const item = items.filter( product => product.name.includes(this.state.inputValue));
            // variable que utilizaremos para ir a la ruta del producto (/product/urlItem)
            const urlItem = item[0].name;
            console.log(`/product/${urlItem}`);
        }
        
        // Si no hay input, que la pagina te lleve a la Home 
        if(!this.state.inputValue) console.log("Llevame al inicio");
    };

    const {inputValue} = this.state

    return (
        <div className="search__container">
            <input onChange={handleChange} type="text" value={inputValue} />
            <button onClick={handleSubmit}><img width="12px" src="/images/lupa.png" alt="lupa" /></button>
        </div>
    )
}

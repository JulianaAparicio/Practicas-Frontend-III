import Perro from "./Perro"

const Veterinaria = ({perros}) => {
    const listaDePerros = perros.map(perro => 
        <Perro nombre={perro.nombre} edad={perro.edad} sexo={perro.sexo} 
        raza={perro.raza} tamanio={perro.tamanio}/>)

    return (
        <>
        <h1>Clientes caninos de Veterinaria</h1>
        {listaDePerros}
        </>
    )
}

export default Veterinaria
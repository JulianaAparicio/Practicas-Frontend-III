const Perro = ({nombre, edad, sexo, raza, tamanio}) => {
        return(
            <>
            <h2>Nombre: {nombre}</h2>
            <ul>
                <li>Edad: {edad}</li>
                <li>Sexo: {sexo}</li>
                <li>Raza: {raza}</li>
                <li>Tamaño: {tamanio}</li>
            </ul>
            </>
        );
        }

export default Perro;

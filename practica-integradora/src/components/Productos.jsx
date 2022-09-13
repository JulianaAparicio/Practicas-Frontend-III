import React from 'react';
import styles from '../styles/productos.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Productos = () => {
    return(
        <div className={styles.productos}>
            <FontAwesomeIcon icon="fa-sharp fa-solid fa-magnifying-glass" />            
            <input type='text'></input>
        </div>
    )

}

export default Productos;
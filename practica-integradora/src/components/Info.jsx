import Productos from "./Productos";
import styles from '../styles/info.module.css'


const Info = () => {
    return(
        <div className={styles.container}>
            <h1>Buscador de productos</h1>
            <Productos/>
        </div>
    )

}

export default Info;
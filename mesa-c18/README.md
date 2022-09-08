# Ecommerce 

En este repaso, tendras que refactorizar varios archivos. La idea es implementar lo visto de react router dom y completar en donde falte codigo.

## Tips y Consejos
- Pueden revisar el archivo App.js para ver como esta estructurado las rutas.
- El archivo Login.jsx no hace nada. Simple codigo decorativo.

## Consigna
Home.jsx:
- Si vemos en el `localhost:3000`, notaremos que cada producto espera poder ser selecionado. Deberas agregar lo que falta para ir a la ruta esperada.

Navbar.jsx:
- Este archivo tiene un componente llamado `Search`, el mismo se encarga de buscar si lo que buscamos coincide con alguno de los productos.
- Utilizar los elementos de react-router-dom en el import.
- El problema esta en que al parecer no recibe props. Para este caso utilizaras [withRouter](https://reactrouter.com/web/api/withRouter). 

Search.jsx
- Cuando termines de arreglar la Navbar.jsx, deberas agregar la forma para ir a las rutas solicitadas.

Product.jsx:
- Se utiliza un componente de actualizacion de props. Deberas completarlo.


### Pasos para correr el proyecto

Relizar primero `npm install`
Relizar segundo `npm start`

### Versiones de NPM y NODE
En caso de que el proyecto no poder hacer `npm install`, actualizar a las versiones:
`NPM 7.19.1` o superior
`NODE 16.5.0` o superior
/* 
Ejercicio Playground: 

Usando createElement, crear un elemento div que contenga un encabezado h2 
y un p, y que dentro del p haya un elemento span, de manera que React produzca un código HTML 
similar al de abajo. Podés usar los textos de tu preferencia.

    <div>
        <h2>¡Hola!</h2>
        <p> Hola <span> Mundo </span> </p>
    </div>  
    
 */

const app = document.querySelector("#root");
const div_el = () => {
    const encabezado = React.createElement("h2", {}, "¡Hola!");
    const p = React.createElement("p", {}, "Hola" [span]);
    const span = React.createElement("span", {}, "Mundo")

    return React.createElement("div", {}, [encabezado, p]);
}

ReactDOM.render(React.createElement(div_el, app));
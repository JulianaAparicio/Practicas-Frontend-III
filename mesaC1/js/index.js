const encabezado1 = React.createElement(
    "h1", {
        key: 1
    },
    "Con lo visto hasta ahora"
);

const encabezado2 = React.createElement(
    "h2", {
        key: 2
    },
    "Replica este HTML"
);

const encabezado3 = React.createElement(
    "h3", {
        key: 3
    },
    "Usando"
);

const encabezado4 = React.createElement(
    "h4", {
        key: 4
    },
    "React.js"
);

const footer = React.createElement(
    "footer", {
        key: 4
    },
    "Suerte!"
);

const div_padre = React.createElement(
    "div",
    null, [encabezado1, encabezado2, encabezado3, encabezado4, footer]
);

ReactDOM.render(div_padre, document.getElementById("root"));
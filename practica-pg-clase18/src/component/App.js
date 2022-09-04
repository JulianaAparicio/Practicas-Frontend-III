import '../styles/App.css';
import Home from "./Home";
import Main from "./Main";
import Articles from "./Articles";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/main">Main</Link>
      </li>
      <li>
        <Link to="/main/articles">Articulos</Link>
      </li>
  </ul>
    <Routes>
      <Route exact path="/"> <Home /> </Route>
      <Route path="/main"> <Main /> </Route>
      <Route path="/main/articles"> <Articles /> </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

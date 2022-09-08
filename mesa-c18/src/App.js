import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import "./styles/App.css"
// Componentes
import Home from './components/Home'
import Login from './components/Login'
import Product from './components/Product'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'

export default class App extends Component {
  render() {

    return (
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/product/:product" component={Product} />
        <Route path="*" component={NotFound} />
      </Switch>
     </BrowserRouter>
    )
  }
}


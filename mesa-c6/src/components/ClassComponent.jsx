import React, { Component } from 'react';

export default class ClassComponent extends Component {
    render() {
        return (
            <li>{this.props.nombre} {this.props.estaEnLista ? "esta" : "no está"} invitado a la fiesta</li>
        )
    }
}
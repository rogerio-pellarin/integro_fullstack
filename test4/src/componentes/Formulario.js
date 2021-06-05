import React, { Component } from 'react';

class Formulario extends Component{

    campoRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();
        const termino = this.campoRef.current.value;
        this.props.datosCampo(termino);
    }

    render(){

        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={ this.campoRef } type="text" className="form-control form-control-lg" placeholder="Ingrese texto..."/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-primary btn-block" placeholder="Ingrese texto..."/>
                    </div>
                </div>
            </form>
        );

    }

}

export default Formulario;
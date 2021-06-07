import React from 'react';
import axios from 'axios';

export default class Formulario extends React.Component{

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

export default class Palindrome extends React.Component {

    state = {
        termino : '',
        resultado : ''
      }
    
      consultarApi () {
    
        const termino = this.state.termino;
    
        const url = `http://localhost/integro_fullstack/test4.php?texto=${termino}`;
    
        /*fetch(url)
          .then( respuesta => respuesta.json() )
          .then( resultado => this.setState({ resultado : resultado.msg }) );*/
    
        axios.get(url)
        .then( res => {
          this.setState({ resultado : res.data.msg });
        });
      }
    
      datosCampo = (termino) => {
        //console.log( termino );
        this.setState({
          termino
        }, () => {
          this.consultarApi();
        })
      }

    render() {
        return (
            <div className="container">
            <div className="jumbotron">
              <p className="lead text-center">Validador de Palindromos</p>
              <Formulario
              datosCampo={this.datosCampo}
              />
            </div>
            <p className="lead text-center">{this.state.resultado}</p>
          </div>
        )
    }
}
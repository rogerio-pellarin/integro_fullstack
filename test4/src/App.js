import React, { Component } from 'react';
import axios from 'axios';

import Formulario from './componentes/Formulario';

class App extends Component{

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

  render(){
    return(
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">Validador de Palindromos</p>
          <Formulario
          datosCampo={this.datosCampo}
          />
        </div>
        <p className="lead text-center">{this.state.resultado}</p>
      </div>
    );
  }
}

export default App;

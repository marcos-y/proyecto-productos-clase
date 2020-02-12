import React from 'react';
import logo from './logo.svg';
import './App.css';
import Formulario from './formularios';
import './formularios.css';
import Buscador from './buscadorylista';
import './buscador.css';
import'./appdiv.css';

function App() {
  return (
    <div className="appdiv">
      <div className="forms">
        <Formulario></Formulario>
      </div>

      <div className="buscador">
        <Buscador></Buscador>
      </div>
    </div>
  );
}

export default App;

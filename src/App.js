import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Formulario from './formularios';
import './formularios.css';
import Buscador from './buscadorylista';
import './buscador.css';
import'./appdiv.css';

function App() {

  const [productos, setProductos] = useState([])

  const handleAddProd = (producto) =>{
    setProductos([...productos, producto])
    
  }

  return (
    <div className="appdiv">
      <div className="forms">
        <Formulario productos={productos} onAddProd={handleAddProd}></Formulario>
      </div>

      <div className="buscador">
        <Buscador productos={productos}></Buscador>
      </div>
    </div>
  );
}

export default App;

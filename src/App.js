import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Formulario from './formularios';
import './formularios.css';
import Buscador from './buscadorylista';
import './buscador.css';
import'./appdiv.css';
import BootstrapExample from './bootstrap example/BootstrapExample';

function App() {

  const [productos, setProductos] = useState([])

  const handleAddProd = (producto) =>{
    console.log(producto);
    
    setProductos([...productos, producto])
    
  }

  return (
    <div className="appdiv">
      <div className="forms">
        <Formulario productos={productos} onAddProd={handleAddProd}></Formulario>
      </div>

      <div className="buscador">
        <Buscador productos={productos} />
      </div>

      <BootstrapExample />
    </div>
    
  );
}

export default App;

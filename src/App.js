import logo from './Logo.png';
import './App.css';
import MiComponent from './MiComponent';
import { MiComponent2 } from './MiComponent2';
import {MiComponent3} from './MiComponent3';
import { EventosComponente } from './EventosComponente';
import Navbar from './Navbar';

function App() {
    const ficha_m={
      altura: "187cm",
      grupo: "H+",
      estado: "Bueno",
      alergias: "Ninguna"
    }

  return (

    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1><p>
          Eol Solutions
        </p></h1> 
       {/*Cargar component*/}

      <div className='Componentes'>
      <hr/>
      <EventosComponente />
      <hr/>
       <MiComponent/>
       <hr/>
       <MiComponent2/>
       <hr/>
       <MiComponent3 nombre="alex" apellidos="Carvajal" ficha= {ficha_m} />
      </div>
      <hr/>
       {
       /*<MiComponent/>
       <MiComponent/>
       <MiComponent/>
       */}
      </header>
     
    </div>
  );
}

export default App;

import logo from './Logo.png';
import './App.css';
import MiComponent from './MiComponent';
import Navbar from './Navbar';

function App() {

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
      {/*<EventosComponente />*/}
       <MiComponent/>
       {/*<MiComponent2/>+}
      
      {/**<MiComponent3 nombre="alex" apellidos="Carvajal" ficha= {ficha_m} /> */} 
      </div>
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

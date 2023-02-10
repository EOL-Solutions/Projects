//rafc Para crear el componente
import React from 'react'

export const EventosComponente = () => {
  const DasClick=(e,nombre)=>{
    alert("has dado click " +nombre);
  }
  function Dobleclick(e){
    console.log("Has dado dobleclick")
  }
  const HasEntrado = (e,accion) =>{
    console.log("Has "+accion+" a la caja con el mouse")
  }

  const estasDentro = e =>{
    console.log("Estas dentro del input");
  }

  const estasFuera = e =>{
    console.log("Estas fuera del input");
  }

  return (
    <div>
        <h1>EventosComponente en react</h1>
        {/*Evento click si se da click se debe ejecutar algo*/}
     {/*  <button onClick={()=>{
          console.log("Hola, soy un click");
        }}> Dame  Click</button>*/}  
        <p>
        <button onClick={e =>DasClick(e,"Alex")}>Dame Click</button>
        </p>
        <p>
        <button onDoubleClick={Dobleclick}>Dame DobleClick</button>
        </p>

        <div id="caja" 
        onMouseEnter={ e=>HasEntrado(e,"entrado") }
        onMouseLeave={ e=>HasEntrado(e,"salido") }
        >
          {/* Evento onMouseEnter OnMouseLeave*/}
          Pasa por encima!!
        </div>

        <p>
          {/* Evento focus y blur */}
          <input type="text" 
          onFocus={ estasDentro } 
          onBlur={ estasFuera }
          placeholder="Introduce tu nombre..." />
        </p>

    </div>
  )
}

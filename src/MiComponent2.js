import React from "react";


export const MiComponent2 = () =>{

    const libros = ["Harr", "GOT", "CC"]
    //const libros =["hp"]
    return(
    <div className="SegundoComponente">
       <h1>Listado de libros</h1>
         {/* <ul>
        
             <li>
             {libros[0]}
         </li>
         <li>
             {libros[1]}
         </li>
         <li>
             {libros[2]}
         </li>
    */} 
        {libros.length >= 1 ? (
            <ul>
            {
            libros.map((libros, indice) => {
                return <li key={indice}>{libros}</li>;
            })
            }
        </ul>)
          :(
        <p>no hay libros</p>)
    }

    </div>
    )
}


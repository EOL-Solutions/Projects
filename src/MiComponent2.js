import React from "react";


export const MiComponent2 = () =>{

    const libros = ["Harr", "GOT", "CC"]
    //const libros =["hp"]
    return(
    <div className="SegundoComponente">
       <h1>Listado de libros</h1>
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


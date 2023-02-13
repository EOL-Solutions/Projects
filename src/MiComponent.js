//Crear un componente 
//Primero se importan los modulos de react /dependencias
import React  from "react";
//funcion del component

const MiComponent = () =>{

   /* let nombre = "alex";
    let ciudad = "Popayan" 
    */
   let usuario ={
        nombre: "alex",
        apellidos: "carvajal",
        ciudad: "popayan"

    }

    return (
        <div className="MiComponent">
    <h2>Componente creado</h2>
    <h3>Datos  Usuario</h3>
    <ul>
        <li>
            nombre: <strong>{usuario.nombre}</strong>
        </li>
        <li>
            Apellidos:<strong>{usuario.apellidos}</strong>
        </li>
        <li>
            Ciudad: <strong>{usuario.ciudad}</strong>
        </li>
    </ul>

        </div>
    );
}
//exportar
export default MiComponent;
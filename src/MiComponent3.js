import React from 'react'
/*import PropTypes from 'prop-types'*/


export const MiComponent3 = (props) => { //Propiedad que permite recibir datos entre componentes
//export const MiComponent3 = (nombre, apellido, ficha) =>{
//console.log(props )

  return (
    <div>
        <h1>Comunicación entre componentes</h1>
        <ul>
            <li>
                {props.nombre}
            </li>
            <li>
                {props.apellidos}
            </li>
            <li>
                {props.ficha.grupo}
            </li>
            <li>
                {props.ficha.estado}
            </li>
        </ul>
    </div>

  )
}

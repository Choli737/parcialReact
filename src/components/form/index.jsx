import React, { useState } from 'react'
import { Card } from './Card'

export const Form = ({onChange}) => {

    const [apellido, setApellido] = useState('')

    const handlerChange = (e) => {
        
        console.log("handlerChange: ", e);
        if (e.target.value.length < 3) {
            alert("Por favor chequea que la información sea correcta");
        }

        setApellido(e.target.value);

    }

    return (
        <form>

                <h1>Formulario Mascotas</h1>
                <input
                id="apellido"
                name="apellido"
                value={apellido}
                onChange={handlerChange}
                placeholder="Ingresar apellido"
                /> 
        
                <input
                id="nombre"
                name="nombre"
                placeholder="Ingresar nombre"
                /> 

                <input  id="mascota"
                name="mascota"
                placeholder="Ingresar nombre mascota"/> 

                <button type='submit'>Enviar</button>

         
        </form>
    )
}
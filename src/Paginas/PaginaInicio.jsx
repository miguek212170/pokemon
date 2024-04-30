import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { colocarEntrenador } from '../tienda/rodaja/entrenador.rodaja';
import { useNavigate } from 'react-router-dom';

const PaginaInicio = () => {

    const despachar = useDispatch();

    const navegar = useNavigate();

    const textInput = useRef();

    const manejadorEnviar = (evento) =>{
        evento.preventDefault(); 
        despachar(colocarEntrenador(textInput.current.value.trim())) 
        textInput.current.value = "" ;
        navegar("/pokedex");
    }

  return (
    <div>
       <h1>Hola entrenador</h1>
       <h2>Para empezar dime tu nombre</h2>
        <form onSubmit={manejadorEnviar}>
            <input ref={textInput} type = "text"/>
            <button>Inicio</button>
        </form>
    </div>
  )
}

export default PaginaInicio;
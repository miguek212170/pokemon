import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'

const PokeSelect = ({colocarSelectorValue}) => {

    const [tipos, obtenerTipos] = useFetch()

    

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/type/";
        obtenerTipos(url)
    }, [])

    const seleccionOpcion = useRef();
    
    const manejadorCambio = () => {
        colocarSelectorValue(seleccionOpcion.current.value);
    }

  return (
   <select ref={seleccionOpcion} onChange={manejadorCambio}>
        <option value="">Todos los pokemones</option>
        {
            tipos?.results.map(tipo =>(
                <option key={tipo.url} value={tipo.url}>
                    {tipo.name}
                </option>
            ))
        }
   </select>
  )
}

export default PokeSelect;
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import "./styles/pokedex.css"
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokedex/PokeCard';
import PokeSelect from '../components/pokedex/PokeSelect';

const Pokedex = () => {

  const [selectorValue, colocarSelectorValue] = useState("");

  const [inputValue, colocarInputValue] = useState("");

  const [pokemones, obtenerPokemones, obtenerTipo] = useFetch();

  const entrenador = useSelector(tienda => tienda.entrenador);

  useEffect(() => {

    if (selectorValue) {
      obtenerTipo(selectorValue);
    } else {

      const url = "https://pokeapi.co/api/v2/pokemon?limit=50";
      obtenerPokemones(url);
    }



  }, [selectorValue])

  const textInput = useRef();

  const manejadorEntrada = (evento) => {
    evento.preventDefault();
    colocarInputValue(textInput.current.value.toLowerCase().trim());
    textInput.current.value = "";
  }

  console.log(pokemones)

  const pokeBusqueda = (poke) => {
    const porNombre = poke.name.includes(inputValue)
    return porNombre
  }

  return (
    <section className='pokedex'>
      <h2 ><span className='pokedex__titulo'>Bienvenido {entrenador},</span> aqui puedes encontrar tu pokemon favorito</h2>
      <div>
        <form onSubmit={manejadorEntrada}>
          <input ref={textInput} type="text" />
          <button>Buscar</button>

        </form>
        <PokeSelect
          colocarSelectorValue={colocarSelectorValue}
        />
      </div>
      <div className='pokeCard__contenedor'>
        {
          pokemones?.results.filter(pokeBusqueda).map((poke) => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Pokedex;
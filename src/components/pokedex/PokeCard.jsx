import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import "./styles/pokeCard.css"
import { useNavigate } from 'react-router-dom';
const PokeCard = ({url}) => {
    

    const [pokemon, obtenerPokemon] = useFetch();

    const navegar = useNavigate();

    useEffect(() => {
        obtenerPokemon(url)
    }, [])

    //console.log(url)

    const manejadorPokemon =()=> {
        navegar(`/pokedex/${pokemon.id}`)
    }
  return (
    <article onClick={manejadorPokemon} className='pokeCard'>
        <div className={`pokeCard__back ${pokemon?.types[0].type.name}`}></div>
        <figure className='pokeCard__img'>
            <img src={pokemon?.sprites.other[`official-artwork`].front_default} alt="pokemonImage" />
            
        </figure>
        <h3 className='pokeCard__nombre'>{pokemon?.name}</h3>
        <ul className='pokeCard__tipos'>
            {
                pokemon?.types.map(tipo => (
                    <li className={`slot${tipo.slot}`}key={tipo.type.url}>{tipo.type.name}</li>
                ))
            }
        </ul>
        <span>Tipo</span>
        <hr />
        <ul className='pokeCard__estadisticas'>
            {
                pokemon?.stats.map(estadistica => (
                    !estadistica.stat.name.includes("-") &&
                    <li key={estadistica.stat.url}><span>{estadistica.stat.name}</span><span>{estadistica.base_stat}</span></li>
                )  )
            }
        </ul>
    </article>
  )
}

export default PokeCard
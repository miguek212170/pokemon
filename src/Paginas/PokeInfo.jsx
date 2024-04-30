import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';

const PokeInfo = () => {

  const parametros = useParams();

  const [pokemon, obtenerPokemon] = useFetch();

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${parametros.id}`;
    obtenerPokemon(url)
  }, [])





  console.log(pokemon)
  return (
    <section>
      <figure>
        <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="pokemon image" />
      </figure>
      <span># {pokemon?.id}</span>
      <h2>{pokemon?.name}</h2>
      <ul>
        <li><span>Peso: </span><span>{pokemon?.weight}</span></li>
        <li><span>Altura: </span><span>{pokemon?.height}</span></li>
      </ul>
      <div>
        <article>
          <h3>Tipo</h3>
          <ul>
            {
              pokemon?.types.map(tipo => (
                <li key={tipo.type.url}>{tipo.type.name}</li>
              ))
            }
          </ul>
        </article>
        <article>
          <h3>Habilidades</h3>
          <ul>
            {
              pokemon?.abilities.map(habilidad => (
                <li key={habilidad.ability.url}>{habilidad.ability.name}</li>
              ))
            }
          </ul>
        </article>
      </div>
      <h2>stats</h2>
      <ul>
        {
          pokemon?.stats.map(parametro => (
            <li key={parametro.stat.url}><span>{parametro.stat.name}</span><span>{parametro.base_stat}</span><div></div><div></div></li>
                       
          ))
        }
      </ul>
      <h2>Movimnientos</h2>
      <ul>
        {pokemon?.moves.map(mover => (
          <li key={mover.move.url}>{mover.move.name}</li>
        ))}
      </ul>
    </section>
  )
}

export default PokeInfo
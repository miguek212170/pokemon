import axios from "axios";
import { useState } from "react"

const useFetch = () => {
    const [apiData, setApiData] = useState();
    const obtenerApi = (url) => {
        axios.get(url)
            .then(respuesta => setApiData(respuesta.data))
            .catch(fallo => console.log(fallo))
    }
    const obtenerTipo = (url) =>{
        axios.get(url)
            .then(respuesta => setApiData({
                results: respuesta.data.pokemon.map(poke => poke.pokemon),
            }))
            .catch(falla => console.log(falla))
    }
    return [apiData, obtenerApi, obtenerTipo]
}

export default useFetch
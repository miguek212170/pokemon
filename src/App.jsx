import './App.css'
import { Route, Routes } from 'react-router-dom'
import PaginaInicio from './Paginas/PaginaInicio'
import Pokedex from './Paginas/Pokedex'
import PokeInfo from './Paginas/PokeInfo'
import RutasProtegidas from './Paginas/RutasProtegidas'

function App() {


  return (
    <>
      <div>
       
        <Routes>
          <Route path="/" element={<PaginaInicio/>}/>
          <Route element={<RutasProtegidas/>}>
            <Route path="/pokedex" element={<Pokedex/>}/>
            <Route path="/pokedex/:id" element={<PokeInfo/>}/>
          </Route>
        </Routes>
      </div>
  
    </>
  )
}

export default App

import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const RutasProtegidas = () => {

    const entrenador = useSelector((tienda)=>tienda.entrenador);

    console.log(entrenador)

    if(entrenador.length > 2){
      return <Outlet/>//renderizar componente pokedex
    }else{
      return <Navigate to="/"/> //quedarse aqui
    }

}

export default RutasProtegidas
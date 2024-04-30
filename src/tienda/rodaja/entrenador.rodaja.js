import { createSlice } from "@reduxjs/toolkit";

const entrenador = createSlice({
    name: "entrenador",
    initialState: "",
    reducers: {
        colocarEntrenador: (_valor, accion) => accion.payload
    }
});

export const {colocarEntrenador} = entrenador.actions

export default entrenador.reducer;
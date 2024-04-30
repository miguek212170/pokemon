import { configureStore } from "@reduxjs/toolkit";
import entrenador from "./rodaja/entrenador.rodaja";

const tienda = configureStore({
    reducer: {
        entrenador,
    }
});

export default tienda;
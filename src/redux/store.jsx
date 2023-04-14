import { configureStore } from '@reduxjs/toolkit';
import pokeReducer from './pokeSlice';
import pokeUrlReducer from './pokeUrlSlice';

export default configureStore({
    reducer: {
        poke: pokeReducer,
        url: pokeUrlReducer
    }
})
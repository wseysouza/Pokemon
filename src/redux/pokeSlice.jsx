import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'poke',
  initialState: {
    detailsPokemon: {},
    isLoading: true
  },
  reducers: {
    changePoke(state, { payload }) {
      return { ...state, isLoading: false, detailsPokemon: payload }
    },

    clearPoke(state) {
      return { ...state, isLoading: true, detailsPokemon: {} }
    }

  }

})

export const { changePoke, clearPoke } = slice.actions;

export const selectPoke = state => state.poke

export default slice.reducer
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'url',
  initialState: {
    url: ''
  },
  reducers: {
    changeUrl(state, { payload }) {
      return { ...state, url: payload }
    },
  }

})

export const { changeUrl } = slice.actions;

export const selectUrl = state => state.url

export default slice.reducer
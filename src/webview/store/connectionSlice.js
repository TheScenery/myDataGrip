import { createSlice } from '@reduxjs/toolkit';

const connectionSlice = createSlice({
  name: 'connection',
  initialState: [],
  reducers: {
    addConnection: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
    },
  },
});

export const { addConnection } = connectionSlice.actions;

export const connectionSelector = state => state.connection;

export default connectionSlice.reducer;
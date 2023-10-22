import { createSlice } from '@reduxjs/toolkit';
import { activeConnection } from '../api';

const connectionSlice = createSlice({
  name: 'connection',
  initialState: [],
  reducers: {
    addConnection: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addConnection } = connectionSlice.actions;

export const createConnection = (config) => async (dispatch) => {
  dispatch(addConnection(config));
  await activeConnection(config);
};

export const connectionSelector = state => state.connection;

export default connectionSlice.reducer;
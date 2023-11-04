import { createSlice } from '@reduxjs/toolkit';
import { activeConnection, execute, saveConnection } from '../api';

const connectionSlice = createSlice({
  name: 'connection',
  initialState: [],
  reducers: {
    addConnection: (state, action) => {
      state.push(action.payload);
    },
    updateConnection: (state, action) => {
      const payload = action.payload;
      return state.map(config => {
        if (config.name === payload.name) {
          return payload;
        }
        return config;
      });
    },
  },
});

export const { addConnection, updateConnection } = connectionSlice.actions;

const loadAllDatabase = (config) => async (dispatch) => {
  const { data } = await execute('show databases;');
  const updatedConnection = {
    ...config,
    databases: data.map(d => ({ name: d.Database })),
  };
  dispatch(updateConnection(updatedConnection));
};

export const createConnection = (config) => async (dispatch) => {
  dispatch(addConnection(config));
  await saveConnection(config);
  await activeConnection(config);
  dispatch(loadAllDatabase(config));
};

export const connectionSelector = state => state.connection;

export default connectionSlice.reducer;
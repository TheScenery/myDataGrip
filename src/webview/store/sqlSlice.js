import { createSlice } from '@reduxjs/toolkit';

export const sqlSlice = createSlice({
  name: 'sql',
  initialState: '',
  reducers: {
    updateSql: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateSql } = sqlSlice.actions;

export default sqlSlice.reducer;
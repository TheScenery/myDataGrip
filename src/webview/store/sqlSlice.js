import { createSlice } from '@reduxjs/toolkit';
import { execute } from '../api';
import { updateData } from './dataSlice';

const sqlSlice = createSlice({
  name: 'sql',
  initialState: '',
  reducers: {
    updateSql: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateSql } = sqlSlice.actions;

export const executeSqlQuery = (sql) => async (dispatch) => {
  dispatch(updateSql(sql));
  const result = await execute(sql);
  console.log(sql, result);
  dispatch(updateData(result));
};

export default sqlSlice.reducer;
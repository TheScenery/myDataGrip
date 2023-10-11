import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    columns: [],
  },
  reducers: {
    updateData: (state, action) => {
      console.log(action.payload);
      const { data, fields } = action.payload;
      state.data = data;
      state.columns = fields;
    },
    clearData: (state) => {
      state.data = [];
      state.columns = [];
    },
  },
});
export const { updateData, clearData } = dataSlice.actions;
export default dataSlice.reducer;
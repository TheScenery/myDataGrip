import { configureStore } from '@reduxjs/toolkit';
import sqlSlice from './sqlSlice';
import dataSlice from './dataSlice';

export default configureStore({
  reducer: {
    sql: sqlSlice,
    data: dataSlice,
  },
});
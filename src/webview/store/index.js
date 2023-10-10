import { configureStore } from '@reduxjs/toolkit';
import sqlSlice from './sqlSlice';

export default configureStore({
  reducer: {
    sql: sqlSlice,
  },
});
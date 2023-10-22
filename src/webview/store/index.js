import { configureStore } from '@reduxjs/toolkit';
import sqlSlice from './sqlSlice';
import dataSlice from './dataSlice';
import connectionSlice from './connectionSlice';

export default configureStore({
  reducer: {
    sql: sqlSlice,
    data: dataSlice,
    connection: connectionSlice,
  },
});
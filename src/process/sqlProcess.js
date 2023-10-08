import { query } from './mysql';

export const executeQuery = async (sql) => query(sql);
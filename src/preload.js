// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron');
import { EXECUTE_SQL } from './event';

contextBridge.exposeInMainWorld('electronAPI', {
  executeSql: (sql) => ipcRenderer.invoke(EXECUTE_SQL, sql),
});
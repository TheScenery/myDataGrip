// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { ACTIVE_CONNECTION, EXECUTE_SQL, LOAD_CONNECTIONS, SEVE_CONNECTION } from './event';

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  executeSql: (sql) => ipcRenderer.invoke(EXECUTE_SQL, sql),
  activeConnection: (config) => ipcRenderer.invoke(ACTIVE_CONNECTION, config),
  saveConnection: (config) => ipcRenderer.invoke(SEVE_CONNECTION, config),
  loadConnections: () => ipcRenderer.invoke(LOAD_CONNECTIONS),
});
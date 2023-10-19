const electronAPI = window.electronAPI;

export const execute = async (sql) => {
  const { result, fields } = await electronAPI.executeSql(sql);
  return {
    data: result,
    fields: fields.map(c => ({ name: c.name })),
  };
};
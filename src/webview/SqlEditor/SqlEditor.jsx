import React from 'react';
import Editor from '@monaco-editor/react';

const SqlEditor = () => {
  const defaultValue = 'SELECT * FROM t_user;';
  const onChange = (val) => {
    console.log(val);
  };
  return (
      <div>
        <Editor height="50vh" defaultLanguage="sql" defaultValue={defaultValue}
                theme="vs-dark" onChange={onChange}/>
      </div>
  );
};

export default SqlEditor;
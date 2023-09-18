import React from 'react';
import SqlEditor from './SqlEditor/SqlEditor';
import ResultViewer from './ResultViewer/ResultViewer';

const App = () => {
  return (
      <div>
        <SqlEditor/>
        <ResultViewer/>
      </div>
  );
};

export default App;
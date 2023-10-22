import React from 'react';
import ResultViewer from '../ResultViewer/ResultViewer';
import SqlEditor from '../SqlEditor/SqlEditor';
import { useSelector } from 'react-redux';
import { connectionSelector } from '../store/connectionSlice';

export const MainContent = () => {
  const connections = useSelector(connectionSelector);
  return (
      <>
        <SqlEditor connection={connections[0]}/>
        <ResultViewer/>
      </>
  );
};
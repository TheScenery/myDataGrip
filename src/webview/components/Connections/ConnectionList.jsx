import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { connectionSelector } from '../../store/connectionSlice';
import { Tree } from 'antd';

const CONNECTION_KEY_PREFIX = 'connection--';
const DATABASE_KEY_PREFIX = 'database--';

const Container = styled.div`
  .connection-container {
    background-color: var(--main-bg-color);
    color: var(--main-text-color);
  }
`;

const buildTreeData = (connections) => connections.map(connection => ({
  title: connection.name,
  key: CONNECTION_KEY_PREFIX + connection.name,
  children: connection.databases?.map(database => ({
    title: database.name,
    key: DATABASE_KEY_PREFIX + database.name,
  })),
}));
export const ConnectionList = () => {
  const connections = useSelector(connectionSelector);

  const handleOnSelect = (selectedKeys) => {
    console.log(selectedKeys);
  };

  return (
      <Container>
        <Tree className='connection-container' treeData={buildTreeData(connections)} onSelect={handleOnSelect}/>
      </Container>
  );
};
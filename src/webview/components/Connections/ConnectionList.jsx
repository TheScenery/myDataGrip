import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { connectionSelector } from '../../store/connectionSlice';

const Container = styled.div`
  color: white;
`;
export const ConnectionList = () => {
  const connections = useSelector(connectionSelector);
  return (
      <Container>
        {connections.map(connection => (
            <div key={connection.host + connection.port}>
              {connection.name}
            </div>
        ))}
      </Container>
  );
};
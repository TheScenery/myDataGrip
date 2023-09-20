import React from 'react';
import styled from 'styled-components';
import {theme} from '../../globalConfig';

const Container = styled.div`
  display: flex;
  padding: 0 8px;
  align-items: center;
  height: ${theme.components.Layout.headerHeight}px;
  color: white;
  background-color: #3d4454;
`;

export const DatabaseTitle = () => {
  return (
      <Container>Database Explore</Container>
  );
};
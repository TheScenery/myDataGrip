import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem;
  font-size: 1rem;

  &:hover {
    background-color: #4c4c54;
  }
`;
export const Icon = ({ children, onClick }) => {
  return (
      <Container onClick={onClick}>
        {children}
      </Container>
  );
};
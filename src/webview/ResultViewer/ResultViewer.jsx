import React from 'react';
import { Empty } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  height: 40vh;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ResultViewer = () => {
  return (
      <Container>
        <Empty/>
      </Container>
  );
};

export default ResultViewer;
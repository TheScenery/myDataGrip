import React from 'react';
import { Table } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.div`

`;

const ResultViewer = () => {
  const { data, columns } = useSelector(state => state.data);

  const tableColumns = columns.map(c => ({ key: c.name, dataIndex: c.name, title: c.name }));

  return (
      <Container>
        <Table columns={tableColumns} dataSource={data} scroll={{ x: '100%' }}/>
      </Container>
  );
};

export default ResultViewer;
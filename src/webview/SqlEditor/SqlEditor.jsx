import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Layout } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Icon } from '../components/Icon/Icon';
import { useDispatch } from 'react-redux';
import { executeSqlQuery, updateSql } from '../store/sqlSlice';

const { Header } = Layout;

const Container = styled.div`
  .editor-header {
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
  }

  .execute-icon {
    color: green;
  }
`;

const SqlEditor = () => {
  const [text, setText] = useState('SELECT * FROM t_user;');
  const dispatch = useDispatch();
  const onChange = (val) => {
    setText(val);
  };
  const execute = () => {
    dispatch(executeSqlQuery(text));
  };

  return (
      <Container>
        <Layout>
          <Header className="editor-header">
            <Icon onClick={execute}>
              <CaretRightOutlined className="execute-icon"/>
            </Icon>
          </Header>
          <Editor height="50vh" defaultLanguage="sql"
                  theme="vs-dark" value={text} onChange={onChange}
                  options={{ minimap: { enabled: false } }}/>
        </Layout>
      </Container>
  );
};

export default SqlEditor;
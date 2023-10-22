import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Dropdown, Layout, Space } from 'antd';
import { CaretRightOutlined, DownOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Icon } from '../components/Icon/Icon';
import { useDispatch } from 'react-redux';
import { executeSqlQuery } from '../store/sqlSlice';

const { Header } = Layout;

const Container = styled.div`
  .editor-header {
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    justify-content: space-between;
  }

  .execute-icon {
    color: green;
  }

  .db-select-dropdown {
    color: var(--main-text-color);
  }
`;

const SqlEditor = ({ connection }) => {
  const [text, setText] = useState('SELECT * FROM t_user;');
  const dispatch = useDispatch();
  const onChange = (val) => {
    setText(val);
  };
  const execute = () => {
    dispatch(executeSqlQuery(text));
  };

  const items = connection?.databases?.map(database => ({
    label: database.name,
    key: database.name,
  }));

  return (
      <Container>
        <Layout>
          <Header className="editor-header">
            <div>
              <Icon onClick={execute}>
                <CaretRightOutlined className="execute-icon"/>
              </Icon>
            </div>
            <div>
              <Dropdown trigger={['click']} menu={{ items }} className='db-select-dropdown'>
                <Space>
                  {connection && connection.database || 'no select db'}
                  <DownOutlined/>
                </Space>
              </Dropdown>
            </div>
          </Header>
          <Editor height="50vh" defaultLanguage="sql"
                  theme="vs-dark" value={text} onChange={onChange}
                  options={{ minimap: { enabled: false } }}/>
        </Layout>
      </Container>
  );
};

export default SqlEditor;
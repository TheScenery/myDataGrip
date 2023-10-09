import React from 'react';
import SqlEditor from './SqlEditor/SqlEditor';
import ResultViewer from './ResultViewer/ResultViewer';
import { ConfigProvider, Layout } from 'antd';
import { theme } from './globalConfig';
import { DatabaseTitle } from './components/DatabaseTitle/DatabaseTitle';
import { MenuToolbar } from './components/MenuToolBar/MenuToolbar';
import styled from 'styled-components';

const { Sider, Content } = Layout;

const App = ({ className }) => {
  return (
      <ConfigProvider theme={theme}>
        <Layout hasSider className={className}>
          <Sider>
            <DatabaseTitle/>
            <MenuToolbar/>
          </Sider>
          <Content className='content-container'>
            <SqlEditor/>
            <ResultViewer/>
          </Content>
        </Layout>
      </ConfigProvider>
  );
};

export default styled(App)`
  .content-container{
    display: flex;
    flex-direction: column;
  };
`;
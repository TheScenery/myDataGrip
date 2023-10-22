import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import { theme } from './globalConfig';
import { DatabaseTitle } from './components/DatabaseTitle/DatabaseTitle';
import { MenuToolbar } from './components/MenuToolBar/MenuToolbar';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';
import { ConnectionList } from './components/Connections/ConnectionList';
import { MainContent } from './views/MainContent';

const { Sider, Content } = Layout;

const App = ({ className }) => {

  return (
      <Provider store={store}>
        <ConfigProvider theme={theme}>
          <Layout hasSider className={className}>
            <Sider>
              <DatabaseTitle/>
              <MenuToolbar/>
              <ConnectionList/>
            </Sider>
            <Content className="content-container">
              <MainContent/>
            </Content>
          </Layout>
        </ConfigProvider>
      </Provider>
  );
};

export default styled(App)`
  .content-container {
    display: flex;
    flex-direction: column;
  }
`;
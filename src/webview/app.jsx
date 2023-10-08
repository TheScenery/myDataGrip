import React from 'react';
import SqlEditor from './SqlEditor/SqlEditor';
import ResultViewer from './ResultViewer/ResultViewer';
import { ConfigProvider, Layout } from 'antd';
import { theme } from './globalConfig';
import { DatabaseTitle } from './components/DatabaseTitle/DatabaseTitle';
import { MenuToolbar } from './components/MenuToolBar/MenuToolbar';

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  return (
      <ConfigProvider theme={theme}>
        <Layout hasSider>
          <Sider>
            <DatabaseTitle/>
            <MenuToolbar/>
          </Sider>
          <Layout>
            <Header></Header>
            <Layout>
              <Content>
                <SqlEditor/>
                <ResultViewer/>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </ConfigProvider>
  );
};

export default App;
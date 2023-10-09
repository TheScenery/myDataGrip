import React from 'react';
import SqlEditor from './SqlEditor/SqlEditor';
import ResultViewer from './ResultViewer/ResultViewer';
import { ConfigProvider, Layout } from 'antd';
import { theme } from './globalConfig';
import { DatabaseTitle } from './components/DatabaseTitle/DatabaseTitle';
import { MenuToolbar } from './components/MenuToolBar/MenuToolbar';

const { Sider, Content } = Layout;

const App = () => {
  return (
      <ConfigProvider theme={theme}>
        <Layout hasSider>
          <Sider>
            <DatabaseTitle/>
            <MenuToolbar/>
          </Sider>
          <Content>
            <SqlEditor/>
            <ResultViewer/>
          </Content>
        </Layout>
      </ConfigProvider>
  );
};

export default App;
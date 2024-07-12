import { Layout } from '@douyinfe/semi-ui';
import './style/App.css';

function App() {
  const { Header, Sider, Content } = Layout;

  const commonStyle = {
    height: 64,
    lineHeight: '64px',
    background: 'var(--semi-color-fill-0)'
  };
  return (
      <Layout className="container">
          <Header style={commonStyle}>Header</Header>
          <Layout>
              <Sider style={{ width: '120px', background: 'var(--semi-color-fill-2)' }}>Sider</Sider>
              <Content style={{ height: 300, lineHeight: '300px' }}>Content</Content>
              <Sider style={{ width: '120px', background: 'var(--semi-color-fill-2)' }}>Sider</Sider>
          </Layout>
      </Layout>
  );
}

export default App

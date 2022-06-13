import {
  DesktopOutlined,
  DollarCircleFilled,
  ShopFilled,
  ShoppingFilled,
  UserOutlined,
  UnorderedListOutlined,
  HomeOutlined
} from '@ant-design/icons';
import {  Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import Users from './Features/Users';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


const items = [
  // getItem('', '0', ),
  getItem((<><span>Dashboard</span> <Link to="/" /></>), '1', <HomeOutlined />),
  getItem('Products', '2', <DesktopOutlined />),
  getItem('Categories', '3', <UnorderedListOutlined />),
  getItem('Orders', '4', <ShoppingFilled />),
  getItem('Sellers', '5', <ShopFilled />),
  getItem((<><span>Users</span> <Link to="/users" /></>), '6', <UserOutlined />),
  getItem('Transactions', '7', <DollarCircleFilled />),


  // getItem('User', 'sub1', <UserOutlined />, [
  //   getItem('Tom', '3'),
  //   getItem('Bill', '4'),
  //   getItem('Alex', '5'),
  // ]),
  // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  // getItem('Files', '9', <FileOutlined />),
];
const LayoutAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >

              <Route exact path="/" component={Home} />
              <Route path="/users" component={Users} />
        
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutAdmin
import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  ShoppingFilled,
  UnorderedListOutlined,
  DesktopOutlined,
  ShopFilled,
  DollarCircleFilled,
  TeamOutlined,
} from '@ant-design/icons';
import { Link,useLocation  } from 'react-router-dom';
const { Sider } = Layout;
const SideMenu = () => {
    const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const onCollapse = (collapsed) => setCollapsed(collapsed);
 
  const menuItems = [
    {
      key: '/',
      icon:  <HomeOutlined /> ,
      label: (<> <span>Home</span>
              <Link to="/"></Link></>)
    },
    {
      key: '/products',
      icon:  <DesktopOutlined /> ,
      label: (<> <span>Products</span>
      <Link to="/products"></Link></>)
    },
    {
      key: '/categories',
      icon:  <UnorderedListOutlined /> ,
      label: (<> <span>Categories</span>
      <Link to="/categories"></Link></>)
    },
    {
      key: '/orders',
      icon:  <ShoppingFilled /> ,
      label: (<> <span>Orders</span>
      <Link to="/orders"></Link></>)
    },{
      key: '/sellers',
      icon:  <ShopFilled /> ,
      label: (<> <span>Sellers</span>
      <Link to="/sellers"></Link></>)
    },
    {
      key: '/transactions',
      icon:  <DollarCircleFilled /> ,
      label: (<> <span>Transactions</span>
      <Link to="/transactions"></Link></>)
    },
    {
      key: '/users',
      icon:  <TeamOutlined /> ,
      label: (<> <span>Users</span>
      <Link to="/users"></Link></>)
    }
  ];
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} 
    style={{marginBottom: '25px'}}
    
    >
    <div className="logo" />
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[location.pathname]}
      items={menuItems}
    >
    </Menu>
  </Sider>
  )
}

export default SideMenu
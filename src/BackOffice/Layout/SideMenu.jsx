import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import {
  HomeOutlined
} from '@ant-design/icons';
import { Link,useLocation  } from 'react-router-dom';
const { Sider } = Layout;
const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  const onCollapse = (collapsed) => setCollapsed(collapsed);
 
  const menuItems = [
    {
      key: '/',
      icon:  <HomeOutlined /> ,
      label: (<> <span>Dashboard</span>
              <Link to="/"></Link></>)
    },
   
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
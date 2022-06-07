import { Layout } from 'antd'
import React from 'react'
import Footer from './Footer';
import SideMenu from './SideMenu'
const { Content } = Layout;
const index = ({children}) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
    <SideMenu />
    <Layout>
      <Content style={{ margin: '20px 16px' }}>{children}</Content>
      <Footer/>
    </Layout>
  </Layout>
  )
}

export default index
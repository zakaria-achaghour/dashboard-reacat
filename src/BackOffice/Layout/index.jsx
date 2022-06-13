import { Layout } from 'antd'
import React from 'react'
import Footer from './Footer';
import SideMenu from './SideMenu'
const { Content,Header } = Layout;

const index = ({children}) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
    <SideMenu />
    <Layout>
      <Header className="site-layout-background" style={{ padding: 0 }} />
        {/* <Suspense fallback={ <Skeleton />}> */}
          <Content style={{ margin: '20px 16px' }}>
              
              {children}
                
          </Content>
        {/* </Suspense> */}
      <Footer/>
    </Layout  >
  </Layout>
  )
}

export default index
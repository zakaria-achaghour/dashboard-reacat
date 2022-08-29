import { Col, Layout, Row, Typography } from 'antd'
import React from 'react'
import Footer from './Footer';
import SideMenu from './SideMenu'
const { Content,Header } = Layout;
const { Title } = Typography;

const index = ({children}) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
    <SideMenu />
    <Layout>
      <Header className="site-layout-background" style={{ padding: 0 }} >
        <Row>
          <Col span={12} offset={10}>
          <Title level={3} style={{ color: 'orange', marginTop: '10px'}} className='font-link'>
              FLYER . MA
          </Title> 
          </Col>
        </Row>
             
      </Header>
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
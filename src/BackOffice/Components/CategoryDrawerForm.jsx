import { Button, Col, Drawer, Form, Input, Row,  Space } from 'antd';
import React from 'react'

const CategoryDrawerForm = ({showDrawer,setShowDrawer}) => {
  const onClose  = () =>setShowDrawer(false);
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Drawer
    title="Create a new User"
    width={720}
    visible={showDrawer}
    bodyStyle={{
    paddingBottom: 80,
    }}
    extra={
    <Space style={{textAlign: 'center'}}>
        <Button onClick={onClose}>Cancel</Button>
    </Space>
    }>
      <Form layout="vertical"   onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  type: 'string',
                  min: 2
                  // message: 'Please enter name',
                },
              ]}
            >
              <Input placeholder="Please enter name" />
            </Form.Item>
          </Col>
          <Col span={12}>
             <Form.Item style={{marginTop: '30px'}}>
                <Button type="primary" htmlType='submit'>
                  Submit
                  </Button>
              </Form.Item>
          </Col>

          </Row>
         
      </Form>

</Drawer>
  )
}

export default CategoryDrawerForm
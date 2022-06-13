import { Button, Col, Drawer, Form, Input, Row, Select, Space } from 'antd';
import React from 'react'
const { Option } = Select;

const UserDrawerForm = ({showDrawer,setShowDrawer}) => {
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
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  type:'email',
                },
              ]}
            >
              <Input placeholder="Please enter name" />
            </Form.Item>
          </Col>

          </Row>
          <Row >
            <Col span={24}>
              <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                <Select placeholder="Please select gender">
                  <Option value="MALE">Male</Option>
                  <Option value="FEMALE">Female</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item>
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

export default UserDrawerForm
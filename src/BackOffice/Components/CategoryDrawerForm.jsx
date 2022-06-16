import { Button, Col, Drawer, Form, Input, Row,  Space } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
import notify from '../../helpers/Toast';
import {  createCategory } from '../../redux/actions/category.action';

const CategoryDrawerForm = ({showDrawer,setShowDrawer}) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();


  const onClose  = () =>{
    setShowDrawer(false);
    form.resetFields();
  };


  const onFinish = (values) => {
      dispatch(createCategory(values))
        .then(
        (res) => {
              console.log('Success:', res);
              notify('success','Ctageory '+res.data.name+' Created');
              onClose();
          }
          ).catch(
            (err) => {
              notify('error',err.message);
              
            }
            );
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
      <Form layout="vertical"  form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
                },
              ]}
            >
              <Input placeholder='Please enter name'  />
            </Form.Item>
          </Col>
          <Col span={12}>
             <Form.Item style={{marginTop: '30px'}}>
                <Button type="primary" htmlType='submit'>
                Create
                  </Button>
              </Form.Item>
          </Col>

          </Row>
         
      </Form>

</Drawer>
  )
}

export default CategoryDrawerForm
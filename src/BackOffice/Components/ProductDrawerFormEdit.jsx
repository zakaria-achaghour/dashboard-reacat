import { Button, Col, Drawer, Form, Input, InputNumber, Row,  Select,  Space } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import notify from '../../helpers/Toast';
import { getCategories } from '../../redux/actions/category.action';
import { updateProduct } from '../../redux/actions/product.action';

const {TextArea} = Input;
const { Option } = Select;
const ProductDrawerFormEdit = ({showDrawer,setShowDrawer,product}) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.category)
useEffect(() => {
  dispatch(getCategories());
}, [dispatch]);
console.log(product)
useEffect(()=>{
  form.setFieldsValue({...product,category: product?.category?.id})

},[product,form])
  const onClose  = () =>{
    setShowDrawer(false);
    form.resetFields();
  };


  const onFinish = (values) => {
    console.log(values);
      dispatch(updateProduct(product.id,values))
        .then(
        (res) => {
              console.log('Success:', res);
              notify('success','Product '+res.name+' Updated');
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
    title="Update Product"
    width={650}
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
          <Col span={8}>
            <Form.Item
              name="price"
              label="Price"
              rules={[
                {
                  required: true,
                  type: 'float',
                },
              ]}
            >
            <InputNumber min={1} />

            </Form.Item>
          </Col>
          </Row>

          <Row gutter={16}>
          <Col span={16}>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  type: 'string',
                  min: 15
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>
          </Col>
          </Row>
            <Row gutter={16}>
          <Col span={12}>
          <Form.Item
              name="category"
              label="Category"
              rules={[
                {
                  required: true,
                },
              ]}
            >
           
           <Select
              // mode="multiple"
              size={'middle'}
              placeholder="Please select"
              style={{
                width: '100%',
              }}
            >

              { categories.map(category => {
                  return (
                      <Option  key={category.id} value={category.id}>{category.name}</Option>
                  )
               })}
      </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
          <Form.Item
              name="quantity"
              label="Quantity"
              rules={[
                {
                  required: true,
                  type: 'number',
                },
              ]}
            >
              <InputNumber min={0} />
            </Form.Item>
          </Col>
          </Row>
          <Row gutter={16}>
            <Col span={16}>
            <Form.Item
              name="photo"
              label="Photo"
              rules={[
                {
                  required: true,
                  type: 'string',
                },
              ]}
            >
              <Input min={0} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
          <Col span={12}>
             <Form.Item style={{marginTop: '30px'}}>
                <Button type="primary" htmlType='submit'>
                Edit
                  </Button>
              </Form.Item>
          </Col>

          </Row>
         
      </Form>

</Drawer>
  )
}

export default ProductDrawerFormEdit
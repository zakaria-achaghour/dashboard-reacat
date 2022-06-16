import { Breadcrumb, Button, Col, Form, Input, Popconfirm,  Row, Space, Spin, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import {
    PlusOutlined,
    DeleteOutlined,
    EditOutlined,
    CheckOutlined,
    CloseCircleOutlined
  } from '@ant-design/icons';
import CategoryDrawerForm from '../Components/CategoryDrawerForm';
import { useDispatch, useSelector } from 'react-redux';

import { deleteCategory, getCategories,  updateCategory } from '../../redux/actions/category.action';
import notify from '../../helpers/Toast';




const Categories = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const [form] = Form.useForm();

  const { categories, loading } = useSelector((state) => state.category);
  console.log(categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories()).then().catch((error)=>{
      notify('error','Internal Server Error');

    });
  }, [dispatch]);

  const onFinish = (values) => {
    console.log(editRow);
    console.log(values);
      dispatch(updateCategory(editRow,values))
      .then(
      (res) => {
            console.log('Success:', res);
            notify('success','Ctageory '+res.name+' Updated');
            setEditRow(null)
        }
        ).catch(
          (err) => {
            notify('error',err.message);
            
          }
          );
    
    
  };
  const removeCategory = (id) => {
  
    dispatch(deleteCategory(id))
      .then((res) => {
            notify('success','Category Deleted');
          })
     .catch(err => {
      notify('error',err.message);
     })
    
  }
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, category) =>{
        if(editRow === category.id) {
          return (
            <>
                   <Form.Item 
                      name="name"
                      rules={[
                        {
                          required: true,
                          type: 'string',
                          min: 2
                        },
                      ]}
                    >
              <Input   />
            </Form.Item>
            </>
          ) 
        }else{
          return (
            <>
            {text}
            </>
          )
        }
      } 
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, category) =>{
        if(editRow === category.id){
          return (<>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
            <Button htmlType='submit' color='success' size='small' icon={<CheckOutlined size={'small'}/>} ></Button>

            </Col>
            <Col className="gutter-row" span={12}>
            <Button danger size='small' icon={<CloseCircleOutlined  />} onClick={()=> setEditRow(null)} ></Button>

            

            </Col>
            </Row>
          </>)
        }else{
         return (
        
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={12}>
            <Popconfirm
                            placement='topRight'
                            title={`Are you sure to delete ${category.name}?`}
                            onConfirm={() => removeCategory(category.id)}
                            okText="Yes"
                            cancelText="No"
                          >
                            <DeleteOutlined style={{color: 'red'}} shape='round' size={'middle'} />
                </Popconfirm>
            </Col>
            <Col className="gutter-row" span={12}>
           
                <EditOutlined 
                onClick={() => {
                  setEditRow(category.id);
                  form.setFieldsValue({
                    name: category.name
                  })
                }} 
                
                style={{color: 'blue'}} shape='round' size={'meduim'} />
               
            </Col>
            </Row>
             
          )
        }
      } 
    }
  ];
  return (
    <div> 
        <Breadcrumb  style={{ margin: '16px 0',}}>
            <Breadcrumb.Item>Categories</Breadcrumb.Item>
        </Breadcrumb>
        <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}>
              {loading ? (
                 <Space size="middle">
                   <Spin size="large" />
                 </Space>
      ) : (
        <>
                <CategoryDrawerForm showDrawer={showDrawer}   setShowDrawer={setShowDrawer} />
          <Form form={form} onFinish={onFinish}>

           <Table 
                dataSource={categories}
                columns={columns}
                bordered
                title={() =>  <Button onClick={() => {setShowDrawer(!showDrawer);}} type="primary" shape='round' icon={<PlusOutlined />} size={'middle'} />} 
                pagination={{
                  pageSize: 15,
                }}
                scroll={{
                  y: 400,
                }}
                rowKey={(categories) => categories.id}
                rowClassName="editable-row"
                />
                </Form>
                </>
      )}
        </div>
    
    </div>
  )
}

export default Categories
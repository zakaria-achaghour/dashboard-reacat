import { Avatar, Breadcrumb, Button, Col, Form, Image, Input, Popconfirm, Row, Space, Spin, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import notify from '../../helpers/Toast';
import { deleteProduct, getProducts, updateProduct } from '../../redux/actions/product.action';
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  CheckOutlined,
  CloseCircleOutlined
} from '@ant-design/icons';
import ProductDrawerForm from '../Components/ProductDrawerForm';
import ProductDrawerFormEdit from '../Components/ProductDrawerFormEdit';
const { TextArea } = Input;
const Products = () => {
  const [showDrawerEdit, setShowDrawerEdit] = useState(false);
  const [product , setProduct] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const [form] = Form.useForm();

  const { products, loading } = useSelector((state) => state.product);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts()).then().catch((error)=>{
      notify('error','Internal Server Error');

    });
  }, [dispatch]);


  const onFinish = (values) => {
      dispatch(updateProduct(editRow,values))
      .then(
      (res) => {
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
  
    dispatch(deleteProduct(id))
      .then((res) => {
            notify('success','Category Deleted');
          })
     .catch(err => {
      notify('error',err.message);
     })
    
  }


  const columns = [

    {
      title: '',
      dataIndex: 'photo',
      key: 'photo',
      render: (text, product) => (
        <Avatar   
        size={{
          xs: 24,
          sm: 32,
          md: 40,
          lg: 64,
          xl: 80,
          xxl: 100,
        }} 
        src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />}
        
        />
      )
    },
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
     
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    
    },
    {
      title: 'Sold',
      dataIndex: 'sold',
      key: 'sold',
    
    },
    {
      title: 'Category',
      dataIndex: 'category',
      render: (text,product)=>{
        return (
          product.category.name
        )
      }
    
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, product) =>{
        if(editRow === product.id){
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
                            title={`Are you sure to delete ${product.name}?`}
                            onConfirm={() => removeCategory(product.id)}
                            okText="Yes"
                            cancelText="No"
                          >
                            <DeleteOutlined style={{color: 'red'}} shape='round' size={'middle'} />
                </Popconfirm>
            </Col>
            <Col className="gutter-row" span={12}>
           
                <EditOutlined 
                onClick={() => {
                  console.log(product)
                  setShowDrawerEdit(true)
                  setProduct(product)
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
        <Breadcrumb.Item>Products</Breadcrumb.Item>
    </Breadcrumb>
    <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 360,
        }}>
          {loading ? (
             <Space size="large">
               <Spin size="large" />
             </Space>
  ) : (
    <>
            <ProductDrawerForm showDrawer={showDrawer}   setShowDrawer={setShowDrawer} />
            <ProductDrawerFormEdit showDrawer={showDrawerEdit}   setShowDrawer={setShowDrawerEdit} product={product} />
      <Form form={form} onFinish={onFinish}>

       <Table 
            dataSource={products}
            columns={columns}
            bordered
            title={() =>  <Button onClick={() => {setShowDrawer(!showDrawer);}} type="primary" shape='round' icon={<PlusOutlined />} size={'middle'} />} 
            pagination={{
              pageSize: 15,
            }}
            scroll={{
              y: 400,
            }}
            rowKey={(products) => products.id}
            rowClassName="editable-row"
            />
            </Form>
            </>
  )}
    </div>

</div>
  )
}

export default Products
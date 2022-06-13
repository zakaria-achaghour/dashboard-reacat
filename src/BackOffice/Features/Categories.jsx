import { Breadcrumb, Button, Table } from 'antd';
import React, { useState } from 'react'
import {
    PlusOutlined,
  } from '@ant-design/icons';
import CategoryDrawerForm from '../Components/CategoryDrawerForm';
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
    }
  ];
  const dataSource = [
    {
      id: '1',
      name: 'Cat 1'
    },
    {
      id: '2',
      name: 'Cat 2'
    }
  ];
const Categories = () => {
  const [showDrawer, setShowDrawer] = useState(false);

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
                <CategoryDrawerForm showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
           <Table 
                dataSource={dataSource}
                columns={columns}
                bordered
                title={() =>  <Button onClick={() => setShowDrawer(!showDrawer)} type="primary" shape='round' icon={<PlusOutlined />} size={'middle'} />} 
                pagination={{
                  pageSize: 20,
                }}
                scroll={{
                  y: 500,
                }}
                rowKey={(dataSource) => dataSource.id}
                />
        </div>
    
    </div>
  )
}

export default Categories
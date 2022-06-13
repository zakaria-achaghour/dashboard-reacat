import { Breadcrumb, Button,  Table } from 'antd';
import React, { useState } from 'react'
import {
  PlusOutlined,
} from '@ant-design/icons';
import UserDrawerForm from '../Components/UserDrawerForm';
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
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
];
const dataSource = [
  {
    id: '1',
    name: 'Mike',
    email: 'mike@gmail.com',
    gender: 'Male',
  },
  {
    id: '2',
    name: 'John',
    email: 'John@gmail.com',
    gender: 'Female',
  },
  {
    id: '3',
    name: 'John',
    email: 'John@gmail.com',
    gender: 'Female',
  },{
    id: '4',
    name: 'John',
    email: 'John@gmail.com',
    gender: 'Female',
  },{
    id: '5',
    name: 'John',
    email: 'John@gmail.com',
    gender: 'Female',
  },{
    id: '6',
    name: 'John',
    email: 'John@gmail.com',
    gender: 'Female',
  },
];
const Users = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  
  return (
    <div>
        <Breadcrumb  style={{ margin: '16px 0',}}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}>
              <UserDrawerForm showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
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

export default Users
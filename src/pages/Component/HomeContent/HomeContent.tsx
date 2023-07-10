import React, { useState } from 'react';
import styles from './HomeContent.module.css'
import { getDataSource, DataType } from './data';
import { Button, Divider, Dropdown, MenuProps, Modal, Pagination, Popconfirm, Radio, Space, Switch, Table, Tag, Tooltip } from 'antd';
import { ColumnType, ColumnsType } from 'antd/es/table';
import { SearchOutlined, VerticalAlignBottomOutlined, VerticalAlignTopOutlined } from '@ant-design/icons';
import { text } from 'stream/consumers';
import ReportForm from './Components/ReportForm';
const { Column, ColumnGroup } = Table;

let isFilter = true;

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};




function HomeContent() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const [defaultCurrent, setDefaultCurrent] = useState(1);
  
  //关于AE 否 弹框
  const [isAEFModalOpen, setIsAEFModalOpen] = useState(false);
  //关于AE 是 弹框
  const [isAETModalOpen, setIsAETModalOpen] = useState(false);
  
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div onClick={() => { setDropdownIsOpen(false) }}>AE</div>
      ),
    },
    {
      key: '2',
      label: (
        <div onClick={() => { setDropdownIsOpen(false) }}>非AE</div>
      ),
    },
    {
      key: '3',
      label: (
        <div onClick={() => { setDropdownIsOpen(false) }}>全部</div>
      ),
    },
  ];

  const getColumnSearchProps = (): ColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <></>
    ),
  
    filterIcon: (filtered: boolean) => {
      return (
        <div
          className={styles.headerFilterBox} >
          <Button onClick={() => {
            console.log("click-----icon")
            isFilter = !isFilter;
          }} className={styles.headerFilterIcon} type='link' icon={isFilter ? <VerticalAlignTopOutlined /> : <VerticalAlignBottomOutlined />}></Button>
  
        </div>
      )
    },
  
    render: (_, record) => (
      <div onMouseEnter={(e) => e.stopPropagation()}>
        <Button onClick={()=>setIsAETModalOpen(true)} style={{ backgroundColor: '#ee6736', color: 'white' }}>是</Button>
        <Button onClick={()=>setIsAEFModalOpen(true)} style={{ marginLeft: 10 }}>否</Button>
      </div>
    ),
  });
  
  const columns: ColumnsType<DataType> = [
    {
      title: '渠道',
      dataIndex: 'ch_type',
      key: 'ch_type',
      width: 70
    },
    {
      title: '应用',
      dataIndex: 'name',
      key: 'name',
      width: 140,
      align: 'center'
  
  
    },
    {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
      align: 'center',
      render: (_, record) => (
        <Tooltip placement="top" title={record.content} arrow={false}>
          <div>
            {record.content}
          </div>
        </Tooltip>
  
      ),
  
    },
    {
      title: '日期',
      dataIndex: 'created_at',
      key: 'created_at',
      width: 200,
      align: 'center'
    },
    {
      title: 'AI',
      dataIndex: 'isAe',
      key: 'isAe',
      width: 70,
      align: 'center'
    },
    {
      title: '关于AE?',
      dataIndex: 'isAe',
      key: 'isAe',
      width: 200,
      align: 'center',
      ...getColumnSearchProps()
  
    },
  
  ];

  return (
    <div className={styles.contentBox} onClick={() => { setDropdownIsOpen(false) }}>
      <div className={styles.tableBox}>
        <Table id='Table' rowSelection={{
          type: 'checkbox',
        }}
          pagination={{ current: defaultCurrent, hideOnSinglePage: true, style: { display: 'none' } }}
          columns={columns}
          dataSource={getDataSource()}
          scroll={{ x: 0 }}
          onChange={(value) => {
            console.log("Table-onChange==", value)
          }}
          sticky
        />
      </div>
      {/* 待处理图标 */}
      <Dropdown menu={{ items }} placement="top" trigger={['click']}>
        <Tooltip open={isOpen} placement="bottom" title={'点击切换状态'} arrow={false}>
          <div className={styles.pendingBox}
            onMouseEnter={() => { setIsOpen(true) }}
            onMouseLeave={() => { setIsOpen(false) }}
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
              setDropdownIsOpen(true);
            }}
          >待处理</div>
        </Tooltip>
      </Dropdown>
      {/* 分页 */}
      <div className={styles.paginationBox}>
        <div className={styles.pagination}>
          <Pagination
            total={getDataSource().length}
            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
            defaultPageSize={10}
            defaultCurrent={1}
            onChange={(value) => {
              console.log("value====", value);
              setDefaultCurrent(value);
            }}
            onShowSizeChange={(value) => {
              console.log("value====", value);
            }}
          />
        </div>

      </div>
      {/* 关于AE 点击否的对话框 */}
      <Modal 
      closable={false}
      cancelText="取消" 
      okText="确定"   
      open={isAEFModalOpen} 
      onOk={()=>{setIsAEFModalOpen(false)}} 
      onCancel={()=>{setIsAEFModalOpen(false)}}>
        <p>您已经判定此条信息不是药物不良反应信息，点击“确认”按钮系统会将该条信息和您的判定归档；点击“取消”按钮您可以修改您的判定。</p>
      </Modal>
      {/* <Modal 
      style={{overflow:'hidden'}}
      width={'70%'} 
      closable={false}
      cancelText="取消" 
      okText="确定"   
      open={isAETModalOpen} 
      onOk={()=>setIsAETModalOpen(false)} 
      onCancel={()=>setIsAETModalOpen(false)}>
        <ReportForm/>
      </Modal> */}
      <ReportForm open={isAETModalOpen} onCancel={()=>setIsAETModalOpen(false)} />
    </div>
  )
}

export default HomeContent;
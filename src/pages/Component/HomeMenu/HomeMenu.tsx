import React, { useState } from 'react';
import {
  AppstoreOutlined,
  SettingFilled,
  MessageOutlined,
  DatabaseFilled,
  MonitorOutlined,
  
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import styles from './HomeMenu.module.css'
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('鉴定', '1', <MonitorOutlined style={{fontSize:20}}/>),
  getItem('应用', '2', <AppstoreOutlined style={{fontSize:20}}/>),
  getItem('数据', '3', <DatabaseFilled style={{fontSize:20}}/>),

  getItem('会话留存', 'sub1', <MessageOutlined style={{fontSize:20}}/>, [
    getItem('数据看板', '5'),
    getItem('会话管理', '6'),
    getItem('数据导出', '7'),
  ]),

  getItem('设置', '8', <SettingFilled style={{fontSize:20}}/>),
];


function HomeMenu({collapsed}:{collapsed:boolean}){
  
  //纳指 1/3 1/3
  function clickItem(e){
    console.log("clickItem===", e.key);
  }

  return (
    <div className={ collapsed ? styles.menuCollapsed:styles.menu}>
      <Menu style={{fontSize:16}}
        defaultSelectedKeys={['1']}
        inlineCollapsed={collapsed}
        items={items}
        mode="inline"
        onClick={clickItem}
      />
    </div>
  );
}


export default HomeMenu;


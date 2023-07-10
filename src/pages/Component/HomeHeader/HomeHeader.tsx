import { CSSProperties, useState } from "react";
import styles from './HomeHeader.module.css'
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { Image } from 'antd';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    LogoutOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    
    PieChartOutlined,
  } from '@ant-design/icons';
import { log } from "console";

function HomeHeader({collapsed, setCollapsed}:{collapsed:boolean, setCollapsed:any}){
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
        console.log("collapsed=====", collapsed);
      };
     return (
        <>
        <div className={styles.headerBox}>
          <Button type="text" onClick={toggleCollapsed} className={styles.menuButton}>
            {collapsed ? <MenuUnfoldOutlined style={{color:'white', fontSize:20}}/> : <MenuFoldOutlined style={{color:'white', fontSize:20}}/>}
          </Button>
          <label className={styles.aeLogo}>AE Identification</label>
          {/* 还需要登录和图标 
          
            https://ae-identification-dev.s3.cn-north-1.amazon…d9eac23de169d6eacb86cc1f2554799eff95d707cf0b77999
          */}
          
          <Button className={styles.logOut} type="text"  icon={<LogoutOutlined style={{fontSize:20}}/>} size="small" />

          <img className={styles.logoImg} src={require('../../../assets/favicon.png')}></img>
        </div>
        </>
        
     )
}



export default HomeHeader;



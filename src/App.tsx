
import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import HomeMenu from './pages/Component/HomeMenu/HomeMenu';
import HomeHeader from './pages/Component/HomeHeader/HomeHeader';
import HomeContent from './pages/Component/HomeContent/HomeContent';
import TablesTest from './pages/Component/HomeContent/TablesTest';
function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="App">
      <HomeHeader
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <div className="App-content">
        <HomeMenu
          collapsed={collapsed}
        />
        <div className='App-content-list'>
          <HomeContent/>
          {/* <TablesTest/> */}
          {/* <div className='pendingBox'>待处理</div> */}
        </div>
        
      </div>

    </div>
  );
}

export default App;

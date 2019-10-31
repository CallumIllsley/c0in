import React from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './components/menu/Menu'
import OverviewContainer from './components/overview/OverviewContainer';

function App() {
  return (
    <div id='main-container'>
      <Menu />
      <OverviewContainer />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux'

import Menu from './components/menu/Menu'
import OverviewContainer from './components/overview/OverviewContainer';

function App() {

  let currentPage = useSelector(state => state.pageLoaded)

  switch (currentPage) {
     case 'overview': 
        return (
          <div id="mainContainer">
            <Menu/>
            <OverviewContainer />
          </div>
        )
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


import Menu from './components/menu/Menu'
import OverviewContainer from './components/overview/OverviewContainer';
import IncomeContainer from './components/income/IncomeContainer'
import OutgoingsContainer from './components/outgoings/OutgoingsContainer'

function App() {
      let currentPage = useSelector(state => state.pageLoaded)

      switch (currentPage) {
        case 'income':
          return (
            <div id="mainContainer">
              <Menu/>
              <IncomeContainer />
            </div>
          )
          break;
          case 'outgoings': 
            return (
              <div id="mainContainer">
                <Menu/>
                <OutgoingsContainer/>
              </div>
            )
          default: 
            return (
              <div id="mainContainer">
                <Menu/>
                <OverviewContainer />
              </div>
            )
            break;
        }  
  }

export default App;

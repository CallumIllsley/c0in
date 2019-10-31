import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux'


import Menu from './components/menu/Menu'
import OverviewContainer from './components/overview/OverviewContainer';
import IncomeContainer from './components/income/IncomeContainer'

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

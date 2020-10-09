import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import NewComponent from './NewComponentDir/NewComponent'

function App() {
  return (
    <div>
      <NewComponent comment=" this is comment from props"/>
      <NewComponent /> 
      <NewComponent comment='default exclamation'/> 
      <NewComponent comment='10 exclamations' excitement={10} /> 
    </div>
  );
}

export default App;

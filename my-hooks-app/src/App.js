import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import NewComponent from './NewComponentDir/NewComponent'
import NewStateComponent from './NewComponentDir/NewStateComponent'
import Cart from './CartHelpers/Cart'

// always at top-most component
// Normally, api is used to get it
var data = [
  {'id': 1, name:  'Apple', qty: 3, price: 100},
  {'id': 2, name:  'Mango', qty: 7, price: 60},
  {'id': 3, name: 'Banana', qty: 3, price: 50},
] // note: `id` is used to supress an error


function App() {
  return (
    <div>
      <NewComponent comment=" this is comment from props"/>
      <NewComponent /> 
      <NewComponent comment='default exclamation'/> 
      <NewComponent comment='10 exclamations' excitement={10} />
      <NewStateComponent/> 
      <NewStateComponent step={5}/> 

      <Cart data={data}/>

    </div>
  );
}

export default App;

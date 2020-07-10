import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent.js';
import CounterContext from './CounterContext.js';

function App() {
  //let [count,SetCount]=useState(15);
  let countState=useState(1);
  return (
   
    <CounterContext.Provider value={countState}>
     <div>
     <Parent name="Iram"/>
     </div>
    </CounterContext.Provider>
   
  );
}

export default App;

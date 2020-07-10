import React,{useContext} from 'react';
import CounterContext from './CounterContext.js';


const Child=(props)=>{
    let counterValue=useContext(CounterContext);
    console.log(counterValue);
    return (
        <div>
        <h3>This is done by using Context</h3>
        <h4>Value is: {counterValue[0]} </h4>
        <br/>
        <button onClick={()=>{counterValue[1](++counterValue[0])}}>Update Context Value</button>
        </div>
    )
    }
  
export default Child 
import React,{useContext} from 'react';
import CounterContext from './CounterContext.js';


const Child=(props)=>{
    let counterValue=useContext(CounterContext);
    console.log(counterValue);
    return (
        <div>
        <h1>I am child</h1>
        <h3>I am {props.name}</h3>
        <h4>Counter Value is: {counterValue[0]} years old</h4>
        <br/>
        <button onClick={()=>{counterValue[1](++counterValue[0])}}>Update Context Value</button>
        </div>
    )
    }
  
export default Child 
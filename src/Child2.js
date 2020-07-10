import React,{useReducer} from 'react';
import CounterReducer from './CounterReducer';

const Child2=()=>{
    let [state,dispatch]=useReducer(CounterReducer,0);
    console.log(state);
    return (
<div>
<h3>This is done by using Reducer</h3>
    <h4>Value of reducer {state}</h4>
    <button onClick={()=>dispatch("INCREMENT")}>Increment value of reducer</button>
    <br/>
    <br/>
    <button onClick={()=>dispatch("DECREMENT")}>Decrement value of reducer</button></div>

    )
}
export default Child2
import React, {useReducer} from 'react';
import {initialState,reducer} from "./store"
function UseReducer(props:any) {
    const [state,dispatch]=useReducer(reducer,initialState)
    const add=()=>{
        dispatch({
            type:'add',
            payload:10,
        })
    }


    return (
        <div>
            <h1>学习useReducer</h1>
            <h2>{state.num}</h2>
            <button onClick={add}>+10</button>
        </div>
    );
}

export default UseReducer;
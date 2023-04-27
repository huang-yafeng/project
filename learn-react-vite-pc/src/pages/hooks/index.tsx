import React, { useEffect, useState } from 'react';
import UseReducer from "./useReducer";
function Hooks(props: any) {
    const { } = props;
    const [num, setnum] = useState(10)
    const add = () => {
        setnum(num + 100)
        console.log(num, 'num')
    }
    useEffect(() => {
        console.log(num, '解决异步获取num');
    }, [num])
    return (
        <div>
            <UseReducer />
            <h2>{num}</h2>
            <button onClick={add}>+100</button>
        </div>
    );
}

export default Hooks;
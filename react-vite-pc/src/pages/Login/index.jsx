// import './ThreeMap.css';
import React, { useEffect, useState } from 'react';

function ThreeMap() {
    const [num, setNum] = useState(1)

    const add = () => {
        setNum(num + 1); setNum(num + 1); setNum(num + 1)
        console.log(num, 'num');
    }
    console.log(num, '同步更新');

    useEffect(() => {
        console.log('页面加载完成');
    }, [])


    return (
        <div id='container'>
            首页
            <h1>{num}</h1>
            <button onClick={add}>+1</button>
        </div>
    )
}
export default ThreeMap;

import React, {useState} from "react";
import {connect} from "react-redux"
import userAction from "@/action/userAction";
import {Button, Tabs} from 'antd';
import type {TabsProps} from 'antd';

import Login from "./component/Login";
import Register from "./component/Register";

import './index.scss'


function Mine(props: any) {
    const [activeKey, selectiveKey] = useState('1');
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `登录`,
            children: <Login/>,
        },
        {
            key: '2',
            label: `注册`,
            children: <Register/>,
        }
    ];

    const onChange = (key: any) => {
        selectiveKey(key)
    }

    return (
        <div className={'mine'}>
            <Tabs defaultActiveKey="1" activeKey={activeKey} items={items} onChange={onChange}/>
        </div>
    )
}

const mapStateToProps = ((state: any) => ({...state}))
const mapDispatchToProps = {
    add: userAction.add
}

export default connect(mapStateToProps, mapDispatchToProps)(Mine);
import React, {useRef, useState} from "react";
import {connect} from "react-redux"
import userAction from "@/action/userAction";
import {Button, Tabs} from 'antd';
import type {TabsProps} from 'antd';

import OneTable from "./component/oneTable";
import TwoTable from "./component/twoTable"
import ThreeTable from "./component/threeTable"
import FourTable from "./component/fourTable";
import './index.scss'


function Mine(props: any) {
    const [activeKey, selectiveKey] = useState('1');
    const oneRef=useRef(null);
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `基本设置`,
            children: <OneTable ref={oneRef}/>,
        },
        {
            key: '2',
            label: `赠品设置`,
            children: <TwoTable/>,
        },
        {
            key: '3',
            label: `风险设置`,
            children: <ThreeTable/>,
        },
        {
            key: '4',
            label: `检查与发布`,
            children: <FourTable/>,
        }
    ];
    const next = () => {
        let page = Number(activeKey)
        if (page > 0 && page < 5) {
            selectiveKey(String(page + 1));
        }
        if (page === 4) {
            selectiveKey('4')
        }
    }
    const previous = () => {
        let page = Number(activeKey);
        if (page <= 4 && page > 0) {
            selectiveKey(String(page - 1))
        }
        if (page === 1) {
            selectiveKey('1');
        }
    }
    const onChange = (key: any) => {
        selectiveKey(key)
    }
    const submit_draft=()=>{
        console.log('提交草稿')
        const data:any=submitTable(oneRef).query();
        console.log(data,'data')
    }
    const submit=()=>{
        console.log('提交数据')
    }

    const submitTable=(target:any)=>{
       if(target.current){
           return target.current
       }
       return null;
    }

    return (
        <div className={'mine'}>
            <Tabs defaultActiveKey="1" activeKey={activeKey} items={items} onChange={onChange}/>
            <div className={'bottom'}>
                <div className={'left'}>
                    {activeKey === "1" ? false :
                        <Button type="primary" style={{marginRight: "10px"}} onClick={previous}>上一页</Button>}
                    <Button onClick={submit_draft}>草稿</Button>
                </div>
                <div className={'right'}>
                    {activeKey === '4' ? false :
                        <Button type="primary" style={{marginRight: "10px"}} onClick={next}>下一页</Button>}
                    {activeKey === '4' ? <Button onClick={submit}>提交</Button> : false}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ((state: any) => ({...state}))
const mapDispatchToProps = {
    add: userAction.add
}

export default connect(mapStateToProps, mapDispatchToProps)(Mine);
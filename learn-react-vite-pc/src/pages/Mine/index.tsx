import React from "react";
import {connect} from "react-redux"
import userAction from "@/action/userAction";
function Mine(props:any){
    console.log(props,'props')
    const add=()=>{
        const params=[
            {
                id:1,
                msg:"redux1"
            },
            {
                id:2,
                msg:"redux2"
            }
        ]
        props.add(params);
    }
    return (
        <div>
            Mine;
            <button onClick={add}>添加数据</button>
        </div>
    )
}

const mapStateToProps=((state:any)=>({...state}))
const mapDispatchToProps={
    add:userAction.add
}

export default connect(mapStateToProps,mapDispatchToProps)(Mine);
import React from "react";
import { connect } from "react-redux"
import { Button, Space } from "antd"

import { add, query } from "../../action/userAction"
import userModel from "../../server/userServer"
import './index.less'

function Login(props: any) {

    const getAdd =async () => {
        const {data}=await userModel.query({})
        console.log(data,'data');
        
    }

    return (
        <div>
            <Space wrap>
                <Button type="primary" onClick={getAdd}>Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Space>
            <div className="box"></div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({ ...state })

const mapDispatchToProps = {
    add, query
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


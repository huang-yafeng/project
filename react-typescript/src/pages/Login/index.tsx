import React from "react";
import { connect } from "react-redux"
import { Button, Space } from "antd"

import { add, query } from "../../action/userAction"

function Login(props: any) {
    console.log(props);

    const getAdd = () => {
        let params = {
            name: "黄亚枫",
            dataList: [
                { id: 1, msg: "msg1" },
                { id: 2, msg: "msg2" },
                { id: 3, msg: "msg3" },
            ]
        }

        props.add(params)
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
        </div>
    )
}

const mapStateToProps = (state: any) => ({ ...state })

const mapDispatchToProps = {
    add, query
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


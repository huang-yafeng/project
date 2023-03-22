import React from "react";
import { connect } from "react-redux"
import { Button, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'

import { add, query } from "../../action/userAction"
import userModel from "../../server/userServer"
import './index.less'

function Login(props: any) {

    const getAdd = async () => {
        const { data } = await userModel.query({})
        console.log(data, 'data');

    }

    return (
        <div>
            <Space wrap>
                <Button color='primary' fill='solid'>
                    Solid
                </Button>
                <Button color='primary' fill='outline'>
                    Outline
                </Button>
                <Button color='primary' fill='none'>
                    None
                </Button>
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


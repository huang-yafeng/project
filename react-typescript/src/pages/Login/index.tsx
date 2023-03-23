import React from "react";
import { connect } from "react-redux"
import { Button, Space } from 'antd-mobile'

import { add, query } from "../../action/userAction"
import './index.less'

function Login(props: any) {

    const getAdd = () => {

    }

    return (
        <div>
            <Space wrap>
                <Button color='primary' fill='solid' onClick={getAdd}>
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


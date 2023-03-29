import React from "react";
import { connect } from "react-redux"
import { Button, Input, Form } from 'react-vant'
import { useNavigate } from "react-router-dom"

import { add, query } from "../../action/userAction"
import Header from "./header";

function Login(props: any) {
    const [form] = Form.useForm();
    const history = useNavigate() //react-router-dom6版本函数组件路由跳转
    const onFinish =  (values: Object) => {
        
        history('/home')
    }

    return (
        <div className={'login'}>
            <Header />
            <Form
                form={form}
                onFinish={onFinish}
                footer={
                    <div style={{ margin: '16px 16px 0', display: "flex" }}>
                        <Button round nativeType='submit' type='primary' block>
                            登录
                        </Button>
                        <Button round block>
                            注册
                        </Button>
                    </div>
                }
            >
                <Form.Item
                    rules={[{
                        required: true,
                        message: '请填输入4到16为包含数字和大小写字母以字母开头用户名',
                        pattern: /^[a-zA-Z][a-zA-Z0-9]{3,15}$/
                    }]}
                    name='username'
                    label='用户名'
                >
                    <Input placeholder='请输入用户名' />
                </Form.Item>
                <Form.Item
                    rules={[{ required: true, message: '请填写6到10位的密码', pattern: /^[a-zA-Z0-9]{6,10}$/ }]}
                    name='password'
                    label='密码'
                >
                    <Input type="password" placeholder='请输入密码' />
                </Form.Item>
            </Form>
        </div>
    )
}

const mapStateToProps = (state: any) => ({ ...state })

const mapDispatchToProps = {
    add, query
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


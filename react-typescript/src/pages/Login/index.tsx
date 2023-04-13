import React, { useEffect, useState } from "react";
import { connect } from "react-redux"
import { Button, Input, Form, Notify } from 'react-vant'
import { useNavigate } from "react-router-dom"

import { add, query } from "../../action/userAction"
import Header from "./header";

import userServe from "../../server/userServer";

function Login(props: any) {
    const [flag, setFlag] = useState(false)
    const [form] = Form.useForm();
    const history = useNavigate() //react-router-dom6版本函数组件路由跳转
    const onFinish = async (values: Object) => {
        if (flag === true) {
            history('/home')
        } else {
            const res: any = await userServe.query(values)
            if (res.code === 0) {
                window.localStorage.setItem('user', res.token)
                Notify.show({ type: 'primary', message: res.msg })
                props.add(res.data)
                //2秒钟后跳转路由
                setTimeout(() => {
                    history('/home')
                }, 2000)
            }
        }

    }

    const handUserinfo = () => {

        const token = window.localStorage.getItem('user');
        console.log(token, 'token');
        if (token) {
            setFlag(true)
            history('/home')
        }


    }

    useEffect(() => {
        handUserinfo()
    }, [])

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
                        <Button round block onClick={() => {
                            history('/register')
                        }}>
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
                    rules={[{
                        required: true,
                        message: '请填写6到10位的密码',
                        pattern: /^[a-zA-Z0-9]{6,10}$/
                    }]}
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


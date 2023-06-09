import React, { useEffect, useState } from "react";
import { connect } from "react-redux"
import { Button, Input, Form, Radio, Notify } from 'react-vant'
import { useNavigate } from "react-router-dom"

import { add, query } from "../../action/userAction"
import Header from "./header";
import userServer from "../../server/userServer"

function Register(props: any) {
    console.log(props, 'props');

    const [userId, setuserId] = useState('1')
    const [form] = Form.useForm();
    const history = useNavigate() //react-router-dom6版本函数组件路由跳转

    const onFinish = async (values: any) => {
        const res: any = await userServer.add(values)
        if (res.code === 200) {
            Notify.show({ type: 'primary', message: res.msg })
            let params = {
                username: values.username,
                password: values.password
            }

            setTimeout(() => {
                userLogin(params)
            }, 3000)
            // setTimeout(() => {
            //     history('/home')
            // }, 2000)
        }
    }

    const userLogin = async (params: Object) => {
        const res: any = await userServer.query(params)
        console.log(res, '登录');

        if (res.code === 0) {
            history('/home')
        }
    }


    const getUserId = (params: any) => {
        setuserId(params)
    }

    const getback = () => {
        history(-1)
    }

    return (
        <div className={'Register'}>
            <Header />
            <Form
                form={form}
                onFinish={onFinish}
                footer={
                    <div style={{ margin: '16px 16px 0', display: "flex" }}>
                        <Button round nativeType='submit' type='primary' block>
                            注册
                        </Button>
                        <Button round block onClick={getback}>
                            返回
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

                <Form.Item
                    rules={[{
                        required: true,
                        message: '请输入手机号码',
                        // pattern: /^[a-zA-Z][a-zA-Z0-9]{3,11}$/
                    }]}
                    name='userPhone'
                    label='手机号码'
                >
                    <Input placeholder='请输入手机号码' />
                </Form.Item>


                <Form.Item
                    rules={[{
                        required: false,
                        message: '请选择职位',
                    }]}
                    name='userId'
                    label='用户身份'
                    initialValue={userId}
                >
                    <Radio.Group onChange={getUserId} value={userId}>
                        <Radio name="1">超级管理员</Radio>
                        <Radio name="2">普通管理员</Radio>
                        <Radio name="3">普通用户</Radio>
                    </Radio.Group>

                </Form.Item>


                <Form.Item
                    rules={[{
                        required: true,
                        message: '请输入邮箱',
                        pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
                    }]}
                    name='userEmail'
                    label='邮箱'
                >
                    <Input placeholder='请输入邮箱' />
                </Form.Item>
            </Form>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    userinfo: state.userinfo
})

const mapDispatchToProps = {
    add, query
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);


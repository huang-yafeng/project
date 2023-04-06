import React from "react";
import { connect } from "react-redux"
import { Button, Input, Form } from 'react-vant'
import { useNavigate } from "react-router-dom"

import { add, query } from "../../action/userAction"
import Header from "./header";
import { Usequery } from "../../server/userServer"

function Register(props: any) {
    const [form] = Form.useForm();
    const history = useNavigate() //react-router-dom6版本函数组件路由跳转
    const onFinish = (values: Object) => {
        console.log(values,'参数',history);
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
                        <Button round block>
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
                        // pattern: /^[a-zA-Z][a-zA-Z0-9]{3,15}$/
                    }]}
                    name='phone'
                    label='手机号码'
                >
                    <Input placeholder='请输入手机号码' />
                </Form.Item>


                <Form.Item
                    rules={[{
                        required: true,
                        message: '请选择职位',
                    }]}
                    name='userid'
                    label='用户身份'
                >
                    <Input placeholder='请选择职位' />
                </Form.Item>


                <Form.Item
                    rules={[{
                        required: true,
                        message: '请输入邮箱',
                        pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
                    }]}
                    name='email'
                    label='邮箱'
                >
                    <Input placeholder='请输入邮箱' />
                </Form.Item>


            </Form>
        </div>
    )
}

const mapStateToProps = (state: any) => ({ ...state })

const mapDispatchToProps = {
    add, query
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);


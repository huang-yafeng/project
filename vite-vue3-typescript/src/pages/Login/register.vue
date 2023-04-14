<template>
    <div class="login">
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field
                        v-model="username"
                        name="username"
                        label="用户名"
                        placeholder="请输入用户名"
                        :rules="[{
                        required: true,
                        message: '请填输入4到16为包含数字和大小写字母以字母开头用户名',
                        pattern: /^[a-zA-Z][a-zA-Z0-9]{3,15}$/
                        }]"
                />
                <van-field
                        v-model="password"
                        type="password"
                        name="password"
                        label="密码"
                        placeholder="请输入密码"
                        :rules="[{
                        required: true,
                        message: '请填写6到10位的密码',
                        pattern: /^[a-zA-Z0-9]{6,10}$/
                        }]"
                />

                <van-field
                    v-model="showName"
                    name="userId"
                    is-link
                    readonly
                    label="选择身份"
                    placeholder="选择身份"
                    @click="showPicker = true"
                />
                <van-popup v-model:show="showPicker" round position="bottom">
                    <van-picker
                        :columns="columns"
                        @cancel="showPicker = false"
                        @confirm="onConfirm"
                    />
                </van-popup>

                <van-field
                        v-model="userPhone"
                        name="userPhone"
                        label="电话号码"
                        placeholder="请输入电话号码"
                        :rules="[{
                        required: true,
                        message: '请输入电话号码'
                        }]"
                />
                <van-field
                        v-model="userEmail"
                        name="userEmail"
                        label="邮箱"
                        placeholder="=请输入邮箱"
                        :rules="[{
                        required: true,
                        message: '请输入邮箱',
                        pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
                        }]"
                />

            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                    注册
                </van-button>
            </div>
        </van-form>


    </div>
</template>

<script setup lang="ts">
import { ref,reactive,defineEmits } from 'vue';

const emits:any=defineEmits(['getLogin']);

const columns = [
    { text: '超级管理员', value: '1' },
    { text: '普通管理员', value: '2' },
    { text: '开发人员', value: '3' },
];

const username=ref('')
const password=ref('')
const userPhone=ref('')
const userEmail=ref('')
const userId=ref('')
const showPicker = ref(false);
const showName=ref('')
const onSubmit = (values:Object) => {
    console.log('submit', values);
    const code=200;
    if(code===200){
        emits('getLogin',0);
    }
};


const onConfirm = ({selectedOptions}:any) => {
    showPicker.value = false;
    userId.value= selectedOptions[0].value
    showName.value=selectedOptions[0].text
    console.log(selectedOptions[0],'selectedOptions')
};

</script>
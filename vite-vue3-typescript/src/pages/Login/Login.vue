<template>
    <div class="login">
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field
                        v-model="username"
                        name="username"
                        label="用户名"
                        placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                        v-model="password"
                        type="password"
                        name="password"
                        label="密码"
                        placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]"
                />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                    登录
                </van-button>
            </div>
        </van-form>


    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import userServe from "@/server/userServe";
const username = ref('');
const password = ref('');
const onSubmit = async (values:Object) => {

    const res:any=await userServe.query(values);
    if(res.code===0){
        alert('登录成功')
    }

};

</script>
<template>
    <div class="login">
        <div class="center">
            <el-form :model="form" label-width="120px">
                <el-form-item label="用户名">
                    <el-input v-model="form.username" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" />
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import "./index.scss"
const form = reactive({
    username: "",
    password: "",
})

const onSubmit = () => {
    console.log(form, 'name')
}

</script>
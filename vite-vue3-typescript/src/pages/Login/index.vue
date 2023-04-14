<template>
    <van-tabs v-model:active="active">
        <van-tab title="登录">
            <Login />
        </van-tab>
        <van-tab title="注册">
            <Register @getLogin="getLogin"/>
        </van-tab>
    </van-tabs>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import Login from "@/pages/Login/Login.vue";
import Register from "@/pages/Login/register.vue";

const active = ref<Number>(0);
const getLogin=(item:Number)=>{
    active.value=item;
}


</script>
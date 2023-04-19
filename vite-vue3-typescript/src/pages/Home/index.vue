<template>
	<van-tabs v-model:active="active">
		<van-tab title="登录">
			<OneList/>
		</van-tab>
		<van-tab title="注册">
			<TwoFrom ref="getAdd"/>
		</van-tab>
	</van-tabs>
	<button @click="getFrom">获取</button>
</template>

<script lang="ts" setup>
import OneList from "./OneFrom.vue"
import TwoFrom from "./TwoFrom.vue";
import {ref} from "vue"
const active=ref(1);
const getAdd=ref();

const getFrom=()=>{
const add=getAdd.value.add();
	console.log(add,'add')
}
</script>
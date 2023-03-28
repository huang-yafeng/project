<template>
    <div>
        <h1>{{ num }}</h1>
        <button @click="add">+10</button>
    </div>

    <div class="h1">
        <h1>子组件</h1>
        <LoginOne :num="num" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import LoginOne from "@/components/Login/one.vue"
const num = ref(100)

const add = () => {
    num.value += 10
}


</script>

<style scoped>
.h1 {
    width: 200px;
    height: 200px;
    border: 1px solid red;
}
</style>
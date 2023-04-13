<template>
    <a-button type="primary">Primary Button</a-button>
    <a-input v-model:value="value" placeholder="Basic usage" />
    <br>
    <el-row class="mb-4">
        <el-button plain>Plain</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="success" plain>Success</el-button>
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain>Warning</el-button>
        <el-button type="danger" plain>Danger</el-button>
    </el-row>
</template>

<script setup lang="ts">
import {ref} from "vue"
const value=ref<String>('100');
</script>
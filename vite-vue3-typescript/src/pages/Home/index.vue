<template>
vuex:{{store.state.num}}
  <button @click="add">+10</button>
</template>

<script setup lang="ts">
import {ref} from "vue"
import {useStore} from "vuex";

const store=useStore();
const add=()=>{
    store.commit('add',10)
}

</script>
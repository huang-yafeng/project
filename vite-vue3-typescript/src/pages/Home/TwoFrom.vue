<template>
  two{{num}}
</template>

<script setup lang="ts">
import {ref,defineExpose} from "vue"

const num=ref(100);
defineExpose({
    num:num,
    add:()=>{
       return  num.value+=10;
    }
})

</script>
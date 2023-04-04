<template>
    <div>
        Home
        <h1>{{ num }}</h1>
        <button @click="add(100)">添加</button>
        <h2>{{ this.dataNum }}</h2>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    data() {
        return {
            num: 100
        }
    },
    computed:{
        ...mapState(['dataNum'])
    },
    methods: {
        add(params) {
            console.log(this.dataNum)
            this.num += params
        }

    },
    created() {
        console.log('111111111')
    },
    mounted() {
        console.log('页面加载完成');
    },
}
</script>

<style></style>
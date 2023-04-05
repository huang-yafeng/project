<template>
  <div class="login">
    <div class="box">
      <div>序号</div>
      <div>名称</div>
      <div>价格</div>
      <div>数量</div>
      <div>总价</div>
    </div>
    <div class="center">

      <div class="list" v-for="(item) in list" :key="item.id">
        <div class="list1">{{ item.id }}</div>
        <div class="list1">{{ item.goodname }}</div>
        <div class="list1">{{ item.goodprice }}</div>
        <div class="list1"><button>-</button>{{ item.goodnum }}<button @click="add(item)">+</button></div>
        <div class="list1">{{ item.goodnum * item.goodprice }}</div>
      </div>
    </div>
    <div class="fool">
      <div>总数：{{ addNum }}</div>
      <div>总价：{{ addPrice }}</div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          "id": "1",
          "goodname": "香瓜",
          "goodnum": "10",
          "goodprice": "35"
        },
        {
          "id": "2",
          "goodname": "西瓜",
          "goodnum": "2",
          "goodprice": "25"
        },
        {
          "id": "3",
          "goodname": "草莓",
          "goodnum": "20",
          "goodprice": "55"
        },
        {
          "id": "4",
          "goodname": "地瓜",
          "goodnum": "4",
          "goodprice": "26"
        },
        {
          "id": "5",
          "goodname": "香蕉",
          "goodnum": "6",
          "goodprice": "33"
        }
      ],
      total: 0,//总数
    }
  },
  methods: {
    add(params) {
      const data = this.list.filter(item => {
        if (item.goodname === params.goodname) {
          item.goodnum = String(Number(params.goodnum) + 1)
        }
        return true
      })
      console.log(data, 'data');
      // this.list = data
      console.log(this.list, 'list')

    }
  },
  computed: {
    addNum() {
      return 0;
    },
    addPrice() {
      const data = this.list.map(item => {
        return item.goodnum * item.goodprice
      })
      let price = data.reduce((item, index) => {
        return item + index
      })

      return price
    },
  }
}

</script>

<style lang="scss" scoped>
.login {
  width: 500px;
  // height: 500px;
  background: yellow;

  .box {
    width: 100%;
    height: 50px;
    // background: red;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
  }

  .center {
    width: 100%;
    height: 500px;
    background: palegreen;

    .list {
      width: 100%;
      height: 50px;
      background: violet;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .list1 {
        width: 100px;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .fool {
    width: 100%;
    height: 50px;
    // position: absolute;
    // bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
  }
}
</style>
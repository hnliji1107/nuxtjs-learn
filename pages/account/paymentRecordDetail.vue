<template>
  <section class="wrapper">
    <div class="com-table">
      <h1>{{title}}</h1>
      <ul>
        <li v-for="(val, key) in detail">
          <label>{{key}}:</label>
          <span>{{val}}</span>
        </li>
      </ul>
    </div>
    <div class="links">
    	<a href="/hello/account/paymentRecord">返回上一页</a>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    layout: 'container',
    data() {
      return {title: '这里是详情页'};
    },
    asyncData({ req, query }) {
      return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          let data = res.data.filter((item)=> {
            return item.id == query.id
          })
          
          return { detail: data[0] }
        }).catch((err) => {
          console.log(2, err);
        })
    }
  }
</script>

<style lang="less">
  .wrapper {
    background: #fff;
    min-height: 80vh;
    ul {
      li {
        line-height: 20px;
        margin-bottom: 20px;
      }
    }
  }
</style>


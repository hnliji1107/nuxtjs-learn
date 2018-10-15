<template>
  <section class="wrapper">
    <div class="com-table">
      <h1>{{title}}</h1>
      <table>
        <thead>
          <tr>
            <th>付款时间</th>
            <th>收款方</th>
            <th>收款银行 </th>
            <th>付款金额</th>
            <th class="opt">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in posts" :key="item.id">
            <td>{{item.id}}</td>
            <td><p class="small">{{item.title}}</p></td>
            <td>{{item.userId}}</td>
            <td><p>{{item.body}}</p></td>
            <td class="opt">
              <nuxt-link :to="{ path: '/account/paymentRecordDetail', query: { id: item.id }}">详情</nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="links">
      <nuxt-link to="/">返回首页</nuxt-link>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    layout: 'container',
    data() {
      return {title: '这里是列表页'};
    },
    asyncData({ req, params }) {
      // We can return a Promise instead of calling the callback
      return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          console.log('res', res)
          return { posts: res.data.slice(0, 20) }
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
    .com-table {
      min-height: 76vh;
    }
    table {
      width: 100%;
      border: 1px solid #eef0f3;
      th {
        color: #6b7c91;
        font-weight: normal;
        text-align: left;
        border-bottom: 1px solid #eef0f3;
        border-right: 1px solid #eef0f3;
      }
      td {
        color: #394e67;
        border-bottom: 1px solid #eef0f3;
        border-right: 1px solid #eef0f3;
        p {
          max-width: 500px;
          &.small { max-width: 200px; }
        }
        &.opt {
          text-align: center;
          a {
            color: #1884fc;
          }
        }
      }
    }
  }
</style>


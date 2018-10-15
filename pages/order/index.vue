<template>
  <section class="wrapper">
    <!-- <DatePicker type="date" placeholder="Select date" class="date"></DatePicker> -->
    <div class="banners">
      <Carousel v-model="value1" loop>
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
      </Carousel>
    </div>

    <div>
      <div class="com-list">
        <Table :columns="columns1" :data="posts" :loading="isLoad"></Table>
      </div>
      <div class="page-bar">
        <Page :total="total" @on-change="changePage" :current="page" />
      </div>
    </div>

    <!-- <div>
      <div class="com-list">
        <Table :columns="columns2" :data="posts1" :loading="isLoad"></Table>
      </div>
      <div class="page-bar">
        <Page :total="total1" @on-change="changePage1" />
      </div>
    </div> -->


    <div class="links">
      <nuxt-link to="/">返回首页</nuxt-link>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    layout: 'container',
    watchQuery: true,
    data() {
      return {
        value1: 0,
        isLoad: false,
        page: this.$route.query && this.$route.query.page ? parseInt(this.$route.query.page) : 1,
        page1: 1,
        pageSize: 10,
        resultList: [],
        columns1: [
          {
            title: 'Id',
            key: 'id',
            width: 100,
            align: 'center'
          },
          {
            title: 'userId',
            key: 'userId',
            width: 100,
            align: 'center'
          },
          {
            title: 'name',
            key: 'title',
            width: 400,
            tooltip: true
          },
          {
            title: 'desc',
            key: 'body'
          }
        ],
        columns2: [
          {
            title: '交易单号',
            key: 'orderId',
            width: 200,
          },
          {
            title: '店铺名称',
            key: 'shopName',
            width: 400,
            tooltip: true
          },
          {
            title: '虚拟卡号',
            key: 'virtualAccountNo',
            width: 200,
          },
          {
            title: '交易金额',
            key: 'amount',
            align: 'right'
          },
          {
            title: '币种',
            key: 'currencyCode',
            align: 'right'
          }
        ],
        total: 0,
        posts: [],
        posts1: []
      }
    },
    methods: {
      changePage(page) {
        this.page = page
        // this.posts = this.resultList.slice(this.pageSize*page-10, this.pageSize*page)
        //路由变化会触发asyncData
        this.$router.replace('/order?page=' + page)

      },
      changePage1(page) {
        this.page1 = page
        this.getData(this.page1)
      },
      async getData(page) {
        let pageSize = this.pageSize
        let res = await axios({
          method: 'post',
          url: '/cb-va-open-api/entry/list',
          data: {
            page: page, 
            pageSize: pageSize
          }
        })

        let result = res.data

        console.log('res', res)

        if(result.code === 999993 && !result.success) {
          console.log('登录超时')
          location.href = '/'
        } else {
          this.posts1 = result.data.resultList
          this.total1 = result.data.totalSize

          console.log(this.total1, this.posts1)
          
        }

      }
    },
    async created() {
      // const data = await this.$options.asyncData(this.$root.$options.context)

    },
    async asyncData({ req, res, query, error }) {
      let page = query && query.page ? query.page : 0
      let start = page ? page*10-10 : 0
      let end = page ? page*10 : 10

      try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return { posts: data.slice(start, end), posts1: data.slice(0, 10), total: data.length, resultList: data }
        
      } catch(err) {
        if (err.response.status !== 404) {
          return error({ statusCode: 500, message: '500' })
        }
        return error({ statusCode: 404, message: '404' })
      }
        
    }
  }
</script>

<style lang="less">
  .wrapper {
    background: #fff;
    min-height: 80vh;
    padding: 20px 50px;
    .date { margin: 10px 0;}
    .banners {
      margin: 10px 0;
      .demo-carousel{
        height:200px;
        line-height:200px;
        text-align:center;
        color:#fff;
        font-size:20px;
        background:#506b9e
      }

    }
    .page-bar {
      margin: 20px 0;
      text-align: right;
    }
    
  }
</style>


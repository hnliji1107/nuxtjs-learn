<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        欢迎来到我的第一个nuxt站点
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <nuxt-link to="/post" tag="span">
          <a class="button--green">post</a>
        </nuxt-link>
        <nuxt-link to="/personal" class="button--green">
          personal
        </nuxt-link>
        <nuxt-link to="/order" class="button--green">
          order
        </nuxt-link>
        <a
          href="/hello/personal"
          class="button--grey">personal</a>
        <a
          href="/hello/account/paymentRecord"
          class="button--grey">paymentRecord</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>


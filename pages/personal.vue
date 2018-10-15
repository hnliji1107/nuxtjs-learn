<template>
  <section class="main">
    <h1>hello world, hello lily!</h1>
    <div class="links">
    	<!-- <a href="/">返回首页</a> -->
      <nuxt-link to="/">返回首页</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'center',
}
</script>

<style>
.main {
	padding-left: 320px;
	min-height: 80vh;
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


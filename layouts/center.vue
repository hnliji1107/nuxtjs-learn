<template>
  <div>
    <my-header />
    <div>
    	<my-sider-bar />
    	<nuxt/>
    </div>
    <my-footer />
  </div>
</template>

<script>
	import myHeader from '~/components/common/header.vue'
	import myFooter from '~/components/common/footer.vue'
	import mySiderBar from '~/components/common/sidebar.vue'

	export default {
	  components: {
	    myHeader,
	    mySiderBar,
	    myFooter
	  }
	  
	}
</script>
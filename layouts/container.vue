<template>
  <div>
    <my-header />
    <nuxt/>
    <my-footer />
  </div>
</template>

<script>
	import myHeader from '~/components/common/header.vue'
	import myFooter from '~/components/common/footer.vue'

	export default {
	  components: {
	    myHeader,
	    myFooter
	  }
	  
	}
</script>
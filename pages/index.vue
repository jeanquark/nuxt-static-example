<template>
  <div>
    <ul>
      <li><nuxt-link to="/blog/blog-post-1">Blog Post 1</nuxt-link></li>
      <li><nuxt-link to="/blog/blog-post-2">Blog Post 2</nuxt-link></li>
      <li><nuxt-link to="/blog/blog-post-3">Blog Post 3</nuxt-link></li>
      <li><nuxt-link to="/blog/blog-post-4">Blog Post 4</nuxt-link></li>
      <li><nuxt-link to="/blog/blog-post-5">Blog Post 5</nuxt-link></li>
      <button @click="alert('Alert!')">Show alert</button>
    </ul>
  </div>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	methods: {
		alert (message) {
			alert(message)
		}
	}
}
</script>

<style>

</style>

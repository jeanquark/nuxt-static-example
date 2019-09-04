<template>
  <div>
    <!-- <ul>
      <li><nuxt-link to="/blog/blog-post-1">Blog Post 1</nuxt-link></li>
      <li><nuxt-link to="/blog/blog-post-2">Blog Post 2</nuxt-link></li>
      <li><nuxt-link to="/blog/blog-post-3">Blog Post 3</nuxt-link></li>
      <li><nuxt-link to="/blog/blog-post-4">Blog Post 4</nuxt-link></li>
      <li><nuxt-link to="/blog/blog-post-5">Blog Post 5</nuxt-link></li>
      
    </ul> -->

	  <button @click="alert('Alert!')">Show alert</button><br />
	  <button @click="login">Login</button><br /><br />
	  <button @click="logout">Logout</button><br /><br />
	  <!-- posts: {{ posts }}<br /><br /> -->
	  <div v-for="post in posts" :key="post.slug" style="border: 1px solid orangered;">
	  	{{ post.title }}<br />
	  	<nuxt-link :to="`/blog/${post.link}`">Link</nuxt-link>
	  </div>
	  isAuthenticated: {{ isAuthenticated }}<br /><br />
	  loggedUser: {{ loggedUser }}<br /><br />
	  i18n locale: {{ $i18n.locale }}<br /><br />
	  <button @click="switchLanguage('en')">Switch to english</button>
	  <button @click="switchLanguage('fr')">Switch to french</button>
	  <button @click="switchLanguage('de')">Switch to German</button>
  </div>
</template>

<script>
import blogPosts from '~/static/posts.json'
export default {
	data () {
		return {

		}
	},
	computed: {
		isAuthenticated() {
			return this.$store.getters['auth/isAuthenticated']
		},
		loggedUser() {
			return this.$store.getters['auth/loggedUser']
		},
		posts() {
			return blogPosts
		},

	},
	methods: {
		alert (message) {
			alert(message)
		},
		login() {
			this.$auth.loginWith('auth0')
		},
		async logout() {
			await this.$auth.logout()
            window.location.href = 'https://dev-b36ddgyg.eu.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost:3000'
		},
		switchLanguage (language) {
			this.$i18n.locale = language
		}
	}
}
</script>

<style>

</style>

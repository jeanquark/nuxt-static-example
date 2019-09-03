<template>
  <div>
    <ul>
      <li><nuxt-link to="/blog/blog-post-1">Blog Post 1</nuxt-link></li>
      <li><nuxt-link to="/blog/blog-post-2">Blog Post 2</nuxt-link></li>
      <li><nuxt-link to="/blog/blog-post-3">Blog Post 3</nuxt-link></li>
      <li><nuxt-link to="/blog/blog-post-4">Blog Post 4</nuxt-link></li>
      <li><nuxt-link to="/blog/blog-post-5">Blog Post 5</nuxt-link></li>
      <button @click="alert('Alert!')">Show alert</button><br />
      <button @click="login">Login</button><br />
      <button @click="logout">Logout</button><br />
      isAuthenticated: {{ isAuthenticated }}<br />
      loggedUser: {{ loggedUser }}<br />
    </ul>
  </div>
</template>

<script>
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
		}
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
		}
	}
}
</script>

<style>

</style>

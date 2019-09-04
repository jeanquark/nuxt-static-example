<template>
  <div>
     <div>
       <h1><nuxt-link to="/">My Awesome Blog</nuxt-link></h1>
       <div><nuxt-link :to="localePath('about')">{{ $t('about') }}</nuxt-link></div>
       <div><nuxt-link :to="localePath('team')">{{ $t('team') }}</nuxt-link></div>
       <div><nuxt-link :to="localePath('contact')">{{ $t('contact') }}</nuxt-link></div>
       <div><nuxt-link to="admin">Admin (protected)</nuxt-link></div>
       <ul>
       	<li><nuxt-link :to="switchLocalePath('en')" class="">English</nuxt-link></li>
      	<li><nuxt-link :to="switchLocalePath('fr')" class="">Français</nuxt-link></li>
      	<li><nuxt-link :to="switchLocalePath('de')" class="">Deutsch</nuxt-link></li>
 	   </ul>
 	   <nuxt-link
  			v-for="locale in availableLocales"
  			:key="locale.code"
  			:to="switchLocalePath(locale.code)">{{ locale.name }}&nbsp;
  		</nuxt-link>
     </div>
    <nuxt />
  </div>
</template>

<script>
	export default {
		data () {
			return {

			}
		},
		computed: {
			availableLocales () {
    			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
  			}
		}
	}
</script>

<style>

</style>

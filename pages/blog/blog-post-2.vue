<template>
	<div>
		Blog Post content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		<h2>HTML</h2>
    	<prism style="background: #000;">{{ html }}</prism>

    	<h2>JavaScript</h2>
    	<!-- prettier-ignore -->
    	<prism language="js" style="background: #000;">const me = {
  	name: "Yasmin ZY",
  	country: "Indonesia"
}
// This is a comment
let abc = ""
const def = function (message) {
	let array = []
}</prism>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				html: `<article><h1 class="title">How to Use Prism in a Vue/Nuxt Project</h1><p>Go to https://www.yasminzy.com/tutorial/prism.html</p></article>`
			}
		}
	}
</script>
<template>
	<div>
		<h1>Contact form</h1>
		<form ref="contactForm" @submit="onSubmit">

		    <label for="fname">First Name</label>
		    <input type="text" id="fname" name="firstname" placeholder="Your name" v-model="contact.firstname">

		    <label for="lname">Last Name</label>
		    <input type="text" id="lname" name="lastname" placeholder="Your last name" v-model="contact.lastname">

		    <label for="subject">Subject</label>
		    <textarea id="subject" name="subject" placeholder="Write something" style="height:200px" v-model="contact.message"></textarea>

		    <input type="submit" value="Send Form">

		</form>
		<hr>
		<form action="https://usebasin.com/f/90925b0ec218" method="POST">
			<label for="firstname">Firstname</label>
			<input type="text" id="firstname" name="firstname" required>
			<label for="lastname">Lastname</label>
			<input type="text" id="lastname" name="lastname" required>
			<label for="email">Email</label>
			<input type="email" id="email" name="email" required>
			<button type="submit">Submit</button>
		</form>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data () {
			return {
				isSending: false,
				contact: {
					firstname: '',
					lastname: '',
					message: ''
				}
			}
		},
		computed: {
			sendMessage () {

			},
			
		},
		methods: {
			clearForm() {
				for (let field in this.contact) {
					this.contact[field] = ''
				}
			},
			onSubmit(event) {
				console.log('onSubmit: ', event)
				event.preventDefault()
				this.isSending = true
				const config = {
    				headers: { 'Accept': 'application/json' }
				}
				var formData = new FormData()
				const abc = this.$refs.contactForm
				console.log('abc: ', abc)
				const formData2 = new FormData(abc)
				console.log('formData2: ', formData2)
				formData.append('fistname', this.contact.firstname)
				formData.append('last name', this.contact.lastname)
				formData.append('message', this.contact.message)
				axios.post('https://usebasin.com/f/90925b0ec218.json', formData).then((response) => {
					console.log('response: ', response);
					this.clearForm();
					this.isSending = false;
					alert('Message sent successfully!')
				}).catch(error => {
					alert('Message could not be sent.')
					console.log('error: ', error)
				});
			}
		}
	}
</script>

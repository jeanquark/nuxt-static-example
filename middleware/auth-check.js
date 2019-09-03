export default function ({ store, redirect }) {
  	if (!store.getters['auth/isAuthenticated']) {
  		console.log('Not authenticated, redirect to homepage')
    	return redirect('/')
  	}
}
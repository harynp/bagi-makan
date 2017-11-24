const rootEndpoint = 'https://api.unsplash.com/photos?per_page=12&client_id=e773aef1f3e98577ad88894dceff6ebfdcedff8a5de1361b486e5ef131d9044e';

var app = new Vue({
	el: '#app',
	// State
	data: {
		photos: []
	},
	components: {
		'main-header' : mainHeader,
		'main-content' : mainContent,
		'postpic-modal': postpicModal
	},
	// Methods

})


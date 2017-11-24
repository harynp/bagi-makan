const rootEndpoint = 'http://localhost:3000/api/foods';

var app = new Vue({
	el: '#app',
	// State
	data: {
		photos: []
	},
	components: {

	},

	methods: {
		xdebug() {
			alert("XDEBUG")
		},

		getLatestHomePhotos() {
			axios.get(rootEndpoint)
			.then(({data}) => {
				console.log(data)
				this.photos = data

			}).catch(err => console.log(err.message));
		},

		getUploadPhoto(payload) {
			console.log('~~~~~~payload: ', payload.photo.data);
			this.photos.push(payload.photo.data)
		}
	},

	created() {
		this.getLatestHomePhotos();
	}
})


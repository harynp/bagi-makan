
var mainContent = Vue.component('main-content', {
	template: `
		<main class="wrap">
			<div class="flex-row">
				<div class="col-10 home-feed">
					<div class="grid-gallery">
						<food-item v-for="(photo, index) in photos" :key="index" :photo="photo"></food-item>
					</div>
					<!-- /.grid-wrapper -->
				</div><!-- /.col-10 -->
			</div>
		</main>
		<!-- /.wrap -->
	`,
	props: ['photos'],
	data(){
		return {

		}
	},
	methods: {

		/*pushLastUpload(payload) {
			this.photos.push(payload);
		}*/
	},

	created() {
		// this.pushLastUpload();
		// this.getLatestHomePhotos()
	}
})
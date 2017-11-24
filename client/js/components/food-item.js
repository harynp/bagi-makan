var foodItem = Vue.component('food-item', {
	template: `
	<div class="food-item">
		<figure class="food-pic">
			<img v-bind:src="photo.urls.regular" alt="food" />

			<figcaption class="pic-detail">
				<h3 class="pic-title">{{ photo.user.name }} @ {{ photo.user.first_name }}</h3>

				<div class="show-hover">
					<h4 class="pic-owner text-center">By <a href="#">Hary</a></h4>

					<a v-bind:href="photo.urls.regular" v-bind:download="photo.urls.regular" class="btn btn-warning u-full-width">Download</a>
				</div>
			</figcaption>
		</figure>
		<!-- /.food-pic -->
	</div>
	<!-- /.food-item -->
	`,
	props: ['photo']
})
var foodItem = Vue.component('food-item', {
	template: `
	<div class="food-item">
		<figure class="food-pic">
			<img v-bind:src="photo.imgUrl" alt="food" />

			<figcaption class="pic-detail">
				<h3 class="pic-title">{{ photo.title }} @ {{ photo.location }}</h3>

				<div class="show-hover">
					<h4 class="pic-owner text-center">By <a href="#">{{ name }}</a></h4>

					<a v-bind:href="photo.imgUrl" v-bind:download="photo.imgUrl" class="btn btn-warning u-full-width"><i class="fa fa-download"></i> Download</a>

					<a v-bind:href="'http://www.facebook.com/sharer.php?u=' + photo.imgUrl" class="btn btn-info u-full-width"><i class="fa fa-facebook"> </i> Share ke Facebook</a>
				</div>
			</figcaption>
		</figure>
		<!-- /.food-pic -->
	</div>
	<!-- /.food-item -->
	`,
	props: ['photo', 'name']
})
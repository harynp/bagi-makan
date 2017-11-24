var postpicModal = Vue.component('postpic-modal', {
		template: `
			<div class="modal fade" id="postPicModal" tabindex="-1" role="dialog" aria-labelledby="postPicModalLabel">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 class="modal-title" id="postPicModalLabel">Upload Foto Makanan</h4>
						</div>
						<div class="modal-body form-area">

							<div class="input-group u-full-width">
								<label>Judul</label>
								<input type="text" class="form-control" placeholder="Judul gambar yang menarik" name="picTitle" id="picTitle" ref="picTitle">
							</div>

							<div class="input-group u-full-width imageUploader">
								<label>File Gambar</label>
								<!-- <input type="file" class="form-control" placeholder="Judul gambar yang menarik" name="picFile" id="picFile" ref="picFile"> -->

								<div class="imageUploader" v-if="!uploadImage">

									<input class="form-control" type="file" @change="onFileChange">
								</div>
								<div class="imageUploader" v-else>
									<div class="row">
										<div class="col-md-12">
											<img :src="uploadImage" />
										</div>

										<div class="col-md-12">
											<br /><br />
											<button @click="removeImage" class="btn btn-danger"><i class="fa fa-minus-circle"></i> Hapus gambar</button>
										</div>
									</div>
								</div>
							</div>

							<div class="input-group u-full-width">
								<label>Kategori</label>
								<input type="text" class="form-control" placeholder="Judul gambar yang menarik" name="picCategory" id="picCategory" ref="picCategory">
							</div>

							<div class="input-group u-full-width">
								<label>Tempat Makan</label>
								<input type="text" class="form-control" placeholder="Judul gambar yang menarik" name="picLocation" id="picLocation" ref="picLocation" list="locations">

								<datalist id="locations">
									<option value="Burger King">Burger King</option>
									<option value="Pizza hut">Pizza Hut</option>
									<option value="Papa Rons">Papa Ron</option>
									<option value="KFC">KFC Fried</option>
									<option value="Baba Raffi">Baba Raffi</option>
									<option value="Food Panda">Food Panda</option>
								</datalist>
							</div>

						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
							<button @click.prevent="uploadNewPhotos()" type="button" class="btn btn-primary">Upload Foto</button>
						</div>
					</div>
				</div>
			</div>
		`,
		data(){
			return {
				uploadImage: ''
			}
		},
		methods : {
			uploadNewPhotos() {
				alert("Uploading your photos");
				console.log("TITLE ", this.$refs.picTitle.value);
				// console.log(this.uploadImage);

				let data = {
					title    : this.$refs.picTitle.value,
					category : this.$refs.picCategory.value,
					location : this.$refs.picLocation.value,
					// imgUrl	 : String,
					// userId   : {
					// 	type: Schema.Types.ObjectId,
					// 	ref : 'User'
					// },
					// createdAt: Date,
					// updatedAt: Date
				};
			},

			onFileChange(e) {
	      var files = e.target.files || e.dataTransfer.files;
	      if (!files.length)
	        return;
	      this.createImage(files[0]);
	    },

	    createImage(file) {
	      console.log('~~~~ Image ini file', file);
	      var image = new Image();
	      var reader = new FileReader();
	      var vm = this;

	     reader.onload = (e) => {
	        vm.uploadImage = e.target.result;
	      };
	      reader.readAsDataURL(file);
	    },

	    removeImage(e) {
	      this.uploadImage = '';
	    }
	  }
	}
)
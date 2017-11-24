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

						<div class="input-group u-full-width">
							<label>File Gambar</label>
							<input type="file" class="form-control" placeholder="Judul gambar yang menarik" name="picFile" id="picFile" ref="picFile">
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
						<button type="button" class="btn btn-primary">Save changes</button>
					</div>
				</div>
			</div>
		</div>
	`
})
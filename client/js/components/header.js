var mainHeader = Vue.component('main-header', {
	template: `
			<header class="header">
				<div class="container">
					<div class="row">
							<div class="col-md-2 col-sm-12">
								<h1 class="site-title"><a href="#">BagiMakan</a></h1>
							</div>

							<div class="col-md-5 col-sm-12">
								<div class="search-wrapper">
									<i class="fa fa-search search-icon"></i>
									<form action="#">
										<input placeholder="Cari Makanan" type="text" class="form-control search-food" ref="search-food" id="search-food" name="search-food" />
									</form>
								</div>
								<!-- /.search-wrapper -->
							</div>

							<div class="col-md-5 col-sm-12">
								<nav class="top-menu">
									<ul>
										<li>Selamat Datang, <span id="user">Harry</span></li>
										<li><a href="index.html" class="btn btn-home" title="User Feed"><i class="fa fa-home"></i></a></li>
										<li><a data-toggle="modal" data-target="#postPicModal" href="#" class="btn btn-upload" title="Upload"><i class="fa fa-cloud-upload"></i></a></li>
										<li><a href="#" class="btn btn-boxy" title="Logout">Logout</a></li>
									</ul>
								</nav>
							</div>
						</div>
						<!-- /.row -->
				</div>
				<!-- /.container -->
			</header>
	`
})
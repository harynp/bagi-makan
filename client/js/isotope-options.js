jQuery(document).ready(function($) {
	/*jQuery('.grid-gallery').isotope({
	  // options
	  itemSelector: '.grid-item',
	  layoutMode: 'fitRows'
	});*/

	var $container = jQuery('.grid-gallery');
    $container.isotope({
        filter: '*',
        layoutMode: 'packery',
        packery: {
        	columnWidth: 20
        },
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
});
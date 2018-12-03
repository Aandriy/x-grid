$(function(){
    var $grid = $('.grid');

	$grid.on('after-displaying-grid-data.xg', function (e, data) {
        var event = new Event('resize');
        window.dispatchEvent(event);
        $(window).trigger('resize')
	});
});
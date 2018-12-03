$(function(){
    var $grid = $('.grid');
    var afterDisplayingGridData = 0;

	$grid.on('after-displaying-grid-data.xg', function (e, data) {
		afterDisplayingGridData++;
		$('td[data-id="after-displaying-grid-data.xg"]').html(afterDisplayingGridData);
	});
});
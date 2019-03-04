function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


$(function () {
	var $grid = $('.grid');
	var types = {};

	function increase(type) {
		if (!types[type]) {
			types[type] = 0;
		}
		types[type] += 1;
		$('td[data-id="' + type + '.xg"]').html(types[type]);
	}
	var evets = ['after-displaying-grid-header.xg', 'after-displaying-grid-data.xg'];
	var $evets = $('#evets');

	evets.forEach(function (value, i) {
		$evets.append('<tr><th>' + (i + 1) + '</th><td>' + value + '</td><td data-id="' + value + '"></td></tr>');
	});

	$grid.on(evets.join(' '), function (e, data) {
		increase(e.type);
		console.log(data);
	});

	$grid.Xgrid({
		data: mydata,
		filterToolbar: true,
		colModels: [
			{ key: 'key', width: 60, sortType: "int", label: 'Key', sortable: true },
			{
				key: 'invdate',
				width: 90,
				label: 'Date',
				filterable: true,
				afterFilterToolbarFormatter: function ($td) {
					$td.find('input').daterangepicker({
						locale: {
							format: 'YYYY-MM-DD'
						},
						singleDatePicker: true,
						showDropdowns: true,
					});
				}
			},
			{
				key: 'name',
				label: 'Client',
				resizable: true,
				filterable: true,
				filterOption: 'eq',
				filterToolbarSettings: {
					formControlType: 'select',
					allowResetButton: true,
					allowSubmitButton: false,
					onEnter: false,
					onChange: true,
					selectOptions: [
						{ label: 'All' },
						{ label: '1', value: 'test' },
						{ label: '2', value: 'test2' },
						{ label: '3', value: 'test3' }
					]
				}
			},
			{
				key: 'description',
				width: 100,
				label: 'Description',
				resizable: true,
				filterable: true,
				filterToolbarSettings: {
					onKeydown: true,
					allowSubmitButton: false
				}
			},
			{ key: 'amount', width: 80, align: "right", sortType: "float", label: 'Amount', hidden: true },
			{ key: 'tax', width: 80, align: "right", sortType: "float", label: 'Tax', fixed: true },
			{ key: 'total', width: 80, align: "right", sortType: "float", label: 'Total', filterable: true },
			{
				key: 'note',
				width: 150,
				sortable: true,
				label: 'Notes',
				filterable: true,
				filterOption: 'in',
				filterToolbarSettings: {
					formControlType: 'select',
					allowResetButton: true,
					allowSubmitButton: false,
					onEnter: false,
					onChange: true,
					selectOptions: [
						{ label: '1', value: 'note' },
						{ label: '2', value: 'note2' },
						{ label: '3', value: 'note3' }
					],
					attr: {
						multiple: 'multiple',
						size: '1'
					}
				}
			}
		],
		sortBy: 'tax ACS, name DESC',
		//sortBy: [{ by: 'tax', order: 'ACS' }, { by: 'name', order: 'DESC' }],
		filterToolbar: true,
	});

	var $btn = $('<span class="btn btn-primary">add</span>');
	var _Xgrid = $grid.data('Xgrid');

	$grid.after($btn);

	$btn.on('click', function () {
		mydata[0].key = getRandomInt(-100, 100);
		_Xgrid.setGridData(mydata);
	});

	window.xgrid = _Xgrid;
});

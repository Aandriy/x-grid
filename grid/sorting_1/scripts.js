$(function () {
	$('.grid').Xgrid({
		filterToolbar: true,
		data: mydata,
		colModels: [
			{
				key: 'key',
				width: 60,
				sortType: "int",
				label: 'Key',
				sortable: true
			},
			{
				key: 'invdate',
				width: 90,
				sortType: "date",
				label: 'Date',
				sortable: true,
			},
			{
				key: 'name',
				label: 'Client',
				resizable: true,
				sortable: true,
			},
			{
				key: 'description',
				width: 100,
				label: 'Description',
				resizable: true,
				sortable: true,
			},
			{
				key: 'amount',
				width: 80,
				align: "right",
				sortType: "float",
				label: 'Amount',
				hidden: true,
				sortable: true,
			},
			{
				key: 'tax',
				width: 80,
				align: "right",
				sortType: "float",
				label: 'Tax',
				fixed: true,
				sortable: true,
			},
			{
				key: 'total',
				width: 80,
				align: "right",
				sortType: "float",
				label: 'Total',
				filterable: true,
				sortable: true,
			},
			{
				key: 'note',
				width: 150,
				sortType: "float",
				sortable: true,
				label: 'Notes',
				sortable: true,
			}
		],
		sortBy: [{ by: 'tax', order: 'ACS' }, { by: 'key', order: 'DESC' }],
		filterToolbar: false,
	});

	//console.log($('.grid').data('Xgrid'));
});

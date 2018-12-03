$(function () {
	$('.grid').Xgrid({
		filterToolbar: true,
		data: mydata,
		colModels: [
			{
				key: 'key',
				width: 60,
				fixed: true,
				label: 'Key',
			},
			{
				key: 'invdate',
				width: 90,
				label: 'Date',
			},
			{
				key: 'name',
				label: 'Client',
			},
			{
				key: 'description',
				width: 100,
				label: 'Description',
			},
			{
				key: 'amount',
				width: 80,
				label: 'Amount',
			},
			{
				key: 'tax',
				width: 80,
				label: 'Tax',
				sortType: "int",
			},
			{
				key: 'total',
				width: 80,
				label: 'Total',
			},
			{
				key: 'note',
				width: 150,
				label: 'Notes',
			}
		],
		sortBy: [{ by: 'tax', order: 'ACS' }, { by: 'name', order: 'DESC' }],
		filterToolbar: false,
	});
	//console.log($('.grid').data('Xgrid'));
});

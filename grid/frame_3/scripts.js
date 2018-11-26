$(function () {
	$('.grid').Xgrid({
		filterToolbar: false,
		data: data,
		colModels: [
			{
				key: 'id',
				width: '90px',
				fixed: true,
				label: 'Id',
				sortable: true,
			},
			{
				sortable: true,
				key: 'date',
				width: 90,
				sorttype: "date",
				label: 'Date',
				cellFormatter: function (td, value, rowData) {
					if (!value) {
						return '';
					}
					var m = moment(value);
					if (m.isValid()) {
						return m.format('YYYY-MM-DD HH:mm');
					}
					return '<a href="#' + rowData.id + '">' + value + '</a>';
				},
			},
			{
				filterable: true,
				key: 'created',
				width: '210px',
				fixed: true,
				label: 'Range',
				sortable: true,
				cellFormatter: function (td, value, rowData) {
					if (!value) {
						return '';
					}
					var m = moment(value);
					if (m.isValid()) {
						return m.format('YYYY-MM-DD HH:mm');
					}
					return '<a href="#' + rowData.id + '">' + value + '</a>';
				},
			},
			{
				key: 'updated',
				width: '210px',
				fixed: true,
				label: 'Updated',
				sortable: true
			},
			{
				key: 'isActive',
				width: '90px',
				fixed: true,
				label: 'Available',
				cellFormatter: 'booleanYesNo',
				sortable: true,
			},
			{
				key: 'cost',
				width: '90px',
				fixed: true,
				label: 'Cost',
				sortable: true
			},
			{
				key: 'multiplier',
				width: '90px',
				fixed: true,
				label: 'Multiplier',
				sortable: true
			},
			{
				key: 'title',
				label: 'Title',
				sortable: true
			},
		],
	});
});

$(function () {
	$('.grid').Xgrid({
		data: data,
		colModels: [
			{
				key: 'id',
				width: '90px',
				fixed: true,
				label: 'Id',
				filterable: true,
				sortable: true,
			},
			{
				sortable: true,
				key: 'date',
				width: 90,
				sorttype: "date",
				label: 'Date',
				filterable: true,
				cellFormatter: function (td, value, rowData) {
					if (!value) {
						return '';
					}
					var m = moment(value);
					if (m.isValid) {
						return m.format('YYYY-MM-DD HH:mm');
					}
					return '<a href="#' + rowData.id + '">' + value + '</a>';
				},
				afterFilterToolbarFormatter: function ($td) {
					var $input = $td.find('input');
					$input.daterangepicker({
						autoUpdateInput: false,
						locale: {
							format: 'YYYY-MM-DD'
						},
						singleDatePicker: true,
						showDropdowns: true,
					},
						function (date) {
							var value = '';
							if (date.isValid) {
								value = date.format('YYYY-MM-DD');
							}
							$input.val(value);
						});
				}
			},
			{
				filterable: true,
				key: 'created',
				width: '210px',
				fixed: true,
				label: 'Created',
				sortable: true
			},
			{
				filterable: true,
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
				filterable: true,
				sortable: true,
				filterType: 'boolean',
				filterOption: 'eq',
				filterToolbarSettings: {
					formControlType: 'select',
					allowResetButton: true,
					allowSubmitButton: false,
					onEnter: false,
					onChange: true,
					selectOptions: [{ "label": "All" },{ "label": "Yes", "value": true }, { "label": "No", "value": false }],
				},
			},
			{
				filterable: true,
				key: 'cost',
				width: '90px',
				fixed: true,
				label: 'Cost',
				sortable: true
			},
			{
				filterable: true,
				key: 'multiplier',
				width: '90px',
				fixed: true,
				label: 'Multiplier',
				sortable: true
			},
			{
				filterable: true,
				key: 'title',
				label: 'Title',
				sortable: true
			},
		],
	});
});

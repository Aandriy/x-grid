$(function () {
	var url = 'https://localhost:44367/Admin/Place/GetPlaceList';
	$('.grid').Xgrid({
		data: [],
		url: url,
		colModels: [
			{
				key: 'description',
				fixed: true,
				label: 'description',
				filterable: true,
				sortable: true,
				cellFormatter: function (td, value) {
					if (!value) {
						return '';
					}
					return value;
				}
			},
			{
				key: 'number',
				width: '100px',
				fixed: true,
				label: 'Number',
				filterable: true,
				sortable: true,
				filterAlias: 'numberStr',
				filterToolbarSettings: {
					allowResetButton: true,
					allowSubmitButton: false,
					onEnter: false,
					onChange: true,
				},
			},
			{
				key: 'row',
				width: '60px',
				fixed: true,
				label: 'Row',
				filterable: true,
				sortable: true,
				filterAlias: 'rowStr',
				filterToolbarSettings: {
					allowResetButton: true,
					allowSubmitButton: false,
					onEnter: false,
					onChange: true,
				},
			},
			{
				key: 'area',
				width: '60px',
				fixed: true,
				label: 'Area',
				filterable: true,
				sortable: true
			},
			{
				key: 'type',
				width: '190px',
				fixed: true,
				label: 'type',
				sortable: true
			}
		],
		sortBy: 'type ASC, name DESC',
		beforeRequest: [function (request) {
			if (request.filter) {
				request.filters = JSON.stringify(request.filter);
			}
		}]
	});
});

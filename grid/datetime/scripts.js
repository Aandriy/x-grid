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
					if (m.isValid()) {
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
				label: 'Range',
				sortable: true,
				filterOption: 'cn',
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
				afterFilterToolbarFormatter: function ($td) {
					var $input = $td.find('input');
					$input.daterangepicker({
						autoUpdateInput: false,
						locale: {
							format: 'YYYY-MM-DD'
						},
					},
						function (start, end) {
							var value = '';
							if (start.isValid() && end.isValid()) {
								value = start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD');
							}
							$input.val(value);
						});
				},
				filterRuleFormatter: function (rule, rules, colModel, createRule) {
					var range = rule.data.split(' - ');
					if (range[0] === range[1]) {
						range.splice(1);
					}
					var start = moment(range[0] || '');
					var end = moment(range[1] || '');

					if (start.isValid() && end.isValid()) {
						rules.push(new createRule(start.valueOf(), rule.field, 'le'));
						rules.push(new createRule(end.valueOf(), rule.field, 'ge'));
					} else if (start.isValid()) {
						rule.data = start.valueOf();
						return rule;
					}
					return null;
				},
				filterType: function (val) {
					var date = moment(val);
					if (date.isValid()) {
						return moment(date.format('YYYY-MM-DD'), 'YYYY-MM-DD').valueOf();
					}
					return 0;
				}
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
					selectOptions: [{ "label": "All" }, { "label": "Yes", "value": true }, { "label": "No", "value": false }],
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

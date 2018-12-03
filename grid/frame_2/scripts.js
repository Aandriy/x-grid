
	$(function () {
		$('.grid').Xgrid({
			data: mydata,
			filterToolbar: true,
			colModels: [
				{
					key: 'date',
					width: '140px',
					fixed: true,
					label: 'Date',
					filterable: true,
					sortable: true
				},
				{
					key: 'performanceName',
					width: '100px',
					fixed: true,
					label: 'Performance',
					filterable: true,
					sortable: true
				},
				{
					key: 'performanceDescription',
					label: 'Performance Description',
					filterable: true,
					sortable: true
				},
				{
					key: 'description',
					label: 'description',
					filterable: true,
					sortable: true,
					cellFormatter: function (td, value, rowData) {
						if (!value) {
							return '';
						}
						return '<a href="#' + rowData.id + '">' + value + '</a>';
					}
				},
				
	
				{
					key: 'age',
					width: '90px',
					fixed: true,
					label: 'age',
					filterable: true,
					sortable: true
				},
				{
					key: 'area',
					width: '100px',
					fixed: true,
					label: 'area',
					filterable: true,
					sortable: true
				},
	
				{
					key: 'boughtTickets',
					width: '50px',
					fixed: true,
					label: '<i class="glyphicon glyphicon-shopping-cart"></i>',
					sortable: true,
					cellFormatter: function (td, value, rowData) {
						if (value) {
							return '<a href=#' + rowData.id + '">' + value+'</a>';
						}
						return '';
					}
				},
				{
					key: 'totalTickets',
					width: '50px',
					fixed: true,
					label: '<i class="glyphicon glyphicon-tags"></i>',
	
				},
				
				{
					key: 'userTickets',
					width: '50px',
					fixed: true,
					label: '<i class="glyphicon glyphicon-user"></i>',
					sortable: true,
					cellFormatter: function (td, value, rowData) {
						if (value) {
							return '<a href="' + rowData.id + '">' + value+'</a>';
						}
						return '';
					}
				},
				{
					key: 'global',
					label: '<i class="glyphicon glyphicon-globe"></i>',
					sortable: true,
					width: '30px',
					fixed: true,
					cellFormatter: function (td, v) {
						if (v) {
							return '<i class="glyphicon glyphicon-ok"></i>';
						}
						return '';
					}
				},
			],
			//sortBy: 'tax ACS, key DESC',
			//sortBy: [{ by: 'tax', order: 'ACS' }, { by: 'key', order: 'DESC' }],
			filterToolbar: false,

		});
	});

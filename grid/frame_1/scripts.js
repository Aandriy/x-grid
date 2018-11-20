function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


(function () {
	var mydata = [
		{ key: "1", invdate: "2007-10-01", name: "test", note: "note", amount: "200.00", tax: "10.00", total: "110.00", description: 'What is Lorem Ipsum?' },
		{ key: "2", invdate: "2007-10-02", name: "test2", note: "note2", amount: "300.00", tax: "20.00", total: "220.00" },
		{ key: "3", invdate: "2007-09-03", name: "test3", note: "note3", amount: "400.00", tax: "30.00", total: "330.00" },
		{ key: "4", invdate: "2007-10-04", name: "test", note: "note", amount: "200.00", tax: "10.00", total: "410.00", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
		{ key: "5", invdate: "2007-10-05", name: "test2", note: "note2", amount: "300.00", tax: "20.00", total: "520.00" },
		{ key: "6", invdate: "2007-09-06", name: "test3", note: "note3", amount: "400.00", tax: "30.00", total: "630.00" },
		{ key: "7", invdate: "2007-10-06", name: "test", note: "note", amount: "200.00", tax: "10.00", total: "710.00", description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
		{ key: "8", invdate: "2007-10-07", name: "test2", note: "note2", amount: "300.00", tax: "20.00", total: "820.00" },
		{ key: "9", invdate: "2007-09-08", name: "test3", note: "note3", amount: "400.00", tax: "30.00", total: "930.00" },
		{ key: "10", invdate: "2007-10-09", name: "test", note: "note", amount: "200.00", tax: "10.00", total: "1010.00", description: 'What is Lorem Ipsum?' },
		{ key: "11", invdate: "2007-10-10", name: "test2", note: "note2", amount: "300.00", tax: "20.00", total: "1120.00" },
		{ key: "12", invdate: "2007-09-11", name: "test3", note: "note3", amount: "400.00", tax: "30.00", total: "1230.00" },
		{ key: "13", invdate: "2007-10-12", name: "test", note: "note", amount: "200.00", tax: "10.00", total: "1310.00", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
		{ key: "14", invdate: "2007-10-13", name: "test2", note: "note2", amount: "300.00", tax: "20.00", total: "1420.00" },
		{ key: "15", invdate: "2007-09-14", name: "test3", note: "note3", amount: "400.00", tax: "30.00", total: "1530.00" },
		{ key: "16", invdate: "2007-10-15", name: "test", note: "note", amount: "200.00", tax: "10.00", total: "1610.00", description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
		{ key: "17", invdate: "2007-10-16", name: "test2", note: "note2", amount: "300.00", tax: "20.00", total: "1720.00" },
		{ key: "18", invdate: "2007-09-17", name: "test3", note: "note3", amount: "400.00", tax: "30.00", total: "1830.00" }
	];
	$(function () {
		$('.grid').Xgrid({
			data: mydata,
			colModels: [
				{ key: 'key', width: 60, sorttype: "int", label: 'Key', sortable: true },
				{ key: 'invdate', width: 90, sorttype: "date", label: 'Date', filterable: true },
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

				{ key: 'amount', width: 80, align: "right", sorttype: "float", label: 'Amount', hidden: true },
				{ key: 'tax', width: 80, align: "right", sorttype: "float", label: 'Tax', fixed: true },
				{ key: 'total', width: 80, align: "right", sorttype: "float", label: 'Total', filterable: true },
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
		var _Xgrid = $('.grid').data('Xgrid');
		$('.grid').after($btn);
		$btn.on('click', function () {
			mydata[0].key = getRandomInt(-100,100);
			_Xgrid.setGridData(mydata);
		});
		
	});
})();
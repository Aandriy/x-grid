(function () {
	var mydata = [
		{
		  "id": 1,
		  "row": 1,
		  "rowStr": "1",
		  "number": 1,
		  "numberStr": "1",
		  "type": "Партер",
		  "area": "A",
		  "description": null,
		  "available":true
		},
		{
		  "id": 9,
		  "row": 1,
		  "rowStr": "1",
		  "number": 9,
		  "numberStr": "9",
		  "type": "Партер",
		  "area": "A",
		  "description": 'null asd asd asd',
		  "available":true
		},
		{
		  "id": 13,
		  "row": 1,
		  "rowStr": "1",
		  "number": 13,
		  "numberStr": "13",
		  "type": "Партер",
		  "area": "A",
		  "description": null,
		  "available":true
		},
		{
		  "id": 74,
		  "row": 4,
		  "rowStr": "4",
		  "number": 1,
		  "numberStr": "1",
		  "type": "Партер",
		  "area": "A",
		  "description": null,
		  "available":true
		},
		{
		  "id": 76,
		  "row": 4,
		  "rowStr": "4",
		  "number": 3,
		  "numberStr": "3",
		  "type": "Партер",
		  "area": "A",
		  "description": null,
		  "available":true
		},
		{
		  "id": 78,
		  "row": 4,
		  "rowStr": "4",
		  "number": 5,
		  "numberStr": "5",
		  "type": "Партер",
		  "area": "A",
		  "description": null
		},
		{
		  "id": 80,
		  "row": 4,
		  "rowStr": "4",
		  "number": 7,
		  "numberStr": "7",
		  "type": "Партер",
		  "area": "A",
		  "description": null
		},
		{
		  "id": 520,
		  "row": 1,
		  "rowStr": "1",
		  "number": 6,
		  "numberStr": "6",
		  "type": "Амфітеатр 3-го поверху",
		  "area": "A",
		  "description": null,
		  "available":true
		},
		{
		  "id": 522,
		  "row": 1,
		  "rowStr": "1",
		  "number": 8,
		  "numberStr": "8",
		  "type": "Амфітеатр 3-го поверху",
		  "area": "A",
		  "description": null
		},
		{
		  "id": 523,
		  "row": 1,
		  "rowStr": "1",
		  "number": 9,
		  "numberStr": "9",
		  "type": "Амфітеатр 3-го поверху",
		  "area": "A",
		  "description": null
		},
		{
		  "id": 524,
		  "row": 1,
		  "rowStr": "1",
		  "number": 10,
		  "numberStr": "10",
		  "type": "Амфітеатр 3-го поверху",
		  "area": "A",
		  "description": null
		},
		{
		  "id": 599,
		  "row": 4,
		  "rowStr": "4",
		  "number": 4,
		  "numberStr": "4",
		  "type": "Амфітеатр 3-го поверху",
		  "area": "A",
		  "description": null
		},
		{
		  "id": 601,
		  "row": 4,
		  "rowStr": "4",
		  "number": 6,
		  "numberStr": "6",
		  "type": "Амфітеатр 3-го поверху",
		  "area": "A",
		  "description": null
		}
	  ];
	$(function () {
		$('.grid').Xgrid({
			data: mydata,
			colModels: [
				{
					key: 'available',
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
						selectOptions: [{ "label": "Yes", "value": true }, { "label": "No", "value": false }],
						
					},
					
				},
				{
					key: 'number',
					width: '100px',
					fixed: true,
					label: 'Number',
					filterable: true,
					sortable: true,
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
					sortable: true,
					cellFormatter: 'text'
				},
				{
					key: 'type',
					width: '200px',
					fixed: true,
					label: 'Тип',
					filterable: true,
					sortable: true,
					filterOption: 'eq',
					filterToolbarSettings: {
						formControlType: 'select',
						allowResetButton: true,
						allowSubmitButton: false,
						onEnter: false,
						onChange: true,
						selectOptions: [{"label":"Партер","value":"Партер"},{"label":"Амфітеатр бельетаж","value":"Амфітеатр бельетаж"},{"label":"Амфітеатр 3-го поверху","value":"Амфітеатр 3-го поверху"},{"label":"Ложа 3-го поверху №2","value":"Ложа 3-го поверху №2"},{"label":"Ложа 3-го поверху №3","value":"Ложа 3-го поверху №3"},{"label":"Ложа 3-го поверху №4","value":"Ложа 3-го поверху №4"},{"label":"Ложа 3-го поверху №5","value":"Ложа 3-го поверху №5"},{"label":"Ложа 3-го поверху №6","value":"Ложа 3-го поверху №6"},{"label":"Ложа 3-го поверху №7","value":"Ложа 3-го поверху №7"},{"label":"Ложа 3-го поверху №8","value":"Ложа 3-го поверху №8"},{"label":"Ложа 3-го поверху №9","value":"Ложа 3-го поверху №9"},{"label":"Ложа бельетаж №1","value":"Ложа бельетаж №1"},{"label":"Ложа бельетаж №2","value":"Ложа бельетаж №2"},{"label":"Ложа бельетаж №3","value":"Ложа бельетаж №3"},{"label":"Ложа бельетаж №4","value":"Ложа бельетаж №4"},{"label":"Ложа бельетаж №5","value":"Ложа бельетаж №5"},{"label":"Ложа бельетаж №6","value":"Ложа бельетаж №6"},{"label":"Ложа бельетаж №7","value":"Ложа бельетаж №7"},{"label":"Ложа бельетаж №8","value":"Ложа бельетаж №8"},{"label":"Ложа бельетаж №9","value":"Ложа бельетаж №9"},{"label":"Ложа бельетаж №10","value":"Ложа бельетаж №10"},{"label":"Ложа бельетаж №11","value":"Ложа бельетаж №11"},{"label":"Ложа бельетаж №12","value":"Ложа бельетаж №12"},{"label":"Ложа бенуар №1","value":"Ложа бенуар №1"},{"label":"Ложа бенуар №2","value":"Ложа бенуар №2"},{"label":"Ложа бенуар №3","value":"Ложа бенуар №3"},{"label":"Ложа бенуар №4","value":"Ложа бенуар №4"},{"label":"Ложа бенуар №5","value":"Ложа бенуар №5"},{"label":"Ложа бенуар №6","value":"Ложа бенуар №6"},{"label":"Ложа бенуар №7","value":"Ложа бенуар №7"},{"label":"Ложа бенуар №8","value":"Ложа бенуар №8"}] || [],
						attr: {
							multiple: 'multiple',
							size: '1'
						}
					},
				}
	
			],
			//sortBy: 'tax ACS, key DESC',
			//sortBy: [{ by: 'tax', order: 'ACS' }, { by: 'key', order: 'DESC' }],
			filterToolbar: false,

		});

		console.log($('.grid').data('Xgrid'));
	});
})();
class CellFormatters {
	booleanYesNo($td, value, rowData, data) {
		if (value) {
			return 'Yes'
		}
		return 'No';
	};
	text($td, value, rowData, data) {
		if (typeof (value) === 'undefined' || value === null) {
			value = '';
		}
		
		var $item = $('<div class="ellipsis"></div>')
		$td.html($item);
		$item.text(value);
	};

	html($td, value, rowData, data) {
		if (typeof (value) === 'undefined' || value === null) {
			value = '';
		}
		return value;
	};
}
export default new CellFormatters();
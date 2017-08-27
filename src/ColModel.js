import sortFormatters from './SortFormatters.js';
class ColModel {
	constructor(model, order) {
		this.label = '';
		this.hidden = false;
		this.resizable = false;
		this.sortable = false;
		this.order = order;
		$.extend(this, model);

		if (typeof (this.alias) === 'undefined') {
			this.alias = this.key;
		}
		if (typeof (this.key) === 'undefined') {
			this.alias = this.alias;
		}
		if (model.sorttype) {
			if (typeof (model.sorttype) === 'function') {
				this.sortFormatter = model.sorttype;
			} else if (sortFormatters[model.sorttype]) {
				this.sortFormatter = sortFormatters[model.sorttype];
			} else {
				this.sortFormatter = sortFormatters['text'];
			}
		} else {
			this.sortFormatter = sortFormatters['text'];
		}
	}

	labelFormatter() {
		return this.label;
	};

	cellFormatter($td, value, rowData, data) {
		return '<div class="ellipsis">' + value + '</div>';
	}

	filterFormatter(value, rowData, data) {
		return value;
	}


};

export default ColModel;

import Pipes from './Pipes.js';
class ColModel {
	constructor(model, order) {
		this.label = '';
		this.hidden = false;
		this.resizable = false;
		this.sortable = false;
		this.order = order;
		$.extend(this, model);

		const pipes = new Pipes({
			insensitive: this.insensitive
		});

		if (typeof (this.alias) === 'undefined') {
			this.alias = this.key;
		}
		if (typeof (this.key) === 'undefined') {
			this.alias = this.alias;
		}
		if (model.sorttype && typeof (model.sorttype) === 'function') {
			this.sortFormatter = model.sorttype;
		} else {
			this.sortFormatter = pipes.getByType(model.sorttype);
		}

		if (model.filtertype && typeof (model.filtertype) === 'function') {
			this.filterFormatter = model.filtertype;
		} else {
			this.filterFormatter = pipes.getByType(model.filtertype);
		}
	}

	labelFormatter() {
		return this.label;
	};

	cellFormatter($td, value, rowData, data) {
		return '<div class="ellipsis">' + value + '</div>';
	};

	filterToolbarFormatter($cell, colModel) {
		return `<div class="input-group input-group-sm">
			<input type="text" class="form-control Xgrid-input Xgrid-filter Xgrid-onEnter" placeholder="Username" />
			<span class="input-group-btn">
				<span class="btn btn-default"><i class="glyphicon glyphicon-remove"></i></span>
				<span class="btn btn-default"><i class="glyphicon glyphicon-ok"></i></span>
			</span>
		 </div>`;
	};
};

export default ColModel;
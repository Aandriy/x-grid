import pipes from './Pipes.js';
import FilterToolbarModel from './FilterToolbarModel.js';
class ColModel {
	constructor(model, order) {
		this.order = order;
		this.label = '';
		this.filterable = false;
		this.filterType = 'text';
		this.filterOption = 'cn';
		this.sortable = false;
		this.sortType = 'text';
		this.hidden = false;
		this.resizable = false;
		this.insensitive = false;

		$.extend(this, model);
		this.filterToolbarSettings = new FilterToolbarModel(model.filterToolbarSettings);

		if (typeof (this.alias) === 'undefined') {
			this.alias = this.key;
		}
		if (typeof (this.key) === 'undefined') {
			this.alias = this.alias;
		}
		if (model.sortType && typeof (model.sortType) === 'function') {
			this.sortFormatter = model.sortType;
		} else {
			this.sortFormatter = pipes.getByType(model.sortType);
		}

		if (model.filterType && typeof (model.filterType) === 'function') {
			this.filterFormatter = model.filterType;
		} else {
			this.filterFormatter = pipes.getByType(model.filterType);
		}
		this.dependent = [];
		this._check = function () {
			if (this.hidden) {
				this.dependent.forEach(function (item) {
					item.$item.detach();
				});
			} else {
				this.dependent.forEach(function (item) {
					item.$anchor.after(item.$item);
				});
			}
		}
	}

	labelFormatter() {
		return this.label;
	};

	cellFormatter($td, value, rowData, data) {
		if (typeof (value) === 'undefined') {
			value = '';
		}
		return '<div class="ellipsis">' + value + '</div>';
	};

	filterToolbarFormatter($cell, colModel) {
		const settings = colModel.filterToolbarSettings || {};
		let $control,
			$container,
			$wrap = $('<div class="Xgrid-filter-control-wrap"></div>'),
			str = '<div class="Xgrid-filter-wrapper">';

		if (settings.allowResetButton || settings.allowSubmitButton) {
			str += '<span class="Xgrid-filter-btns">';
			if (settings.allowResetButton) {
				str += '<span class="Xgrid-btn Xgrid-reset">&#10006;</span>';
			}
			if (settings.allowSubmitButton) {
				str += '<span class="Xgrid-btn Xgrid-onSubmit">&#10004;</span>';
			}
			str += '</span>';
		}
		str += '</div>'
		switch (settings.formControlType) {
			case 'select':
				$control = $('<select class="Xgrid-select Xgrid-filter"  />');
				settings.selectOptions.forEach(function (element, i) {
					$control.append('<option value="' + i + '">' + element.label + '</option>')
				});
				$control.val([]).each(function(){
					this.selectedIndex = -1;
				});
				break;
			default:
				$control = $('<input type="text" class="Xgrid-input Xgrid-filter" />');
				break;
		}
		if (settings.onChange) {
			$control.addClass('Xgrid-onChange');
		}
		if (settings.onKeydown) {
			$control.addClass('Xgrid-onKeydown');
		}
		if (settings.onEnter) {
			$control.addClass('Xgrid-onEnter');
		}
		if (settings.attr) {
			$control.attr(settings.attr);
		}

		$container = $(str);
		$wrap.append($control);
		$container.append($wrap);
		$cell.html($container);
	};
};

export default ColModel;
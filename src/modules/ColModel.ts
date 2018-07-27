import pipes from './Pipes';
import FilterToolbarModel from './FilterToolbarModel';

class ColModel implements IColModel {
	alias: string;
	filterFormatter: Function;
	filterOption = 'cn';
	filterToolbarSettings: any;
	filterType = 'text';
	filterable = false;
	fixed = false;
	hidden = false;
	insensitive = false;
	key: string;
	label = '';
	order: number;
	resizable = false;
	sortFormatter: Function;
	sortType = 'text';
	sortable = false;
	width: number;

	dependent = [];
	_check: Function;

	constructor(model, order) {
		this.order = order;

		$.extend(this, model);
		this.filterToolbarSettings = new FilterToolbarModel(model.filterToolbarSettings);

		if (typeof (this.alias) === 'undefined') {
			this.alias = this.key;
		}
		if (typeof (this.key) === 'undefined') {
			this.key = this.alias;
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
		this._check = function (): void {
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
				$control.val([]).each(function () {
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
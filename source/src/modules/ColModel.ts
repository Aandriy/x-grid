import pipes from './Pipes';
import FilterToolbarModel from './FilterToolbarModel';
import CellFormatters from './CellFormatters';

class ColModel implements IColModel {
	alias: string;
	filterFormatter: Function;
	filterOption = 'cn';
	filterToolbarSettings: IFilterToolbarModel;
	filterType = 'string' as TFilterType;
	filterable = false;
	fixed = false;
	hidden = false;
	insensitive = false;
	key: string;
	label = '';
	order: number;
	resizable = false;
	sortFormatter: Function;
	sortType = 'string' as TSortType;
	sortable = false;
	width: number;

	dependent = [];
	_check: Function;
	cellFormatter: Function;

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
		if (typeof(model.cellFormatter) === 'string' && typeof(CellFormatters[model.cellFormatter]) === 'function') {
			this.cellFormatter = CellFormatters[model.cellFormatter];
		} else if (typeof(model.cellFormatter) === 'function') {
			this.cellFormatter = model.cellFormatter;
		} else {
			this.cellFormatter = CellFormatters['text'];
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
'use strict';
class FilterToolbar {
	constructor(storage, viewModel, options) {
		this.storage = storage;
		this.viewModel = viewModel;
		this.options = options;
		this._bind();
		this.timeoutOnKeydown = null;
	}
	triggerToolbar() {
		const storage = this.storage,
			viewModel = this.viewModel,
			colModels = storage.colModels,
			rules = [],
			defaultSearch = 'cn',
			groupOp = 'AND';
		let ruleGroup = null;

		if (!storage.$filterToolbarItems) {
			return this;
		}

		storage.$filterToolbarItems.each(function (i) {
			const $filter = $(this),
				$elem = $filter.find('.Xgrid-filter')
			if ($elem.length) {
				const colModel = colModels[i],
					settings = colModel.filterToolbarSettings || {},
					filterOption = colModel.filterOption || defaultSearch,
					fieldName = colModel.alias || colModel.key;

				let value = $elem.val();

				if (typeof (settings.transformData) === 'function') {
					value = settings.transformData(value, settings);
				}

				if (value || filterOption === "nu" || filterOption === "nn") {
					rules.push({
						field: fieldName,
						op: filterOption,
						data: value
					});
				}
			}
		});

		if (rules.length) {
			ruleGroup = {
				groupOp,
				rules
			}
		}
		storage.filter = ruleGroup;
	};

	_bind() {
		const storage = this.storage;
		storage.$headTable.on('keypress', 'input.Xgrid-input.Xgrid-onEnter', this._handlerFilterOnEnter.bind(this));
		storage.$headTable.on('keydown', 'input.Xgrid-input.Xgrid-onKeydown', this._handlerFilterOnKeydown.bind(this));
		storage.$headTable.on('change', '.Xgrid-filter.Xgrid-onChange', this._handlerFilterOnChange.bind(this));
		storage.$headTable.on('click', '.Xgrid-reset', this._handlerFilterOnReset.bind(this));
		storage.$headTable.on('click', '.Xgrid-onSubmit', this._handlerFilterOnSubmit.bind(this));
	};

	_handlerFilterOnSubmit(e) {
		$(e.currentTarget).blur();
		this.triggerToolbar();
	};

	_handlerFilterOnReset(e) {
		const storage = this.storage,
			$sell = $(e.currentTarget).blur().parents('.Xgrid-filter-cell:eq(0)'),
			alias = $sell.attr('data-alias'),
			$control = $sell.find('.Xgrid-filter'),
			colModel = storage.colModelsDictionary[alias],
			data = $control.val();

		if (colModel) {
			if (colModel.filterToolbarSettings.formControlType === 'select') {
				if ($.isArray(data)) {
					if (data.length) {
						$control.val([]);
					}
				} else {
					if (typeof (data) !== 'undefined') {
						$control.val([]);
					}
				}
			} else {
				$control.val('');
			}
			this.triggerToolbar();
		}
	};
	_handlerFilterOnChange(e) {
		this.triggerToolbar();
	};
	_handlerFilterOnKeydown(e) {
		
		var key = e.which;
		switch (key) {
			case 13:
				return false;
			case 9:
			case 16:
			case 37:
			case 38:
			case 39:
			case 40:
			case 27:
				break;
			default:

				if (this.timeoutOnKeydown) {
					clearTimeout(this.timeoutOnKeydown);
				}
				this.timeoutOnKeydown = setTimeout(
					() => {
						this.triggerToolbar();
					},
					500
				);
		}
	};

	_handlerFilterOnEnter(e) {
		var key = e.charCode || e.keyCode || 0;
		if (key === 13) {
			e.preventDefault();
			this.triggerToolbar();
		}
	}
}
export default FilterToolbar;
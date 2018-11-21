import FilterModel from './FilterModel';
import tools from './Tools';

export default class FilterToolbar {
	storage: IStorage;
	viewModel: IViewModel;
	options: IOptions;
	timeoutOnKeydown = null;

	constructor(storage, viewModel, options) {
		this.storage = storage;
		this.viewModel = viewModel;
		this.options = options;
		this._bind();
	}

	triggerToolbar() {
		const storage = this.storage;
		const options = this.options;
		const colModels = storage.colModels;
		const rules = [];
		const defaultSearch = 'cn';
		const groupOp = options.filterToolbarGroupOp === 'AND' ? 'AND' : 'OR';
		let ruleGroup = null;

		if (!storage.$filterToolbarItems) {
			return this;
		}

		storage.$filterToolbarItems.each(function (i) {
			const $filter = $(this);
			const $elem = $filter.find('.Xgrid-filter')

			if ($elem.length) {
				const colModel = colModels[i];
				const settings = colModel.filterToolbarSettings;
				const filterOption = colModel.filterOption || defaultSearch;
				const fieldName = colModel.filterAlias || colModel.alias || colModel.key;
				let value = $elem.val();

				if (typeof (settings.transformData) === 'function') {
					value = settings.transformData(value, settings);
				}

				if (value && colModel.insensitive) {
					value = String(value).toLowerCase();
				}

				if ((typeof (value) !== 'undefined' && value !== '' && value !== null) || filterOption === "nu" || filterOption === "nn") {
					let rule: IFilterModel | null = new FilterModel(value, fieldName, filterOption);

					if (typeof (colModel.filterRuleFormatter) === 'function') {
						rule = colModel.filterRuleFormatter(rule, rules, colModel, FilterModel);
					}

					if (rule) {
						rules.push(rule);
					}
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

	private _bind(): void {
		const storage = this.storage;

		storage.$headTable.on('keypress', 'input.Xgrid-input.Xgrid-onEnter', this._handlerFilterOnEnter.bind(this));
		storage.$headTable.on('keydown', 'input.Xgrid-input.Xgrid-onKeydown', this._handlerFilterOnKeydown.bind(this));
		storage.$headTable.on('change', '.Xgrid-filter.Xgrid-onChange', this._handlerFilterOnChange.bind(this));
		storage.$headTable.on('click', '.Xgrid-reset', this._handlerFilterOnReset.bind(this));
		storage.$headTable.on('click', '.Xgrid-onSubmit', this._handlerFilterOnSubmit.bind(this));
	};

	private _handlerFilterOnSubmit(e: JQueryEventObject) {
		$(e.currentTarget).blur();
		this.triggerToolbar();
	};

	private _handlerFilterOnReset(e: JQueryEventObject) {
		const storage = this.storage;
		const $sell = $(e.currentTarget).blur().parents('.Xgrid-filter-cell:eq(0)');
		const alias = $sell.attr('data-alias');
		const $control = $sell.find('.Xgrid-filter');
		const colModel = storage.colModelsDictionary[alias];
		const { filterToolbarSettings } = colModel;

		if (colModel) {
			if (filterToolbarSettings.formControlType === 'select') {
				$control.val([]).each((i: number, select: HTMLSelectElement) => {
					const index = tools.getDefaultSelectedIndex(colModel);

					select.selectedIndex = index;
				});
			} else {
				$control.val('');
			}
			this.triggerToolbar();
		}
	};

	private _handlerFilterOnChange() {
		this.triggerToolbar();
	};

	private _handlerFilterOnKeydown(e: JQueryEventObject) {
		const key = e.which;

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
				this.timeoutOnKeydown = setTimeout(() => {
					this.triggerToolbar();
				}, 500);
		}
	};

	private _handlerFilterOnEnter(e: JQueryEventObject) {
		const key = e.charCode || e.keyCode || 0;
		if (key === 13) {
			e.preventDefault();
			this.triggerToolbar();
		}
	}
}

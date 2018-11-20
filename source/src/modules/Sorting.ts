import SortRule from './SortRule';

export default class Sorting {
	storage: IStorage;
	viewModel: IViewModel;
	options: IOptions;

	constructor(storage, viewModel, options) {
		this.storage = storage;
		this.viewModel = viewModel;
		this.options = options;

		this.bind();
	};

	sortByAlias(alias: string) {
		const { storage, viewModel } = this;
		const colModel = storage.colModelsDictionary[alias];
		let sortBy: ISortRule[];

		if (colModel) {
			sortBy = viewModel.sortBy;
			let i = sortBy.length;
			let sortRule: ISortRule;

			while (i--) {
				if (sortBy[i].by === alias) {
					sortRule = sortBy.splice(i, 1)[0];
					break;
				}
			}

			if (!sortRule) {
				sortRule = new SortRule(alias);
			} else {
				sortRule.triggerOrder();
			}

			if (this.options.multiSorting) {
				sortBy.unshift(sortRule)
			} else {
				sortBy = [sortRule]
			}
			viewModel.sortBy = sortBy;
		}
	};

	bind(): void {
		const $headTable = this.storage.$headTable;

		this._off();
		$headTable.on('click.Xgrid', '.Xgrid-thead-label.sortable', this._handlerSortColumn.bind(this));
	};

	private _off(): void {
		this.storage.$headTable.off('.Xgrid');
	};

	private _handlerSortColumn(e: JQueryEventObject): void {
		e.preventDefault();
		const $item = $(e.currentTarget);
		const alias = $item.attr('data-alias');
		const colmodel = this.storage.colModelsDictionary[alias];

		$item.blur();
		if (colmodel && colmodel.sortable) {
			this.sortByAlias(alias);
		}
	};
};

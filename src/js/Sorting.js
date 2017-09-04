import SortRule from './SortRule.js';
class Sorting {
	constructor(storage, viewModel, options) {
		this.storage = storage;
		this.viewModel = viewModel;
		this.options = options;
		this.bind();
	};
	sortByAlias(alias) {
		const storage = this.storage,
			viewModel = this.viewModel,
			colModel = storage.colModelsDictionary[alias];
		let sortBy;
		if (colModel) {
			sortBy = viewModel.sortBy;
			let i = sortBy.length,
				sortRule;

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

	bind() {
		const $headTable = this.storage.$headTable;
		this._off();
		$headTable.on('click.Xgrid', '.Xgrid-thead-label.sortable', this._handlerSortColumn.bind(this));
	};

	_off() {
		this.storage.$headTable.off('.Xgrid');
	};

	_handlerSortColumn(e) {
		e.preventDefault();
		const $item = $(e.currentTarget),
			alias = $item.attr('data-alias'),
			colmodel = this.storage.colModelsDictionary[alias];
		$item.blur();
		if (colmodel && colmodel.sortable) {
			this.sortByAlias(alias);
		}
	};
};

export default Sorting;
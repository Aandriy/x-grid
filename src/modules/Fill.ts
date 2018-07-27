export default class Fill {
	viewModel: IViewModel;
	storage: IStorage;

	constructor(storage, viewModel) {
		this.viewModel = viewModel;
		this.storage = storage;
	};

	thead(): void {
		const storage = this.storage;
		const classRules = ['resizable', 'sortable', 'filterable', 'hidden'];
		const colModels = storage.colModels;

		storage.$headLabels.each((i: number, th: HTMLElement) => {
			const $th = $(th);
			const $wrapper = $(document.createElement('div'));
			const colModel = colModels[i];

			$th.data('Xgrid.data', colModel);

			let data = colModel.labelFormatter($wrapper, $th, colModel, i);
			if (typeof (data) !== 'undefined') {
				$wrapper.html(data);
			}

			th.innerHTML = '';
			$th.append($wrapper);
			$.each(classRules, function (i, mark) {
				if (colModel[mark]) {
					$th.addClass(mark);
				} else {
					$th.removeClass(mark);
				}
			});
		});
		this.filterToolbar();
	};

	filterToolbar(): void {
		const storage = this.storage;
		const colModels = storage.colModels;

		if (storage.$filterToolbarItems) {
			storage.$filterToolbarItems.each(function (i) {
				const $cell = $(this),
					colModel = colModels[i];
				if (colModel.filterable && colModel.filterToolbarFormatter) {
					let data = colModel.filterToolbarFormatter($cell, colModel);
					if (typeof (data) !== 'undefined') {
						$cell.html(data);
					}
				} else {
					$cell.empty();
				}
			})
		}
	};

	tbody(): void {
		const { storage, viewModel } = this;
		const fragment = document.createDocumentFragment();
		const dataToDisplay = viewModel.data;
		const colModels = storage.colModels;
		const $headWrap = storage.$headTable.parent();
		const $gridWrap = storage.$gridTable.parent();
		const data = storage.data;
		const tbody = this._createShadowBody(fragment);
		let num = 0;

		colModels.forEach(function (colModel, i) {
			colModel._check();
			const $td = storage.$headLabels.eq(i);

			if (!colModel.hidden) {
				num++;
				if (num % 2) {
					$td.addClass('odd');
				} else {
					$td.addClass('even');
				}
			}
		});

		$(tbody).find('tr').each((i, tr) => {
			const rowData = dataToDisplay[i];

			this._fillRow($(tr), rowData, data);
		});

		storage.$gridTable.find('>tbody').remove();
		$headWrap.css({ 'padding-right': '' });
		storage.$gridTable.append(tbody);

		if ($gridWrap[0].offsetWidth - $gridWrap[0].clientWidth) {
			$headWrap.css({ 'padding-right': storage.scrollbarWidth + 'px' });
		}
		this._updateHead();
	};

	private _createShadowBody(fragment: DocumentFragment) {
		const { storage, viewModel } = this;
		const colModels = storage.colModels;
		const tbody = document.createElement('tbody');
		const rowsCount = viewModel.data.length;
		let tr = '<tr>' + Array(colModels.length + 1).join('<td></td>') + '</tr>';
		let trs = '<tbody>' + new Array(rowsCount + 1).join(tr) + '<tbody>';

		if (!fragment) {
			fragment = document.createDocumentFragment();
		}

		tbody.innerHTML = trs;
		fragment.appendChild(tbody);

		return tbody;
	};

	private _fillRow($tr, rowData, data): void {

		const $tds = $tr.find('td');
		const storage = this.storage;
		const colModels = storage.colModels;
		let num = 0;

		$tr.data('Xgrid.data', rowData);

		$.each(colModels, function (i, colModel) {
			let value = rowData[colModel.key],
				$td = $tds.eq(i),
				data;

			if (colModel.hidden) {
				$td.remove();
			} else {
				num++;
				data = colModel.cellFormatter($td, value, rowData, data);
				if (num % 2) {
					$td.addClass('odd');
				} else {
					$td.addClass('even');
				}
				if (typeof (data) !== 'undefined') {
					$td.html(data);
				}
			}
		});
	};

	private _updateHead(): void {
		const { storage, viewModel } = this;
		const colModels = storage.colModels;
		const $headLabels = storage.$headLabels;
		const sortBy = {};

		viewModel.sortBy.forEach((sortRule) => {
			sortBy[sortRule.by] = sortRule.order;
		});

		colModels.forEach((colModel, i) => {
			const $label = $headLabels.eq(i);
			const order = sortBy[colModel.alias];

			if (order) {
				$label.attr('data-sort', order);
			} else {
				$label.removeAttr('data-sort');
			}
		});
	};
};

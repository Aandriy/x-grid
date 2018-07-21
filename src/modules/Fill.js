'use strict';
class Fill {
	constructor(storage, viewModel) {
		this.viewModel = viewModel;
		this.storage = storage;
	};

	thead() {
		const self = this,
			storage = this.storage,
			classRules = ['resizable', 'sortable', 'filterable', 'hidden'],
			colModels = storage.colModels;

		storage.$headLabels.each(function (i) {
			const $th = $(this),
				$wrapper = $(document.createElement('div')),
				colModel = colModels[i];

			$th.data('Xgrid.data', colModel);
			let data = colModel.labelFormatter($wrapper, $th, colModel, i);
			if (typeof (data) !== 'undefined') {
				$wrapper.html(data);
			}

			$th.html($wrapper);
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

	filterToolbar() {
		const self = this,
			storage = this.storage,
			viewModel = this.viewModel,
			colModels = storage.colModels;
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

	tbody() {
		const self = this,
			storage = this.storage,
			fragment = document.createDocumentFragment(),
			colModels = storage.colModels,
			viewModel = this.viewModel,
			dataToDisplay = viewModel.data,
			$headWrap = storage.$headTable.parent(),
			$gridWrap = storage.$gridTable.parent(),
			data = storage.data;

		let tbody,
			num = 0;

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

		tbody = this._createShadowBody(fragment);

		$(tbody).find('tr').each(function (i) {
			const rowData = dataToDisplay[i];
			self._fillRow($(this), rowData, data);
		});

		storage.$gridTable.find('>tbody').remove();
		$headWrap.css({ 'padding-right': '' });
		storage.$gridTable.append(tbody);

		if ($gridWrap.get(0).offsetWidth - $gridWrap.get(0).clientWidth) {
			$headWrap.css({ 'padding-right': storage.scrollbarWidth + 'px' });
		}
		this._updateHead();
	};

	_createShadowBody(fragment, amount) {
		const options = this.options,
			storage = this.storage,
			colModels = storage.colModels,
			tbody = document.createElement('tbody'),
			viewModel = this.viewModel,
			rowsCount = viewModel.data.length;

		let tr = '<tr>' + Array(colModels.length + 1).join('<td></td>') + '</tr>',
			trs = '<tbody>' + new Array(rowsCount + 1).join(tr) + '<tbody>';

		if (!fragment) {
			fragment = document.createDocumentFragment();
		}

		tbody.innerHTML = trs;

		fragment.appendChild(tbody);
		return tbody;
	};

	_fillRow($tr, rowData, data) {

		const $tds = $tr.find('td'),
			storage = this.storage,
			colModels = storage.colModels;
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

	_updateHead() {
		const self = this,
			storage = this.storage,
			colModels = storage.colModels,
			viewModel = this.viewModel,
			$headLabels = storage.$headLabels,
			sortBy = {};

		viewModel.sortBy.forEach(function (sortRule) {
			sortBy[sortRule.by] = sortRule.order;
		});

		colModels.forEach(function (colModel, i) {
			const $label = $headLabels.eq(i),
				order = sortBy[colModel.alias];
			if (order) {
				$label.attr('data-sort', order);
			} else {
				$label.removeAttr('data-sort');
			}
		});
	};
};

export default Fill;

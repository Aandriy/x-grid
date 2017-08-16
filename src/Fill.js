'use strict';
class Fill {
	constructor(storage, viewModel) {
		this.viewModel = viewModel;
		this.storage = storage;
	};

	thead() {
		const self = this,
			storage = this.storage,
			classRules = ['resizable', 'sortable', 'hidden'],
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
			$th.attr('data-name', colModel.id);
			$.each(classRules, function (i, mark) {
				if (colModel[mark]) {
					$th.addClass(mark);
				} else {
					$th.removeClass(mark);
				}
			});
		});
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
			data = storage.data,
			$tfootCells = storage.$gridTable.find('.Xgrid-tbody-w td'),
			$theadCells =  storage.$headTable.find('tr'),
			dependentCells = [];
		let tbody;
		colModels.forEach(function (model, i) {
			let cells = [];

			cells.push($tfootCells.get(i));
			$theadCells.each(function(){
				cells.push($(this).find('>*:eq('+i+')').get(0));
			});
			dependentCells.push($(cells));
		});
		tbody = this._createShadowBody(fragment);

		$(tbody).find('tr').each(function (i) {
			const rowData = dataToDisplay[i];
			self._fillRow($(this), rowData, data, dependentCells);
		});

		storage.$gridTable.find('>tbody').remove();
		$headWrap.css({ 'padding-right': '' });
		storage.$gridTable.append(tbody);

		if ($gridWrap.get(0).offsetWidth - $gridWrap.get(0).clientWidth) {
			$headWrap.css({ 'padding-right': storage.scrollbarWidth + 'px' });
		}
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

	_fillRow($tr, rowData, data, dependentCells) {

		const $tds = $tr.find('td'),
			storage = this.storage,
			colModels = storage.colModels;

		$tr.data('Xgrid.data', rowData);

		$.each(colModels, function (i, colModel) {
			let value = rowData[colModel.id],
				$td = $tds.eq(i),
				data = colModel.cellFormatter($td, value, rowData, data),
				$dependentCell = dependentCells[i];

			if (colModel.hidden) {
				$td.addClass('hidden');
			}
			$dependentCell[colModel.hidden?'addClass':'removeClass']('hidden')

			if (typeof (data) !== 'undefined') {
				$td.html(data);
			}
		});
	};
};

export default Fill;
import tools from './Tools.js';

class BuildInfrastructure {
	constructor(options, storage, viewModel) {
		this.viewModel = viewModel;
		this.options = $.extend({
			theadClass: 'table table-bordered table-striped',
			tbodyClass: 'table table-bordered table-striped',
			firstBtnTemplate: '<span class="btn btn-default"><i class="glyphicon glyphicon-step-backward"></i></span>',
			lastBtnTemplate: '<span class="btn btn-default"><i class="glyphicon glyphicon-step-forward"></i></span>',
			prevBtnTemplate: '<span class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i></span>',
			nextBtnTemplate: '<span class="btn btn-default"><i class="glyphicon glyphicon-chevron-right"></i></span>',
			currentPageTemplate: '<input type="text" class="form-control" />',
			paginationTemplate: `<div class="Xgrid-paggination input-group input-group-sm">
			<div class="input-group-btn" >{firstBtnTemplate}{prevBtnTemplate}</div>
				<span class="input-group-addon"> Page </span>
				{currentPageTemplate}
				<span class="input-group-addon"> of <span class="Xgrid-total-pages"></span></span>
				<div class="input-group-btn" >{nextBtnTemplate}{lastBtnTemplate}</div>
			</div>`
		}, options);

		this.storage = storage;
		this._exec();
	};
	buildFilterToolbar() {
		if (this.viewModel.filterToolbar) {
			this._buildFilterToolbar();
		}
	};
	_exec() {
		this._build();
		this._buildThead();
		this._buildTBody();
		this._buildPagination();
	};
	_buildFilterToolbar() {
		const storage = this.storage,
			viewModel = this.viewModel,
			$filter = $('<tbody class="Xgrid-thead-filter"><tr>' + new Array(storage.colModels.length + 1).join('<td class="Xgrid-filter-cell"></td>') + '</tr></tbody>');

		storage.$filterToolbarItems = $filter.find('.Xgrid-filter-cell').each(function (i) {
			$(this).attr('data-alias', storage.colModels[i].alias);
		});
		storage.$headTable.append($filter);
	};

	_buildThead() {
		const storage = this.storage;

		let widthHelper = '<tfoot class="Xgrid-thead-w"><tr>' + new Array(storage.colModels.length + 1).join('<td><div class="Xgrid-WidthListener-wrapper"><iframe data-col="0" class="Xgrid-WidthListener"></iframe></div></td>') + '</tr></tfoot>';

		storage.$headTable.html(widthHelper);
		storage.$headTable.append('<thead class="Xgrid-thead-labels"><tr>' + new Array(storage.colModels.length + 1).join('<th class="Xgrid-thead-label"></th>') + '</tr></thead>');
		storage.$headLabels = storage.$headTable.find('.Xgrid-thead-label');

		this.buildFilterToolbar();
	};

	_buildTBody() {
		const storage = this.storage;
		let widthHelper = '<tfoot class="Xgrid-tbody-w"><tr>' + new Array(storage.colModels.length + 1).join('<td><i></i></td>') + '</tr></tfoot>';
		storage.$gridTable.html(widthHelper);
	};

	_buildPagination() {
		const storage = this.storage,
			options = this.options,
			$pagination = $(options.paginationTemplate),
			{ firstBtnTemplate, lastBtnTemplate, prevBtnTemplate, nextBtnTemplate, currentPageTemplate } = options;
		let $paginationBox;

		tools.insertElement($pagination, '{firstBtnTemplate}', firstBtnTemplate ? $(firstBtnTemplate).addClass('Xgrid-first') : '');
		tools.insertElement($pagination, '{prevBtnTemplate}', $(prevBtnTemplate).addClass('Xgrid-prev'));
		tools.insertElement($pagination, '{nextBtnTemplate}', $(nextBtnTemplate).addClass('Xgrid-next'));
		tools.insertElement($pagination, '{lastBtnTemplate}', $(lastBtnTemplate).addClass('Xgrid-last'));
		tools.insertElement($pagination, '{currentPageTemplate}', $(currentPageTemplate).addClass('Xgrid-current-page'));

		if (options.paginationSelector) {
			$paginationBox = $(options.paginationSelector);
		} else {
			$paginationBox = storage.$box.find('.Xgrid-paggination-wrapper');
		}

		$paginationBox.html($pagination);
		storage.$paginationBox = $paginationBox;
	};

	_build() {
		const storage = this.storage,
			options = this.options;

		storage.$box.html(`<div class="Xgrid">
	<div class="Xgrid-wrapper">
		<div class="Xgrid-thead-wrapper">
			<table class="Xgrid-thead ${options.theadClass}"></table>
		</div>
		<div class="Xgrid-tbody-wrapper">
			<table class="Xgrid-tbody ${options.tbodyClass}"></table>
		</div>
		<div class="Xgrid-paggination-wrapper"></div>
	</div>
</div>`);
		storage.$headTable = storage.$box.find('.Xgrid-thead');
		storage.$gridTable = storage.$box.find('.Xgrid-tbody');
	}
}
export default BuildInfrastructure;
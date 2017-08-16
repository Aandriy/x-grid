class BuildInfrastructure {
	constructor(options, storage) {
		this.options = $.extend({
			theadClass: 'table table-bordered table-striped',
			tbodyClass: 'table table-bordered table-striped',
			firstBtnTemplate: '<span class="btn btn-default Xgrid-first"><i class="glyphicon glyphicon-step-backward"></i></span>',
			lastBtnTemplate: '<span class="btn btn-default Xgrid-last"><i class="glyphicon glyphicon-step-forward"></i></span>',
			prevBtnTemplate: '<span class="btn btn-default Xgrid-prev"><i class="glyphicon glyphicon-chevron-left"></i></span>',
			nextBtnTemplate: '<span class="btn btn-default Xgrid-next"><i class="glyphicon glyphicon-chevron-right"></i></span>',
		}, options);

		this.storage = storage;
		this._exec();
	};

	_exec() {
		this._build();
		this._buildThead();
		this._buildTBody();
		this._buildPagination();
	};
	_buildThead() {
		const storage = this.storage;
		let widthHelper = '<tbody class="Xgrid-thead-w"><tr>' + new Array(storage.colModels.length + 1).join('<td><div class="Xgrid-WidthListener-wrapper"><iframe data-col="0" class="Xgrid-WidthListener"></iframe></div></td>') + '</tr></tbody>';
		storage.$headTable.html(widthHelper);
		storage.$headTable.append('<thead class="Xgrid-thead-labels"><tr>' + new Array(storage.colModels.length + 1).join('<th class="Xgrid-thead-label"></th>') + '</tr></thead>');
		storage.$headLabels = storage.$headTable.find('.Xgrid-thead-label');
	};

	_buildTBody() {
		const storage = this.storage;
		let widthHelper = '<tfoot class="Xgrid-tbody-w"><tr>' + new Array(storage.colModels.length + 1).join('<td><i></i></td>') + '</tr></tfoot>';
		storage.$gridTable.html(widthHelper);
	};

	_buildPagination() {
		const storage = this.storage,
			options = this.options,
			{ firstBtnTemplate, lastBtnTemplate, prevBtnTemplate, nextBtnTemplate } = options;
		let $paginationBox;

		if (options.paginationSelector) {
			$paginationBox = $(options.paginationSelector);
		} else {
			$paginationBox = storage.$box.find('.Xgrid-paggination-wrapper');
		}

		$paginationBox.html(`<div class="Xgrid-paggination input-group input-group-sm">
			<div class="input-group-btn" >${firstBtnTemplate}${prevBtnTemplate}</div>
				<span class="input-group-addon"> Page </span>
				<input type="text" class="form-control Xgrid-current-page" />
				<span class="input-group-addon"> of <span class="Xgrid-total-pages"></span></span>
				<div class="input-group-btn" >${nextBtnTemplate}${lastBtnTemplate}</div>
			</div>`);
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
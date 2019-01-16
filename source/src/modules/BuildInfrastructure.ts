import tools from './Tools';
import buildInfrastructureDefaults from './BuildInfrastructure.defaults';

class BuildInfrastructure {
	viewModel: IViewModel;
	storage: IStorage;
	options: IBuildInfrastructureOptions;

	constructor(options, storage, viewModel) {
		this.viewModel = viewModel;
		this.options = {
			...buildInfrastructureDefaults,
			...options,
		};
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

		const storage = this.storage;
		const colModels = storage.colModels;
		const $tfootCells = storage.$gridTable.find('.Xgrid-tbody-w td');
		const $theadCells = storage.$headTable.find('tr');

		colModels.forEach(function (model, i) {
			let cells = [];

			cells.push($tfootCells.get(i));

			$theadCells.each(function () {
				cells.push($(this).find('>*:eq(' + i + ')').get(0));
			});

			model.dependent = cells.map(function (item) {
				const result = {
					$anchor: $(document.createTextNode('')),
					$item: $(item)
				};

				result.$item.before(result.$anchor);
				return result;
			});
		});
	};
	_addPropstoHeaderCells(i, item) {
		const $item = $(item);
		const colModel = this.storage.colModels[i];

		$item.attr('data-alias', colModel['alias']);
		if (colModel.fixed) {
			$item.addClass('fixed');
			if (colModel.width) {
				$item.width(colModel.width);
			}
		}
	};
	_buildFilterToolbar() {
		const tag = 'tfoot';
		const storage = this.storage;
		const $filter = $(`<${tag} class="Xgrid-thead-filter"><tr>${new Array(storage.colModels.length + 1).join('<td class="Xgrid-filter-cell"></td>')}</tr></${tag}>`);
		const addProp = this._addPropstoHeaderCells.bind(this);

		storage.$filterToolbarItems = $filter.find('.Xgrid-filter-cell').each(addProp);
		storage.$headTable.find('.Xgrid-thead-w td').each(addProp);
		storage.$headTable.append($filter);
	};

	_buildThead() {
		const storage = this.storage;
		let tag = 'tbody';
		let widthHelper = `<${tag} class="Xgrid-thead-w"><tr>${new Array(storage.colModels.length + 1).join('<td><div class="Xgrid-WidthListener-wrapper"><iframe data-col="0" class="Xgrid-WidthListener"></iframe></div></td>')}</tr></${tag}>`;

		storage.$headTable.html(widthHelper);
		storage.$headTable.find('.Xgrid-thead-w td').each(function (i) {
			const $td = $(this);
			const colModel = storage.colModels[i];
			const iframe: HTMLElement = $td.find('iframe')[0];

			iframe.setAttribute('data-alias', colModel.alias);
		});

		tag = 'thead';
		storage.$headTable.append(`<${tag} class="Xgrid-thead-labels"><tr>${new Array(storage.colModels.length + 1).join('<th class="Xgrid-thead-label"></th>')}</tr></${tag}>`);
		storage.$headLabels = storage.$headTable.find('.Xgrid-thead-label');
		storage.$headLabels.each((i, item) => {
			this._addPropstoHeaderCells(i, item);
		});

		this.buildFilterToolbar();
	};

	_buildTBody() {
		const storage = this.storage;
		let widthHelper = '<thead class="Xgrid-tbody-w"><tr>' + new Array(storage.colModels.length + 1).join('<td><i></i></td>') + '</tr></thead>';

		storage.$gridTable.html(widthHelper);
		storage.$gridTable.find('.Xgrid-tbody-w tr td').each((i, item) => {
			this._addPropstoHeaderCells(i, item);
		});
	};

	_buildPagination() {
		const storage = this.storage;
		const options = this.options;
		const $pagination = $(options.paginationTemplate);
		const { firstBtnTemplate, lastBtnTemplate, prevBtnTemplate, nextBtnTemplate, currentPageTemplate } = options;
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
		const storage = this.storage;
		const options = this.options;

		storage.$box.html(`<div class="Xgrid">
	<div class="Xgrid-wrapper">
		<div class="Xgrid-wrapper-holder">
			<div class="Xgrid-thead-wrapper">
				<table class="Xgrid-thead ${options.theadClass}"></table>
			</div>
			<div class="Xgrid-tbody-wrapper">
				<table class="Xgrid-tbody ${options.tbodyClass}"></table>
			</div>
		</div>
		<div class="Xgrid-paggination-wrapper"></div>
	</div>
</div>`);
		storage.$headTable = storage.$box.find('.Xgrid-thead');
		storage.$gridTable = storage.$box.find('.Xgrid-tbody');
	}

}
export default BuildInfrastructure;
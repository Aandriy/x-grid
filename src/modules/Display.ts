import tools from './Tools';
import QueryModel from './QueryModel';
import sort from './Sort';
import filter from './Filter';
import DisplayModel from './DisplayModel';
import LocalSortRuleModel from './LocalSortRuleModel';


export default class Display {
	viewModel: IViewModel;
	storage: IStorage;
	ajax: Function;
	process: Function;

	constructor(options) {
		this.viewModel = options.viewModel;
		this.storage = options.storage;
		this.ajax = options.ajax;

		if (options.isLocal) {
			this.process = this._localProcess.bind(this);
		} else {
			this.process = this._serverProcess.bind(this);
		}

		setTimeout(() => {
			this._subscribe();
		}, 50);
	};

	exec(): void {
		const storage = this.storage;
		const viewModel = this.viewModel;
		const query: IQueryModel = new QueryModel({
			filter: storage.filter,
			sort: viewModel.sortBy,
			rows: viewModel.rows,
			page: viewModel.newPage,
		});

		storage.query = query;
		storage.$box.addClass('Xgrid-loading');

		setTimeout(() => {
			this.process().done((data: IDispalyModel) => {
				this._filler(data);
				this.storage.$box.removeClass('Xgrid-loading');
			});
		}, 0);
	};

	_filler(data: IDispalyModel): void {
		const viewModel = this.viewModel;

		viewModel.totalPages = data.totalPages
		viewModel.totalRows = data.totalRows;
		viewModel.data = data.data;
		viewModel.page = data.page;
	};

	private _localFilter(data, filterQuery) {
		const deferred = $.Deferred(),
			storage = this.storage,
			rawData = function () {
				const colModels = storage.colModelsDictionary;
				return function () {
					const row = {};
					return function (alias, rowData) {
						if (typeof (row[alias]) === 'undefined') {
							const colModel = colModels[alias];
							row[alias] = colModel.filterFormatter(rowData[colModel.key], rowData, colModel);
						};
						return row[alias];
					}
				}
			}
		setTimeout(() => {
			if (filterQuery) {
				data = filter.exec(data, filterQuery, rawData());
			}
			deferred.resolve(data);
		}, 0);
		return deferred;
	};

	private _localSort(data, sortRules) {
		const deferred = $.Deferred();
		const storage = this.storage;

		if (sortRules.length) {
			const localSortRules: ILocalSortRule[] = sortRules.map((rule) => {
				const colModel = storage.colModelsDictionary[rule.by];
				const by = colModel ? colModel.key : rule.by;

				return new LocalSortRuleModel(rule.order, by, colModel);
			});

			data = sort.exec(data, localSortRules);
			setTimeout(() => {
				deferred.resolve(data);
			}, 0);
		} else {
			deferred.resolve(data);
		}
		return deferred;
	};

	private _getLocalData(data: IRawData[], query: IQueryModel): IDispalyModel {
		const viewModel: IViewModel = this.viewModel;
		const begin: number = (query.page - 1) * viewModel.rows;
		const end: number = query.page * viewModel.rows;
		const dataToDisplay: IRawData[] = data.slice(begin, end);

		return new DisplayModel(
			dataToDisplay,
			query.page,
			Math.ceil(data.length / viewModel.rows) || 1,
			data.length,
		);
	};

	private _localProcess(): JQueryDeferred<IDispalyModel> {
		const deferred: JQueryDeferred<IDispalyModel> = $.Deferred();
		const storage = this.storage;
		const query: IQueryModel = storage.query;

		this._localFilter(storage.data, query.filter).done((filteredData) => {
			this._localSort(filteredData, query.sort).done((sortedData) => {
				deferred.resolve(this._getLocalData(sortedData, query));
			});
		});
		return deferred;
	};

	private _serverProcess(): JQueryDeferred<IDispalyModel> {
		const query: IQueryModel = this.storage.query;
		const deferred: JQueryDeferred<IDispalyModel> = $.Deferred();
		
		this.ajax(JSON.parse(JSON.stringify(query))).always((data)=>{
			const displayModel = new DisplayModel();

			$.extend(displayModel, data);
			deferred.resolve(displayModel);
		});
		return deferred;
	};
	private _subscribe() {
		const viewModel = this.viewModel;
		const storage = this.storage;
		const action = tools.throttle(() => { this.exec(); }, 100);
		const _reload = function (s, type) {
			switch (type) {
				case 'filter':
					viewModel.newPage = 1;
					break;
				case 'sortBy':
					viewModel.newPage = 1;
					break;
			}
			action();
		}

		viewModel.on('newPage', _reload);
		viewModel.on('sortBy', _reload);
		storage.on('filter', _reload);
	};
}

import tools from './Tools';
import QueryModel from './QueryModel';
import sort from './Sort';
import filter from './Filter';
import pipes from './Pipes';

class Display {
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

	exec() {
		const storage = this.storage,
			viewModel = this.viewModel,
			query = new QueryModel({
				filter: storage.filter,
				sort: viewModel.sortBy,
				rows: viewModel.rows,
				page: viewModel.newPage,
			});

		storage.query = query;
		storage.$box.addClass('Xgrid-loading');
		setTimeout(() => {
			this.process().done((data) => {
				this._filler(data);
				this.storage.$box.removeClass('Xgrid-loading');
			});
		}, 0);
	};

	_filler(data) {
		const viewModel = this.viewModel;
		viewModel.totalPages = data.totalPages
		viewModel.totalRows = data.totalRows;
		viewModel.data = data.data;
		viewModel.page = data.page;
	};

	_localFilter(data, filterQuery) {
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

	_localSort(data, sortRules) {
		const deferred = $.Deferred(),
			storage = this.storage;
		if (sortRules.length) {
			sortRules = sortRules.map((rule) => {
				const colModel = storage.colModelsDictionary[rule.by];
				let result = {
					order: rule.order
				};

				if (colModel) {
					result.colModel = colModel;
					result['by'] = colModel.key;
					result['get'] = colModel.sortFormatter;
				} else {
					result['by'] = rule.by;
					result['get'] = pipes.getByType();
				}
				return result;
			});
			data = sort.exec(data, sortRules);
			setTimeout(() => {
				deferred.resolve(data);

			}, 0);
		} else {
			deferred.resolve(data);
		}
		return deferred;
	};

	_getLocalData(data, query) {
		const storage = this.storage,
			viewModel = this.viewModel,
			result = {
				totalRows: data.length,
				page: query.page,
				totalPages: Math.ceil(data.length / viewModel.rows) || 1
			},
			begin = (result.page - 1) * viewModel.rows,
			end = result.page * viewModel.rows;

		result.data = data.slice(begin, end);
		return result;
	};

	_localProcess() {
		const storage = this.storage,
			deferred = $.Deferred(),
			query = storage.query;
		this._localFilter(storage.data, query.filter).done((filteredData) => {
			this._localSort(filteredData, query.sort).done((sortedData) => {
				deferred.resolve(this._getLocalData(sortedData, query));
			});
		});
		return deferred;
	};

	_serverProcess() {
		const deferred = this.ajax(this.storage.query);
		return deferred;
	};
	_subscribe() {
		const viewModel = this.viewModel,
			storage = this.storage,
			action = tools.throttle(() => {
				this.exec();
			}, 100),
			_reload = function (s, type) {
				
				switch (type) {
					case 'filter':
						viewModel.newPage = 1;
						break;
					case 'sortBy':
						//viewModel.newPage = 1; ?
						break;
				}
				action();
			}

		viewModel.on('newPage', _reload);
		viewModel.on('sortBy', _reload);
		storage.on('filter', _reload);
	};
}

export default Display;
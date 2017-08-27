import tools from './Tools.js';
import QueryModel from './QueryModel.js';
import sort from './Sort.js';
import sortFormatters from './SortFormatters.js';

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
				filter: [],
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

	_localFilter(data) {
		const deferred = $.Deferred();
		setTimeout(() => {
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
					result['by'] = colModel.key;
					result['get'] = colModel.sortFormatter;
				} else {
					result['by'] = rule.by;
					result['get'] = sortFormatters['text'];
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
			action = tools.throttle((x) => {
				viewModel.page = viewModel.newPage;
				this.exec();
			}, 100);
		viewModel.on('newPage', action);
		viewModel.on('sortBy', action);
	};

}

export default Display;
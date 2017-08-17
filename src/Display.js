import tools from './Tools.js';
import QueryModel from './QueryModel.js';
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

		this._subscribe();
	};

	exec() {
		const storage = this.storage,
			viewModel = this.viewModel,
			query = new QueryModel({
				filter: [],
				sort: [],
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

	_localSort(data) {
		const deferred = $.Deferred();
		setTimeout(() => {
			deferred.resolve(data);
		}, 0);
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
	};

}

export default Display;
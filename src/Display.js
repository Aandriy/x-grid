import tools from './Tools.js';
class Display {
	constructor(storage, viewModel) {
		this.viewModel = viewModel;
		this.storage = storage;
		this._subscribe();
	}
	local() {
		const storage = this.storage,
			viewModel = this.viewModel,
			rowsCount = storage.data.length,
			begin = (viewModel.page - 1) * viewModel.rows,
			end = viewModel.page * viewModel.rows;

		viewModel.totalPages = Math.ceil(rowsCount / viewModel.rows);
		viewModel.totalRows = rowsCount;
		viewModel.data = storage.data.slice(begin, end);
	};
	_subscribe() {
		const viewModel = this.viewModel,
			action = tools.throttle((x) => {
				viewModel.page = viewModel.newPage;
				this.local();
			}, 100);
		viewModel.on('newPage', action);
	};

}

export default Display;
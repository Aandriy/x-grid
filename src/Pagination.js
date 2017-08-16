'use strict';
class Pagination {
	constructor(options, storage, viewModel, ) {
		this.options = options;
		this.viewModel = viewModel;
		this.storage = storage;

		this._subscribe();
		this.page();
		this.totalPages();
		this.exec();
	};
	exec() {
		this._bind();

	};

	page() {
		this.storage.$paginationBox.find('.Xgrid-current-page').val(this.viewModel.page);
	};

	totalPages() {
		this.storage.$paginationBox.find('.Xgrid-total-pages').text(this.viewModel.totalPages);
	};

	_subscribe() {
		const viewModel = this.viewModel;
		viewModel.on('page', this.page.bind(this));
		viewModel.on('totalPages', this.totalPages.bind(this));

	};


	_bind() {
		const storage = this.storage;
		storage.$paginationBox.on('click', '.Xgrid-first', this._handlerFirst.bind(this));
		storage.$paginationBox.on('click', '.Xgrid-prev', this._handlerPrev.bind(this));
		storage.$paginationBox.on('click', '.Xgrid-next', this._handlerNext.bind(this));
		storage.$paginationBox.on('click', '.Xgrid-last', this._handlerLast.bind(this));
		storage.$paginationBox.on('keypress', '.Xgrid-current-page', this._handlerGoTo.bind(this));
	};

	_handlerFirst(e) {
		e.preventDefault();
		if (this.viewModel.page !== 1) {
			this.viewModel.newPage = 1;
		}
	};
	_handlerLast(e) {
		e.preventDefault();
		if (this.viewModel.page !== this.viewModel.totalPages) {
			this.viewModel.newPage = this.viewModel.totalPages;
		}
	};
	_handlerNext(e) {
		e.preventDefault();
		const page = this.viewModel.page + 1;
		if (page <= this.viewModel.totalPages) {
			this.viewModel.newPage = page;
		}
	};
	_handlerPrev(e) {
		e.preventDefault();
		const page = this.viewModel.page - 1;
		if (page => 1) {
			this.viewModel.newPage = page;
		}
	};
	_handlerGoTo(e) {
		if (e.which === 13) {
			let page = $(e.currentTarget).val();
			if (!isNaN(page)) {
				page = +page;
				if (page < 1) {
					page = 1;
				} else if (page > this.viewModel.totalPages) {
					page = this.viewModel.totalPages;
				}
				this.viewModel.newPage = page;
			} else {
				this.viewModel.page = this.viewModel.newPage;
			}
		}
	}
};

export default Pagination;
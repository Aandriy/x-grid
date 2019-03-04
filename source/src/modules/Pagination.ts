'use strict';
export default class Pagination {
	options: IOptions;
	viewModel: IViewModel;
	storage: IStorage;

	constructor(options, storage, viewModel, ) {
		this.options = options;
		this.viewModel = viewModel;
		this.storage = storage;

		this._subscribe();
		this.page();
		this.totalPages();
		this._bind();
	};
	public exec() {
		this._bind();
	};

	page() {
		this.storage.$paginationBox.find('.Xgrid-current-page').val(this.viewModel.page);
	};

	totalPages() {
		this.storage.$paginationBox.find('.Xgrid-total-pages').text(this.viewModel.totalPages);
	};

	public goTo(num: number): void {
		let page = num;

		if (!isNaN(page)) {
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

	public prev(): void {
		const page = this.viewModel.page - 1;
		if (page > 0) {
			this.viewModel.newPage = page;
		}
	}

	public next(): void {
		const page = this.viewModel.page + 1;
		if (page <= this.viewModel.totalPages) {
			this.viewModel.newPage = page;
		}
	}

	public first(): void {
		if (this.viewModel.page !== 1) {
			this.viewModel.newPage = 1;
		}
	}

	public last(): void {
		if (this.viewModel.page !== this.viewModel.totalPages) {
			this.viewModel.newPage = this.viewModel.totalPages;
		}
	}

	private _subscribe(): void {
		const { viewModel } = this;

		viewModel.on('page', this.page.bind(this));
		viewModel.on('totalPages', this.totalPages.bind(this));
	};

	private _bind(): void {
		const { storage } = this;

		storage.$paginationBox.on('click.xgrid', '.Xgrid-first', this._handlerFirst.bind(this));
		storage.$paginationBox.on('click.xgrid', '.Xgrid-prev', this._handlerPrev.bind(this));
		storage.$paginationBox.on('click.xgrid', '.Xgrid-next', this._handlerNext.bind(this));
		storage.$paginationBox.on('click.xgrid', '.Xgrid-last', this._handlerLast.bind(this));
		storage.$paginationBox.on('keypress.xgrid', '.Xgrid-current-page', this._handlerGoTo.bind(this));
	};

	private _handlerFirst(e): void {
		e.preventDefault();
		this.first();
	};
	private _handlerLast(e): void {
		e.preventDefault();
		this.last();
	};
	private _handlerNext(e): void {
		e.preventDefault();
		this.next();
	};
	private _handlerPrev(e): void {
		e.preventDefault();
		this.prev();
	};
	private _handlerGoTo(e): void {
		if (e.which === 13) {
			const page: number = +$(e.currentTarget).val();

			this.goTo(page)
		}
	}
};

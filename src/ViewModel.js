class ViewModel {
	constructor() {
		this.model = {
			rows: 10,
			totalRows: 0,
			page: 1,
			totalPages: 0,
			data: [],
			newPage: 1
		}
		this.subscribers = {};
	}

	get data() {
		return this.model.data;
	};
	set data(data) {
		if ($.isArray(data)) {
			this.model.data = data;
			this.notify('data', this);
		}
	};

	get totalRows() {
		return this.model.totalRows;
	};
	set totalRows(totalRows) {
		if (typeof (totalRows) === "number" && totalRows > -1) {
			this.model.totalRows = totalRows;
			this.notify('totalRows', this);
		}
	};

	get totalPages() {
		return this.model.totalPages;
	};
	set totalPages(totalPages) {
		if (typeof (totalPages) === "number" && totalPages > -1) {
			this.model.totalPages = totalPages;
			this.notify('totalPages', this);
		}
	};

	get rows() {
		return this.model.rows;
	};
	set rows(rows) {
		if (typeof (rows) === "number" && rows > -1) {
			this.model.rows = rows;
			this.notify('rows', this);
		}
	};

	get page() {
		return this.model.page;
	};
	set page(page) {
		if (typeof (page) === "number" && page > -1) {
			this.model.page = page;
			this.notify('page', this);
		}
	};

	get newPage() {
		return this.model.newPage;
	};
	set newPage(page) {
		if (typeof (page) === "number" && page > -1) {
			this.model.newPage = page;
			this.notify('newPage', this);
		}
	};

	on(name, subscriber) {
		var storege = this._getStorage(name);
		storege.push(subscriber);
	};

	notify(name, data) {
		setTimeout(() => {
			var storege = this._getStorage(name);
			$.each(storege, function (i, subscriber) {
				subscriber.apply(subscriber, data);
			});
		}, 1);
	};

	_getStorage(name) {
		const subscribers = this.subscribers;
		if (!subscribers[name]) {
			subscribers[name] = [];
		}
		return subscribers[name];
	}

}
export default ViewModel;
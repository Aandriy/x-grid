class Storage {
	constructor(model) {

		this._model = $.extend({
			$box: null,
			$headTable: null,
			$gridTable: null,
			$headLabels: null,
			$paginationBox: null,
			query: null,
			scrollbarWidth: 0,
			colModels: [],
			colModelsDictionary: {},
			data: [],
			processedData: []
		}, model)
		this._subscribers = {};
	}

	get $box() {
		return this._model.$box;
	}

	get $headTable() {
		return this._model.$headTable;
	};
	set $headTable(value) {
		if (value instanceof $) {
			this._model.$headTable = value;
			this.notify('$headTable', this);
		}
	};

	get $gridTable() {
		return this._model.$gridTable;
	};
	set $gridTable(value) {
		if (value instanceof $) {
			this._model.$gridTable = value;
			this.notify('$gridTable', this);
		}
	};

	get $headLabels() {
		return this._model.$headLabels;
	};
	set $headLabels(value) {
		if (value instanceof $) {
			this._model.$headLabels = value;
			this.notify('$headLabels', this);
		}
	};

	get $paginationBox() {
		return this._model.$paginationBox;
	};
	set $paginationBox(value) {
		if (value instanceof $) {
			this._model.$paginationBox = value;
			this.notify('$paginationBox', this);
		}
	};


	get scrollbarWidth() {
		return this._model.scrollbarWidth;
	};

	set scrollbarWidth(value) {
		if (typeof (value) === "number" && value > 0) {
			this._model.scrollbarWidth = value;
			this.notify('scrollbarWidth', this);
		}
	};

	get colModels() {
		return this._model.colModels;
	};
	set colModels(value) {
		if ($.isArray(value)) {
			this._model.colModels = value;
			this.notify('colModels', this);
		}
	};

	get colModelsDictionary() {
		return this._model.colModelsDictionary;
	};
	set colModelsDictionary(value) {
		this._model.colModelsDictionary = value;
		this.notify('colModelsDictionary', this);
	};

	get data() {
		return this._model.data;
	};
	set data(data) {
		if ($.isArray(data)) {
			this._model.data = data;
			this.notify('data', this);
		}
	};

	get query() {
		return this._model.query;
	};
	set query(data) {
		this._model.query = data;
		this.notify('query', this);
	};

	get processedData() {
		return this._model.query;
	};
	set processedData(data) {
		this._model.processedData = data;
		this.notify('processedData', this);
	};



	on(name, subscriber) {
		var storege = this._getStorage(name);
		storege.push(subscriber);
	};

	notify(name, data) {
		var storege = this._getStorage(name);
		$.each(storege, function (i, subscriber) {
			let [...arg] = [data, name, i];
			subscriber.apply(subscriber, arg);
		});
	};

	_getStorage(name) {
		const subscribers = this._subscribers;
		if (!subscribers[name]) {
			subscribers[name] = [];
		}
		return subscribers[name];
	}

}
export default Storage;
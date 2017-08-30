class FixedHeader {
	constructor(storage) {
		this.storage = storage;
		this.properties = {

		}
		this._exec();
	}

	resize() {
		const storage = this.storage,
			self = this;
		storage.$headTable.find('.Xgrid-thead-w iframe').each(function (i) {
			const $iframe = $(this);
			self._handlerResizedCellWidth($iframe.width(), i);
		});
	};

	_exec() {
		this._build();
		this._bind();
	};

	_build() {
		const storage = this.storage,
			cellWidthListeners = [],
			properties = this.properties;

		properties.$cellWidthRecipients = storage.$gridTable.find('.Xgrid-tbody-w i')

		storage.$headTable.find('.Xgrid-thead-w td').each(function (i) {
			const iframe = $(this).find('iframe').get(0);
			iframe.setAttribute('data-col', i);
			iframe.className = 'Xgrid-WidthListener';
			cellWidthListeners.push(iframe);

		});
		properties.$cellWidthListeners = $(cellWidthListeners);
	};

	_bind() {
		const properties = this.properties,
			self = this;

		properties.$cellWidthListeners.each(function (i) {
			const iframe = this,
				$iframe = $(iframe);

			self._handlerResizedCellWidth($iframe.width(), i);
			setTimeout(function () {
				$(iframe.contentWindow).on('resize', function () {
					self._handlerResizedCellWidth($iframe.width(), i);
				});
			}, 100);
		});

		//var cellWidthListeners = storage.$headTable.find('.Xgrid-thead-w div')
	};

	_handlerResizedCellWidth(width, num) {
		const properties = this.properties;
		properties.$cellWidthRecipients.eq(num).width(width);
	};
}
export default FixedHeader;
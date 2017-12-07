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
		let w = 0;
		storage.$headTable.find('.Xgrid-thead-w iframe').each(function (i) {
			const $iframe = $(this),
				width = $iframe.width(),
				alias = $iframe.attr('data-alias');
			self._handlerResizedCellWidth(width, i, alias);
		});

	};

	_exec() {
		this._build();
		this._bind();
	};

	_build() {
		const storage = this.storage,
			cellWidthListeners = [],
			colModels = storage.colModels,
			properties = this.properties;

		properties.$cellWidthRecipients = storage.$gridTable.find('.Xgrid-tbody-w i');
		storage.$headTable.find('.Xgrid-thead-w td').each(function (i) {
			const iframe = $(this).find('iframe').get(0);
			iframe.setAttribute('data-col', i);
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

			self._handlerResizedCellWidth($iframe.width(), i, $iframe.attr('data-alias'));
			setTimeout(function () {
				$(iframe.contentWindow).on('resize', function () {
					self._handlerResizedCellWidth($iframe.width(), i, $iframe.attr('data-alias'));
				});
			}, 100);
		});
	};

	_handlerResizedCellWidth(width, num, alias) {
		const properties = this.properties,
			$item = properties.$cellWidthRecipients.filter('[data-alias="' + alias + '"]');
		$item.width(width);
		$item.parent().width(width);
	};
}
export default FixedHeader;
export default class FixedHeader {
	storage: IStorage;
	properties = {
		$cellWidthRecipients: null,
		$cellWidthListeners: null,
	};

	constructor(storage) {
		this.storage = storage;
		this._exec();
	}

	resize() {
		const storage = this.storage;

		storage.$headTable.find('.Xgrid-thead-w iframe').each((i, element) => {
			const $iframe = $(element);
			const width = $iframe.width();
			const alias = $iframe.attr('data-alias');

			this._handlerResizedCellWidth(width, alias);
		});
	};

	private _exec() {
		this._build();
		this._bind();
	};

	private _build() {
		const { storage, properties } = this;
		const cellWidthListeners = [];

		properties.$cellWidthRecipients = storage.$gridTable.find('.Xgrid-tbody-w td');
		storage.$headTable.find('.Xgrid-thead-w td').each(function (i) {
			const iframe: HTMLElement = $(this).find('iframe')[0];

			iframe.setAttribute('data-col', String(i));
			cellWidthListeners.push(iframe);
		});
		properties.$cellWidthListeners = $(cellWidthListeners);
	};

	private _bind() {
		const { properties } = this;

		properties.$cellWidthListeners.each((i, iframe) => {
			const $iframe = $(iframe);

			this._handlerResizedCellWidth($iframe.width(), $iframe.attr('data-alias'));
			setTimeout(() => {
				$(iframe.contentWindow).on('resize', () => {
					this._handlerResizedCellWidth($iframe.width(), $iframe.attr('data-alias'));
				});
			}, 100);
		});
	};

	private _handlerResizedCellWidth(width: number, alias: string) {
		const { properties } = this;
		const $item = properties.$cellWidthRecipients.filter('[data-alias="' + alias + '"]');

		$item.width(width);
		$item.parent().width(width);
	};
}

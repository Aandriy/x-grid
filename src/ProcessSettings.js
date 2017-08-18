import ColModel from './ColModel.js';

class ProcessSettings {
	constructor(options, storage) {
		this.options = $.extend({
			colModels: []
		}, options);

		this.properties = {
			scrollbarWidth: null
		}
		this.storage = storage;
		this._exec();

	}
	_getScrollbarWidth() {
		let div, width;
		if (this.properties.ScrollbarWidth) {
			return this.properties.ScrollbarWidth;
		}

		div = document.createElement('div');
		div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
		div = div.firstChild;
		document.body.appendChild(div);
		width = div.offsetWidth - div.clientWidth;
		document.body.removeChild(div);
		this.properties.ScrollbarWidth = width;
		return width;
	};
	_columnModel() {
		const storage = this.storage,
			options = this.options,
			colModels = [],
			aliases = {},
			colModelsDictionary = {};

		$.each(options.colModels, (i, model) => {
			const colModel = new ColModel(model, i, this.storage);

			if (!aliases[colModel.alias]) {
				aliases[colModel.alias] = 1;
			} else {
				throw {
					value: {
						i: i,
						data: JSON.stringify(model)
					},
					message: 'alias is not unique',
					name: 'Error: colModel'
				}
			}
			colModelsDictionary[colModel.alias] = colModel;
			colModels.push(colModel);
		});

		storage.colModels = colModels;
		storage.colModelsDictionary = colModelsDictionary;
	};
	_exec() {
		const storage = this.storage;
		this._columnModel();
		storage.scrollbarWidth = this._getScrollbarWidth();

	};
}
export default ProcessSettings;
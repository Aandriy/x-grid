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
		var self = this,
			options = this.options,
			colModels = [];

		$.each(options.colModels,  (i, model) => {
			colModels.push(new ColModel(model, i,this.storage ));
		});
		return colModels;
	};
	_exec() {
		const storage = this.storage;
		storage.colModels = this._columnModel();
		storage.scrollbarWidth = this._getScrollbarWidth();

	};
}
export default ProcessSettings;
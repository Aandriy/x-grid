import ColModel from './ColModel.js';
import SortRule from './SortRule.js';

class ProcessSettings {
	constructor(options, storage, viewModel) {
		this.options = $.extend({
			colModels: []
		}, options);

		this.properties = {
			scrollbarWidth: null
		}

		this.viewModel = viewModel;
		this.storage = storage;
		this._exec();
	};

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
		this._processSorting();
	};

	_processSorting() {
		const viewModel = this.viewModel,
			options = this.options;
		let sortBy = options.sortBy,
			data = [];
		if (sortBy && typeof (sortBy) === 'string') {
			sortBy = sortBy.replace(/\s+/g, ' ').trim().split(',');
			if (sortBy.length) {
				sortBy.forEach(function (item, i) {
					let sortRule = item.trim().split(' '),
						by = sortRule[0];
					if (typeof (by) !== 'undefined') {
						let rule;

						if (String(sortRule[1]).toUpperCase() === 'DESC') {
							rule = new SortRule(by, 'DESC');

						} else {
							rule = new SortRule(by);
						}
						data.push(rule);
					}
				});
			}
		} else if ($.isArray(sortBy) && sortBy.length) {
			sortBy.forEach(function (item) {
				let rule,
					{ by, order } = item;

				if (by) {
					if (String(order).toUpperCase() !== 'DESC') {
						rule = new SortRule(by);
					} else {
						rule = new SortRule(by, 'DESC');
					}
					data.push(rule);
				}
			});
		}
		if (data.length) {
			viewModel.sortBy = data;
		}
	};
}
export default ProcessSettings;
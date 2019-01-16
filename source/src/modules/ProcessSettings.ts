import ColModel from './ColModel';
import SortRule from './SortRule';
import processSettingsDefaults from './ProcessSettings.defaults';

class ProcessSettings {
	viewModel: IViewModel;
	storage: IStorage;
	properties: IProcessSettingsProperties;
	options: IOptionsProcessSettings

	constructor(options, storage, viewModel) {
		this.options = {...processSettingsDefaults, ...options};

		this.properties = {
			scrollbarWidth: null
		}

		this.viewModel = viewModel;
		this.storage = storage;
		this._exec();
	};

	_getScrollbarWidth() {
		let div, width;
		if (this.properties.scrollbarWidth) {
			return this.properties.scrollbarWidth;
		}

		div = document.createElement('div');
		div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
		div = div.firstChild;
		document.body.appendChild(div);
		width = div.offsetWidth - div.clientWidth;
		document.body.removeChild(div);
		this.properties.scrollbarWidth = width;
		return width;
	};

	_columnModel() {
		const { storage, options } = this;
		const colModels = [];
		const aliases = {};
		const colModelsDictionary = {};

		$.each(options.colModels, (i, model) => {
			const colModel = new ColModel(model, i);

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
		const { storage } = this;

		this._columnModel();
		storage.scrollbarWidth = this._getScrollbarWidth();
		this._processSorting();
	};

	_processSorting() {
		const { viewModel, options } = this;
		let sortBy = options.sortBy,
			data = [];

		viewModel.filterToolbar = options.filterToolbar;

		if (options.rows) {
			viewModel.rows = options.rows;
		}
		if (sortBy && typeof (sortBy) === 'string') {
			const sortByItems = sortBy.replace(/\s+/g, ' ').trim().split(',');
			if (sortByItems.length) {
				sortByItems.forEach(function (item, i) {
					const sortRule = item.trim().split(' ');
					const by = sortRule[0];

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
			sortBy.forEach((item) => {
				const { by, order } = item;
				let rule;

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
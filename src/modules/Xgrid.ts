import ViewModel from './ViewModel';
import ProcessSettings from './ProcessSettings';
import BuildInfrastructure from './BuildInfrastructure';
import FilterToolbar from './FilterToolbar';
import Sorting from './Sorting';
import Display from './Display';
import FixedHeader from './FixedHeader';
import Storage from './Storage';
import Fill from './Fill';
import Pagination from './Pagination';
import tools from './Tools';

export default class Xgrid {
	options: IOptions;
	properties: IXgridProperties;
	ViewModel: ViewModel;
	ProcessSettings: ProcessSettings;
	BuildInfrastructure: BuildInfrastructure;
	Sorting: Sorting;
	Storage: Storage;
	Fill: Fill;
	Display: Display;
	FixedHeader: FixedHeader;
	FilterToolbar: FilterToolbar;
	Pagination: Pagination;

	constructor(options: IOptions, $box: JQuery) {
		this.properties = {
			$box,
			data: []
		}
		this.options = $.extend({
			beforeRequest: [],
			afterResponse: [],
			sortBy: [],
			paginationSelector: '',
			ajaxType: 'POST',
			filterToolbarGroupOp: 'AND',
			url: '',
			multiSorting: false,
			filterToolbar: false
		}, options);

		this.Storage = new Storage({ $box })
		this._exec();
	};

	ajaxFunction(queryObject: any, url: string) {
		const options = this.options;
		return $.ajax({
			url: url,
			data: queryObject,
			type: options.ajaxType,
			dataType: 'json'
		});
	};
	_response(responseObject: IResponse) {
		const options = this.options;
		if (options.afterResponse) {
			tools.execute(options.afterResponse, [responseObject]);
		}
	};

	_request(queryObject = {}) {
		const options = this.options,
			d = $.Deferred();
		if (options.beforeRequest) {
			tools.execute(options.beforeRequest, [queryObject]);
		}

		this.ajaxFunction(queryObject, options.url).done(this._response.bind(this)).always(d.resolve);

		return d;
	};

	_bind() {
		const self = this,
			properties = this.properties,
			options = this.options;

		// to Do if model will be changed
		this.Storage.on('colModels', () => {
			//console.log(this.Fill);
		});

		this.Storage.on('data', () => {
			this.Display.exec();
		});

		this.ViewModel.on('data', () => {
			this.Fill.tbody();
			setTimeout(() => {
				this.FixedHeader.resize();
			}, 1050)
		});

		this.Storage.on('$paginationBox', () => {
			this.Pagination.exec();
		});

		this.Storage.on('$headTable', () => {
			this.Sorting.bind();
		});
	};
	_exec() {
		const self = this,
			options = this.options;

		this.ViewModel = new ViewModel();
		this.ProcessSettings = new ProcessSettings(options, this.Storage, this.ViewModel);
		this.BuildInfrastructure = new BuildInfrastructure(options, this.Storage, this.ViewModel);
		this.Sorting = new Sorting(this.Storage, this.ViewModel, options);
		this.Fill = new Fill(this.Storage, this.ViewModel);
		this.FilterToolbar = new FilterToolbar(this.Storage, this.ViewModel, options);
		this.Display = new Display({
			storage: this.Storage,
			viewModel: this.ViewModel,
			ajax: ((queryObject: IRequest) => {
				return this._request(queryObject);
			}),
			isLocal: options.url ? false : true
		});
		this.FixedHeader = new FixedHeader(this.Storage);
		this.Pagination = new Pagination(options, this.Storage, this.ViewModel);

		this._bind();

		this.Fill.thead();

		if (!$.isArray(options.data)) {
			options.data = [];
		}
		this.Storage.data = options.data;
	}
}
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
import Events from './Events';
import xgridDefaults from './XgridDefaults';

export default class Xgrid {
	version: '1.0.1';
	options: IOptions;
	properties: IXgridProperties;
	ViewModel: IViewModel;
	ProcessSettings: ProcessSettings;
	BuildInfrastructure: BuildInfrastructure;
	Sorting: Sorting;
	Storage: IStorage;
	Events: IEvents;
	Fill: Fill;
	Display: Display;
	FixedHeader: FixedHeader;
	FilterToolbar: FilterToolbar;
	Pagination: Pagination;

	constructor(options: IOptions, $box: JQuery, defaults = {}) {
		this.properties = {
			$box,
			data: []
		};

		this.options = $.extend({}, xgridDefaults(defaults), options);
		this.Storage = new Storage({ $box })
		this._exec();
	};

	public setGridData(rows): Xgrid {
		this.Storage.data = rows;
		return this;
	};
	public refresh(): Xgrid {
		this.Storage.notify('data', this.Storage);
		return this;
	};

	ajaxFunction(queryObject: IRequest, url: string): JQuery.jqXHR<IResponse> {
		const options = this.options;

		return $.ajax({
			url: url,
			data: queryObject,
			type: options.ajaxType,
			dataType: 'json'
		});
	};

	private _response(responseObject: IResponse) {
		const options = this.options;
		if (options.afterResponse) {
			tools.execute(options.afterResponse, [responseObject]);
		}
	};

	private _request(queryObject: IRequest = {}) {
		const options = this.options,
			d = $.Deferred();

		if (options.beforeRequest) {
			tools.execute(options.beforeRequest, [queryObject]);
		}

		this.ajaxFunction(queryObject, options.url).done(this._response.bind(this)).always(d.resolve);

		return d;
	};

	private _bind(): void {
		// To do if model will be changed
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
			}, 15);
		});

		this.Storage.on('$paginationBox', () => {
			this.Pagination.exec();
		});

		this.Storage.on('$headTable', () => {
			this.Sorting.bind();
		});
	};
	private _exec(): void {
		const { options } = this;

		this.ViewModel = new ViewModel();
		this.Events = new Events(this.Storage);
		this.ProcessSettings = new ProcessSettings(options, this.Storage, this.ViewModel);
		this.BuildInfrastructure = new BuildInfrastructure(options, this.Storage, this.ViewModel);
		this.Sorting = new Sorting(this.Storage, this.ViewModel, options);
		this.Fill = new Fill(this.Storage, this.ViewModel);
		this.FilterToolbar = new FilterToolbar(this.Storage, this.ViewModel, options);
		this.Display = new Display({
			storage: this.Storage,
			events: this.Events,
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
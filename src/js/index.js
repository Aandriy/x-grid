
import ViewModel from './ViewModel.js';
import ProcessSettings from './ProcessSettings.js';
import BuildInfrastructure from './BuildInfrastructure.js';
import FilterToolbar from './FilterToolbar.js';
import Sorting from './Sorting.js';
import Display from './Display.js';
import FixedHeader from './FixedHeader.js';
import Storage from './Storage.js'
import Fill from './Fill.js';
import Pagination from './Pagination.js';
import tools from './Tools.js';
import Pipes from './Pipes.js';


(function ($) {
	//Xgrid
	class Xgrid {
		constructor(options, box) {
			this.properties = {
				$box: box,
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

			this.Storage = new Storage({ $box: box })
			this._exec();
		};

		ajaxFunction(queryObject, url) {
			const options = this.options;
			return $.ajax({
				url: url,
				data: queryObject,
				type: options.ajaxType,
				dataType: 'json'
			});
		};
		_response(responseObject) {
			const options = this.options;
			responseObject.a = 1;
			if (options.afterResponse) {
				tools.execute(options.afterResponse, responseObject);
			}
		};

		_request(queryObject = {}) {
			const options = this.options,
				d = $.Deferred();
			if (options.beforeRequest) {
				tools.execute(options.beforeRequest, queryObject);
			}

			this.ajaxFunction(queryObject, options.url).done(this._response.bind(this)).always((responseObject) => {
				d.resolve(responseObject);
			});

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
				setTimeout(()=>{
					this.FixedHeader.resize();
				},1050)
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
				properties = this.properties,
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
				ajax: ((queryObject) => {
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


	$.fn.Xgrid = function (o) {
		var args = arguments,
			data;
		return this.each(function () {
			data = $(this).data('Xgrid');
			if (!data) {
				$(this).data('Xgrid', new Xgrid(o, $(this)));
			} else if (typeof (o) === 'string' && o.indexOf('_') !== 0 && data[o] === 'function') {
				args = Array.prototype.slice.call(args, 1);
				data[o].apply(data, args);
			} else if (data.refresh) {
				data.refresh.apply(data, args);
			}
		});
	}
})(jQuery);

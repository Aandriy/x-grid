
import ViewModel from './ViewModel.js';
import ProcessSettings from './ProcessSettings.js';
import BuildInfrastructure from './BuildInfrastructure.js';
import Display from './Display.js';
import FixedHeader from './FixedHeader.js';
import Storage from './Storage.js'
import Fill from './Fill.js';
import Pagination from './Pagination.js';


(function ($) {
	//Xgrid
	class Xgrid {
		constructor(options, box) {
			this.properties = {
				$box: box,
				data: []

			}
			this.options = $.extend({
				paginationSelector:''
			}, options);
			this.Storage = new Storage({ $box: box })
			this._exec();


		}
		_bind() {
			const self = this,
				properties = this.properties,
				options = this.options;

			// to Do if model will be changed
			this.Storage.on('colModels', () => {
				//console.log(this.Fill);
			});

			this.Storage.on('data', () => {
				this.Display.local();
			});

			this.ViewModel.on('data', () => {
				this.Fill.tbody();
				this.FixedHeader.resize();
			});

			this.Storage.on('$paginationBox', () => {
				this.Pagination.exec();
			});
		};
		_exec() {
			const self = this,
				properties = this.properties,
				options = this.options;

			this.ViewModel = new ViewModel();
			this.ProcessSettings = new ProcessSettings(options, this.Storage);
			this.BuildInfrastructure = new BuildInfrastructure(options, this.Storage);
			this.Fill = new Fill(this.Storage, this.ViewModel);
			this.Display = new Display(this.Storage, this.ViewModel);
			this.FixedHeader = new FixedHeader(this.Storage);
			this.Pagination = new Pagination(options, this.Storage, this.ViewModel);

			this._bind();

			this.Fill.thead();

			if ($.isArray(options.data)) {
				this.Storage.data = options.data;
			}
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

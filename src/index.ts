import Xgrid from './modules/Xgrid';

(($) => {
	$.fn.Xgrid = function (...args: any[]) {
		let data;
		const options: IOptions | string = args[0];
		return this.each(function () {
			data = $(this).data('Xgrid');
			if (!data) {
				const props: IOptions = (typeof (options) === 'string') ? args[1] : options;
				$(this).data('Xgrid', new Xgrid(props, $(this)));
			} else if (typeof (options) === 'string' && options.indexOf('_') !== 0 && data[options] === 'function') {
				const props = args.slice(1);
				data[options].apply(data, props);
			} else if (data.refresh) {
				data.refresh.apply(data, args);
			}
		});
	}
})(jQuery);

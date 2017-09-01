'use strict';
class FilterToolbar {
	constructor(storage, viewModel, options) {
		this.storage = storage;
		this.viewModel = viewModel;
		this.options = options;
		this._bind();
	}
	triggerToolbar() {
		const storage = this.storage,
			viewModel = this.viewModel,
			colModels = storage.colModels;
			
		var sdata = {},
			j = 0,
			v,
			nm,
			sopt = {},
			postData = {},
			so,
			defaultSearch = 'bw',
			groupOp = 'AND';
		if (!storage.$filterToolbarItems) {
			return this;

		}

		storage.$filterToolbarItems.each(function (i) {
			const $filter = $(this),
				colModel = colModels[i],
				$elem = $filter.find('.Xgrid-filter')

			var nm = colModel.key || colModel.alias,
				
				so = defaultSearch;
				$elem.val(i);
				v = $elem.val();
			
			
			if (v || so === "nu" || so === "nn") {
				sdata[nm] = v;
				sopt[nm] = so;
				j++;
			} else {
				try {
					delete postData[nm];
				} catch (z) { }
			}
			
		});
		
		var sd = j > 0 ? true : false;
		if (1) { // allow search
			var ruleGroup = "{\"groupOp\":\"" + groupOp + "\",\"rules\":[";
			var gi = 0;
			$.each(sdata, function (i, n) {
				if (gi > 0) { ruleGroup += ","; }
				ruleGroup += "{\"field\":\"" + i + "\",";
				ruleGroup += "\"op\":\"" + sopt[i] + "\",";
				n += "";
				ruleGroup += "\"data\":\"" + n.replace(/\\/g, '\\\\').replace(/\"/g, '\\"') + "\"}";
				gi++;
			});
			ruleGroup += "]}";
			$.extend(postData, { filters: ruleGroup });
			['searchField', 'searchString', 'searchOper'].forEach(function (name) {
				delete postData[name]; 
			});
		} else {
			$.extend(postData, sdata);
		}
		console.log(postData)
		var saveurl;
		/*
		var bsr = $($t).triggerHandler("jqGridToolbarBeforeSearch") === 'stop' ? true : false;
		if (!bsr && $.isFunction(p.beforeSearch)) {
			bsr = p.beforeSearch.call($t);
		}
		if (!bsr) {
			$($t).jqGrid("setGridParam", { search: sd }).trigger("reloadGrid", [{ page: 1 }]);
		}
		if (saveurl) {
			$($t).jqGrid("setGridParam", { url: saveurl });
		}
		$($t).triggerHandler("jqGridToolbarAfterSearch");
		if ($.isFunction(p.afterSearch)) {
			p.afterSearch.call($t); 
		}
	/*	*/
	};

	_bind() {
		const storage = this.storage;
		storage.$headTable.on('keypress', 'input.Xgrid-input.Xgrid-onEnter', this._handlerFilterOnEnter.bind(this));
		//storage.$headTable.on('keydown', 'input.Xgrid-input.Xgrid-onKeydown', this._handlerFilterOnKeydown.bind(this));
		
	};
	_handlerFilterOnKeydown(e) {
		e.preventDefault();
		var key = e.which;
		switch (key) {
			case 13:
				return false;
			case 9:
			case 16:
			case 37:
			case 38:
			case 39:
			case 40:
			case 27:
				break;
			default:
			/*
				if(timeoutHnd) {
					clearTimeout(timeoutHnd); 
				}
				timeoutHnd = setTimeout(function(){triggerToolbar();},500);
				*/
		}
	};

	_handlerFilterOnEnter(e) {
		var key = e.charCode || e.keyCode || 0;
		if (key === 13) {
			e.preventDefault();
			this.triggerToolbar();
		}
	}
}
export default FilterToolbar;
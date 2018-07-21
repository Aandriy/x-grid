/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Xgrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Xgrid */ "./src/modules/Xgrid.ts");

(function ($) {
    $.fn.Xgrid = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var data;
        var options = args[0];
        return this.each(function () {
            data = $(this).data('Xgrid');
            if (!data) {
                var props = (typeof (options) === 'string') ? args[1] : options;
                $(this).data('Xgrid', new _modules_Xgrid__WEBPACK_IMPORTED_MODULE_0__["default"](props, $(this)));
            }
            else if (typeof (options) === 'string' && options.indexOf('_') !== 0 && data[options] === 'function') {
                var props = args.slice(1);
                data[options].apply(data, props);
            }
            else if (data.refresh) {
                data.refresh.apply(data, args);
            }
        });
    };
})(jQuery);


/***/ }),

/***/ "./src/modules/BuildInfrastructure.ts":
/*!********************************************!*\
  !*** ./src/modules/BuildInfrastructure.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tools.js */ "./src/modules/Tools.js");

var BuildInfrastructure = /** @class */ (function () {
    function BuildInfrastructure(options, storage, viewModel) {
        this.viewModel = viewModel;
        this.options = $.extend({
            theadClass: 'table-grid-thead',
            tbodyClass: 'table-grid-tbody',
            firstBtnTemplate: '<span class="btn btn-default">&#171;</span>',
            lastBtnTemplate: '<span class="btn btn-default">&#187;</span>',
            prevBtnTemplate: '<span class="btn btn-default">&#8249;</span>',
            nextBtnTemplate: '<span class="btn btn-default">&#8250;</span>',
            currentPageTemplate: '<input type="text" class="form-control" />',
            paginationTemplate: "<div class=\"Xgrid-paggination input-group input-group-sm\">\n\t\t\t<div class=\"input-group-btn\" >{firstBtnTemplate}{prevBtnTemplate}</div>\n\t\t\t\t<span class=\"input-group-addon\"> Page </span>\n\t\t\t\t{currentPageTemplate}\n\t\t\t\t<span class=\"input-group-addon\"> of <span class=\"Xgrid-total-pages\"></span></span>\n\t\t\t\t<div class=\"input-group-btn\" >{nextBtnTemplate}{lastBtnTemplate}</div>\n\t\t\t</div>"
        }, options);
        this.storage = storage;
        this._exec();
    }
    ;
    BuildInfrastructure.prototype.buildFilterToolbar = function () {
        if (this.viewModel.filterToolbar) {
            this._buildFilterToolbar();
        }
    };
    ;
    BuildInfrastructure.prototype._exec = function () {
        this._build();
        this._buildThead();
        this._buildTBody();
        this._buildPagination();
        var storage = this.storage;
        var colModels = storage.colModels;
        var $tfootCells = storage.$gridTable.find('.Xgrid-tbody-w td');
        var $theadCells = storage.$headTable.find('tr');
        colModels.forEach(function (model, i) {
            var cells = [];
            cells.push($tfootCells.get(i));
            $theadCells.each(function () {
                cells.push($(this).find('>*:eq(' + i + ')').get(0));
            });
            model.dependent = cells.map(function (item) {
                var result = {
                    $anchor: $(document.createTextNode('')),
                    $item: $(item)
                };
                result.$item.before(result.$anchor);
                return result;
            });
        });
    };
    ;
    BuildInfrastructure.prototype._addPropstoHeaderCells = function (i, item) {
        var $item = $(item);
        var colModel = this.storage.colModels[i];
        $item.attr('data-alias', colModel['alias']);
        if (colModel.fixed) {
            $item.addClass('fixed');
            if (colModel.width) {
                $item.width(colModel.width);
            }
        }
    };
    ;
    BuildInfrastructure.prototype._buildFilterToolbar = function () {
        var tag = 'tfoot';
        var storage = this.storage;
        var $filter = $("<" + tag + " class=\"Xgrid-thead-filter\"><tr>" + new Array(storage.colModels.length + 1).join('<td class="Xgrid-filter-cell"></td>') + "</tr></" + tag + ">");
        var addProp = this._addPropstoHeaderCells.bind(this);
        storage.$filterToolbarItems = $filter.find('.Xgrid-filter-cell').each(addProp);
        storage.$headTable.find('.Xgrid-thead-w td').each(addProp);
        storage.$headTable.append($filter);
    };
    ;
    BuildInfrastructure.prototype._buildThead = function () {
        var _this = this;
        var storage = this.storage;
        var tag = 'thead';
        var widthHelper = "<" + tag + " class=\"Xgrid-thead-w\"><tr>" + new Array(storage.colModels.length + 1).join('<td><div class="Xgrid-WidthListener-wrapper"><iframe data-col="0" class="Xgrid-WidthListener"></iframe></div></td>') + "</tr></" + tag + ">";
        storage.$headTable.html(widthHelper);
        storage.$headTable.find('.Xgrid-thead-w td').each(function (i) {
            var $td = $(this);
            var colModel = storage.colModels[i];
            var iframe = $td.find('iframe')[0];
            iframe.setAttribute('data-alias', colModel.alias);
        });
        tag = 'tbody';
        storage.$headTable.append("<" + tag + " class=\"Xgrid-thead-labels\"><tr>" + new Array(storage.colModels.length + 1).join('<th class="Xgrid-thead-label"></th>') + "</tr></" + tag + ">");
        storage.$headLabels = storage.$headTable.find('.Xgrid-thead-label');
        storage.$headLabels.each(function (i, item) {
            _this._addPropstoHeaderCells(i, item);
        });
        this.buildFilterToolbar();
    };
    ;
    BuildInfrastructure.prototype._buildTBody = function () {
        var _this = this;
        var storage = this.storage;
        var widthHelper = '<thead class="Xgrid-tbody-w"><tr>' + new Array(storage.colModels.length + 1).join('<td><i></i></td>') + '</tr></thead>';
        storage.$gridTable.html(widthHelper);
        storage.$gridTable.find('.Xgrid-tbody-w tr td').each(function (i, item) {
            _this._addPropstoHeaderCells(i, item);
        });
    };
    ;
    BuildInfrastructure.prototype._buildPagination = function () {
        var storage = this.storage;
        var options = this.options;
        var $pagination = $(options.paginationTemplate);
        var firstBtnTemplate = options.firstBtnTemplate, lastBtnTemplate = options.lastBtnTemplate, prevBtnTemplate = options.prevBtnTemplate, nextBtnTemplate = options.nextBtnTemplate, currentPageTemplate = options.currentPageTemplate;
        var $paginationBox;
        _Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertElement($pagination, '{firstBtnTemplate}', firstBtnTemplate ? $(firstBtnTemplate).addClass('Xgrid-first') : '');
        _Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertElement($pagination, '{prevBtnTemplate}', $(prevBtnTemplate).addClass('Xgrid-prev'));
        _Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertElement($pagination, '{nextBtnTemplate}', $(nextBtnTemplate).addClass('Xgrid-next'));
        _Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertElement($pagination, '{lastBtnTemplate}', $(lastBtnTemplate).addClass('Xgrid-last'));
        _Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertElement($pagination, '{currentPageTemplate}', $(currentPageTemplate).addClass('Xgrid-current-page'));
        if (options.paginationSelector) {
            $paginationBox = $(options.paginationSelector);
        }
        else {
            $paginationBox = storage.$box.find('.Xgrid-paggination-wrapper');
        }
        $paginationBox.html($pagination);
        storage.$paginationBox = $paginationBox;
    };
    ;
    BuildInfrastructure.prototype._build = function () {
        var storage = this.storage;
        var options = this.options;
        storage.$box.html("<div class=\"Xgrid\">\n\t<div class=\"Xgrid-wrapper\">\n\t\t<div class=\"Xgrid-wrapper-holder\">\n\t\t\t<div class=\"Xgrid-thead-wrapper\">\n\t\t\t\t<table class=\"Xgrid-thead " + options.theadClass + "\"></table>\n\t\t\t</div>\n\t\t\t<div class=\"Xgrid-tbody-wrapper\">\n\t\t\t\t<table class=\"Xgrid-tbody " + options.tbodyClass + "\"></table>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"Xgrid-paggination-wrapper\"></div>\n\t</div>\n</div>");
        storage.$headTable = storage.$box.find('.Xgrid-thead');
        storage.$gridTable = storage.$box.find('.Xgrid-tbody');
    };
    return BuildInfrastructure;
}());
/* harmony default export */ __webpack_exports__["default"] = (BuildInfrastructure);


/***/ }),

/***/ "./src/modules/ColModel.js":
/*!*********************************!*\
  !*** ./src/modules/ColModel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pipes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pipes.js */ "./src/modules/Pipes.js");
/* harmony import */ var _FilterToolbarModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterToolbarModel.js */ "./src/modules/FilterToolbarModel.js");


class ColModel {
	constructor(model, order) {
		this.order = order;
		this.label = '';
		this.filterable = false;
		this.filterType = 'text';
		this.filterOption = 'cn';
		this.sortable = false;
		this.sortType = 'text';
		this.hidden = false;
		this.resizable = false;
		this.insensitive = false;
		this.fixed = false;

		$.extend(this, model);
		this.filterToolbarSettings = new _FilterToolbarModel_js__WEBPACK_IMPORTED_MODULE_1__["default"](model.filterToolbarSettings);

		if (typeof (this.alias) === 'undefined') {
			this.alias = this.key;
		}
		if (typeof (this.key) === 'undefined') {
			this.alias = this.alias;
		}
		if (model.sortType && typeof (model.sortType) === 'function') {
			this.sortFormatter = model.sortType;
		} else {
			this.sortFormatter = _Pipes_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByType(model.sortType);
		}

		if (model.filterType && typeof (model.filterType) === 'function') {
			this.filterFormatter = model.filterType;
		} else {
			this.filterFormatter = _Pipes_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByType(model.filterType);
		}
		this.dependent = [];
		this._check = function () {
			if (this.hidden) {
				this.dependent.forEach(function (item) {
					item.$item.detach();
				});
			} else {
				this.dependent.forEach(function (item) {
					item.$anchor.after(item.$item);
				});
			}
		}
	}

	labelFormatter() {
		return this.label;
	};

	cellFormatter($td, value, rowData, data) {
		if (typeof (value) === 'undefined') {
			value = '';
		}
		return '<div class="ellipsis">' + value + '</div>';
	};

	filterToolbarFormatter($cell, colModel) {
		const settings = colModel.filterToolbarSettings || {};
		let $control,
			$container,
			$wrap = $('<div class="Xgrid-filter-control-wrap"></div>'),
			str = '<div class="Xgrid-filter-wrapper">';

		if (settings.allowResetButton || settings.allowSubmitButton) {
			str += '<span class="Xgrid-filter-btns">';
			if (settings.allowResetButton) {
				str += '<span class="Xgrid-btn Xgrid-reset">&#10006;</span>';
			}
			if (settings.allowSubmitButton) {
				str += '<span class="Xgrid-btn Xgrid-onSubmit">&#10004;</span>';
			}
			str += '</span>';
		}
		str += '</div>'
		switch (settings.formControlType) {
			case 'select':
				$control = $('<select class="Xgrid-select Xgrid-filter"  />');
				settings.selectOptions.forEach(function (element, i) {
					$control.append('<option value="' + i + '">' + element.label + '</option>')
				});
				$control.val([]).each(function(){
					this.selectedIndex = -1;
				});
				break;
			default:
				$control = $('<input type="text" class="Xgrid-input Xgrid-filter" />');
				break;
		}
		if (settings.onChange) {
			$control.addClass('Xgrid-onChange');
		}
		if (settings.onKeydown) {
			$control.addClass('Xgrid-onKeydown');
		}
		if (settings.onEnter) {
			$control.addClass('Xgrid-onEnter');
		}
		if (settings.attr) {
			$control.attr(settings.attr);
		}

		$container = $(str);
		$wrap.append($control);
		$container.append($wrap);
		$cell.html($container);
	};
};

/* harmony default export */ __webpack_exports__["default"] = (ColModel);

/***/ }),

/***/ "./src/modules/Display.js":
/*!********************************!*\
  !*** ./src/modules/Display.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tools.js */ "./src/modules/Tools.js");
/* harmony import */ var _QueryModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryModel.js */ "./src/modules/QueryModel.js");
/* harmony import */ var _Sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sort.js */ "./src/modules/Sort.js");
/* harmony import */ var _Filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Filter.js */ "./src/modules/Filter.js");
/* harmony import */ var _Pipes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pipes.js */ "./src/modules/Pipes.js");






class Display {
	constructor(options) {
		this.viewModel = options.viewModel;
		this.storage = options.storage;
		this.ajax = options.ajax;

		if (options.isLocal) {
			this.process = this._localProcess.bind(this);
		} else {
			this.process = this._serverProcess.bind(this);
		}

		setTimeout(() => {
			this._subscribe();
		}, 50);
	};

	exec() {
		const storage = this.storage,
			viewModel = this.viewModel,
			query = new _QueryModel_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
				filter: storage.filter,
				sort: viewModel.sortBy,
				rows: viewModel.rows,
				page: viewModel.newPage,
			});

		storage.query = query;
		storage.$box.addClass('Xgrid-loading');
		setTimeout(() => {
			this.process().done((data) => {
				this._filler(data);
				this.storage.$box.removeClass('Xgrid-loading');
			});
		}, 0);
	};

	_filler(data) {
		const viewModel = this.viewModel;
		viewModel.totalPages = data.totalPages
		viewModel.totalRows = data.totalRows;
		viewModel.data = data.data;
		viewModel.page = data.page;
	};

	_localFilter(data, filterQuery) {
		const deferred = $.Deferred(),
			storage = this.storage,
			rawData = function () {
				const colModels = storage.colModelsDictionary;
				return function () {
					const row = {};
					return function (alias, rowData) {
						if (typeof (row[alias]) === 'undefined') {
							const colModel = colModels[alias];
							row[alias] = colModel.filterFormatter(rowData[colModel.key], rowData, colModel);
						};
						return row[alias];
					}
				}
			}
		setTimeout(() => {
			if (filterQuery) {
				data = _Filter_js__WEBPACK_IMPORTED_MODULE_3__["default"].exec(data, filterQuery, rawData());
			}
			deferred.resolve(data);
		}, 0);
		return deferred;
	};

	_localSort(data, sortRules) {
		const deferred = $.Deferred(),
			storage = this.storage;
		if (sortRules.length) {
			sortRules = sortRules.map((rule) => {
				const colModel = storage.colModelsDictionary[rule.by];
				let result = {
					order: rule.order
				};

				if (colModel) {
					result.colModel = colModel;
					result['by'] = colModel.key;
					result['get'] = colModel.sortFormatter;
				} else {
					result['by'] = rule.by;
					result['get'] = _Pipes_js__WEBPACK_IMPORTED_MODULE_4__["default"].getByType();
				}
				return result;
			});
			data = _Sort_js__WEBPACK_IMPORTED_MODULE_2__["default"].exec(data, sortRules);
			setTimeout(() => {
				deferred.resolve(data);

			}, 0);
		} else {
			deferred.resolve(data);
		}
		return deferred;
	};

	_getLocalData(data, query) {
		const storage = this.storage,
			viewModel = this.viewModel,
			result = {
				totalRows: data.length,
				page: query.page,
				totalPages: Math.ceil(data.length / viewModel.rows) || 1
			},
			begin = (result.page - 1) * viewModel.rows,
			end = result.page * viewModel.rows;

		result.data = data.slice(begin, end);
		return result;
	};

	_localProcess() {
		const storage = this.storage,
			deferred = $.Deferred(),
			query = storage.query;
		this._localFilter(storage.data, query.filter).done((filteredData) => {
			this._localSort(filteredData, query.sort).done((sortedData) => {
				deferred.resolve(this._getLocalData(sortedData, query));
			});
		});
		return deferred;
	};

	_serverProcess() {
		const deferred = this.ajax(this.storage.query);
		return deferred;
	};
	_subscribe() {
		const viewModel = this.viewModel,
			storage = this.storage,
			action = _Tools_js__WEBPACK_IMPORTED_MODULE_0__["default"].throttle(() => {
				this.exec();
			}, 100),
			_reload = function (s, type) {
				
				switch (type) {
					case 'filter':
						viewModel.newPage = 1;
						break;
					case 'sortBy':
						//viewModel.newPage = 1; ?
						break;
				}
				action();
			}

		viewModel.on('newPage', _reload);
		viewModel.on('sortBy', _reload);
		storage.on('filter', _reload);
	};
}

/* harmony default export */ __webpack_exports__["default"] = (Display);

/***/ }),

/***/ "./src/modules/Fill.js":
/*!*****************************!*\
  !*** ./src/modules/Fill.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

class Fill {
	constructor(storage, viewModel) {
		this.viewModel = viewModel;
		this.storage = storage;
	};

	thead() {
		const self = this,
			storage = this.storage,
			classRules = ['resizable', 'sortable', 'filterable', 'hidden'],
			colModels = storage.colModels;

		storage.$headLabels.each(function (i) {
			const $th = $(this),
				$wrapper = $(document.createElement('div')),
				colModel = colModels[i];

			$th.data('Xgrid.data', colModel);
			let data = colModel.labelFormatter($wrapper, $th, colModel, i);
			if (typeof (data) !== 'undefined') {
				$wrapper.html(data);
			}

			$th.html($wrapper);
			$.each(classRules, function (i, mark) {
				if (colModel[mark]) {
					$th.addClass(mark);
				} else {
					$th.removeClass(mark);
				}
			});
		});
		this.filterToolbar();
	};

	filterToolbar() {
		const self = this,
			storage = this.storage,
			viewModel = this.viewModel,
			colModels = storage.colModels;
		if (storage.$filterToolbarItems) {
			storage.$filterToolbarItems.each(function (i) {
				const $cell = $(this),
					colModel = colModels[i];
				if (colModel.filterable && colModel.filterToolbarFormatter) {
					let data = colModel.filterToolbarFormatter($cell, colModel);
					if (typeof (data) !== 'undefined') {
						$cell.html(data);
					}
				} else {
					$cell.empty();
				}
			})
		}
	};

	tbody() {
		const self = this,
			storage = this.storage,
			fragment = document.createDocumentFragment(),
			colModels = storage.colModels,
			viewModel = this.viewModel,
			dataToDisplay = viewModel.data,
			$headWrap = storage.$headTable.parent(),
			$gridWrap = storage.$gridTable.parent(),
			data = storage.data;

		let tbody,
			num = 0;

		colModels.forEach(function (colModel, i) {
			colModel._check();
			const $td = storage.$headLabels.eq(i);
			if (!colModel.hidden) {
				num++;
				if (num % 2) {
					$td.addClass('odd');
				} else {
					$td.addClass('even');
				}
			}
		});

		tbody = this._createShadowBody(fragment);

		$(tbody).find('tr').each(function (i) {
			const rowData = dataToDisplay[i];
			self._fillRow($(this), rowData, data);
		});

		storage.$gridTable.find('>tbody').remove();
		$headWrap.css({ 'padding-right': '' });
		storage.$gridTable.append(tbody);

		if ($gridWrap.get(0).offsetWidth - $gridWrap.get(0).clientWidth) {
			$headWrap.css({ 'padding-right': storage.scrollbarWidth + 'px' });
		}
		this._updateHead();
	};

	_createShadowBody(fragment, amount) {
		const options = this.options,
			storage = this.storage,
			colModels = storage.colModels,
			tbody = document.createElement('tbody'),
			viewModel = this.viewModel,
			rowsCount = viewModel.data.length;

		let tr = '<tr>' + Array(colModels.length + 1).join('<td></td>') + '</tr>',
			trs = '<tbody>' + new Array(rowsCount + 1).join(tr) + '<tbody>';

		if (!fragment) {
			fragment = document.createDocumentFragment();
		}

		tbody.innerHTML = trs;

		fragment.appendChild(tbody);
		return tbody;
	};

	_fillRow($tr, rowData, data) {

		const $tds = $tr.find('td'),
			storage = this.storage,
			colModels = storage.colModels;
		let num = 0;

		$tr.data('Xgrid.data', rowData);

		$.each(colModels, function (i, colModel) {
			let value = rowData[colModel.key],
				$td = $tds.eq(i),
				data;

			if (colModel.hidden) {
				$td.remove();
			} else {
				num++;
				data = colModel.cellFormatter($td, value, rowData, data);
				if (num % 2) {
					$td.addClass('odd');
				} else {
					$td.addClass('even');
				}
				if (typeof (data) !== 'undefined') {
					$td.html(data);
				}
			}
		});
	};

	_updateHead() {
		const self = this,
			storage = this.storage,
			colModels = storage.colModels,
			viewModel = this.viewModel,
			$headLabels = storage.$headLabels,
			sortBy = {};

		viewModel.sortBy.forEach(function (sortRule) {
			sortBy[sortRule.by] = sortRule.order;
		});

		colModels.forEach(function (colModel, i) {
			const $label = $headLabels.eq(i),
				order = sortBy[colModel.alias];
			if (order) {
				$label.attr('data-sort', order);
			} else {
				$label.removeAttr('data-sort');
			}
		});
	};
};

/* harmony default export */ __webpack_exports__["default"] = (Fill);


/***/ }),

/***/ "./src/modules/Filter.js":
/*!*******************************!*\
  !*** ./src/modules/Filter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Operators_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Operators.js */ "./src/modules/Operators.js");

class Filter {

	exec(data, group, getData) {
		const newData = data.filter((item, i) => {
			const get = getData(),
				state = this._check(group, item, get);
			return state;
		});
		return newData;
	};
	_or(rules, rowData, get) {
		let i = rules.length;
		while (i--) {
			const rule = rules[i];
			if (!_Operators_js__WEBPACK_IMPORTED_MODULE_0__["default"][rule.op]) {
				return true;
			}
			let value = get(rule.field, rowData),
				state = _Operators_js__WEBPACK_IMPORTED_MODULE_0__["default"][rule.op](rule.data, value);
			if (state) {
				return true;
			}
		}
		return false;
	};
	_and(rules, rowData, get) {
		let i = rules.length;
		while (i--) {
			const rule = rules[i];
			if (!_Operators_js__WEBPACK_IMPORTED_MODULE_0__["default"][rule.op]) {
				return true;
			}
			let value = get(rule.field, rowData),
				state = _Operators_js__WEBPACK_IMPORTED_MODULE_0__["default"][rule.op](rule.data, value);
			if (!state) {
				return false;
			}
		}
		return true;
	};
	_check(group, rowData, get) {
		const isOr = group.rules.length && String(group.groupOp).toUpperCase() === "OR";
		if ($.isArray(group.rules) && group.rules.length) {
			if (isOr) {
				return this._or(group.rules, rowData, get);
			} else {
				return this._and(group.rules, rowData, get);
			}
		}
		return true;
	};
};

/* harmony default export */ __webpack_exports__["default"] = (new Filter());

/***/ }),

/***/ "./src/modules/FilterToolbar.js":
/*!**************************************!*\
  !*** ./src/modules/FilterToolbar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

class FilterToolbar {
	constructor(storage, viewModel, options) {
		this.storage = storage;
		this.viewModel = viewModel;
		this.options = options;
		this._bind();
		this.timeoutOnKeydown = null;
	}
	triggerToolbar() {
		const storage = this.storage,
			viewModel = this.viewModel,
			colModels = storage.colModels,
			options = this.options,
			rules = [],
			defaultSearch = 'cn',
			groupOp = options.filterToolbarGroupOp === 'AND' ? 'AND' : 'OR';
		let ruleGroup = null;

		if (!storage.$filterToolbarItems) {
			return this;
		}

		storage.$filterToolbarItems.each(function (i) {
			const $filter = $(this),
				$elem = $filter.find('.Xgrid-filter')
			if ($elem.length) {
				const colModel = colModels[i],
					settings = colModel.filterToolbarSettings || {},
					filterOption = colModel.filterOption || defaultSearch,
					fieldName = colModel.alias || colModel.key;

				let value = $elem.val();

				if (typeof (settings.transformData) === 'function') {
					value = settings.transformData(value, settings);
				}

				if (value || filterOption === "nu" || filterOption === "nn") {
					rules.push({
						field: fieldName,
						op: filterOption,
						data: value
					});
				}
			}
		});

		if (rules.length) {
			ruleGroup = {
				groupOp,
				rules
			}
		}
		storage.filter = ruleGroup;
	};

	_bind() {
		const storage = this.storage;
		storage.$headTable.on('keypress', 'input.Xgrid-input.Xgrid-onEnter', this._handlerFilterOnEnter.bind(this));
		storage.$headTable.on('keydown', 'input.Xgrid-input.Xgrid-onKeydown', this._handlerFilterOnKeydown.bind(this));
		storage.$headTable.on('change', '.Xgrid-filter.Xgrid-onChange', this._handlerFilterOnChange.bind(this));
		storage.$headTable.on('click', '.Xgrid-reset', this._handlerFilterOnReset.bind(this));
		storage.$headTable.on('click', '.Xgrid-onSubmit', this._handlerFilterOnSubmit.bind(this));
	};

	_handlerFilterOnSubmit(e) {
		$(e.currentTarget).blur();
		this.triggerToolbar();
	};

	_handlerFilterOnReset(e) {
		const storage = this.storage,
			$sell = $(e.currentTarget).blur().parents('.Xgrid-filter-cell:eq(0)'),
			alias = $sell.attr('data-alias'),
			$control = $sell.find('.Xgrid-filter'),
			colModel = storage.colModelsDictionary[alias],
			data = $control.val();

		if (colModel) {
			if (colModel.filterToolbarSettings.formControlType === 'select') {
				$control.val([]).each(function () {
					this.selectedIndex = -1;
				});
			} else {
				$control.val('');
			}
			this.triggerToolbar();
		}
	};
	_handlerFilterOnChange(e) {
		this.triggerToolbar();
	};
	_handlerFilterOnKeydown(e) {

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

				if (this.timeoutOnKeydown) {
					clearTimeout(this.timeoutOnKeydown);
				}
				this.timeoutOnKeydown = setTimeout(
					() => {
						this.triggerToolbar();
					},
					500
				);
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
/* harmony default export */ __webpack_exports__["default"] = (FilterToolbar);

/***/ }),

/***/ "./src/modules/FilterToolbarModel.js":
/*!*******************************************!*\
  !*** ./src/modules/FilterToolbarModel.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class FilterToolbarModel {
	constructor(settings) {
		this.formControlType = 'text';
		this.selectOptions = [];
		this.placeholder = '';
		this.onEnter = true;
		this.onKeydown = false;
		this.onChange = false;
		this.allowResetButton = true;
		this.allowSubmitButton = true;
		$.extend(this, settings);
		if (!this.transformData) {
			if (this.formControlType === 'select') {
				this.transformData = ((data) => {
					let result;
					const selectOptions = this.selectOptions;
					if ($.isArray(data)) {
						result = [];
						data.forEach(function (key) {
							const item = selectOptions[key]; selectOptions
							if (item) {
								result.push(item.value);
							} else {
								result.push(key);
							}
						});
						if (!result.length) {
							return null;
						}
					} else {
						if (selectOptions[data]) {
							return selectOptions[data].value;
						}
					}
					
					return result;
				});
			}
		}
	}

};
/* harmony default export */ __webpack_exports__["default"] = (FilterToolbarModel);

/***/ }),

/***/ "./src/modules/FixedHeader.js":
/*!************************************!*\
  !*** ./src/modules/FixedHeader.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class FixedHeader {
	constructor(storage) {
		this.storage = storage;
		this.properties = {

		}
		this._exec();
	}

	resize() {
		const storage = this.storage,
			self = this;
		let w = 0;
		storage.$headTable.find('.Xgrid-thead-w iframe').each(function (i) {
			const $iframe = $(this),
				width = $iframe.width(),
				alias = $iframe.attr('data-alias');
			self._handlerResizedCellWidth(width, i, alias);
		});

	};

	_exec() {
		this._build();
		this._bind();
	};

	_build() {
		const storage = this.storage,
			cellWidthListeners = [],
			colModels = storage.colModels,
			properties = this.properties;

		properties.$cellWidthRecipients = storage.$gridTable.find('.Xgrid-tbody-w i');
		storage.$headTable.find('.Xgrid-thead-w td').each(function (i) {
			const iframe = $(this).find('iframe').get(0);
			iframe.setAttribute('data-col', i);
			cellWidthListeners.push(iframe);
		});
		properties.$cellWidthListeners = $(cellWidthListeners);
	};

	_bind() {
		const properties = this.properties,
			self = this;

		properties.$cellWidthListeners.each(function (i) {
			const iframe = this,
				$iframe = $(iframe);

			self._handlerResizedCellWidth($iframe.width(), i, $iframe.attr('data-alias'));
			setTimeout(function () {
				$(iframe.contentWindow).on('resize', function () {
					self._handlerResizedCellWidth($iframe.width(), i, $iframe.attr('data-alias'));
				});
			}, 100);
		});
	};

	_handlerResizedCellWidth(width, num, alias) {
		const properties = this.properties,
			$item = properties.$cellWidthRecipients.filter('[data-alias="' + alias + '"]');
		$item.width(width);
		$item.parent().width(width);
	};
}
/* harmony default export */ __webpack_exports__["default"] = (FixedHeader);

/***/ }),

/***/ "./src/modules/Operators.js":
/*!**********************************!*\
  !*** ./src/modules/Operators.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Operators {
	constructor() {
		this.eq = this.equals;
		this.ne = this.notEquals;
		this.lt = this.less;
		this.le = this.lessOrEquals;
		this.gt = this.greater;
		this.ge = this.greaterOrEquals;
		this.cn = this.contains;
		this.nc = ((...arg) => {
			return !this.contains.apply(this, arg);
		});
		this.bw = this.startsWith;
		this.bn = ((...arg) => {
			return !this.startsWith.apply(this, arg);
		});
		this.en = ((...arg) => {
			return !this.endsWith.apply(this, arg);
		});
		this.ew = this.endsWith;
		this.in = this.inArray;
		this.ni = ((...arg) => {
			return !this.inArray.apply(this, arg);
		});
		this.nu = this.isNull;
		this.nn = ((...arg) => {
			return !this.isNull.apply(this, arg);
		});
	};
	equals(a, b) {
		return a === b;
	};
	notEquals(a, b) {
		return a !== b;
	};
	isNull(a) {
		return a === null;
	};
	greater(a, b) {
		return a > b;
	};
	less(a, b) {
		return a < b;
	};
	greaterOrEquals(a, b) {
		return a >= b;
	};
	lessOrEquals(a, b) {
		return a <= b;
	};
	inArray(array, b) {
		return $.inArray(b, array) !== -1;
	};
	startsWith(a, b, insensitive) {
		a = String(a);
		b = String(b);
		if (insensitive) {
			a = a.toUpperCase();
			b = b.toUpperCase();
		}
		let length = a.length,
			str = a.substr(0, length);
		return str === b
	};
	endsWith(a, b, insensitive) {
		a = String(a);
		b = String(b);
		if (insensitive) {
			a = a.toUpperCase();
			b = b.toUpperCase();
		}
		let length = b.length * -1,
			str = a.substr(length);
		return str === b;
	};
	contains(a, b, insensitive) {
		a = String(a);
		b = String(b);
		if (insensitive) {
			a = a.toUpperCase();
			b = b.toUpperCase();
		}
		return b.indexOf(a) !== -1;
	};
}
/* harmony default export */ __webpack_exports__["default"] = (new Operators());

/***/ }),

/***/ "./src/modules/Pagination.js":
/*!***********************************!*\
  !*** ./src/modules/Pagination.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

class Pagination {
	constructor(options, storage, viewModel, ) {
		this.options = options;
		this.viewModel = viewModel;
		this.storage = storage;

		this._subscribe();
		this.page();
		this.totalPages();
		this.exec();
	};
	exec() {
		this._bind();
	};

	page() {
		this.storage.$paginationBox.find('.Xgrid-current-page').val(this.viewModel.page);
	};

	totalPages() {
		this.storage.$paginationBox.find('.Xgrid-total-pages').text(this.viewModel.totalPages);
	};

	_subscribe() {
		const viewModel = this.viewModel;
		viewModel.on('page', this.page.bind(this));
		viewModel.on('totalPages', this.totalPages.bind(this));
	};

	_bind() {
		const storage = this.storage;
		storage.$paginationBox.on('click.xgrid', '.Xgrid-first', this._handlerFirst.bind(this));
		storage.$paginationBox.on('click.xgrid', '.Xgrid-prev', this._handlerPrev.bind(this));
		storage.$paginationBox.on('click.xgrid', '.Xgrid-next', this._handlerNext.bind(this));
		storage.$paginationBox.on('click.xgrid', '.Xgrid-last', this._handlerLast.bind(this));
		storage.$paginationBox.on('keypress.xgrid', '.Xgrid-current-page', this._handlerGoTo.bind(this));
	};

	_handlerFirst(e) {
		e.preventDefault();
		if (this.viewModel.page !== 1) {
			this.viewModel.newPage = 1;
		}
	};
	_handlerLast(e) {
		e.preventDefault();
		if (this.viewModel.page !== this.viewModel.totalPages) {
			this.viewModel.newPage = this.viewModel.totalPages;
		}
	};
	_handlerNext(e) {
		e.preventDefault();
		const page = this.viewModel.page + 1;
		if (page <= this.viewModel.totalPages) {
			this.viewModel.newPage = page;
		}
	};
	_handlerPrev(e) {
		e.preventDefault();
		const page = this.viewModel.page - 1;
		if (page > 0) {
			this.viewModel.newPage = page;
		}
	};
	_handlerGoTo(e) {
		if (e.which === 13) {
			let page = $(e.currentTarget).val();
			if (!isNaN(page)) {
				page = +page;
				if (page < 1) {
					page = 1;
				} else if (page > this.viewModel.totalPages) {
					page = this.viewModel.totalPages;
				}
				this.viewModel.newPage = page;
			} else {
				this.viewModel.page = this.viewModel.newPage;
			}
		}
	}
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./src/modules/Pipes.js":
/*!******************************!*\
  !*** ./src/modules/Pipes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Pipes {
	constructor() {
		this.integer = this.integer.bind(this);
		this.int = this.integer;

		this.numeric = this.numeric.bind(this);
		this.float = this.numeric;
		this.number = this.numeric;

		//this.datetime = this.date.bind(this);
		this.text = ((value, rowData, colModel) => {
			if (colModel.insensitive) {
				return this.insensitivetext.call(this, value);
			} else {
				return this.sensitivetext.call(this, value);
			}
		});

		this.isNotZero = {
			undefined: 1
		};

		['', null, false, true].forEach((key) => {
			this.isNotZero[key] = 1;
		});
	};

	getByType(type) {
		switch (type) {
			case 'int':
			case 'integer':
				return this.integer;
			case 'float':
			case 'number':
			case 'numeric':
				return this.numeric;
			default:
				return this.text;
		}
	}

	numeric(value) {
		let result;
		if (this.isNotZero[value]) {
			result = Number.NEGATIVE_INFINITY;
		} else {
			if (isNaN(value)) {
				result = parseFloat(String(value).replace(/,/g, '.').replace(/[\$%]/g, ''));
				result = isNaN(result) ? Number.NEGATIVE_INFINITY : result;
			} else {
				result = +value;
			}
		}
		return result;
	};

	integer(value) {
		let result;
		if (this.isNotZero[value]) {
			result = Number.NEGATIVE_INFINITY;
		} else {
			if (isNaN(value)) {
				result = String(value).replace(/[\$,%]/g, '');
			}
			result = parseInt(result);
			result = isNaN(result) ? Number.NEGATIVE_INFINITY : result;
		}
		return result;
	};

	insensitivetext(value) {
		return value ? $.trim(String(value)) : "";
	};

	sensitivetext(value) {
		return (value ? $.trim(String(value)) : "").toLowerCase();
	};
}

/* harmony default export */ __webpack_exports__["default"] = (new Pipes());

/***/ }),

/***/ "./src/modules/ProcessSettings.js":
/*!****************************************!*\
  !*** ./src/modules/ProcessSettings.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColModel.js */ "./src/modules/ColModel.js");
/* harmony import */ var _SortRule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SortRule.js */ "./src/modules/SortRule.js");



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
			const colModel = new _ColModel_js__WEBPACK_IMPORTED_MODULE_0__["default"](model, i, this.storage);

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
		if (options.filterToolbar) {
			viewModel.filterToolbar = true;
		}
		if (sortBy && typeof (sortBy) === 'string') {
			sortBy = sortBy.replace(/\s+/g, ' ').trim().split(',');
			if (sortBy.length) {
				sortBy.forEach(function (item, i) {
					let sortRule = item.trim().split(' '),
						by = sortRule[0];
					if (typeof (by) !== 'undefined') {
						let rule;

						if (String(sortRule[1]).toUpperCase() === 'DESC') {
							rule = new _SortRule_js__WEBPACK_IMPORTED_MODULE_1__["default"](by, 'DESC');

						} else {
							rule = new _SortRule_js__WEBPACK_IMPORTED_MODULE_1__["default"](by);
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
						rule = new _SortRule_js__WEBPACK_IMPORTED_MODULE_1__["default"](by);
					} else {
						rule = new _SortRule_js__WEBPACK_IMPORTED_MODULE_1__["default"](by, 'DESC');
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
/* harmony default export */ __webpack_exports__["default"] = (ProcessSettings);

/***/ }),

/***/ "./src/modules/QueryModel.js":
/*!***********************************!*\
  !*** ./src/modules/QueryModel.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class QueryModel {
	constructor(data) {
		this.filter = {};
		this.sort = [];
		this.rows = 0;
		this.page = 1;
		$.extend(this, data);
	}
}
/* harmony default export */ __webpack_exports__["default"] = (QueryModel);

/***/ }),

/***/ "./src/modules/Sort.js":
/*!*****************************!*\
  !*** ./src/modules/Sort.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


class Sort {
	constructor() {

	}

	exec(data = [], rules = []) {
		let source;
		if (!data.length || !rules.length) {
			return data;
		}
		source = this._getSource(data, rules);
		source.sort((a, b) => {
			let result = 0;
			for (let i = 0, j = rules.length; i < rules.length; i++) {
				let key = rules[i].by;
				if (rules[i].order === 'ASC') {
					result = this.ASC(a.formatted[key], b.formatted[key])
				} else {
					result = this.DESC(a.formatted[key], b.formatted[key])
				}
				if (result !== 0) {
					return result;
				}
			}
			return result;
		});
		return source.map(function (item) {
			return item._;
		});
	}

	ASC(a, b) {
		if (a < b) {
			return -1;
		}
		if (a > b) {
			return 1;
		}
		return 0;
	};

	DESC(a, b) {
		if (a < b) {
			return 1;
		}
		if (a > b) {
			return -1;
		}
		return 0;
	};
	_getSource(data, rules) {
		return data.map(function (item) {
			let formatted = {};
			rules.forEach((rule) => {
				formatted[rule.by] = rule.get(item[rule.by], item, rule.colModel, data);
			});
			return {
				_: item,
				formatted,
			}
		});
	}
};

/* harmony default export */ __webpack_exports__["default"] = (new Sort());

/***/ }),

/***/ "./src/modules/SortRule.js":
/*!*********************************!*\
  !*** ./src/modules/SortRule.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class SortRule {
	constructor(by, order = 'ASC') {
		this.by = by;
		this.order = order;
	}
	triggerOrder() {
		if (this.order === 'ASC') {
			this.order = 'DESC';
		} else {
			this.order = 'ASC';
		}
	};
};
/* harmony default export */ __webpack_exports__["default"] = (SortRule);

/***/ }),

/***/ "./src/modules/Sorting.js":
/*!********************************!*\
  !*** ./src/modules/Sorting.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SortRule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SortRule.js */ "./src/modules/SortRule.js");

class Sorting {
	constructor(storage, viewModel, options) {
		this.storage = storage;
		this.viewModel = viewModel;
		this.options = options;
		this.bind();
	};
	sortByAlias(alias) {
		const storage = this.storage,
			viewModel = this.viewModel,
			colModel = storage.colModelsDictionary[alias];
		let sortBy;
		if (colModel) {
			sortBy = viewModel.sortBy;
			let i = sortBy.length,
				sortRule;

			while (i--) {
				if (sortBy[i].by === alias) {
					sortRule = sortBy.splice(i, 1)[0];
					break;
				}
			}

			if (!sortRule) {
				sortRule = new _SortRule_js__WEBPACK_IMPORTED_MODULE_0__["default"](alias);
			} else {
				sortRule.triggerOrder();
			}

			if (this.options.multiSorting) {
				sortBy.unshift(sortRule)
			} else {
				sortBy = [sortRule]
			}
			viewModel.sortBy = sortBy;
		}
	};

	bind() {
		const $headTable = this.storage.$headTable;
		this._off();
		$headTable.on('click.Xgrid', '.Xgrid-thead-label.sortable', this._handlerSortColumn.bind(this));
	};

	_off() {
		this.storage.$headTable.off('.Xgrid');
	};

	_handlerSortColumn(e) {
		e.preventDefault();
		const $item = $(e.currentTarget),
			alias = $item.attr('data-alias'),
			colmodel = this.storage.colModelsDictionary[alias];
		$item.blur();
		if (colmodel && colmodel.sortable) {
			this.sortByAlias(alias);
		}
	};
};

/* harmony default export */ __webpack_exports__["default"] = (Sorting);

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Storage {
	constructor(model) {

		this._model = $.extend({
			$box: null,
			$headTable: null,
			$gridTable: null,
			$headLabels: null,
			$paginationBox: null,
			$filterToolbarItems: null,
			query: null,
			scrollbarWidth: 0,
			colModels: [],
			colModelsDictionary: {},
			filter: null,
			data: [],
			processedData: []
		}, model)
		this._subscribers = {};
	}

	get $box() {
		return this._model.$box;
	}

	get $headTable() {
		return this._model.$headTable;
	};
	set $headTable(value) {
		if (value instanceof $) {
			this._model.$headTable = value;
			this.notify('$headTable', this);
		}
	};

	get $gridTable() {
		return this._model.$gridTable;
	};
	set $gridTable(value) {
		if (value instanceof $) {
			this._model.$gridTable = value;
			this.notify('$gridTable', this);
		}
	};

	get $headLabels() {
		return this._model.$headLabels;
	};
	set $headLabels(value) {
		if (value instanceof $) {
			this._model.$headLabels = value;
			this.notify('$headLabels', this);
		}
	};

	get $paginationBox() {
		return this._model.$paginationBox;
	};
	set $paginationBox(value) {
		if (value instanceof $) {
			this._model.$paginationBox = value;
			this.notify('$paginationBox', this);
		}
	};

	get $filterToolbarItems() {
		return this._model.$filterToolbarItems;
	};
	set $filterToolbarItems(value) {
		if (value instanceof $) {
			this._model.$filterToolbarItems = value;
			this.notify('$filterToolbarItems', this);
		}
	};

	get scrollbarWidth() {
		return this._model.scrollbarWidth;
	};

	set scrollbarWidth(value) {
		if (typeof (value) === "number" && value > 0) {
			this._model.scrollbarWidth = value;
			this.notify('scrollbarWidth', this);
		}
	};

	get colModels() {
		return this._model.colModels;
	};
	set colModels(value) {
		if ($.isArray(value)) {
			this._model.colModels = value;
			this.notify('colModels', this);
		}
	};

	get colModelsDictionary() {
		return this._model.colModelsDictionary;
	};
	set colModelsDictionary(value) {
		this._model.colModelsDictionary = value;
		this.notify('colModelsDictionary', this);
	};
	
	get filter() {
		return this._model.filter;
	};
	set filter(data) {
		if (data === null || typeof (data) === 'object') {
			this._model.filter = data;
			this.notify('filter', this);
		}
	};

	get data() {
		return this._model.data;
	};
	set data(data) {
		if ($.isArray(data)) {
			this._model.data = data;
			this.notify('data', this);
		}
	};

	get query() {
		return this._model.query;
	};
	set query(data) {
		this._model.query = data;
		this.notify('query', this);
	};

	get processedData() {
		return this._model.query;
	};
	set processedData(data) {
		this._model.processedData = data;
		this.notify('processedData', this);
	};



	on(name, subscriber) {
		var storege = this._getStorage(name);
		storege.push(subscriber);
	};

	notify(name, data) {
		var storege = this._getStorage(name);
		$.each(storege, function (i, subscriber) {
			let [...arg] = [data, name, i];
			subscriber.apply(subscriber, arg);
		});
	};

	_getStorage(name) {
		const subscribers = this._subscribers;
		if (!subscribers[name]) {
			subscribers[name] = [];
		}
		return subscribers[name];
	}

}
/* harmony default export */ __webpack_exports__["default"] = (Storage);

/***/ }),

/***/ "./src/modules/Tools.js":
/*!******************************!*\
  !*** ./src/modules/Tools.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

class Tools {
	constructor() {
		this.now = Date.now || (() => { return new Date().getTime(); });
	}

	execute(functions, args, context) {
		const apply = function (foo) {
			if (typeof (foo) === 'function') {
				foo.apply(context ? context : foo, args)
			}
		}

		if ($.isArray(functions)) {
			functions.forEach(apply);
		} else {
			apply(functions);
		}
	};

	insertElement($container, searchStr, replacement) {
		const $replacement = $(replacement);

		if (!$replacement.length) {
			replacement = String(replacement);
		}
		$container.find(":not(iframe)").addBack().contents().filter(function () {
			return this.nodeType === 3;
		}).each(function () {
			if (this.data.indexOf(searchStr) !== -1) {
				if ($replacement.length) {
					$(this).after($replacement);
					const str = this.data,
						part1 = str.substr(0, str.indexOf(searchStr)),
						part2 = str.substr(part1.length + searchStr.length, str.length);
					if (!part1.length) {
						$(this).remove();
					}
					if (part2.length) {
						if (part1.length) {
							this.data = part1;
						}
						$replacement.after(part2)
					} else if (part1.length) {
						this.data = part1;
					}
				} else {
					this.data = this.data.replace(searchStr,replacement);
				}
			}
		});
	}

	throttle(func, wait = 10) {
		let context,
			args,
			timeout = null;
		return function (...props) {
			context = this;
			args = props;
			if (!context) {
				context = func
			} else if (context === window) {
				context = func;
			}
			if (!timeout) {
				timeout = setTimeout(() => {
					clearTimeout(timeout);
					timeout = null;
					func.apply(context, args);
				}, wait);
			}
		};
	};
}

/* harmony default export */ __webpack_exports__["default"] = (new Tools());

/***/ }),

/***/ "./src/modules/ViewModel.js":
/*!**********************************!*\
  !*** ./src/modules/ViewModel.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ViewModel {
	constructor() {
		this.model = {
			rows: 10,
			totalRows: 0,
			page: 1,
			totalPages: 0,
			newPage: 1,
			data: [],
			sortBy: [],
			filterToolbar: false
		}
		this.subscribers = {};
	}

	get data() {
		return this.model.data;
	};
	set data(data) {
		if ($.isArray(data)) {
			this.model.data = data;
			this.notify('data', this);
		}
	};

	get sortBy() {
		return this.model.sortBy;
	};
	set sortBy(data) {
		if ($.isArray(data)) {
			this.model.sortBy = data;
			this.notify('sortBy', this);
		}
	};

	get totalRows() {
		return this.model.totalRows;
	};
	set totalRows(totalRows) {
		if (typeof (totalRows) === "number" && totalRows > -1) {
			this.model.totalRows = totalRows;
			this.notify('totalRows', this);
		}
	};

	get totalPages() {
		return this.model.totalPages;
	};
	set totalPages(totalPages) {
		if (typeof (totalPages) === "number" && totalPages > -1) {
			this.model.totalPages = totalPages;
			this.notify('totalPages', this);
		}
	};

	get rows() {
		return this.model.rows;
	};
	set rows(rows) {
		if (typeof (rows) === "number" && rows > -1) {
			this.model.rows = rows;
			this.notify('rows', this);
		}
	};

	get page() {
		return this.model.page;
	};
	set page(page) {
		if (typeof (page) === "number" && page > -1) {
			this.model.page = page;
			this.notify('page', this);
		}
	};

	get newPage() {
		return this.model.newPage;
	};
	set newPage(page) {
		if (typeof (page) === "number" && page > -1) {
			this.model.newPage = page;
			this.notify('newPage', this);
		}
	};

	get filterToolbar() {
		return this.model.newPage;
	};
	set filterToolbar(data) {
		this.model.filterToolbar = data;
		this.notify('filterToolbar', this);
	};

	on(name, subscriber) {
		var storege = this._getStorage(name);
		storege.push(subscriber);
	};

	notify(name, data) {
		var storege = this._getStorage(name);
		$.each(storege, function (i, subscriber) {
			let [...arg] = [data, name, i];
			subscriber.apply(subscriber, arg);
		});
	};

	_getStorage(name) {
		const subscribers = this.subscribers;
		if (!subscribers[name]) {
			subscribers[name] = [];
		}
		return subscribers[name];
	}

}
/* harmony default export */ __webpack_exports__["default"] = (ViewModel);

/***/ }),

/***/ "./src/modules/Xgrid.ts":
/*!******************************!*\
  !*** ./src/modules/Xgrid.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewModel.js */ "./src/modules/ViewModel.js");
/* harmony import */ var _ProcessSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProcessSettings.js */ "./src/modules/ProcessSettings.js");
/* harmony import */ var _BuildInfrastructure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BuildInfrastructure */ "./src/modules/BuildInfrastructure.ts");
/* harmony import */ var _FilterToolbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterToolbar.js */ "./src/modules/FilterToolbar.js");
/* harmony import */ var _Sorting_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sorting.js */ "./src/modules/Sorting.js");
/* harmony import */ var _Display_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Display.js */ "./src/modules/Display.js");
/* harmony import */ var _FixedHeader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FixedHeader.js */ "./src/modules/FixedHeader.js");
/* harmony import */ var _Storage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Storage.js */ "./src/modules/Storage.js");
/* harmony import */ var _Fill_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Fill.js */ "./src/modules/Fill.js");
/* harmony import */ var _Pagination_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pagination.js */ "./src/modules/Pagination.js");
/* harmony import */ var _Tools_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Tools.js */ "./src/modules/Tools.js");











var Xgrid = /** @class */ (function () {
    function Xgrid(options, $box) {
        this.properties = {
            $box: $box,
            data: []
        };
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
        this.Storage = new _Storage_js__WEBPACK_IMPORTED_MODULE_7__["default"]({ $box: $box });
        this._exec();
    }
    ;
    Xgrid.prototype.ajaxFunction = function (queryObject, url) {
        var options = this.options;
        return $.ajax({
            url: url,
            data: queryObject,
            type: options.ajaxType,
            dataType: 'json'
        });
    };
    ;
    Xgrid.prototype._response = function (responseObject) {
        var options = this.options;
        if (options.afterResponse) {
            _Tools_js__WEBPACK_IMPORTED_MODULE_10__["default"].execute(options.afterResponse, [responseObject]);
        }
    };
    ;
    Xgrid.prototype._request = function (queryObject) {
        if (queryObject === void 0) { queryObject = {}; }
        var options = this.options, d = $.Deferred();
        if (options.beforeRequest) {
            _Tools_js__WEBPACK_IMPORTED_MODULE_10__["default"].execute(options.beforeRequest, [queryObject]);
        }
        this.ajaxFunction(queryObject, options.url).done(this._response.bind(this)).always(d.resolve);
        return d;
    };
    ;
    Xgrid.prototype._bind = function () {
        var _this = this;
        var self = this, properties = this.properties, options = this.options;
        // to Do if model will be changed
        this.Storage.on('colModels', function () {
            //console.log(this.Fill);
        });
        this.Storage.on('data', function () {
            _this.Display.exec();
        });
        this.ViewModel.on('data', function () {
            _this.Fill.tbody();
            setTimeout(function () {
                _this.FixedHeader.resize();
            }, 1050);
        });
        this.Storage.on('$paginationBox', function () {
            _this.Pagination.exec();
        });
        this.Storage.on('$headTable', function () {
            _this.Sorting.bind();
        });
    };
    ;
    Xgrid.prototype._exec = function () {
        var _this = this;
        var self = this, properties = this.properties, options = this.options;
        this.ViewModel = new _ViewModel_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.ProcessSettings = new _ProcessSettings_js__WEBPACK_IMPORTED_MODULE_1__["default"](options, this.Storage, this.ViewModel);
        this.BuildInfrastructure = new _BuildInfrastructure__WEBPACK_IMPORTED_MODULE_2__["default"](options, this.Storage, this.ViewModel);
        this.Sorting = new _Sorting_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.Storage, this.ViewModel, options);
        this.Fill = new _Fill_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.Storage, this.ViewModel);
        this.FilterToolbar = new _FilterToolbar_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.Storage, this.ViewModel, options);
        this.Display = new _Display_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
            storage: this.Storage,
            viewModel: this.ViewModel,
            ajax: (function (queryObject) {
                return _this._request(queryObject);
            }),
            isLocal: options.url ? false : true
        });
        this.FixedHeader = new _FixedHeader_js__WEBPACK_IMPORTED_MODULE_6__["default"](this.Storage);
        this.Pagination = new _Pagination_js__WEBPACK_IMPORTED_MODULE_9__["default"](options, this.Storage, this.ViewModel);
        this._bind();
        this.Fill.thead();
        if (!$.isArray(options.data)) {
            options.data = [];
        }
        this.Storage.data = options.data;
    };
    return Xgrid;
}());
/* harmony default export */ __webpack_exports__["default"] = (Xgrid);


/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.ts ./src/scss/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.ts */"./src/index.ts");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0J1aWxkSW5mcmFzdHJ1Y3R1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ29sTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9GaWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9GaWx0ZXJUb29sYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0ZpbHRlclRvb2xiYXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9GaXhlZEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9PcGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvUGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9QaXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Qcm9jZXNzU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvUXVlcnlNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Tb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1NvcnRSdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1NvcnRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Ub29scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9WaWV3TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvWGdyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRm9DO0FBRXBDLENBQUMsVUFBQyxDQUFDO0lBQ0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUc7UUFBVSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUNwQyxJQUFJLElBQUksQ0FBQztRQUNULElBQU0sT0FBTyxHQUFzQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2hCLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1YsSUFBTSxLQUFLLEdBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUM1RSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLHNEQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakQ7aUJBQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxVQUFVLEVBQUU7Z0JBQ3ZHLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2pDO2lCQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQy9CO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0FBQ0YsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ25Cb0I7QUFJL0I7SUFLQyw2QkFBWSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3ZCLFVBQVUsRUFBRSxrQkFBa0I7WUFDOUIsVUFBVSxFQUFFLGtCQUFrQjtZQUM5QixnQkFBZ0IsRUFBRSw2Q0FBNkM7WUFDL0QsZUFBZSxFQUFFLDZDQUE2QztZQUM5RCxlQUFlLEVBQUUsOENBQThDO1lBQy9ELGVBQWUsRUFBRSw4Q0FBOEM7WUFDL0QsbUJBQW1CLEVBQUUsNENBQTRDO1lBQ2pFLGtCQUFrQixFQUFFLHVhQU1iO1NBQ1AsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVaLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFBQSxDQUFDO0lBQ0YsZ0RBQWtCLEdBQWxCO1FBQ0MsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRTtZQUNqQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUMzQjtJQUNGLENBQUM7SUFBQSxDQUFDO0lBQ0YsbUNBQUssR0FBTDtRQUNDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFeEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3BDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakUsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDO1lBQ25DLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUVmLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELENBQUMsQ0FBQyxDQUFDO1lBRUgsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSTtnQkFDekMsSUFBTSxNQUFNLEdBQUc7b0JBQ2QsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUN2QyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztpQkFDZCxDQUFDO2dCQUVGLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsT0FBTyxNQUFNLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUFBLENBQUM7SUFDRixvREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLElBQUk7UUFDN0IsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTNDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTtZQUNuQixLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hCLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTtnQkFDbkIsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUI7U0FDRDtJQUNGLENBQUM7SUFBQSxDQUFDO0lBQ0YsaURBQW1CLEdBQW5CO1FBQ0MsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQUksR0FBRywwQ0FBb0MsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFDQUFxQyxDQUFDLGVBQVUsR0FBRyxNQUFHLENBQUMsQ0FBQztRQUNsSyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZELE9BQU8sQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9FLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFBQSxDQUFDO0lBRUYseUNBQVcsR0FBWDtRQUFBLGlCQXNCQztRQXJCQSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUNsQixJQUFJLFdBQVcsR0FBRyxNQUFJLEdBQUcscUNBQThCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvSEFBb0gsQ0FBQyxlQUFVLEdBQUcsTUFBRyxDQUFDO1FBRTFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUM1RCxJQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFNLE1BQU0sR0FBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVsRCxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7UUFFSCxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ2QsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBSSxHQUFHLDBDQUFtQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUNBQXFDLENBQUMsZUFBVSxHQUFHLE1BQUcsQ0FBQyxDQUFDO1FBQ3pLLE9BQU8sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNwRSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxJQUFJO1lBQ2hDLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQUEsQ0FBQztJQUVGLHlDQUFXLEdBQVg7UUFBQSxpQkFRQztRQVBBLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxXQUFXLEdBQUcsbUNBQW1DLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsZUFBZSxDQUFDO1FBRTNJLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLElBQUk7WUFDNUQsS0FBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFBQSxDQUFDO0lBRUYsOENBQWdCLEdBQWhCO1FBQ0MsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMxQywrQ0FBZ0IsRUFBRSx5Q0FBZSxFQUFFLHlDQUFlLEVBQUUseUNBQWUsRUFBRSxpREFBbUIsQ0FBYTtRQUM3RyxJQUFJLGNBQWMsQ0FBQztRQUVuQixpREFBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUgsaURBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUNqRyxpREFBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ2pHLGlEQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDakcsaURBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFFakgsSUFBSSxPQUFPLENBQUMsa0JBQWtCLEVBQUU7WUFDL0IsY0FBYyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUMvQzthQUFNO1lBQ04sY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDakU7UUFFRCxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3pDLENBQUM7SUFBQSxDQUFDO0lBRUYsb0NBQU0sR0FBTjtRQUNDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUU3QixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxTEFJWSxPQUFPLENBQUMsVUFBVSxpSEFHbEIsT0FBTyxDQUFDLFVBQVUsaUhBSzNDLENBQUMsQ0FBQztRQUNQLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdkQsT0FBTyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUYsMEJBQUM7QUFBRCxDQUFDO0FBQ0QsK0RBQWUsbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4S25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdFOzs7Ozs7Ozs7Ozs7O0FDbktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxrQkFBa0IsaURBQWlEO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2pMQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZFOzs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEU7Ozs7Ozs7Ozs7OztBQ2pJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUY7Ozs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFOzs7Ozs7Ozs7Ozs7QUNsRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRjs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtB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QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdFOzs7Ozs7Ozs7Ozs7QUM5REE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0U7Ozs7Ozs7Ozs7Ozs7QUNwS0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDZCQUE2QixFQUFFO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEU7Ozs7Ozs7Ozs7OztBQzVFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QUFDO0lBQ2xDLENBQUM7SUFDRixZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3hJRCx5QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgWGdyaWQgZnJvbSAnLi9tb2R1bGVzL1hncmlkJztcclxuXHJcbigoJCkgPT4ge1xyXG5cdCQuZm4uWGdyaWQgPSBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pIHtcclxuXHRcdGxldCBkYXRhO1xyXG5cdFx0Y29uc3Qgb3B0aW9uczogSU9wdGlvbnMgfCBzdHJpbmcgPSBhcmdzWzBdO1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGRhdGEgPSAkKHRoaXMpLmRhdGEoJ1hncmlkJyk7XHJcblx0XHRcdGlmICghZGF0YSkge1xyXG5cdFx0XHRcdGNvbnN0IHByb3BzOiBJT3B0aW9ucyA9ICh0eXBlb2YgKG9wdGlvbnMpID09PSAnc3RyaW5nJykgPyBhcmdzWzFdIDogb3B0aW9ucztcclxuXHRcdFx0XHQkKHRoaXMpLmRhdGEoJ1hncmlkJywgbmV3IFhncmlkKHByb3BzLCAkKHRoaXMpKSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIChvcHRpb25zKSA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5pbmRleE9mKCdfJykgIT09IDAgJiYgZGF0YVtvcHRpb25zXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdGNvbnN0IHByb3BzID0gYXJncy5zbGljZSgxKTtcclxuXHRcdFx0XHRkYXRhW29wdGlvbnNdLmFwcGx5KGRhdGEsIHByb3BzKTtcclxuXHRcdFx0fSBlbHNlIGlmIChkYXRhLnJlZnJlc2gpIHtcclxuXHRcdFx0XHRkYXRhLnJlZnJlc2guYXBwbHkoZGF0YSwgYXJncyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufSkoalF1ZXJ5KTtcclxuIiwiaW1wb3J0IHRvb2xzIGZyb20gJy4vVG9vbHMuanMnO1xyXG5pbXBvcnQgVmlld01vZGVsIGZyb20gJy4vVmlld01vZGVsLmpzJztcclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9TdG9yYWdlLmpzJ1xyXG5cclxuY2xhc3MgQnVpbGRJbmZyYXN0cnVjdHVyZSB7XHJcblx0dmlld01vZGVsOiBWaWV3TW9kZWw7XHJcblx0c3RvcmFnZTogU3RvcmFnZTtcclxuXHRvcHRpb25zOiBJQnVpbGRJbmZyYXN0cnVjdHVyZU9wdGlvbnM7XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMsIHN0b3JhZ2UsIHZpZXdNb2RlbCkge1xyXG5cdFx0dGhpcy52aWV3TW9kZWwgPSB2aWV3TW9kZWw7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7XHJcblx0XHRcdHRoZWFkQ2xhc3M6ICd0YWJsZS1ncmlkLXRoZWFkJyxcclxuXHRcdFx0dGJvZHlDbGFzczogJ3RhYmxlLWdyaWQtdGJvZHknLFxyXG5cdFx0XHRmaXJzdEJ0blRlbXBsYXRlOiAnPHNwYW4gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj4mIzE3MTs8L3NwYW4+JyxcclxuXHRcdFx0bGFzdEJ0blRlbXBsYXRlOiAnPHNwYW4gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj4mIzE4Nzs8L3NwYW4+JyxcclxuXHRcdFx0cHJldkJ0blRlbXBsYXRlOiAnPHNwYW4gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj4mIzgyNDk7PC9zcGFuPicsXHJcblx0XHRcdG5leHRCdG5UZW1wbGF0ZTogJzxzcGFuIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+JiM4MjUwOzwvc3Bhbj4nLFxyXG5cdFx0XHRjdXJyZW50UGFnZVRlbXBsYXRlOiAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPicsXHJcblx0XHRcdHBhZ2luYXRpb25UZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJYZ3JpZC1wYWdnaW5hdGlvbiBpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuXCIgPntmaXJzdEJ0blRlbXBsYXRlfXtwcmV2QnRuVGVtcGxhdGV9PC9kaXY+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPiBQYWdlIDwvc3Bhbj5cclxuXHRcdFx0XHR7Y3VycmVudFBhZ2VUZW1wbGF0ZX1cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+IG9mIDxzcGFuIGNsYXNzPVwiWGdyaWQtdG90YWwtcGFnZXNcIj48L3NwYW4+PC9zcGFuPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIiA+e25leHRCdG5UZW1wbGF0ZX17bGFzdEJ0blRlbXBsYXRlfTwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5gXHJcblx0XHR9LCBvcHRpb25zKTtcclxuXHJcblx0XHR0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xyXG5cdFx0dGhpcy5fZXhlYygpO1xyXG5cdH07XHJcblx0YnVpbGRGaWx0ZXJUb29sYmFyKCkge1xyXG5cdFx0aWYgKHRoaXMudmlld01vZGVsLmZpbHRlclRvb2xiYXIpIHtcclxuXHRcdFx0dGhpcy5fYnVpbGRGaWx0ZXJUb29sYmFyKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRfZXhlYygpIHtcclxuXHRcdHRoaXMuX2J1aWxkKCk7XHJcblx0XHR0aGlzLl9idWlsZFRoZWFkKCk7XHJcblx0XHR0aGlzLl9idWlsZFRCb2R5KCk7XHJcblx0XHR0aGlzLl9idWlsZFBhZ2luYXRpb24oKTtcclxuXHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3QgY29sTW9kZWxzID0gc3RvcmFnZS5jb2xNb2RlbHM7XHJcblx0XHRjb25zdCAkdGZvb3RDZWxscyA9IHN0b3JhZ2UuJGdyaWRUYWJsZS5maW5kKCcuWGdyaWQtdGJvZHktdyB0ZCcpO1xyXG5cdFx0Y29uc3QgJHRoZWFkQ2VsbHMgPSBzdG9yYWdlLiRoZWFkVGFibGUuZmluZCgndHInKTtcclxuXHJcblx0XHRjb2xNb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAobW9kZWwsIGkpIHtcclxuXHRcdFx0bGV0IGNlbGxzID0gW107XHJcblxyXG5cdFx0XHRjZWxscy5wdXNoKCR0Zm9vdENlbGxzLmdldChpKSk7XHJcblx0XHRcdCR0aGVhZENlbGxzLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGNlbGxzLnB1c2goJCh0aGlzKS5maW5kKCc+KjplcSgnICsgaSArICcpJykuZ2V0KDApKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRtb2RlbC5kZXBlbmRlbnQgPSBjZWxscy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRcdFx0XHRjb25zdCByZXN1bHQgPSB7XHJcblx0XHRcdFx0XHQkYW5jaG9yOiAkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSksXHJcblx0XHRcdFx0XHQkaXRlbTogJChpdGVtKVxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdHJlc3VsdC4kaXRlbS5iZWZvcmUocmVzdWx0LiRhbmNob3IpO1xyXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRfYWRkUHJvcHN0b0hlYWRlckNlbGxzKGksIGl0ZW0pIHtcclxuXHRcdGNvbnN0ICRpdGVtID0gJChpdGVtKTtcclxuXHRcdGNvbnN0IGNvbE1vZGVsID0gdGhpcy5zdG9yYWdlLmNvbE1vZGVsc1tpXTtcclxuXHJcblx0XHQkaXRlbS5hdHRyKCdkYXRhLWFsaWFzJywgY29sTW9kZWxbJ2FsaWFzJ10pO1xyXG5cdFx0aWYgKGNvbE1vZGVsLmZpeGVkKSB7XHJcblx0XHRcdCRpdGVtLmFkZENsYXNzKCdmaXhlZCcpO1xyXG5cdFx0XHRpZiAoY29sTW9kZWwud2lkdGgpIHtcclxuXHRcdFx0XHQkaXRlbS53aWR0aChjb2xNb2RlbC53aWR0aCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdF9idWlsZEZpbHRlclRvb2xiYXIoKSB7XHJcblx0XHRjb25zdCB0YWcgPSAndGZvb3QnO1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGNvbnN0ICRmaWx0ZXIgPSAkKGA8JHt0YWd9IGNsYXNzPVwiWGdyaWQtdGhlYWQtZmlsdGVyXCI+PHRyPiR7IG5ldyBBcnJheShzdG9yYWdlLmNvbE1vZGVscy5sZW5ndGggKyAxKS5qb2luKCc8dGQgY2xhc3M9XCJYZ3JpZC1maWx0ZXItY2VsbFwiPjwvdGQ+Jyl9PC90cj48LyR7dGFnfT5gKTtcclxuXHRcdGNvbnN0IGFkZFByb3AgPSB0aGlzLl9hZGRQcm9wc3RvSGVhZGVyQ2VsbHMuYmluZCh0aGlzKTtcclxuXHJcblx0XHRzdG9yYWdlLiRmaWx0ZXJUb29sYmFySXRlbXMgPSAkZmlsdGVyLmZpbmQoJy5YZ3JpZC1maWx0ZXItY2VsbCcpLmVhY2goYWRkUHJvcCk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuZmluZCgnLlhncmlkLXRoZWFkLXcgdGQnKS5lYWNoKGFkZFByb3ApO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLmFwcGVuZCgkZmlsdGVyKTtcclxuXHR9O1xyXG5cclxuXHRfYnVpbGRUaGVhZCgpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRsZXQgdGFnID0gJ3RoZWFkJztcclxuXHRcdGxldCB3aWR0aEhlbHBlciA9IGA8JHt0YWd9IGNsYXNzPVwiWGdyaWQtdGhlYWQtd1wiPjx0cj4ke25ldyBBcnJheShzdG9yYWdlLmNvbE1vZGVscy5sZW5ndGggKyAxKS5qb2luKCc8dGQ+PGRpdiBjbGFzcz1cIlhncmlkLVdpZHRoTGlzdGVuZXItd3JhcHBlclwiPjxpZnJhbWUgZGF0YS1jb2w9XCIwXCIgY2xhc3M9XCJYZ3JpZC1XaWR0aExpc3RlbmVyXCI+PC9pZnJhbWU+PC9kaXY+PC90ZD4nKX08L3RyPjwvJHt0YWd9PmA7XHJcblxyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLmh0bWwod2lkdGhIZWxwZXIpO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLmZpbmQoJy5YZ3JpZC10aGVhZC13IHRkJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRjb25zdCAkdGQgPSAkKHRoaXMpO1xyXG5cdFx0XHRjb25zdCBjb2xNb2RlbCA9IHN0b3JhZ2UuY29sTW9kZWxzW2ldO1xyXG5cdFx0XHRjb25zdCBpZnJhbWU6IEhUTUxFbGVtZW50ID0gJHRkLmZpbmQoJ2lmcmFtZScpWzBdO1xyXG5cclxuXHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS1hbGlhcycsIGNvbE1vZGVsLmFsaWFzKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRhZyA9ICd0Ym9keSc7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuYXBwZW5kKGA8JHt0YWd9IGNsYXNzPVwiWGdyaWQtdGhlYWQtbGFiZWxzXCI+PHRyPiR7bmV3IEFycmF5KHN0b3JhZ2UuY29sTW9kZWxzLmxlbmd0aCArIDEpLmpvaW4oJzx0aCBjbGFzcz1cIlhncmlkLXRoZWFkLWxhYmVsXCI+PC90aD4nKX08L3RyPjwvJHt0YWd9PmApO1xyXG5cdFx0c3RvcmFnZS4kaGVhZExhYmVscyA9IHN0b3JhZ2UuJGhlYWRUYWJsZS5maW5kKCcuWGdyaWQtdGhlYWQtbGFiZWwnKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRMYWJlbHMuZWFjaCgoaSwgaXRlbSkgPT4ge1xyXG5cdFx0XHR0aGlzLl9hZGRQcm9wc3RvSGVhZGVyQ2VsbHMoaSwgaXRlbSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmJ1aWxkRmlsdGVyVG9vbGJhcigpO1xyXG5cdH07XHJcblxyXG5cdF9idWlsZFRCb2R5KCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGxldCB3aWR0aEhlbHBlciA9ICc8dGhlYWQgY2xhc3M9XCJYZ3JpZC10Ym9keS13XCI+PHRyPicgKyBuZXcgQXJyYXkoc3RvcmFnZS5jb2xNb2RlbHMubGVuZ3RoICsgMSkuam9pbignPHRkPjxpPjwvaT48L3RkPicpICsgJzwvdHI+PC90aGVhZD4nO1xyXG5cclxuXHRcdHN0b3JhZ2UuJGdyaWRUYWJsZS5odG1sKHdpZHRoSGVscGVyKTtcclxuXHRcdHN0b3JhZ2UuJGdyaWRUYWJsZS5maW5kKCcuWGdyaWQtdGJvZHktdyB0ciB0ZCcpLmVhY2goKGksIGl0ZW0pID0+IHtcclxuXHRcdFx0dGhpcy5fYWRkUHJvcHN0b0hlYWRlckNlbGxzKGksIGl0ZW0pO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0X2J1aWxkUGFnaW5hdGlvbigpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cdFx0Y29uc3QgJHBhZ2luYXRpb24gPSAkKG9wdGlvbnMucGFnaW5hdGlvblRlbXBsYXRlKTtcclxuXHRcdGNvbnN0IHsgZmlyc3RCdG5UZW1wbGF0ZSwgbGFzdEJ0blRlbXBsYXRlLCBwcmV2QnRuVGVtcGxhdGUsIG5leHRCdG5UZW1wbGF0ZSwgY3VycmVudFBhZ2VUZW1wbGF0ZSB9ID0gb3B0aW9ucztcclxuXHRcdGxldCAkcGFnaW5hdGlvbkJveDtcclxuXHJcblx0XHR0b29scy5pbnNlcnRFbGVtZW50KCRwYWdpbmF0aW9uLCAne2ZpcnN0QnRuVGVtcGxhdGV9JywgZmlyc3RCdG5UZW1wbGF0ZSA/ICQoZmlyc3RCdG5UZW1wbGF0ZSkuYWRkQ2xhc3MoJ1hncmlkLWZpcnN0JykgOiAnJyk7XHJcblx0XHR0b29scy5pbnNlcnRFbGVtZW50KCRwYWdpbmF0aW9uLCAne3ByZXZCdG5UZW1wbGF0ZX0nLCAkKHByZXZCdG5UZW1wbGF0ZSkuYWRkQ2xhc3MoJ1hncmlkLXByZXYnKSk7XHJcblx0XHR0b29scy5pbnNlcnRFbGVtZW50KCRwYWdpbmF0aW9uLCAne25leHRCdG5UZW1wbGF0ZX0nLCAkKG5leHRCdG5UZW1wbGF0ZSkuYWRkQ2xhc3MoJ1hncmlkLW5leHQnKSk7XHJcblx0XHR0b29scy5pbnNlcnRFbGVtZW50KCRwYWdpbmF0aW9uLCAne2xhc3RCdG5UZW1wbGF0ZX0nLCAkKGxhc3RCdG5UZW1wbGF0ZSkuYWRkQ2xhc3MoJ1hncmlkLWxhc3QnKSk7XHJcblx0XHR0b29scy5pbnNlcnRFbGVtZW50KCRwYWdpbmF0aW9uLCAne2N1cnJlbnRQYWdlVGVtcGxhdGV9JywgJChjdXJyZW50UGFnZVRlbXBsYXRlKS5hZGRDbGFzcygnWGdyaWQtY3VycmVudC1wYWdlJykpO1xyXG5cclxuXHRcdGlmIChvcHRpb25zLnBhZ2luYXRpb25TZWxlY3Rvcikge1xyXG5cdFx0XHQkcGFnaW5hdGlvbkJveCA9ICQob3B0aW9ucy5wYWdpbmF0aW9uU2VsZWN0b3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JHBhZ2luYXRpb25Cb3ggPSBzdG9yYWdlLiRib3guZmluZCgnLlhncmlkLXBhZ2dpbmF0aW9uLXdyYXBwZXInKTtcclxuXHRcdH1cclxuXHJcblx0XHQkcGFnaW5hdGlvbkJveC5odG1sKCRwYWdpbmF0aW9uKTtcclxuXHRcdHN0b3JhZ2UuJHBhZ2luYXRpb25Cb3ggPSAkcGFnaW5hdGlvbkJveDtcclxuXHR9O1xyXG5cclxuXHRfYnVpbGQoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHJcblx0XHRzdG9yYWdlLiRib3guaHRtbChgPGRpdiBjbGFzcz1cIlhncmlkXCI+XHJcblx0PGRpdiBjbGFzcz1cIlhncmlkLXdyYXBwZXJcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJYZ3JpZC13cmFwcGVyLWhvbGRlclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiWGdyaWQtdGhlYWQtd3JhcHBlclwiPlxyXG5cdFx0XHRcdDx0YWJsZSBjbGFzcz1cIlhncmlkLXRoZWFkICR7b3B0aW9ucy50aGVhZENsYXNzfVwiPjwvdGFibGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiWGdyaWQtdGJvZHktd3JhcHBlclwiPlxyXG5cdFx0XHRcdDx0YWJsZSBjbGFzcz1cIlhncmlkLXRib2R5ICR7b3B0aW9ucy50Ym9keUNsYXNzfVwiPjwvdGFibGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiWGdyaWQtcGFnZ2luYXRpb24td3JhcHBlclwiPjwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L2Rpdj5gKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZSA9IHN0b3JhZ2UuJGJveC5maW5kKCcuWGdyaWQtdGhlYWQnKTtcclxuXHRcdHN0b3JhZ2UuJGdyaWRUYWJsZSA9IHN0b3JhZ2UuJGJveC5maW5kKCcuWGdyaWQtdGJvZHknKTtcclxuXHR9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJ1aWxkSW5mcmFzdHJ1Y3R1cmU7IiwiaW1wb3J0IHBpcGVzIGZyb20gJy4vUGlwZXMuanMnO1xyXG5pbXBvcnQgRmlsdGVyVG9vbGJhck1vZGVsIGZyb20gJy4vRmlsdGVyVG9vbGJhck1vZGVsLmpzJztcclxuY2xhc3MgQ29sTW9kZWwge1xyXG5cdGNvbnN0cnVjdG9yKG1vZGVsLCBvcmRlcikge1xyXG5cdFx0dGhpcy5vcmRlciA9IG9yZGVyO1xyXG5cdFx0dGhpcy5sYWJlbCA9ICcnO1xyXG5cdFx0dGhpcy5maWx0ZXJhYmxlID0gZmFsc2U7XHJcblx0XHR0aGlzLmZpbHRlclR5cGUgPSAndGV4dCc7XHJcblx0XHR0aGlzLmZpbHRlck9wdGlvbiA9ICdjbic7XHJcblx0XHR0aGlzLnNvcnRhYmxlID0gZmFsc2U7XHJcblx0XHR0aGlzLnNvcnRUeXBlID0gJ3RleHQnO1xyXG5cdFx0dGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuXHRcdHRoaXMucmVzaXphYmxlID0gZmFsc2U7XHJcblx0XHR0aGlzLmluc2Vuc2l0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLmZpeGVkID0gZmFsc2U7XHJcblxyXG5cdFx0JC5leHRlbmQodGhpcywgbW9kZWwpO1xyXG5cdFx0dGhpcy5maWx0ZXJUb29sYmFyU2V0dGluZ3MgPSBuZXcgRmlsdGVyVG9vbGJhck1vZGVsKG1vZGVsLmZpbHRlclRvb2xiYXJTZXR0aW5ncyk7XHJcblxyXG5cdFx0aWYgKHR5cGVvZiAodGhpcy5hbGlhcykgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdHRoaXMuYWxpYXMgPSB0aGlzLmtleTtcclxuXHRcdH1cclxuXHRcdGlmICh0eXBlb2YgKHRoaXMua2V5KSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0dGhpcy5hbGlhcyA9IHRoaXMuYWxpYXM7XHJcblx0XHR9XHJcblx0XHRpZiAobW9kZWwuc29ydFR5cGUgJiYgdHlwZW9mIChtb2RlbC5zb3J0VHlwZSkgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0dGhpcy5zb3J0Rm9ybWF0dGVyID0gbW9kZWwuc29ydFR5cGU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNvcnRGb3JtYXR0ZXIgPSBwaXBlcy5nZXRCeVR5cGUobW9kZWwuc29ydFR5cGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChtb2RlbC5maWx0ZXJUeXBlICYmIHR5cGVvZiAobW9kZWwuZmlsdGVyVHlwZSkgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0dGhpcy5maWx0ZXJGb3JtYXR0ZXIgPSBtb2RlbC5maWx0ZXJUeXBlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5maWx0ZXJGb3JtYXR0ZXIgPSBwaXBlcy5nZXRCeVR5cGUobW9kZWwuZmlsdGVyVHlwZSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmRlcGVuZGVudCA9IFtdO1xyXG5cdFx0dGhpcy5fY2hlY2sgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0aGlzLmhpZGRlbikge1xyXG5cdFx0XHRcdHRoaXMuZGVwZW5kZW50LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRcdFx0XHRcdGl0ZW0uJGl0ZW0uZGV0YWNoKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5kZXBlbmRlbnQuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG5cdFx0XHRcdFx0aXRlbS4kYW5jaG9yLmFmdGVyKGl0ZW0uJGl0ZW0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsYWJlbEZvcm1hdHRlcigpIHtcclxuXHRcdHJldHVybiB0aGlzLmxhYmVsO1xyXG5cdH07XHJcblxyXG5cdGNlbGxGb3JtYXR0ZXIoJHRkLCB2YWx1ZSwgcm93RGF0YSwgZGF0YSkge1xyXG5cdFx0aWYgKHR5cGVvZiAodmFsdWUpID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHR2YWx1ZSA9ICcnO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICc8ZGl2IGNsYXNzPVwiZWxsaXBzaXNcIj4nICsgdmFsdWUgKyAnPC9kaXY+JztcclxuXHR9O1xyXG5cclxuXHRmaWx0ZXJUb29sYmFyRm9ybWF0dGVyKCRjZWxsLCBjb2xNb2RlbCkge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSBjb2xNb2RlbC5maWx0ZXJUb29sYmFyU2V0dGluZ3MgfHwge307XHJcblx0XHRsZXQgJGNvbnRyb2wsXHJcblx0XHRcdCRjb250YWluZXIsXHJcblx0XHRcdCR3cmFwID0gJCgnPGRpdiBjbGFzcz1cIlhncmlkLWZpbHRlci1jb250cm9sLXdyYXBcIj48L2Rpdj4nKSxcclxuXHRcdFx0c3RyID0gJzxkaXYgY2xhc3M9XCJYZ3JpZC1maWx0ZXItd3JhcHBlclwiPic7XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmFsbG93UmVzZXRCdXR0b24gfHwgc2V0dGluZ3MuYWxsb3dTdWJtaXRCdXR0b24pIHtcclxuXHRcdFx0c3RyICs9ICc8c3BhbiBjbGFzcz1cIlhncmlkLWZpbHRlci1idG5zXCI+JztcclxuXHRcdFx0aWYgKHNldHRpbmdzLmFsbG93UmVzZXRCdXR0b24pIHtcclxuXHRcdFx0XHRzdHIgKz0gJzxzcGFuIGNsYXNzPVwiWGdyaWQtYnRuIFhncmlkLXJlc2V0XCI+JiMxMDAwNjs8L3NwYW4+JztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc2V0dGluZ3MuYWxsb3dTdWJtaXRCdXR0b24pIHtcclxuXHRcdFx0XHRzdHIgKz0gJzxzcGFuIGNsYXNzPVwiWGdyaWQtYnRuIFhncmlkLW9uU3VibWl0XCI+JiMxMDAwNDs8L3NwYW4+JztcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHIgKz0gJzwvc3Bhbj4nO1xyXG5cdFx0fVxyXG5cdFx0c3RyICs9ICc8L2Rpdj4nXHJcblx0XHRzd2l0Y2ggKHNldHRpbmdzLmZvcm1Db250cm9sVHlwZSkge1xyXG5cdFx0XHRjYXNlICdzZWxlY3QnOlxyXG5cdFx0XHRcdCRjb250cm9sID0gJCgnPHNlbGVjdCBjbGFzcz1cIlhncmlkLXNlbGVjdCBYZ3JpZC1maWx0ZXJcIiAgLz4nKTtcclxuXHRcdFx0XHRzZXR0aW5ncy5zZWxlY3RPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGkpIHtcclxuXHRcdFx0XHRcdCRjb250cm9sLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT1cIicgKyBpICsgJ1wiPicgKyBlbGVtZW50LmxhYmVsICsgJzwvb3B0aW9uPicpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0JGNvbnRyb2wudmFsKFtdKS5lYWNoKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkSW5kZXggPSAtMTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHQkY29udHJvbCA9ICQoJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiWGdyaWQtaW5wdXQgWGdyaWQtZmlsdGVyXCIgLz4nKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGlmIChzZXR0aW5ncy5vbkNoYW5nZSkge1xyXG5cdFx0XHQkY29udHJvbC5hZGRDbGFzcygnWGdyaWQtb25DaGFuZ2UnKTtcclxuXHRcdH1cclxuXHRcdGlmIChzZXR0aW5ncy5vbktleWRvd24pIHtcclxuXHRcdFx0JGNvbnRyb2wuYWRkQ2xhc3MoJ1hncmlkLW9uS2V5ZG93bicpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNldHRpbmdzLm9uRW50ZXIpIHtcclxuXHRcdFx0JGNvbnRyb2wuYWRkQ2xhc3MoJ1hncmlkLW9uRW50ZXInKTtcclxuXHRcdH1cclxuXHRcdGlmIChzZXR0aW5ncy5hdHRyKSB7XHJcblx0XHRcdCRjb250cm9sLmF0dHIoc2V0dGluZ3MuYXR0cik7XHJcblx0XHR9XHJcblxyXG5cdFx0JGNvbnRhaW5lciA9ICQoc3RyKTtcclxuXHRcdCR3cmFwLmFwcGVuZCgkY29udHJvbCk7XHJcblx0XHQkY29udGFpbmVyLmFwcGVuZCgkd3JhcCk7XHJcblx0XHQkY2VsbC5odG1sKCRjb250YWluZXIpO1xyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xNb2RlbDsiLCJpbXBvcnQgdG9vbHMgZnJvbSAnLi9Ub29scy5qcyc7XHJcbmltcG9ydCBRdWVyeU1vZGVsIGZyb20gJy4vUXVlcnlNb2RlbC5qcyc7XHJcbmltcG9ydCBzb3J0IGZyb20gJy4vU29ydC5qcyc7XHJcbmltcG9ydCBmaWx0ZXIgZnJvbSAnLi9GaWx0ZXIuanMnO1xyXG5pbXBvcnQgcGlwZXMgZnJvbSAnLi9QaXBlcy5qcyc7XHJcblxyXG5jbGFzcyBEaXNwbGF5IHtcclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcblx0XHR0aGlzLnZpZXdNb2RlbCA9IG9wdGlvbnMudmlld01vZGVsO1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gb3B0aW9ucy5zdG9yYWdlO1xyXG5cdFx0dGhpcy5hamF4ID0gb3B0aW9ucy5hamF4O1xyXG5cclxuXHRcdGlmIChvcHRpb25zLmlzTG9jYWwpIHtcclxuXHRcdFx0dGhpcy5wcm9jZXNzID0gdGhpcy5fbG9jYWxQcm9jZXNzLmJpbmQodGhpcyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnByb2Nlc3MgPSB0aGlzLl9zZXJ2ZXJQcm9jZXNzLmJpbmQodGhpcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuX3N1YnNjcmliZSgpO1xyXG5cdFx0fSwgNTApO1xyXG5cdH07XHJcblxyXG5cdGV4ZWMoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHR2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbCxcclxuXHRcdFx0cXVlcnkgPSBuZXcgUXVlcnlNb2RlbCh7XHJcblx0XHRcdFx0ZmlsdGVyOiBzdG9yYWdlLmZpbHRlcixcclxuXHRcdFx0XHRzb3J0OiB2aWV3TW9kZWwuc29ydEJ5LFxyXG5cdFx0XHRcdHJvd3M6IHZpZXdNb2RlbC5yb3dzLFxyXG5cdFx0XHRcdHBhZ2U6IHZpZXdNb2RlbC5uZXdQYWdlLFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRzdG9yYWdlLnF1ZXJ5ID0gcXVlcnk7XHJcblx0XHRzdG9yYWdlLiRib3guYWRkQ2xhc3MoJ1hncmlkLWxvYWRpbmcnKTtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnByb2Nlc3MoKS5kb25lKChkYXRhKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5fZmlsbGVyKGRhdGEpO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmFnZS4kYm94LnJlbW92ZUNsYXNzKCdYZ3JpZC1sb2FkaW5nJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSwgMCk7XHJcblx0fTtcclxuXHJcblx0X2ZpbGxlcihkYXRhKSB7XHJcblx0XHRjb25zdCB2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbDtcclxuXHRcdHZpZXdNb2RlbC50b3RhbFBhZ2VzID0gZGF0YS50b3RhbFBhZ2VzXHJcblx0XHR2aWV3TW9kZWwudG90YWxSb3dzID0gZGF0YS50b3RhbFJvd3M7XHJcblx0XHR2aWV3TW9kZWwuZGF0YSA9IGRhdGEuZGF0YTtcclxuXHRcdHZpZXdNb2RlbC5wYWdlID0gZGF0YS5wYWdlO1xyXG5cdH07XHJcblxyXG5cdF9sb2NhbEZpbHRlcihkYXRhLCBmaWx0ZXJRdWVyeSkge1xyXG5cdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCksXHJcblx0XHRcdHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdHJhd0RhdGEgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0Y29uc3QgY29sTW9kZWxzID0gc3RvcmFnZS5jb2xNb2RlbHNEaWN0aW9uYXJ5O1xyXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRjb25zdCByb3cgPSB7fTtcclxuXHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoYWxpYXMsIHJvd0RhdGEpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiAocm93W2FsaWFzXSkgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgY29sTW9kZWwgPSBjb2xNb2RlbHNbYWxpYXNdO1xyXG5cdFx0XHRcdFx0XHRcdHJvd1thbGlhc10gPSBjb2xNb2RlbC5maWx0ZXJGb3JtYXR0ZXIocm93RGF0YVtjb2xNb2RlbC5rZXldLCByb3dEYXRhLCBjb2xNb2RlbCk7XHJcblx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdHJldHVybiByb3dbYWxpYXNdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGlmIChmaWx0ZXJRdWVyeSkge1xyXG5cdFx0XHRcdGRhdGEgPSBmaWx0ZXIuZXhlYyhkYXRhLCBmaWx0ZXJRdWVyeSwgcmF3RGF0YSgpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xyXG5cdFx0fSwgMCk7XHJcblx0XHRyZXR1cm4gZGVmZXJyZWQ7XHJcblx0fTtcclxuXHJcblx0X2xvY2FsU29ydChkYXRhLCBzb3J0UnVsZXMpIHtcclxuXHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpLFxyXG5cdFx0XHRzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0aWYgKHNvcnRSdWxlcy5sZW5ndGgpIHtcclxuXHRcdFx0c29ydFJ1bGVzID0gc29ydFJ1bGVzLm1hcCgocnVsZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGNvbE1vZGVsID0gc3RvcmFnZS5jb2xNb2RlbHNEaWN0aW9uYXJ5W3J1bGUuYnldO1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSB7XHJcblx0XHRcdFx0XHRvcmRlcjogcnVsZS5vcmRlclxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdGlmIChjb2xNb2RlbCkge1xyXG5cdFx0XHRcdFx0cmVzdWx0LmNvbE1vZGVsID0gY29sTW9kZWw7XHJcblx0XHRcdFx0XHRyZXN1bHRbJ2J5J10gPSBjb2xNb2RlbC5rZXk7XHJcblx0XHRcdFx0XHRyZXN1bHRbJ2dldCddID0gY29sTW9kZWwuc29ydEZvcm1hdHRlcjtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmVzdWx0WydieSddID0gcnVsZS5ieTtcclxuXHRcdFx0XHRcdHJlc3VsdFsnZ2V0J10gPSBwaXBlcy5nZXRCeVR5cGUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGRhdGEgPSBzb3J0LmV4ZWMoZGF0YSwgc29ydFJ1bGVzKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcclxuXHJcblx0XHRcdH0sIDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBkZWZlcnJlZDtcclxuXHR9O1xyXG5cclxuXHRfZ2V0TG9jYWxEYXRhKGRhdGEsIHF1ZXJ5KSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHR2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbCxcclxuXHRcdFx0cmVzdWx0ID0ge1xyXG5cdFx0XHRcdHRvdGFsUm93czogZGF0YS5sZW5ndGgsXHJcblx0XHRcdFx0cGFnZTogcXVlcnkucGFnZSxcclxuXHRcdFx0XHR0b3RhbFBhZ2VzOiBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyB2aWV3TW9kZWwucm93cykgfHwgMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRiZWdpbiA9IChyZXN1bHQucGFnZSAtIDEpICogdmlld01vZGVsLnJvd3MsXHJcblx0XHRcdGVuZCA9IHJlc3VsdC5wYWdlICogdmlld01vZGVsLnJvd3M7XHJcblxyXG5cdFx0cmVzdWx0LmRhdGEgPSBkYXRhLnNsaWNlKGJlZ2luLCBlbmQpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG5cclxuXHRfbG9jYWxQcm9jZXNzKCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZSxcclxuXHRcdFx0ZGVmZXJyZWQgPSAkLkRlZmVycmVkKCksXHJcblx0XHRcdHF1ZXJ5ID0gc3RvcmFnZS5xdWVyeTtcclxuXHRcdHRoaXMuX2xvY2FsRmlsdGVyKHN0b3JhZ2UuZGF0YSwgcXVlcnkuZmlsdGVyKS5kb25lKChmaWx0ZXJlZERhdGEpID0+IHtcclxuXHRcdFx0dGhpcy5fbG9jYWxTb3J0KGZpbHRlcmVkRGF0YSwgcXVlcnkuc29ydCkuZG9uZSgoc29ydGVkRGF0YSkgPT4ge1xyXG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmUodGhpcy5fZ2V0TG9jYWxEYXRhKHNvcnRlZERhdGEsIHF1ZXJ5KSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZGVmZXJyZWQ7XHJcblx0fTtcclxuXHJcblx0X3NlcnZlclByb2Nlc3MoKSB7XHJcblx0XHRjb25zdCBkZWZlcnJlZCA9IHRoaXMuYWpheCh0aGlzLnN0b3JhZ2UucXVlcnkpO1xyXG5cdFx0cmV0dXJuIGRlZmVycmVkO1xyXG5cdH07XHJcblx0X3N1YnNjcmliZSgpIHtcclxuXHRcdGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsLFxyXG5cdFx0XHRzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHRhY3Rpb24gPSB0b29scy50aHJvdHRsZSgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5leGVjKCk7XHJcblx0XHRcdH0sIDEwMCksXHJcblx0XHRcdF9yZWxvYWQgPSBmdW5jdGlvbiAocywgdHlwZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnZmlsdGVyJzpcclxuXHRcdFx0XHRcdFx0dmlld01vZGVsLm5ld1BhZ2UgPSAxO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3NvcnRCeSc6XHJcblx0XHRcdFx0XHRcdC8vdmlld01vZGVsLm5ld1BhZ2UgPSAxOyA/XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRhY3Rpb24oKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdHZpZXdNb2RlbC5vbignbmV3UGFnZScsIF9yZWxvYWQpO1xyXG5cdFx0dmlld01vZGVsLm9uKCdzb3J0QnknLCBfcmVsb2FkKTtcclxuXHRcdHN0b3JhZ2Uub24oJ2ZpbHRlcicsIF9yZWxvYWQpO1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc3BsYXk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5jbGFzcyBGaWxsIHtcclxuXHRjb25zdHJ1Y3RvcihzdG9yYWdlLCB2aWV3TW9kZWwpIHtcclxuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHR9O1xyXG5cclxuXHR0aGVhZCgpIHtcclxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHRjbGFzc1J1bGVzID0gWydyZXNpemFibGUnLCAnc29ydGFibGUnLCAnZmlsdGVyYWJsZScsICdoaWRkZW4nXSxcclxuXHRcdFx0Y29sTW9kZWxzID0gc3RvcmFnZS5jb2xNb2RlbHM7XHJcblxyXG5cdFx0c3RvcmFnZS4kaGVhZExhYmVscy5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdGNvbnN0ICR0aCA9ICQodGhpcyksXHJcblx0XHRcdFx0JHdyYXBwZXIgPSAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKSxcclxuXHRcdFx0XHRjb2xNb2RlbCA9IGNvbE1vZGVsc1tpXTtcclxuXHJcblx0XHRcdCR0aC5kYXRhKCdYZ3JpZC5kYXRhJywgY29sTW9kZWwpO1xyXG5cdFx0XHRsZXQgZGF0YSA9IGNvbE1vZGVsLmxhYmVsRm9ybWF0dGVyKCR3cmFwcGVyLCAkdGgsIGNvbE1vZGVsLCBpKTtcclxuXHRcdFx0aWYgKHR5cGVvZiAoZGF0YSkgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0JHdyYXBwZXIuaHRtbChkYXRhKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JHRoLmh0bWwoJHdyYXBwZXIpO1xyXG5cdFx0XHQkLmVhY2goY2xhc3NSdWxlcywgZnVuY3Rpb24gKGksIG1hcmspIHtcclxuXHRcdFx0XHRpZiAoY29sTW9kZWxbbWFya10pIHtcclxuXHRcdFx0XHRcdCR0aC5hZGRDbGFzcyhtYXJrKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JHRoLnJlbW92ZUNsYXNzKG1hcmspO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuZmlsdGVyVG9vbGJhcigpO1xyXG5cdH07XHJcblxyXG5cdGZpbHRlclRvb2xiYXIoKSB7XHJcblx0XHRjb25zdCBzZWxmID0gdGhpcyxcclxuXHRcdFx0c3RvcmFnZSA9IHRoaXMuc3RvcmFnZSxcclxuXHRcdFx0dmlld01vZGVsID0gdGhpcy52aWV3TW9kZWwsXHJcblx0XHRcdGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzO1xyXG5cdFx0aWYgKHN0b3JhZ2UuJGZpbHRlclRvb2xiYXJJdGVtcykge1xyXG5cdFx0XHRzdG9yYWdlLiRmaWx0ZXJUb29sYmFySXRlbXMuZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRcdGNvbnN0ICRjZWxsID0gJCh0aGlzKSxcclxuXHRcdFx0XHRcdGNvbE1vZGVsID0gY29sTW9kZWxzW2ldO1xyXG5cdFx0XHRcdGlmIChjb2xNb2RlbC5maWx0ZXJhYmxlICYmIGNvbE1vZGVsLmZpbHRlclRvb2xiYXJGb3JtYXR0ZXIpIHtcclxuXHRcdFx0XHRcdGxldCBkYXRhID0gY29sTW9kZWwuZmlsdGVyVG9vbGJhckZvcm1hdHRlcigkY2VsbCwgY29sTW9kZWwpO1xyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiAoZGF0YSkgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHRcdCRjZWxsLmh0bWwoZGF0YSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCRjZWxsLmVtcHR5KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHRib2R5KCkge1xyXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMsXHJcblx0XHRcdHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG5cdFx0XHRjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscyxcclxuXHRcdFx0dmlld01vZGVsID0gdGhpcy52aWV3TW9kZWwsXHJcblx0XHRcdGRhdGFUb0Rpc3BsYXkgPSB2aWV3TW9kZWwuZGF0YSxcclxuXHRcdFx0JGhlYWRXcmFwID0gc3RvcmFnZS4kaGVhZFRhYmxlLnBhcmVudCgpLFxyXG5cdFx0XHQkZ3JpZFdyYXAgPSBzdG9yYWdlLiRncmlkVGFibGUucGFyZW50KCksXHJcblx0XHRcdGRhdGEgPSBzdG9yYWdlLmRhdGE7XHJcblxyXG5cdFx0bGV0IHRib2R5LFxyXG5cdFx0XHRudW0gPSAwO1xyXG5cclxuXHRcdGNvbE1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xNb2RlbCwgaSkge1xyXG5cdFx0XHRjb2xNb2RlbC5fY2hlY2soKTtcclxuXHRcdFx0Y29uc3QgJHRkID0gc3RvcmFnZS4kaGVhZExhYmVscy5lcShpKTtcclxuXHRcdFx0aWYgKCFjb2xNb2RlbC5oaWRkZW4pIHtcclxuXHRcdFx0XHRudW0rKztcclxuXHRcdFx0XHRpZiAobnVtICUgMikge1xyXG5cdFx0XHRcdFx0JHRkLmFkZENsYXNzKCdvZGQnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JHRkLmFkZENsYXNzKCdldmVuJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0Ym9keSA9IHRoaXMuX2NyZWF0ZVNoYWRvd0JvZHkoZnJhZ21lbnQpO1xyXG5cclxuXHRcdCQodGJvZHkpLmZpbmQoJ3RyJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRjb25zdCByb3dEYXRhID0gZGF0YVRvRGlzcGxheVtpXTtcclxuXHRcdFx0c2VsZi5fZmlsbFJvdygkKHRoaXMpLCByb3dEYXRhLCBkYXRhKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHN0b3JhZ2UuJGdyaWRUYWJsZS5maW5kKCc+dGJvZHknKS5yZW1vdmUoKTtcclxuXHRcdCRoZWFkV3JhcC5jc3MoeyAncGFkZGluZy1yaWdodCc6ICcnIH0pO1xyXG5cdFx0c3RvcmFnZS4kZ3JpZFRhYmxlLmFwcGVuZCh0Ym9keSk7XHJcblxyXG5cdFx0aWYgKCRncmlkV3JhcC5nZXQoMCkub2Zmc2V0V2lkdGggLSAkZ3JpZFdyYXAuZ2V0KDApLmNsaWVudFdpZHRoKSB7XHJcblx0XHRcdCRoZWFkV3JhcC5jc3MoeyAncGFkZGluZy1yaWdodCc6IHN0b3JhZ2Uuc2Nyb2xsYmFyV2lkdGggKyAncHgnIH0pO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fdXBkYXRlSGVhZCgpO1xyXG5cdH07XHJcblxyXG5cdF9jcmVhdGVTaGFkb3dCb2R5KGZyYWdtZW50LCBhbW91bnQpIHtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXHJcblx0XHRcdHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzLFxyXG5cdFx0XHR0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5JyksXHJcblx0XHRcdHZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsLFxyXG5cdFx0XHRyb3dzQ291bnQgPSB2aWV3TW9kZWwuZGF0YS5sZW5ndGg7XHJcblxyXG5cdFx0bGV0IHRyID0gJzx0cj4nICsgQXJyYXkoY29sTW9kZWxzLmxlbmd0aCArIDEpLmpvaW4oJzx0ZD48L3RkPicpICsgJzwvdHI+JyxcclxuXHRcdFx0dHJzID0gJzx0Ym9keT4nICsgbmV3IEFycmF5KHJvd3NDb3VudCArIDEpLmpvaW4odHIpICsgJzx0Ym9keT4nO1xyXG5cclxuXHRcdGlmICghZnJhZ21lbnQpIHtcclxuXHRcdFx0ZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGJvZHkuaW5uZXJIVE1MID0gdHJzO1xyXG5cclxuXHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKHRib2R5KTtcclxuXHRcdHJldHVybiB0Ym9keTtcclxuXHR9O1xyXG5cclxuXHRfZmlsbFJvdygkdHIsIHJvd0RhdGEsIGRhdGEpIHtcclxuXHJcblx0XHRjb25zdCAkdGRzID0gJHRyLmZpbmQoJ3RkJyksXHJcblx0XHRcdHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzO1xyXG5cdFx0bGV0IG51bSA9IDA7XHJcblxyXG5cdFx0JHRyLmRhdGEoJ1hncmlkLmRhdGEnLCByb3dEYXRhKTtcclxuXHJcblx0XHQkLmVhY2goY29sTW9kZWxzLCBmdW5jdGlvbiAoaSwgY29sTW9kZWwpIHtcclxuXHRcdFx0bGV0IHZhbHVlID0gcm93RGF0YVtjb2xNb2RlbC5rZXldLFxyXG5cdFx0XHRcdCR0ZCA9ICR0ZHMuZXEoaSksXHJcblx0XHRcdFx0ZGF0YTtcclxuXHJcblx0XHRcdGlmIChjb2xNb2RlbC5oaWRkZW4pIHtcclxuXHRcdFx0XHQkdGQucmVtb3ZlKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bnVtKys7XHJcblx0XHRcdFx0ZGF0YSA9IGNvbE1vZGVsLmNlbGxGb3JtYXR0ZXIoJHRkLCB2YWx1ZSwgcm93RGF0YSwgZGF0YSk7XHJcblx0XHRcdFx0aWYgKG51bSAlIDIpIHtcclxuXHRcdFx0XHRcdCR0ZC5hZGRDbGFzcygnb2RkJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCR0ZC5hZGRDbGFzcygnZXZlbicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodHlwZW9mIChkYXRhKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRcdCR0ZC5odG1sKGRhdGEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0X3VwZGF0ZUhlYWQoKSB7XHJcblx0XHRjb25zdCBzZWxmID0gdGhpcyxcclxuXHRcdFx0c3RvcmFnZSA9IHRoaXMuc3RvcmFnZSxcclxuXHRcdFx0Y29sTW9kZWxzID0gc3RvcmFnZS5jb2xNb2RlbHMsXHJcblx0XHRcdHZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsLFxyXG5cdFx0XHQkaGVhZExhYmVscyA9IHN0b3JhZ2UuJGhlYWRMYWJlbHMsXHJcblx0XHRcdHNvcnRCeSA9IHt9O1xyXG5cclxuXHRcdHZpZXdNb2RlbC5zb3J0QnkuZm9yRWFjaChmdW5jdGlvbiAoc29ydFJ1bGUpIHtcclxuXHRcdFx0c29ydEJ5W3NvcnRSdWxlLmJ5XSA9IHNvcnRSdWxlLm9yZGVyO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29sTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGNvbE1vZGVsLCBpKSB7XHJcblx0XHRcdGNvbnN0ICRsYWJlbCA9ICRoZWFkTGFiZWxzLmVxKGkpLFxyXG5cdFx0XHRcdG9yZGVyID0gc29ydEJ5W2NvbE1vZGVsLmFsaWFzXTtcclxuXHRcdFx0aWYgKG9yZGVyKSB7XHJcblx0XHRcdFx0JGxhYmVsLmF0dHIoJ2RhdGEtc29ydCcsIG9yZGVyKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkbGFiZWwucmVtb3ZlQXR0cignZGF0YS1zb3J0Jyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxsO1xyXG4iLCJpbXBvcnQgb3BlcmF0b3JzIGZyb20gJy4vT3BlcmF0b3JzLmpzJztcclxuY2xhc3MgRmlsdGVyIHtcclxuXHJcblx0ZXhlYyhkYXRhLCBncm91cCwgZ2V0RGF0YSkge1xyXG5cdFx0Y29uc3QgbmV3RGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtLCBpKSA9PiB7XHJcblx0XHRcdGNvbnN0IGdldCA9IGdldERhdGEoKSxcclxuXHRcdFx0XHRzdGF0ZSA9IHRoaXMuX2NoZWNrKGdyb3VwLCBpdGVtLCBnZXQpO1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBuZXdEYXRhO1xyXG5cdH07XHJcblx0X29yKHJ1bGVzLCByb3dEYXRhLCBnZXQpIHtcclxuXHRcdGxldCBpID0gcnVsZXMubGVuZ3RoO1xyXG5cdFx0d2hpbGUgKGktLSkge1xyXG5cdFx0XHRjb25zdCBydWxlID0gcnVsZXNbaV07XHJcblx0XHRcdGlmICghb3BlcmF0b3JzW3J1bGUub3BdKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHZhbHVlID0gZ2V0KHJ1bGUuZmllbGQsIHJvd0RhdGEpLFxyXG5cdFx0XHRcdHN0YXRlID0gb3BlcmF0b3JzW3J1bGUub3BdKHJ1bGUuZGF0YSwgdmFsdWUpO1xyXG5cdFx0XHRpZiAoc3RhdGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHJcblx0X2FuZChydWxlcywgcm93RGF0YSwgZ2V0KSB7XHJcblx0XHRsZXQgaSA9IHJ1bGVzLmxlbmd0aDtcclxuXHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0Y29uc3QgcnVsZSA9IHJ1bGVzW2ldO1xyXG5cdFx0XHRpZiAoIW9wZXJhdG9yc1tydWxlLm9wXSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB2YWx1ZSA9IGdldChydWxlLmZpZWxkLCByb3dEYXRhKSxcclxuXHRcdFx0XHRzdGF0ZSA9IG9wZXJhdG9yc1tydWxlLm9wXShydWxlLmRhdGEsIHZhbHVlKTtcclxuXHRcdFx0aWYgKCFzdGF0ZSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxuXHRfY2hlY2soZ3JvdXAsIHJvd0RhdGEsIGdldCkge1xyXG5cdFx0Y29uc3QgaXNPciA9IGdyb3VwLnJ1bGVzLmxlbmd0aCAmJiBTdHJpbmcoZ3JvdXAuZ3JvdXBPcCkudG9VcHBlckNhc2UoKSA9PT0gXCJPUlwiO1xyXG5cdFx0aWYgKCQuaXNBcnJheShncm91cC5ydWxlcykgJiYgZ3JvdXAucnVsZXMubGVuZ3RoKSB7XHJcblx0XHRcdGlmIChpc09yKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX29yKGdyb3VwLnJ1bGVzLCByb3dEYXRhLCBnZXQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLl9hbmQoZ3JvdXAucnVsZXMsIHJvd0RhdGEsIGdldCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRmlsdGVyKCk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5jbGFzcyBGaWx0ZXJUb29sYmFyIHtcclxuXHRjb25zdHJ1Y3RvcihzdG9yYWdlLCB2aWV3TW9kZWwsIG9wdGlvbnMpIHtcclxuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblx0XHR0aGlzLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcclxuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblx0XHR0aGlzLl9iaW5kKCk7XHJcblx0XHR0aGlzLnRpbWVvdXRPbktleWRvd24gPSBudWxsO1xyXG5cdH1cclxuXHR0cmlnZ2VyVG9vbGJhcigpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdHZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsLFxyXG5cdFx0XHRjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscyxcclxuXHRcdFx0b3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcclxuXHRcdFx0cnVsZXMgPSBbXSxcclxuXHRcdFx0ZGVmYXVsdFNlYXJjaCA9ICdjbicsXHJcblx0XHRcdGdyb3VwT3AgPSBvcHRpb25zLmZpbHRlclRvb2xiYXJHcm91cE9wID09PSAnQU5EJyA/ICdBTkQnIDogJ09SJztcclxuXHRcdGxldCBydWxlR3JvdXAgPSBudWxsO1xyXG5cclxuXHRcdGlmICghc3RvcmFnZS4kZmlsdGVyVG9vbGJhckl0ZW1zKSB7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0b3JhZ2UuJGZpbHRlclRvb2xiYXJJdGVtcy5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdGNvbnN0ICRmaWx0ZXIgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdCRlbGVtID0gJGZpbHRlci5maW5kKCcuWGdyaWQtZmlsdGVyJylcclxuXHRcdFx0aWYgKCRlbGVtLmxlbmd0aCkge1xyXG5cdFx0XHRcdGNvbnN0IGNvbE1vZGVsID0gY29sTW9kZWxzW2ldLFxyXG5cdFx0XHRcdFx0c2V0dGluZ3MgPSBjb2xNb2RlbC5maWx0ZXJUb29sYmFyU2V0dGluZ3MgfHwge30sXHJcblx0XHRcdFx0XHRmaWx0ZXJPcHRpb24gPSBjb2xNb2RlbC5maWx0ZXJPcHRpb24gfHwgZGVmYXVsdFNlYXJjaCxcclxuXHRcdFx0XHRcdGZpZWxkTmFtZSA9IGNvbE1vZGVsLmFsaWFzIHx8IGNvbE1vZGVsLmtleTtcclxuXHJcblx0XHRcdFx0bGV0IHZhbHVlID0gJGVsZW0udmFsKCk7XHJcblxyXG5cdFx0XHRcdGlmICh0eXBlb2YgKHNldHRpbmdzLnRyYW5zZm9ybURhdGEpID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IHNldHRpbmdzLnRyYW5zZm9ybURhdGEodmFsdWUsIHNldHRpbmdzKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh2YWx1ZSB8fCBmaWx0ZXJPcHRpb24gPT09IFwibnVcIiB8fCBmaWx0ZXJPcHRpb24gPT09IFwibm5cIikge1xyXG5cdFx0XHRcdFx0cnVsZXMucHVzaCh7XHJcblx0XHRcdFx0XHRcdGZpZWxkOiBmaWVsZE5hbWUsXHJcblx0XHRcdFx0XHRcdG9wOiBmaWx0ZXJPcHRpb24sXHJcblx0XHRcdFx0XHRcdGRhdGE6IHZhbHVlXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmIChydWxlcy5sZW5ndGgpIHtcclxuXHRcdFx0cnVsZUdyb3VwID0ge1xyXG5cdFx0XHRcdGdyb3VwT3AsXHJcblx0XHRcdFx0cnVsZXNcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0c3RvcmFnZS5maWx0ZXIgPSBydWxlR3JvdXA7XHJcblx0fTtcclxuXHJcblx0X2JpbmQoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLm9uKCdrZXlwcmVzcycsICdpbnB1dC5YZ3JpZC1pbnB1dC5YZ3JpZC1vbkVudGVyJywgdGhpcy5faGFuZGxlckZpbHRlck9uRW50ZXIuYmluZCh0aGlzKSk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUub24oJ2tleWRvd24nLCAnaW5wdXQuWGdyaWQtaW5wdXQuWGdyaWQtb25LZXlkb3duJywgdGhpcy5faGFuZGxlckZpbHRlck9uS2V5ZG93bi5iaW5kKHRoaXMpKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5vbignY2hhbmdlJywgJy5YZ3JpZC1maWx0ZXIuWGdyaWQtb25DaGFuZ2UnLCB0aGlzLl9oYW5kbGVyRmlsdGVyT25DaGFuZ2UuYmluZCh0aGlzKSk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUub24oJ2NsaWNrJywgJy5YZ3JpZC1yZXNldCcsIHRoaXMuX2hhbmRsZXJGaWx0ZXJPblJlc2V0LmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLm9uKCdjbGljaycsICcuWGdyaWQtb25TdWJtaXQnLCB0aGlzLl9oYW5kbGVyRmlsdGVyT25TdWJtaXQuYmluZCh0aGlzKSk7XHJcblx0fTtcclxuXHJcblx0X2hhbmRsZXJGaWx0ZXJPblN1Ym1pdChlKSB7XHJcblx0XHQkKGUuY3VycmVudFRhcmdldCkuYmx1cigpO1xyXG5cdFx0dGhpcy50cmlnZ2VyVG9vbGJhcigpO1xyXG5cdH07XHJcblxyXG5cdF9oYW5kbGVyRmlsdGVyT25SZXNldChlKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHQkc2VsbCA9ICQoZS5jdXJyZW50VGFyZ2V0KS5ibHVyKCkucGFyZW50cygnLlhncmlkLWZpbHRlci1jZWxsOmVxKDApJyksXHJcblx0XHRcdGFsaWFzID0gJHNlbGwuYXR0cignZGF0YS1hbGlhcycpLFxyXG5cdFx0XHQkY29udHJvbCA9ICRzZWxsLmZpbmQoJy5YZ3JpZC1maWx0ZXInKSxcclxuXHRcdFx0Y29sTW9kZWwgPSBzdG9yYWdlLmNvbE1vZGVsc0RpY3Rpb25hcnlbYWxpYXNdLFxyXG5cdFx0XHRkYXRhID0gJGNvbnRyb2wudmFsKCk7XHJcblxyXG5cdFx0aWYgKGNvbE1vZGVsKSB7XHJcblx0XHRcdGlmIChjb2xNb2RlbC5maWx0ZXJUb29sYmFyU2V0dGluZ3MuZm9ybUNvbnRyb2xUeXBlID09PSAnc2VsZWN0Jykge1xyXG5cdFx0XHRcdCRjb250cm9sLnZhbChbXSkuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkSW5kZXggPSAtMTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkY29udHJvbC52YWwoJycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudHJpZ2dlclRvb2xiYXIoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdF9oYW5kbGVyRmlsdGVyT25DaGFuZ2UoZSkge1xyXG5cdFx0dGhpcy50cmlnZ2VyVG9vbGJhcigpO1xyXG5cdH07XHJcblx0X2hhbmRsZXJGaWx0ZXJPbktleWRvd24oZSkge1xyXG5cclxuXHRcdHZhciBrZXkgPSBlLndoaWNoO1xyXG5cdFx0c3dpdGNoIChrZXkpIHtcclxuXHRcdFx0Y2FzZSAxMzpcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdGNhc2UgOTpcclxuXHRcdFx0Y2FzZSAxNjpcclxuXHRcdFx0Y2FzZSAzNzpcclxuXHRcdFx0Y2FzZSAzODpcclxuXHRcdFx0Y2FzZSAzOTpcclxuXHRcdFx0Y2FzZSA0MDpcclxuXHRcdFx0Y2FzZSAyNzpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMudGltZW91dE9uS2V5ZG93bikge1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dE9uS2V5ZG93bik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudGltZW91dE9uS2V5ZG93biA9IHNldFRpbWVvdXQoXHJcblx0XHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMudHJpZ2dlclRvb2xiYXIoKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQ1MDBcclxuXHRcdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdF9oYW5kbGVyRmlsdGVyT25FbnRlcihlKSB7XHJcblx0XHR2YXIga2V5ID0gZS5jaGFyQ29kZSB8fCBlLmtleUNvZGUgfHwgMDtcclxuXHRcdGlmIChrZXkgPT09IDEzKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0dGhpcy50cmlnZ2VyVG9vbGJhcigpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJUb29sYmFyOyIsImNsYXNzIEZpbHRlclRvb2xiYXJNb2RlbCB7XHJcblx0Y29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcclxuXHRcdHRoaXMuZm9ybUNvbnRyb2xUeXBlID0gJ3RleHQnO1xyXG5cdFx0dGhpcy5zZWxlY3RPcHRpb25zID0gW107XHJcblx0XHR0aGlzLnBsYWNlaG9sZGVyID0gJyc7XHJcblx0XHR0aGlzLm9uRW50ZXIgPSB0cnVlO1xyXG5cdFx0dGhpcy5vbktleWRvd24gPSBmYWxzZTtcclxuXHRcdHRoaXMub25DaGFuZ2UgPSBmYWxzZTtcclxuXHRcdHRoaXMuYWxsb3dSZXNldEJ1dHRvbiA9IHRydWU7XHJcblx0XHR0aGlzLmFsbG93U3VibWl0QnV0dG9uID0gdHJ1ZTtcclxuXHRcdCQuZXh0ZW5kKHRoaXMsIHNldHRpbmdzKTtcclxuXHRcdGlmICghdGhpcy50cmFuc2Zvcm1EYXRhKSB7XHJcblx0XHRcdGlmICh0aGlzLmZvcm1Db250cm9sVHlwZSA9PT0gJ3NlbGVjdCcpIHtcclxuXHRcdFx0XHR0aGlzLnRyYW5zZm9ybURhdGEgPSAoKGRhdGEpID0+IHtcclxuXHRcdFx0XHRcdGxldCByZXN1bHQ7XHJcblx0XHRcdFx0XHRjb25zdCBzZWxlY3RPcHRpb25zID0gdGhpcy5zZWxlY3RPcHRpb25zO1xyXG5cdFx0XHRcdFx0aWYgKCQuaXNBcnJheShkYXRhKSkge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBbXTtcclxuXHRcdFx0XHRcdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBpdGVtID0gc2VsZWN0T3B0aW9uc1trZXldOyBzZWxlY3RPcHRpb25zXHJcblx0XHRcdFx0XHRcdFx0aWYgKGl0ZW0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW0udmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucHVzaChrZXkpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGlmICghcmVzdWx0Lmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpZiAoc2VsZWN0T3B0aW9uc1tkYXRhXSkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZWxlY3RPcHRpb25zW2RhdGFdLnZhbHVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJUb29sYmFyTW9kZWw7IiwiY2xhc3MgRml4ZWRIZWFkZXIge1xyXG5cdGNvbnN0cnVjdG9yKHN0b3JhZ2UpIHtcclxuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblx0XHR0aGlzLnByb3BlcnRpZXMgPSB7XHJcblxyXG5cdFx0fVxyXG5cdFx0dGhpcy5fZXhlYygpO1xyXG5cdH1cclxuXHJcblx0cmVzaXplKCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZSxcclxuXHRcdFx0c2VsZiA9IHRoaXM7XHJcblx0XHRsZXQgdyA9IDA7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuZmluZCgnLlhncmlkLXRoZWFkLXcgaWZyYW1lJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRjb25zdCAkaWZyYW1lID0gJCh0aGlzKSxcclxuXHRcdFx0XHR3aWR0aCA9ICRpZnJhbWUud2lkdGgoKSxcclxuXHRcdFx0XHRhbGlhcyA9ICRpZnJhbWUuYXR0cignZGF0YS1hbGlhcycpO1xyXG5cdFx0XHRzZWxmLl9oYW5kbGVyUmVzaXplZENlbGxXaWR0aCh3aWR0aCwgaSwgYWxpYXMpO1xyXG5cdFx0fSk7XHJcblxyXG5cdH07XHJcblxyXG5cdF9leGVjKCkge1xyXG5cdFx0dGhpcy5fYnVpbGQoKTtcclxuXHRcdHRoaXMuX2JpbmQoKTtcclxuXHR9O1xyXG5cclxuXHRfYnVpbGQoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHRjZWxsV2lkdGhMaXN0ZW5lcnMgPSBbXSxcclxuXHRcdFx0Y29sTW9kZWxzID0gc3RvcmFnZS5jb2xNb2RlbHMsXHJcblx0XHRcdHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXM7XHJcblxyXG5cdFx0cHJvcGVydGllcy4kY2VsbFdpZHRoUmVjaXBpZW50cyA9IHN0b3JhZ2UuJGdyaWRUYWJsZS5maW5kKCcuWGdyaWQtdGJvZHktdyBpJyk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuZmluZCgnLlhncmlkLXRoZWFkLXcgdGQnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdGNvbnN0IGlmcmFtZSA9ICQodGhpcykuZmluZCgnaWZyYW1lJykuZ2V0KDApO1xyXG5cdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdkYXRhLWNvbCcsIGkpO1xyXG5cdFx0XHRjZWxsV2lkdGhMaXN0ZW5lcnMucHVzaChpZnJhbWUpO1xyXG5cdFx0fSk7XHJcblx0XHRwcm9wZXJ0aWVzLiRjZWxsV2lkdGhMaXN0ZW5lcnMgPSAkKGNlbGxXaWR0aExpc3RlbmVycyk7XHJcblx0fTtcclxuXHJcblx0X2JpbmQoKSB7XHJcblx0XHRjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG5cdFx0XHRzZWxmID0gdGhpcztcclxuXHJcblx0XHRwcm9wZXJ0aWVzLiRjZWxsV2lkdGhMaXN0ZW5lcnMuZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRjb25zdCBpZnJhbWUgPSB0aGlzLFxyXG5cdFx0XHRcdCRpZnJhbWUgPSAkKGlmcmFtZSk7XHJcblxyXG5cdFx0XHRzZWxmLl9oYW5kbGVyUmVzaXplZENlbGxXaWR0aCgkaWZyYW1lLndpZHRoKCksIGksICRpZnJhbWUuYXR0cignZGF0YS1hbGlhcycpKTtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0JChpZnJhbWUuY29udGVudFdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdHNlbGYuX2hhbmRsZXJSZXNpemVkQ2VsbFdpZHRoKCRpZnJhbWUud2lkdGgoKSwgaSwgJGlmcmFtZS5hdHRyKCdkYXRhLWFsaWFzJykpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LCAxMDApO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0X2hhbmRsZXJSZXNpemVkQ2VsbFdpZHRoKHdpZHRoLCBudW0sIGFsaWFzKSB7XHJcblx0XHRjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG5cdFx0XHQkaXRlbSA9IHByb3BlcnRpZXMuJGNlbGxXaWR0aFJlY2lwaWVudHMuZmlsdGVyKCdbZGF0YS1hbGlhcz1cIicgKyBhbGlhcyArICdcIl0nKTtcclxuXHRcdCRpdGVtLndpZHRoKHdpZHRoKTtcclxuXHRcdCRpdGVtLnBhcmVudCgpLndpZHRoKHdpZHRoKTtcclxuXHR9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZpeGVkSGVhZGVyOyIsImNsYXNzIE9wZXJhdG9ycyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmVxID0gdGhpcy5lcXVhbHM7XHJcblx0XHR0aGlzLm5lID0gdGhpcy5ub3RFcXVhbHM7XHJcblx0XHR0aGlzLmx0ID0gdGhpcy5sZXNzO1xyXG5cdFx0dGhpcy5sZSA9IHRoaXMubGVzc09yRXF1YWxzO1xyXG5cdFx0dGhpcy5ndCA9IHRoaXMuZ3JlYXRlcjtcclxuXHRcdHRoaXMuZ2UgPSB0aGlzLmdyZWF0ZXJPckVxdWFscztcclxuXHRcdHRoaXMuY24gPSB0aGlzLmNvbnRhaW5zO1xyXG5cdFx0dGhpcy5uYyA9ICgoLi4uYXJnKSA9PiB7XHJcblx0XHRcdHJldHVybiAhdGhpcy5jb250YWlucy5hcHBseSh0aGlzLCBhcmcpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmJ3ID0gdGhpcy5zdGFydHNXaXRoO1xyXG5cdFx0dGhpcy5ibiA9ICgoLi4uYXJnKSA9PiB7XHJcblx0XHRcdHJldHVybiAhdGhpcy5zdGFydHNXaXRoLmFwcGx5KHRoaXMsIGFyZyk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuZW4gPSAoKC4uLmFyZykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gIXRoaXMuZW5kc1dpdGguYXBwbHkodGhpcywgYXJnKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5ldyA9IHRoaXMuZW5kc1dpdGg7XHJcblx0XHR0aGlzLmluID0gdGhpcy5pbkFycmF5O1xyXG5cdFx0dGhpcy5uaSA9ICgoLi4uYXJnKSA9PiB7XHJcblx0XHRcdHJldHVybiAhdGhpcy5pbkFycmF5LmFwcGx5KHRoaXMsIGFyZyk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMubnUgPSB0aGlzLmlzTnVsbDtcclxuXHRcdHRoaXMubm4gPSAoKC4uLmFyZykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gIXRoaXMuaXNOdWxsLmFwcGx5KHRoaXMsIGFyZyk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdGVxdWFscyhhLCBiKSB7XHJcblx0XHRyZXR1cm4gYSA9PT0gYjtcclxuXHR9O1xyXG5cdG5vdEVxdWFscyhhLCBiKSB7XHJcblx0XHRyZXR1cm4gYSAhPT0gYjtcclxuXHR9O1xyXG5cdGlzTnVsbChhKSB7XHJcblx0XHRyZXR1cm4gYSA9PT0gbnVsbDtcclxuXHR9O1xyXG5cdGdyZWF0ZXIoYSwgYikge1xyXG5cdFx0cmV0dXJuIGEgPiBiO1xyXG5cdH07XHJcblx0bGVzcyhhLCBiKSB7XHJcblx0XHRyZXR1cm4gYSA8IGI7XHJcblx0fTtcclxuXHRncmVhdGVyT3JFcXVhbHMoYSwgYikge1xyXG5cdFx0cmV0dXJuIGEgPj0gYjtcclxuXHR9O1xyXG5cdGxlc3NPckVxdWFscyhhLCBiKSB7XHJcblx0XHRyZXR1cm4gYSA8PSBiO1xyXG5cdH07XHJcblx0aW5BcnJheShhcnJheSwgYikge1xyXG5cdFx0cmV0dXJuICQuaW5BcnJheShiLCBhcnJheSkgIT09IC0xO1xyXG5cdH07XHJcblx0c3RhcnRzV2l0aChhLCBiLCBpbnNlbnNpdGl2ZSkge1xyXG5cdFx0YSA9IFN0cmluZyhhKTtcclxuXHRcdGIgPSBTdHJpbmcoYik7XHJcblx0XHRpZiAoaW5zZW5zaXRpdmUpIHtcclxuXHRcdFx0YSA9IGEudG9VcHBlckNhc2UoKTtcclxuXHRcdFx0YiA9IGIudG9VcHBlckNhc2UoKTtcclxuXHRcdH1cclxuXHRcdGxldCBsZW5ndGggPSBhLmxlbmd0aCxcclxuXHRcdFx0c3RyID0gYS5zdWJzdHIoMCwgbGVuZ3RoKTtcclxuXHRcdHJldHVybiBzdHIgPT09IGJcclxuXHR9O1xyXG5cdGVuZHNXaXRoKGEsIGIsIGluc2Vuc2l0aXZlKSB7XHJcblx0XHRhID0gU3RyaW5nKGEpO1xyXG5cdFx0YiA9IFN0cmluZyhiKTtcclxuXHRcdGlmIChpbnNlbnNpdGl2ZSkge1xyXG5cdFx0XHRhID0gYS50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0XHRiID0gYi50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGxlbmd0aCA9IGIubGVuZ3RoICogLTEsXHJcblx0XHRcdHN0ciA9IGEuc3Vic3RyKGxlbmd0aCk7XHJcblx0XHRyZXR1cm4gc3RyID09PSBiO1xyXG5cdH07XHJcblx0Y29udGFpbnMoYSwgYiwgaW5zZW5zaXRpdmUpIHtcclxuXHRcdGEgPSBTdHJpbmcoYSk7XHJcblx0XHRiID0gU3RyaW5nKGIpO1xyXG5cdFx0aWYgKGluc2Vuc2l0aXZlKSB7XHJcblx0XHRcdGEgPSBhLnRvVXBwZXJDYXNlKCk7XHJcblx0XHRcdGIgPSBiLnRvVXBwZXJDYXNlKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYi5pbmRleE9mKGEpICE9PSAtMTtcclxuXHR9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBPcGVyYXRvcnMoKTsiLCIndXNlIHN0cmljdCc7XHJcbmNsYXNzIFBhZ2luYXRpb24ge1xyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMsIHN0b3JhZ2UsIHZpZXdNb2RlbCwgKSB7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cdFx0dGhpcy52aWV3TW9kZWwgPSB2aWV3TW9kZWw7XHJcblx0XHR0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xyXG5cclxuXHRcdHRoaXMuX3N1YnNjcmliZSgpO1xyXG5cdFx0dGhpcy5wYWdlKCk7XHJcblx0XHR0aGlzLnRvdGFsUGFnZXMoKTtcclxuXHRcdHRoaXMuZXhlYygpO1xyXG5cdH07XHJcblx0ZXhlYygpIHtcclxuXHRcdHRoaXMuX2JpbmQoKTtcclxuXHR9O1xyXG5cclxuXHRwYWdlKCkge1xyXG5cdFx0dGhpcy5zdG9yYWdlLiRwYWdpbmF0aW9uQm94LmZpbmQoJy5YZ3JpZC1jdXJyZW50LXBhZ2UnKS52YWwodGhpcy52aWV3TW9kZWwucGFnZSk7XHJcblx0fTtcclxuXHJcblx0dG90YWxQYWdlcygpIHtcclxuXHRcdHRoaXMuc3RvcmFnZS4kcGFnaW5hdGlvbkJveC5maW5kKCcuWGdyaWQtdG90YWwtcGFnZXMnKS50ZXh0KHRoaXMudmlld01vZGVsLnRvdGFsUGFnZXMpO1xyXG5cdH07XHJcblxyXG5cdF9zdWJzY3JpYmUoKSB7XHJcblx0XHRjb25zdCB2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbDtcclxuXHRcdHZpZXdNb2RlbC5vbigncGFnZScsIHRoaXMucGFnZS5iaW5kKHRoaXMpKTtcclxuXHRcdHZpZXdNb2RlbC5vbigndG90YWxQYWdlcycsIHRoaXMudG90YWxQYWdlcy5iaW5kKHRoaXMpKTtcclxuXHR9O1xyXG5cclxuXHRfYmluZCgpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRzdG9yYWdlLiRwYWdpbmF0aW9uQm94Lm9uKCdjbGljay54Z3JpZCcsICcuWGdyaWQtZmlyc3QnLCB0aGlzLl9oYW5kbGVyRmlyc3QuYmluZCh0aGlzKSk7XHJcblx0XHRzdG9yYWdlLiRwYWdpbmF0aW9uQm94Lm9uKCdjbGljay54Z3JpZCcsICcuWGdyaWQtcHJldicsIHRoaXMuX2hhbmRsZXJQcmV2LmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveC5vbignY2xpY2sueGdyaWQnLCAnLlhncmlkLW5leHQnLCB0aGlzLl9oYW5kbGVyTmV4dC5iaW5kKHRoaXMpKTtcclxuXHRcdHN0b3JhZ2UuJHBhZ2luYXRpb25Cb3gub24oJ2NsaWNrLnhncmlkJywgJy5YZ3JpZC1sYXN0JywgdGhpcy5faGFuZGxlckxhc3QuYmluZCh0aGlzKSk7XHJcblx0XHRzdG9yYWdlLiRwYWdpbmF0aW9uQm94Lm9uKCdrZXlwcmVzcy54Z3JpZCcsICcuWGdyaWQtY3VycmVudC1wYWdlJywgdGhpcy5faGFuZGxlckdvVG8uYmluZCh0aGlzKSk7XHJcblx0fTtcclxuXHJcblx0X2hhbmRsZXJGaXJzdChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRpZiAodGhpcy52aWV3TW9kZWwucGFnZSAhPT0gMSkge1xyXG5cdFx0XHR0aGlzLnZpZXdNb2RlbC5uZXdQYWdlID0gMTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdF9oYW5kbGVyTGFzdChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRpZiAodGhpcy52aWV3TW9kZWwucGFnZSAhPT0gdGhpcy52aWV3TW9kZWwudG90YWxQYWdlcykge1xyXG5cdFx0XHR0aGlzLnZpZXdNb2RlbC5uZXdQYWdlID0gdGhpcy52aWV3TW9kZWwudG90YWxQYWdlcztcclxuXHRcdH1cclxuXHR9O1xyXG5cdF9oYW5kbGVyTmV4dChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBwYWdlID0gdGhpcy52aWV3TW9kZWwucGFnZSArIDE7XHJcblx0XHRpZiAocGFnZSA8PSB0aGlzLnZpZXdNb2RlbC50b3RhbFBhZ2VzKSB7XHJcblx0XHRcdHRoaXMudmlld01vZGVsLm5ld1BhZ2UgPSBwYWdlO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0X2hhbmRsZXJQcmV2KGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IHBhZ2UgPSB0aGlzLnZpZXdNb2RlbC5wYWdlIC0gMTtcclxuXHRcdGlmIChwYWdlID4gMCkge1xyXG5cdFx0XHR0aGlzLnZpZXdNb2RlbC5uZXdQYWdlID0gcGFnZTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdF9oYW5kbGVyR29UbyhlKSB7XHJcblx0XHRpZiAoZS53aGljaCA9PT0gMTMpIHtcclxuXHRcdFx0bGV0IHBhZ2UgPSAkKGUuY3VycmVudFRhcmdldCkudmFsKCk7XHJcblx0XHRcdGlmICghaXNOYU4ocGFnZSkpIHtcclxuXHRcdFx0XHRwYWdlID0gK3BhZ2U7XHJcblx0XHRcdFx0aWYgKHBhZ2UgPCAxKSB7XHJcblx0XHRcdFx0XHRwYWdlID0gMTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHBhZ2UgPiB0aGlzLnZpZXdNb2RlbC50b3RhbFBhZ2VzKSB7XHJcblx0XHRcdFx0XHRwYWdlID0gdGhpcy52aWV3TW9kZWwudG90YWxQYWdlcztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy52aWV3TW9kZWwubmV3UGFnZSA9IHBhZ2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy52aWV3TW9kZWwucGFnZSA9IHRoaXMudmlld01vZGVsLm5ld1BhZ2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uOyIsImNsYXNzIFBpcGVzIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaW50ZWdlciA9IHRoaXMuaW50ZWdlci5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5pbnQgPSB0aGlzLmludGVnZXI7XHJcblxyXG5cdFx0dGhpcy5udW1lcmljID0gdGhpcy5udW1lcmljLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmZsb2F0ID0gdGhpcy5udW1lcmljO1xyXG5cdFx0dGhpcy5udW1iZXIgPSB0aGlzLm51bWVyaWM7XHJcblxyXG5cdFx0Ly90aGlzLmRhdGV0aW1lID0gdGhpcy5kYXRlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLnRleHQgPSAoKHZhbHVlLCByb3dEYXRhLCBjb2xNb2RlbCkgPT4ge1xyXG5cdFx0XHRpZiAoY29sTW9kZWwuaW5zZW5zaXRpdmUpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbnNlbnNpdGl2ZXRleHQuY2FsbCh0aGlzLCB2YWx1ZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2Vuc2l0aXZldGV4dC5jYWxsKHRoaXMsIHZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5pc05vdFplcm8gPSB7XHJcblx0XHRcdHVuZGVmaW5lZDogMVxyXG5cdFx0fTtcclxuXHJcblx0XHRbJycsIG51bGwsIGZhbHNlLCB0cnVlXS5mb3JFYWNoKChrZXkpID0+IHtcclxuXHRcdFx0dGhpcy5pc05vdFplcm9ba2V5XSA9IDE7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRnZXRCeVR5cGUodHlwZSkge1xyXG5cdFx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRcdGNhc2UgJ2ludCc6XHJcblx0XHRcdGNhc2UgJ2ludGVnZXInOlxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmludGVnZXI7XHJcblx0XHRcdGNhc2UgJ2Zsb2F0JzpcclxuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcclxuXHRcdFx0Y2FzZSAnbnVtZXJpYyc6XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubnVtZXJpYztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy50ZXh0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bnVtZXJpYyh2YWx1ZSkge1xyXG5cdFx0bGV0IHJlc3VsdDtcclxuXHRcdGlmICh0aGlzLmlzTm90WmVyb1t2YWx1ZV0pIHtcclxuXHRcdFx0cmVzdWx0ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGlzTmFOKHZhbHVlKSkge1xyXG5cdFx0XHRcdHJlc3VsdCA9IHBhcnNlRmxvYXQoU3RyaW5nKHZhbHVlKS5yZXBsYWNlKC8sL2csICcuJykucmVwbGFjZSgvW1xcJCVdL2csICcnKSk7XHJcblx0XHRcdFx0cmVzdWx0ID0gaXNOYU4ocmVzdWx0KSA/IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSA6IHJlc3VsdDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQgPSArdmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fTtcclxuXHJcblx0aW50ZWdlcih2YWx1ZSkge1xyXG5cdFx0bGV0IHJlc3VsdDtcclxuXHRcdGlmICh0aGlzLmlzTm90WmVyb1t2YWx1ZV0pIHtcclxuXHRcdFx0cmVzdWx0ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGlzTmFOKHZhbHVlKSkge1xyXG5cdFx0XHRcdHJlc3VsdCA9IFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvW1xcJCwlXS9nLCAnJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzdWx0ID0gcGFyc2VJbnQocmVzdWx0KTtcclxuXHRcdFx0cmVzdWx0ID0gaXNOYU4ocmVzdWx0KSA/IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSA6IHJlc3VsdDtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fTtcclxuXHJcblx0aW5zZW5zaXRpdmV0ZXh0KHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gdmFsdWUgPyAkLnRyaW0oU3RyaW5nKHZhbHVlKSkgOiBcIlwiO1xyXG5cdH07XHJcblxyXG5cdHNlbnNpdGl2ZXRleHQodmFsdWUpIHtcclxuXHRcdHJldHVybiAodmFsdWUgPyAkLnRyaW0oU3RyaW5nKHZhbHVlKSkgOiBcIlwiKS50b0xvd2VyQ2FzZSgpO1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQaXBlcygpOyIsImltcG9ydCBDb2xNb2RlbCBmcm9tICcuL0NvbE1vZGVsLmpzJztcclxuaW1wb3J0IFNvcnRSdWxlIGZyb20gJy4vU29ydFJ1bGUuanMnO1xyXG5cclxuY2xhc3MgUHJvY2Vzc1NldHRpbmdzIHtcclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCBzdG9yYWdlLCB2aWV3TW9kZWwpIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHtcclxuXHRcdFx0Y29sTW9kZWxzOiBbXVxyXG5cdFx0fSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0dGhpcy5wcm9wZXJ0aWVzID0ge1xyXG5cdFx0XHRzY3JvbGxiYXJXaWR0aDogbnVsbFxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHRcdHRoaXMuX2V4ZWMoKTtcclxuXHR9O1xyXG5cclxuXHRfZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XHJcblx0XHRsZXQgZGl2LCB3aWR0aDtcclxuXHRcdGlmICh0aGlzLnByb3BlcnRpZXMuU2Nyb2xsYmFyV2lkdGgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucHJvcGVydGllcy5TY3JvbGxiYXJXaWR0aDtcclxuXHRcdH1cclxuXHJcblx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGRpdi5pbm5lckhUTUwgPSAnPGRpdiBzdHlsZT1cIndpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotNTBweDt0b3A6LTUwcHg7b3ZlcmZsb3c6YXV0bztcIj48ZGl2IHN0eWxlPVwid2lkdGg6MXB4O2hlaWdodDoxMDBweDtcIj48L2Rpdj48L2Rpdj4nO1xyXG5cdFx0ZGl2ID0gZGl2LmZpcnN0Q2hpbGQ7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcblx0XHR3aWR0aCA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aDtcclxuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcclxuXHRcdHRoaXMucHJvcGVydGllcy5TY3JvbGxiYXJXaWR0aCA9IHdpZHRoO1xyXG5cdFx0cmV0dXJuIHdpZHRoO1xyXG5cdH07XHJcblxyXG5cdF9jb2x1bW5Nb2RlbCgpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXHJcblx0XHRcdGNvbE1vZGVscyA9IFtdLFxyXG5cdFx0XHRhbGlhc2VzID0ge30sXHJcblx0XHRcdGNvbE1vZGVsc0RpY3Rpb25hcnkgPSB7fTtcclxuXHJcblx0XHQkLmVhY2gob3B0aW9ucy5jb2xNb2RlbHMsIChpLCBtb2RlbCkgPT4ge1xyXG5cdFx0XHRjb25zdCBjb2xNb2RlbCA9IG5ldyBDb2xNb2RlbChtb2RlbCwgaSwgdGhpcy5zdG9yYWdlKTtcclxuXHJcblx0XHRcdGlmICghYWxpYXNlc1tjb2xNb2RlbC5hbGlhc10pIHtcclxuXHRcdFx0XHRhbGlhc2VzW2NvbE1vZGVsLmFsaWFzXSA9IDE7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhyb3cge1xyXG5cdFx0XHRcdFx0dmFsdWU6IHtcclxuXHRcdFx0XHRcdFx0aTogaSxcclxuXHRcdFx0XHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkobW9kZWwpXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogJ2FsaWFzIGlzIG5vdCB1bmlxdWUnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ0Vycm9yOiBjb2xNb2RlbCdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y29sTW9kZWxzRGljdGlvbmFyeVtjb2xNb2RlbC5hbGlhc10gPSBjb2xNb2RlbDtcclxuXHRcdFx0Y29sTW9kZWxzLnB1c2goY29sTW9kZWwpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0c3RvcmFnZS5jb2xNb2RlbHMgPSBjb2xNb2RlbHM7XHJcblx0XHRzdG9yYWdlLmNvbE1vZGVsc0RpY3Rpb25hcnkgPSBjb2xNb2RlbHNEaWN0aW9uYXJ5O1xyXG5cdH07XHJcblxyXG5cdF9leGVjKCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdHRoaXMuX2NvbHVtbk1vZGVsKCk7XHJcblx0XHRzdG9yYWdlLnNjcm9sbGJhcldpZHRoID0gdGhpcy5fZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcclxuXHRcdHRoaXMuX3Byb2Nlc3NTb3J0aW5nKCk7XHJcblx0fTtcclxuXHJcblx0X3Byb2Nlc3NTb3J0aW5nKCkge1xyXG5cdFx0Y29uc3Qgdmlld01vZGVsID0gdGhpcy52aWV3TW9kZWwsXHJcblx0XHRcdG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblx0XHRsZXQgc29ydEJ5ID0gb3B0aW9ucy5zb3J0QnksXHJcblx0XHRcdGRhdGEgPSBbXTtcclxuXHRcdGlmIChvcHRpb25zLmZpbHRlclRvb2xiYXIpIHtcclxuXHRcdFx0dmlld01vZGVsLmZpbHRlclRvb2xiYXIgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNvcnRCeSAmJiB0eXBlb2YgKHNvcnRCeSkgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdHNvcnRCeSA9IHNvcnRCeS5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpLnNwbGl0KCcsJyk7XHJcblx0XHRcdGlmIChzb3J0QnkubGVuZ3RoKSB7XHJcblx0XHRcdFx0c29ydEJ5LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcclxuXHRcdFx0XHRcdGxldCBzb3J0UnVsZSA9IGl0ZW0udHJpbSgpLnNwbGl0KCcgJyksXHJcblx0XHRcdFx0XHRcdGJ5ID0gc29ydFJ1bGVbMF07XHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIChieSkgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHRcdGxldCBydWxlO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKFN0cmluZyhzb3J0UnVsZVsxXSkudG9VcHBlckNhc2UoKSA9PT0gJ0RFU0MnKSB7XHJcblx0XHRcdFx0XHRcdFx0cnVsZSA9IG5ldyBTb3J0UnVsZShieSwgJ0RFU0MnKTtcclxuXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cnVsZSA9IG5ldyBTb3J0UnVsZShieSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZGF0YS5wdXNoKHJ1bGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKCQuaXNBcnJheShzb3J0QnkpICYmIHNvcnRCeS5sZW5ndGgpIHtcclxuXHRcdFx0c29ydEJ5LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRcdFx0XHRsZXQgcnVsZSxcclxuXHRcdFx0XHRcdHsgYnksIG9yZGVyIH0gPSBpdGVtO1xyXG5cclxuXHRcdFx0XHRpZiAoYnkpIHtcclxuXHRcdFx0XHRcdGlmIChTdHJpbmcob3JkZXIpLnRvVXBwZXJDYXNlKCkgIT09ICdERVNDJykge1xyXG5cdFx0XHRcdFx0XHRydWxlID0gbmV3IFNvcnRSdWxlKGJ5KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJ1bGUgPSBuZXcgU29ydFJ1bGUoYnksICdERVNDJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRkYXRhLnB1c2gocnVsZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGlmIChkYXRhLmxlbmd0aCkge1xyXG5cdFx0XHR2aWV3TW9kZWwuc29ydEJ5ID0gZGF0YTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2Nlc3NTZXR0aW5nczsiLCJjbGFzcyBRdWVyeU1vZGVsIHtcclxuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XHJcblx0XHR0aGlzLmZpbHRlciA9IHt9O1xyXG5cdFx0dGhpcy5zb3J0ID0gW107XHJcblx0XHR0aGlzLnJvd3MgPSAwO1xyXG5cdFx0dGhpcy5wYWdlID0gMTtcclxuXHRcdCQuZXh0ZW5kKHRoaXMsIGRhdGEpO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBRdWVyeU1vZGVsOyIsIlxyXG5cclxuY2xhc3MgU29ydCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdH1cclxuXHJcblx0ZXhlYyhkYXRhID0gW10sIHJ1bGVzID0gW10pIHtcclxuXHRcdGxldCBzb3VyY2U7XHJcblx0XHRpZiAoIWRhdGEubGVuZ3RoIHx8ICFydWxlcy5sZW5ndGgpIHtcclxuXHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHR9XHJcblx0XHRzb3VyY2UgPSB0aGlzLl9nZXRTb3VyY2UoZGF0YSwgcnVsZXMpO1xyXG5cdFx0c291cmNlLnNvcnQoKGEsIGIpID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IDA7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwLCBqID0gcnVsZXMubGVuZ3RoOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRsZXQga2V5ID0gcnVsZXNbaV0uYnk7XHJcblx0XHRcdFx0aWYgKHJ1bGVzW2ldLm9yZGVyID09PSAnQVNDJykge1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gdGhpcy5BU0MoYS5mb3JtYXR0ZWRba2V5XSwgYi5mb3JtYXR0ZWRba2V5XSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gdGhpcy5ERVNDKGEuZm9ybWF0dGVkW2tleV0sIGIuZm9ybWF0dGVkW2tleV0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChyZXN1bHQgIT09IDApIHtcclxuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBzb3VyY2UubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRcdHJldHVybiBpdGVtLl87XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdEFTQyhhLCBiKSB7XHJcblx0XHRpZiAoYSA8IGIpIHtcclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGEgPiBiKSB7XHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIDA7XHJcblx0fTtcclxuXHJcblx0REVTQyhhLCBiKSB7XHJcblx0XHRpZiAoYSA8IGIpIHtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9XHJcblx0XHRpZiAoYSA+IGIpIHtcclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIDA7XHJcblx0fTtcclxuXHRfZ2V0U291cmNlKGRhdGEsIHJ1bGVzKSB7XHJcblx0XHRyZXR1cm4gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRcdFx0bGV0IGZvcm1hdHRlZCA9IHt9O1xyXG5cdFx0XHRydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XHJcblx0XHRcdFx0Zm9ybWF0dGVkW3J1bGUuYnldID0gcnVsZS5nZXQoaXRlbVtydWxlLmJ5XSwgaXRlbSwgcnVsZS5jb2xNb2RlbCwgZGF0YSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdF86IGl0ZW0sXHJcblx0XHRcdFx0Zm9ybWF0dGVkLFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgU29ydCgpOyIsImNsYXNzIFNvcnRSdWxlIHtcclxuXHRjb25zdHJ1Y3RvcihieSwgb3JkZXIgPSAnQVNDJykge1xyXG5cdFx0dGhpcy5ieSA9IGJ5O1xyXG5cdFx0dGhpcy5vcmRlciA9IG9yZGVyO1xyXG5cdH1cclxuXHR0cmlnZ2VyT3JkZXIoKSB7XHJcblx0XHRpZiAodGhpcy5vcmRlciA9PT0gJ0FTQycpIHtcclxuXHRcdFx0dGhpcy5vcmRlciA9ICdERVNDJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMub3JkZXIgPSAnQVNDJztcclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTb3J0UnVsZTsiLCJpbXBvcnQgU29ydFJ1bGUgZnJvbSAnLi9Tb3J0UnVsZS5qcyc7XHJcbmNsYXNzIFNvcnRpbmcge1xyXG5cdGNvbnN0cnVjdG9yKHN0b3JhZ2UsIHZpZXdNb2RlbCwgb3B0aW9ucykge1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHRcdHRoaXMuYmluZCgpO1xyXG5cdH07XHJcblx0c29ydEJ5QWxpYXMoYWxpYXMpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdHZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsLFxyXG5cdFx0XHRjb2xNb2RlbCA9IHN0b3JhZ2UuY29sTW9kZWxzRGljdGlvbmFyeVthbGlhc107XHJcblx0XHRsZXQgc29ydEJ5O1xyXG5cdFx0aWYgKGNvbE1vZGVsKSB7XHJcblx0XHRcdHNvcnRCeSA9IHZpZXdNb2RlbC5zb3J0Qnk7XHJcblx0XHRcdGxldCBpID0gc29ydEJ5Lmxlbmd0aCxcclxuXHRcdFx0XHRzb3J0UnVsZTtcclxuXHJcblx0XHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0XHRpZiAoc29ydEJ5W2ldLmJ5ID09PSBhbGlhcykge1xyXG5cdFx0XHRcdFx0c29ydFJ1bGUgPSBzb3J0Qnkuc3BsaWNlKGksIDEpWzBdO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIXNvcnRSdWxlKSB7XHJcblx0XHRcdFx0c29ydFJ1bGUgPSBuZXcgU29ydFJ1bGUoYWxpYXMpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNvcnRSdWxlLnRyaWdnZXJPcmRlcigpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLm11bHRpU29ydGluZykge1xyXG5cdFx0XHRcdHNvcnRCeS51bnNoaWZ0KHNvcnRSdWxlKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNvcnRCeSA9IFtzb3J0UnVsZV1cclxuXHRcdFx0fVxyXG5cdFx0XHR2aWV3TW9kZWwuc29ydEJ5ID0gc29ydEJ5O1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGJpbmQoKSB7XHJcblx0XHRjb25zdCAkaGVhZFRhYmxlID0gdGhpcy5zdG9yYWdlLiRoZWFkVGFibGU7XHJcblx0XHR0aGlzLl9vZmYoKTtcclxuXHRcdCRoZWFkVGFibGUub24oJ2NsaWNrLlhncmlkJywgJy5YZ3JpZC10aGVhZC1sYWJlbC5zb3J0YWJsZScsIHRoaXMuX2hhbmRsZXJTb3J0Q29sdW1uLmJpbmQodGhpcykpO1xyXG5cdH07XHJcblxyXG5cdF9vZmYoKSB7XHJcblx0XHR0aGlzLnN0b3JhZ2UuJGhlYWRUYWJsZS5vZmYoJy5YZ3JpZCcpO1xyXG5cdH07XHJcblxyXG5cdF9oYW5kbGVyU29ydENvbHVtbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCAkaXRlbSA9ICQoZS5jdXJyZW50VGFyZ2V0KSxcclxuXHRcdFx0YWxpYXMgPSAkaXRlbS5hdHRyKCdkYXRhLWFsaWFzJyksXHJcblx0XHRcdGNvbG1vZGVsID0gdGhpcy5zdG9yYWdlLmNvbE1vZGVsc0RpY3Rpb25hcnlbYWxpYXNdO1xyXG5cdFx0JGl0ZW0uYmx1cigpO1xyXG5cdFx0aWYgKGNvbG1vZGVsICYmIGNvbG1vZGVsLnNvcnRhYmxlKSB7XHJcblx0XHRcdHRoaXMuc29ydEJ5QWxpYXMoYWxpYXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb3J0aW5nOyIsImNsYXNzIFN0b3JhZ2Uge1xyXG5cdGNvbnN0cnVjdG9yKG1vZGVsKSB7XHJcblxyXG5cdFx0dGhpcy5fbW9kZWwgPSAkLmV4dGVuZCh7XHJcblx0XHRcdCRib3g6IG51bGwsXHJcblx0XHRcdCRoZWFkVGFibGU6IG51bGwsXHJcblx0XHRcdCRncmlkVGFibGU6IG51bGwsXHJcblx0XHRcdCRoZWFkTGFiZWxzOiBudWxsLFxyXG5cdFx0XHQkcGFnaW5hdGlvbkJveDogbnVsbCxcclxuXHRcdFx0JGZpbHRlclRvb2xiYXJJdGVtczogbnVsbCxcclxuXHRcdFx0cXVlcnk6IG51bGwsXHJcblx0XHRcdHNjcm9sbGJhcldpZHRoOiAwLFxyXG5cdFx0XHRjb2xNb2RlbHM6IFtdLFxyXG5cdFx0XHRjb2xNb2RlbHNEaWN0aW9uYXJ5OiB7fSxcclxuXHRcdFx0ZmlsdGVyOiBudWxsLFxyXG5cdFx0XHRkYXRhOiBbXSxcclxuXHRcdFx0cHJvY2Vzc2VkRGF0YTogW11cclxuXHRcdH0sIG1vZGVsKVxyXG5cdFx0dGhpcy5fc3Vic2NyaWJlcnMgPSB7fTtcclxuXHR9XHJcblxyXG5cdGdldCAkYm94KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLiRib3g7XHJcblx0fVxyXG5cclxuXHRnZXQgJGhlYWRUYWJsZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kaGVhZFRhYmxlO1xyXG5cdH07XHJcblx0c2V0ICRoZWFkVGFibGUodmFsdWUpIHtcclxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mICQpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuJGhlYWRUYWJsZSA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnJGhlYWRUYWJsZScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCAkZ3JpZFRhYmxlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLiRncmlkVGFibGU7XHJcblx0fTtcclxuXHRzZXQgJGdyaWRUYWJsZSh2YWx1ZSkge1xyXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgJCkge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC4kZ3JpZFRhYmxlID0gdmFsdWU7XHJcblx0XHRcdHRoaXMubm90aWZ5KCckZ3JpZFRhYmxlJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0ICRoZWFkTGFiZWxzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLiRoZWFkTGFiZWxzO1xyXG5cdH07XHJcblx0c2V0ICRoZWFkTGFiZWxzKHZhbHVlKSB7XHJcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiAkKSB7XHJcblx0XHRcdHRoaXMuX21vZGVsLiRoZWFkTGFiZWxzID0gdmFsdWU7XHJcblx0XHRcdHRoaXMubm90aWZ5KCckaGVhZExhYmVscycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCAkcGFnaW5hdGlvbkJveCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kcGFnaW5hdGlvbkJveDtcclxuXHR9O1xyXG5cdHNldCAkcGFnaW5hdGlvbkJveCh2YWx1ZSkge1xyXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgJCkge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC4kcGFnaW5hdGlvbkJveCA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnJHBhZ2luYXRpb25Cb3gnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgJGZpbHRlclRvb2xiYXJJdGVtcygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kZmlsdGVyVG9vbGJhckl0ZW1zO1xyXG5cdH07XHJcblx0c2V0ICRmaWx0ZXJUb29sYmFySXRlbXModmFsdWUpIHtcclxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mICQpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuJGZpbHRlclRvb2xiYXJJdGVtcyA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnJGZpbHRlclRvb2xiYXJJdGVtcycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBzY3JvbGxiYXJXaWR0aCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5zY3JvbGxiYXJXaWR0aDtcclxuXHR9O1xyXG5cclxuXHRzZXQgc2Nyb2xsYmFyV2lkdGgodmFsdWUpIHtcclxuXHRcdGlmICh0eXBlb2YgKHZhbHVlKSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZSA+IDApIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuc2Nyb2xsYmFyV2lkdGggPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ3Njcm9sbGJhcldpZHRoJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IGNvbE1vZGVscygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5jb2xNb2RlbHM7XHJcblx0fTtcclxuXHRzZXQgY29sTW9kZWxzKHZhbHVlKSB7XHJcblx0XHRpZiAoJC5pc0FycmF5KHZhbHVlKSkge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC5jb2xNb2RlbHMgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ2NvbE1vZGVscycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBjb2xNb2RlbHNEaWN0aW9uYXJ5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLmNvbE1vZGVsc0RpY3Rpb25hcnk7XHJcblx0fTtcclxuXHRzZXQgY29sTW9kZWxzRGljdGlvbmFyeSh2YWx1ZSkge1xyXG5cdFx0dGhpcy5fbW9kZWwuY29sTW9kZWxzRGljdGlvbmFyeSA9IHZhbHVlO1xyXG5cdFx0dGhpcy5ub3RpZnkoJ2NvbE1vZGVsc0RpY3Rpb25hcnknLCB0aGlzKTtcclxuXHR9O1xyXG5cdFxyXG5cdGdldCBmaWx0ZXIoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuZmlsdGVyO1xyXG5cdH07XHJcblx0c2V0IGZpbHRlcihkYXRhKSB7XHJcblx0XHRpZiAoZGF0YSA9PT0gbnVsbCB8fCB0eXBlb2YgKGRhdGEpID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC5maWx0ZXIgPSBkYXRhO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnZmlsdGVyJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuZGF0YTtcclxuXHR9O1xyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdGlmICgkLmlzQXJyYXkoZGF0YSkpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuZGF0YSA9IGRhdGE7XHJcblx0XHRcdHRoaXMubm90aWZ5KCdkYXRhJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IHF1ZXJ5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLnF1ZXJ5O1xyXG5cdH07XHJcblx0c2V0IHF1ZXJ5KGRhdGEpIHtcclxuXHRcdHRoaXMuX21vZGVsLnF1ZXJ5ID0gZGF0YTtcclxuXHRcdHRoaXMubm90aWZ5KCdxdWVyeScsIHRoaXMpO1xyXG5cdH07XHJcblxyXG5cdGdldCBwcm9jZXNzZWREYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLnF1ZXJ5O1xyXG5cdH07XHJcblx0c2V0IHByb2Nlc3NlZERhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fbW9kZWwucHJvY2Vzc2VkRGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLm5vdGlmeSgncHJvY2Vzc2VkRGF0YScsIHRoaXMpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0b24obmFtZSwgc3Vic2NyaWJlcikge1xyXG5cdFx0dmFyIHN0b3JlZ2UgPSB0aGlzLl9nZXRTdG9yYWdlKG5hbWUpO1xyXG5cdFx0c3RvcmVnZS5wdXNoKHN1YnNjcmliZXIpO1xyXG5cdH07XHJcblxyXG5cdG5vdGlmeShuYW1lLCBkYXRhKSB7XHJcblx0XHR2YXIgc3RvcmVnZSA9IHRoaXMuX2dldFN0b3JhZ2UobmFtZSk7XHJcblx0XHQkLmVhY2goc3RvcmVnZSwgZnVuY3Rpb24gKGksIHN1YnNjcmliZXIpIHtcclxuXHRcdFx0bGV0IFsuLi5hcmddID0gW2RhdGEsIG5hbWUsIGldO1xyXG5cdFx0XHRzdWJzY3JpYmVyLmFwcGx5KHN1YnNjcmliZXIsIGFyZyk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRfZ2V0U3RvcmFnZShuYW1lKSB7XHJcblx0XHRjb25zdCBzdWJzY3JpYmVycyA9IHRoaXMuX3N1YnNjcmliZXJzO1xyXG5cdFx0aWYgKCFzdWJzY3JpYmVyc1tuYW1lXSkge1xyXG5cdFx0XHRzdWJzY3JpYmVyc1tuYW1lXSA9IFtdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN1YnNjcmliZXJzW25hbWVdO1xyXG5cdH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTsiLCIndXNlIHN0cmljdCc7XHJcbmNsYXNzIFRvb2xzIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMubm93ID0gRGF0ZS5ub3cgfHwgKCgpID0+IHsgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpOyB9KTtcclxuXHR9XHJcblxyXG5cdGV4ZWN1dGUoZnVuY3Rpb25zLCBhcmdzLCBjb250ZXh0KSB7XHJcblx0XHRjb25zdCBhcHBseSA9IGZ1bmN0aW9uIChmb28pIHtcclxuXHRcdFx0aWYgKHR5cGVvZiAoZm9vKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdGZvby5hcHBseShjb250ZXh0ID8gY29udGV4dCA6IGZvbywgYXJncylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICgkLmlzQXJyYXkoZnVuY3Rpb25zKSkge1xyXG5cdFx0XHRmdW5jdGlvbnMuZm9yRWFjaChhcHBseSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhcHBseShmdW5jdGlvbnMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGluc2VydEVsZW1lbnQoJGNvbnRhaW5lciwgc2VhcmNoU3RyLCByZXBsYWNlbWVudCkge1xyXG5cdFx0Y29uc3QgJHJlcGxhY2VtZW50ID0gJChyZXBsYWNlbWVudCk7XHJcblxyXG5cdFx0aWYgKCEkcmVwbGFjZW1lbnQubGVuZ3RoKSB7XHJcblx0XHRcdHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VtZW50KTtcclxuXHRcdH1cclxuXHRcdCRjb250YWluZXIuZmluZChcIjpub3QoaWZyYW1lKVwiKS5hZGRCYWNrKCkuY29udGVudHMoKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5ub2RlVHlwZSA9PT0gMztcclxuXHRcdH0pLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLmluZGV4T2Yoc2VhcmNoU3RyKSAhPT0gLTEpIHtcclxuXHRcdFx0XHRpZiAoJHJlcGxhY2VtZW50Lmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5hZnRlcigkcmVwbGFjZW1lbnQpO1xyXG5cdFx0XHRcdFx0Y29uc3Qgc3RyID0gdGhpcy5kYXRhLFxyXG5cdFx0XHRcdFx0XHRwYXJ0MSA9IHN0ci5zdWJzdHIoMCwgc3RyLmluZGV4T2Yoc2VhcmNoU3RyKSksXHJcblx0XHRcdFx0XHRcdHBhcnQyID0gc3RyLnN1YnN0cihwYXJ0MS5sZW5ndGggKyBzZWFyY2hTdHIubGVuZ3RoLCBzdHIubGVuZ3RoKTtcclxuXHRcdFx0XHRcdGlmICghcGFydDEubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAocGFydDIubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdGlmIChwYXJ0MS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRhdGEgPSBwYXJ0MTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQkcmVwbGFjZW1lbnQuYWZ0ZXIocGFydDIpXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBhcnQxLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEgPSBwYXJ0MTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2Uoc2VhcmNoU3RyLHJlcGxhY2VtZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dGhyb3R0bGUoZnVuYywgd2FpdCA9IDEwKSB7XHJcblx0XHRsZXQgY29udGV4dCxcclxuXHRcdFx0YXJncyxcclxuXHRcdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKC4uLnByb3BzKSB7XHJcblx0XHRcdGNvbnRleHQgPSB0aGlzO1xyXG5cdFx0XHRhcmdzID0gcHJvcHM7XHJcblx0XHRcdGlmICghY29udGV4dCkge1xyXG5cdFx0XHRcdGNvbnRleHQgPSBmdW5jXHJcblx0XHRcdH0gZWxzZSBpZiAoY29udGV4dCA9PT0gd2luZG93KSB7XHJcblx0XHRcdFx0Y29udGV4dCA9IGZ1bmM7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCF0aW1lb3V0KSB7XHJcblx0XHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0XHRcdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRcdFx0XHRmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdFx0XHRcdH0sIHdhaXQpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBUb29scygpOyIsImNsYXNzIFZpZXdNb2RlbCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLm1vZGVsID0ge1xyXG5cdFx0XHRyb3dzOiAxMCxcclxuXHRcdFx0dG90YWxSb3dzOiAwLFxyXG5cdFx0XHRwYWdlOiAxLFxyXG5cdFx0XHR0b3RhbFBhZ2VzOiAwLFxyXG5cdFx0XHRuZXdQYWdlOiAxLFxyXG5cdFx0XHRkYXRhOiBbXSxcclxuXHRcdFx0c29ydEJ5OiBbXSxcclxuXHRcdFx0ZmlsdGVyVG9vbGJhcjogZmFsc2VcclxuXHRcdH1cclxuXHRcdHRoaXMuc3Vic2NyaWJlcnMgPSB7fTtcclxuXHR9XHJcblxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwuZGF0YTtcclxuXHR9O1xyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdGlmICgkLmlzQXJyYXkoZGF0YSkpIHtcclxuXHRcdFx0dGhpcy5tb2RlbC5kYXRhID0gZGF0YTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ2RhdGEnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgc29ydEJ5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwuc29ydEJ5O1xyXG5cdH07XHJcblx0c2V0IHNvcnRCeShkYXRhKSB7XHJcblx0XHRpZiAoJC5pc0FycmF5KGRhdGEpKSB7XHJcblx0XHRcdHRoaXMubW9kZWwuc29ydEJ5ID0gZGF0YTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ3NvcnRCeScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCB0b3RhbFJvd3MoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb2RlbC50b3RhbFJvd3M7XHJcblx0fTtcclxuXHRzZXQgdG90YWxSb3dzKHRvdGFsUm93cykge1xyXG5cdFx0aWYgKHR5cGVvZiAodG90YWxSb3dzKSA9PT0gXCJudW1iZXJcIiAmJiB0b3RhbFJvd3MgPiAtMSkge1xyXG5cdFx0XHR0aGlzLm1vZGVsLnRvdGFsUm93cyA9IHRvdGFsUm93cztcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ3RvdGFsUm93cycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCB0b3RhbFBhZ2VzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwudG90YWxQYWdlcztcclxuXHR9O1xyXG5cdHNldCB0b3RhbFBhZ2VzKHRvdGFsUGFnZXMpIHtcclxuXHRcdGlmICh0eXBlb2YgKHRvdGFsUGFnZXMpID09PSBcIm51bWJlclwiICYmIHRvdGFsUGFnZXMgPiAtMSkge1xyXG5cdFx0XHR0aGlzLm1vZGVsLnRvdGFsUGFnZXMgPSB0b3RhbFBhZ2VzO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgndG90YWxQYWdlcycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCByb3dzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwucm93cztcclxuXHR9O1xyXG5cdHNldCByb3dzKHJvd3MpIHtcclxuXHRcdGlmICh0eXBlb2YgKHJvd3MpID09PSBcIm51bWJlclwiICYmIHJvd3MgPiAtMSkge1xyXG5cdFx0XHR0aGlzLm1vZGVsLnJvd3MgPSByb3dzO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgncm93cycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBwYWdlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwucGFnZTtcclxuXHR9O1xyXG5cdHNldCBwYWdlKHBhZ2UpIHtcclxuXHRcdGlmICh0eXBlb2YgKHBhZ2UpID09PSBcIm51bWJlclwiICYmIHBhZ2UgPiAtMSkge1xyXG5cdFx0XHR0aGlzLm1vZGVsLnBhZ2UgPSBwYWdlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgncGFnZScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBuZXdQYWdlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwubmV3UGFnZTtcclxuXHR9O1xyXG5cdHNldCBuZXdQYWdlKHBhZ2UpIHtcclxuXHRcdGlmICh0eXBlb2YgKHBhZ2UpID09PSBcIm51bWJlclwiICYmIHBhZ2UgPiAtMSkge1xyXG5cdFx0XHR0aGlzLm1vZGVsLm5ld1BhZ2UgPSBwYWdlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnbmV3UGFnZScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBmaWx0ZXJUb29sYmFyKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwubmV3UGFnZTtcclxuXHR9O1xyXG5cdHNldCBmaWx0ZXJUb29sYmFyKGRhdGEpIHtcclxuXHRcdHRoaXMubW9kZWwuZmlsdGVyVG9vbGJhciA9IGRhdGE7XHJcblx0XHR0aGlzLm5vdGlmeSgnZmlsdGVyVG9vbGJhcicsIHRoaXMpO1xyXG5cdH07XHJcblxyXG5cdG9uKG5hbWUsIHN1YnNjcmliZXIpIHtcclxuXHRcdHZhciBzdG9yZWdlID0gdGhpcy5fZ2V0U3RvcmFnZShuYW1lKTtcclxuXHRcdHN0b3JlZ2UucHVzaChzdWJzY3JpYmVyKTtcclxuXHR9O1xyXG5cclxuXHRub3RpZnkobmFtZSwgZGF0YSkge1xyXG5cdFx0dmFyIHN0b3JlZ2UgPSB0aGlzLl9nZXRTdG9yYWdlKG5hbWUpO1xyXG5cdFx0JC5lYWNoKHN0b3JlZ2UsIGZ1bmN0aW9uIChpLCBzdWJzY3JpYmVyKSB7XHJcblx0XHRcdGxldCBbLi4uYXJnXSA9IFtkYXRhLCBuYW1lLCBpXTtcclxuXHRcdFx0c3Vic2NyaWJlci5hcHBseShzdWJzY3JpYmVyLCBhcmcpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0X2dldFN0b3JhZ2UobmFtZSkge1xyXG5cdFx0Y29uc3Qgc3Vic2NyaWJlcnMgPSB0aGlzLnN1YnNjcmliZXJzO1xyXG5cdFx0aWYgKCFzdWJzY3JpYmVyc1tuYW1lXSkge1xyXG5cdFx0XHRzdWJzY3JpYmVyc1tuYW1lXSA9IFtdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN1YnNjcmliZXJzW25hbWVdO1xyXG5cdH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVmlld01vZGVsOyIsImltcG9ydCBWaWV3TW9kZWwgZnJvbSAnLi9WaWV3TW9kZWwuanMnO1xyXG5pbXBvcnQgUHJvY2Vzc1NldHRpbmdzIGZyb20gJy4vUHJvY2Vzc1NldHRpbmdzLmpzJztcclxuaW1wb3J0IEJ1aWxkSW5mcmFzdHJ1Y3R1cmUgZnJvbSAnLi9CdWlsZEluZnJhc3RydWN0dXJlJztcclxuaW1wb3J0IEZpbHRlclRvb2xiYXIgZnJvbSAnLi9GaWx0ZXJUb29sYmFyLmpzJztcclxuaW1wb3J0IFNvcnRpbmcgZnJvbSAnLi9Tb3J0aW5nLmpzJztcclxuaW1wb3J0IERpc3BsYXkgZnJvbSAnLi9EaXNwbGF5LmpzJztcclxuaW1wb3J0IEZpeGVkSGVhZGVyIGZyb20gJy4vRml4ZWRIZWFkZXIuanMnO1xyXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL1N0b3JhZ2UuanMnXHJcbmltcG9ydCBGaWxsIGZyb20gJy4vRmlsbC5qcyc7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vUGFnaW5hdGlvbi5qcyc7XHJcbmltcG9ydCB0b29scyBmcm9tICcuL1Rvb2xzLmpzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYZ3JpZCB7XHJcblx0b3B0aW9uczogSU9wdGlvbnM7XHJcblx0cHJvcGVydGllczogSVhncmlkUHJvcGVydGllcztcclxuXHRWaWV3TW9kZWw6IFZpZXdNb2RlbDtcclxuXHRQcm9jZXNzU2V0dGluZ3M6IFByb2Nlc3NTZXR0aW5ncztcclxuXHRCdWlsZEluZnJhc3RydWN0dXJlOiBCdWlsZEluZnJhc3RydWN0dXJlO1xyXG5cdFNvcnRpbmc6IFNvcnRpbmc7XHJcblx0U3RvcmFnZTogU3RvcmFnZTtcclxuXHRGaWxsOiBGaWxsO1xyXG5cdERpc3BsYXk6IERpc3BsYXk7XHJcblx0Rml4ZWRIZWFkZXI6IEZpeGVkSGVhZGVyO1xyXG5cdEZpbHRlclRvb2xiYXI6IEZpbHRlclRvb2xiYXI7XHJcblx0UGFnaW5hdGlvbjogUGFnaW5hdGlvbjtcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9uczogSU9wdGlvbnMsICRib3g6IEpRdWVyeSkge1xyXG5cdFx0dGhpcy5wcm9wZXJ0aWVzID0ge1xyXG5cdFx0XHQkYm94LFxyXG5cdFx0XHRkYXRhOiBbXVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xyXG5cdFx0XHRiZWZvcmVSZXF1ZXN0OiBbXSxcclxuXHRcdFx0YWZ0ZXJSZXNwb25zZTogW10sXHJcblx0XHRcdHNvcnRCeTogW10sXHJcblx0XHRcdHBhZ2luYXRpb25TZWxlY3RvcjogJycsXHJcblx0XHRcdGFqYXhUeXBlOiAnUE9TVCcsXHJcblx0XHRcdGZpbHRlclRvb2xiYXJHcm91cE9wOiAnQU5EJyxcclxuXHRcdFx0dXJsOiAnJyxcclxuXHRcdFx0bXVsdGlTb3J0aW5nOiBmYWxzZSxcclxuXHRcdFx0ZmlsdGVyVG9vbGJhcjogZmFsc2VcclxuXHRcdH0sIG9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMuU3RvcmFnZSA9IG5ldyBTdG9yYWdlKHsgJGJveCB9KVxyXG5cdFx0dGhpcy5fZXhlYygpO1xyXG5cdH07XHJcblxyXG5cdGFqYXhGdW5jdGlvbihxdWVyeU9iamVjdDogYW55LCB1cmw6IHN0cmluZykge1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHRcdHJldHVybiAkLmFqYXgoe1xyXG5cdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0ZGF0YTogcXVlcnlPYmplY3QsXHJcblx0XHRcdHR5cGU6IG9wdGlvbnMuYWpheFR5cGUsXHJcblx0XHRcdGRhdGFUeXBlOiAnanNvbidcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0X3Jlc3BvbnNlKHJlc3BvbnNlT2JqZWN0OiBJUmVzcG9uc2UpIHtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblx0XHRpZiAob3B0aW9ucy5hZnRlclJlc3BvbnNlKSB7XHJcblx0XHRcdHRvb2xzLmV4ZWN1dGUob3B0aW9ucy5hZnRlclJlc3BvbnNlLCBbcmVzcG9uc2VPYmplY3RdKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRfcmVxdWVzdChxdWVyeU9iamVjdCA9IHt9KSB7XHJcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxyXG5cdFx0XHRkID0gJC5EZWZlcnJlZCgpO1xyXG5cdFx0aWYgKG9wdGlvbnMuYmVmb3JlUmVxdWVzdCkge1xyXG5cdFx0XHR0b29scy5leGVjdXRlKG9wdGlvbnMuYmVmb3JlUmVxdWVzdCwgW3F1ZXJ5T2JqZWN0XSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5hamF4RnVuY3Rpb24ocXVlcnlPYmplY3QsIG9wdGlvbnMudXJsKS5kb25lKHRoaXMuX3Jlc3BvbnNlLmJpbmQodGhpcykpLmFsd2F5cyhkLnJlc29sdmUpO1xyXG5cclxuXHRcdHJldHVybiBkO1xyXG5cdH07XHJcblxyXG5cdF9iaW5kKCkge1xyXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMsXHJcblx0XHRcdHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXMsXHJcblx0XHRcdG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblxyXG5cdFx0Ly8gdG8gRG8gaWYgbW9kZWwgd2lsbCBiZSBjaGFuZ2VkXHJcblx0XHR0aGlzLlN0b3JhZ2Uub24oJ2NvbE1vZGVscycsICgpID0+IHtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyh0aGlzLkZpbGwpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5TdG9yYWdlLm9uKCdkYXRhJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLkRpc3BsYXkuZXhlYygpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5WaWV3TW9kZWwub24oJ2RhdGEnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuRmlsbC50Ym9keSgpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLkZpeGVkSGVhZGVyLnJlc2l6ZSgpO1xyXG5cdFx0XHR9LCAxMDUwKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5TdG9yYWdlLm9uKCckcGFnaW5hdGlvbkJveCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy5QYWdpbmF0aW9uLmV4ZWMoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuU3RvcmFnZS5vbignJGhlYWRUYWJsZScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5Tb3J0aW5nLmJpbmQoKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0X2V4ZWMoKSB7XHJcblx0XHRjb25zdCBzZWxmID0gdGhpcyxcclxuXHRcdFx0cHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcyxcclxuXHRcdFx0b3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHJcblx0XHR0aGlzLlZpZXdNb2RlbCA9IG5ldyBWaWV3TW9kZWwoKTtcclxuXHRcdHRoaXMuUHJvY2Vzc1NldHRpbmdzID0gbmV3IFByb2Nlc3NTZXR0aW5ncyhvcHRpb25zLCB0aGlzLlN0b3JhZ2UsIHRoaXMuVmlld01vZGVsKTtcclxuXHRcdHRoaXMuQnVpbGRJbmZyYXN0cnVjdHVyZSA9IG5ldyBCdWlsZEluZnJhc3RydWN0dXJlKG9wdGlvbnMsIHRoaXMuU3RvcmFnZSwgdGhpcy5WaWV3TW9kZWwpO1xyXG5cdFx0dGhpcy5Tb3J0aW5nID0gbmV3IFNvcnRpbmcodGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCwgb3B0aW9ucyk7XHJcblx0XHR0aGlzLkZpbGwgPSBuZXcgRmlsbCh0aGlzLlN0b3JhZ2UsIHRoaXMuVmlld01vZGVsKTtcclxuXHRcdHRoaXMuRmlsdGVyVG9vbGJhciA9IG5ldyBGaWx0ZXJUb29sYmFyKHRoaXMuU3RvcmFnZSwgdGhpcy5WaWV3TW9kZWwsIG9wdGlvbnMpO1xyXG5cdFx0dGhpcy5EaXNwbGF5ID0gbmV3IERpc3BsYXkoe1xyXG5cdFx0XHRzdG9yYWdlOiB0aGlzLlN0b3JhZ2UsXHJcblx0XHRcdHZpZXdNb2RlbDogdGhpcy5WaWV3TW9kZWwsXHJcblx0XHRcdGFqYXg6ICgocXVlcnlPYmplY3Q6IElSZXF1ZXN0KSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3JlcXVlc3QocXVlcnlPYmplY3QpO1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0aXNMb2NhbDogb3B0aW9ucy51cmwgPyBmYWxzZSA6IHRydWVcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5GaXhlZEhlYWRlciA9IG5ldyBGaXhlZEhlYWRlcih0aGlzLlN0b3JhZ2UpO1xyXG5cdFx0dGhpcy5QYWdpbmF0aW9uID0gbmV3IFBhZ2luYXRpb24ob3B0aW9ucywgdGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCk7XHJcblxyXG5cdFx0dGhpcy5fYmluZCgpO1xyXG5cclxuXHRcdHRoaXMuRmlsbC50aGVhZCgpO1xyXG5cclxuXHRcdGlmICghJC5pc0FycmF5KG9wdGlvbnMuZGF0YSkpIHtcclxuXHRcdFx0b3B0aW9ucy5kYXRhID0gW107XHJcblx0XHR9XHJcblx0XHR0aGlzLlN0b3JhZ2UuZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuXHR9XHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=
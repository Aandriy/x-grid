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
/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tools */ "./src/modules/Tools.js");

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
        _Tools__WEBPACK_IMPORTED_MODULE_0__["default"].insertElement($pagination, '{firstBtnTemplate}', firstBtnTemplate ? $(firstBtnTemplate).addClass('Xgrid-first') : '');
        _Tools__WEBPACK_IMPORTED_MODULE_0__["default"].insertElement($pagination, '{prevBtnTemplate}', $(prevBtnTemplate).addClass('Xgrid-prev'));
        _Tools__WEBPACK_IMPORTED_MODULE_0__["default"].insertElement($pagination, '{nextBtnTemplate}', $(nextBtnTemplate).addClass('Xgrid-next'));
        _Tools__WEBPACK_IMPORTED_MODULE_0__["default"].insertElement($pagination, '{lastBtnTemplate}', $(lastBtnTemplate).addClass('Xgrid-last'));
        _Tools__WEBPACK_IMPORTED_MODULE_0__["default"].insertElement($pagination, '{currentPageTemplate}', $(currentPageTemplate).addClass('Xgrid-current-page'));
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

/***/ "./src/modules/ColModel.ts":
/*!*********************************!*\
  !*** ./src/modules/ColModel.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pipes */ "./src/modules/Pipes.js");
/* harmony import */ var _FilterToolbarModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterToolbarModel */ "./src/modules/FilterToolbarModel.ts");


var ColModel = /** @class */ (function () {
    function ColModel(model, order) {
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
        this.dependent = [];
        this.order = order;
        $.extend(this, model);
        this.filterToolbarSettings = new _FilterToolbarModel__WEBPACK_IMPORTED_MODULE_1__["default"](model.filterToolbarSettings);
        if (typeof (this.alias) === 'undefined') {
            this.alias = this.key;
        }
        if (typeof (this.key) === 'undefined') {
            this.key = this.alias;
        }
        if (model.sortType && typeof (model.sortType) === 'function') {
            this.sortFormatter = model.sortType;
        }
        else {
            this.sortFormatter = _Pipes__WEBPACK_IMPORTED_MODULE_0__["default"].getByType(model.sortType);
        }
        if (model.filterType && typeof (model.filterType) === 'function') {
            this.filterFormatter = model.filterType;
        }
        else {
            this.filterFormatter = _Pipes__WEBPACK_IMPORTED_MODULE_0__["default"].getByType(model.filterType);
        }
        this.dependent = [];
        this._check = function () {
            if (this.hidden) {
                this.dependent.forEach(function (item) {
                    item.$item.detach();
                });
            }
            else {
                this.dependent.forEach(function (item) {
                    item.$anchor.after(item.$item);
                });
            }
        };
    }
    ColModel.prototype.labelFormatter = function () {
        return this.label;
    };
    ;
    ColModel.prototype.cellFormatter = function ($td, value, rowData, data) {
        if (typeof (value) === 'undefined') {
            value = '';
        }
        return '<div class="ellipsis">' + value + '</div>';
    };
    ;
    ColModel.prototype.filterToolbarFormatter = function ($cell, colModel) {
        var settings = colModel.filterToolbarSettings || {};
        var $control, $container, $wrap = $('<div class="Xgrid-filter-control-wrap"></div>'), str = '<div class="Xgrid-filter-wrapper">';
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
        str += '</div>';
        switch (settings.formControlType) {
            case 'select':
                $control = $('<select class="Xgrid-select Xgrid-filter"  />');
                settings.selectOptions.forEach(function (element, i) {
                    $control.append('<option value="' + i + '">' + element.label + '</option>');
                });
                $control.val([]).each(function () {
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
    ;
    return ColModel;
}());
;
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
/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tools */ "./src/modules/Tools.js");
/* harmony import */ var _QueryModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryModel */ "./src/modules/QueryModel.ts");
/* harmony import */ var _Sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sort */ "./src/modules/Sort.ts");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Filter */ "./src/modules/Filter.ts");
/* harmony import */ var _Pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pipes */ "./src/modules/Pipes.js");






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
			query = new _QueryModel__WEBPACK_IMPORTED_MODULE_1__["default"]({
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
				data = _Filter__WEBPACK_IMPORTED_MODULE_3__["default"].exec(data, filterQuery, rawData());
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
					result['get'] = _Pipes__WEBPACK_IMPORTED_MODULE_4__["default"].getByType();
				}
				return result;
			});
			data = _Sort__WEBPACK_IMPORTED_MODULE_2__["default"].exec(data, sortRules);
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
			action = _Tools__WEBPACK_IMPORTED_MODULE_0__["default"].throttle(() => {
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

/***/ "./src/modules/Filter.ts":
/*!*******************************!*\
  !*** ./src/modules/Filter.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Operators */ "./src/modules/Operators.js");

var Filter = /** @class */ (function () {
    function Filter() {
    }
    Filter.prototype.exec = function (data, group, getData) {
        var _this = this;
        var newData = data.filter(function (item, i) {
            var get = getData(), state = _this._check(group, item, get);
            return state;
        });
        return newData;
    };
    ;
    Filter.prototype._or = function (rules, rowData, get) {
        var i = rules.length;
        while (i--) {
            var rule = rules[i];
            if (!_Operators__WEBPACK_IMPORTED_MODULE_0__["default"][rule.op]) {
                return true;
            }
            var value = get(rule.field, rowData), state = _Operators__WEBPACK_IMPORTED_MODULE_0__["default"][rule.op](rule.data, value);
            if (state) {
                return true;
            }
        }
        return false;
    };
    ;
    Filter.prototype._and = function (rules, rowData, get) {
        var i = rules.length;
        while (i--) {
            var rule = rules[i];
            if (!_Operators__WEBPACK_IMPORTED_MODULE_0__["default"][rule.op]) {
                return true;
            }
            var value = get(rule.field, rowData), state = _Operators__WEBPACK_IMPORTED_MODULE_0__["default"][rule.op](rule.data, value);
            if (!state) {
                return false;
            }
        }
        return true;
    };
    ;
    Filter.prototype._check = function (group, rowData, get) {
        var isOr = group.rules.length && String(group.groupOp).toUpperCase() === "OR";
        if ($.isArray(group.rules) && group.rules.length) {
            if (isOr) {
                return this._or(group.rules, rowData, get);
            }
            else {
                return this._and(group.rules, rowData, get);
            }
        }
        return true;
    };
    ;
    return Filter;
}());
;
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

/***/ "./src/modules/FilterToolbarModel.ts":
/*!*******************************************!*\
  !*** ./src/modules/FilterToolbarModel.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var FilterToolbarModel = /** @class */ (function () {
    function FilterToolbarModel(settings) {
        var _this = this;
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
                this.transformData = (function (data) {
                    var result;
                    var selectOptions = _this.selectOptions;
                    if ($.isArray(data)) {
                        result = [];
                        data.forEach(function (key) {
                            var item = selectOptions[key];
                            if (item) {
                                result.push(item.value);
                            }
                            else {
                                result.push(key);
                            }
                        });
                        if (!result.length) {
                            return null;
                        }
                    }
                    else {
                        if (selectOptions[data]) {
                            return selectOptions[data].value;
                        }
                    }
                    return result;
                });
            }
        }
    }
    return FilterToolbarModel;
}());
/* harmony default export */ __webpack_exports__["default"] = (FilterToolbarModel);
;


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

/***/ "./src/modules/ProcessSettings.ts":
/*!****************************************!*\
  !*** ./src/modules/ProcessSettings.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColModel */ "./src/modules/ColModel.ts");
/* harmony import */ var _SortRule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SortRule */ "./src/modules/SortRule.ts");


var ProcessSettings = /** @class */ (function () {
    function ProcessSettings(options, storage, viewModel) {
        this.options = $.extend({
            colModels: [],
            filterToolbar: false
        }, options);
        this.properties = {
            scrollbarWidth: null
        };
        this.viewModel = viewModel;
        this.storage = storage;
        this._exec();
    }
    ;
    ProcessSettings.prototype._getScrollbarWidth = function () {
        var div, width;
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
    ;
    ProcessSettings.prototype._columnModel = function () {
        var _a = this, storage = _a.storage, options = _a.options;
        var colModels = [];
        var aliases = {};
        var colModelsDictionary = {};
        $.each(options.colModels, function (i, model) {
            var colModel = new _ColModel__WEBPACK_IMPORTED_MODULE_0__["default"](model, i);
            if (!aliases[colModel.alias]) {
                aliases[colModel.alias] = 1;
            }
            else {
                throw {
                    value: {
                        i: i,
                        data: JSON.stringify(model)
                    },
                    message: 'alias is not unique',
                    name: 'Error: colModel'
                };
            }
            colModelsDictionary[colModel.alias] = colModel;
            colModels.push(colModel);
        });
        storage.colModels = colModels;
        storage.colModelsDictionary = colModelsDictionary;
    };
    ;
    ProcessSettings.prototype._exec = function () {
        var storage = this.storage;
        this._columnModel();
        storage.scrollbarWidth = this._getScrollbarWidth();
        this._processSorting();
    };
    ;
    ProcessSettings.prototype._processSorting = function () {
        var _a = this, viewModel = _a.viewModel, options = _a.options;
        var sortBy = options.sortBy, data = [];
        if (options.filterToolbar) {
            viewModel.filterToolbar = true;
        }
        if (sortBy && typeof (sortBy) === 'string') {
            var sortByItems = sortBy.replace(/\s+/g, ' ').trim().split(',');
            if (sortByItems.length) {
                sortByItems.forEach(function (item, i) {
                    var sortRule = item.trim().split(' ');
                    var by = sortRule[0];
                    if (typeof (by) !== 'undefined') {
                        var rule = void 0;
                        if (String(sortRule[1]).toUpperCase() === 'DESC') {
                            rule = new _SortRule__WEBPACK_IMPORTED_MODULE_1__["default"](by, 'DESC');
                        }
                        else {
                            rule = new _SortRule__WEBPACK_IMPORTED_MODULE_1__["default"](by);
                        }
                        data.push(rule);
                    }
                });
            }
        }
        else if ($.isArray(sortBy) && sortBy.length) {
            sortBy.forEach(function (item) {
                var by = item.by, order = item.order;
                var rule;
                if (by) {
                    if (String(order).toUpperCase() !== 'DESC') {
                        rule = new _SortRule__WEBPACK_IMPORTED_MODULE_1__["default"](by);
                    }
                    else {
                        rule = new _SortRule__WEBPACK_IMPORTED_MODULE_1__["default"](by, 'DESC');
                    }
                    data.push(rule);
                }
            });
        }
        if (data.length) {
            viewModel.sortBy = data;
        }
    };
    ;
    return ProcessSettings;
}());
/* harmony default export */ __webpack_exports__["default"] = (ProcessSettings);


/***/ }),

/***/ "./src/modules/QueryModel.ts":
/*!***********************************!*\
  !*** ./src/modules/QueryModel.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var QueryModel = /** @class */ (function () {
    function QueryModel(data) {
        this.filter = {};
        this.sort = [];
        this.rows = 0;
        this.page = 1;
        $.extend(this, data);
    }
    return QueryModel;
}());
/* harmony default export */ __webpack_exports__["default"] = (QueryModel);


/***/ }),

/***/ "./src/modules/Sort.ts":
/*!*****************************!*\
  !*** ./src/modules/Sort.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Sort = /** @class */ (function () {
    function Sort() {
    }
    Sort.prototype.exec = function (data, rules) {
        var _this = this;
        if (data === void 0) { data = []; }
        if (rules === void 0) { rules = []; }
        var source;
        if (!data.length || !rules.length) {
            return data;
        }
        source = this._getSource(data, rules);
        source.sort(function (a, b) {
            var result = 0;
            for (var i = 0, j = rules.length; i < rules.length; i++) {
                var key = rules[i].by;
                if (rules[i].order === 'ASC') {
                    result = _this.ASC(a.formatted[key], b.formatted[key]);
                }
                else {
                    result = _this.DESC(a.formatted[key], b.formatted[key]);
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
    };
    Sort.prototype.ASC = function (a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    };
    ;
    Sort.prototype.DESC = function (a, b) {
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
        return 0;
    };
    ;
    Sort.prototype._getSource = function (data, rules) {
        return data.map(function (item) {
            var formatted = {};
            rules.forEach(function (rule) {
                formatted[rule.by] = rule.get(item[rule.by], item, rule.colModel, data);
            });
            return {
                _: item,
                formatted: formatted,
            };
        });
    };
    return Sort;
}());
;
/* harmony default export */ __webpack_exports__["default"] = (new Sort());


/***/ }),

/***/ "./src/modules/SortRule.ts":
/*!*********************************!*\
  !*** ./src/modules/SortRule.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SortRule = /** @class */ (function () {
    function SortRule(by, order) {
        if (order === void 0) { order = 'ASC'; }
        this.by = by;
        this.order = order;
    }
    SortRule.prototype.triggerOrder = function () {
        if (this.order === 'ASC') {
            this.order = 'DESC';
        }
        else {
            this.order = 'ASC';
        }
    };
    ;
    return SortRule;
}());
/* harmony default export */ __webpack_exports__["default"] = (SortRule);
;


/***/ }),

/***/ "./src/modules/Sorting.js":
/*!********************************!*\
  !*** ./src/modules/Sorting.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SortRule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SortRule */ "./src/modules/SortRule.ts");

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
				sortRule = new _SortRule__WEBPACK_IMPORTED_MODULE_0__["default"](alias);
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

/***/ "./src/modules/ViewModel.ts":
/*!**********************************!*\
  !*** ./src/modules/ViewModel.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ViewModel = /** @class */ (function () {
    function ViewModel() {
        this.model = {
            rows: 10,
            totalRows: 0,
            page: 1,
            totalPages: 0,
            newPage: 1,
            data: [],
            sortBy: [],
            filterToolbar: false
        };
        this.subscribers = {};
    }
    Object.defineProperty(ViewModel.prototype, "data", {
        get: function () {
            return this.model.data;
        },
        set: function (data) {
            if ($.isArray(data)) {
                this.model.data = data;
                this.notify('data', this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(ViewModel.prototype, "sortBy", {
        get: function () {
            return this.model.sortBy;
        },
        set: function (data) {
            if ($.isArray(data)) {
                this.model.sortBy = data;
                this.notify('sortBy', this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(ViewModel.prototype, "totalRows", {
        get: function () {
            return this.model.totalRows;
        },
        set: function (totalRows) {
            if (typeof (totalRows) === "number" && totalRows > -1) {
                this.model.totalRows = totalRows;
                this.notify('totalRows', this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(ViewModel.prototype, "totalPages", {
        get: function () {
            return this.model.totalPages;
        },
        set: function (totalPages) {
            if (typeof (totalPages) === "number" && totalPages > -1) {
                this.model.totalPages = totalPages;
                this.notify('totalPages', this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(ViewModel.prototype, "rows", {
        get: function () {
            return this.model.rows;
        },
        set: function (rows) {
            if (typeof (rows) === "number" && rows > -1) {
                this.model.rows = rows;
                this.notify('rows', this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(ViewModel.prototype, "page", {
        get: function () {
            return this.model.page;
        },
        set: function (page) {
            if (typeof (page) === "number" && page > -1) {
                this.model.page = page;
                this.notify('page', this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(ViewModel.prototype, "newPage", {
        get: function () {
            return this.model.newPage;
        },
        set: function (page) {
            if (typeof (page) === "number" && page > -1) {
                this.model.newPage = page;
                this.notify('newPage', this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(ViewModel.prototype, "filterToolbar", {
        get: function () {
            return this.model.filterToolbar;
        },
        set: function (data) {
            this.model.filterToolbar = data;
            this.notify('filterToolbar', this);
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    ViewModel.prototype.on = function (name, subscriber) {
        var storege = this._getStorage(name);
        storege.push(subscriber);
    };
    ;
    ViewModel.prototype.notify = function (name, data) {
        var storege = this._getStorage(name);
        $.each(storege, function (i, subscriber) {
            var arg = [data, name, i].slice(0);
            subscriber.apply(subscriber, arg);
        });
    };
    ;
    ViewModel.prototype._getStorage = function (name) {
        var subscribers = this.subscribers;
        if (!subscribers[name]) {
            subscribers[name] = [];
        }
        return subscribers[name];
    };
    return ViewModel;
}());
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
/* harmony import */ var _ViewModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewModel */ "./src/modules/ViewModel.ts");
/* harmony import */ var _ProcessSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProcessSettings */ "./src/modules/ProcessSettings.ts");
/* harmony import */ var _BuildInfrastructure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BuildInfrastructure */ "./src/modules/BuildInfrastructure.ts");
/* harmony import */ var _FilterToolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterToolbar */ "./src/modules/FilterToolbar.js");
/* harmony import */ var _Sorting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sorting */ "./src/modules/Sorting.js");
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Display */ "./src/modules/Display.js");
/* harmony import */ var _FixedHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FixedHeader */ "./src/modules/FixedHeader.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");
/* harmony import */ var _Fill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Fill */ "./src/modules/Fill.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pagination */ "./src/modules/Pagination.js");
/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Tools */ "./src/modules/Tools.js");











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
        this.Storage = new _Storage__WEBPACK_IMPORTED_MODULE_7__["default"]({ $box: $box });
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
            _Tools__WEBPACK_IMPORTED_MODULE_10__["default"].execute(options.afterResponse, [responseObject]);
        }
    };
    ;
    Xgrid.prototype._request = function (queryObject) {
        if (queryObject === void 0) { queryObject = {}; }
        var options = this.options, d = $.Deferred();
        if (options.beforeRequest) {
            _Tools__WEBPACK_IMPORTED_MODULE_10__["default"].execute(options.beforeRequest, [queryObject]);
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
        var self = this, options = this.options;
        this.ViewModel = new _ViewModel__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.ProcessSettings = new _ProcessSettings__WEBPACK_IMPORTED_MODULE_1__["default"](options, this.Storage, this.ViewModel);
        this.BuildInfrastructure = new _BuildInfrastructure__WEBPACK_IMPORTED_MODULE_2__["default"](options, this.Storage, this.ViewModel);
        this.Sorting = new _Sorting__WEBPACK_IMPORTED_MODULE_4__["default"](this.Storage, this.ViewModel, options);
        this.Fill = new _Fill__WEBPACK_IMPORTED_MODULE_8__["default"](this.Storage, this.ViewModel);
        this.FilterToolbar = new _FilterToolbar__WEBPACK_IMPORTED_MODULE_3__["default"](this.Storage, this.ViewModel, options);
        this.Display = new _Display__WEBPACK_IMPORTED_MODULE_5__["default"]({
            storage: this.Storage,
            viewModel: this.ViewModel,
            ajax: (function (queryObject) {
                return _this._request(queryObject);
            }),
            isLocal: options.url ? false : true
        });
        this.FixedHeader = new _FixedHeader__WEBPACK_IMPORTED_MODULE_6__["default"](this.Storage);
        this.Pagination = new _Pagination__WEBPACK_IMPORTED_MODULE_9__["default"](options, this.Storage, this.ViewModel);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0J1aWxkSW5mcmFzdHJ1Y3R1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ29sTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9GaWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0ZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9GaWx0ZXJUb29sYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0ZpbHRlclRvb2xiYXJNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9GaXhlZEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9PcGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvUGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9QaXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Qcm9jZXNzU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvUXVlcnlNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Tb3J0LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1NvcnRSdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1NvcnRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9Ub29scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9WaWV3TW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvWGdyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3Jj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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGOzs7Ozs7Ozs7Ozs7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyRTs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdFOzs7Ozs7Ozs7Ozs7O0FDcEtBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw2QkFBNkIsRUFBRTtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QUFHLElBQUksb0RBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLG1EQUFVLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXhFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBQ0YsWUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7QUN0SUQseUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFhncmlkIGZyb20gJy4vbW9kdWxlcy9YZ3JpZCc7XHJcblxyXG4oKCQpID0+IHtcclxuXHQkLmZuLlhncmlkID0gZnVuY3Rpb24gKC4uLmFyZ3M6IGFueVtdKSB7XHJcblx0XHRsZXQgZGF0YTtcclxuXHRcdGNvbnN0IG9wdGlvbnM6IElPcHRpb25zIHwgc3RyaW5nID0gYXJnc1swXTtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRkYXRhID0gJCh0aGlzKS5kYXRhKCdYZ3JpZCcpO1xyXG5cdFx0XHRpZiAoIWRhdGEpIHtcclxuXHRcdFx0XHRjb25zdCBwcm9wczogSU9wdGlvbnMgPSAodHlwZW9mIChvcHRpb25zKSA9PT0gJ3N0cmluZycpID8gYXJnc1sxXSA6IG9wdGlvbnM7XHJcblx0XHRcdFx0JCh0aGlzKS5kYXRhKCdYZ3JpZCcsIG5ldyBYZ3JpZChwcm9wcywgJCh0aGlzKSkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiAob3B0aW9ucykgPT09ICdzdHJpbmcnICYmIG9wdGlvbnMuaW5kZXhPZignXycpICE9PSAwICYmIGRhdGFbb3B0aW9uc10gPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRjb25zdCBwcm9wcyA9IGFyZ3Muc2xpY2UoMSk7XHJcblx0XHRcdFx0ZGF0YVtvcHRpb25zXS5hcHBseShkYXRhLCBwcm9wcyk7XHJcblx0XHRcdH0gZWxzZSBpZiAoZGF0YS5yZWZyZXNoKSB7XHJcblx0XHRcdFx0ZGF0YS5yZWZyZXNoLmFwcGx5KGRhdGEsIGFyZ3MpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn0pKGpRdWVyeSk7XHJcbiIsImltcG9ydCB0b29scyBmcm9tICcuL1Rvb2xzJztcclxuaW1wb3J0IFZpZXdNb2RlbCBmcm9tICcuL1ZpZXdNb2RlbCc7XHJcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vU3RvcmFnZSc7XHJcblxyXG5jbGFzcyBCdWlsZEluZnJhc3RydWN0dXJlIHtcclxuXHR2aWV3TW9kZWw6IFZpZXdNb2RlbDtcclxuXHRzdG9yYWdlOiBTdG9yYWdlO1xyXG5cdG9wdGlvbnM6IElCdWlsZEluZnJhc3RydWN0dXJlT3B0aW9ucztcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucywgc3RvcmFnZSwgdmlld01vZGVsKSB7XHJcblx0XHR0aGlzLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcclxuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHtcclxuXHRcdFx0dGhlYWRDbGFzczogJ3RhYmxlLWdyaWQtdGhlYWQnLFxyXG5cdFx0XHR0Ym9keUNsYXNzOiAndGFibGUtZ3JpZC10Ym9keScsXHJcblx0XHRcdGZpcnN0QnRuVGVtcGxhdGU6ICc8c3BhbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPiYjMTcxOzwvc3Bhbj4nLFxyXG5cdFx0XHRsYXN0QnRuVGVtcGxhdGU6ICc8c3BhbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPiYjMTg3Ozwvc3Bhbj4nLFxyXG5cdFx0XHRwcmV2QnRuVGVtcGxhdGU6ICc8c3BhbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPiYjODI0OTs8L3NwYW4+JyxcclxuXHRcdFx0bmV4dEJ0blRlbXBsYXRlOiAnPHNwYW4gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj4mIzgyNTA7PC9zcGFuPicsXHJcblx0XHRcdGN1cnJlbnRQYWdlVGVtcGxhdGU6ICc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+JyxcclxuXHRcdFx0cGFnaW5hdGlvblRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIlhncmlkLXBhZ2dpbmF0aW9uIGlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIiA+e2ZpcnN0QnRuVGVtcGxhdGV9e3ByZXZCdG5UZW1wbGF0ZX08L2Rpdj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+IFBhZ2UgPC9zcGFuPlxyXG5cdFx0XHRcdHtjdXJyZW50UGFnZVRlbXBsYXRlfVxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj4gb2YgPHNwYW4gY2xhc3M9XCJYZ3JpZC10b3RhbC1wYWdlc1wiPjwvc3Bhbj48L3NwYW4+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiID57bmV4dEJ0blRlbXBsYXRlfXtsYXN0QnRuVGVtcGxhdGV9PC9kaXY+XHJcblx0XHRcdDwvZGl2PmBcclxuXHRcdH0sIG9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblx0XHR0aGlzLl9leGVjKCk7XHJcblx0fTtcclxuXHRidWlsZEZpbHRlclRvb2xiYXIoKSB7XHJcblx0XHRpZiAodGhpcy52aWV3TW9kZWwuZmlsdGVyVG9vbGJhcikge1xyXG5cdFx0XHR0aGlzLl9idWlsZEZpbHRlclRvb2xiYXIoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdF9leGVjKCkge1xyXG5cdFx0dGhpcy5fYnVpbGQoKTtcclxuXHRcdHRoaXMuX2J1aWxkVGhlYWQoKTtcclxuXHRcdHRoaXMuX2J1aWxkVEJvZHkoKTtcclxuXHRcdHRoaXMuX2J1aWxkUGFnaW5hdGlvbigpO1xyXG5cclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcclxuXHRcdGNvbnN0ICR0Zm9vdENlbGxzID0gc3RvcmFnZS4kZ3JpZFRhYmxlLmZpbmQoJy5YZ3JpZC10Ym9keS13IHRkJyk7XHJcblx0XHRjb25zdCAkdGhlYWRDZWxscyA9IHN0b3JhZ2UuJGhlYWRUYWJsZS5maW5kKCd0cicpO1xyXG5cclxuXHRcdGNvbE1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RlbCwgaSkge1xyXG5cdFx0XHRsZXQgY2VsbHMgPSBbXTtcclxuXHJcblx0XHRcdGNlbGxzLnB1c2goJHRmb290Q2VsbHMuZ2V0KGkpKTtcclxuXHRcdFx0JHRoZWFkQ2VsbHMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0Y2VsbHMucHVzaCgkKHRoaXMpLmZpbmQoJz4qOmVxKCcgKyBpICsgJyknKS5nZXQoMCkpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG1vZGVsLmRlcGVuZGVudCA9IGNlbGxzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHtcclxuXHRcdFx0XHRcdCRhbmNob3I6ICQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKSxcclxuXHRcdFx0XHRcdCRpdGVtOiAkKGl0ZW0pXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0cmVzdWx0LiRpdGVtLmJlZm9yZShyZXN1bHQuJGFuY2hvcik7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdF9hZGRQcm9wc3RvSGVhZGVyQ2VsbHMoaSwgaXRlbSkge1xyXG5cdFx0Y29uc3QgJGl0ZW0gPSAkKGl0ZW0pO1xyXG5cdFx0Y29uc3QgY29sTW9kZWwgPSB0aGlzLnN0b3JhZ2UuY29sTW9kZWxzW2ldO1xyXG5cclxuXHRcdCRpdGVtLmF0dHIoJ2RhdGEtYWxpYXMnLCBjb2xNb2RlbFsnYWxpYXMnXSk7XHJcblx0XHRpZiAoY29sTW9kZWwuZml4ZWQpIHtcclxuXHRcdFx0JGl0ZW0uYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcblx0XHRcdGlmIChjb2xNb2RlbC53aWR0aCkge1xyXG5cdFx0XHRcdCRpdGVtLndpZHRoKGNvbE1vZGVsLndpZHRoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0X2J1aWxkRmlsdGVyVG9vbGJhcigpIHtcclxuXHRcdGNvbnN0IHRhZyA9ICd0Zm9vdCc7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3QgJGZpbHRlciA9ICQoYDwke3RhZ30gY2xhc3M9XCJYZ3JpZC10aGVhZC1maWx0ZXJcIj48dHI+JHsgbmV3IEFycmF5KHN0b3JhZ2UuY29sTW9kZWxzLmxlbmd0aCArIDEpLmpvaW4oJzx0ZCBjbGFzcz1cIlhncmlkLWZpbHRlci1jZWxsXCI+PC90ZD4nKX08L3RyPjwvJHt0YWd9PmApO1xyXG5cdFx0Y29uc3QgYWRkUHJvcCA9IHRoaXMuX2FkZFByb3BzdG9IZWFkZXJDZWxscy5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdHN0b3JhZ2UuJGZpbHRlclRvb2xiYXJJdGVtcyA9ICRmaWx0ZXIuZmluZCgnLlhncmlkLWZpbHRlci1jZWxsJykuZWFjaChhZGRQcm9wKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5maW5kKCcuWGdyaWQtdGhlYWQtdyB0ZCcpLmVhY2goYWRkUHJvcCk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuYXBwZW5kKCRmaWx0ZXIpO1xyXG5cdH07XHJcblxyXG5cdF9idWlsZFRoZWFkKCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGxldCB0YWcgPSAndGhlYWQnO1xyXG5cdFx0bGV0IHdpZHRoSGVscGVyID0gYDwke3RhZ30gY2xhc3M9XCJYZ3JpZC10aGVhZC13XCI+PHRyPiR7bmV3IEFycmF5KHN0b3JhZ2UuY29sTW9kZWxzLmxlbmd0aCArIDEpLmpvaW4oJzx0ZD48ZGl2IGNsYXNzPVwiWGdyaWQtV2lkdGhMaXN0ZW5lci13cmFwcGVyXCI+PGlmcmFtZSBkYXRhLWNvbD1cIjBcIiBjbGFzcz1cIlhncmlkLVdpZHRoTGlzdGVuZXJcIj48L2lmcmFtZT48L2Rpdj48L3RkPicpfTwvdHI+PC8ke3RhZ30+YDtcclxuXHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuaHRtbCh3aWR0aEhlbHBlcik7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuZmluZCgnLlhncmlkLXRoZWFkLXcgdGQnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdGNvbnN0ICR0ZCA9ICQodGhpcyk7XHJcblx0XHRcdGNvbnN0IGNvbE1vZGVsID0gc3RvcmFnZS5jb2xNb2RlbHNbaV07XHJcblx0XHRcdGNvbnN0IGlmcmFtZTogSFRNTEVsZW1lbnQgPSAkdGQuZmluZCgnaWZyYW1lJylbMF07XHJcblxyXG5cdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdkYXRhLWFsaWFzJywgY29sTW9kZWwuYWxpYXMpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGFnID0gJ3Rib2R5JztcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5hcHBlbmQoYDwke3RhZ30gY2xhc3M9XCJYZ3JpZC10aGVhZC1sYWJlbHNcIj48dHI+JHtuZXcgQXJyYXkoc3RvcmFnZS5jb2xNb2RlbHMubGVuZ3RoICsgMSkuam9pbignPHRoIGNsYXNzPVwiWGdyaWQtdGhlYWQtbGFiZWxcIj48L3RoPicpfTwvdHI+PC8ke3RhZ30+YCk7XHJcblx0XHRzdG9yYWdlLiRoZWFkTGFiZWxzID0gc3RvcmFnZS4kaGVhZFRhYmxlLmZpbmQoJy5YZ3JpZC10aGVhZC1sYWJlbCcpO1xyXG5cdFx0c3RvcmFnZS4kaGVhZExhYmVscy5lYWNoKChpLCBpdGVtKSA9PiB7XHJcblx0XHRcdHRoaXMuX2FkZFByb3BzdG9IZWFkZXJDZWxscyhpLCBpdGVtKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuYnVpbGRGaWx0ZXJUb29sYmFyKCk7XHJcblx0fTtcclxuXHJcblx0X2J1aWxkVEJvZHkoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0bGV0IHdpZHRoSGVscGVyID0gJzx0aGVhZCBjbGFzcz1cIlhncmlkLXRib2R5LXdcIj48dHI+JyArIG5ldyBBcnJheShzdG9yYWdlLmNvbE1vZGVscy5sZW5ndGggKyAxKS5qb2luKCc8dGQ+PGk+PC9pPjwvdGQ+JykgKyAnPC90cj48L3RoZWFkPic7XHJcblxyXG5cdFx0c3RvcmFnZS4kZ3JpZFRhYmxlLmh0bWwod2lkdGhIZWxwZXIpO1xyXG5cdFx0c3RvcmFnZS4kZ3JpZFRhYmxlLmZpbmQoJy5YZ3JpZC10Ym9keS13IHRyIHRkJykuZWFjaCgoaSwgaXRlbSkgPT4ge1xyXG5cdFx0XHR0aGlzLl9hZGRQcm9wc3RvSGVhZGVyQ2VsbHMoaSwgaXRlbSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRfYnVpbGRQYWdpbmF0aW9uKCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblx0XHRjb25zdCAkcGFnaW5hdGlvbiA9ICQob3B0aW9ucy5wYWdpbmF0aW9uVGVtcGxhdGUpO1xyXG5cdFx0Y29uc3QgeyBmaXJzdEJ0blRlbXBsYXRlLCBsYXN0QnRuVGVtcGxhdGUsIHByZXZCdG5UZW1wbGF0ZSwgbmV4dEJ0blRlbXBsYXRlLCBjdXJyZW50UGFnZVRlbXBsYXRlIH0gPSBvcHRpb25zO1xyXG5cdFx0bGV0ICRwYWdpbmF0aW9uQm94O1xyXG5cclxuXHRcdHRvb2xzLmluc2VydEVsZW1lbnQoJHBhZ2luYXRpb24sICd7Zmlyc3RCdG5UZW1wbGF0ZX0nLCBmaXJzdEJ0blRlbXBsYXRlID8gJChmaXJzdEJ0blRlbXBsYXRlKS5hZGRDbGFzcygnWGdyaWQtZmlyc3QnKSA6ICcnKTtcclxuXHRcdHRvb2xzLmluc2VydEVsZW1lbnQoJHBhZ2luYXRpb24sICd7cHJldkJ0blRlbXBsYXRlfScsICQocHJldkJ0blRlbXBsYXRlKS5hZGRDbGFzcygnWGdyaWQtcHJldicpKTtcclxuXHRcdHRvb2xzLmluc2VydEVsZW1lbnQoJHBhZ2luYXRpb24sICd7bmV4dEJ0blRlbXBsYXRlfScsICQobmV4dEJ0blRlbXBsYXRlKS5hZGRDbGFzcygnWGdyaWQtbmV4dCcpKTtcclxuXHRcdHRvb2xzLmluc2VydEVsZW1lbnQoJHBhZ2luYXRpb24sICd7bGFzdEJ0blRlbXBsYXRlfScsICQobGFzdEJ0blRlbXBsYXRlKS5hZGRDbGFzcygnWGdyaWQtbGFzdCcpKTtcclxuXHRcdHRvb2xzLmluc2VydEVsZW1lbnQoJHBhZ2luYXRpb24sICd7Y3VycmVudFBhZ2VUZW1wbGF0ZX0nLCAkKGN1cnJlbnRQYWdlVGVtcGxhdGUpLmFkZENsYXNzKCdYZ3JpZC1jdXJyZW50LXBhZ2UnKSk7XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMucGFnaW5hdGlvblNlbGVjdG9yKSB7XHJcblx0XHRcdCRwYWdpbmF0aW9uQm94ID0gJChvcHRpb25zLnBhZ2luYXRpb25TZWxlY3Rvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkcGFnaW5hdGlvbkJveCA9IHN0b3JhZ2UuJGJveC5maW5kKCcuWGdyaWQtcGFnZ2luYXRpb24td3JhcHBlcicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRwYWdpbmF0aW9uQm94Lmh0bWwoJHBhZ2luYXRpb24pO1xyXG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveCA9ICRwYWdpbmF0aW9uQm94O1xyXG5cdH07XHJcblxyXG5cdF9idWlsZCgpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cclxuXHRcdHN0b3JhZ2UuJGJveC5odG1sKGA8ZGl2IGNsYXNzPVwiWGdyaWRcIj5cclxuXHQ8ZGl2IGNsYXNzPVwiWGdyaWQtd3JhcHBlclwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cIlhncmlkLXdyYXBwZXItaG9sZGVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJYZ3JpZC10aGVhZC13cmFwcGVyXCI+XHJcblx0XHRcdFx0PHRhYmxlIGNsYXNzPVwiWGdyaWQtdGhlYWQgJHtvcHRpb25zLnRoZWFkQ2xhc3N9XCI+PC90YWJsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJYZ3JpZC10Ym9keS13cmFwcGVyXCI+XHJcblx0XHRcdFx0PHRhYmxlIGNsYXNzPVwiWGdyaWQtdGJvZHkgJHtvcHRpb25zLnRib2R5Q2xhc3N9XCI+PC90YWJsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJYZ3JpZC1wYWdnaW5hdGlvbi13cmFwcGVyXCI+PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PmApO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlID0gc3RvcmFnZS4kYm94LmZpbmQoJy5YZ3JpZC10aGVhZCcpO1xyXG5cdFx0c3RvcmFnZS4kZ3JpZFRhYmxlID0gc3RvcmFnZS4kYm94LmZpbmQoJy5YZ3JpZC10Ym9keScpO1xyXG5cdH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQnVpbGRJbmZyYXN0cnVjdHVyZTsiLCJpbXBvcnQgcGlwZXMgZnJvbSAnLi9QaXBlcyc7XHJcbmltcG9ydCBGaWx0ZXJUb29sYmFyTW9kZWwgZnJvbSAnLi9GaWx0ZXJUb29sYmFyTW9kZWwnO1xyXG5jbGFzcyBDb2xNb2RlbCBpbXBsZW1lbnRzIElDb2xNb2RlbCB7XHJcblx0b3JkZXI6IG51bWJlcjtcclxuXHRsYWJlbCA9ICcnO1xyXG5cdGZpbHRlcmFibGUgPSBmYWxzZTtcclxuXHRmaWx0ZXJUeXBlID0gJ3RleHQnO1xyXG5cdGZpbHRlck9wdGlvbiA9ICdjbic7XHJcblx0c29ydGFibGUgPSBmYWxzZTtcclxuXHRzb3J0VHlwZSA9ICd0ZXh0JztcclxuXHRoaWRkZW4gPSBmYWxzZTtcclxuXHRyZXNpemFibGUgPSBmYWxzZTtcclxuXHRpbnNlbnNpdGl2ZSA9IGZhbHNlO1xyXG5cdGZpeGVkID0gZmFsc2U7XHJcblx0c29ydEZvcm1hdHRlcjogRnVuY3Rpb247XHJcblx0ZmlsdGVyRm9ybWF0dGVyOiBGdW5jdGlvbjtcclxuXHRrZXk6IHN0cmluZztcclxuXHRhbGlhczogc3RyaW5nO1xyXG5cdGZpbHRlclRvb2xiYXJTZXR0aW5nczogYW55O1xyXG5cclxuXHRkZXBlbmRlbnQgPSBbXTtcclxuXHRfY2hlY2s6IEZ1bmN0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihtb2RlbCwgb3JkZXIpIHtcclxuXHRcdHRoaXMub3JkZXIgPSBvcmRlcjtcclxuXHJcblx0XHQkLmV4dGVuZCh0aGlzLCBtb2RlbCk7XHJcblx0XHR0aGlzLmZpbHRlclRvb2xiYXJTZXR0aW5ncyA9IG5ldyBGaWx0ZXJUb29sYmFyTW9kZWwobW9kZWwuZmlsdGVyVG9vbGJhclNldHRpbmdzKTtcclxuXHJcblx0XHRpZiAodHlwZW9mICh0aGlzLmFsaWFzKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0dGhpcy5hbGlhcyA9IHRoaXMua2V5O1xyXG5cdFx0fVxyXG5cdFx0aWYgKHR5cGVvZiAodGhpcy5rZXkpID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHR0aGlzLmtleSA9IHRoaXMuYWxpYXM7XHJcblx0XHR9XHJcblx0XHRpZiAobW9kZWwuc29ydFR5cGUgJiYgdHlwZW9mIChtb2RlbC5zb3J0VHlwZSkgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0dGhpcy5zb3J0Rm9ybWF0dGVyID0gbW9kZWwuc29ydFR5cGU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNvcnRGb3JtYXR0ZXIgPSBwaXBlcy5nZXRCeVR5cGUobW9kZWwuc29ydFR5cGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChtb2RlbC5maWx0ZXJUeXBlICYmIHR5cGVvZiAobW9kZWwuZmlsdGVyVHlwZSkgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0dGhpcy5maWx0ZXJGb3JtYXR0ZXIgPSBtb2RlbC5maWx0ZXJUeXBlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5maWx0ZXJGb3JtYXR0ZXIgPSBwaXBlcy5nZXRCeVR5cGUobW9kZWwuZmlsdGVyVHlwZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5kZXBlbmRlbnQgPSBbXTtcclxuXHRcdHRoaXMuX2NoZWNrID0gZnVuY3Rpb24gKCk6IHZvaWQge1xyXG5cdFx0XHRpZiAodGhpcy5oaWRkZW4pIHtcclxuXHRcdFx0XHR0aGlzLmRlcGVuZGVudC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRcdFx0XHRpdGVtLiRpdGVtLmRldGFjaCgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZGVwZW5kZW50LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRcdFx0XHRcdGl0ZW0uJGFuY2hvci5hZnRlcihpdGVtLiRpdGVtKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGFiZWxGb3JtYXR0ZXIoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sYWJlbDtcclxuXHR9O1xyXG5cclxuXHRjZWxsRm9ybWF0dGVyKCR0ZCwgdmFsdWUsIHJvd0RhdGEsIGRhdGEpIHtcclxuXHRcdGlmICh0eXBlb2YgKHZhbHVlKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0dmFsdWUgPSAnJztcclxuXHRcdH1cclxuXHRcdHJldHVybiAnPGRpdiBjbGFzcz1cImVsbGlwc2lzXCI+JyArIHZhbHVlICsgJzwvZGl2Pic7XHJcblx0fTtcclxuXHJcblx0ZmlsdGVyVG9vbGJhckZvcm1hdHRlcigkY2VsbCwgY29sTW9kZWwpIHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gY29sTW9kZWwuZmlsdGVyVG9vbGJhclNldHRpbmdzIHx8IHt9O1xyXG5cdFx0bGV0ICRjb250cm9sLFxyXG5cdFx0XHQkY29udGFpbmVyLFxyXG5cdFx0XHQkd3JhcCA9ICQoJzxkaXYgY2xhc3M9XCJYZ3JpZC1maWx0ZXItY29udHJvbC13cmFwXCI+PC9kaXY+JyksXHJcblx0XHRcdHN0ciA9ICc8ZGl2IGNsYXNzPVwiWGdyaWQtZmlsdGVyLXdyYXBwZXJcIj4nO1xyXG5cclxuXHRcdGlmIChzZXR0aW5ncy5hbGxvd1Jlc2V0QnV0dG9uIHx8IHNldHRpbmdzLmFsbG93U3VibWl0QnV0dG9uKSB7XHJcblx0XHRcdHN0ciArPSAnPHNwYW4gY2xhc3M9XCJYZ3JpZC1maWx0ZXItYnRuc1wiPic7XHJcblx0XHRcdGlmIChzZXR0aW5ncy5hbGxvd1Jlc2V0QnV0dG9uKSB7XHJcblx0XHRcdFx0c3RyICs9ICc8c3BhbiBjbGFzcz1cIlhncmlkLWJ0biBYZ3JpZC1yZXNldFwiPiYjMTAwMDY7PC9zcGFuPic7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHNldHRpbmdzLmFsbG93U3VibWl0QnV0dG9uKSB7XHJcblx0XHRcdFx0c3RyICs9ICc8c3BhbiBjbGFzcz1cIlhncmlkLWJ0biBYZ3JpZC1vblN1Ym1pdFwiPiYjMTAwMDQ7PC9zcGFuPic7XHJcblx0XHRcdH1cclxuXHRcdFx0c3RyICs9ICc8L3NwYW4+JztcclxuXHRcdH1cclxuXHRcdHN0ciArPSAnPC9kaXY+J1xyXG5cdFx0c3dpdGNoIChzZXR0aW5ncy5mb3JtQ29udHJvbFR5cGUpIHtcclxuXHRcdFx0Y2FzZSAnc2VsZWN0JzpcclxuXHRcdFx0XHQkY29udHJvbCA9ICQoJzxzZWxlY3QgY2xhc3M9XCJYZ3JpZC1zZWxlY3QgWGdyaWQtZmlsdGVyXCIgIC8+Jyk7XHJcblx0XHRcdFx0c2V0dGluZ3Muc2VsZWN0T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpKSB7XHJcblx0XHRcdFx0XHQkY29udHJvbC5hcHBlbmQoJzxvcHRpb24gdmFsdWU9XCInICsgaSArICdcIj4nICsgZWxlbWVudC5sYWJlbCArICc8L29wdGlvbj4nKVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdCRjb250cm9sLnZhbChbXSkuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkSW5kZXggPSAtMTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHQkY29udHJvbCA9ICQoJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiWGdyaWQtaW5wdXQgWGdyaWQtZmlsdGVyXCIgLz4nKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGlmIChzZXR0aW5ncy5vbkNoYW5nZSkge1xyXG5cdFx0XHQkY29udHJvbC5hZGRDbGFzcygnWGdyaWQtb25DaGFuZ2UnKTtcclxuXHRcdH1cclxuXHRcdGlmIChzZXR0aW5ncy5vbktleWRvd24pIHtcclxuXHRcdFx0JGNvbnRyb2wuYWRkQ2xhc3MoJ1hncmlkLW9uS2V5ZG93bicpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNldHRpbmdzLm9uRW50ZXIpIHtcclxuXHRcdFx0JGNvbnRyb2wuYWRkQ2xhc3MoJ1hncmlkLW9uRW50ZXInKTtcclxuXHRcdH1cclxuXHRcdGlmIChzZXR0aW5ncy5hdHRyKSB7XHJcblx0XHRcdCRjb250cm9sLmF0dHIoc2V0dGluZ3MuYXR0cik7XHJcblx0XHR9XHJcblxyXG5cdFx0JGNvbnRhaW5lciA9ICQoc3RyKTtcclxuXHRcdCR3cmFwLmFwcGVuZCgkY29udHJvbCk7XHJcblx0XHQkY29udGFpbmVyLmFwcGVuZCgkd3JhcCk7XHJcblx0XHQkY2VsbC5odG1sKCRjb250YWluZXIpO1xyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xNb2RlbDsiLCJpbXBvcnQgdG9vbHMgZnJvbSAnLi9Ub29scyc7XHJcbmltcG9ydCBRdWVyeU1vZGVsIGZyb20gJy4vUXVlcnlNb2RlbCc7XHJcbmltcG9ydCBzb3J0IGZyb20gJy4vU29ydCc7XHJcbmltcG9ydCBmaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgcGlwZXMgZnJvbSAnLi9QaXBlcyc7XHJcblxyXG5jbGFzcyBEaXNwbGF5IHtcclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcblx0XHR0aGlzLnZpZXdNb2RlbCA9IG9wdGlvbnMudmlld01vZGVsO1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gb3B0aW9ucy5zdG9yYWdlO1xyXG5cdFx0dGhpcy5hamF4ID0gb3B0aW9ucy5hamF4O1xyXG5cclxuXHRcdGlmIChvcHRpb25zLmlzTG9jYWwpIHtcclxuXHRcdFx0dGhpcy5wcm9jZXNzID0gdGhpcy5fbG9jYWxQcm9jZXNzLmJpbmQodGhpcyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnByb2Nlc3MgPSB0aGlzLl9zZXJ2ZXJQcm9jZXNzLmJpbmQodGhpcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuX3N1YnNjcmliZSgpO1xyXG5cdFx0fSwgNTApO1xyXG5cdH07XHJcblxyXG5cdGV4ZWMoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHR2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbCxcclxuXHRcdFx0cXVlcnkgPSBuZXcgUXVlcnlNb2RlbCh7XHJcblx0XHRcdFx0ZmlsdGVyOiBzdG9yYWdlLmZpbHRlcixcclxuXHRcdFx0XHRzb3J0OiB2aWV3TW9kZWwuc29ydEJ5LFxyXG5cdFx0XHRcdHJvd3M6IHZpZXdNb2RlbC5yb3dzLFxyXG5cdFx0XHRcdHBhZ2U6IHZpZXdNb2RlbC5uZXdQYWdlLFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRzdG9yYWdlLnF1ZXJ5ID0gcXVlcnk7XHJcblx0XHRzdG9yYWdlLiRib3guYWRkQ2xhc3MoJ1hncmlkLWxvYWRpbmcnKTtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnByb2Nlc3MoKS5kb25lKChkYXRhKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5fZmlsbGVyKGRhdGEpO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmFnZS4kYm94LnJlbW92ZUNsYXNzKCdYZ3JpZC1sb2FkaW5nJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSwgMCk7XHJcblx0fTtcclxuXHJcblx0X2ZpbGxlcihkYXRhKSB7XHJcblx0XHRjb25zdCB2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbDtcclxuXHRcdHZpZXdNb2RlbC50b3RhbFBhZ2VzID0gZGF0YS50b3RhbFBhZ2VzXHJcblx0XHR2aWV3TW9kZWwudG90YWxSb3dzID0gZGF0YS50b3RhbFJvd3M7XHJcblx0XHR2aWV3TW9kZWwuZGF0YSA9IGRhdGEuZGF0YTtcclxuXHRcdHZpZXdNb2RlbC5wYWdlID0gZGF0YS5wYWdlO1xyXG5cdH07XHJcblxyXG5cdF9sb2NhbEZpbHRlcihkYXRhLCBmaWx0ZXJRdWVyeSkge1xyXG5cdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCksXHJcblx0XHRcdHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdHJhd0RhdGEgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0Y29uc3QgY29sTW9kZWxzID0gc3RvcmFnZS5jb2xNb2RlbHNEaWN0aW9uYXJ5O1xyXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRjb25zdCByb3cgPSB7fTtcclxuXHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoYWxpYXMsIHJvd0RhdGEpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiAocm93W2FsaWFzXSkgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgY29sTW9kZWwgPSBjb2xNb2RlbHNbYWxpYXNdO1xyXG5cdFx0XHRcdFx0XHRcdHJvd1thbGlhc10gPSBjb2xNb2RlbC5maWx0ZXJGb3JtYXR0ZXIocm93RGF0YVtjb2xNb2RlbC5rZXldLCByb3dEYXRhLCBjb2xNb2RlbCk7XHJcblx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdHJldHVybiByb3dbYWxpYXNdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGlmIChmaWx0ZXJRdWVyeSkge1xyXG5cdFx0XHRcdGRhdGEgPSBmaWx0ZXIuZXhlYyhkYXRhLCBmaWx0ZXJRdWVyeSwgcmF3RGF0YSgpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xyXG5cdFx0fSwgMCk7XHJcblx0XHRyZXR1cm4gZGVmZXJyZWQ7XHJcblx0fTtcclxuXHJcblx0X2xvY2FsU29ydChkYXRhLCBzb3J0UnVsZXMpIHtcclxuXHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpLFxyXG5cdFx0XHRzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0aWYgKHNvcnRSdWxlcy5sZW5ndGgpIHtcclxuXHRcdFx0c29ydFJ1bGVzID0gc29ydFJ1bGVzLm1hcCgocnVsZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGNvbE1vZGVsID0gc3RvcmFnZS5jb2xNb2RlbHNEaWN0aW9uYXJ5W3J1bGUuYnldO1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSB7XHJcblx0XHRcdFx0XHRvcmRlcjogcnVsZS5vcmRlclxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdGlmIChjb2xNb2RlbCkge1xyXG5cdFx0XHRcdFx0cmVzdWx0LmNvbE1vZGVsID0gY29sTW9kZWw7XHJcblx0XHRcdFx0XHRyZXN1bHRbJ2J5J10gPSBjb2xNb2RlbC5rZXk7XHJcblx0XHRcdFx0XHRyZXN1bHRbJ2dldCddID0gY29sTW9kZWwuc29ydEZvcm1hdHRlcjtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmVzdWx0WydieSddID0gcnVsZS5ieTtcclxuXHRcdFx0XHRcdHJlc3VsdFsnZ2V0J10gPSBwaXBlcy5nZXRCeVR5cGUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGRhdGEgPSBzb3J0LmV4ZWMoZGF0YSwgc29ydFJ1bGVzKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcclxuXHJcblx0XHRcdH0sIDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBkZWZlcnJlZDtcclxuXHR9O1xyXG5cclxuXHRfZ2V0TG9jYWxEYXRhKGRhdGEsIHF1ZXJ5KSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHR2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbCxcclxuXHRcdFx0cmVzdWx0ID0ge1xyXG5cdFx0XHRcdHRvdGFsUm93czogZGF0YS5sZW5ndGgsXHJcblx0XHRcdFx0cGFnZTogcXVlcnkucGFnZSxcclxuXHRcdFx0XHR0b3RhbFBhZ2VzOiBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyB2aWV3TW9kZWwucm93cykgfHwgMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRiZWdpbiA9IChyZXN1bHQucGFnZSAtIDEpICogdmlld01vZGVsLnJvd3MsXHJcblx0XHRcdGVuZCA9IHJlc3VsdC5wYWdlICogdmlld01vZGVsLnJvd3M7XHJcblxyXG5cdFx0cmVzdWx0LmRhdGEgPSBkYXRhLnNsaWNlKGJlZ2luLCBlbmQpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG5cclxuXHRfbG9jYWxQcm9jZXNzKCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZSxcclxuXHRcdFx0ZGVmZXJyZWQgPSAkLkRlZmVycmVkKCksXHJcblx0XHRcdHF1ZXJ5ID0gc3RvcmFnZS5xdWVyeTtcclxuXHRcdHRoaXMuX2xvY2FsRmlsdGVyKHN0b3JhZ2UuZGF0YSwgcXVlcnkuZmlsdGVyKS5kb25lKChmaWx0ZXJlZERhdGEpID0+IHtcclxuXHRcdFx0dGhpcy5fbG9jYWxTb3J0KGZpbHRlcmVkRGF0YSwgcXVlcnkuc29ydCkuZG9uZSgoc29ydGVkRGF0YSkgPT4ge1xyXG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmUodGhpcy5fZ2V0TG9jYWxEYXRhKHNvcnRlZERhdGEsIHF1ZXJ5KSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZGVmZXJyZWQ7XHJcblx0fTtcclxuXHJcblx0X3NlcnZlclByb2Nlc3MoKSB7XHJcblx0XHRjb25zdCBkZWZlcnJlZCA9IHRoaXMuYWpheCh0aGlzLnN0b3JhZ2UucXVlcnkpO1xyXG5cdFx0cmV0dXJuIGRlZmVycmVkO1xyXG5cdH07XHJcblx0X3N1YnNjcmliZSgpIHtcclxuXHRcdGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsLFxyXG5cdFx0XHRzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHRhY3Rpb24gPSB0b29scy50aHJvdHRsZSgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5leGVjKCk7XHJcblx0XHRcdH0sIDEwMCksXHJcblx0XHRcdF9yZWxvYWQgPSBmdW5jdGlvbiAocywgdHlwZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnZmlsdGVyJzpcclxuXHRcdFx0XHRcdFx0dmlld01vZGVsLm5ld1BhZ2UgPSAxO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3NvcnRCeSc6XHJcblx0XHRcdFx0XHRcdC8vdmlld01vZGVsLm5ld1BhZ2UgPSAxOyA/XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRhY3Rpb24oKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdHZpZXdNb2RlbC5vbignbmV3UGFnZScsIF9yZWxvYWQpO1xyXG5cdFx0dmlld01vZGVsLm9uKCdzb3J0QnknLCBfcmVsb2FkKTtcclxuXHRcdHN0b3JhZ2Uub24oJ2ZpbHRlcicsIF9yZWxvYWQpO1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc3BsYXk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5jbGFzcyBGaWxsIHtcclxuXHRjb25zdHJ1Y3RvcihzdG9yYWdlLCB2aWV3TW9kZWwpIHtcclxuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHR9O1xyXG5cclxuXHR0aGVhZCgpIHtcclxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHRjbGFzc1J1bGVzID0gWydyZXNpemFibGUnLCAnc29ydGFibGUnLCAnZmlsdGVyYWJsZScsICdoaWRkZW4nXSxcclxuXHRcdFx0Y29sTW9kZWxzID0gc3RvcmFnZS5jb2xNb2RlbHM7XHJcblxyXG5cdFx0c3RvcmFnZS4kaGVhZExhYmVscy5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdGNvbnN0ICR0aCA9ICQodGhpcyksXHJcblx0XHRcdFx0JHdyYXBwZXIgPSAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKSxcclxuXHRcdFx0XHRjb2xNb2RlbCA9IGNvbE1vZGVsc1tpXTtcclxuXHJcblx0XHRcdCR0aC5kYXRhKCdYZ3JpZC5kYXRhJywgY29sTW9kZWwpO1xyXG5cdFx0XHRsZXQgZGF0YSA9IGNvbE1vZGVsLmxhYmVsRm9ybWF0dGVyKCR3cmFwcGVyLCAkdGgsIGNvbE1vZGVsLCBpKTtcclxuXHRcdFx0aWYgKHR5cGVvZiAoZGF0YSkgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0JHdyYXBwZXIuaHRtbChkYXRhKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JHRoLmh0bWwoJHdyYXBwZXIpO1xyXG5cdFx0XHQkLmVhY2goY2xhc3NSdWxlcywgZnVuY3Rpb24gKGksIG1hcmspIHtcclxuXHRcdFx0XHRpZiAoY29sTW9kZWxbbWFya10pIHtcclxuXHRcdFx0XHRcdCR0aC5hZGRDbGFzcyhtYXJrKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JHRoLnJlbW92ZUNsYXNzKG1hcmspO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuZmlsdGVyVG9vbGJhcigpO1xyXG5cdH07XHJcblxyXG5cdGZpbHRlclRvb2xiYXIoKSB7XHJcblx0XHRjb25zdCBzZWxmID0gdGhpcyxcclxuXHRcdFx0c3RvcmFnZSA9IHRoaXMuc3RvcmFnZSxcclxuXHRcdFx0dmlld01vZGVsID0gdGhpcy52aWV3TW9kZWwsXHJcblx0XHRcdGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzO1xyXG5cdFx0aWYgKHN0b3JhZ2UuJGZpbHRlclRvb2xiYXJJdGVtcykge1xyXG5cdFx0XHRzdG9yYWdlLiRmaWx0ZXJUb29sYmFySXRlbXMuZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRcdGNvbnN0ICRjZWxsID0gJCh0aGlzKSxcclxuXHRcdFx0XHRcdGNvbE1vZGVsID0gY29sTW9kZWxzW2ldO1xyXG5cdFx0XHRcdGlmIChjb2xNb2RlbC5maWx0ZXJhYmxlICYmIGNvbE1vZGVsLmZpbHRlclRvb2xiYXJGb3JtYXR0ZXIpIHtcclxuXHRcdFx0XHRcdGxldCBkYXRhID0gY29sTW9kZWwuZmlsdGVyVG9vbGJhckZvcm1hdHRlcigkY2VsbCwgY29sTW9kZWwpO1xyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiAoZGF0YSkgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHRcdCRjZWxsLmh0bWwoZGF0YSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCRjZWxsLmVtcHR5KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHRib2R5KCkge1xyXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMsXHJcblx0XHRcdHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG5cdFx0XHRjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscyxcclxuXHRcdFx0dmlld01vZGVsID0gdGhpcy52aWV3TW9kZWwsXHJcblx0XHRcdGRhdGFUb0Rpc3BsYXkgPSB2aWV3TW9kZWwuZGF0YSxcclxuXHRcdFx0JGhlYWRXcmFwID0gc3RvcmFnZS4kaGVhZFRhYmxlLnBhcmVudCgpLFxyXG5cdFx0XHQkZ3JpZFdyYXAgPSBzdG9yYWdlLiRncmlkVGFibGUucGFyZW50KCksXHJcblx0XHRcdGRhdGEgPSBzdG9yYWdlLmRhdGE7XHJcblxyXG5cdFx0bGV0IHRib2R5LFxyXG5cdFx0XHRudW0gPSAwO1xyXG5cclxuXHRcdGNvbE1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xNb2RlbCwgaSkge1xyXG5cdFx0XHRjb2xNb2RlbC5fY2hlY2soKTtcclxuXHRcdFx0Y29uc3QgJHRkID0gc3RvcmFnZS4kaGVhZExhYmVscy5lcShpKTtcclxuXHRcdFx0aWYgKCFjb2xNb2RlbC5oaWRkZW4pIHtcclxuXHRcdFx0XHRudW0rKztcclxuXHRcdFx0XHRpZiAobnVtICUgMikge1xyXG5cdFx0XHRcdFx0JHRkLmFkZENsYXNzKCdvZGQnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JHRkLmFkZENsYXNzKCdldmVuJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0Ym9keSA9IHRoaXMuX2NyZWF0ZVNoYWRvd0JvZHkoZnJhZ21lbnQpO1xyXG5cclxuXHRcdCQodGJvZHkpLmZpbmQoJ3RyJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRjb25zdCByb3dEYXRhID0gZGF0YVRvRGlzcGxheVtpXTtcclxuXHRcdFx0c2VsZi5fZmlsbFJvdygkKHRoaXMpLCByb3dEYXRhLCBkYXRhKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHN0b3JhZ2UuJGdyaWRUYWJsZS5maW5kKCc+dGJvZHknKS5yZW1vdmUoKTtcclxuXHRcdCRoZWFkV3JhcC5jc3MoeyAncGFkZGluZy1yaWdodCc6ICcnIH0pO1xyXG5cdFx0c3RvcmFnZS4kZ3JpZFRhYmxlLmFwcGVuZCh0Ym9keSk7XHJcblxyXG5cdFx0aWYgKCRncmlkV3JhcC5nZXQoMCkub2Zmc2V0V2lkdGggLSAkZ3JpZFdyYXAuZ2V0KDApLmNsaWVudFdpZHRoKSB7XHJcblx0XHRcdCRoZWFkV3JhcC5jc3MoeyAncGFkZGluZy1yaWdodCc6IHN0b3JhZ2Uuc2Nyb2xsYmFyV2lkdGggKyAncHgnIH0pO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fdXBkYXRlSGVhZCgpO1xyXG5cdH07XHJcblxyXG5cdF9jcmVhdGVTaGFkb3dCb2R5KGZyYWdtZW50LCBhbW91bnQpIHtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXHJcblx0XHRcdHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzLFxyXG5cdFx0XHR0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5JyksXHJcblx0XHRcdHZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsLFxyXG5cdFx0XHRyb3dzQ291bnQgPSB2aWV3TW9kZWwuZGF0YS5sZW5ndGg7XHJcblxyXG5cdFx0bGV0IHRyID0gJzx0cj4nICsgQXJyYXkoY29sTW9kZWxzLmxlbmd0aCArIDEpLmpvaW4oJzx0ZD48L3RkPicpICsgJzwvdHI+JyxcclxuXHRcdFx0dHJzID0gJzx0Ym9keT4nICsgbmV3IEFycmF5KHJvd3NDb3VudCArIDEpLmpvaW4odHIpICsgJzx0Ym9keT4nO1xyXG5cclxuXHRcdGlmICghZnJhZ21lbnQpIHtcclxuXHRcdFx0ZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGJvZHkuaW5uZXJIVE1MID0gdHJzO1xyXG5cclxuXHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKHRib2R5KTtcclxuXHRcdHJldHVybiB0Ym9keTtcclxuXHR9O1xyXG5cclxuXHRfZmlsbFJvdygkdHIsIHJvd0RhdGEsIGRhdGEpIHtcclxuXHJcblx0XHRjb25zdCAkdGRzID0gJHRyLmZpbmQoJ3RkJyksXHJcblx0XHRcdHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzO1xyXG5cdFx0bGV0IG51bSA9IDA7XHJcblxyXG5cdFx0JHRyLmRhdGEoJ1hncmlkLmRhdGEnLCByb3dEYXRhKTtcclxuXHJcblx0XHQkLmVhY2goY29sTW9kZWxzLCBmdW5jdGlvbiAoaSwgY29sTW9kZWwpIHtcclxuXHRcdFx0bGV0IHZhbHVlID0gcm93RGF0YVtjb2xNb2RlbC5rZXldLFxyXG5cdFx0XHRcdCR0ZCA9ICR0ZHMuZXEoaSksXHJcblx0XHRcdFx0ZGF0YTtcclxuXHJcblx0XHRcdGlmIChjb2xNb2RlbC5oaWRkZW4pIHtcclxuXHRcdFx0XHQkdGQucmVtb3ZlKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bnVtKys7XHJcblx0XHRcdFx0ZGF0YSA9IGNvbE1vZGVsLmNlbGxGb3JtYXR0ZXIoJHRkLCB2YWx1ZSwgcm93RGF0YSwgZGF0YSk7XHJcblx0XHRcdFx0aWYgKG51bSAlIDIpIHtcclxuXHRcdFx0XHRcdCR0ZC5hZGRDbGFzcygnb2RkJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCR0ZC5hZGRDbGFzcygnZXZlbicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodHlwZW9mIChkYXRhKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRcdCR0ZC5odG1sKGRhdGEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0X3VwZGF0ZUhlYWQoKSB7XHJcblx0XHRjb25zdCBzZWxmID0gdGhpcyxcclxuXHRcdFx0c3RvcmFnZSA9IHRoaXMuc3RvcmFnZSxcclxuXHRcdFx0Y29sTW9kZWxzID0gc3RvcmFnZS5jb2xNb2RlbHMsXHJcblx0XHRcdHZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsLFxyXG5cdFx0XHQkaGVhZExhYmVscyA9IHN0b3JhZ2UuJGhlYWRMYWJlbHMsXHJcblx0XHRcdHNvcnRCeSA9IHt9O1xyXG5cclxuXHRcdHZpZXdNb2RlbC5zb3J0QnkuZm9yRWFjaChmdW5jdGlvbiAoc29ydFJ1bGUpIHtcclxuXHRcdFx0c29ydEJ5W3NvcnRSdWxlLmJ5XSA9IHNvcnRSdWxlLm9yZGVyO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29sTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGNvbE1vZGVsLCBpKSB7XHJcblx0XHRcdGNvbnN0ICRsYWJlbCA9ICRoZWFkTGFiZWxzLmVxKGkpLFxyXG5cdFx0XHRcdG9yZGVyID0gc29ydEJ5W2NvbE1vZGVsLmFsaWFzXTtcclxuXHRcdFx0aWYgKG9yZGVyKSB7XHJcblx0XHRcdFx0JGxhYmVsLmF0dHIoJ2RhdGEtc29ydCcsIG9yZGVyKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkbGFiZWwucmVtb3ZlQXR0cignZGF0YS1zb3J0Jyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxsO1xyXG4iLCJpbXBvcnQgb3BlcmF0b3JzIGZyb20gJy4vT3BlcmF0b3JzJztcclxuY2xhc3MgRmlsdGVyIHtcclxuXHRleGVjKGRhdGEsIGdyb3VwLCBnZXREYXRhKSB7XHJcblx0XHRjb25zdCBuZXdEYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0sIGkpID0+IHtcclxuXHRcdFx0Y29uc3QgZ2V0ID0gZ2V0RGF0YSgpLFxyXG5cdFx0XHRcdHN0YXRlID0gdGhpcy5fY2hlY2soZ3JvdXAsIGl0ZW0sIGdldCk7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG5ld0RhdGE7XHJcblx0fTtcclxuXHRwcml2YXRlIF9vcihydWxlcywgcm93RGF0YSwgZ2V0KSB7XHJcblx0XHRsZXQgaSA9IHJ1bGVzLmxlbmd0aDtcclxuXHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0Y29uc3QgcnVsZSA9IHJ1bGVzW2ldO1xyXG5cdFx0XHRpZiAoIW9wZXJhdG9yc1tydWxlLm9wXSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB2YWx1ZSA9IGdldChydWxlLmZpZWxkLCByb3dEYXRhKSxcclxuXHRcdFx0XHRzdGF0ZSA9IG9wZXJhdG9yc1tydWxlLm9wXShydWxlLmRhdGEsIHZhbHVlKTtcclxuXHRcdFx0aWYgKHN0YXRlKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9O1xyXG5cdHByaXZhdGUgX2FuZChydWxlcywgcm93RGF0YSwgZ2V0KSB7XHJcblx0XHRsZXQgaSA9IHJ1bGVzLmxlbmd0aDtcclxuXHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0Y29uc3QgcnVsZSA9IHJ1bGVzW2ldO1xyXG5cdFx0XHRpZiAoIW9wZXJhdG9yc1tydWxlLm9wXSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB2YWx1ZSA9IGdldChydWxlLmZpZWxkLCByb3dEYXRhKSxcclxuXHRcdFx0XHRzdGF0ZSA9IG9wZXJhdG9yc1tydWxlLm9wXShydWxlLmRhdGEsIHZhbHVlKTtcclxuXHRcdFx0aWYgKCFzdGF0ZSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxuXHRwcml2YXRlIF9jaGVjayhncm91cCwgcm93RGF0YSwgZ2V0KSB7XHJcblx0XHRjb25zdCBpc09yID0gZ3JvdXAucnVsZXMubGVuZ3RoICYmIFN0cmluZyhncm91cC5ncm91cE9wKS50b1VwcGVyQ2FzZSgpID09PSBcIk9SXCI7XHJcblx0XHRpZiAoJC5pc0FycmF5KGdyb3VwLnJ1bGVzKSAmJiBncm91cC5ydWxlcy5sZW5ndGgpIHtcclxuXHRcdFx0aWYgKGlzT3IpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fb3IoZ3JvdXAucnVsZXMsIHJvd0RhdGEsIGdldCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2FuZChncm91cC5ydWxlcywgcm93RGF0YSwgZ2V0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBGaWx0ZXIoKTsiLCIndXNlIHN0cmljdCc7XHJcbmNsYXNzIEZpbHRlclRvb2xiYXIge1xyXG5cdGNvbnN0cnVjdG9yKHN0b3JhZ2UsIHZpZXdNb2RlbCwgb3B0aW9ucykge1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHRcdHRoaXMuX2JpbmQoKTtcclxuXHRcdHRoaXMudGltZW91dE9uS2V5ZG93biA9IG51bGw7XHJcblx0fVxyXG5cdHRyaWdnZXJUb29sYmFyKCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZSxcclxuXHRcdFx0dmlld01vZGVsID0gdGhpcy52aWV3TW9kZWwsXHJcblx0XHRcdGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzLFxyXG5cdFx0XHRvcHRpb25zID0gdGhpcy5vcHRpb25zLFxyXG5cdFx0XHRydWxlcyA9IFtdLFxyXG5cdFx0XHRkZWZhdWx0U2VhcmNoID0gJ2NuJyxcclxuXHRcdFx0Z3JvdXBPcCA9IG9wdGlvbnMuZmlsdGVyVG9vbGJhckdyb3VwT3AgPT09ICdBTkQnID8gJ0FORCcgOiAnT1InO1xyXG5cdFx0bGV0IHJ1bGVHcm91cCA9IG51bGw7XHJcblxyXG5cdFx0aWYgKCFzdG9yYWdlLiRmaWx0ZXJUb29sYmFySXRlbXMpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblxyXG5cdFx0c3RvcmFnZS4kZmlsdGVyVG9vbGJhckl0ZW1zLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0Y29uc3QgJGZpbHRlciA9ICQodGhpcyksXHJcblx0XHRcdFx0JGVsZW0gPSAkZmlsdGVyLmZpbmQoJy5YZ3JpZC1maWx0ZXInKVxyXG5cdFx0XHRpZiAoJGVsZW0ubGVuZ3RoKSB7XHJcblx0XHRcdFx0Y29uc3QgY29sTW9kZWwgPSBjb2xNb2RlbHNbaV0sXHJcblx0XHRcdFx0XHRzZXR0aW5ncyA9IGNvbE1vZGVsLmZpbHRlclRvb2xiYXJTZXR0aW5ncyB8fCB7fSxcclxuXHRcdFx0XHRcdGZpbHRlck9wdGlvbiA9IGNvbE1vZGVsLmZpbHRlck9wdGlvbiB8fCBkZWZhdWx0U2VhcmNoLFxyXG5cdFx0XHRcdFx0ZmllbGROYW1lID0gY29sTW9kZWwuYWxpYXMgfHwgY29sTW9kZWwua2V5O1xyXG5cclxuXHRcdFx0XHRsZXQgdmFsdWUgPSAkZWxlbS52YWwoKTtcclxuXHJcblx0XHRcdFx0aWYgKHR5cGVvZiAoc2V0dGluZ3MudHJhbnNmb3JtRGF0YSkgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRcdHZhbHVlID0gc2V0dGluZ3MudHJhbnNmb3JtRGF0YSh2YWx1ZSwgc2V0dGluZ3MpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHZhbHVlIHx8IGZpbHRlck9wdGlvbiA9PT0gXCJudVwiIHx8IGZpbHRlck9wdGlvbiA9PT0gXCJublwiKSB7XHJcblx0XHRcdFx0XHRydWxlcy5wdXNoKHtcclxuXHRcdFx0XHRcdFx0ZmllbGQ6IGZpZWxkTmFtZSxcclxuXHRcdFx0XHRcdFx0b3A6IGZpbHRlck9wdGlvbixcclxuXHRcdFx0XHRcdFx0ZGF0YTogdmFsdWVcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKHJ1bGVzLmxlbmd0aCkge1xyXG5cdFx0XHRydWxlR3JvdXAgPSB7XHJcblx0XHRcdFx0Z3JvdXBPcCxcclxuXHRcdFx0XHRydWxlc1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRzdG9yYWdlLmZpbHRlciA9IHJ1bGVHcm91cDtcclxuXHR9O1xyXG5cclxuXHRfYmluZCgpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUub24oJ2tleXByZXNzJywgJ2lucHV0LlhncmlkLWlucHV0LlhncmlkLW9uRW50ZXInLCB0aGlzLl9oYW5kbGVyRmlsdGVyT25FbnRlci5iaW5kKHRoaXMpKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5vbigna2V5ZG93bicsICdpbnB1dC5YZ3JpZC1pbnB1dC5YZ3JpZC1vbktleWRvd24nLCB0aGlzLl9oYW5kbGVyRmlsdGVyT25LZXlkb3duLmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLm9uKCdjaGFuZ2UnLCAnLlhncmlkLWZpbHRlci5YZ3JpZC1vbkNoYW5nZScsIHRoaXMuX2hhbmRsZXJGaWx0ZXJPbkNoYW5nZS5iaW5kKHRoaXMpKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5vbignY2xpY2snLCAnLlhncmlkLXJlc2V0JywgdGhpcy5faGFuZGxlckZpbHRlck9uUmVzZXQuYmluZCh0aGlzKSk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUub24oJ2NsaWNrJywgJy5YZ3JpZC1vblN1Ym1pdCcsIHRoaXMuX2hhbmRsZXJGaWx0ZXJPblN1Ym1pdC5iaW5kKHRoaXMpKTtcclxuXHR9O1xyXG5cclxuXHRfaGFuZGxlckZpbHRlck9uU3VibWl0KGUpIHtcclxuXHRcdCQoZS5jdXJyZW50VGFyZ2V0KS5ibHVyKCk7XHJcblx0XHR0aGlzLnRyaWdnZXJUb29sYmFyKCk7XHJcblx0fTtcclxuXHJcblx0X2hhbmRsZXJGaWx0ZXJPblJlc2V0KGUpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdCRzZWxsID0gJChlLmN1cnJlbnRUYXJnZXQpLmJsdXIoKS5wYXJlbnRzKCcuWGdyaWQtZmlsdGVyLWNlbGw6ZXEoMCknKSxcclxuXHRcdFx0YWxpYXMgPSAkc2VsbC5hdHRyKCdkYXRhLWFsaWFzJyksXHJcblx0XHRcdCRjb250cm9sID0gJHNlbGwuZmluZCgnLlhncmlkLWZpbHRlcicpLFxyXG5cdFx0XHRjb2xNb2RlbCA9IHN0b3JhZ2UuY29sTW9kZWxzRGljdGlvbmFyeVthbGlhc10sXHJcblx0XHRcdGRhdGEgPSAkY29udHJvbC52YWwoKTtcclxuXHJcblx0XHRpZiAoY29sTW9kZWwpIHtcclxuXHRcdFx0aWYgKGNvbE1vZGVsLmZpbHRlclRvb2xiYXJTZXR0aW5ncy5mb3JtQ29udHJvbFR5cGUgPT09ICdzZWxlY3QnKSB7XHJcblx0XHRcdFx0JGNvbnRyb2wudmFsKFtdKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCRjb250cm9sLnZhbCgnJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy50cmlnZ2VyVG9vbGJhcigpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0X2hhbmRsZXJGaWx0ZXJPbkNoYW5nZShlKSB7XHJcblx0XHR0aGlzLnRyaWdnZXJUb29sYmFyKCk7XHJcblx0fTtcclxuXHRfaGFuZGxlckZpbHRlck9uS2V5ZG93bihlKSB7XHJcblxyXG5cdFx0dmFyIGtleSA9IGUud2hpY2g7XHJcblx0XHRzd2l0Y2ggKGtleSkge1xyXG5cdFx0XHRjYXNlIDEzOlxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0Y2FzZSA5OlxyXG5cdFx0XHRjYXNlIDE2OlxyXG5cdFx0XHRjYXNlIDM3OlxyXG5cdFx0XHRjYXNlIDM4OlxyXG5cdFx0XHRjYXNlIDM5OlxyXG5cdFx0XHRjYXNlIDQwOlxyXG5cdFx0XHRjYXNlIDI3OlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cclxuXHRcdFx0XHRpZiAodGhpcy50aW1lb3V0T25LZXlkb3duKSB7XHJcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0T25LZXlkb3duKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy50aW1lb3V0T25LZXlkb3duID0gc2V0VGltZW91dChcclxuXHRcdFx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy50cmlnZ2VyVG9vbGJhcigpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdDUwMFxyXG5cdFx0XHRcdCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0X2hhbmRsZXJGaWx0ZXJPbkVudGVyKGUpIHtcclxuXHRcdHZhciBrZXkgPSBlLmNoYXJDb2RlIHx8IGUua2V5Q29kZSB8fCAwO1xyXG5cdFx0aWYgKGtleSA9PT0gMTMpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR0aGlzLnRyaWdnZXJUb29sYmFyKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlclRvb2xiYXI7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyVG9vbGJhck1vZGVsIGltcGxlbWVudHMgSUZpbHRlclRvb2xiYXJNb2RlbCB7XHJcblx0Zm9ybUNvbnRyb2xUeXBlID0gJ3RleHQnO1xyXG5cdHNlbGVjdE9wdGlvbnMgPSBbXTtcclxuXHRwbGFjZWhvbGRlciA9ICcnO1xyXG5cdG9uRW50ZXIgPSB0cnVlO1xyXG5cdG9uS2V5ZG93biA9IGZhbHNlO1xyXG5cdG9uQ2hhbmdlID0gZmFsc2U7XHJcblx0YWxsb3dSZXNldEJ1dHRvbiA9IHRydWU7XHJcblx0YWxsb3dTdWJtaXRCdXR0b24gPSB0cnVlO1xyXG5cdHRyYW5zZm9ybURhdGE/OiBGdW5jdGlvbjsgXHJcblxyXG5cdGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XHJcblx0XHQkLmV4dGVuZCh0aGlzLCBzZXR0aW5ncyk7XHJcblx0XHRpZiAoIXRoaXMudHJhbnNmb3JtRGF0YSkge1xyXG5cdFx0XHRpZiAodGhpcy5mb3JtQ29udHJvbFR5cGUgPT09ICdzZWxlY3QnKSB7XHJcblx0XHRcdFx0dGhpcy50cmFuc2Zvcm1EYXRhID0gKChkYXRhKSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgcmVzdWx0O1xyXG5cdFx0XHRcdFx0Y29uc3Qgc2VsZWN0T3B0aW9ucyA9IHRoaXMuc2VsZWN0T3B0aW9ucztcclxuXHRcdFx0XHRcdGlmICgkLmlzQXJyYXkoZGF0YSkpIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0ID0gW107XHJcblx0XHRcdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgaXRlbSA9IHNlbGVjdE9wdGlvbnNba2V5XTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbS52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGtleSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXN1bHQubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmIChzZWxlY3RPcHRpb25zW2RhdGFdKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNlbGVjdE9wdGlvbnNbZGF0YV0udmFsdWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuIiwiY2xhc3MgRml4ZWRIZWFkZXIge1xyXG5cdGNvbnN0cnVjdG9yKHN0b3JhZ2UpIHtcclxuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblx0XHR0aGlzLnByb3BlcnRpZXMgPSB7XHJcblxyXG5cdFx0fVxyXG5cdFx0dGhpcy5fZXhlYygpO1xyXG5cdH1cclxuXHJcblx0cmVzaXplKCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZSxcclxuXHRcdFx0c2VsZiA9IHRoaXM7XHJcblx0XHRsZXQgdyA9IDA7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuZmluZCgnLlhncmlkLXRoZWFkLXcgaWZyYW1lJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRjb25zdCAkaWZyYW1lID0gJCh0aGlzKSxcclxuXHRcdFx0XHR3aWR0aCA9ICRpZnJhbWUud2lkdGgoKSxcclxuXHRcdFx0XHRhbGlhcyA9ICRpZnJhbWUuYXR0cignZGF0YS1hbGlhcycpO1xyXG5cdFx0XHRzZWxmLl9oYW5kbGVyUmVzaXplZENlbGxXaWR0aCh3aWR0aCwgaSwgYWxpYXMpO1xyXG5cdFx0fSk7XHJcblxyXG5cdH07XHJcblxyXG5cdF9leGVjKCkge1xyXG5cdFx0dGhpcy5fYnVpbGQoKTtcclxuXHRcdHRoaXMuX2JpbmQoKTtcclxuXHR9O1xyXG5cclxuXHRfYnVpbGQoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHRjZWxsV2lkdGhMaXN0ZW5lcnMgPSBbXSxcclxuXHRcdFx0Y29sTW9kZWxzID0gc3RvcmFnZS5jb2xNb2RlbHMsXHJcblx0XHRcdHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXM7XHJcblxyXG5cdFx0cHJvcGVydGllcy4kY2VsbFdpZHRoUmVjaXBpZW50cyA9IHN0b3JhZ2UuJGdyaWRUYWJsZS5maW5kKCcuWGdyaWQtdGJvZHktdyBpJyk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuZmluZCgnLlhncmlkLXRoZWFkLXcgdGQnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdGNvbnN0IGlmcmFtZSA9ICQodGhpcykuZmluZCgnaWZyYW1lJykuZ2V0KDApO1xyXG5cdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdkYXRhLWNvbCcsIGkpO1xyXG5cdFx0XHRjZWxsV2lkdGhMaXN0ZW5lcnMucHVzaChpZnJhbWUpO1xyXG5cdFx0fSk7XHJcblx0XHRwcm9wZXJ0aWVzLiRjZWxsV2lkdGhMaXN0ZW5lcnMgPSAkKGNlbGxXaWR0aExpc3RlbmVycyk7XHJcblx0fTtcclxuXHJcblx0X2JpbmQoKSB7XHJcblx0XHRjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG5cdFx0XHRzZWxmID0gdGhpcztcclxuXHJcblx0XHRwcm9wZXJ0aWVzLiRjZWxsV2lkdGhMaXN0ZW5lcnMuZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRjb25zdCBpZnJhbWUgPSB0aGlzLFxyXG5cdFx0XHRcdCRpZnJhbWUgPSAkKGlmcmFtZSk7XHJcblxyXG5cdFx0XHRzZWxmLl9oYW5kbGVyUmVzaXplZENlbGxXaWR0aCgkaWZyYW1lLndpZHRoKCksIGksICRpZnJhbWUuYXR0cignZGF0YS1hbGlhcycpKTtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0JChpZnJhbWUuY29udGVudFdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdHNlbGYuX2hhbmRsZXJSZXNpemVkQ2VsbFdpZHRoKCRpZnJhbWUud2lkdGgoKSwgaSwgJGlmcmFtZS5hdHRyKCdkYXRhLWFsaWFzJykpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LCAxMDApO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0X2hhbmRsZXJSZXNpemVkQ2VsbFdpZHRoKHdpZHRoLCBudW0sIGFsaWFzKSB7XHJcblx0XHRjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG5cdFx0XHQkaXRlbSA9IHByb3BlcnRpZXMuJGNlbGxXaWR0aFJlY2lwaWVudHMuZmlsdGVyKCdbZGF0YS1hbGlhcz1cIicgKyBhbGlhcyArICdcIl0nKTtcclxuXHRcdCRpdGVtLndpZHRoKHdpZHRoKTtcclxuXHRcdCRpdGVtLnBhcmVudCgpLndpZHRoKHdpZHRoKTtcclxuXHR9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZpeGVkSGVhZGVyOyIsImNsYXNzIE9wZXJhdG9ycyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmVxID0gdGhpcy5lcXVhbHM7XHJcblx0XHR0aGlzLm5lID0gdGhpcy5ub3RFcXVhbHM7XHJcblx0XHR0aGlzLmx0ID0gdGhpcy5sZXNzO1xyXG5cdFx0dGhpcy5sZSA9IHRoaXMubGVzc09yRXF1YWxzO1xyXG5cdFx0dGhpcy5ndCA9IHRoaXMuZ3JlYXRlcjtcclxuXHRcdHRoaXMuZ2UgPSB0aGlzLmdyZWF0ZXJPckVxdWFscztcclxuXHRcdHRoaXMuY24gPSB0aGlzLmNvbnRhaW5zO1xyXG5cdFx0dGhpcy5uYyA9ICgoLi4uYXJnKSA9PiB7XHJcblx0XHRcdHJldHVybiAhdGhpcy5jb250YWlucy5hcHBseSh0aGlzLCBhcmcpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmJ3ID0gdGhpcy5zdGFydHNXaXRoO1xyXG5cdFx0dGhpcy5ibiA9ICgoLi4uYXJnKSA9PiB7XHJcblx0XHRcdHJldHVybiAhdGhpcy5zdGFydHNXaXRoLmFwcGx5KHRoaXMsIGFyZyk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuZW4gPSAoKC4uLmFyZykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gIXRoaXMuZW5kc1dpdGguYXBwbHkodGhpcywgYXJnKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5ldyA9IHRoaXMuZW5kc1dpdGg7XHJcblx0XHR0aGlzLmluID0gdGhpcy5pbkFycmF5O1xyXG5cdFx0dGhpcy5uaSA9ICgoLi4uYXJnKSA9PiB7XHJcblx0XHRcdHJldHVybiAhdGhpcy5pbkFycmF5LmFwcGx5KHRoaXMsIGFyZyk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMubnUgPSB0aGlzLmlzTnVsbDtcclxuXHRcdHRoaXMubm4gPSAoKC4uLmFyZykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gIXRoaXMuaXNOdWxsLmFwcGx5KHRoaXMsIGFyZyk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdGVxdWFscyhhLCBiKSB7XHJcblx0XHRyZXR1cm4gYSA9PT0gYjtcclxuXHR9O1xyXG5cdG5vdEVxdWFscyhhLCBiKSB7XHJcblx0XHRyZXR1cm4gYSAhPT0gYjtcclxuXHR9O1xyXG5cdGlzTnVsbChhKSB7XHJcblx0XHRyZXR1cm4gYSA9PT0gbnVsbDtcclxuXHR9O1xyXG5cdGdyZWF0ZXIoYSwgYikge1xyXG5cdFx0cmV0dXJuIGEgPiBiO1xyXG5cdH07XHJcblx0bGVzcyhhLCBiKSB7XHJcblx0XHRyZXR1cm4gYSA8IGI7XHJcblx0fTtcclxuXHRncmVhdGVyT3JFcXVhbHMoYSwgYikge1xyXG5cdFx0cmV0dXJuIGEgPj0gYjtcclxuXHR9O1xyXG5cdGxlc3NPckVxdWFscyhhLCBiKSB7XHJcblx0XHRyZXR1cm4gYSA8PSBiO1xyXG5cdH07XHJcblx0aW5BcnJheShhcnJheSwgYikge1xyXG5cdFx0cmV0dXJuICQuaW5BcnJheShiLCBhcnJheSkgIT09IC0xO1xyXG5cdH07XHJcblx0c3RhcnRzV2l0aChhLCBiLCBpbnNlbnNpdGl2ZSkge1xyXG5cdFx0YSA9IFN0cmluZyhhKTtcclxuXHRcdGIgPSBTdHJpbmcoYik7XHJcblx0XHRpZiAoaW5zZW5zaXRpdmUpIHtcclxuXHRcdFx0YSA9IGEudG9VcHBlckNhc2UoKTtcclxuXHRcdFx0YiA9IGIudG9VcHBlckNhc2UoKTtcclxuXHRcdH1cclxuXHRcdGxldCBsZW5ndGggPSBhLmxlbmd0aCxcclxuXHRcdFx0c3RyID0gYS5zdWJzdHIoMCwgbGVuZ3RoKTtcclxuXHRcdHJldHVybiBzdHIgPT09IGJcclxuXHR9O1xyXG5cdGVuZHNXaXRoKGEsIGIsIGluc2Vuc2l0aXZlKSB7XHJcblx0XHRhID0gU3RyaW5nKGEpO1xyXG5cdFx0YiA9IFN0cmluZyhiKTtcclxuXHRcdGlmIChpbnNlbnNpdGl2ZSkge1xyXG5cdFx0XHRhID0gYS50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0XHRiID0gYi50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGxlbmd0aCA9IGIubGVuZ3RoICogLTEsXHJcblx0XHRcdHN0ciA9IGEuc3Vic3RyKGxlbmd0aCk7XHJcblx0XHRyZXR1cm4gc3RyID09PSBiO1xyXG5cdH07XHJcblx0Y29udGFpbnMoYSwgYiwgaW5zZW5zaXRpdmUpIHtcclxuXHRcdGEgPSBTdHJpbmcoYSk7XHJcblx0XHRiID0gU3RyaW5nKGIpO1xyXG5cdFx0aWYgKGluc2Vuc2l0aXZlKSB7XHJcblx0XHRcdGEgPSBhLnRvVXBwZXJDYXNlKCk7XHJcblx0XHRcdGIgPSBiLnRvVXBwZXJDYXNlKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYi5pbmRleE9mKGEpICE9PSAtMTtcclxuXHR9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBPcGVyYXRvcnMoKTsiLCIndXNlIHN0cmljdCc7XHJcbmNsYXNzIFBhZ2luYXRpb24ge1xyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMsIHN0b3JhZ2UsIHZpZXdNb2RlbCwgKSB7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cdFx0dGhpcy52aWV3TW9kZWwgPSB2aWV3TW9kZWw7XHJcblx0XHR0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xyXG5cclxuXHRcdHRoaXMuX3N1YnNjcmliZSgpO1xyXG5cdFx0dGhpcy5wYWdlKCk7XHJcblx0XHR0aGlzLnRvdGFsUGFnZXMoKTtcclxuXHRcdHRoaXMuZXhlYygpO1xyXG5cdH07XHJcblx0ZXhlYygpIHtcclxuXHRcdHRoaXMuX2JpbmQoKTtcclxuXHR9O1xyXG5cclxuXHRwYWdlKCkge1xyXG5cdFx0dGhpcy5zdG9yYWdlLiRwYWdpbmF0aW9uQm94LmZpbmQoJy5YZ3JpZC1jdXJyZW50LXBhZ2UnKS52YWwodGhpcy52aWV3TW9kZWwucGFnZSk7XHJcblx0fTtcclxuXHJcblx0dG90YWxQYWdlcygpIHtcclxuXHRcdHRoaXMuc3RvcmFnZS4kcGFnaW5hdGlvbkJveC5maW5kKCcuWGdyaWQtdG90YWwtcGFnZXMnKS50ZXh0KHRoaXMudmlld01vZGVsLnRvdGFsUGFnZXMpO1xyXG5cdH07XHJcblxyXG5cdF9zdWJzY3JpYmUoKSB7XHJcblx0XHRjb25zdCB2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbDtcclxuXHRcdHZpZXdNb2RlbC5vbigncGFnZScsIHRoaXMucGFnZS5iaW5kKHRoaXMpKTtcclxuXHRcdHZpZXdNb2RlbC5vbigndG90YWxQYWdlcycsIHRoaXMudG90YWxQYWdlcy5iaW5kKHRoaXMpKTtcclxuXHR9O1xyXG5cclxuXHRfYmluZCgpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRzdG9yYWdlLiRwYWdpbmF0aW9uQm94Lm9uKCdjbGljay54Z3JpZCcsICcuWGdyaWQtZmlyc3QnLCB0aGlzLl9oYW5kbGVyRmlyc3QuYmluZCh0aGlzKSk7XHJcblx0XHRzdG9yYWdlLiRwYWdpbmF0aW9uQm94Lm9uKCdjbGljay54Z3JpZCcsICcuWGdyaWQtcHJldicsIHRoaXMuX2hhbmRsZXJQcmV2LmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveC5vbignY2xpY2sueGdyaWQnLCAnLlhncmlkLW5leHQnLCB0aGlzLl9oYW5kbGVyTmV4dC5iaW5kKHRoaXMpKTtcclxuXHRcdHN0b3JhZ2UuJHBhZ2luYXRpb25Cb3gub24oJ2NsaWNrLnhncmlkJywgJy5YZ3JpZC1sYXN0JywgdGhpcy5faGFuZGxlckxhc3QuYmluZCh0aGlzKSk7XHJcblx0XHRzdG9yYWdlLiRwYWdpbmF0aW9uQm94Lm9uKCdrZXlwcmVzcy54Z3JpZCcsICcuWGdyaWQtY3VycmVudC1wYWdlJywgdGhpcy5faGFuZGxlckdvVG8uYmluZCh0aGlzKSk7XHJcblx0fTtcclxuXHJcblx0X2hhbmRsZXJGaXJzdChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRpZiAodGhpcy52aWV3TW9kZWwucGFnZSAhPT0gMSkge1xyXG5cdFx0XHR0aGlzLnZpZXdNb2RlbC5uZXdQYWdlID0gMTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdF9oYW5kbGVyTGFzdChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRpZiAodGhpcy52aWV3TW9kZWwucGFnZSAhPT0gdGhpcy52aWV3TW9kZWwudG90YWxQYWdlcykge1xyXG5cdFx0XHR0aGlzLnZpZXdNb2RlbC5uZXdQYWdlID0gdGhpcy52aWV3TW9kZWwudG90YWxQYWdlcztcclxuXHRcdH1cclxuXHR9O1xyXG5cdF9oYW5kbGVyTmV4dChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBwYWdlID0gdGhpcy52aWV3TW9kZWwucGFnZSArIDE7XHJcblx0XHRpZiAocGFnZSA8PSB0aGlzLnZpZXdNb2RlbC50b3RhbFBhZ2VzKSB7XHJcblx0XHRcdHRoaXMudmlld01vZGVsLm5ld1BhZ2UgPSBwYWdlO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0X2hhbmRsZXJQcmV2KGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IHBhZ2UgPSB0aGlzLnZpZXdNb2RlbC5wYWdlIC0gMTtcclxuXHRcdGlmIChwYWdlID4gMCkge1xyXG5cdFx0XHR0aGlzLnZpZXdNb2RlbC5uZXdQYWdlID0gcGFnZTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdF9oYW5kbGVyR29UbyhlKSB7XHJcblx0XHRpZiAoZS53aGljaCA9PT0gMTMpIHtcclxuXHRcdFx0bGV0IHBhZ2UgPSAkKGUuY3VycmVudFRhcmdldCkudmFsKCk7XHJcblx0XHRcdGlmICghaXNOYU4ocGFnZSkpIHtcclxuXHRcdFx0XHRwYWdlID0gK3BhZ2U7XHJcblx0XHRcdFx0aWYgKHBhZ2UgPCAxKSB7XHJcblx0XHRcdFx0XHRwYWdlID0gMTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHBhZ2UgPiB0aGlzLnZpZXdNb2RlbC50b3RhbFBhZ2VzKSB7XHJcblx0XHRcdFx0XHRwYWdlID0gdGhpcy52aWV3TW9kZWwudG90YWxQYWdlcztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy52aWV3TW9kZWwubmV3UGFnZSA9IHBhZ2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy52aWV3TW9kZWwucGFnZSA9IHRoaXMudmlld01vZGVsLm5ld1BhZ2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uOyIsImNsYXNzIFBpcGVzIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaW50ZWdlciA9IHRoaXMuaW50ZWdlci5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5pbnQgPSB0aGlzLmludGVnZXI7XHJcblxyXG5cdFx0dGhpcy5udW1lcmljID0gdGhpcy5udW1lcmljLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmZsb2F0ID0gdGhpcy5udW1lcmljO1xyXG5cdFx0dGhpcy5udW1iZXIgPSB0aGlzLm51bWVyaWM7XHJcblxyXG5cdFx0Ly90aGlzLmRhdGV0aW1lID0gdGhpcy5kYXRlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLnRleHQgPSAoKHZhbHVlLCByb3dEYXRhLCBjb2xNb2RlbCkgPT4ge1xyXG5cdFx0XHRpZiAoY29sTW9kZWwuaW5zZW5zaXRpdmUpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbnNlbnNpdGl2ZXRleHQuY2FsbCh0aGlzLCB2YWx1ZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2Vuc2l0aXZldGV4dC5jYWxsKHRoaXMsIHZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5pc05vdFplcm8gPSB7XHJcblx0XHRcdHVuZGVmaW5lZDogMVxyXG5cdFx0fTtcclxuXHJcblx0XHRbJycsIG51bGwsIGZhbHNlLCB0cnVlXS5mb3JFYWNoKChrZXkpID0+IHtcclxuXHRcdFx0dGhpcy5pc05vdFplcm9ba2V5XSA9IDE7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRnZXRCeVR5cGUodHlwZSkge1xyXG5cdFx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRcdGNhc2UgJ2ludCc6XHJcblx0XHRcdGNhc2UgJ2ludGVnZXInOlxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmludGVnZXI7XHJcblx0XHRcdGNhc2UgJ2Zsb2F0JzpcclxuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcclxuXHRcdFx0Y2FzZSAnbnVtZXJpYyc6XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubnVtZXJpYztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy50ZXh0O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bnVtZXJpYyh2YWx1ZSkge1xyXG5cdFx0bGV0IHJlc3VsdDtcclxuXHRcdGlmICh0aGlzLmlzTm90WmVyb1t2YWx1ZV0pIHtcclxuXHRcdFx0cmVzdWx0ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGlzTmFOKHZhbHVlKSkge1xyXG5cdFx0XHRcdHJlc3VsdCA9IHBhcnNlRmxvYXQoU3RyaW5nKHZhbHVlKS5yZXBsYWNlKC8sL2csICcuJykucmVwbGFjZSgvW1xcJCVdL2csICcnKSk7XHJcblx0XHRcdFx0cmVzdWx0ID0gaXNOYU4ocmVzdWx0KSA/IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSA6IHJlc3VsdDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQgPSArdmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fTtcclxuXHJcblx0aW50ZWdlcih2YWx1ZSkge1xyXG5cdFx0bGV0IHJlc3VsdDtcclxuXHRcdGlmICh0aGlzLmlzTm90WmVyb1t2YWx1ZV0pIHtcclxuXHRcdFx0cmVzdWx0ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGlzTmFOKHZhbHVlKSkge1xyXG5cdFx0XHRcdHJlc3VsdCA9IFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvW1xcJCwlXS9nLCAnJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzdWx0ID0gcGFyc2VJbnQocmVzdWx0KTtcclxuXHRcdFx0cmVzdWx0ID0gaXNOYU4ocmVzdWx0KSA/IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSA6IHJlc3VsdDtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fTtcclxuXHJcblx0aW5zZW5zaXRpdmV0ZXh0KHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gdmFsdWUgPyAkLnRyaW0oU3RyaW5nKHZhbHVlKSkgOiBcIlwiO1xyXG5cdH07XHJcblxyXG5cdHNlbnNpdGl2ZXRleHQodmFsdWUpIHtcclxuXHRcdHJldHVybiAodmFsdWUgPyAkLnRyaW0oU3RyaW5nKHZhbHVlKSkgOiBcIlwiKS50b0xvd2VyQ2FzZSgpO1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQaXBlcygpOyIsImltcG9ydCBDb2xNb2RlbCBmcm9tICcuL0NvbE1vZGVsJztcclxuaW1wb3J0IFNvcnRSdWxlIGZyb20gJy4vU29ydFJ1bGUnO1xyXG5pbXBvcnQgVmlld01vZGVsIGZyb20gJy4vVmlld01vZGVsJztcclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9TdG9yYWdlJ1xyXG5cclxuY2xhc3MgUHJvY2Vzc1NldHRpbmdzIHtcclxuXHR2aWV3TW9kZWw6IFZpZXdNb2RlbDtcclxuXHRzdG9yYWdlOiBTdG9yYWdlO1xyXG5cdHByb3BlcnRpZXM6IElQcm9jZXNzU2V0dGluZ3NQcm9wZXJ0aWVzO1xyXG5cdG9wdGlvbnM6IElQcm9jZXNzU2V0dGluZ3NPcHRpb25zXHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMsIHN0b3JhZ2UsIHZpZXdNb2RlbCkge1xyXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xyXG5cdFx0XHRjb2xNb2RlbHM6IFtdLFxyXG5cdFx0XHRmaWx0ZXJUb29sYmFyOiBmYWxzZVxyXG5cdFx0fSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0dGhpcy5wcm9wZXJ0aWVzID0ge1xyXG5cdFx0XHRzY3JvbGxiYXJXaWR0aDogbnVsbFxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHRcdHRoaXMuX2V4ZWMoKTtcclxuXHR9O1xyXG5cclxuXHRfZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XHJcblx0XHRsZXQgZGl2LCB3aWR0aDtcclxuXHRcdGlmICh0aGlzLnByb3BlcnRpZXMuc2Nyb2xsYmFyV2lkdGgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucHJvcGVydGllcy5zY3JvbGxiYXJXaWR0aDtcclxuXHRcdH1cclxuXHJcblx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGRpdi5pbm5lckhUTUwgPSAnPGRpdiBzdHlsZT1cIndpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotNTBweDt0b3A6LTUwcHg7b3ZlcmZsb3c6YXV0bztcIj48ZGl2IHN0eWxlPVwid2lkdGg6MXB4O2hlaWdodDoxMDBweDtcIj48L2Rpdj48L2Rpdj4nO1xyXG5cdFx0ZGl2ID0gZGl2LmZpcnN0Q2hpbGQ7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcblx0XHR3aWR0aCA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aDtcclxuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcclxuXHRcdHRoaXMucHJvcGVydGllcy5zY3JvbGxiYXJXaWR0aCA9IHdpZHRoO1xyXG5cdFx0cmV0dXJuIHdpZHRoO1xyXG5cdH07XHJcblxyXG5cdF9jb2x1bW5Nb2RlbCgpIHtcclxuXHRcdGNvbnN0IHsgc3RvcmFnZSwgb3B0aW9ucyB9ID0gdGhpcztcclxuXHRcdGNvbnN0IGNvbE1vZGVscyA9IFtdO1xyXG5cdFx0Y29uc3QgYWxpYXNlcyA9IHt9O1xyXG5cdFx0Y29uc3QgY29sTW9kZWxzRGljdGlvbmFyeSA9IHt9O1xyXG5cclxuXHRcdCQuZWFjaChvcHRpb25zLmNvbE1vZGVscywgKGksIG1vZGVsKSA9PiB7XHJcblx0XHRcdGNvbnN0IGNvbE1vZGVsID0gbmV3IENvbE1vZGVsKG1vZGVsLCBpKTtcclxuXHJcblx0XHRcdGlmICghYWxpYXNlc1tjb2xNb2RlbC5hbGlhc10pIHtcclxuXHRcdFx0XHRhbGlhc2VzW2NvbE1vZGVsLmFsaWFzXSA9IDE7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhyb3cge1xyXG5cdFx0XHRcdFx0dmFsdWU6IHtcclxuXHRcdFx0XHRcdFx0aTogaSxcclxuXHRcdFx0XHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkobW9kZWwpXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogJ2FsaWFzIGlzIG5vdCB1bmlxdWUnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ0Vycm9yOiBjb2xNb2RlbCdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y29sTW9kZWxzRGljdGlvbmFyeVtjb2xNb2RlbC5hbGlhc10gPSBjb2xNb2RlbDtcclxuXHRcdFx0Y29sTW9kZWxzLnB1c2goY29sTW9kZWwpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0c3RvcmFnZS5jb2xNb2RlbHMgPSBjb2xNb2RlbHM7XHJcblx0XHRzdG9yYWdlLmNvbE1vZGVsc0RpY3Rpb25hcnkgPSBjb2xNb2RlbHNEaWN0aW9uYXJ5O1xyXG5cdH07XHJcblxyXG5cdF9leGVjKCkge1xyXG5cdFx0Y29uc3QgeyBzdG9yYWdlIH0gPSB0aGlzO1xyXG5cclxuXHRcdHRoaXMuX2NvbHVtbk1vZGVsKCk7XHJcblx0XHRzdG9yYWdlLnNjcm9sbGJhcldpZHRoID0gdGhpcy5fZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcclxuXHRcdHRoaXMuX3Byb2Nlc3NTb3J0aW5nKCk7XHJcblx0fTtcclxuXHJcblx0X3Byb2Nlc3NTb3J0aW5nKCkge1xyXG5cdFx0Y29uc3Qge3ZpZXdNb2RlbCwgb3B0aW9uc30gPSB0aGlzO1xyXG5cdFx0bGV0IHNvcnRCeSA9IG9wdGlvbnMuc29ydEJ5LFxyXG5cdFx0XHRkYXRhID0gW107XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMuZmlsdGVyVG9vbGJhcikge1xyXG5cdFx0XHR2aWV3TW9kZWwuZmlsdGVyVG9vbGJhciA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRpZiAoc29ydEJ5ICYmIHR5cGVvZiAoc29ydEJ5KSA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0Y29uc3Qgc29ydEJ5SXRlbXMgPSBzb3J0QnkucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKS5zcGxpdCgnLCcpO1xyXG5cdFx0XHRpZiAoc29ydEJ5SXRlbXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0c29ydEJ5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSkge1xyXG5cdFx0XHRcdFx0Y29uc3Qgc29ydFJ1bGUgPSBpdGVtLnRyaW0oKS5zcGxpdCgnICcpO1xyXG5cdFx0XHRcdFx0Y29uc3QgYnkgPSBzb3J0UnVsZVswXTtcclxuXHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIChieSkgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHRcdGxldCBydWxlO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKFN0cmluZyhzb3J0UnVsZVsxXSkudG9VcHBlckNhc2UoKSA9PT0gJ0RFU0MnKSB7XHJcblx0XHRcdFx0XHRcdFx0cnVsZSA9IG5ldyBTb3J0UnVsZShieSwgJ0RFU0MnKTtcclxuXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cnVsZSA9IG5ldyBTb3J0UnVsZShieSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZGF0YS5wdXNoKHJ1bGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKCQuaXNBcnJheShzb3J0QnkpICYmIHNvcnRCeS5sZW5ndGgpIHtcclxuXHRcdFx0c29ydEJ5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRjb25zdCB7IGJ5LCBvcmRlciB9ID0gaXRlbTtcclxuXHRcdFx0XHRsZXQgcnVsZTtcclxuXHJcblx0XHRcdFx0aWYgKGJ5KSB7XHJcblx0XHRcdFx0XHRpZiAoU3RyaW5nKG9yZGVyKS50b1VwcGVyQ2FzZSgpICE9PSAnREVTQycpIHtcclxuXHRcdFx0XHRcdFx0cnVsZSA9IG5ldyBTb3J0UnVsZShieSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRydWxlID0gbmV3IFNvcnRSdWxlKGJ5LCAnREVTQycpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZGF0YS5wdXNoKHJ1bGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRpZiAoZGF0YS5sZW5ndGgpIHtcclxuXHRcdFx0dmlld01vZGVsLnNvcnRCeSA9IGRhdGE7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzU2V0dGluZ3M7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlcnlNb2RlbCBpbXBsZW1lbnRzIElRdWVyeU1vZGVsIHtcclxuXHRmaWx0ZXIgPSB7fTtcclxuXHRzb3J0ID0gW107XHJcblx0cm93cyA9IDA7XHJcblx0cGFnZSA9IDE7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuXHRcdCQuZXh0ZW5kKHRoaXMsIGRhdGEpO1xyXG5cdH1cclxufVxyXG4iLCJjbGFzcyBTb3J0IHtcclxuXHRleGVjKGRhdGEgPSBbXSwgcnVsZXMgPSBbXSkge1xyXG5cdFx0bGV0IHNvdXJjZTtcclxuXHRcdGlmICghZGF0YS5sZW5ndGggfHwgIXJ1bGVzLmxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdH1cclxuXHRcdHNvdXJjZSA9IHRoaXMuX2dldFNvdXJjZShkYXRhLCBydWxlcyk7XHJcblx0XHRzb3VyY2Uuc29ydCgoYSwgYikgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gMDtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDAsIGogPSBydWxlcy5sZW5ndGg7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGxldCBrZXkgPSBydWxlc1tpXS5ieTtcclxuXHRcdFx0XHRpZiAocnVsZXNbaV0ub3JkZXIgPT09ICdBU0MnKSB7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSB0aGlzLkFTQyhhLmZvcm1hdHRlZFtrZXldLCBiLmZvcm1hdHRlZFtrZXldKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSB0aGlzLkRFU0MoYS5mb3JtYXR0ZWRba2V5XSwgYi5mb3JtYXR0ZWRba2V5XSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHJlc3VsdCAhPT0gMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHNvdXJjZS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRcdFx0cmV0dXJuIGl0ZW0uXztcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0QVNDKGEsIGIpIHtcclxuXHRcdGlmIChhIDwgYikge1xyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblx0XHRpZiAoYSA+IGIpIHtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gMDtcclxuXHR9O1xyXG5cclxuXHRERVNDKGEsIGIpIHtcclxuXHRcdGlmIChhIDwgYikge1xyXG5cdFx0XHRyZXR1cm4gMTtcclxuXHRcdH1cclxuXHRcdGlmIChhID4gYikge1xyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gMDtcclxuXHR9O1xyXG5cdF9nZXRTb3VyY2UoZGF0YSwgcnVsZXMpIHtcclxuXHRcdHJldHVybiBkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG5cdFx0XHRsZXQgZm9ybWF0dGVkID0ge307XHJcblx0XHRcdHJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcclxuXHRcdFx0XHRmb3JtYXR0ZWRbcnVsZS5ieV0gPSBydWxlLmdldChpdGVtW3J1bGUuYnldLCBpdGVtLCBydWxlLmNvbE1vZGVsLCBkYXRhKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XzogaXRlbSxcclxuXHRcdFx0XHRmb3JtYXR0ZWQsXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBTb3J0KCk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ydFJ1bGUgaW1wbGVtZW50cyBJU29ydFJ1bGUge1xyXG5cdGJ5OiBzdHJpbmc7XHJcblx0b3JkZXI6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoYnksIG9yZGVyID0gJ0FTQycpIHtcclxuXHRcdHRoaXMuYnkgPSBieTtcclxuXHRcdHRoaXMub3JkZXIgPSBvcmRlcjtcclxuXHR9XHJcblx0dHJpZ2dlck9yZGVyKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMub3JkZXIgPT09ICdBU0MnKSB7XHJcblx0XHRcdHRoaXMub3JkZXIgPSAnREVTQyc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLm9yZGVyID0gJ0FTQyc7XHJcblx0XHR9XHJcblx0fTtcclxufTsiLCJpbXBvcnQgU29ydFJ1bGUgZnJvbSAnLi9Tb3J0UnVsZSc7XHJcbmNsYXNzIFNvcnRpbmcge1xyXG5cdGNvbnN0cnVjdG9yKHN0b3JhZ2UsIHZpZXdNb2RlbCwgb3B0aW9ucykge1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHRcdHRoaXMuYmluZCgpO1xyXG5cdH07XHJcblx0c29ydEJ5QWxpYXMoYWxpYXMpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdHZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsLFxyXG5cdFx0XHRjb2xNb2RlbCA9IHN0b3JhZ2UuY29sTW9kZWxzRGljdGlvbmFyeVthbGlhc107XHJcblx0XHRsZXQgc29ydEJ5O1xyXG5cdFx0aWYgKGNvbE1vZGVsKSB7XHJcblx0XHRcdHNvcnRCeSA9IHZpZXdNb2RlbC5zb3J0Qnk7XHJcblx0XHRcdGxldCBpID0gc29ydEJ5Lmxlbmd0aCxcclxuXHRcdFx0XHRzb3J0UnVsZTtcclxuXHJcblx0XHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0XHRpZiAoc29ydEJ5W2ldLmJ5ID09PSBhbGlhcykge1xyXG5cdFx0XHRcdFx0c29ydFJ1bGUgPSBzb3J0Qnkuc3BsaWNlKGksIDEpWzBdO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIXNvcnRSdWxlKSB7XHJcblx0XHRcdFx0c29ydFJ1bGUgPSBuZXcgU29ydFJ1bGUoYWxpYXMpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNvcnRSdWxlLnRyaWdnZXJPcmRlcigpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLm11bHRpU29ydGluZykge1xyXG5cdFx0XHRcdHNvcnRCeS51bnNoaWZ0KHNvcnRSdWxlKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNvcnRCeSA9IFtzb3J0UnVsZV1cclxuXHRcdFx0fVxyXG5cdFx0XHR2aWV3TW9kZWwuc29ydEJ5ID0gc29ydEJ5O1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGJpbmQoKSB7XHJcblx0XHRjb25zdCAkaGVhZFRhYmxlID0gdGhpcy5zdG9yYWdlLiRoZWFkVGFibGU7XHJcblx0XHR0aGlzLl9vZmYoKTtcclxuXHRcdCRoZWFkVGFibGUub24oJ2NsaWNrLlhncmlkJywgJy5YZ3JpZC10aGVhZC1sYWJlbC5zb3J0YWJsZScsIHRoaXMuX2hhbmRsZXJTb3J0Q29sdW1uLmJpbmQodGhpcykpO1xyXG5cdH07XHJcblxyXG5cdF9vZmYoKSB7XHJcblx0XHR0aGlzLnN0b3JhZ2UuJGhlYWRUYWJsZS5vZmYoJy5YZ3JpZCcpO1xyXG5cdH07XHJcblxyXG5cdF9oYW5kbGVyU29ydENvbHVtbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCAkaXRlbSA9ICQoZS5jdXJyZW50VGFyZ2V0KSxcclxuXHRcdFx0YWxpYXMgPSAkaXRlbS5hdHRyKCdkYXRhLWFsaWFzJyksXHJcblx0XHRcdGNvbG1vZGVsID0gdGhpcy5zdG9yYWdlLmNvbE1vZGVsc0RpY3Rpb25hcnlbYWxpYXNdO1xyXG5cdFx0JGl0ZW0uYmx1cigpO1xyXG5cdFx0aWYgKGNvbG1vZGVsICYmIGNvbG1vZGVsLnNvcnRhYmxlKSB7XHJcblx0XHRcdHRoaXMuc29ydEJ5QWxpYXMoYWxpYXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb3J0aW5nOyIsImNsYXNzIFN0b3JhZ2Uge1xyXG5cdGNvbnN0cnVjdG9yKG1vZGVsKSB7XHJcblxyXG5cdFx0dGhpcy5fbW9kZWwgPSAkLmV4dGVuZCh7XHJcblx0XHRcdCRib3g6IG51bGwsXHJcblx0XHRcdCRoZWFkVGFibGU6IG51bGwsXHJcblx0XHRcdCRncmlkVGFibGU6IG51bGwsXHJcblx0XHRcdCRoZWFkTGFiZWxzOiBudWxsLFxyXG5cdFx0XHQkcGFnaW5hdGlvbkJveDogbnVsbCxcclxuXHRcdFx0JGZpbHRlclRvb2xiYXJJdGVtczogbnVsbCxcclxuXHRcdFx0cXVlcnk6IG51bGwsXHJcblx0XHRcdHNjcm9sbGJhcldpZHRoOiAwLFxyXG5cdFx0XHRjb2xNb2RlbHM6IFtdLFxyXG5cdFx0XHRjb2xNb2RlbHNEaWN0aW9uYXJ5OiB7fSxcclxuXHRcdFx0ZmlsdGVyOiBudWxsLFxyXG5cdFx0XHRkYXRhOiBbXSxcclxuXHRcdFx0cHJvY2Vzc2VkRGF0YTogW11cclxuXHRcdH0sIG1vZGVsKVxyXG5cdFx0dGhpcy5fc3Vic2NyaWJlcnMgPSB7fTtcclxuXHR9XHJcblxyXG5cdGdldCAkYm94KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLiRib3g7XHJcblx0fVxyXG5cclxuXHRnZXQgJGhlYWRUYWJsZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kaGVhZFRhYmxlO1xyXG5cdH07XHJcblx0c2V0ICRoZWFkVGFibGUodmFsdWUpIHtcclxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mICQpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuJGhlYWRUYWJsZSA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnJGhlYWRUYWJsZScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCAkZ3JpZFRhYmxlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLiRncmlkVGFibGU7XHJcblx0fTtcclxuXHRzZXQgJGdyaWRUYWJsZSh2YWx1ZSkge1xyXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgJCkge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC4kZ3JpZFRhYmxlID0gdmFsdWU7XHJcblx0XHRcdHRoaXMubm90aWZ5KCckZ3JpZFRhYmxlJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0ICRoZWFkTGFiZWxzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLiRoZWFkTGFiZWxzO1xyXG5cdH07XHJcblx0c2V0ICRoZWFkTGFiZWxzKHZhbHVlKSB7XHJcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiAkKSB7XHJcblx0XHRcdHRoaXMuX21vZGVsLiRoZWFkTGFiZWxzID0gdmFsdWU7XHJcblx0XHRcdHRoaXMubm90aWZ5KCckaGVhZExhYmVscycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCAkcGFnaW5hdGlvbkJveCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kcGFnaW5hdGlvbkJveDtcclxuXHR9O1xyXG5cdHNldCAkcGFnaW5hdGlvbkJveCh2YWx1ZSkge1xyXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgJCkge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC4kcGFnaW5hdGlvbkJveCA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnJHBhZ2luYXRpb25Cb3gnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgJGZpbHRlclRvb2xiYXJJdGVtcygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kZmlsdGVyVG9vbGJhckl0ZW1zO1xyXG5cdH07XHJcblx0c2V0ICRmaWx0ZXJUb29sYmFySXRlbXModmFsdWUpIHtcclxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mICQpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuJGZpbHRlclRvb2xiYXJJdGVtcyA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnJGZpbHRlclRvb2xiYXJJdGVtcycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBzY3JvbGxiYXJXaWR0aCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5zY3JvbGxiYXJXaWR0aDtcclxuXHR9O1xyXG5cclxuXHRzZXQgc2Nyb2xsYmFyV2lkdGgodmFsdWUpIHtcclxuXHRcdGlmICh0eXBlb2YgKHZhbHVlKSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZSA+IDApIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuc2Nyb2xsYmFyV2lkdGggPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ3Njcm9sbGJhcldpZHRoJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IGNvbE1vZGVscygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5jb2xNb2RlbHM7XHJcblx0fTtcclxuXHRzZXQgY29sTW9kZWxzKHZhbHVlKSB7XHJcblx0XHRpZiAoJC5pc0FycmF5KHZhbHVlKSkge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC5jb2xNb2RlbHMgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ2NvbE1vZGVscycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBjb2xNb2RlbHNEaWN0aW9uYXJ5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLmNvbE1vZGVsc0RpY3Rpb25hcnk7XHJcblx0fTtcclxuXHRzZXQgY29sTW9kZWxzRGljdGlvbmFyeSh2YWx1ZSkge1xyXG5cdFx0dGhpcy5fbW9kZWwuY29sTW9kZWxzRGljdGlvbmFyeSA9IHZhbHVlO1xyXG5cdFx0dGhpcy5ub3RpZnkoJ2NvbE1vZGVsc0RpY3Rpb25hcnknLCB0aGlzKTtcclxuXHR9O1xyXG5cdFxyXG5cdGdldCBmaWx0ZXIoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuZmlsdGVyO1xyXG5cdH07XHJcblx0c2V0IGZpbHRlcihkYXRhKSB7XHJcblx0XHRpZiAoZGF0YSA9PT0gbnVsbCB8fCB0eXBlb2YgKGRhdGEpID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC5maWx0ZXIgPSBkYXRhO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnZmlsdGVyJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuZGF0YTtcclxuXHR9O1xyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdGlmICgkLmlzQXJyYXkoZGF0YSkpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuZGF0YSA9IGRhdGE7XHJcblx0XHRcdHRoaXMubm90aWZ5KCdkYXRhJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IHF1ZXJ5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLnF1ZXJ5O1xyXG5cdH07XHJcblx0c2V0IHF1ZXJ5KGRhdGEpIHtcclxuXHRcdHRoaXMuX21vZGVsLnF1ZXJ5ID0gZGF0YTtcclxuXHRcdHRoaXMubm90aWZ5KCdxdWVyeScsIHRoaXMpO1xyXG5cdH07XHJcblxyXG5cdGdldCBwcm9jZXNzZWREYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLnF1ZXJ5O1xyXG5cdH07XHJcblx0c2V0IHByb2Nlc3NlZERhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fbW9kZWwucHJvY2Vzc2VkRGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLm5vdGlmeSgncHJvY2Vzc2VkRGF0YScsIHRoaXMpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0b24obmFtZSwgc3Vic2NyaWJlcikge1xyXG5cdFx0dmFyIHN0b3JlZ2UgPSB0aGlzLl9nZXRTdG9yYWdlKG5hbWUpO1xyXG5cdFx0c3RvcmVnZS5wdXNoKHN1YnNjcmliZXIpO1xyXG5cdH07XHJcblxyXG5cdG5vdGlmeShuYW1lLCBkYXRhKSB7XHJcblx0XHR2YXIgc3RvcmVnZSA9IHRoaXMuX2dldFN0b3JhZ2UobmFtZSk7XHJcblx0XHQkLmVhY2goc3RvcmVnZSwgZnVuY3Rpb24gKGksIHN1YnNjcmliZXIpIHtcclxuXHRcdFx0bGV0IFsuLi5hcmddID0gW2RhdGEsIG5hbWUsIGldO1xyXG5cdFx0XHRzdWJzY3JpYmVyLmFwcGx5KHN1YnNjcmliZXIsIGFyZyk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRfZ2V0U3RvcmFnZShuYW1lKSB7XHJcblx0XHRjb25zdCBzdWJzY3JpYmVycyA9IHRoaXMuX3N1YnNjcmliZXJzO1xyXG5cdFx0aWYgKCFzdWJzY3JpYmVyc1tuYW1lXSkge1xyXG5cdFx0XHRzdWJzY3JpYmVyc1tuYW1lXSA9IFtdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN1YnNjcmliZXJzW25hbWVdO1xyXG5cdH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTsiLCIndXNlIHN0cmljdCc7XHJcbmNsYXNzIFRvb2xzIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMubm93ID0gRGF0ZS5ub3cgfHwgKCgpID0+IHsgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpOyB9KTtcclxuXHR9XHJcblxyXG5cdGV4ZWN1dGUoZnVuY3Rpb25zLCBhcmdzLCBjb250ZXh0KSB7XHJcblx0XHRjb25zdCBhcHBseSA9IGZ1bmN0aW9uIChmb28pIHtcclxuXHRcdFx0aWYgKHR5cGVvZiAoZm9vKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdGZvby5hcHBseShjb250ZXh0ID8gY29udGV4dCA6IGZvbywgYXJncylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICgkLmlzQXJyYXkoZnVuY3Rpb25zKSkge1xyXG5cdFx0XHRmdW5jdGlvbnMuZm9yRWFjaChhcHBseSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhcHBseShmdW5jdGlvbnMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGluc2VydEVsZW1lbnQoJGNvbnRhaW5lciwgc2VhcmNoU3RyLCByZXBsYWNlbWVudCkge1xyXG5cdFx0Y29uc3QgJHJlcGxhY2VtZW50ID0gJChyZXBsYWNlbWVudCk7XHJcblxyXG5cdFx0aWYgKCEkcmVwbGFjZW1lbnQubGVuZ3RoKSB7XHJcblx0XHRcdHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VtZW50KTtcclxuXHRcdH1cclxuXHRcdCRjb250YWluZXIuZmluZChcIjpub3QoaWZyYW1lKVwiKS5hZGRCYWNrKCkuY29udGVudHMoKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5ub2RlVHlwZSA9PT0gMztcclxuXHRcdH0pLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLmluZGV4T2Yoc2VhcmNoU3RyKSAhPT0gLTEpIHtcclxuXHRcdFx0XHRpZiAoJHJlcGxhY2VtZW50Lmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5hZnRlcigkcmVwbGFjZW1lbnQpO1xyXG5cdFx0XHRcdFx0Y29uc3Qgc3RyID0gdGhpcy5kYXRhLFxyXG5cdFx0XHRcdFx0XHRwYXJ0MSA9IHN0ci5zdWJzdHIoMCwgc3RyLmluZGV4T2Yoc2VhcmNoU3RyKSksXHJcblx0XHRcdFx0XHRcdHBhcnQyID0gc3RyLnN1YnN0cihwYXJ0MS5sZW5ndGggKyBzZWFyY2hTdHIubGVuZ3RoLCBzdHIubGVuZ3RoKTtcclxuXHRcdFx0XHRcdGlmICghcGFydDEubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAocGFydDIubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdGlmIChwYXJ0MS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRhdGEgPSBwYXJ0MTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQkcmVwbGFjZW1lbnQuYWZ0ZXIocGFydDIpXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBhcnQxLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEgPSBwYXJ0MTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2Uoc2VhcmNoU3RyLHJlcGxhY2VtZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dGhyb3R0bGUoZnVuYywgd2FpdCA9IDEwKSB7XHJcblx0XHRsZXQgY29udGV4dCxcclxuXHRcdFx0YXJncyxcclxuXHRcdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKC4uLnByb3BzKSB7XHJcblx0XHRcdGNvbnRleHQgPSB0aGlzO1xyXG5cdFx0XHRhcmdzID0gcHJvcHM7XHJcblx0XHRcdGlmICghY29udGV4dCkge1xyXG5cdFx0XHRcdGNvbnRleHQgPSBmdW5jXHJcblx0XHRcdH0gZWxzZSBpZiAoY29udGV4dCA9PT0gd2luZG93KSB7XHJcblx0XHRcdFx0Y29udGV4dCA9IGZ1bmM7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCF0aW1lb3V0KSB7XHJcblx0XHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0XHRcdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRcdFx0XHRmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdFx0XHRcdH0sIHdhaXQpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBUb29scygpOyIsImNsYXNzIFZpZXdNb2RlbCB7XHJcblx0bW9kZWw6IElWaWV3TW9kZWw7XHJcblx0c3Vic2NyaWJlcnM6IHtba2V5OiBzdHJpbmddOiBGdW5jdGlvbltdfTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLm1vZGVsID0ge1xyXG5cdFx0XHRyb3dzOiAxMCxcclxuXHRcdFx0dG90YWxSb3dzOiAwLFxyXG5cdFx0XHRwYWdlOiAxLFxyXG5cdFx0XHR0b3RhbFBhZ2VzOiAwLFxyXG5cdFx0XHRuZXdQYWdlOiAxLFxyXG5cdFx0XHRkYXRhOiBbXSxcclxuXHRcdFx0c29ydEJ5OiBbXSxcclxuXHRcdFx0ZmlsdGVyVG9vbGJhcjogZmFsc2VcclxuXHRcdH1cclxuXHRcdHRoaXMuc3Vic2NyaWJlcnMgPSB7fTtcclxuXHR9XHJcblxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwuZGF0YTtcclxuXHR9O1xyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdGlmICgkLmlzQXJyYXkoZGF0YSkpIHtcclxuXHRcdFx0dGhpcy5tb2RlbC5kYXRhID0gZGF0YTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ2RhdGEnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgc29ydEJ5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwuc29ydEJ5O1xyXG5cdH07XHJcblx0c2V0IHNvcnRCeShkYXRhKSB7XHJcblx0XHRpZiAoJC5pc0FycmF5KGRhdGEpKSB7XHJcblx0XHRcdHRoaXMubW9kZWwuc29ydEJ5ID0gZGF0YTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ3NvcnRCeScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCB0b3RhbFJvd3MoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb2RlbC50b3RhbFJvd3M7XHJcblx0fTtcclxuXHRzZXQgdG90YWxSb3dzKHRvdGFsUm93cykge1xyXG5cdFx0aWYgKHR5cGVvZiAodG90YWxSb3dzKSA9PT0gXCJudW1iZXJcIiAmJiB0b3RhbFJvd3MgPiAtMSkge1xyXG5cdFx0XHR0aGlzLm1vZGVsLnRvdGFsUm93cyA9IHRvdGFsUm93cztcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ3RvdGFsUm93cycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCB0b3RhbFBhZ2VzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwudG90YWxQYWdlcztcclxuXHR9O1xyXG5cdHNldCB0b3RhbFBhZ2VzKHRvdGFsUGFnZXMpIHtcclxuXHRcdGlmICh0eXBlb2YgKHRvdGFsUGFnZXMpID09PSBcIm51bWJlclwiICYmIHRvdGFsUGFnZXMgPiAtMSkge1xyXG5cdFx0XHR0aGlzLm1vZGVsLnRvdGFsUGFnZXMgPSB0b3RhbFBhZ2VzO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgndG90YWxQYWdlcycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCByb3dzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwucm93cztcclxuXHR9O1xyXG5cdHNldCByb3dzKHJvd3MpIHtcclxuXHRcdGlmICh0eXBlb2YgKHJvd3MpID09PSBcIm51bWJlclwiICYmIHJvd3MgPiAtMSkge1xyXG5cdFx0XHR0aGlzLm1vZGVsLnJvd3MgPSByb3dzO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgncm93cycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBwYWdlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwucGFnZTtcclxuXHR9O1xyXG5cdHNldCBwYWdlKHBhZ2UpIHtcclxuXHRcdGlmICh0eXBlb2YgKHBhZ2UpID09PSBcIm51bWJlclwiICYmIHBhZ2UgPiAtMSkge1xyXG5cdFx0XHR0aGlzLm1vZGVsLnBhZ2UgPSBwYWdlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgncGFnZScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBuZXdQYWdlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwubmV3UGFnZTtcclxuXHR9O1xyXG5cdHNldCBuZXdQYWdlKHBhZ2UpIHtcclxuXHRcdGlmICh0eXBlb2YgKHBhZ2UpID09PSBcIm51bWJlclwiICYmIHBhZ2UgPiAtMSkge1xyXG5cdFx0XHR0aGlzLm1vZGVsLm5ld1BhZ2UgPSBwYWdlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnbmV3UGFnZScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBmaWx0ZXJUb29sYmFyKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwuZmlsdGVyVG9vbGJhcjtcclxuXHR9O1xyXG5cdHNldCBmaWx0ZXJUb29sYmFyKGRhdGE6IGJvb2xlYW4pIHtcclxuXHRcdHRoaXMubW9kZWwuZmlsdGVyVG9vbGJhciA9IGRhdGE7XHJcblx0XHR0aGlzLm5vdGlmeSgnZmlsdGVyVG9vbGJhcicsIHRoaXMpO1xyXG5cdH07XHJcblxyXG5cdG9uKG5hbWUsIHN1YnNjcmliZXIpIHtcclxuXHRcdHZhciBzdG9yZWdlID0gdGhpcy5fZ2V0U3RvcmFnZShuYW1lKTtcclxuXHRcdHN0b3JlZ2UucHVzaChzdWJzY3JpYmVyKTtcclxuXHR9O1xyXG5cclxuXHRub3RpZnkobmFtZSwgZGF0YSkge1xyXG5cdFx0dmFyIHN0b3JlZ2UgPSB0aGlzLl9nZXRTdG9yYWdlKG5hbWUpO1xyXG5cdFx0JC5lYWNoKHN0b3JlZ2UsIGZ1bmN0aW9uIChpLCBzdWJzY3JpYmVyKSB7XHJcblx0XHRcdGxldCBbLi4uYXJnXSA9IFtkYXRhLCBuYW1lLCBpXTtcclxuXHRcdFx0c3Vic2NyaWJlci5hcHBseShzdWJzY3JpYmVyLCBhcmcpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0X2dldFN0b3JhZ2UobmFtZSkge1xyXG5cdFx0Y29uc3Qgc3Vic2NyaWJlcnMgPSB0aGlzLnN1YnNjcmliZXJzO1xyXG5cdFx0aWYgKCFzdWJzY3JpYmVyc1tuYW1lXSkge1xyXG5cdFx0XHRzdWJzY3JpYmVyc1tuYW1lXSA9IFtdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN1YnNjcmliZXJzW25hbWVdO1xyXG5cdH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVmlld01vZGVsOyIsImltcG9ydCBWaWV3TW9kZWwgZnJvbSAnLi9WaWV3TW9kZWwnO1xyXG5pbXBvcnQgUHJvY2Vzc1NldHRpbmdzIGZyb20gJy4vUHJvY2Vzc1NldHRpbmdzJztcclxuaW1wb3J0IEJ1aWxkSW5mcmFzdHJ1Y3R1cmUgZnJvbSAnLi9CdWlsZEluZnJhc3RydWN0dXJlJztcclxuaW1wb3J0IEZpbHRlclRvb2xiYXIgZnJvbSAnLi9GaWx0ZXJUb29sYmFyJztcclxuaW1wb3J0IFNvcnRpbmcgZnJvbSAnLi9Tb3J0aW5nJztcclxuaW1wb3J0IERpc3BsYXkgZnJvbSAnLi9EaXNwbGF5JztcclxuaW1wb3J0IEZpeGVkSGVhZGVyIGZyb20gJy4vRml4ZWRIZWFkZXInO1xyXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL1N0b3JhZ2UnXHJcbmltcG9ydCBGaWxsIGZyb20gJy4vRmlsbCc7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vUGFnaW5hdGlvbic7XHJcbmltcG9ydCB0b29scyBmcm9tICcuL1Rvb2xzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhncmlkIHtcclxuXHRvcHRpb25zOiBJT3B0aW9ucztcclxuXHRwcm9wZXJ0aWVzOiBJWGdyaWRQcm9wZXJ0aWVzO1xyXG5cdFZpZXdNb2RlbDogVmlld01vZGVsO1xyXG5cdFByb2Nlc3NTZXR0aW5nczogUHJvY2Vzc1NldHRpbmdzO1xyXG5cdEJ1aWxkSW5mcmFzdHJ1Y3R1cmU6IEJ1aWxkSW5mcmFzdHJ1Y3R1cmU7XHJcblx0U29ydGluZzogU29ydGluZztcclxuXHRTdG9yYWdlOiBTdG9yYWdlO1xyXG5cdEZpbGw6IEZpbGw7XHJcblx0RGlzcGxheTogRGlzcGxheTtcclxuXHRGaXhlZEhlYWRlcjogRml4ZWRIZWFkZXI7XHJcblx0RmlsdGVyVG9vbGJhcjogRmlsdGVyVG9vbGJhcjtcclxuXHRQYWdpbmF0aW9uOiBQYWdpbmF0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zOiBJT3B0aW9ucywgJGJveDogSlF1ZXJ5KSB7XHJcblx0XHR0aGlzLnByb3BlcnRpZXMgPSB7XHJcblx0XHRcdCRib3gsXHJcblx0XHRcdGRhdGE6IFtdXHJcblx0XHR9XHJcblx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7XHJcblx0XHRcdGJlZm9yZVJlcXVlc3Q6IFtdLFxyXG5cdFx0XHRhZnRlclJlc3BvbnNlOiBbXSxcclxuXHRcdFx0c29ydEJ5OiBbXSxcclxuXHRcdFx0cGFnaW5hdGlvblNlbGVjdG9yOiAnJyxcclxuXHRcdFx0YWpheFR5cGU6ICdQT1NUJyxcclxuXHRcdFx0ZmlsdGVyVG9vbGJhckdyb3VwT3A6ICdBTkQnLFxyXG5cdFx0XHR1cmw6ICcnLFxyXG5cdFx0XHRtdWx0aVNvcnRpbmc6IGZhbHNlLFxyXG5cdFx0XHRmaWx0ZXJUb29sYmFyOiBmYWxzZVxyXG5cdFx0fSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0dGhpcy5TdG9yYWdlID0gbmV3IFN0b3JhZ2UoeyAkYm94IH0pXHJcblx0XHR0aGlzLl9leGVjKCk7XHJcblx0fTtcclxuXHJcblx0YWpheEZ1bmN0aW9uKHF1ZXJ5T2JqZWN0OiBhbnksIHVybDogc3RyaW5nKSB7XHJcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cdFx0cmV0dXJuICQuYWpheCh7XHJcblx0XHRcdHVybDogdXJsLFxyXG5cdFx0XHRkYXRhOiBxdWVyeU9iamVjdCxcclxuXHRcdFx0dHlwZTogb3B0aW9ucy5hamF4VHlwZSxcclxuXHRcdFx0ZGF0YVR5cGU6ICdqc29uJ1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRfcmVzcG9uc2UocmVzcG9uc2VPYmplY3Q6IElSZXNwb25zZSkge1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHRcdGlmIChvcHRpb25zLmFmdGVyUmVzcG9uc2UpIHtcclxuXHRcdFx0dG9vbHMuZXhlY3V0ZShvcHRpb25zLmFmdGVyUmVzcG9uc2UsIFtyZXNwb25zZU9iamVjdF0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdF9yZXF1ZXN0KHF1ZXJ5T2JqZWN0ID0ge30pIHtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXHJcblx0XHRcdGQgPSAkLkRlZmVycmVkKCk7XHJcblx0XHRpZiAob3B0aW9ucy5iZWZvcmVSZXF1ZXN0KSB7XHJcblx0XHRcdHRvb2xzLmV4ZWN1dGUob3B0aW9ucy5iZWZvcmVSZXF1ZXN0LCBbcXVlcnlPYmplY3RdKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmFqYXhGdW5jdGlvbihxdWVyeU9iamVjdCwgb3B0aW9ucy51cmwpLmRvbmUodGhpcy5fcmVzcG9uc2UuYmluZCh0aGlzKSkuYWx3YXlzKGQucmVzb2x2ZSk7XHJcblxyXG5cdFx0cmV0dXJuIGQ7XHJcblx0fTtcclxuXHJcblx0X2JpbmQoKSB7XHJcblx0XHRjb25zdCBzZWxmID0gdGhpcyxcclxuXHRcdFx0cHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcyxcclxuXHRcdFx0b3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHJcblx0XHQvLyB0byBEbyBpZiBtb2RlbCB3aWxsIGJlIGNoYW5nZWRcclxuXHRcdHRoaXMuU3RvcmFnZS5vbignY29sTW9kZWxzJywgKCkgPT4ge1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKHRoaXMuRmlsbCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLlN0b3JhZ2Uub24oJ2RhdGEnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuRGlzcGxheS5leGVjKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLlZpZXdNb2RlbC5vbignZGF0YScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5GaWxsLnRib2R5KCk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuRml4ZWRIZWFkZXIucmVzaXplKCk7XHJcblx0XHRcdH0sIDEwNTApXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLlN0b3JhZ2Uub24oJyRwYWdpbmF0aW9uQm94JywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLlBhZ2luYXRpb24uZXhlYygpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5TdG9yYWdlLm9uKCckaGVhZFRhYmxlJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLlNvcnRpbmcuYmluZCgpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRfZXhlYygpIHtcclxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cclxuXHRcdHRoaXMuVmlld01vZGVsID0gbmV3IFZpZXdNb2RlbCgpO1xyXG5cdFx0dGhpcy5Qcm9jZXNzU2V0dGluZ3MgPSBuZXcgUHJvY2Vzc1NldHRpbmdzKG9wdGlvbnMsIHRoaXMuU3RvcmFnZSwgdGhpcy5WaWV3TW9kZWwpO1xyXG5cdFx0dGhpcy5CdWlsZEluZnJhc3RydWN0dXJlID0gbmV3IEJ1aWxkSW5mcmFzdHJ1Y3R1cmUob3B0aW9ucywgdGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCk7XHJcblx0XHR0aGlzLlNvcnRpbmcgPSBuZXcgU29ydGluZyh0aGlzLlN0b3JhZ2UsIHRoaXMuVmlld01vZGVsLCBvcHRpb25zKTtcclxuXHRcdHRoaXMuRmlsbCA9IG5ldyBGaWxsKHRoaXMuU3RvcmFnZSwgdGhpcy5WaWV3TW9kZWwpO1xyXG5cdFx0dGhpcy5GaWx0ZXJUb29sYmFyID0gbmV3IEZpbHRlclRvb2xiYXIodGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCwgb3B0aW9ucyk7XHJcblx0XHR0aGlzLkRpc3BsYXkgPSBuZXcgRGlzcGxheSh7XHJcblx0XHRcdHN0b3JhZ2U6IHRoaXMuU3RvcmFnZSxcclxuXHRcdFx0dmlld01vZGVsOiB0aGlzLlZpZXdNb2RlbCxcclxuXHRcdFx0YWpheDogKChxdWVyeU9iamVjdDogSVJlcXVlc3QpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fcmVxdWVzdChxdWVyeU9iamVjdCk7XHJcblx0XHRcdH0pLFxyXG5cdFx0XHRpc0xvY2FsOiBvcHRpb25zLnVybCA/IGZhbHNlIDogdHJ1ZVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLkZpeGVkSGVhZGVyID0gbmV3IEZpeGVkSGVhZGVyKHRoaXMuU3RvcmFnZSk7XHJcblx0XHR0aGlzLlBhZ2luYXRpb24gPSBuZXcgUGFnaW5hdGlvbihvcHRpb25zLCB0aGlzLlN0b3JhZ2UsIHRoaXMuVmlld01vZGVsKTtcclxuXHJcblx0XHR0aGlzLl9iaW5kKCk7XHJcblxyXG5cdFx0dGhpcy5GaWxsLnRoZWFkKCk7XHJcblxyXG5cdFx0aWYgKCEkLmlzQXJyYXkob3B0aW9ucy5kYXRhKSkge1xyXG5cdFx0XHRvcHRpb25zLmRhdGEgPSBbXTtcclxuXHRcdH1cclxuXHRcdHRoaXMuU3RvcmFnZS5kYXRhID0gb3B0aW9ucy5kYXRhO1xyXG5cdH1cclxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==
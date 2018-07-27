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

/***/ "./src/modules/Display.ts":
/*!********************************!*\
  !*** ./src/modules/Display.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tools */ "./src/modules/Tools.js");
/* harmony import */ var _QueryModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryModel */ "./src/modules/QueryModel.ts");
/* harmony import */ var _Sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sort */ "./src/modules/Sort.ts");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Filter */ "./src/modules/Filter.ts");
/* harmony import */ var _DisplayModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DisplayModel */ "./src/modules/DisplayModel.ts");
/* harmony import */ var _LocalSortRuleModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LocalSortRuleModel */ "./src/modules/LocalSortRuleModel.ts");






var Display = /** @class */ (function () {
    function Display(options) {
        var _this = this;
        this.viewModel = options.viewModel;
        this.storage = options.storage;
        this.ajax = options.ajax;
        if (options.isLocal) {
            this.process = this._localProcess.bind(this);
        }
        else {
            this.process = this._serverProcess.bind(this);
        }
        setTimeout(function () {
            _this._subscribe();
        }, 50);
    }
    ;
    Display.prototype.exec = function () {
        var _this = this;
        var storage = this.storage;
        var viewModel = this.viewModel;
        var query = new _QueryModel__WEBPACK_IMPORTED_MODULE_1__["default"]({
            filter: storage.filter,
            sort: viewModel.sortBy,
            rows: viewModel.rows,
            page: viewModel.newPage,
        });
        storage.query = query;
        storage.$box.addClass('Xgrid-loading');
        setTimeout(function () {
            _this.process().done(function (data) {
                _this._filler(data);
                _this.storage.$box.removeClass('Xgrid-loading');
            });
        }, 0);
    };
    ;
    Display.prototype._filler = function (data) {
        var viewModel = this.viewModel;
        viewModel.totalPages = data.totalPages;
        viewModel.totalRows = data.totalRows;
        viewModel.data = data.data;
        viewModel.page = data.page;
    };
    ;
    Display.prototype._localFilter = function (data, filterQuery) {
        var deferred = $.Deferred(), storage = this.storage, rawData = function () {
            var colModels = storage.colModelsDictionary;
            return function () {
                var row = {};
                return function (alias, rowData) {
                    if (typeof (row[alias]) === 'undefined') {
                        var colModel = colModels[alias];
                        row[alias] = colModel.filterFormatter(rowData[colModel.key], rowData, colModel);
                    }
                    ;
                    return row[alias];
                };
            };
        };
        setTimeout(function () {
            if (filterQuery) {
                data = _Filter__WEBPACK_IMPORTED_MODULE_3__["default"].exec(data, filterQuery, rawData());
            }
            deferred.resolve(data);
        }, 0);
        return deferred;
    };
    ;
    Display.prototype._localSort = function (data, sortRules) {
        var deferred = $.Deferred();
        var storage = this.storage;
        if (sortRules.length) {
            var localSortRules = sortRules.map(function (rule) {
                var colModel = storage.colModelsDictionary[rule.by];
                var by = colModel ? colModel.key : rule.by;
                return new _LocalSortRuleModel__WEBPACK_IMPORTED_MODULE_5__["default"](rule.order, by, colModel);
            });
            data = _Sort__WEBPACK_IMPORTED_MODULE_2__["default"].exec(data, localSortRules);
            setTimeout(function () {
                deferred.resolve(data);
            }, 0);
        }
        else {
            deferred.resolve(data);
        }
        return deferred;
    };
    ;
    Display.prototype._getLocalData = function (data, query) {
        var viewModel = this.viewModel;
        var begin = (query.page - 1) * viewModel.rows;
        var end = query.page * viewModel.rows;
        var dataToDisplay = data.slice(begin, end);
        return new _DisplayModel__WEBPACK_IMPORTED_MODULE_4__["default"](dataToDisplay, query.page, Math.ceil(data.length / viewModel.rows) || 1, data.length);
    };
    ;
    Display.prototype._localProcess = function () {
        var _this = this;
        var deferred = $.Deferred();
        var storage = this.storage;
        var query = storage.query;
        this._localFilter(storage.data, query.filter).done(function (filteredData) {
            _this._localSort(filteredData, query.sort).done(function (sortedData) {
                deferred.resolve(_this._getLocalData(sortedData, query));
            });
        });
        return deferred;
    };
    ;
    Display.prototype._serverProcess = function () {
        return this.ajax(this.storage.query);
    };
    ;
    Display.prototype._subscribe = function () {
        var _this = this;
        var viewModel = this.viewModel;
        var storage = this.storage;
        var action = _Tools__WEBPACK_IMPORTED_MODULE_0__["default"].throttle(function () { _this.exec(); }, 100);
        var _reload = function (s, type) {
            switch (type) {
                case 'filter':
                    viewModel.newPage = 1;
                    break;
                case 'sortBy':
                    //viewModel.newPage = 1; ?
                    break;
            }
            action();
        };
        viewModel.on('newPage', _reload);
        viewModel.on('sortBy', _reload);
        storage.on('filter', _reload);
    };
    ;
    return Display;
}());
/* harmony default export */ __webpack_exports__["default"] = (Display);


/***/ }),

/***/ "./src/modules/DisplayModel.ts":
/*!*************************************!*\
  !*** ./src/modules/DisplayModel.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DisplayModel = /** @class */ (function () {
    function DisplayModel(dataToDisplay, page, totalPages, totalRows) {
        this.page = 1;
        this.data = dataToDisplay;
        if (page > 0) {
            this.page = page;
        }
        this.totalPages = totalPages;
        this.totalRows = totalRows;
    }
    return DisplayModel;
}());
/* harmony default export */ __webpack_exports__["default"] = (DisplayModel);


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

/***/ "./src/modules/LocalSortRuleModel.ts":
/*!*******************************************!*\
  !*** ./src/modules/LocalSortRuleModel.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pipes */ "./src/modules/Pipes.js");

var LocalSortRuleModel = /** @class */ (function () {
    function LocalSortRuleModel(order, by, colModel) {
        this.get = _Pipes__WEBPACK_IMPORTED_MODULE_0__["default"].getByType();
        this.order = order;
        this.by = by;
        if (colModel) {
            this.colModel = colModel;
            this.get = colModel.sortFormatter;
        }
    }
    return LocalSortRuleModel;
}());
/* harmony default export */ __webpack_exports__["default"] = (LocalSortRuleModel);


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
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Display */ "./src/modules/Display.ts");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0J1aWxkSW5mcmFzdHJ1Y3R1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ29sTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRGlzcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9EaXNwbGF5TW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9GaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRmlsdGVyVG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9GaWx0ZXJUb29sYmFyTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRml4ZWRIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvTG9jYWxTb3J0UnVsZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL09wZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1BpcGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1Byb2Nlc3NTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9RdWVyeU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1NvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvU29ydFJ1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvU29ydGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9TdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1Rvb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1ZpZXdNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9YZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGb0M7QUFFcEMsQ0FBQyxVQUFDLENBQUM7SUFDRixDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRztRQUFVLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ3BDLElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBTSxPQUFPLEdBQXNCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRjs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkU7Ozs7Ozs7Ozs7OztBQ25GQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0RTs7Ozs7Ozs7Ozs7Ozs7O0FDL0VrQztBQUNBO0FBSWxDO0lBTUMseUJB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdFOzs7Ozs7Ozs7Ozs7O0FDcEtBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw2QkFBNkIsRUFBRTtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRFOzs7Ozs7Ozs7Ozs7QUM1RUE7QUFBQTtJQUlDO1FBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNaLElBQUksRUFBRSxFQUFFO1lBQ1IsU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUUsQ0FBQztZQUNQLFVBQVUsRUFBRSxDQUFDO1lBQ2IsT0FBTyxFQUFFLENBQUM7WUFDVixJQUFJLEVBQUUsRUFBRTtZQUNSLE1BQU0sRUFBRSxFQUFFO1lBQ1YsYUFBYSxFQUFFLEtBQUs7U0FDcEI7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsc0JBQUksMkJBQUk7YUFBUjtZQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDeEIsQ0FBQzthQUNELFVBQVMsSUFBSTtZQUNaLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzthQUMxQjtRQUNGLENBQUM7OztPQU5BO0lBQUEsQ0FBQztJQU1ELENBQUM7SUFFRixzQkFBSSw2QkFBTTthQUFWO1lBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMxQixDQUFDO2FBQ0QsVUFBVyxJQUFJO1lBQ2QsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzVCO1FBQ0YsQ0FBQzs7O09BTkE7SUFBQSxDQUFDO0lBTUQsQ0FBQztJQUVGLHNCQUFJLGdDQUFTO2FBQWI7WUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQzdCLENBQUM7YUFDRCxVQUFjLFNBQVM7WUFDdEIsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssUUFBUSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUMvQjtRQUNGLENBQUM7OztPQU5BO0lBQUEsQ0FBQztJQU1ELENBQUM7SUFFRixzQkFBSSxpQ0FBVTthQUFkO1lBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUM5QixDQUFDO2FBQ0QsVUFBZSxVQUFVO1lBQ3hCLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLFFBQVEsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDaEM7UUFDRixDQUFDOzs7T0FOQTtJQUFBLENBQUM7SUFNRCxDQUFDO0lBRUYsc0JBQUksMkJBQUk7YUFBUjtZQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDeEIsQ0FBQzthQUNELFVBQVMsSUFBSTtZQUNaLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDMUI7UUFDRixDQUFDOzs7T0FOQTtJQUFBLENBQUM7SUFNRCxDQUFDO0lBRUYsc0JBQUksMkJBQUk7YUFBUjtZQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDeEIsQ0FBQzthQUNELFVBQVMsSUFBSTtZQUNaLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDMUI7UUFDRixDQUFDOzs7T0FOQTtJQUFBLENBQUM7SUFNRCxDQUFDO0lBRUYsc0JBQUksOEJBQU87YUFBWDtZQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDM0IsQ0FBQzthQUNELFVBQVksSUFBSTtZQUNmLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDN0I7UUFDRixDQUFDOzs7T0FOQTtJQUFBLENBQUM7SUFNRCxDQUFDO0lBRUYsc0JBQUksb0NBQWE7YUFBakI7WUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ2pDLENBQUM7YUFDRCxVQUFrQixJQUFhO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwQyxDQUFDOzs7T0FKQTtJQUFBLENBQUM7SUFJRCxDQUFDO0lBRUYsc0JBQUUsR0FBRixVQUFHLElBQUksRUFBRSxVQUFVO1FBQ2xCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQUEsQ0FBQztJQUVGLDBCQUFNLEdBQU4sVUFBTyxJQUFJLEVBQUUsSUFBSTtRQUNoQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxFQUFFLFVBQVU7WUFDakMsa0NBQU0sQ0FBb0I7WUFDL0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQUEsQ0FBQztJQUVNLCtCQUFXLEdBQW5CLFVBQW9CLElBQUk7UUFDdkIsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDdkI7UUFDRCxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0YsZ0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIbUM7QUFDWTtBQUNRO0FBQ1o7QUFDWjtBQUNBO0FBQ1E7QUFDUjtBQUNOO0FBQ1k7QUFDVjtBQUU1QjtJQWNDLGVBQVksT0FBaUIsRUFBRSxJQUFZO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDakIsSUFBSTtZQUNKLElBQUksRUFBRSxFQUFFO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDdkIsYUFBYSxFQUFFLEVBQUU7WUFDakIsYUFBYSxFQUFFLEVBQUU7WUFDakIsTUFBTSxFQUFFLEVBQUU7WUFDVixrQkFBa0IsRUFBRSxFQUFFO1lBQ3RCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLG9CQUFvQixFQUFFLEtBQUs7WUFDM0IsR0FBRyxFQUFFLEVBQUU7WUFDUCxZQUFZLEVBQUUsS0FBSztZQUNuQixhQUFhLEVBQUUsS0FBSztTQUNwQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRVosSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGdEQUFPLENBQUMsRUFBRSxJQUFJLFFBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBQUEsQ0FBQztJQUVGLDRCQUFZLEdBQVosVUFBYSxXQUFnQixFQUFFLEdBQVc7UUFDekMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDYixHQUFHLEVBQUUsR0FBRztZQUNSLElBQUksRUFBRSxXQUFXO1lBQ2pCLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtZQUN0QixRQUFRLEVBQUUsTUFBTTtTQUNoQixDQUFDLENBQUM7SUFDSixDQUFDO0lBQUEsQ0FBQztJQUNGLHlCQUFTLEdBQVQsVUFBVSxjQUF5QjtRQUNsQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUMxQiwrQ0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztTQUN2RDtJQUNGLENBQUM7SUFBQSxDQUFDO0lBRUYsd0JBQVEsR0FBUixVQUFTLFdBQWdCO1FBQWhCLDhDQUFnQjtRQUN4QixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUMzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xCLElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUMxQiwrQ0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTlGLE9BQU8sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUFBLENBQUM7SUFFRixxQkFBSyxHQUFMO1FBQUEsaUJBNEJDO1FBM0JBLElBQU0sSUFBSSxHQUFHLElBQUksRUFDaEIsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQzVCLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRXhCLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUU7WUFDNUIseUJBQXlCO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ3ZCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDekIsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQixVQUFVLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMzQixDQUFDLEVBQUUsSUFBSSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNqQyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFO1lBQzdCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQUEsQ0FBQztJQUNGLHFCQUFLLEdBQUw7UUFBQSxpQkE2QkM7UUE1QkEsSUFBTSxJQUFJLEdBQUcsSUFBSSxFQUNoQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUV4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksa0RBQVMsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSx3REFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSw0REFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGdEQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSw2Q0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxzREFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZ0RBQU8sQ0FBQztZQUMxQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLElBQUksRUFBRSxDQUFDLFVBQUMsV0FBcUI7Z0JBQzVCLE9BQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUM7WUFDRixPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQ25DLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxvREFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksbURBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0IsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDbEI7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFDRixZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3RJRCx5QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgWGdyaWQgZnJvbSAnLi9tb2R1bGVzL1hncmlkJztcclxuXHJcbigoJCkgPT4ge1xyXG5cdCQuZm4uWGdyaWQgPSBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pIHtcclxuXHRcdGxldCBkYXRhO1xyXG5cdFx0Y29uc3Qgb3B0aW9uczogSU9wdGlvbnMgfCBzdHJpbmcgPSBhcmdzWzBdO1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGRhdGEgPSAkKHRoaXMpLmRhdGEoJ1hncmlkJyk7XHJcblx0XHRcdGlmICghZGF0YSkge1xyXG5cdFx0XHRcdGNvbnN0IHByb3BzOiBJT3B0aW9ucyA9ICh0eXBlb2YgKG9wdGlvbnMpID09PSAnc3RyaW5nJykgPyBhcmdzWzFdIDogb3B0aW9ucztcclxuXHRcdFx0XHQkKHRoaXMpLmRhdGEoJ1hncmlkJywgbmV3IFhncmlkKHByb3BzLCAkKHRoaXMpKSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIChvcHRpb25zKSA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5pbmRleE9mKCdfJykgIT09IDAgJiYgZGF0YVtvcHRpb25zXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdGNvbnN0IHByb3BzID0gYXJncy5zbGljZSgxKTtcclxuXHRcdFx0XHRkYXRhW29wdGlvbnNdLmFwcGx5KGRhdGEsIHByb3BzKTtcclxuXHRcdFx0fSBlbHNlIGlmIChkYXRhLnJlZnJlc2gpIHtcclxuXHRcdFx0XHRkYXRhLnJlZnJlc2guYXBwbHkoZGF0YSwgYXJncyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufSkoalF1ZXJ5KTtcclxuIiwiaW1wb3J0IHRvb2xzIGZyb20gJy4vVG9vbHMnO1xyXG5pbXBvcnQgVmlld01vZGVsIGZyb20gJy4vVmlld01vZGVsJztcclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9TdG9yYWdlJztcclxuXHJcbmNsYXNzIEJ1aWxkSW5mcmFzdHJ1Y3R1cmUge1xyXG5cdHZpZXdNb2RlbDogVmlld01vZGVsO1xyXG5cdHN0b3JhZ2U6IFN0b3JhZ2U7XHJcblx0b3B0aW9uczogSUJ1aWxkSW5mcmFzdHJ1Y3R1cmVPcHRpb25zO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCBzdG9yYWdlLCB2aWV3TW9kZWwpIHtcclxuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xyXG5cdFx0XHR0aGVhZENsYXNzOiAndGFibGUtZ3JpZC10aGVhZCcsXHJcblx0XHRcdHRib2R5Q2xhc3M6ICd0YWJsZS1ncmlkLXRib2R5JyxcclxuXHRcdFx0Zmlyc3RCdG5UZW1wbGF0ZTogJzxzcGFuIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+JiMxNzE7PC9zcGFuPicsXHJcblx0XHRcdGxhc3RCdG5UZW1wbGF0ZTogJzxzcGFuIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+JiMxODc7PC9zcGFuPicsXHJcblx0XHRcdHByZXZCdG5UZW1wbGF0ZTogJzxzcGFuIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+JiM4MjQ5Ozwvc3Bhbj4nLFxyXG5cdFx0XHRuZXh0QnRuVGVtcGxhdGU6ICc8c3BhbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPiYjODI1MDs8L3NwYW4+JyxcclxuXHRcdFx0Y3VycmVudFBhZ2VUZW1wbGF0ZTogJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz4nLFxyXG5cdFx0XHRwYWdpbmF0aW9uVGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiWGdyaWQtcGFnZ2luYXRpb24gaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiID57Zmlyc3RCdG5UZW1wbGF0ZX17cHJldkJ0blRlbXBsYXRlfTwvZGl2PlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj4gUGFnZSA8L3NwYW4+XHJcblx0XHRcdFx0e2N1cnJlbnRQYWdlVGVtcGxhdGV9XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPiBvZiA8c3BhbiBjbGFzcz1cIlhncmlkLXRvdGFsLXBhZ2VzXCI+PC9zcGFuPjwvc3Bhbj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuXCIgPntuZXh0QnRuVGVtcGxhdGV9e2xhc3RCdG5UZW1wbGF0ZX08L2Rpdj5cclxuXHRcdFx0PC9kaXY+YFxyXG5cdFx0fSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHRcdHRoaXMuX2V4ZWMoKTtcclxuXHR9O1xyXG5cdGJ1aWxkRmlsdGVyVG9vbGJhcigpIHtcclxuXHRcdGlmICh0aGlzLnZpZXdNb2RlbC5maWx0ZXJUb29sYmFyKSB7XHJcblx0XHRcdHRoaXMuX2J1aWxkRmlsdGVyVG9vbGJhcigpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0X2V4ZWMoKSB7XHJcblx0XHR0aGlzLl9idWlsZCgpO1xyXG5cdFx0dGhpcy5fYnVpbGRUaGVhZCgpO1xyXG5cdFx0dGhpcy5fYnVpbGRUQm9keSgpO1xyXG5cdFx0dGhpcy5fYnVpbGRQYWdpbmF0aW9uKCk7XHJcblxyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGNvbnN0IGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzO1xyXG5cdFx0Y29uc3QgJHRmb290Q2VsbHMgPSBzdG9yYWdlLiRncmlkVGFibGUuZmluZCgnLlhncmlkLXRib2R5LXcgdGQnKTtcclxuXHRcdGNvbnN0ICR0aGVhZENlbGxzID0gc3RvcmFnZS4kaGVhZFRhYmxlLmZpbmQoJ3RyJyk7XHJcblxyXG5cdFx0Y29sTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsLCBpKSB7XHJcblx0XHRcdGxldCBjZWxscyA9IFtdO1xyXG5cclxuXHRcdFx0Y2VsbHMucHVzaCgkdGZvb3RDZWxscy5nZXQoaSkpO1xyXG5cdFx0XHQkdGhlYWRDZWxscy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRjZWxscy5wdXNoKCQodGhpcykuZmluZCgnPio6ZXEoJyArIGkgKyAnKScpLmdldCgwKSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0bW9kZWwuZGVwZW5kZW50ID0gY2VsbHMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0ge1xyXG5cdFx0XHRcdFx0JGFuY2hvcjogJChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpLFxyXG5cdFx0XHRcdFx0JGl0ZW06ICQoaXRlbSlcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRyZXN1bHQuJGl0ZW0uYmVmb3JlKHJlc3VsdC4kYW5jaG9yKTtcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0X2FkZFByb3BzdG9IZWFkZXJDZWxscyhpLCBpdGVtKSB7XHJcblx0XHRjb25zdCAkaXRlbSA9ICQoaXRlbSk7XHJcblx0XHRjb25zdCBjb2xNb2RlbCA9IHRoaXMuc3RvcmFnZS5jb2xNb2RlbHNbaV07XHJcblxyXG5cdFx0JGl0ZW0uYXR0cignZGF0YS1hbGlhcycsIGNvbE1vZGVsWydhbGlhcyddKTtcclxuXHRcdGlmIChjb2xNb2RlbC5maXhlZCkge1xyXG5cdFx0XHQkaXRlbS5hZGRDbGFzcygnZml4ZWQnKTtcclxuXHRcdFx0aWYgKGNvbE1vZGVsLndpZHRoKSB7XHJcblx0XHRcdFx0JGl0ZW0ud2lkdGgoY29sTW9kZWwud2lkdGgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRfYnVpbGRGaWx0ZXJUb29sYmFyKCkge1xyXG5cdFx0Y29uc3QgdGFnID0gJ3Rmb290JztcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRjb25zdCAkZmlsdGVyID0gJChgPCR7dGFnfSBjbGFzcz1cIlhncmlkLXRoZWFkLWZpbHRlclwiPjx0cj4keyBuZXcgQXJyYXkoc3RvcmFnZS5jb2xNb2RlbHMubGVuZ3RoICsgMSkuam9pbignPHRkIGNsYXNzPVwiWGdyaWQtZmlsdGVyLWNlbGxcIj48L3RkPicpfTwvdHI+PC8ke3RhZ30+YCk7XHJcblx0XHRjb25zdCBhZGRQcm9wID0gdGhpcy5fYWRkUHJvcHN0b0hlYWRlckNlbGxzLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0c3RvcmFnZS4kZmlsdGVyVG9vbGJhckl0ZW1zID0gJGZpbHRlci5maW5kKCcuWGdyaWQtZmlsdGVyLWNlbGwnKS5lYWNoKGFkZFByb3ApO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLmZpbmQoJy5YZ3JpZC10aGVhZC13IHRkJykuZWFjaChhZGRQcm9wKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5hcHBlbmQoJGZpbHRlcik7XHJcblx0fTtcclxuXHJcblx0X2J1aWxkVGhlYWQoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0bGV0IHRhZyA9ICd0aGVhZCc7XHJcblx0XHRsZXQgd2lkdGhIZWxwZXIgPSBgPCR7dGFnfSBjbGFzcz1cIlhncmlkLXRoZWFkLXdcIj48dHI+JHtuZXcgQXJyYXkoc3RvcmFnZS5jb2xNb2RlbHMubGVuZ3RoICsgMSkuam9pbignPHRkPjxkaXYgY2xhc3M9XCJYZ3JpZC1XaWR0aExpc3RlbmVyLXdyYXBwZXJcIj48aWZyYW1lIGRhdGEtY29sPVwiMFwiIGNsYXNzPVwiWGdyaWQtV2lkdGhMaXN0ZW5lclwiPjwvaWZyYW1lPjwvZGl2PjwvdGQ+Jyl9PC90cj48LyR7dGFnfT5gO1xyXG5cclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5odG1sKHdpZHRoSGVscGVyKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5maW5kKCcuWGdyaWQtdGhlYWQtdyB0ZCcpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0Y29uc3QgJHRkID0gJCh0aGlzKTtcclxuXHRcdFx0Y29uc3QgY29sTW9kZWwgPSBzdG9yYWdlLmNvbE1vZGVsc1tpXTtcclxuXHRcdFx0Y29uc3QgaWZyYW1lOiBIVE1MRWxlbWVudCA9ICR0ZC5maW5kKCdpZnJhbWUnKVswXTtcclxuXHJcblx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWxpYXMnLCBjb2xNb2RlbC5hbGlhcyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0YWcgPSAndGJvZHknO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLmFwcGVuZChgPCR7dGFnfSBjbGFzcz1cIlhncmlkLXRoZWFkLWxhYmVsc1wiPjx0cj4ke25ldyBBcnJheShzdG9yYWdlLmNvbE1vZGVscy5sZW5ndGggKyAxKS5qb2luKCc8dGggY2xhc3M9XCJYZ3JpZC10aGVhZC1sYWJlbFwiPjwvdGg+Jyl9PC90cj48LyR7dGFnfT5gKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRMYWJlbHMgPSBzdG9yYWdlLiRoZWFkVGFibGUuZmluZCgnLlhncmlkLXRoZWFkLWxhYmVsJyk7XHJcblx0XHRzdG9yYWdlLiRoZWFkTGFiZWxzLmVhY2goKGksIGl0ZW0pID0+IHtcclxuXHRcdFx0dGhpcy5fYWRkUHJvcHN0b0hlYWRlckNlbGxzKGksIGl0ZW0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5idWlsZEZpbHRlclRvb2xiYXIoKTtcclxuXHR9O1xyXG5cclxuXHRfYnVpbGRUQm9keSgpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRsZXQgd2lkdGhIZWxwZXIgPSAnPHRoZWFkIGNsYXNzPVwiWGdyaWQtdGJvZHktd1wiPjx0cj4nICsgbmV3IEFycmF5KHN0b3JhZ2UuY29sTW9kZWxzLmxlbmd0aCArIDEpLmpvaW4oJzx0ZD48aT48L2k+PC90ZD4nKSArICc8L3RyPjwvdGhlYWQ+JztcclxuXHJcblx0XHRzdG9yYWdlLiRncmlkVGFibGUuaHRtbCh3aWR0aEhlbHBlcik7XHJcblx0XHRzdG9yYWdlLiRncmlkVGFibGUuZmluZCgnLlhncmlkLXRib2R5LXcgdHIgdGQnKS5lYWNoKChpLCBpdGVtKSA9PiB7XHJcblx0XHRcdHRoaXMuX2FkZFByb3BzdG9IZWFkZXJDZWxscyhpLCBpdGVtKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdF9idWlsZFBhZ2luYXRpb24oKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHRcdGNvbnN0ICRwYWdpbmF0aW9uID0gJChvcHRpb25zLnBhZ2luYXRpb25UZW1wbGF0ZSk7XHJcblx0XHRjb25zdCB7IGZpcnN0QnRuVGVtcGxhdGUsIGxhc3RCdG5UZW1wbGF0ZSwgcHJldkJ0blRlbXBsYXRlLCBuZXh0QnRuVGVtcGxhdGUsIGN1cnJlbnRQYWdlVGVtcGxhdGUgfSA9IG9wdGlvbnM7XHJcblx0XHRsZXQgJHBhZ2luYXRpb25Cb3g7XHJcblxyXG5cdFx0dG9vbHMuaW5zZXJ0RWxlbWVudCgkcGFnaW5hdGlvbiwgJ3tmaXJzdEJ0blRlbXBsYXRlfScsIGZpcnN0QnRuVGVtcGxhdGUgPyAkKGZpcnN0QnRuVGVtcGxhdGUpLmFkZENsYXNzKCdYZ3JpZC1maXJzdCcpIDogJycpO1xyXG5cdFx0dG9vbHMuaW5zZXJ0RWxlbWVudCgkcGFnaW5hdGlvbiwgJ3twcmV2QnRuVGVtcGxhdGV9JywgJChwcmV2QnRuVGVtcGxhdGUpLmFkZENsYXNzKCdYZ3JpZC1wcmV2JykpO1xyXG5cdFx0dG9vbHMuaW5zZXJ0RWxlbWVudCgkcGFnaW5hdGlvbiwgJ3tuZXh0QnRuVGVtcGxhdGV9JywgJChuZXh0QnRuVGVtcGxhdGUpLmFkZENsYXNzKCdYZ3JpZC1uZXh0JykpO1xyXG5cdFx0dG9vbHMuaW5zZXJ0RWxlbWVudCgkcGFnaW5hdGlvbiwgJ3tsYXN0QnRuVGVtcGxhdGV9JywgJChsYXN0QnRuVGVtcGxhdGUpLmFkZENsYXNzKCdYZ3JpZC1sYXN0JykpO1xyXG5cdFx0dG9vbHMuaW5zZXJ0RWxlbWVudCgkcGFnaW5hdGlvbiwgJ3tjdXJyZW50UGFnZVRlbXBsYXRlfScsICQoY3VycmVudFBhZ2VUZW1wbGF0ZSkuYWRkQ2xhc3MoJ1hncmlkLWN1cnJlbnQtcGFnZScpKTtcclxuXHJcblx0XHRpZiAob3B0aW9ucy5wYWdpbmF0aW9uU2VsZWN0b3IpIHtcclxuXHRcdFx0JHBhZ2luYXRpb25Cb3ggPSAkKG9wdGlvbnMucGFnaW5hdGlvblNlbGVjdG9yKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCRwYWdpbmF0aW9uQm94ID0gc3RvcmFnZS4kYm94LmZpbmQoJy5YZ3JpZC1wYWdnaW5hdGlvbi13cmFwcGVyJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0JHBhZ2luYXRpb25Cb3guaHRtbCgkcGFnaW5hdGlvbik7XHJcblx0XHRzdG9yYWdlLiRwYWdpbmF0aW9uQm94ID0gJHBhZ2luYXRpb25Cb3g7XHJcblx0fTtcclxuXHJcblx0X2J1aWxkKCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblxyXG5cdFx0c3RvcmFnZS4kYm94Lmh0bWwoYDxkaXYgY2xhc3M9XCJYZ3JpZFwiPlxyXG5cdDxkaXYgY2xhc3M9XCJYZ3JpZC13cmFwcGVyXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiWGdyaWQtd3JhcHBlci1ob2xkZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIlhncmlkLXRoZWFkLXdyYXBwZXJcIj5cclxuXHRcdFx0XHQ8dGFibGUgY2xhc3M9XCJYZ3JpZC10aGVhZCAke29wdGlvbnMudGhlYWRDbGFzc31cIj48L3RhYmxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIlhncmlkLXRib2R5LXdyYXBwZXJcIj5cclxuXHRcdFx0XHQ8dGFibGUgY2xhc3M9XCJYZ3JpZC10Ym9keSAke29wdGlvbnMudGJvZHlDbGFzc31cIj48L3RhYmxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cIlhncmlkLXBhZ2dpbmF0aW9uLXdyYXBwZXJcIj48L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+YCk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUgPSBzdG9yYWdlLiRib3guZmluZCgnLlhncmlkLXRoZWFkJyk7XHJcblx0XHRzdG9yYWdlLiRncmlkVGFibGUgPSBzdG9yYWdlLiRib3guZmluZCgnLlhncmlkLXRib2R5Jyk7XHJcblx0fVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCdWlsZEluZnJhc3RydWN0dXJlOyIsImltcG9ydCBwaXBlcyBmcm9tICcuL1BpcGVzJztcclxuaW1wb3J0IEZpbHRlclRvb2xiYXJNb2RlbCBmcm9tICcuL0ZpbHRlclRvb2xiYXJNb2RlbCc7XHJcbmNsYXNzIENvbE1vZGVsIGltcGxlbWVudHMgSUNvbE1vZGVsIHtcclxuXHRvcmRlcjogbnVtYmVyO1xyXG5cdGxhYmVsID0gJyc7XHJcblx0ZmlsdGVyYWJsZSA9IGZhbHNlO1xyXG5cdGZpbHRlclR5cGUgPSAndGV4dCc7XHJcblx0ZmlsdGVyT3B0aW9uID0gJ2NuJztcclxuXHRzb3J0YWJsZSA9IGZhbHNlO1xyXG5cdHNvcnRUeXBlID0gJ3RleHQnO1xyXG5cdGhpZGRlbiA9IGZhbHNlO1xyXG5cdHJlc2l6YWJsZSA9IGZhbHNlO1xyXG5cdGluc2Vuc2l0aXZlID0gZmFsc2U7XHJcblx0Zml4ZWQgPSBmYWxzZTtcclxuXHRzb3J0Rm9ybWF0dGVyOiBGdW5jdGlvbjtcclxuXHRmaWx0ZXJGb3JtYXR0ZXI6IEZ1bmN0aW9uO1xyXG5cdGtleTogc3RyaW5nO1xyXG5cdGFsaWFzOiBzdHJpbmc7XHJcblx0ZmlsdGVyVG9vbGJhclNldHRpbmdzOiBhbnk7XHJcblxyXG5cdGRlcGVuZGVudCA9IFtdO1xyXG5cdF9jaGVjazogRnVuY3Rpb247XHJcblxyXG5cdGNvbnN0cnVjdG9yKG1vZGVsLCBvcmRlcikge1xyXG5cdFx0dGhpcy5vcmRlciA9IG9yZGVyO1xyXG5cclxuXHRcdCQuZXh0ZW5kKHRoaXMsIG1vZGVsKTtcclxuXHRcdHRoaXMuZmlsdGVyVG9vbGJhclNldHRpbmdzID0gbmV3IEZpbHRlclRvb2xiYXJNb2RlbChtb2RlbC5maWx0ZXJUb29sYmFyU2V0dGluZ3MpO1xyXG5cclxuXHRcdGlmICh0eXBlb2YgKHRoaXMuYWxpYXMpID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHR0aGlzLmFsaWFzID0gdGhpcy5rZXk7XHJcblx0XHR9XHJcblx0XHRpZiAodHlwZW9mICh0aGlzLmtleSkgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdHRoaXMua2V5ID0gdGhpcy5hbGlhcztcclxuXHRcdH1cclxuXHRcdGlmIChtb2RlbC5zb3J0VHlwZSAmJiB0eXBlb2YgKG1vZGVsLnNvcnRUeXBlKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHR0aGlzLnNvcnRGb3JtYXR0ZXIgPSBtb2RlbC5zb3J0VHlwZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc29ydEZvcm1hdHRlciA9IHBpcGVzLmdldEJ5VHlwZShtb2RlbC5zb3J0VHlwZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG1vZGVsLmZpbHRlclR5cGUgJiYgdHlwZW9mIChtb2RlbC5maWx0ZXJUeXBlKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHR0aGlzLmZpbHRlckZvcm1hdHRlciA9IG1vZGVsLmZpbHRlclR5cGU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmZpbHRlckZvcm1hdHRlciA9IHBpcGVzLmdldEJ5VHlwZShtb2RlbC5maWx0ZXJUeXBlKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmRlcGVuZGVudCA9IFtdO1xyXG5cdFx0dGhpcy5fY2hlY2sgPSBmdW5jdGlvbiAoKTogdm9pZCB7XHJcblx0XHRcdGlmICh0aGlzLmhpZGRlbikge1xyXG5cdFx0XHRcdHRoaXMuZGVwZW5kZW50LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRcdFx0XHRcdGl0ZW0uJGl0ZW0uZGV0YWNoKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5kZXBlbmRlbnQuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG5cdFx0XHRcdFx0aXRlbS4kYW5jaG9yLmFmdGVyKGl0ZW0uJGl0ZW0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsYWJlbEZvcm1hdHRlcigpIHtcclxuXHRcdHJldHVybiB0aGlzLmxhYmVsO1xyXG5cdH07XHJcblxyXG5cdGNlbGxGb3JtYXR0ZXIoJHRkLCB2YWx1ZSwgcm93RGF0YSwgZGF0YSkge1xyXG5cdFx0aWYgKHR5cGVvZiAodmFsdWUpID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHR2YWx1ZSA9ICcnO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICc8ZGl2IGNsYXNzPVwiZWxsaXBzaXNcIj4nICsgdmFsdWUgKyAnPC9kaXY+JztcclxuXHR9O1xyXG5cclxuXHRmaWx0ZXJUb29sYmFyRm9ybWF0dGVyKCRjZWxsLCBjb2xNb2RlbCkge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSBjb2xNb2RlbC5maWx0ZXJUb29sYmFyU2V0dGluZ3MgfHwge307XHJcblx0XHRsZXQgJGNvbnRyb2wsXHJcblx0XHRcdCRjb250YWluZXIsXHJcblx0XHRcdCR3cmFwID0gJCgnPGRpdiBjbGFzcz1cIlhncmlkLWZpbHRlci1jb250cm9sLXdyYXBcIj48L2Rpdj4nKSxcclxuXHRcdFx0c3RyID0gJzxkaXYgY2xhc3M9XCJYZ3JpZC1maWx0ZXItd3JhcHBlclwiPic7XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmFsbG93UmVzZXRCdXR0b24gfHwgc2V0dGluZ3MuYWxsb3dTdWJtaXRCdXR0b24pIHtcclxuXHRcdFx0c3RyICs9ICc8c3BhbiBjbGFzcz1cIlhncmlkLWZpbHRlci1idG5zXCI+JztcclxuXHRcdFx0aWYgKHNldHRpbmdzLmFsbG93UmVzZXRCdXR0b24pIHtcclxuXHRcdFx0XHRzdHIgKz0gJzxzcGFuIGNsYXNzPVwiWGdyaWQtYnRuIFhncmlkLXJlc2V0XCI+JiMxMDAwNjs8L3NwYW4+JztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc2V0dGluZ3MuYWxsb3dTdWJtaXRCdXR0b24pIHtcclxuXHRcdFx0XHRzdHIgKz0gJzxzcGFuIGNsYXNzPVwiWGdyaWQtYnRuIFhncmlkLW9uU3VibWl0XCI+JiMxMDAwNDs8L3NwYW4+JztcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHIgKz0gJzwvc3Bhbj4nO1xyXG5cdFx0fVxyXG5cdFx0c3RyICs9ICc8L2Rpdj4nXHJcblx0XHRzd2l0Y2ggKHNldHRpbmdzLmZvcm1Db250cm9sVHlwZSkge1xyXG5cdFx0XHRjYXNlICdzZWxlY3QnOlxyXG5cdFx0XHRcdCRjb250cm9sID0gJCgnPHNlbGVjdCBjbGFzcz1cIlhncmlkLXNlbGVjdCBYZ3JpZC1maWx0ZXJcIiAgLz4nKTtcclxuXHRcdFx0XHRzZXR0aW5ncy5zZWxlY3RPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGkpIHtcclxuXHRcdFx0XHRcdCRjb250cm9sLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT1cIicgKyBpICsgJ1wiPicgKyBlbGVtZW50LmxhYmVsICsgJzwvb3B0aW9uPicpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0JGNvbnRyb2wudmFsKFtdKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdCRjb250cm9sID0gJCgnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJYZ3JpZC1pbnB1dCBYZ3JpZC1maWx0ZXJcIiAvPicpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNldHRpbmdzLm9uQ2hhbmdlKSB7XHJcblx0XHRcdCRjb250cm9sLmFkZENsYXNzKCdYZ3JpZC1vbkNoYW5nZScpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNldHRpbmdzLm9uS2V5ZG93bikge1xyXG5cdFx0XHQkY29udHJvbC5hZGRDbGFzcygnWGdyaWQtb25LZXlkb3duJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoc2V0dGluZ3Mub25FbnRlcikge1xyXG5cdFx0XHQkY29udHJvbC5hZGRDbGFzcygnWGdyaWQtb25FbnRlcicpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNldHRpbmdzLmF0dHIpIHtcclxuXHRcdFx0JGNvbnRyb2wuYXR0cihzZXR0aW5ncy5hdHRyKTtcclxuXHRcdH1cclxuXHJcblx0XHQkY29udGFpbmVyID0gJChzdHIpO1xyXG5cdFx0JHdyYXAuYXBwZW5kKCRjb250cm9sKTtcclxuXHRcdCRjb250YWluZXIuYXBwZW5kKCR3cmFwKTtcclxuXHRcdCRjZWxsLmh0bWwoJGNvbnRhaW5lcik7XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbE1vZGVsOyIsImltcG9ydCB0b29scyBmcm9tICcuL1Rvb2xzJztcclxuaW1wb3J0IFF1ZXJ5TW9kZWwgZnJvbSAnLi9RdWVyeU1vZGVsJztcclxuaW1wb3J0IHNvcnQgZnJvbSAnLi9Tb3J0JztcclxuaW1wb3J0IGZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcbmltcG9ydCBEaXNwbGF5TW9kZWwgZnJvbSAnLi9EaXNwbGF5TW9kZWwnO1xyXG5pbXBvcnQgTG9jYWxTb3J0UnVsZU1vZGVsIGZyb20gJy4vTG9jYWxTb3J0UnVsZU1vZGVsJztcclxuXHJcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vU3RvcmFnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5IHtcclxuXHR2aWV3TW9kZWw6IElWaWV3TW9kZWw7XHJcblx0c3RvcmFnZTogU3RvcmFnZTtcclxuXHRhamF4OiBGdW5jdGlvbjtcclxuXHRwcm9jZXNzOiBGdW5jdGlvbjtcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xyXG5cdFx0dGhpcy52aWV3TW9kZWwgPSBvcHRpb25zLnZpZXdNb2RlbDtcclxuXHRcdHRoaXMuc3RvcmFnZSA9IG9wdGlvbnMuc3RvcmFnZTtcclxuXHRcdHRoaXMuYWpheCA9IG9wdGlvbnMuYWpheDtcclxuXHJcblx0XHRpZiAob3B0aW9ucy5pc0xvY2FsKSB7XHJcblx0XHRcdHRoaXMucHJvY2VzcyA9IHRoaXMuX2xvY2FsUHJvY2Vzcy5iaW5kKHRoaXMpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5wcm9jZXNzID0gdGhpcy5fc2VydmVyUHJvY2Vzcy5iaW5kKHRoaXMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLl9zdWJzY3JpYmUoKTtcclxuXHRcdH0sIDUwKTtcclxuXHR9O1xyXG5cclxuXHRleGVjKCk6IHZvaWQge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsO1xyXG5cdFx0Y29uc3QgcXVlcnk6IElRdWVyeU1vZGVsID0gbmV3IFF1ZXJ5TW9kZWwoe1xyXG5cdFx0XHRmaWx0ZXI6IHN0b3JhZ2UuZmlsdGVyLFxyXG5cdFx0XHRzb3J0OiB2aWV3TW9kZWwuc29ydEJ5LFxyXG5cdFx0XHRyb3dzOiB2aWV3TW9kZWwucm93cyxcclxuXHRcdFx0cGFnZTogdmlld01vZGVsLm5ld1BhZ2UsXHJcblx0XHR9KTtcclxuXHJcblx0XHRzdG9yYWdlLnF1ZXJ5ID0gcXVlcnk7XHJcblx0XHRzdG9yYWdlLiRib3guYWRkQ2xhc3MoJ1hncmlkLWxvYWRpbmcnKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5wcm9jZXNzKCkuZG9uZSgoZGF0YTogSURpc3BhbHlNb2RlbCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuX2ZpbGxlcihkYXRhKTtcclxuXHRcdFx0XHR0aGlzLnN0b3JhZ2UuJGJveC5yZW1vdmVDbGFzcygnWGdyaWQtbG9hZGluZycpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sIDApO1xyXG5cdH07XHJcblxyXG5cdF9maWxsZXIoZGF0YTogSURpc3BhbHlNb2RlbCk6IHZvaWQge1xyXG5cdFx0Y29uc3Qgdmlld01vZGVsID0gdGhpcy52aWV3TW9kZWw7XHJcblx0XHR2aWV3TW9kZWwudG90YWxQYWdlcyA9IGRhdGEudG90YWxQYWdlc1xyXG5cdFx0dmlld01vZGVsLnRvdGFsUm93cyA9IGRhdGEudG90YWxSb3dzO1xyXG5cdFx0dmlld01vZGVsLmRhdGEgPSBkYXRhLmRhdGE7XHJcblx0XHR2aWV3TW9kZWwucGFnZSA9IGRhdGEucGFnZTtcclxuXHR9O1xyXG5cclxuXHRfbG9jYWxGaWx0ZXIoZGF0YSwgZmlsdGVyUXVlcnkpIHtcclxuXHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpLFxyXG5cdFx0XHRzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHRyYXdEYXRhID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGNvbnN0IGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzRGljdGlvbmFyeTtcclxuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0Y29uc3Qgcm93ID0ge307XHJcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGFsaWFzLCByb3dEYXRhKSB7XHJcblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgKHJvd1thbGlhc10pID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGNvbE1vZGVsID0gY29sTW9kZWxzW2FsaWFzXTtcclxuXHRcdFx0XHRcdFx0XHRyb3dbYWxpYXNdID0gY29sTW9kZWwuZmlsdGVyRm9ybWF0dGVyKHJvd0RhdGFbY29sTW9kZWwua2V5XSwgcm93RGF0YSwgY29sTW9kZWwpO1xyXG5cdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcm93W2FsaWFzXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRpZiAoZmlsdGVyUXVlcnkpIHtcclxuXHRcdFx0XHRkYXRhID0gZmlsdGVyLmV4ZWMoZGF0YSwgZmlsdGVyUXVlcnksIHJhd0RhdGEoKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcclxuXHRcdH0sIDApO1xyXG5cdFx0cmV0dXJuIGRlZmVycmVkO1xyXG5cdH07XHJcblxyXG5cdF9sb2NhbFNvcnQoZGF0YSwgc29ydFJ1bGVzKSB7XHJcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblxyXG5cdFx0aWYgKHNvcnRSdWxlcy5sZW5ndGgpIHtcclxuXHRcdFx0Y29uc3QgbG9jYWxTb3J0UnVsZXM6IElMb2NhbFNvcnRSdWxlW10gPSBzb3J0UnVsZXMubWFwKChydWxlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgY29sTW9kZWwgPSBzdG9yYWdlLmNvbE1vZGVsc0RpY3Rpb25hcnlbcnVsZS5ieV07XHJcblx0XHRcdFx0Y29uc3QgYnkgPSBjb2xNb2RlbCA/IGNvbE1vZGVsLmtleSA6IHJ1bGUuYnk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBuZXcgTG9jYWxTb3J0UnVsZU1vZGVsKHJ1bGUub3JkZXIsIGJ5LCBjb2xNb2RlbCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ZGF0YSA9IHNvcnQuZXhlYyhkYXRhLCBsb2NhbFNvcnRSdWxlcyk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XHJcblx0XHRcdH0sIDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBkZWZlcnJlZDtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIF9nZXRMb2NhbERhdGEoZGF0YTogSVJhd0RhdGFbXSwgcXVlcnk6IElRdWVyeU1vZGVsKTogSURpc3BhbHlNb2RlbCB7XHJcblx0XHRjb25zdCB2aWV3TW9kZWw6IElWaWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbDtcclxuXHRcdGNvbnN0IGJlZ2luOiBudW1iZXIgPSAocXVlcnkucGFnZSAtIDEpICogdmlld01vZGVsLnJvd3M7XHJcblx0XHRjb25zdCBlbmQ6IG51bWJlciA9IHF1ZXJ5LnBhZ2UgKiB2aWV3TW9kZWwucm93cztcclxuXHRcdGNvbnN0IGRhdGFUb0Rpc3BsYXk6IElSYXdEYXRhW10gPSBkYXRhLnNsaWNlKGJlZ2luLCBlbmQpO1xyXG5cclxuXHRcdHJldHVybiBuZXcgRGlzcGxheU1vZGVsKFxyXG5cdFx0XHRkYXRhVG9EaXNwbGF5LFxyXG5cdFx0XHRxdWVyeS5wYWdlLFxyXG5cdFx0XHRNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyB2aWV3TW9kZWwucm93cykgfHwgMSxcclxuXHRcdFx0ZGF0YS5sZW5ndGgsXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2xvY2FsUHJvY2VzcygpOiBKUXVlcnlEZWZlcnJlZDxJRGlzcGFseU1vZGVsPiB7XHJcblx0XHRjb25zdCBkZWZlcnJlZDogSlF1ZXJ5RGVmZXJyZWQ8SURpc3BhbHlNb2RlbD4gPSAkLkRlZmVycmVkKCk7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3QgcXVlcnk6IElRdWVyeU1vZGVsID0gc3RvcmFnZS5xdWVyeTtcclxuXHJcblx0XHR0aGlzLl9sb2NhbEZpbHRlcihzdG9yYWdlLmRhdGEsIHF1ZXJ5LmZpbHRlcikuZG9uZSgoZmlsdGVyZWREYXRhKSA9PiB7XHJcblx0XHRcdHRoaXMuX2xvY2FsU29ydChmaWx0ZXJlZERhdGEsIHF1ZXJ5LnNvcnQpLmRvbmUoKHNvcnRlZERhdGEpID0+IHtcclxuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHRoaXMuX2dldExvY2FsRGF0YShzb3J0ZWREYXRhLCBxdWVyeSkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGRlZmVycmVkO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX3NlcnZlclByb2Nlc3MoKTogSlF1ZXJ5RGVmZXJyZWQ8SURpc3BhbHlNb2RlbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuYWpheCh0aGlzLnN0b3JhZ2UucXVlcnkpO1xyXG5cdH07XHJcblx0cHJpdmF0ZSBfc3Vic2NyaWJlKCkge1xyXG5cdFx0Y29uc3Qgdmlld01vZGVsID0gdGhpcy52aWV3TW9kZWw7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3QgYWN0aW9uID0gdG9vbHMudGhyb3R0bGUoKCkgPT4geyB0aGlzLmV4ZWMoKTsgfSwgMTAwKTtcclxuXHRcdGNvbnN0IF9yZWxvYWQgPSBmdW5jdGlvbiAocywgdHlwZSkge1xyXG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0XHRjYXNlICdmaWx0ZXInOlxyXG5cdFx0XHRcdFx0dmlld01vZGVsLm5ld1BhZ2UgPSAxO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnc29ydEJ5JzpcclxuXHRcdFx0XHRcdC8vdmlld01vZGVsLm5ld1BhZ2UgPSAxOyA/XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRhY3Rpb24oKTtcclxuXHRcdH1cclxuXHJcblx0XHR2aWV3TW9kZWwub24oJ25ld1BhZ2UnLCBfcmVsb2FkKTtcclxuXHRcdHZpZXdNb2RlbC5vbignc29ydEJ5JywgX3JlbG9hZCk7XHJcblx0XHRzdG9yYWdlLm9uKCdmaWx0ZXInLCBfcmVsb2FkKTtcclxuXHR9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlNb2RlbCBpbXBsZW1lbnRzIElEaXNwYWx5TW9kZWwge1xyXG5cdGRhdGE6IElSYXdEYXRhW107XHJcblx0cGFnZSA9IDE7XHJcblx0dG90YWxQYWdlczogbnVtYmVyO1xyXG5cdHRvdGFsUm93czogbnVtYmVyO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihkYXRhVG9EaXNwbGF5OiBJUmF3RGF0YVtdLCBwYWdlOiBudW1iZXIsIHRvdGFsUGFnZXM6IG51bWJlciwgdG90YWxSb3dzOiBudW1iZXIpIHtcclxuXHRcdHRoaXMuZGF0YSA9IGRhdGFUb0Rpc3BsYXk7XHJcblx0XHRpZiAocGFnZSA+IDApIHtcclxuXHRcdFx0dGhpcy5wYWdlID0gcGFnZTtcclxuXHRcdH1cclxuXHRcdHRoaXMudG90YWxQYWdlcyA9IHRvdGFsUGFnZXM7XHJcblx0XHR0aGlzLnRvdGFsUm93cyA9IHRvdGFsUm93cztcclxuXHR9XHJcbn0iLCIndXNlIHN0cmljdCc7XHJcbmNsYXNzIEZpbGwge1xyXG5cdGNvbnN0cnVjdG9yKHN0b3JhZ2UsIHZpZXdNb2RlbCkge1xyXG5cdFx0dGhpcy52aWV3TW9kZWwgPSB2aWV3TW9kZWw7XHJcblx0XHR0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xyXG5cdH07XHJcblxyXG5cdHRoZWFkKCkge1xyXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMsXHJcblx0XHRcdHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdGNsYXNzUnVsZXMgPSBbJ3Jlc2l6YWJsZScsICdzb3J0YWJsZScsICdmaWx0ZXJhYmxlJywgJ2hpZGRlbiddLFxyXG5cdFx0XHRjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcclxuXHJcblx0XHRzdG9yYWdlLiRoZWFkTGFiZWxzLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0Y29uc3QgJHRoID0gJCh0aGlzKSxcclxuXHRcdFx0XHQkd3JhcHBlciA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLFxyXG5cdFx0XHRcdGNvbE1vZGVsID0gY29sTW9kZWxzW2ldO1xyXG5cclxuXHRcdFx0JHRoLmRhdGEoJ1hncmlkLmRhdGEnLCBjb2xNb2RlbCk7XHJcblx0XHRcdGxldCBkYXRhID0gY29sTW9kZWwubGFiZWxGb3JtYXR0ZXIoJHdyYXBwZXIsICR0aCwgY29sTW9kZWwsIGkpO1xyXG5cdFx0XHRpZiAodHlwZW9mIChkYXRhKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHQkd3JhcHBlci5odG1sKGRhdGEpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkdGguaHRtbCgkd3JhcHBlcik7XHJcblx0XHRcdCQuZWFjaChjbGFzc1J1bGVzLCBmdW5jdGlvbiAoaSwgbWFyaykge1xyXG5cdFx0XHRcdGlmIChjb2xNb2RlbFttYXJrXSkge1xyXG5cdFx0XHRcdFx0JHRoLmFkZENsYXNzKG1hcmspO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkdGgucmVtb3ZlQ2xhc3MobWFyayk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5maWx0ZXJUb29sYmFyKCk7XHJcblx0fTtcclxuXHJcblx0ZmlsdGVyVG9vbGJhcigpIHtcclxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHR2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbCxcclxuXHRcdFx0Y29sTW9kZWxzID0gc3RvcmFnZS5jb2xNb2RlbHM7XHJcblx0XHRpZiAoc3RvcmFnZS4kZmlsdGVyVG9vbGJhckl0ZW1zKSB7XHJcblx0XHRcdHN0b3JhZ2UuJGZpbHRlclRvb2xiYXJJdGVtcy5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdFx0Y29uc3QgJGNlbGwgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdFx0Y29sTW9kZWwgPSBjb2xNb2RlbHNbaV07XHJcblx0XHRcdFx0aWYgKGNvbE1vZGVsLmZpbHRlcmFibGUgJiYgY29sTW9kZWwuZmlsdGVyVG9vbGJhckZvcm1hdHRlcikge1xyXG5cdFx0XHRcdFx0bGV0IGRhdGEgPSBjb2xNb2RlbC5maWx0ZXJUb29sYmFyRm9ybWF0dGVyKCRjZWxsLCBjb2xNb2RlbCk7XHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIChkYXRhKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRcdFx0JGNlbGwuaHRtbChkYXRhKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JGNlbGwuZW1wdHkoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dGJvZHkoKSB7XHJcblx0XHRjb25zdCBzZWxmID0gdGhpcyxcclxuXHRcdFx0c3RvcmFnZSA9IHRoaXMuc3RvcmFnZSxcclxuXHRcdFx0ZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXHJcblx0XHRcdGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzLFxyXG5cdFx0XHR2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbCxcclxuXHRcdFx0ZGF0YVRvRGlzcGxheSA9IHZpZXdNb2RlbC5kYXRhLFxyXG5cdFx0XHQkaGVhZFdyYXAgPSBzdG9yYWdlLiRoZWFkVGFibGUucGFyZW50KCksXHJcblx0XHRcdCRncmlkV3JhcCA9IHN0b3JhZ2UuJGdyaWRUYWJsZS5wYXJlbnQoKSxcclxuXHRcdFx0ZGF0YSA9IHN0b3JhZ2UuZGF0YTtcclxuXHJcblx0XHRsZXQgdGJvZHksXHJcblx0XHRcdG51bSA9IDA7XHJcblxyXG5cdFx0Y29sTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGNvbE1vZGVsLCBpKSB7XHJcblx0XHRcdGNvbE1vZGVsLl9jaGVjaygpO1xyXG5cdFx0XHRjb25zdCAkdGQgPSBzdG9yYWdlLiRoZWFkTGFiZWxzLmVxKGkpO1xyXG5cdFx0XHRpZiAoIWNvbE1vZGVsLmhpZGRlbikge1xyXG5cdFx0XHRcdG51bSsrO1xyXG5cdFx0XHRcdGlmIChudW0gJSAyKSB7XHJcblx0XHRcdFx0XHQkdGQuYWRkQ2xhc3MoJ29kZCcpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkdGQuYWRkQ2xhc3MoJ2V2ZW4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRib2R5ID0gdGhpcy5fY3JlYXRlU2hhZG93Qm9keShmcmFnbWVudCk7XHJcblxyXG5cdFx0JCh0Ym9keSkuZmluZCgndHInKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdGNvbnN0IHJvd0RhdGEgPSBkYXRhVG9EaXNwbGF5W2ldO1xyXG5cdFx0XHRzZWxmLl9maWxsUm93KCQodGhpcyksIHJvd0RhdGEsIGRhdGEpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0c3RvcmFnZS4kZ3JpZFRhYmxlLmZpbmQoJz50Ym9keScpLnJlbW92ZSgpO1xyXG5cdFx0JGhlYWRXcmFwLmNzcyh7ICdwYWRkaW5nLXJpZ2h0JzogJycgfSk7XHJcblx0XHRzdG9yYWdlLiRncmlkVGFibGUuYXBwZW5kKHRib2R5KTtcclxuXHJcblx0XHRpZiAoJGdyaWRXcmFwLmdldCgwKS5vZmZzZXRXaWR0aCAtICRncmlkV3JhcC5nZXQoMCkuY2xpZW50V2lkdGgpIHtcclxuXHRcdFx0JGhlYWRXcmFwLmNzcyh7ICdwYWRkaW5nLXJpZ2h0Jzogc3RvcmFnZS5zY3JvbGxiYXJXaWR0aCArICdweCcgfSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLl91cGRhdGVIZWFkKCk7XHJcblx0fTtcclxuXHJcblx0X2NyZWF0ZVNoYWRvd0JvZHkoZnJhZ21lbnQsIGFtb3VudCkge1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcclxuXHRcdFx0c3RvcmFnZSA9IHRoaXMuc3RvcmFnZSxcclxuXHRcdFx0Y29sTW9kZWxzID0gc3RvcmFnZS5jb2xNb2RlbHMsXHJcblx0XHRcdHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKSxcclxuXHRcdFx0dmlld01vZGVsID0gdGhpcy52aWV3TW9kZWwsXHJcblx0XHRcdHJvd3NDb3VudCA9IHZpZXdNb2RlbC5kYXRhLmxlbmd0aDtcclxuXHJcblx0XHRsZXQgdHIgPSAnPHRyPicgKyBBcnJheShjb2xNb2RlbHMubGVuZ3RoICsgMSkuam9pbignPHRkPjwvdGQ+JykgKyAnPC90cj4nLFxyXG5cdFx0XHR0cnMgPSAnPHRib2R5PicgKyBuZXcgQXJyYXkocm93c0NvdW50ICsgMSkuam9pbih0cikgKyAnPHRib2R5Pic7XHJcblxyXG5cdFx0aWYgKCFmcmFnbWVudCkge1xyXG5cdFx0XHRmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHRcdH1cclxuXHJcblx0XHR0Ym9keS5pbm5lckhUTUwgPSB0cnM7XHJcblxyXG5cdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGJvZHkpO1xyXG5cdFx0cmV0dXJuIHRib2R5O1xyXG5cdH07XHJcblxyXG5cdF9maWxsUm93KCR0ciwgcm93RGF0YSwgZGF0YSkge1xyXG5cclxuXHRcdGNvbnN0ICR0ZHMgPSAkdHIuZmluZCgndGQnKSxcclxuXHRcdFx0c3RvcmFnZSA9IHRoaXMuc3RvcmFnZSxcclxuXHRcdFx0Y29sTW9kZWxzID0gc3RvcmFnZS5jb2xNb2RlbHM7XHJcblx0XHRsZXQgbnVtID0gMDtcclxuXHJcblx0XHQkdHIuZGF0YSgnWGdyaWQuZGF0YScsIHJvd0RhdGEpO1xyXG5cclxuXHRcdCQuZWFjaChjb2xNb2RlbHMsIGZ1bmN0aW9uIChpLCBjb2xNb2RlbCkge1xyXG5cdFx0XHRsZXQgdmFsdWUgPSByb3dEYXRhW2NvbE1vZGVsLmtleV0sXHJcblx0XHRcdFx0JHRkID0gJHRkcy5lcShpKSxcclxuXHRcdFx0XHRkYXRhO1xyXG5cclxuXHRcdFx0aWYgKGNvbE1vZGVsLmhpZGRlbikge1xyXG5cdFx0XHRcdCR0ZC5yZW1vdmUoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRudW0rKztcclxuXHRcdFx0XHRkYXRhID0gY29sTW9kZWwuY2VsbEZvcm1hdHRlcigkdGQsIHZhbHVlLCByb3dEYXRhLCBkYXRhKTtcclxuXHRcdFx0XHRpZiAobnVtICUgMikge1xyXG5cdFx0XHRcdFx0JHRkLmFkZENsYXNzKCdvZGQnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JHRkLmFkZENsYXNzKCdldmVuJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0eXBlb2YgKGRhdGEpICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdFx0JHRkLmh0bWwoZGF0YSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRfdXBkYXRlSGVhZCgpIHtcclxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHRjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscyxcclxuXHRcdFx0dmlld01vZGVsID0gdGhpcy52aWV3TW9kZWwsXHJcblx0XHRcdCRoZWFkTGFiZWxzID0gc3RvcmFnZS4kaGVhZExhYmVscyxcclxuXHRcdFx0c29ydEJ5ID0ge307XHJcblxyXG5cdFx0dmlld01vZGVsLnNvcnRCeS5mb3JFYWNoKGZ1bmN0aW9uIChzb3J0UnVsZSkge1xyXG5cdFx0XHRzb3J0Qnlbc29ydFJ1bGUuYnldID0gc29ydFJ1bGUub3JkZXI7XHJcblx0XHR9KTtcclxuXHJcblx0XHRjb2xNb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAoY29sTW9kZWwsIGkpIHtcclxuXHRcdFx0Y29uc3QgJGxhYmVsID0gJGhlYWRMYWJlbHMuZXEoaSksXHJcblx0XHRcdFx0b3JkZXIgPSBzb3J0QnlbY29sTW9kZWwuYWxpYXNdO1xyXG5cdFx0XHRpZiAob3JkZXIpIHtcclxuXHRcdFx0XHQkbGFiZWwuYXR0cignZGF0YS1zb3J0Jywgb3JkZXIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCRsYWJlbC5yZW1vdmVBdHRyKCdkYXRhLXNvcnQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGw7XHJcbiIsImltcG9ydCBvcGVyYXRvcnMgZnJvbSAnLi9PcGVyYXRvcnMnO1xyXG5jbGFzcyBGaWx0ZXIge1xyXG5cdGV4ZWMoZGF0YSwgZ3JvdXAsIGdldERhdGEpIHtcclxuXHRcdGNvbnN0IG5ld0RhdGEgPSBkYXRhLmZpbHRlcigoaXRlbSwgaSkgPT4ge1xyXG5cdFx0XHRjb25zdCBnZXQgPSBnZXREYXRhKCksXHJcblx0XHRcdFx0c3RhdGUgPSB0aGlzLl9jaGVjayhncm91cCwgaXRlbSwgZ2V0KTtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gbmV3RGF0YTtcclxuXHR9O1xyXG5cdHByaXZhdGUgX29yKHJ1bGVzLCByb3dEYXRhLCBnZXQpIHtcclxuXHRcdGxldCBpID0gcnVsZXMubGVuZ3RoO1xyXG5cdFx0d2hpbGUgKGktLSkge1xyXG5cdFx0XHRjb25zdCBydWxlID0gcnVsZXNbaV07XHJcblx0XHRcdGlmICghb3BlcmF0b3JzW3J1bGUub3BdKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHZhbHVlID0gZ2V0KHJ1bGUuZmllbGQsIHJvd0RhdGEpLFxyXG5cdFx0XHRcdHN0YXRlID0gb3BlcmF0b3JzW3J1bGUub3BdKHJ1bGUuZGF0YSwgdmFsdWUpO1xyXG5cdFx0XHRpZiAoc3RhdGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHJcblx0cHJpdmF0ZSBfYW5kKHJ1bGVzLCByb3dEYXRhLCBnZXQpIHtcclxuXHRcdGxldCBpID0gcnVsZXMubGVuZ3RoO1xyXG5cdFx0d2hpbGUgKGktLSkge1xyXG5cdFx0XHRjb25zdCBydWxlID0gcnVsZXNbaV07XHJcblx0XHRcdGlmICghb3BlcmF0b3JzW3J1bGUub3BdKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IHZhbHVlID0gZ2V0KHJ1bGUuZmllbGQsIHJvd0RhdGEpLFxyXG5cdFx0XHRcdHN0YXRlID0gb3BlcmF0b3JzW3J1bGUub3BdKHJ1bGUuZGF0YSwgdmFsdWUpO1xyXG5cdFx0XHRpZiAoIXN0YXRlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9O1xyXG5cdHByaXZhdGUgX2NoZWNrKGdyb3VwLCByb3dEYXRhLCBnZXQpIHtcclxuXHRcdGNvbnN0IGlzT3IgPSBncm91cC5ydWxlcy5sZW5ndGggJiYgU3RyaW5nKGdyb3VwLmdyb3VwT3ApLnRvVXBwZXJDYXNlKCkgPT09IFwiT1JcIjtcclxuXHRcdGlmICgkLmlzQXJyYXkoZ3JvdXAucnVsZXMpICYmIGdyb3VwLnJ1bGVzLmxlbmd0aCkge1xyXG5cdFx0XHRpZiAoaXNPcikge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLl9vcihncm91cC5ydWxlcywgcm93RGF0YSwgZ2V0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fYW5kKGdyb3VwLnJ1bGVzLCByb3dEYXRhLCBnZXQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEZpbHRlcigpOyIsIid1c2Ugc3RyaWN0JztcclxuY2xhc3MgRmlsdGVyVG9vbGJhciB7XHJcblx0Y29uc3RydWN0b3Ioc3RvcmFnZSwgdmlld01vZGVsLCBvcHRpb25zKSB7XHJcblx0XHR0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xyXG5cdFx0dGhpcy52aWV3TW9kZWwgPSB2aWV3TW9kZWw7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cdFx0dGhpcy5fYmluZCgpO1xyXG5cdFx0dGhpcy50aW1lb3V0T25LZXlkb3duID0gbnVsbDtcclxuXHR9XHJcblx0dHJpZ2dlclRvb2xiYXIoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHR2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbCxcclxuXHRcdFx0Y29sTW9kZWxzID0gc3RvcmFnZS5jb2xNb2RlbHMsXHJcblx0XHRcdG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXHJcblx0XHRcdHJ1bGVzID0gW10sXHJcblx0XHRcdGRlZmF1bHRTZWFyY2ggPSAnY24nLFxyXG5cdFx0XHRncm91cE9wID0gb3B0aW9ucy5maWx0ZXJUb29sYmFyR3JvdXBPcCA9PT0gJ0FORCcgPyAnQU5EJyA6ICdPUic7XHJcblx0XHRsZXQgcnVsZUdyb3VwID0gbnVsbDtcclxuXHJcblx0XHRpZiAoIXN0b3JhZ2UuJGZpbHRlclRvb2xiYXJJdGVtcykge1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHJcblx0XHRzdG9yYWdlLiRmaWx0ZXJUb29sYmFySXRlbXMuZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRjb25zdCAkZmlsdGVyID0gJCh0aGlzKSxcclxuXHRcdFx0XHQkZWxlbSA9ICRmaWx0ZXIuZmluZCgnLlhncmlkLWZpbHRlcicpXHJcblx0XHRcdGlmICgkZWxlbS5sZW5ndGgpIHtcclxuXHRcdFx0XHRjb25zdCBjb2xNb2RlbCA9IGNvbE1vZGVsc1tpXSxcclxuXHRcdFx0XHRcdHNldHRpbmdzID0gY29sTW9kZWwuZmlsdGVyVG9vbGJhclNldHRpbmdzIHx8IHt9LFxyXG5cdFx0XHRcdFx0ZmlsdGVyT3B0aW9uID0gY29sTW9kZWwuZmlsdGVyT3B0aW9uIHx8IGRlZmF1bHRTZWFyY2gsXHJcblx0XHRcdFx0XHRmaWVsZE5hbWUgPSBjb2xNb2RlbC5hbGlhcyB8fCBjb2xNb2RlbC5rZXk7XHJcblxyXG5cdFx0XHRcdGxldCB2YWx1ZSA9ICRlbGVtLnZhbCgpO1xyXG5cclxuXHRcdFx0XHRpZiAodHlwZW9mIChzZXR0aW5ncy50cmFuc2Zvcm1EYXRhKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdFx0dmFsdWUgPSBzZXR0aW5ncy50cmFuc2Zvcm1EYXRhKHZhbHVlLCBzZXR0aW5ncyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAodmFsdWUgfHwgZmlsdGVyT3B0aW9uID09PSBcIm51XCIgfHwgZmlsdGVyT3B0aW9uID09PSBcIm5uXCIpIHtcclxuXHRcdFx0XHRcdHJ1bGVzLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRmaWVsZDogZmllbGROYW1lLFxyXG5cdFx0XHRcdFx0XHRvcDogZmlsdGVyT3B0aW9uLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiB2YWx1ZVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAocnVsZXMubGVuZ3RoKSB7XHJcblx0XHRcdHJ1bGVHcm91cCA9IHtcclxuXHRcdFx0XHRncm91cE9wLFxyXG5cdFx0XHRcdHJ1bGVzXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHN0b3JhZ2UuZmlsdGVyID0gcnVsZUdyb3VwO1xyXG5cdH07XHJcblxyXG5cdF9iaW5kKCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5vbigna2V5cHJlc3MnLCAnaW5wdXQuWGdyaWQtaW5wdXQuWGdyaWQtb25FbnRlcicsIHRoaXMuX2hhbmRsZXJGaWx0ZXJPbkVudGVyLmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLm9uKCdrZXlkb3duJywgJ2lucHV0LlhncmlkLWlucHV0LlhncmlkLW9uS2V5ZG93bicsIHRoaXMuX2hhbmRsZXJGaWx0ZXJPbktleWRvd24uYmluZCh0aGlzKSk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUub24oJ2NoYW5nZScsICcuWGdyaWQtZmlsdGVyLlhncmlkLW9uQ2hhbmdlJywgdGhpcy5faGFuZGxlckZpbHRlck9uQ2hhbmdlLmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLm9uKCdjbGljaycsICcuWGdyaWQtcmVzZXQnLCB0aGlzLl9oYW5kbGVyRmlsdGVyT25SZXNldC5iaW5kKHRoaXMpKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5vbignY2xpY2snLCAnLlhncmlkLW9uU3VibWl0JywgdGhpcy5faGFuZGxlckZpbHRlck9uU3VibWl0LmJpbmQodGhpcykpO1xyXG5cdH07XHJcblxyXG5cdF9oYW5kbGVyRmlsdGVyT25TdWJtaXQoZSkge1xyXG5cdFx0JChlLmN1cnJlbnRUYXJnZXQpLmJsdXIoKTtcclxuXHRcdHRoaXMudHJpZ2dlclRvb2xiYXIoKTtcclxuXHR9O1xyXG5cclxuXHRfaGFuZGxlckZpbHRlck9uUmVzZXQoZSkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZSxcclxuXHRcdFx0JHNlbGwgPSAkKGUuY3VycmVudFRhcmdldCkuYmx1cigpLnBhcmVudHMoJy5YZ3JpZC1maWx0ZXItY2VsbDplcSgwKScpLFxyXG5cdFx0XHRhbGlhcyA9ICRzZWxsLmF0dHIoJ2RhdGEtYWxpYXMnKSxcclxuXHRcdFx0JGNvbnRyb2wgPSAkc2VsbC5maW5kKCcuWGdyaWQtZmlsdGVyJyksXHJcblx0XHRcdGNvbE1vZGVsID0gc3RvcmFnZS5jb2xNb2RlbHNEaWN0aW9uYXJ5W2FsaWFzXSxcclxuXHRcdFx0ZGF0YSA9ICRjb250cm9sLnZhbCgpO1xyXG5cclxuXHRcdGlmIChjb2xNb2RlbCkge1xyXG5cdFx0XHRpZiAoY29sTW9kZWwuZmlsdGVyVG9vbGJhclNldHRpbmdzLmZvcm1Db250cm9sVHlwZSA9PT0gJ3NlbGVjdCcpIHtcclxuXHRcdFx0XHQkY29udHJvbC52YWwoW10pLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZEluZGV4ID0gLTE7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JGNvbnRyb2wudmFsKCcnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnRyaWdnZXJUb29sYmFyKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRfaGFuZGxlckZpbHRlck9uQ2hhbmdlKGUpIHtcclxuXHRcdHRoaXMudHJpZ2dlclRvb2xiYXIoKTtcclxuXHR9O1xyXG5cdF9oYW5kbGVyRmlsdGVyT25LZXlkb3duKGUpIHtcclxuXHJcblx0XHR2YXIga2V5ID0gZS53aGljaDtcclxuXHRcdHN3aXRjaCAoa2V5KSB7XHJcblx0XHRcdGNhc2UgMTM6XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRjYXNlIDk6XHJcblx0XHRcdGNhc2UgMTY6XHJcblx0XHRcdGNhc2UgMzc6XHJcblx0XHRcdGNhc2UgMzg6XHJcblx0XHRcdGNhc2UgMzk6XHJcblx0XHRcdGNhc2UgNDA6XHJcblx0XHRcdGNhc2UgMjc6XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLnRpbWVvdXRPbktleWRvd24pIHtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRPbktleWRvd24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnRpbWVvdXRPbktleWRvd24gPSBzZXRUaW1lb3V0KFxyXG5cdFx0XHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRyaWdnZXJUb29sYmFyKCk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0NTAwXHJcblx0XHRcdFx0KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRfaGFuZGxlckZpbHRlck9uRW50ZXIoZSkge1xyXG5cdFx0dmFyIGtleSA9IGUuY2hhckNvZGUgfHwgZS5rZXlDb2RlIHx8IDA7XHJcblx0XHRpZiAoa2V5ID09PSAxMykge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHRoaXMudHJpZ2dlclRvb2xiYXIoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyVG9vbGJhcjsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJUb29sYmFyTW9kZWwgaW1wbGVtZW50cyBJRmlsdGVyVG9vbGJhck1vZGVsIHtcclxuXHRmb3JtQ29udHJvbFR5cGUgPSAndGV4dCc7XHJcblx0c2VsZWN0T3B0aW9ucyA9IFtdO1xyXG5cdHBsYWNlaG9sZGVyID0gJyc7XHJcblx0b25FbnRlciA9IHRydWU7XHJcblx0b25LZXlkb3duID0gZmFsc2U7XHJcblx0b25DaGFuZ2UgPSBmYWxzZTtcclxuXHRhbGxvd1Jlc2V0QnV0dG9uID0gdHJ1ZTtcclxuXHRhbGxvd1N1Ym1pdEJ1dHRvbiA9IHRydWU7XHJcblx0dHJhbnNmb3JtRGF0YT86IEZ1bmN0aW9uOyBcclxuXHJcblx0Y29uc3RydWN0b3Ioc2V0dGluZ3MpIHtcclxuXHRcdCQuZXh0ZW5kKHRoaXMsIHNldHRpbmdzKTtcclxuXHRcdGlmICghdGhpcy50cmFuc2Zvcm1EYXRhKSB7XHJcblx0XHRcdGlmICh0aGlzLmZvcm1Db250cm9sVHlwZSA9PT0gJ3NlbGVjdCcpIHtcclxuXHRcdFx0XHR0aGlzLnRyYW5zZm9ybURhdGEgPSAoKGRhdGEpID0+IHtcclxuXHRcdFx0XHRcdGxldCByZXN1bHQ7XHJcblx0XHRcdFx0XHRjb25zdCBzZWxlY3RPcHRpb25zID0gdGhpcy5zZWxlY3RPcHRpb25zO1xyXG5cdFx0XHRcdFx0aWYgKCQuaXNBcnJheShkYXRhKSkge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBbXTtcclxuXHRcdFx0XHRcdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBpdGVtID0gc2VsZWN0T3B0aW9uc1trZXldO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChpdGVtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucHVzaChpdGVtLnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnB1c2goa2V5KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRpZiAoIXJlc3VsdC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKHNlbGVjdE9wdGlvbnNbZGF0YV0pIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VsZWN0T3B0aW9uc1tkYXRhXS52YWx1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG4iLCJjbGFzcyBGaXhlZEhlYWRlciB7XHJcblx0Y29uc3RydWN0b3Ioc3RvcmFnZSkge1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHRcdHRoaXMucHJvcGVydGllcyA9IHtcclxuXHJcblx0XHR9XHJcblx0XHR0aGlzLl9leGVjKCk7XHJcblx0fVxyXG5cclxuXHRyZXNpemUoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHRzZWxmID0gdGhpcztcclxuXHRcdGxldCB3ID0gMDtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5maW5kKCcuWGdyaWQtdGhlYWQtdyBpZnJhbWUnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdGNvbnN0ICRpZnJhbWUgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdHdpZHRoID0gJGlmcmFtZS53aWR0aCgpLFxyXG5cdFx0XHRcdGFsaWFzID0gJGlmcmFtZS5hdHRyKCdkYXRhLWFsaWFzJyk7XHJcblx0XHRcdHNlbGYuX2hhbmRsZXJSZXNpemVkQ2VsbFdpZHRoKHdpZHRoLCBpLCBhbGlhcyk7XHJcblx0XHR9KTtcclxuXHJcblx0fTtcclxuXHJcblx0X2V4ZWMoKSB7XHJcblx0XHR0aGlzLl9idWlsZCgpO1xyXG5cdFx0dGhpcy5fYmluZCgpO1xyXG5cdH07XHJcblxyXG5cdF9idWlsZCgpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdGNlbGxXaWR0aExpc3RlbmVycyA9IFtdLFxyXG5cdFx0XHRjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscyxcclxuXHRcdFx0cHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcztcclxuXHJcblx0XHRwcm9wZXJ0aWVzLiRjZWxsV2lkdGhSZWNpcGllbnRzID0gc3RvcmFnZS4kZ3JpZFRhYmxlLmZpbmQoJy5YZ3JpZC10Ym9keS13IGknKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5maW5kKCcuWGdyaWQtdGhlYWQtdyB0ZCcpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0Y29uc3QgaWZyYW1lID0gJCh0aGlzKS5maW5kKCdpZnJhbWUnKS5nZXQoMCk7XHJcblx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sJywgaSk7XHJcblx0XHRcdGNlbGxXaWR0aExpc3RlbmVycy5wdXNoKGlmcmFtZSk7XHJcblx0XHR9KTtcclxuXHRcdHByb3BlcnRpZXMuJGNlbGxXaWR0aExpc3RlbmVycyA9ICQoY2VsbFdpZHRoTGlzdGVuZXJzKTtcclxuXHR9O1xyXG5cclxuXHRfYmluZCgpIHtcclxuXHRcdGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXMsXHJcblx0XHRcdHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdHByb3BlcnRpZXMuJGNlbGxXaWR0aExpc3RlbmVycy5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdGNvbnN0IGlmcmFtZSA9IHRoaXMsXHJcblx0XHRcdFx0JGlmcmFtZSA9ICQoaWZyYW1lKTtcclxuXHJcblx0XHRcdHNlbGYuX2hhbmRsZXJSZXNpemVkQ2VsbFdpZHRoKCRpZnJhbWUud2lkdGgoKSwgaSwgJGlmcmFtZS5hdHRyKCdkYXRhLWFsaWFzJykpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQkKGlmcmFtZS5jb250ZW50V2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0c2VsZi5faGFuZGxlclJlc2l6ZWRDZWxsV2lkdGgoJGlmcmFtZS53aWR0aCgpLCBpLCAkaWZyYW1lLmF0dHIoJ2RhdGEtYWxpYXMnKSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sIDEwMCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRfaGFuZGxlclJlc2l6ZWRDZWxsV2lkdGgod2lkdGgsIG51bSwgYWxpYXMpIHtcclxuXHRcdGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXMsXHJcblx0XHRcdCRpdGVtID0gcHJvcGVydGllcy4kY2VsbFdpZHRoUmVjaXBpZW50cy5maWx0ZXIoJ1tkYXRhLWFsaWFzPVwiJyArIGFsaWFzICsgJ1wiXScpO1xyXG5cdFx0JGl0ZW0ud2lkdGgod2lkdGgpO1xyXG5cdFx0JGl0ZW0ucGFyZW50KCkud2lkdGgod2lkdGgpO1xyXG5cdH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRml4ZWRIZWFkZXI7IiwiaW1wb3J0IHBpcGVzIGZyb20gJy4vUGlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxTb3J0UnVsZU1vZGVsIGltcGxlbWVudHMgSUxvY2FsU29ydFJ1bGUge1xyXG5cdGJ5OiBzdHJpbmc7XHJcblx0b3JkZXI6IHN0cmluZztcclxuXHRjb2xNb2RlbD86IElDb2xNb2RlbDtcclxuXHRnZXQ6IEZ1bmN0aW9uID0gcGlwZXMuZ2V0QnlUeXBlKCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9yZGVyOiBzdHJpbmcsIGJ5OiBzdHJpbmcsIGNvbE1vZGVsOiBudWxsIHwgSUNvbE1vZGVsKSB7XHJcblx0XHR0aGlzLm9yZGVyID0gb3JkZXI7XHJcblx0XHR0aGlzLmJ5ID0gYnk7XHJcblxyXG5cdFx0aWYgKGNvbE1vZGVsKSB7XHJcblx0XHRcdHRoaXMuY29sTW9kZWwgPSBjb2xNb2RlbDtcclxuXHRcdFx0dGhpcy5nZXQgPSBjb2xNb2RlbC5zb3J0Rm9ybWF0dGVyO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJjbGFzcyBPcGVyYXRvcnMge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5lcSA9IHRoaXMuZXF1YWxzO1xyXG5cdFx0dGhpcy5uZSA9IHRoaXMubm90RXF1YWxzO1xyXG5cdFx0dGhpcy5sdCA9IHRoaXMubGVzcztcclxuXHRcdHRoaXMubGUgPSB0aGlzLmxlc3NPckVxdWFscztcclxuXHRcdHRoaXMuZ3QgPSB0aGlzLmdyZWF0ZXI7XHJcblx0XHR0aGlzLmdlID0gdGhpcy5ncmVhdGVyT3JFcXVhbHM7XHJcblx0XHR0aGlzLmNuID0gdGhpcy5jb250YWlucztcclxuXHRcdHRoaXMubmMgPSAoKC4uLmFyZykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gIXRoaXMuY29udGFpbnMuYXBwbHkodGhpcywgYXJnKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5idyA9IHRoaXMuc3RhcnRzV2l0aDtcclxuXHRcdHRoaXMuYm4gPSAoKC4uLmFyZykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gIXRoaXMuc3RhcnRzV2l0aC5hcHBseSh0aGlzLCBhcmcpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmVuID0gKCguLi5hcmcpID0+IHtcclxuXHRcdFx0cmV0dXJuICF0aGlzLmVuZHNXaXRoLmFwcGx5KHRoaXMsIGFyZyk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuZXcgPSB0aGlzLmVuZHNXaXRoO1xyXG5cdFx0dGhpcy5pbiA9IHRoaXMuaW5BcnJheTtcclxuXHRcdHRoaXMubmkgPSAoKC4uLmFyZykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gIXRoaXMuaW5BcnJheS5hcHBseSh0aGlzLCBhcmcpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLm51ID0gdGhpcy5pc051bGw7XHJcblx0XHR0aGlzLm5uID0gKCguLi5hcmcpID0+IHtcclxuXHRcdFx0cmV0dXJuICF0aGlzLmlzTnVsbC5hcHBseSh0aGlzLCBhcmcpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRlcXVhbHMoYSwgYikge1xyXG5cdFx0cmV0dXJuIGEgPT09IGI7XHJcblx0fTtcclxuXHRub3RFcXVhbHMoYSwgYikge1xyXG5cdFx0cmV0dXJuIGEgIT09IGI7XHJcblx0fTtcclxuXHRpc051bGwoYSkge1xyXG5cdFx0cmV0dXJuIGEgPT09IG51bGw7XHJcblx0fTtcclxuXHRncmVhdGVyKGEsIGIpIHtcclxuXHRcdHJldHVybiBhID4gYjtcclxuXHR9O1xyXG5cdGxlc3MoYSwgYikge1xyXG5cdFx0cmV0dXJuIGEgPCBiO1xyXG5cdH07XHJcblx0Z3JlYXRlck9yRXF1YWxzKGEsIGIpIHtcclxuXHRcdHJldHVybiBhID49IGI7XHJcblx0fTtcclxuXHRsZXNzT3JFcXVhbHMoYSwgYikge1xyXG5cdFx0cmV0dXJuIGEgPD0gYjtcclxuXHR9O1xyXG5cdGluQXJyYXkoYXJyYXksIGIpIHtcclxuXHRcdHJldHVybiAkLmluQXJyYXkoYiwgYXJyYXkpICE9PSAtMTtcclxuXHR9O1xyXG5cdHN0YXJ0c1dpdGgoYSwgYiwgaW5zZW5zaXRpdmUpIHtcclxuXHRcdGEgPSBTdHJpbmcoYSk7XHJcblx0XHRiID0gU3RyaW5nKGIpO1xyXG5cdFx0aWYgKGluc2Vuc2l0aXZlKSB7XHJcblx0XHRcdGEgPSBhLnRvVXBwZXJDYXNlKCk7XHJcblx0XHRcdGIgPSBiLnRvVXBwZXJDYXNlKCk7XHJcblx0XHR9XHJcblx0XHRsZXQgbGVuZ3RoID0gYS5sZW5ndGgsXHJcblx0XHRcdHN0ciA9IGEuc3Vic3RyKDAsIGxlbmd0aCk7XHJcblx0XHRyZXR1cm4gc3RyID09PSBiXHJcblx0fTtcclxuXHRlbmRzV2l0aChhLCBiLCBpbnNlbnNpdGl2ZSkge1xyXG5cdFx0YSA9IFN0cmluZyhhKTtcclxuXHRcdGIgPSBTdHJpbmcoYik7XHJcblx0XHRpZiAoaW5zZW5zaXRpdmUpIHtcclxuXHRcdFx0YSA9IGEudG9VcHBlckNhc2UoKTtcclxuXHRcdFx0YiA9IGIudG9VcHBlckNhc2UoKTtcclxuXHRcdH1cclxuXHRcdGxldCBsZW5ndGggPSBiLmxlbmd0aCAqIC0xLFxyXG5cdFx0XHRzdHIgPSBhLnN1YnN0cihsZW5ndGgpO1xyXG5cdFx0cmV0dXJuIHN0ciA9PT0gYjtcclxuXHR9O1xyXG5cdGNvbnRhaW5zKGEsIGIsIGluc2Vuc2l0aXZlKSB7XHJcblx0XHRhID0gU3RyaW5nKGEpO1xyXG5cdFx0YiA9IFN0cmluZyhiKTtcclxuXHRcdGlmIChpbnNlbnNpdGl2ZSkge1xyXG5cdFx0XHRhID0gYS50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0XHRiID0gYi50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGIuaW5kZXhPZihhKSAhPT0gLTE7XHJcblx0fTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgT3BlcmF0b3JzKCk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5jbGFzcyBQYWdpbmF0aW9uIHtcclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCBzdG9yYWdlLCB2aWV3TW9kZWwsICkge1xyXG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHJcblx0XHR0aGlzLl9zdWJzY3JpYmUoKTtcclxuXHRcdHRoaXMucGFnZSgpO1xyXG5cdFx0dGhpcy50b3RhbFBhZ2VzKCk7XHJcblx0XHR0aGlzLmV4ZWMoKTtcclxuXHR9O1xyXG5cdGV4ZWMoKSB7XHJcblx0XHR0aGlzLl9iaW5kKCk7XHJcblx0fTtcclxuXHJcblx0cGFnZSgpIHtcclxuXHRcdHRoaXMuc3RvcmFnZS4kcGFnaW5hdGlvbkJveC5maW5kKCcuWGdyaWQtY3VycmVudC1wYWdlJykudmFsKHRoaXMudmlld01vZGVsLnBhZ2UpO1xyXG5cdH07XHJcblxyXG5cdHRvdGFsUGFnZXMoKSB7XHJcblx0XHR0aGlzLnN0b3JhZ2UuJHBhZ2luYXRpb25Cb3guZmluZCgnLlhncmlkLXRvdGFsLXBhZ2VzJykudGV4dCh0aGlzLnZpZXdNb2RlbC50b3RhbFBhZ2VzKTtcclxuXHR9O1xyXG5cclxuXHRfc3Vic2NyaWJlKCkge1xyXG5cdFx0Y29uc3Qgdmlld01vZGVsID0gdGhpcy52aWV3TW9kZWw7XHJcblx0XHR2aWV3TW9kZWwub24oJ3BhZ2UnLCB0aGlzLnBhZ2UuYmluZCh0aGlzKSk7XHJcblx0XHR2aWV3TW9kZWwub24oJ3RvdGFsUGFnZXMnLCB0aGlzLnRvdGFsUGFnZXMuYmluZCh0aGlzKSk7XHJcblx0fTtcclxuXHJcblx0X2JpbmQoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveC5vbignY2xpY2sueGdyaWQnLCAnLlhncmlkLWZpcnN0JywgdGhpcy5faGFuZGxlckZpcnN0LmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveC5vbignY2xpY2sueGdyaWQnLCAnLlhncmlkLXByZXYnLCB0aGlzLl9oYW5kbGVyUHJldi5iaW5kKHRoaXMpKTtcclxuXHRcdHN0b3JhZ2UuJHBhZ2luYXRpb25Cb3gub24oJ2NsaWNrLnhncmlkJywgJy5YZ3JpZC1uZXh0JywgdGhpcy5faGFuZGxlck5leHQuYmluZCh0aGlzKSk7XHJcblx0XHRzdG9yYWdlLiRwYWdpbmF0aW9uQm94Lm9uKCdjbGljay54Z3JpZCcsICcuWGdyaWQtbGFzdCcsIHRoaXMuX2hhbmRsZXJMYXN0LmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveC5vbigna2V5cHJlc3MueGdyaWQnLCAnLlhncmlkLWN1cnJlbnQtcGFnZScsIHRoaXMuX2hhbmRsZXJHb1RvLmJpbmQodGhpcykpO1xyXG5cdH07XHJcblxyXG5cdF9oYW5kbGVyRmlyc3QoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0aWYgKHRoaXMudmlld01vZGVsLnBhZ2UgIT09IDEpIHtcclxuXHRcdFx0dGhpcy52aWV3TW9kZWwubmV3UGFnZSA9IDE7XHJcblx0XHR9XHJcblx0fTtcclxuXHRfaGFuZGxlckxhc3QoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0aWYgKHRoaXMudmlld01vZGVsLnBhZ2UgIT09IHRoaXMudmlld01vZGVsLnRvdGFsUGFnZXMpIHtcclxuXHRcdFx0dGhpcy52aWV3TW9kZWwubmV3UGFnZSA9IHRoaXMudmlld01vZGVsLnRvdGFsUGFnZXM7XHJcblx0XHR9XHJcblx0fTtcclxuXHRfaGFuZGxlck5leHQoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgcGFnZSA9IHRoaXMudmlld01vZGVsLnBhZ2UgKyAxO1xyXG5cdFx0aWYgKHBhZ2UgPD0gdGhpcy52aWV3TW9kZWwudG90YWxQYWdlcykge1xyXG5cdFx0XHR0aGlzLnZpZXdNb2RlbC5uZXdQYWdlID0gcGFnZTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdF9oYW5kbGVyUHJldihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBwYWdlID0gdGhpcy52aWV3TW9kZWwucGFnZSAtIDE7XHJcblx0XHRpZiAocGFnZSA+IDApIHtcclxuXHRcdFx0dGhpcy52aWV3TW9kZWwubmV3UGFnZSA9IHBhZ2U7XHJcblx0XHR9XHJcblx0fTtcclxuXHRfaGFuZGxlckdvVG8oZSkge1xyXG5cdFx0aWYgKGUud2hpY2ggPT09IDEzKSB7XHJcblx0XHRcdGxldCBwYWdlID0gJChlLmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xyXG5cdFx0XHRpZiAoIWlzTmFOKHBhZ2UpKSB7XHJcblx0XHRcdFx0cGFnZSA9ICtwYWdlO1xyXG5cdFx0XHRcdGlmIChwYWdlIDwgMSkge1xyXG5cdFx0XHRcdFx0cGFnZSA9IDE7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChwYWdlID4gdGhpcy52aWV3TW9kZWwudG90YWxQYWdlcykge1xyXG5cdFx0XHRcdFx0cGFnZSA9IHRoaXMudmlld01vZGVsLnRvdGFsUGFnZXM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudmlld01vZGVsLm5ld1BhZ2UgPSBwYWdlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMudmlld01vZGVsLnBhZ2UgPSB0aGlzLnZpZXdNb2RlbC5uZXdQYWdlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjsiLCJjbGFzcyBQaXBlcyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmludGVnZXIgPSB0aGlzLmludGVnZXIuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaW50ID0gdGhpcy5pbnRlZ2VyO1xyXG5cclxuXHRcdHRoaXMubnVtZXJpYyA9IHRoaXMubnVtZXJpYy5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5mbG9hdCA9IHRoaXMubnVtZXJpYztcclxuXHRcdHRoaXMubnVtYmVyID0gdGhpcy5udW1lcmljO1xyXG5cclxuXHRcdC8vdGhpcy5kYXRldGltZSA9IHRoaXMuZGF0ZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy50ZXh0ID0gKCh2YWx1ZSwgcm93RGF0YSwgY29sTW9kZWwpID0+IHtcclxuXHRcdFx0aWYgKGNvbE1vZGVsLmluc2Vuc2l0aXZlKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5zZW5zaXRpdmV0ZXh0LmNhbGwodGhpcywgdmFsdWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnNlbnNpdGl2ZXRleHQuY2FsbCh0aGlzLCB2YWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuaXNOb3RaZXJvID0ge1xyXG5cdFx0XHR1bmRlZmluZWQ6IDFcclxuXHRcdH07XHJcblxyXG5cdFx0WycnLCBudWxsLCBmYWxzZSwgdHJ1ZV0uZm9yRWFjaCgoa2V5KSA9PiB7XHJcblx0XHRcdHRoaXMuaXNOb3RaZXJvW2tleV0gPSAxO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Z2V0QnlUeXBlKHR5cGUpIHtcclxuXHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRjYXNlICdpbnQnOlxyXG5cdFx0XHRjYXNlICdpbnRlZ2VyJzpcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbnRlZ2VyO1xyXG5cdFx0XHRjYXNlICdmbG9hdCc6XHJcblx0XHRcdGNhc2UgJ251bWJlcic6XHJcblx0XHRcdGNhc2UgJ251bWVyaWMnOlxyXG5cdFx0XHRcdHJldHVybiB0aGlzLm51bWVyaWM7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudGV4dDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG51bWVyaWModmFsdWUpIHtcclxuXHRcdGxldCByZXN1bHQ7XHJcblx0XHRpZiAodGhpcy5pc05vdFplcm9bdmFsdWVdKSB7XHJcblx0XHRcdHJlc3VsdCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChpc05hTih2YWx1ZSkpIHtcclxuXHRcdFx0XHRyZXN1bHQgPSBwYXJzZUZsb2F0KFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvLC9nLCAnLicpLnJlcGxhY2UoL1tcXCQlXS9nLCAnJykpO1xyXG5cdFx0XHRcdHJlc3VsdCA9IGlzTmFOKHJlc3VsdCkgPyBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgOiByZXN1bHQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0ID0gK3ZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH07XHJcblxyXG5cdGludGVnZXIodmFsdWUpIHtcclxuXHRcdGxldCByZXN1bHQ7XHJcblx0XHRpZiAodGhpcy5pc05vdFplcm9bdmFsdWVdKSB7XHJcblx0XHRcdHJlc3VsdCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChpc05hTih2YWx1ZSkpIHtcclxuXHRcdFx0XHRyZXN1bHQgPSBTdHJpbmcodmFsdWUpLnJlcGxhY2UoL1tcXCQsJV0vZywgJycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJlc3VsdCA9IHBhcnNlSW50KHJlc3VsdCk7XHJcblx0XHRcdHJlc3VsdCA9IGlzTmFOKHJlc3VsdCkgPyBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgOiByZXN1bHQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH07XHJcblxyXG5cdGluc2Vuc2l0aXZldGV4dCh2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIHZhbHVlID8gJC50cmltKFN0cmluZyh2YWx1ZSkpIDogXCJcIjtcclxuXHR9O1xyXG5cclxuXHRzZW5zaXRpdmV0ZXh0KHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gKHZhbHVlID8gJC50cmltKFN0cmluZyh2YWx1ZSkpIDogXCJcIikudG9Mb3dlckNhc2UoKTtcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUGlwZXMoKTsiLCJpbXBvcnQgQ29sTW9kZWwgZnJvbSAnLi9Db2xNb2RlbCc7XHJcbmltcG9ydCBTb3J0UnVsZSBmcm9tICcuL1NvcnRSdWxlJztcclxuaW1wb3J0IFZpZXdNb2RlbCBmcm9tICcuL1ZpZXdNb2RlbCc7XHJcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vU3RvcmFnZSdcclxuXHJcbmNsYXNzIFByb2Nlc3NTZXR0aW5ncyB7XHJcblx0dmlld01vZGVsOiBWaWV3TW9kZWw7XHJcblx0c3RvcmFnZTogU3RvcmFnZTtcclxuXHRwcm9wZXJ0aWVzOiBJUHJvY2Vzc1NldHRpbmdzUHJvcGVydGllcztcclxuXHRvcHRpb25zOiBJUHJvY2Vzc1NldHRpbmdzT3B0aW9uc1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCBzdG9yYWdlLCB2aWV3TW9kZWwpIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHtcclxuXHRcdFx0Y29sTW9kZWxzOiBbXSxcclxuXHRcdFx0ZmlsdGVyVG9vbGJhcjogZmFsc2VcclxuXHRcdH0sIG9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMucHJvcGVydGllcyA9IHtcclxuXHRcdFx0c2Nyb2xsYmFyV2lkdGg6IG51bGxcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcclxuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblx0XHR0aGlzLl9leGVjKCk7XHJcblx0fTtcclxuXHJcblx0X2dldFNjcm9sbGJhcldpZHRoKCkge1xyXG5cdFx0bGV0IGRpdiwgd2lkdGg7XHJcblx0XHRpZiAodGhpcy5wcm9wZXJ0aWVzLnNjcm9sbGJhcldpZHRoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnByb3BlcnRpZXMuc2Nyb2xsYmFyV2lkdGg7XHJcblx0XHR9XHJcblxyXG5cdFx0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRkaXYuaW5uZXJIVE1MID0gJzxkaXYgc3R5bGU9XCJ3aWR0aDo1MHB4O2hlaWdodDo1MHB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTUwcHg7dG9wOi01MHB4O292ZXJmbG93OmF1dG87XCI+PGRpdiBzdHlsZT1cIndpZHRoOjFweDtoZWlnaHQ6MTAwcHg7XCI+PC9kaXY+PC9kaXY+JztcclxuXHRcdGRpdiA9IGRpdi5maXJzdENoaWxkO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdFx0d2lkdGggPSBkaXYub2Zmc2V0V2lkdGggLSBkaXYuY2xpZW50V2lkdGg7XHJcblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XHJcblx0XHR0aGlzLnByb3BlcnRpZXMuc2Nyb2xsYmFyV2lkdGggPSB3aWR0aDtcclxuXHRcdHJldHVybiB3aWR0aDtcclxuXHR9O1xyXG5cclxuXHRfY29sdW1uTW9kZWwoKSB7XHJcblx0XHRjb25zdCB7IHN0b3JhZ2UsIG9wdGlvbnMgfSA9IHRoaXM7XHJcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBbXTtcclxuXHRcdGNvbnN0IGFsaWFzZXMgPSB7fTtcclxuXHRcdGNvbnN0IGNvbE1vZGVsc0RpY3Rpb25hcnkgPSB7fTtcclxuXHJcblx0XHQkLmVhY2gob3B0aW9ucy5jb2xNb2RlbHMsIChpLCBtb2RlbCkgPT4ge1xyXG5cdFx0XHRjb25zdCBjb2xNb2RlbCA9IG5ldyBDb2xNb2RlbChtb2RlbCwgaSk7XHJcblxyXG5cdFx0XHRpZiAoIWFsaWFzZXNbY29sTW9kZWwuYWxpYXNdKSB7XHJcblx0XHRcdFx0YWxpYXNlc1tjb2xNb2RlbC5hbGlhc10gPSAxO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRocm93IHtcclxuXHRcdFx0XHRcdHZhbHVlOiB7XHJcblx0XHRcdFx0XHRcdGk6IGksXHJcblx0XHRcdFx0XHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KG1vZGVsKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6ICdhbGlhcyBpcyBub3QgdW5pcXVlJyxcclxuXHRcdFx0XHRcdG5hbWU6ICdFcnJvcjogY29sTW9kZWwnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbE1vZGVsc0RpY3Rpb25hcnlbY29sTW9kZWwuYWxpYXNdID0gY29sTW9kZWw7XHJcblx0XHRcdGNvbE1vZGVscy5wdXNoKGNvbE1vZGVsKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHN0b3JhZ2UuY29sTW9kZWxzID0gY29sTW9kZWxzO1xyXG5cdFx0c3RvcmFnZS5jb2xNb2RlbHNEaWN0aW9uYXJ5ID0gY29sTW9kZWxzRGljdGlvbmFyeTtcclxuXHR9O1xyXG5cclxuXHRfZXhlYygpIHtcclxuXHRcdGNvbnN0IHsgc3RvcmFnZSB9ID0gdGhpcztcclxuXHJcblx0XHR0aGlzLl9jb2x1bW5Nb2RlbCgpO1xyXG5cdFx0c3RvcmFnZS5zY3JvbGxiYXJXaWR0aCA9IHRoaXMuX2dldFNjcm9sbGJhcldpZHRoKCk7XHJcblx0XHR0aGlzLl9wcm9jZXNzU29ydGluZygpO1xyXG5cdH07XHJcblxyXG5cdF9wcm9jZXNzU29ydGluZygpIHtcclxuXHRcdGNvbnN0IHt2aWV3TW9kZWwsIG9wdGlvbnN9ID0gdGhpcztcclxuXHRcdGxldCBzb3J0QnkgPSBvcHRpb25zLnNvcnRCeSxcclxuXHRcdFx0ZGF0YSA9IFtdO1xyXG5cclxuXHRcdGlmIChvcHRpb25zLmZpbHRlclRvb2xiYXIpIHtcclxuXHRcdFx0dmlld01vZGVsLmZpbHRlclRvb2xiYXIgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNvcnRCeSAmJiB0eXBlb2YgKHNvcnRCeSkgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdGNvbnN0IHNvcnRCeUl0ZW1zID0gc29ydEJ5LnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKCkuc3BsaXQoJywnKTtcclxuXHRcdFx0aWYgKHNvcnRCeUl0ZW1zLmxlbmd0aCkge1xyXG5cdFx0XHRcdHNvcnRCeUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHNvcnRSdWxlID0gaXRlbS50cmltKCkuc3BsaXQoJyAnKTtcclxuXHRcdFx0XHRcdGNvbnN0IGJ5ID0gc29ydFJ1bGVbMF07XHJcblxyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiAoYnkpICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgcnVsZTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChTdHJpbmcoc29ydFJ1bGVbMV0pLnRvVXBwZXJDYXNlKCkgPT09ICdERVNDJykge1xyXG5cdFx0XHRcdFx0XHRcdHJ1bGUgPSBuZXcgU29ydFJ1bGUoYnksICdERVNDJyk7XHJcblxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJ1bGUgPSBuZXcgU29ydFJ1bGUoYnkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGRhdGEucHVzaChydWxlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICgkLmlzQXJyYXkoc29ydEJ5KSAmJiBzb3J0QnkubGVuZ3RoKSB7XHJcblx0XHRcdHNvcnRCeS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgeyBieSwgb3JkZXIgfSA9IGl0ZW07XHJcblx0XHRcdFx0bGV0IHJ1bGU7XHJcblxyXG5cdFx0XHRcdGlmIChieSkge1xyXG5cdFx0XHRcdFx0aWYgKFN0cmluZyhvcmRlcikudG9VcHBlckNhc2UoKSAhPT0gJ0RFU0MnKSB7XHJcblx0XHRcdFx0XHRcdHJ1bGUgPSBuZXcgU29ydFJ1bGUoYnkpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cnVsZSA9IG5ldyBTb3J0UnVsZShieSwgJ0RFU0MnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGRhdGEucHVzaChydWxlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGRhdGEubGVuZ3RoKSB7XHJcblx0XHRcdHZpZXdNb2RlbC5zb3J0QnkgPSBkYXRhO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvY2Vzc1NldHRpbmdzOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXJ5TW9kZWwgaW1wbGVtZW50cyBJUXVlcnlNb2RlbCB7XHJcblx0ZmlsdGVyID0ge307XHJcblx0c29ydCA9IFtdO1xyXG5cdHJvd3MgPSAwO1xyXG5cdHBhZ2UgPSAxO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XHJcblx0XHQkLmV4dGVuZCh0aGlzLCBkYXRhKTtcclxuXHR9XHJcbn1cclxuIiwiY2xhc3MgU29ydCB7XHJcblx0ZXhlYyhkYXRhID0gW10sIHJ1bGVzOiBJTG9jYWxTb3J0UnVsZVtdID0gW10pIHtcclxuXHRcdGxldCBzb3VyY2U7XHJcblx0XHRpZiAoIWRhdGEubGVuZ3RoIHx8ICFydWxlcy5sZW5ndGgpIHtcclxuXHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHR9XHJcblx0XHRzb3VyY2UgPSB0aGlzLl9nZXRTb3VyY2UoZGF0YSwgcnVsZXMpO1xyXG5cdFx0c291cmNlLnNvcnQoKGEsIGIpID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IDA7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwLCBqID0gcnVsZXMubGVuZ3RoOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRsZXQga2V5ID0gcnVsZXNbaV0uYnk7XHJcblx0XHRcdFx0aWYgKHJ1bGVzW2ldLm9yZGVyID09PSAnQVNDJykge1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gdGhpcy5BU0MoYS5mb3JtYXR0ZWRba2V5XSwgYi5mb3JtYXR0ZWRba2V5XSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gdGhpcy5ERVNDKGEuZm9ybWF0dGVkW2tleV0sIGIuZm9ybWF0dGVkW2tleV0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChyZXN1bHQgIT09IDApIHtcclxuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBzb3VyY2UubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRcdHJldHVybiBpdGVtLl87XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdEFTQyhhLCBiKSB7XHJcblx0XHRpZiAoYSA8IGIpIHtcclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGEgPiBiKSB7XHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIDA7XHJcblx0fTtcclxuXHJcblx0REVTQyhhLCBiKSB7XHJcblx0XHRpZiAoYSA8IGIpIHtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9XHJcblx0XHRpZiAoYSA+IGIpIHtcclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIDA7XHJcblx0fTtcclxuXHRfZ2V0U291cmNlKGRhdGEsIHJ1bGVzKSB7XHJcblx0XHRyZXR1cm4gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRcdFx0bGV0IGZvcm1hdHRlZCA9IHt9O1xyXG5cdFx0XHRydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XHJcblx0XHRcdFx0Zm9ybWF0dGVkW3J1bGUuYnldID0gcnVsZS5nZXQoaXRlbVtydWxlLmJ5XSwgaXRlbSwgcnVsZS5jb2xNb2RlbCwgZGF0YSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdF86IGl0ZW0sXHJcblx0XHRcdFx0Zm9ybWF0dGVkLFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgU29ydCgpOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvcnRSdWxlIGltcGxlbWVudHMgSVNvcnRSdWxlIHtcclxuXHRieTogc3RyaW5nO1xyXG5cdG9yZGVyOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGJ5LCBvcmRlciA9ICdBU0MnKSB7XHJcblx0XHR0aGlzLmJ5ID0gYnk7XHJcblx0XHR0aGlzLm9yZGVyID0gb3JkZXI7XHJcblx0fVxyXG5cdHRyaWdnZXJPcmRlcigpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLm9yZGVyID09PSAnQVNDJykge1xyXG5cdFx0XHR0aGlzLm9yZGVyID0gJ0RFU0MnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5vcmRlciA9ICdBU0MnO1xyXG5cdFx0fVxyXG5cdH07XHJcbn07IiwiaW1wb3J0IFNvcnRSdWxlIGZyb20gJy4vU29ydFJ1bGUnO1xyXG5jbGFzcyBTb3J0aW5nIHtcclxuXHRjb25zdHJ1Y3RvcihzdG9yYWdlLCB2aWV3TW9kZWwsIG9wdGlvbnMpIHtcclxuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblx0XHR0aGlzLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcclxuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblx0XHR0aGlzLmJpbmQoKTtcclxuXHR9O1xyXG5cdHNvcnRCeUFsaWFzKGFsaWFzKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHR2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbCxcclxuXHRcdFx0Y29sTW9kZWwgPSBzdG9yYWdlLmNvbE1vZGVsc0RpY3Rpb25hcnlbYWxpYXNdO1xyXG5cdFx0bGV0IHNvcnRCeTtcclxuXHRcdGlmIChjb2xNb2RlbCkge1xyXG5cdFx0XHRzb3J0QnkgPSB2aWV3TW9kZWwuc29ydEJ5O1xyXG5cdFx0XHRsZXQgaSA9IHNvcnRCeS5sZW5ndGgsXHJcblx0XHRcdFx0c29ydFJ1bGU7XHJcblxyXG5cdFx0XHR3aGlsZSAoaS0tKSB7XHJcblx0XHRcdFx0aWYgKHNvcnRCeVtpXS5ieSA9PT0gYWxpYXMpIHtcclxuXHRcdFx0XHRcdHNvcnRSdWxlID0gc29ydEJ5LnNwbGljZShpLCAxKVswXTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFzb3J0UnVsZSkge1xyXG5cdFx0XHRcdHNvcnRSdWxlID0gbmV3IFNvcnRSdWxlKGFsaWFzKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzb3J0UnVsZS50cmlnZ2VyT3JkZXIoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5tdWx0aVNvcnRpbmcpIHtcclxuXHRcdFx0XHRzb3J0QnkudW5zaGlmdChzb3J0UnVsZSlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzb3J0QnkgPSBbc29ydFJ1bGVdXHJcblx0XHRcdH1cclxuXHRcdFx0dmlld01vZGVsLnNvcnRCeSA9IHNvcnRCeTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRiaW5kKCkge1xyXG5cdFx0Y29uc3QgJGhlYWRUYWJsZSA9IHRoaXMuc3RvcmFnZS4kaGVhZFRhYmxlO1xyXG5cdFx0dGhpcy5fb2ZmKCk7XHJcblx0XHQkaGVhZFRhYmxlLm9uKCdjbGljay5YZ3JpZCcsICcuWGdyaWQtdGhlYWQtbGFiZWwuc29ydGFibGUnLCB0aGlzLl9oYW5kbGVyU29ydENvbHVtbi5iaW5kKHRoaXMpKTtcclxuXHR9O1xyXG5cclxuXHRfb2ZmKCkge1xyXG5cdFx0dGhpcy5zdG9yYWdlLiRoZWFkVGFibGUub2ZmKCcuWGdyaWQnKTtcclxuXHR9O1xyXG5cclxuXHRfaGFuZGxlclNvcnRDb2x1bW4oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgJGl0ZW0gPSAkKGUuY3VycmVudFRhcmdldCksXHJcblx0XHRcdGFsaWFzID0gJGl0ZW0uYXR0cignZGF0YS1hbGlhcycpLFxyXG5cdFx0XHRjb2xtb2RlbCA9IHRoaXMuc3RvcmFnZS5jb2xNb2RlbHNEaWN0aW9uYXJ5W2FsaWFzXTtcclxuXHRcdCRpdGVtLmJsdXIoKTtcclxuXHRcdGlmIChjb2xtb2RlbCAmJiBjb2xtb2RlbC5zb3J0YWJsZSkge1xyXG5cdFx0XHR0aGlzLnNvcnRCeUFsaWFzKGFsaWFzKTtcclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29ydGluZzsiLCJjbGFzcyBTdG9yYWdlIHtcclxuXHRjb25zdHJ1Y3Rvcihtb2RlbCkge1xyXG5cclxuXHRcdHRoaXMuX21vZGVsID0gJC5leHRlbmQoe1xyXG5cdFx0XHQkYm94OiBudWxsLFxyXG5cdFx0XHQkaGVhZFRhYmxlOiBudWxsLFxyXG5cdFx0XHQkZ3JpZFRhYmxlOiBudWxsLFxyXG5cdFx0XHQkaGVhZExhYmVsczogbnVsbCxcclxuXHRcdFx0JHBhZ2luYXRpb25Cb3g6IG51bGwsXHJcblx0XHRcdCRmaWx0ZXJUb29sYmFySXRlbXM6IG51bGwsXHJcblx0XHRcdHF1ZXJ5OiBudWxsLFxyXG5cdFx0XHRzY3JvbGxiYXJXaWR0aDogMCxcclxuXHRcdFx0Y29sTW9kZWxzOiBbXSxcclxuXHRcdFx0Y29sTW9kZWxzRGljdGlvbmFyeToge30sXHJcblx0XHRcdGZpbHRlcjogbnVsbCxcclxuXHRcdFx0ZGF0YTogW10sXHJcblx0XHRcdHByb2Nlc3NlZERhdGE6IFtdXHJcblx0XHR9LCBtb2RlbClcclxuXHRcdHRoaXMuX3N1YnNjcmliZXJzID0ge307XHJcblx0fVxyXG5cclxuXHRnZXQgJGJveCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kYm94O1xyXG5cdH1cclxuXHJcblx0Z2V0ICRoZWFkVGFibGUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuJGhlYWRUYWJsZTtcclxuXHR9O1xyXG5cdHNldCAkaGVhZFRhYmxlKHZhbHVlKSB7XHJcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiAkKSB7XHJcblx0XHRcdHRoaXMuX21vZGVsLiRoZWFkVGFibGUgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJyRoZWFkVGFibGUnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgJGdyaWRUYWJsZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kZ3JpZFRhYmxlO1xyXG5cdH07XHJcblx0c2V0ICRncmlkVGFibGUodmFsdWUpIHtcclxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mICQpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuJGdyaWRUYWJsZSA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnJGdyaWRUYWJsZScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCAkaGVhZExhYmVscygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kaGVhZExhYmVscztcclxuXHR9O1xyXG5cdHNldCAkaGVhZExhYmVscyh2YWx1ZSkge1xyXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgJCkge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC4kaGVhZExhYmVscyA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnJGhlYWRMYWJlbHMnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgJHBhZ2luYXRpb25Cb3goKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuJHBhZ2luYXRpb25Cb3g7XHJcblx0fTtcclxuXHRzZXQgJHBhZ2luYXRpb25Cb3godmFsdWUpIHtcclxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mICQpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuJHBhZ2luYXRpb25Cb3ggPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJyRwYWdpbmF0aW9uQm94JywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0ICRmaWx0ZXJUb29sYmFySXRlbXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuJGZpbHRlclRvb2xiYXJJdGVtcztcclxuXHR9O1xyXG5cdHNldCAkZmlsdGVyVG9vbGJhckl0ZW1zKHZhbHVlKSB7XHJcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiAkKSB7XHJcblx0XHRcdHRoaXMuX21vZGVsLiRmaWx0ZXJUb29sYmFySXRlbXMgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJyRmaWx0ZXJUb29sYmFySXRlbXMnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgc2Nyb2xsYmFyV2lkdGgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuc2Nyb2xsYmFyV2lkdGg7XHJcblx0fTtcclxuXHJcblx0c2V0IHNjcm9sbGJhcldpZHRoKHZhbHVlKSB7XHJcblx0XHRpZiAodHlwZW9mICh2YWx1ZSkgPT09IFwibnVtYmVyXCIgJiYgdmFsdWUgPiAwKSB7XHJcblx0XHRcdHRoaXMuX21vZGVsLnNjcm9sbGJhcldpZHRoID0gdmFsdWU7XHJcblx0XHRcdHRoaXMubm90aWZ5KCdzY3JvbGxiYXJXaWR0aCcsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBjb2xNb2RlbHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuY29sTW9kZWxzO1xyXG5cdH07XHJcblx0c2V0IGNvbE1vZGVscyh2YWx1ZSkge1xyXG5cdFx0aWYgKCQuaXNBcnJheSh2YWx1ZSkpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuY29sTW9kZWxzID0gdmFsdWU7XHJcblx0XHRcdHRoaXMubm90aWZ5KCdjb2xNb2RlbHMnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgY29sTW9kZWxzRGljdGlvbmFyeSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5jb2xNb2RlbHNEaWN0aW9uYXJ5O1xyXG5cdH07XHJcblx0c2V0IGNvbE1vZGVsc0RpY3Rpb25hcnkodmFsdWUpIHtcclxuXHRcdHRoaXMuX21vZGVsLmNvbE1vZGVsc0RpY3Rpb25hcnkgPSB2YWx1ZTtcclxuXHRcdHRoaXMubm90aWZ5KCdjb2xNb2RlbHNEaWN0aW9uYXJ5JywgdGhpcyk7XHJcblx0fTtcclxuXHRcclxuXHRnZXQgZmlsdGVyKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLmZpbHRlcjtcclxuXHR9O1xyXG5cdHNldCBmaWx0ZXIoZGF0YSkge1xyXG5cdFx0aWYgKGRhdGEgPT09IG51bGwgfHwgdHlwZW9mIChkYXRhKSA9PT0gJ29iamVjdCcpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuZmlsdGVyID0gZGF0YTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ2ZpbHRlcicsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLmRhdGE7XHJcblx0fTtcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHRpZiAoJC5pc0FycmF5KGRhdGEpKSB7XHJcblx0XHRcdHRoaXMuX21vZGVsLmRhdGEgPSBkYXRhO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnZGF0YScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBxdWVyeSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5xdWVyeTtcclxuXHR9O1xyXG5cdHNldCBxdWVyeShkYXRhKSB7XHJcblx0XHR0aGlzLl9tb2RlbC5xdWVyeSA9IGRhdGE7XHJcblx0XHR0aGlzLm5vdGlmeSgncXVlcnknLCB0aGlzKTtcclxuXHR9O1xyXG5cclxuXHRnZXQgcHJvY2Vzc2VkRGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5xdWVyeTtcclxuXHR9O1xyXG5cdHNldCBwcm9jZXNzZWREYXRhKGRhdGEpIHtcclxuXHRcdHRoaXMuX21vZGVsLnByb2Nlc3NlZERhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5ub3RpZnkoJ3Byb2Nlc3NlZERhdGEnLCB0aGlzKTtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdG9uKG5hbWUsIHN1YnNjcmliZXIpIHtcclxuXHRcdHZhciBzdG9yZWdlID0gdGhpcy5fZ2V0U3RvcmFnZShuYW1lKTtcclxuXHRcdHN0b3JlZ2UucHVzaChzdWJzY3JpYmVyKTtcclxuXHR9O1xyXG5cclxuXHRub3RpZnkobmFtZSwgZGF0YSkge1xyXG5cdFx0dmFyIHN0b3JlZ2UgPSB0aGlzLl9nZXRTdG9yYWdlKG5hbWUpO1xyXG5cdFx0JC5lYWNoKHN0b3JlZ2UsIGZ1bmN0aW9uIChpLCBzdWJzY3JpYmVyKSB7XHJcblx0XHRcdGxldCBbLi4uYXJnXSA9IFtkYXRhLCBuYW1lLCBpXTtcclxuXHRcdFx0c3Vic2NyaWJlci5hcHBseShzdWJzY3JpYmVyLCBhcmcpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0X2dldFN0b3JhZ2UobmFtZSkge1xyXG5cdFx0Y29uc3Qgc3Vic2NyaWJlcnMgPSB0aGlzLl9zdWJzY3JpYmVycztcclxuXHRcdGlmICghc3Vic2NyaWJlcnNbbmFtZV0pIHtcclxuXHRcdFx0c3Vic2NyaWJlcnNbbmFtZV0gPSBbXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBzdWJzY3JpYmVyc1tuYW1lXTtcclxuXHR9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2U7IiwiJ3VzZSBzdHJpY3QnO1xyXG5jbGFzcyBUb29scyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLm5vdyA9IERhdGUubm93IHx8ICgoKSA9PiB7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgfSk7XHJcblx0fVxyXG5cclxuXHRleGVjdXRlKGZ1bmN0aW9ucywgYXJncywgY29udGV4dCkge1xyXG5cdFx0Y29uc3QgYXBwbHkgPSBmdW5jdGlvbiAoZm9vKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgKGZvbykgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRmb28uYXBwbHkoY29udGV4dCA/IGNvbnRleHQgOiBmb28sIGFyZ3MpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoJC5pc0FycmF5KGZ1bmN0aW9ucykpIHtcclxuXHRcdFx0ZnVuY3Rpb25zLmZvckVhY2goYXBwbHkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YXBwbHkoZnVuY3Rpb25zKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRpbnNlcnRFbGVtZW50KCRjb250YWluZXIsIHNlYXJjaFN0ciwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdGNvbnN0ICRyZXBsYWNlbWVudCA9ICQocmVwbGFjZW1lbnQpO1xyXG5cclxuXHRcdGlmICghJHJlcGxhY2VtZW50Lmxlbmd0aCkge1xyXG5cdFx0XHRyZXBsYWNlbWVudCA9IFN0cmluZyhyZXBsYWNlbWVudCk7XHJcblx0XHR9XHJcblx0XHQkY29udGFpbmVyLmZpbmQoXCI6bm90KGlmcmFtZSlcIikuYWRkQmFjaygpLmNvbnRlbnRzKCkuZmlsdGVyKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMubm9kZVR5cGUgPT09IDM7XHJcblx0XHR9KS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pbmRleE9mKHNlYXJjaFN0cikgIT09IC0xKSB7XHJcblx0XHRcdFx0aWYgKCRyZXBsYWNlbWVudC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdCQodGhpcykuYWZ0ZXIoJHJlcGxhY2VtZW50KTtcclxuXHRcdFx0XHRcdGNvbnN0IHN0ciA9IHRoaXMuZGF0YSxcclxuXHRcdFx0XHRcdFx0cGFydDEgPSBzdHIuc3Vic3RyKDAsIHN0ci5pbmRleE9mKHNlYXJjaFN0cikpLFxyXG5cdFx0XHRcdFx0XHRwYXJ0MiA9IHN0ci5zdWJzdHIocGFydDEubGVuZ3RoICsgc2VhcmNoU3RyLmxlbmd0aCwgc3RyLmxlbmd0aCk7XHJcblx0XHRcdFx0XHRpZiAoIXBhcnQxLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHBhcnQyLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRpZiAocGFydDEubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhID0gcGFydDE7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0JHJlcGxhY2VtZW50LmFmdGVyKHBhcnQyKVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwYXJ0MS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kYXRhID0gcGFydDE7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKHNlYXJjaFN0cixyZXBsYWNlbWVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHRocm90dGxlKGZ1bmMsIHdhaXQgPSAxMCkge1xyXG5cdFx0bGV0IGNvbnRleHQsXHJcblx0XHRcdGFyZ3MsXHJcblx0XHRcdHRpbWVvdXQgPSBudWxsO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICguLi5wcm9wcykge1xyXG5cdFx0XHRjb250ZXh0ID0gdGhpcztcclxuXHRcdFx0YXJncyA9IHByb3BzO1xyXG5cdFx0XHRpZiAoIWNvbnRleHQpIHtcclxuXHRcdFx0XHRjb250ZXh0ID0gZnVuY1xyXG5cdFx0XHR9IGVsc2UgaWYgKGNvbnRleHQgPT09IHdpbmRvdykge1xyXG5cdFx0XHRcdGNvbnRleHQgPSBmdW5jO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghdGltZW91dCkge1xyXG5cdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHRcdFx0XHRcdHRpbWVvdXQgPSBudWxsO1xyXG5cdFx0XHRcdFx0ZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHRcdFx0XHR9LCB3YWl0KTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVG9vbHMoKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3TW9kZWwgaW1wbGVtZW50cyBJVmlld01vZGVsIHtcclxuXHRtb2RlbDogSVZpZXdNb2RlbFBhcnRpYWw7XHJcblx0c3Vic2NyaWJlcnM6IHsgW2tleTogc3RyaW5nXTogRnVuY3Rpb25bXSB9O1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMubW9kZWwgPSB7XHJcblx0XHRcdHJvd3M6IDEwLFxyXG5cdFx0XHR0b3RhbFJvd3M6IDAsXHJcblx0XHRcdHBhZ2U6IDEsXHJcblx0XHRcdHRvdGFsUGFnZXM6IDAsXHJcblx0XHRcdG5ld1BhZ2U6IDEsXHJcblx0XHRcdGRhdGE6IFtdLFxyXG5cdFx0XHRzb3J0Qnk6IFtdLFxyXG5cdFx0XHRmaWx0ZXJUb29sYmFyOiBmYWxzZVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zdWJzY3JpYmVycyA9IHt9O1xyXG5cdH1cclxuXHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb2RlbC5kYXRhO1xyXG5cdH07XHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0aWYgKCQuaXNBcnJheShkYXRhKSkge1xyXG5cdFx0XHR0aGlzLm1vZGVsLmRhdGEgPSBkYXRhO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnZGF0YScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBzb3J0QnkoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb2RlbC5zb3J0Qnk7XHJcblx0fTtcclxuXHRzZXQgc29ydEJ5KGRhdGEpIHtcclxuXHRcdGlmICgkLmlzQXJyYXkoZGF0YSkpIHtcclxuXHRcdFx0dGhpcy5tb2RlbC5zb3J0QnkgPSBkYXRhO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnc29ydEJ5JywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IHRvdGFsUm93cygpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vZGVsLnRvdGFsUm93cztcclxuXHR9O1xyXG5cdHNldCB0b3RhbFJvd3ModG90YWxSb3dzKSB7XHJcblx0XHRpZiAodHlwZW9mICh0b3RhbFJvd3MpID09PSBcIm51bWJlclwiICYmIHRvdGFsUm93cyA+IC0xKSB7XHJcblx0XHRcdHRoaXMubW9kZWwudG90YWxSb3dzID0gdG90YWxSb3dzO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgndG90YWxSb3dzJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IHRvdGFsUGFnZXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb2RlbC50b3RhbFBhZ2VzO1xyXG5cdH07XHJcblx0c2V0IHRvdGFsUGFnZXModG90YWxQYWdlcykge1xyXG5cdFx0aWYgKHR5cGVvZiAodG90YWxQYWdlcykgPT09IFwibnVtYmVyXCIgJiYgdG90YWxQYWdlcyA+IC0xKSB7XHJcblx0XHRcdHRoaXMubW9kZWwudG90YWxQYWdlcyA9IHRvdGFsUGFnZXM7XHJcblx0XHRcdHRoaXMubm90aWZ5KCd0b3RhbFBhZ2VzJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IHJvd3MoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb2RlbC5yb3dzO1xyXG5cdH07XHJcblx0c2V0IHJvd3Mocm93cykge1xyXG5cdFx0aWYgKHR5cGVvZiAocm93cykgPT09IFwibnVtYmVyXCIgJiYgcm93cyA+IC0xKSB7XHJcblx0XHRcdHRoaXMubW9kZWwucm93cyA9IHJvd3M7XHJcblx0XHRcdHRoaXMubm90aWZ5KCdyb3dzJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IHBhZ2UoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb2RlbC5wYWdlO1xyXG5cdH07XHJcblx0c2V0IHBhZ2UocGFnZSkge1xyXG5cdFx0aWYgKHR5cGVvZiAocGFnZSkgPT09IFwibnVtYmVyXCIgJiYgcGFnZSA+IC0xKSB7XHJcblx0XHRcdHRoaXMubW9kZWwucGFnZSA9IHBhZ2U7XHJcblx0XHRcdHRoaXMubm90aWZ5KCdwYWdlJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IG5ld1BhZ2UoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb2RlbC5uZXdQYWdlO1xyXG5cdH07XHJcblx0c2V0IG5ld1BhZ2UocGFnZSkge1xyXG5cdFx0aWYgKHR5cGVvZiAocGFnZSkgPT09IFwibnVtYmVyXCIgJiYgcGFnZSA+IC0xKSB7XHJcblx0XHRcdHRoaXMubW9kZWwubmV3UGFnZSA9IHBhZ2U7XHJcblx0XHRcdHRoaXMubm90aWZ5KCduZXdQYWdlJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IGZpbHRlclRvb2xiYXIoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb2RlbC5maWx0ZXJUb29sYmFyO1xyXG5cdH07XHJcblx0c2V0IGZpbHRlclRvb2xiYXIoZGF0YTogYm9vbGVhbikge1xyXG5cdFx0dGhpcy5tb2RlbC5maWx0ZXJUb29sYmFyID0gZGF0YTtcclxuXHRcdHRoaXMubm90aWZ5KCdmaWx0ZXJUb29sYmFyJywgdGhpcyk7XHJcblx0fTtcclxuXHJcblx0b24obmFtZSwgc3Vic2NyaWJlcik6IHZvaWQge1xyXG5cdFx0dmFyIHN0b3JlZ2UgPSB0aGlzLl9nZXRTdG9yYWdlKG5hbWUpO1xyXG5cdFx0c3RvcmVnZS5wdXNoKHN1YnNjcmliZXIpO1xyXG5cdH07XHJcblxyXG5cdG5vdGlmeShuYW1lLCBkYXRhKSB7XHJcblx0XHR2YXIgc3RvcmVnZSA9IHRoaXMuX2dldFN0b3JhZ2UobmFtZSk7XHJcblx0XHQkLmVhY2goc3RvcmVnZSwgZnVuY3Rpb24gKGksIHN1YnNjcmliZXIpIHtcclxuXHRcdFx0bGV0IFsuLi5hcmddID0gW2RhdGEsIG5hbWUsIGldO1xyXG5cdFx0XHRzdWJzY3JpYmVyLmFwcGx5KHN1YnNjcmliZXIsIGFyZyk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIF9nZXRTdG9yYWdlKG5hbWUpIHtcclxuXHRcdGNvbnN0IHN1YnNjcmliZXJzID0gdGhpcy5zdWJzY3JpYmVycztcclxuXHRcdGlmICghc3Vic2NyaWJlcnNbbmFtZV0pIHtcclxuXHRcdFx0c3Vic2NyaWJlcnNbbmFtZV0gPSBbXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBzdWJzY3JpYmVyc1tuYW1lXTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFZpZXdNb2RlbCBmcm9tICcuL1ZpZXdNb2RlbCc7XHJcbmltcG9ydCBQcm9jZXNzU2V0dGluZ3MgZnJvbSAnLi9Qcm9jZXNzU2V0dGluZ3MnO1xyXG5pbXBvcnQgQnVpbGRJbmZyYXN0cnVjdHVyZSBmcm9tICcuL0J1aWxkSW5mcmFzdHJ1Y3R1cmUnO1xyXG5pbXBvcnQgRmlsdGVyVG9vbGJhciBmcm9tICcuL0ZpbHRlclRvb2xiYXInO1xyXG5pbXBvcnQgU29ydGluZyBmcm9tICcuL1NvcnRpbmcnO1xyXG5pbXBvcnQgRGlzcGxheSBmcm9tICcuL0Rpc3BsYXknO1xyXG5pbXBvcnQgRml4ZWRIZWFkZXIgZnJvbSAnLi9GaXhlZEhlYWRlcic7XHJcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vU3RvcmFnZSc7XHJcbmltcG9ydCBGaWxsIGZyb20gJy4vRmlsbCc7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vUGFnaW5hdGlvbic7XHJcbmltcG9ydCB0b29scyBmcm9tICcuL1Rvb2xzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhncmlkIHtcclxuXHRvcHRpb25zOiBJT3B0aW9ucztcclxuXHRwcm9wZXJ0aWVzOiBJWGdyaWRQcm9wZXJ0aWVzO1xyXG5cdFZpZXdNb2RlbDogVmlld01vZGVsO1xyXG5cdFByb2Nlc3NTZXR0aW5nczogUHJvY2Vzc1NldHRpbmdzO1xyXG5cdEJ1aWxkSW5mcmFzdHJ1Y3R1cmU6IEJ1aWxkSW5mcmFzdHJ1Y3R1cmU7XHJcblx0U29ydGluZzogU29ydGluZztcclxuXHRTdG9yYWdlOiBTdG9yYWdlO1xyXG5cdEZpbGw6IEZpbGw7XHJcblx0RGlzcGxheTogRGlzcGxheTtcclxuXHRGaXhlZEhlYWRlcjogRml4ZWRIZWFkZXI7XHJcblx0RmlsdGVyVG9vbGJhcjogRmlsdGVyVG9vbGJhcjtcclxuXHRQYWdpbmF0aW9uOiBQYWdpbmF0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zOiBJT3B0aW9ucywgJGJveDogSlF1ZXJ5KSB7XHJcblx0XHR0aGlzLnByb3BlcnRpZXMgPSB7XHJcblx0XHRcdCRib3gsXHJcblx0XHRcdGRhdGE6IFtdXHJcblx0XHR9XHJcblx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7XHJcblx0XHRcdGJlZm9yZVJlcXVlc3Q6IFtdLFxyXG5cdFx0XHRhZnRlclJlc3BvbnNlOiBbXSxcclxuXHRcdFx0c29ydEJ5OiBbXSxcclxuXHRcdFx0cGFnaW5hdGlvblNlbGVjdG9yOiAnJyxcclxuXHRcdFx0YWpheFR5cGU6ICdQT1NUJyxcclxuXHRcdFx0ZmlsdGVyVG9vbGJhckdyb3VwT3A6ICdBTkQnLFxyXG5cdFx0XHR1cmw6ICcnLFxyXG5cdFx0XHRtdWx0aVNvcnRpbmc6IGZhbHNlLFxyXG5cdFx0XHRmaWx0ZXJUb29sYmFyOiBmYWxzZVxyXG5cdFx0fSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0dGhpcy5TdG9yYWdlID0gbmV3IFN0b3JhZ2UoeyAkYm94IH0pXHJcblx0XHR0aGlzLl9leGVjKCk7XHJcblx0fTtcclxuXHJcblx0YWpheEZ1bmN0aW9uKHF1ZXJ5T2JqZWN0OiBhbnksIHVybDogc3RyaW5nKSB7XHJcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cdFx0cmV0dXJuICQuYWpheCh7XHJcblx0XHRcdHVybDogdXJsLFxyXG5cdFx0XHRkYXRhOiBxdWVyeU9iamVjdCxcclxuXHRcdFx0dHlwZTogb3B0aW9ucy5hamF4VHlwZSxcclxuXHRcdFx0ZGF0YVR5cGU6ICdqc29uJ1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRfcmVzcG9uc2UocmVzcG9uc2VPYmplY3Q6IElSZXNwb25zZSkge1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHRcdGlmIChvcHRpb25zLmFmdGVyUmVzcG9uc2UpIHtcclxuXHRcdFx0dG9vbHMuZXhlY3V0ZShvcHRpb25zLmFmdGVyUmVzcG9uc2UsIFtyZXNwb25zZU9iamVjdF0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdF9yZXF1ZXN0KHF1ZXJ5T2JqZWN0ID0ge30pIHtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXHJcblx0XHRcdGQgPSAkLkRlZmVycmVkKCk7XHJcblx0XHRpZiAob3B0aW9ucy5iZWZvcmVSZXF1ZXN0KSB7XHJcblx0XHRcdHRvb2xzLmV4ZWN1dGUob3B0aW9ucy5iZWZvcmVSZXF1ZXN0LCBbcXVlcnlPYmplY3RdKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmFqYXhGdW5jdGlvbihxdWVyeU9iamVjdCwgb3B0aW9ucy51cmwpLmRvbmUodGhpcy5fcmVzcG9uc2UuYmluZCh0aGlzKSkuYWx3YXlzKGQucmVzb2x2ZSk7XHJcblxyXG5cdFx0cmV0dXJuIGQ7XHJcblx0fTtcclxuXHJcblx0X2JpbmQoKSB7XHJcblx0XHRjb25zdCBzZWxmID0gdGhpcyxcclxuXHRcdFx0cHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcyxcclxuXHRcdFx0b3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHJcblx0XHQvLyB0byBEbyBpZiBtb2RlbCB3aWxsIGJlIGNoYW5nZWRcclxuXHRcdHRoaXMuU3RvcmFnZS5vbignY29sTW9kZWxzJywgKCkgPT4ge1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKHRoaXMuRmlsbCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLlN0b3JhZ2Uub24oJ2RhdGEnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuRGlzcGxheS5leGVjKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLlZpZXdNb2RlbC5vbignZGF0YScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5GaWxsLnRib2R5KCk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuRml4ZWRIZWFkZXIucmVzaXplKCk7XHJcblx0XHRcdH0sIDEwNTApXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLlN0b3JhZ2Uub24oJyRwYWdpbmF0aW9uQm94JywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLlBhZ2luYXRpb24uZXhlYygpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5TdG9yYWdlLm9uKCckaGVhZFRhYmxlJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLlNvcnRpbmcuYmluZCgpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRfZXhlYygpIHtcclxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cclxuXHRcdHRoaXMuVmlld01vZGVsID0gbmV3IFZpZXdNb2RlbCgpO1xyXG5cdFx0dGhpcy5Qcm9jZXNzU2V0dGluZ3MgPSBuZXcgUHJvY2Vzc1NldHRpbmdzKG9wdGlvbnMsIHRoaXMuU3RvcmFnZSwgdGhpcy5WaWV3TW9kZWwpO1xyXG5cdFx0dGhpcy5CdWlsZEluZnJhc3RydWN0dXJlID0gbmV3IEJ1aWxkSW5mcmFzdHJ1Y3R1cmUob3B0aW9ucywgdGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCk7XHJcblx0XHR0aGlzLlNvcnRpbmcgPSBuZXcgU29ydGluZyh0aGlzLlN0b3JhZ2UsIHRoaXMuVmlld01vZGVsLCBvcHRpb25zKTtcclxuXHRcdHRoaXMuRmlsbCA9IG5ldyBGaWxsKHRoaXMuU3RvcmFnZSwgdGhpcy5WaWV3TW9kZWwpO1xyXG5cdFx0dGhpcy5GaWx0ZXJUb29sYmFyID0gbmV3IEZpbHRlclRvb2xiYXIodGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCwgb3B0aW9ucyk7XHJcblx0XHR0aGlzLkRpc3BsYXkgPSBuZXcgRGlzcGxheSh7XHJcblx0XHRcdHN0b3JhZ2U6IHRoaXMuU3RvcmFnZSxcclxuXHRcdFx0dmlld01vZGVsOiB0aGlzLlZpZXdNb2RlbCxcclxuXHRcdFx0YWpheDogKChxdWVyeU9iamVjdDogSVJlcXVlc3QpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fcmVxdWVzdChxdWVyeU9iamVjdCk7XHJcblx0XHRcdH0pLFxyXG5cdFx0XHRpc0xvY2FsOiBvcHRpb25zLnVybCA/IGZhbHNlIDogdHJ1ZVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLkZpeGVkSGVhZGVyID0gbmV3IEZpeGVkSGVhZGVyKHRoaXMuU3RvcmFnZSk7XHJcblx0XHR0aGlzLlBhZ2luYXRpb24gPSBuZXcgUGFnaW5hdGlvbihvcHRpb25zLCB0aGlzLlN0b3JhZ2UsIHRoaXMuVmlld01vZGVsKTtcclxuXHJcblx0XHR0aGlzLl9iaW5kKCk7XHJcblxyXG5cdFx0dGhpcy5GaWxsLnRoZWFkKCk7XHJcblxyXG5cdFx0aWYgKCEkLmlzQXJyYXkob3B0aW9ucy5kYXRhKSkge1xyXG5cdFx0XHRvcHRpb25zLmRhdGEgPSBbXTtcclxuXHRcdH1cclxuXHRcdHRoaXMuU3RvcmFnZS5kYXRhID0gb3B0aW9ucy5kYXRhO1xyXG5cdH1cclxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==
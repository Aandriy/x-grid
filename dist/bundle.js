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
        this.filterOption = 'cn';
        this.filterType = 'text';
        this.filterable = false;
        this.fixed = false;
        this.hidden = false;
        this.insensitive = false;
        this.label = '';
        this.resizable = false;
        this.sortType = 'text';
        this.sortable = false;
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

/***/ "./src/modules/Storage.ts":
/*!********************************!*\
  !*** ./src/modules/Storage.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Storage = /** @class */ (function () {
    function Storage(model) {
        this._subscribers = {};
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
        }, model);
    }
    Object.defineProperty(Storage.prototype, "$box", {
        get: function () {
            return this._model.$box;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Storage.prototype, "$headTable", {
        get: function () {
            return this._model.$headTable;
        },
        set: function (value) {
            if (value instanceof $) {
                this._model.$headTable = value;
                this.notify('$headTable', this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Storage.prototype, "$gridTable", {
        get: function () {
            return this._model.$gridTable;
        },
        set: function (value) {
            if (value instanceof $) {
                this._model.$gridTable = value;
                this.notify('$gridTable', this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Storage.prototype, "$headLabels", {
        get: function () {
            return this._model.$headLabels;
        },
        set: function (value) {
            if (value instanceof $) {
                this._model.$headLabels = value;
                this.notify('$headLabels', this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Storage.prototype, "$paginationBox", {
        get: function () {
            return this._model.$paginationBox;
        },
        set: function (value) {
            if (value instanceof $) {
                this._model.$paginationBox = value;
                this.notify('$paginationBox', this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Storage.prototype, "$filterToolbarItems", {
        get: function () {
            return this._model.$filterToolbarItems;
        },
        set: function (value) {
            if (value instanceof $) {
                this._model.$filterToolbarItems = value;
                this.notify('$filterToolbarItems', this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Storage.prototype, "scrollbarWidth", {
        get: function () {
            return this._model.scrollbarWidth;
        },
        set: function (value) {
            if (typeof (value) === "number" && value > 0) {
                this._model.scrollbarWidth = value;
                this.notify('scrollbarWidth', this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Storage.prototype, "colModels", {
        get: function () {
            return this._model.colModels;
        },
        set: function (value) {
            if ($.isArray(value)) {
                this._model.colModels = value;
                this.notify('colModels', this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Storage.prototype, "colModelsDictionary", {
        get: function () {
            return this._model.colModelsDictionary;
        },
        set: function (value) {
            this._model.colModelsDictionary = value;
            this.notify('colModelsDictionary', this);
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Storage.prototype, "filter", {
        get: function () {
            return this._model.filter;
        },
        set: function (data) {
            if (data === null || typeof (data) === 'object') {
                this._model.filter = data;
                this.notify('filter', this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Storage.prototype, "data", {
        get: function () {
            return this._model.data;
        },
        set: function (data) {
            if ($.isArray(data)) {
                this._model.data = data;
                this.notify('data', this);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Storage.prototype, "query", {
        get: function () {
            return this._model.query;
        },
        set: function (data) {
            this._model.query = data;
            this.notify('query', this);
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Storage.prototype, "processedData", {
        get: function () {
            return this._model.processedData;
        },
        set: function (data) {
            this._model.processedData = data;
            this.notify('processedData', this);
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Storage.prototype.on = function (name, subscriber) {
        var storege = this._getStorage(name);
        storege.push(subscriber);
    };
    ;
    Storage.prototype.notify = function (name, data) {
        var storege = this._getStorage(name);
        $.each(storege, function (i, subscriber) {
            var arg = [data, name, i].slice(0);
            subscriber.apply(subscriber, arg);
        });
    };
    ;
    Storage.prototype._getStorage = function (name) {
        var subscribers = this._subscribers;
        if (!subscribers[name]) {
            subscribers[name] = [];
        }
        return subscribers[name];
    };
    return Storage;
}());
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
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.ts");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0J1aWxkSW5mcmFzdHJ1Y3R1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ29sTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRGlzcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9EaXNwbGF5TW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9GaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRmlsdGVyVG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9GaWx0ZXJUb29sYmFyTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRml4ZWRIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvTG9jYWxTb3J0UnVsZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL09wZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1BpcGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1Byb2Nlc3NTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9RdWVyeU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1NvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvU29ydFJ1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvU29ydGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9TdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1Rvb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1ZpZXdNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9YZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGb0M7QUFFcEMsQ0FBQyxVQUFDLENBQUM7SUFDRixDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRztRQUFVLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ3BDLElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBTSxPQUFPLEdBQXNCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRjs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkU7Ozs7Ozs7Ozs7OztBQ25GQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0RTs7Ozs7Ozs7Ozs7Ozs7O0FDL0VrQztBQUNBO0FBRWxDO0lBTUMseUJB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LEtBQUssRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3QixPQUFPLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUNGLFlBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDdElELHlDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBYZ3JpZCBmcm9tICcuL21vZHVsZXMvWGdyaWQnO1xyXG5cclxuKCgkKSA9PiB7XHJcblx0JC5mbi5YZ3JpZCA9IGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSkge1xyXG5cdFx0bGV0IGRhdGE7XHJcblx0XHRjb25zdCBvcHRpb25zOiBJT3B0aW9ucyB8IHN0cmluZyA9IGFyZ3NbMF07XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0ZGF0YSA9ICQodGhpcykuZGF0YSgnWGdyaWQnKTtcclxuXHRcdFx0aWYgKCFkYXRhKSB7XHJcblx0XHRcdFx0Y29uc3QgcHJvcHM6IElPcHRpb25zID0gKHR5cGVvZiAob3B0aW9ucykgPT09ICdzdHJpbmcnKSA/IGFyZ3NbMV0gOiBvcHRpb25zO1xyXG5cdFx0XHRcdCQodGhpcykuZGF0YSgnWGdyaWQnLCBuZXcgWGdyaWQocHJvcHMsICQodGhpcykpKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgKG9wdGlvbnMpID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLmluZGV4T2YoJ18nKSAhPT0gMCAmJiBkYXRhW29wdGlvbnNdID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0Y29uc3QgcHJvcHMgPSBhcmdzLnNsaWNlKDEpO1xyXG5cdFx0XHRcdGRhdGFbb3B0aW9uc10uYXBwbHkoZGF0YSwgcHJvcHMpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGRhdGEucmVmcmVzaCkge1xyXG5cdFx0XHRcdGRhdGEucmVmcmVzaC5hcHBseShkYXRhLCBhcmdzKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59KShqUXVlcnkpO1xyXG4iLCJpbXBvcnQgdG9vbHMgZnJvbSAnLi9Ub29scyc7XHJcblxyXG5jbGFzcyBCdWlsZEluZnJhc3RydWN0dXJlIHtcclxuXHR2aWV3TW9kZWw6IElWaWV3TW9kZWw7XHJcblx0c3RvcmFnZTogSVN0b3JhZ2U7XHJcblx0b3B0aW9uczogSUJ1aWxkSW5mcmFzdHJ1Y3R1cmVPcHRpb25zO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCBzdG9yYWdlLCB2aWV3TW9kZWwpIHtcclxuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xyXG5cdFx0XHR0aGVhZENsYXNzOiAndGFibGUtZ3JpZC10aGVhZCcsXHJcblx0XHRcdHRib2R5Q2xhc3M6ICd0YWJsZS1ncmlkLXRib2R5JyxcclxuXHRcdFx0Zmlyc3RCdG5UZW1wbGF0ZTogJzxzcGFuIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+JiMxNzE7PC9zcGFuPicsXHJcblx0XHRcdGxhc3RCdG5UZW1wbGF0ZTogJzxzcGFuIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+JiMxODc7PC9zcGFuPicsXHJcblx0XHRcdHByZXZCdG5UZW1wbGF0ZTogJzxzcGFuIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+JiM4MjQ5Ozwvc3Bhbj4nLFxyXG5cdFx0XHRuZXh0QnRuVGVtcGxhdGU6ICc8c3BhbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPiYjODI1MDs8L3NwYW4+JyxcclxuXHRcdFx0Y3VycmVudFBhZ2VUZW1wbGF0ZTogJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz4nLFxyXG5cdFx0XHRwYWdpbmF0aW9uVGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiWGdyaWQtcGFnZ2luYXRpb24gaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiID57Zmlyc3RCdG5UZW1wbGF0ZX17cHJldkJ0blRlbXBsYXRlfTwvZGl2PlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj4gUGFnZSA8L3NwYW4+XHJcblx0XHRcdFx0e2N1cnJlbnRQYWdlVGVtcGxhdGV9XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPiBvZiA8c3BhbiBjbGFzcz1cIlhncmlkLXRvdGFsLXBhZ2VzXCI+PC9zcGFuPjwvc3Bhbj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuXCIgPntuZXh0QnRuVGVtcGxhdGV9e2xhc3RCdG5UZW1wbGF0ZX08L2Rpdj5cclxuXHRcdFx0PC9kaXY+YFxyXG5cdFx0fSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHRcdHRoaXMuX2V4ZWMoKTtcclxuXHR9O1xyXG5cdGJ1aWxkRmlsdGVyVG9vbGJhcigpIHtcclxuXHRcdGlmICh0aGlzLnZpZXdNb2RlbC5maWx0ZXJUb29sYmFyKSB7XHJcblx0XHRcdHRoaXMuX2J1aWxkRmlsdGVyVG9vbGJhcigpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0X2V4ZWMoKSB7XHJcblx0XHR0aGlzLl9idWlsZCgpO1xyXG5cdFx0dGhpcy5fYnVpbGRUaGVhZCgpO1xyXG5cdFx0dGhpcy5fYnVpbGRUQm9keSgpO1xyXG5cdFx0dGhpcy5fYnVpbGRQYWdpbmF0aW9uKCk7XHJcblxyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGNvbnN0IGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzO1xyXG5cdFx0Y29uc3QgJHRmb290Q2VsbHMgPSBzdG9yYWdlLiRncmlkVGFibGUuZmluZCgnLlhncmlkLXRib2R5LXcgdGQnKTtcclxuXHRcdGNvbnN0ICR0aGVhZENlbGxzID0gc3RvcmFnZS4kaGVhZFRhYmxlLmZpbmQoJ3RyJyk7XHJcblxyXG5cdFx0Y29sTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsLCBpKSB7XHJcblx0XHRcdGxldCBjZWxscyA9IFtdO1xyXG5cclxuXHRcdFx0Y2VsbHMucHVzaCgkdGZvb3RDZWxscy5nZXQoaSkpO1xyXG5cdFx0XHQkdGhlYWRDZWxscy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRjZWxscy5wdXNoKCQodGhpcykuZmluZCgnPio6ZXEoJyArIGkgKyAnKScpLmdldCgwKSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0bW9kZWwuZGVwZW5kZW50ID0gY2VsbHMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0ge1xyXG5cdFx0XHRcdFx0JGFuY2hvcjogJChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpLFxyXG5cdFx0XHRcdFx0JGl0ZW06ICQoaXRlbSlcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRyZXN1bHQuJGl0ZW0uYmVmb3JlKHJlc3VsdC4kYW5jaG9yKTtcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0X2FkZFByb3BzdG9IZWFkZXJDZWxscyhpLCBpdGVtKSB7XHJcblx0XHRjb25zdCAkaXRlbSA9ICQoaXRlbSk7XHJcblx0XHRjb25zdCBjb2xNb2RlbCA9IHRoaXMuc3RvcmFnZS5jb2xNb2RlbHNbaV07XHJcblxyXG5cdFx0JGl0ZW0uYXR0cignZGF0YS1hbGlhcycsIGNvbE1vZGVsWydhbGlhcyddKTtcclxuXHRcdGlmIChjb2xNb2RlbC5maXhlZCkge1xyXG5cdFx0XHQkaXRlbS5hZGRDbGFzcygnZml4ZWQnKTtcclxuXHRcdFx0aWYgKGNvbE1vZGVsLndpZHRoKSB7XHJcblx0XHRcdFx0JGl0ZW0ud2lkdGgoY29sTW9kZWwud2lkdGgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRfYnVpbGRGaWx0ZXJUb29sYmFyKCkge1xyXG5cdFx0Y29uc3QgdGFnID0gJ3Rmb290JztcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRjb25zdCAkZmlsdGVyID0gJChgPCR7dGFnfSBjbGFzcz1cIlhncmlkLXRoZWFkLWZpbHRlclwiPjx0cj4keyBuZXcgQXJyYXkoc3RvcmFnZS5jb2xNb2RlbHMubGVuZ3RoICsgMSkuam9pbignPHRkIGNsYXNzPVwiWGdyaWQtZmlsdGVyLWNlbGxcIj48L3RkPicpfTwvdHI+PC8ke3RhZ30+YCk7XHJcblx0XHRjb25zdCBhZGRQcm9wID0gdGhpcy5fYWRkUHJvcHN0b0hlYWRlckNlbGxzLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0c3RvcmFnZS4kZmlsdGVyVG9vbGJhckl0ZW1zID0gJGZpbHRlci5maW5kKCcuWGdyaWQtZmlsdGVyLWNlbGwnKS5lYWNoKGFkZFByb3ApO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLmZpbmQoJy5YZ3JpZC10aGVhZC13IHRkJykuZWFjaChhZGRQcm9wKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5hcHBlbmQoJGZpbHRlcik7XHJcblx0fTtcclxuXHJcblx0X2J1aWxkVGhlYWQoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0bGV0IHRhZyA9ICd0aGVhZCc7XHJcblx0XHRsZXQgd2lkdGhIZWxwZXIgPSBgPCR7dGFnfSBjbGFzcz1cIlhncmlkLXRoZWFkLXdcIj48dHI+JHtuZXcgQXJyYXkoc3RvcmFnZS5jb2xNb2RlbHMubGVuZ3RoICsgMSkuam9pbignPHRkPjxkaXYgY2xhc3M9XCJYZ3JpZC1XaWR0aExpc3RlbmVyLXdyYXBwZXJcIj48aWZyYW1lIGRhdGEtY29sPVwiMFwiIGNsYXNzPVwiWGdyaWQtV2lkdGhMaXN0ZW5lclwiPjwvaWZyYW1lPjwvZGl2PjwvdGQ+Jyl9PC90cj48LyR7dGFnfT5gO1xyXG5cclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5odG1sKHdpZHRoSGVscGVyKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5maW5kKCcuWGdyaWQtdGhlYWQtdyB0ZCcpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0Y29uc3QgJHRkID0gJCh0aGlzKTtcclxuXHRcdFx0Y29uc3QgY29sTW9kZWwgPSBzdG9yYWdlLmNvbE1vZGVsc1tpXTtcclxuXHRcdFx0Y29uc3QgaWZyYW1lOiBIVE1MRWxlbWVudCA9ICR0ZC5maW5kKCdpZnJhbWUnKVswXTtcclxuXHJcblx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWxpYXMnLCBjb2xNb2RlbC5hbGlhcyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0YWcgPSAndGJvZHknO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLmFwcGVuZChgPCR7dGFnfSBjbGFzcz1cIlhncmlkLXRoZWFkLWxhYmVsc1wiPjx0cj4ke25ldyBBcnJheShzdG9yYWdlLmNvbE1vZGVscy5sZW5ndGggKyAxKS5qb2luKCc8dGggY2xhc3M9XCJYZ3JpZC10aGVhZC1sYWJlbFwiPjwvdGg+Jyl9PC90cj48LyR7dGFnfT5gKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRMYWJlbHMgPSBzdG9yYWdlLiRoZWFkVGFibGUuZmluZCgnLlhncmlkLXRoZWFkLWxhYmVsJyk7XHJcblx0XHRzdG9yYWdlLiRoZWFkTGFiZWxzLmVhY2goKGksIGl0ZW0pID0+IHtcclxuXHRcdFx0dGhpcy5fYWRkUHJvcHN0b0hlYWRlckNlbGxzKGksIGl0ZW0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5idWlsZEZpbHRlclRvb2xiYXIoKTtcclxuXHR9O1xyXG5cclxuXHRfYnVpbGRUQm9keSgpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRsZXQgd2lkdGhIZWxwZXIgPSAnPHRoZWFkIGNsYXNzPVwiWGdyaWQtdGJvZHktd1wiPjx0cj4nICsgbmV3IEFycmF5KHN0b3JhZ2UuY29sTW9kZWxzLmxlbmd0aCArIDEpLmpvaW4oJzx0ZD48aT48L2k+PC90ZD4nKSArICc8L3RyPjwvdGhlYWQ+JztcclxuXHJcblx0XHRzdG9yYWdlLiRncmlkVGFibGUuaHRtbCh3aWR0aEhlbHBlcik7XHJcblx0XHRzdG9yYWdlLiRncmlkVGFibGUuZmluZCgnLlhncmlkLXRib2R5LXcgdHIgdGQnKS5lYWNoKChpLCBpdGVtKSA9PiB7XHJcblx0XHRcdHRoaXMuX2FkZFByb3BzdG9IZWFkZXJDZWxscyhpLCBpdGVtKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdF9idWlsZFBhZ2luYXRpb24oKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHRcdGNvbnN0ICRwYWdpbmF0aW9uID0gJChvcHRpb25zLnBhZ2luYXRpb25UZW1wbGF0ZSk7XHJcblx0XHRjb25zdCB7IGZpcnN0QnRuVGVtcGxhdGUsIGxhc3RCdG5UZW1wbGF0ZSwgcHJldkJ0blRlbXBsYXRlLCBuZXh0QnRuVGVtcGxhdGUsIGN1cnJlbnRQYWdlVGVtcGxhdGUgfSA9IG9wdGlvbnM7XHJcblx0XHRsZXQgJHBhZ2luYXRpb25Cb3g7XHJcblxyXG5cdFx0dG9vbHMuaW5zZXJ0RWxlbWVudCgkcGFnaW5hdGlvbiwgJ3tmaXJzdEJ0blRlbXBsYXRlfScsIGZpcnN0QnRuVGVtcGxhdGUgPyAkKGZpcnN0QnRuVGVtcGxhdGUpLmFkZENsYXNzKCdYZ3JpZC1maXJzdCcpIDogJycpO1xyXG5cdFx0dG9vbHMuaW5zZXJ0RWxlbWVudCgkcGFnaW5hdGlvbiwgJ3twcmV2QnRuVGVtcGxhdGV9JywgJChwcmV2QnRuVGVtcGxhdGUpLmFkZENsYXNzKCdYZ3JpZC1wcmV2JykpO1xyXG5cdFx0dG9vbHMuaW5zZXJ0RWxlbWVudCgkcGFnaW5hdGlvbiwgJ3tuZXh0QnRuVGVtcGxhdGV9JywgJChuZXh0QnRuVGVtcGxhdGUpLmFkZENsYXNzKCdYZ3JpZC1uZXh0JykpO1xyXG5cdFx0dG9vbHMuaW5zZXJ0RWxlbWVudCgkcGFnaW5hdGlvbiwgJ3tsYXN0QnRuVGVtcGxhdGV9JywgJChsYXN0QnRuVGVtcGxhdGUpLmFkZENsYXNzKCdYZ3JpZC1sYXN0JykpO1xyXG5cdFx0dG9vbHMuaW5zZXJ0RWxlbWVudCgkcGFnaW5hdGlvbiwgJ3tjdXJyZW50UGFnZVRlbXBsYXRlfScsICQoY3VycmVudFBhZ2VUZW1wbGF0ZSkuYWRkQ2xhc3MoJ1hncmlkLWN1cnJlbnQtcGFnZScpKTtcclxuXHJcblx0XHRpZiAob3B0aW9ucy5wYWdpbmF0aW9uU2VsZWN0b3IpIHtcclxuXHRcdFx0JHBhZ2luYXRpb25Cb3ggPSAkKG9wdGlvbnMucGFnaW5hdGlvblNlbGVjdG9yKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCRwYWdpbmF0aW9uQm94ID0gc3RvcmFnZS4kYm94LmZpbmQoJy5YZ3JpZC1wYWdnaW5hdGlvbi13cmFwcGVyJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0JHBhZ2luYXRpb25Cb3guaHRtbCgkcGFnaW5hdGlvbik7XHJcblx0XHRzdG9yYWdlLiRwYWdpbmF0aW9uQm94ID0gJHBhZ2luYXRpb25Cb3g7XHJcblx0fTtcclxuXHJcblx0X2J1aWxkKCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblxyXG5cdFx0c3RvcmFnZS4kYm94Lmh0bWwoYDxkaXYgY2xhc3M9XCJYZ3JpZFwiPlxyXG5cdDxkaXYgY2xhc3M9XCJYZ3JpZC13cmFwcGVyXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiWGdyaWQtd3JhcHBlci1ob2xkZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIlhncmlkLXRoZWFkLXdyYXBwZXJcIj5cclxuXHRcdFx0XHQ8dGFibGUgY2xhc3M9XCJYZ3JpZC10aGVhZCAke29wdGlvbnMudGhlYWRDbGFzc31cIj48L3RhYmxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIlhncmlkLXRib2R5LXdyYXBwZXJcIj5cclxuXHRcdFx0XHQ8dGFibGUgY2xhc3M9XCJYZ3JpZC10Ym9keSAke29wdGlvbnMudGJvZHlDbGFzc31cIj48L3RhYmxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cIlhncmlkLXBhZ2dpbmF0aW9uLXdyYXBwZXJcIj48L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+YCk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUgPSBzdG9yYWdlLiRib3guZmluZCgnLlhncmlkLXRoZWFkJyk7XHJcblx0XHRzdG9yYWdlLiRncmlkVGFibGUgPSBzdG9yYWdlLiRib3guZmluZCgnLlhncmlkLXRib2R5Jyk7XHJcblx0fVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCdWlsZEluZnJhc3RydWN0dXJlOyIsImltcG9ydCBwaXBlcyBmcm9tICcuL1BpcGVzJztcclxuaW1wb3J0IEZpbHRlclRvb2xiYXJNb2RlbCBmcm9tICcuL0ZpbHRlclRvb2xiYXJNb2RlbCc7XHJcblxyXG5jbGFzcyBDb2xNb2RlbCBpbXBsZW1lbnRzIElDb2xNb2RlbCB7XHJcblx0YWxpYXM6IHN0cmluZztcclxuXHRmaWx0ZXJGb3JtYXR0ZXI6IEZ1bmN0aW9uO1xyXG5cdGZpbHRlck9wdGlvbiA9ICdjbic7XHJcblx0ZmlsdGVyVG9vbGJhclNldHRpbmdzOiBhbnk7XHJcblx0ZmlsdGVyVHlwZSA9ICd0ZXh0JztcclxuXHRmaWx0ZXJhYmxlID0gZmFsc2U7XHJcblx0Zml4ZWQgPSBmYWxzZTtcclxuXHRoaWRkZW4gPSBmYWxzZTtcclxuXHRpbnNlbnNpdGl2ZSA9IGZhbHNlO1xyXG5cdGtleTogc3RyaW5nO1xyXG5cdGxhYmVsID0gJyc7XHJcblx0b3JkZXI6IG51bWJlcjtcclxuXHRyZXNpemFibGUgPSBmYWxzZTtcclxuXHRzb3J0Rm9ybWF0dGVyOiBGdW5jdGlvbjtcclxuXHRzb3J0VHlwZSA9ICd0ZXh0JztcclxuXHRzb3J0YWJsZSA9IGZhbHNlO1xyXG5cdHdpZHRoOiBudW1iZXI7XHJcblxyXG5cdGRlcGVuZGVudCA9IFtdO1xyXG5cdF9jaGVjazogRnVuY3Rpb247XHJcblxyXG5cdGNvbnN0cnVjdG9yKG1vZGVsLCBvcmRlcikge1xyXG5cdFx0dGhpcy5vcmRlciA9IG9yZGVyO1xyXG5cclxuXHRcdCQuZXh0ZW5kKHRoaXMsIG1vZGVsKTtcclxuXHRcdHRoaXMuZmlsdGVyVG9vbGJhclNldHRpbmdzID0gbmV3IEZpbHRlclRvb2xiYXJNb2RlbChtb2RlbC5maWx0ZXJUb29sYmFyU2V0dGluZ3MpO1xyXG5cclxuXHRcdGlmICh0eXBlb2YgKHRoaXMuYWxpYXMpID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHR0aGlzLmFsaWFzID0gdGhpcy5rZXk7XHJcblx0XHR9XHJcblx0XHRpZiAodHlwZW9mICh0aGlzLmtleSkgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdHRoaXMua2V5ID0gdGhpcy5hbGlhcztcclxuXHRcdH1cclxuXHRcdGlmIChtb2RlbC5zb3J0VHlwZSAmJiB0eXBlb2YgKG1vZGVsLnNvcnRUeXBlKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHR0aGlzLnNvcnRGb3JtYXR0ZXIgPSBtb2RlbC5zb3J0VHlwZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc29ydEZvcm1hdHRlciA9IHBpcGVzLmdldEJ5VHlwZShtb2RlbC5zb3J0VHlwZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG1vZGVsLmZpbHRlclR5cGUgJiYgdHlwZW9mIChtb2RlbC5maWx0ZXJUeXBlKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHR0aGlzLmZpbHRlckZvcm1hdHRlciA9IG1vZGVsLmZpbHRlclR5cGU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmZpbHRlckZvcm1hdHRlciA9IHBpcGVzLmdldEJ5VHlwZShtb2RlbC5maWx0ZXJUeXBlKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmRlcGVuZGVudCA9IFtdO1xyXG5cdFx0dGhpcy5fY2hlY2sgPSBmdW5jdGlvbiAoKTogdm9pZCB7XHJcblx0XHRcdGlmICh0aGlzLmhpZGRlbikge1xyXG5cdFx0XHRcdHRoaXMuZGVwZW5kZW50LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRcdFx0XHRcdGl0ZW0uJGl0ZW0uZGV0YWNoKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5kZXBlbmRlbnQuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG5cdFx0XHRcdFx0aXRlbS4kYW5jaG9yLmFmdGVyKGl0ZW0uJGl0ZW0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsYWJlbEZvcm1hdHRlcigpIHtcclxuXHRcdHJldHVybiB0aGlzLmxhYmVsO1xyXG5cdH07XHJcblxyXG5cdGNlbGxGb3JtYXR0ZXIoJHRkLCB2YWx1ZSwgcm93RGF0YSwgZGF0YSkge1xyXG5cdFx0aWYgKHR5cGVvZiAodmFsdWUpID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHR2YWx1ZSA9ICcnO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICc8ZGl2IGNsYXNzPVwiZWxsaXBzaXNcIj4nICsgdmFsdWUgKyAnPC9kaXY+JztcclxuXHR9O1xyXG5cclxuXHRmaWx0ZXJUb29sYmFyRm9ybWF0dGVyKCRjZWxsLCBjb2xNb2RlbCkge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSBjb2xNb2RlbC5maWx0ZXJUb29sYmFyU2V0dGluZ3MgfHwge307XHJcblx0XHRsZXQgJGNvbnRyb2wsXHJcblx0XHRcdCRjb250YWluZXIsXHJcblx0XHRcdCR3cmFwID0gJCgnPGRpdiBjbGFzcz1cIlhncmlkLWZpbHRlci1jb250cm9sLXdyYXBcIj48L2Rpdj4nKSxcclxuXHRcdFx0c3RyID0gJzxkaXYgY2xhc3M9XCJYZ3JpZC1maWx0ZXItd3JhcHBlclwiPic7XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmFsbG93UmVzZXRCdXR0b24gfHwgc2V0dGluZ3MuYWxsb3dTdWJtaXRCdXR0b24pIHtcclxuXHRcdFx0c3RyICs9ICc8c3BhbiBjbGFzcz1cIlhncmlkLWZpbHRlci1idG5zXCI+JztcclxuXHRcdFx0aWYgKHNldHRpbmdzLmFsbG93UmVzZXRCdXR0b24pIHtcclxuXHRcdFx0XHRzdHIgKz0gJzxzcGFuIGNsYXNzPVwiWGdyaWQtYnRuIFhncmlkLXJlc2V0XCI+JiMxMDAwNjs8L3NwYW4+JztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc2V0dGluZ3MuYWxsb3dTdWJtaXRCdXR0b24pIHtcclxuXHRcdFx0XHRzdHIgKz0gJzxzcGFuIGNsYXNzPVwiWGdyaWQtYnRuIFhncmlkLW9uU3VibWl0XCI+JiMxMDAwNDs8L3NwYW4+JztcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHIgKz0gJzwvc3Bhbj4nO1xyXG5cdFx0fVxyXG5cdFx0c3RyICs9ICc8L2Rpdj4nXHJcblx0XHRzd2l0Y2ggKHNldHRpbmdzLmZvcm1Db250cm9sVHlwZSkge1xyXG5cdFx0XHRjYXNlICdzZWxlY3QnOlxyXG5cdFx0XHRcdCRjb250cm9sID0gJCgnPHNlbGVjdCBjbGFzcz1cIlhncmlkLXNlbGVjdCBYZ3JpZC1maWx0ZXJcIiAgLz4nKTtcclxuXHRcdFx0XHRzZXR0aW5ncy5zZWxlY3RPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGkpIHtcclxuXHRcdFx0XHRcdCRjb250cm9sLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT1cIicgKyBpICsgJ1wiPicgKyBlbGVtZW50LmxhYmVsICsgJzwvb3B0aW9uPicpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0JGNvbnRyb2wudmFsKFtdKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdCRjb250cm9sID0gJCgnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJYZ3JpZC1pbnB1dCBYZ3JpZC1maWx0ZXJcIiAvPicpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNldHRpbmdzLm9uQ2hhbmdlKSB7XHJcblx0XHRcdCRjb250cm9sLmFkZENsYXNzKCdYZ3JpZC1vbkNoYW5nZScpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNldHRpbmdzLm9uS2V5ZG93bikge1xyXG5cdFx0XHQkY29udHJvbC5hZGRDbGFzcygnWGdyaWQtb25LZXlkb3duJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoc2V0dGluZ3Mub25FbnRlcikge1xyXG5cdFx0XHQkY29udHJvbC5hZGRDbGFzcygnWGdyaWQtb25FbnRlcicpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNldHRpbmdzLmF0dHIpIHtcclxuXHRcdFx0JGNvbnRyb2wuYXR0cihzZXR0aW5ncy5hdHRyKTtcclxuXHRcdH1cclxuXHJcblx0XHQkY29udGFpbmVyID0gJChzdHIpO1xyXG5cdFx0JHdyYXAuYXBwZW5kKCRjb250cm9sKTtcclxuXHRcdCRjb250YWluZXIuYXBwZW5kKCR3cmFwKTtcclxuXHRcdCRjZWxsLmh0bWwoJGNvbnRhaW5lcik7XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbE1vZGVsOyIsImltcG9ydCB0b29scyBmcm9tICcuL1Rvb2xzJztcclxuaW1wb3J0IFF1ZXJ5TW9kZWwgZnJvbSAnLi9RdWVyeU1vZGVsJztcclxuaW1wb3J0IHNvcnQgZnJvbSAnLi9Tb3J0JztcclxuaW1wb3J0IGZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcbmltcG9ydCBEaXNwbGF5TW9kZWwgZnJvbSAnLi9EaXNwbGF5TW9kZWwnO1xyXG5pbXBvcnQgTG9jYWxTb3J0UnVsZU1vZGVsIGZyb20gJy4vTG9jYWxTb3J0UnVsZU1vZGVsJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5IHtcclxuXHR2aWV3TW9kZWw6IElWaWV3TW9kZWw7XHJcblx0c3RvcmFnZTogSVN0b3JhZ2U7XHJcblx0YWpheDogRnVuY3Rpb247XHJcblx0cHJvY2VzczogRnVuY3Rpb247XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuXHRcdHRoaXMudmlld01vZGVsID0gb3B0aW9ucy52aWV3TW9kZWw7XHJcblx0XHR0aGlzLnN0b3JhZ2UgPSBvcHRpb25zLnN0b3JhZ2U7XHJcblx0XHR0aGlzLmFqYXggPSBvcHRpb25zLmFqYXg7XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMuaXNMb2NhbCkge1xyXG5cdFx0XHR0aGlzLnByb2Nlc3MgPSB0aGlzLl9sb2NhbFByb2Nlc3MuYmluZCh0aGlzKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucHJvY2VzcyA9IHRoaXMuX3NlcnZlclByb2Nlc3MuYmluZCh0aGlzKTtcclxuXHRcdH1cclxuXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5fc3Vic2NyaWJlKCk7XHJcblx0XHR9LCA1MCk7XHJcblx0fTtcclxuXHJcblx0ZXhlYygpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRjb25zdCB2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbDtcclxuXHRcdGNvbnN0IHF1ZXJ5OiBJUXVlcnlNb2RlbCA9IG5ldyBRdWVyeU1vZGVsKHtcclxuXHRcdFx0ZmlsdGVyOiBzdG9yYWdlLmZpbHRlcixcclxuXHRcdFx0c29ydDogdmlld01vZGVsLnNvcnRCeSxcclxuXHRcdFx0cm93czogdmlld01vZGVsLnJvd3MsXHJcblx0XHRcdHBhZ2U6IHZpZXdNb2RlbC5uZXdQYWdlLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0c3RvcmFnZS5xdWVyeSA9IHF1ZXJ5O1xyXG5cdFx0c3RvcmFnZS4kYm94LmFkZENsYXNzKCdYZ3JpZC1sb2FkaW5nJyk7XHJcblxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMucHJvY2VzcygpLmRvbmUoKGRhdGE6IElEaXNwYWx5TW9kZWwpID0+IHtcclxuXHRcdFx0XHR0aGlzLl9maWxsZXIoZGF0YSk7XHJcblx0XHRcdFx0dGhpcy5zdG9yYWdlLiRib3gucmVtb3ZlQ2xhc3MoJ1hncmlkLWxvYWRpbmcnKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9LCAwKTtcclxuXHR9O1xyXG5cclxuXHRfZmlsbGVyKGRhdGE6IElEaXNwYWx5TW9kZWwpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsO1xyXG5cdFx0dmlld01vZGVsLnRvdGFsUGFnZXMgPSBkYXRhLnRvdGFsUGFnZXNcclxuXHRcdHZpZXdNb2RlbC50b3RhbFJvd3MgPSBkYXRhLnRvdGFsUm93cztcclxuXHRcdHZpZXdNb2RlbC5kYXRhID0gZGF0YS5kYXRhO1xyXG5cdFx0dmlld01vZGVsLnBhZ2UgPSBkYXRhLnBhZ2U7XHJcblx0fTtcclxuXHJcblx0X2xvY2FsRmlsdGVyKGRhdGEsIGZpbHRlclF1ZXJ5KSB7XHJcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKSxcclxuXHRcdFx0c3RvcmFnZSA9IHRoaXMuc3RvcmFnZSxcclxuXHRcdFx0cmF3RGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVsc0RpY3Rpb25hcnk7XHJcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHJvdyA9IHt9O1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChhbGlhcywgcm93RGF0YSkge1xyXG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIChyb3dbYWxpYXNdKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBjb2xNb2RlbCA9IGNvbE1vZGVsc1thbGlhc107XHJcblx0XHRcdFx0XHRcdFx0cm93W2FsaWFzXSA9IGNvbE1vZGVsLmZpbHRlckZvcm1hdHRlcihyb3dEYXRhW2NvbE1vZGVsLmtleV0sIHJvd0RhdGEsIGNvbE1vZGVsKTtcclxuXHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHJvd1thbGlhc107XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0aWYgKGZpbHRlclF1ZXJ5KSB7XHJcblx0XHRcdFx0ZGF0YSA9IGZpbHRlci5leGVjKGRhdGEsIGZpbHRlclF1ZXJ5LCByYXdEYXRhKCkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XHJcblx0XHR9LCAwKTtcclxuXHRcdHJldHVybiBkZWZlcnJlZDtcclxuXHR9O1xyXG5cclxuXHRfbG9jYWxTb3J0KGRhdGEsIHNvcnRSdWxlcykge1xyXG5cdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cclxuXHRcdGlmIChzb3J0UnVsZXMubGVuZ3RoKSB7XHJcblx0XHRcdGNvbnN0IGxvY2FsU29ydFJ1bGVzOiBJTG9jYWxTb3J0UnVsZVtdID0gc29ydFJ1bGVzLm1hcCgocnVsZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGNvbE1vZGVsID0gc3RvcmFnZS5jb2xNb2RlbHNEaWN0aW9uYXJ5W3J1bGUuYnldO1xyXG5cdFx0XHRcdGNvbnN0IGJ5ID0gY29sTW9kZWwgPyBjb2xNb2RlbC5rZXkgOiBydWxlLmJ5O1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gbmV3IExvY2FsU29ydFJ1bGVNb2RlbChydWxlLm9yZGVyLCBieSwgY29sTW9kZWwpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGRhdGEgPSBzb3J0LmV4ZWMoZGF0YSwgbG9jYWxTb3J0UnVsZXMpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xyXG5cdFx0XHR9LCAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZGVmZXJyZWQ7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfZ2V0TG9jYWxEYXRhKGRhdGE6IElSYXdEYXRhW10sIHF1ZXJ5OiBJUXVlcnlNb2RlbCk6IElEaXNwYWx5TW9kZWwge1xyXG5cdFx0Y29uc3Qgdmlld01vZGVsOiBJVmlld01vZGVsID0gdGhpcy52aWV3TW9kZWw7XHJcblx0XHRjb25zdCBiZWdpbjogbnVtYmVyID0gKHF1ZXJ5LnBhZ2UgLSAxKSAqIHZpZXdNb2RlbC5yb3dzO1xyXG5cdFx0Y29uc3QgZW5kOiBudW1iZXIgPSBxdWVyeS5wYWdlICogdmlld01vZGVsLnJvd3M7XHJcblx0XHRjb25zdCBkYXRhVG9EaXNwbGF5OiBJUmF3RGF0YVtdID0gZGF0YS5zbGljZShiZWdpbiwgZW5kKTtcclxuXHJcblx0XHRyZXR1cm4gbmV3IERpc3BsYXlNb2RlbChcclxuXHRcdFx0ZGF0YVRvRGlzcGxheSxcclxuXHRcdFx0cXVlcnkucGFnZSxcclxuXHRcdFx0TWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gdmlld01vZGVsLnJvd3MpIHx8IDEsXHJcblx0XHRcdGRhdGEubGVuZ3RoLFxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIF9sb2NhbFByb2Nlc3MoKTogSlF1ZXJ5RGVmZXJyZWQ8SURpc3BhbHlNb2RlbD4ge1xyXG5cdFx0Y29uc3QgZGVmZXJyZWQ6IEpRdWVyeURlZmVycmVkPElEaXNwYWx5TW9kZWw+ID0gJC5EZWZlcnJlZCgpO1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGNvbnN0IHF1ZXJ5OiBJUXVlcnlNb2RlbCA9IHN0b3JhZ2UucXVlcnk7XHJcblxyXG5cdFx0dGhpcy5fbG9jYWxGaWx0ZXIoc3RvcmFnZS5kYXRhLCBxdWVyeS5maWx0ZXIpLmRvbmUoKGZpbHRlcmVkRGF0YSkgPT4ge1xyXG5cdFx0XHR0aGlzLl9sb2NhbFNvcnQoZmlsdGVyZWREYXRhLCBxdWVyeS5zb3J0KS5kb25lKChzb3J0ZWREYXRhKSA9PiB7XHJcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSh0aGlzLl9nZXRMb2NhbERhdGEoc29ydGVkRGF0YSwgcXVlcnkpKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBkZWZlcnJlZDtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIF9zZXJ2ZXJQcm9jZXNzKCk6IEpRdWVyeURlZmVycmVkPElEaXNwYWx5TW9kZWw+IHtcclxuXHRcdHJldHVybiB0aGlzLmFqYXgodGhpcy5zdG9yYWdlLnF1ZXJ5KTtcclxuXHR9O1xyXG5cdHByaXZhdGUgX3N1YnNjcmliZSgpIHtcclxuXHRcdGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsO1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGNvbnN0IGFjdGlvbiA9IHRvb2xzLnRocm90dGxlKCgpID0+IHsgdGhpcy5leGVjKCk7IH0sIDEwMCk7XHJcblx0XHRjb25zdCBfcmVsb2FkID0gZnVuY3Rpb24gKHMsIHR5cGUpIHtcclxuXHRcdFx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRcdFx0Y2FzZSAnZmlsdGVyJzpcclxuXHRcdFx0XHRcdHZpZXdNb2RlbC5uZXdQYWdlID0gMTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ3NvcnRCeSc6XHJcblx0XHRcdFx0XHQvL3ZpZXdNb2RlbC5uZXdQYWdlID0gMTsgP1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0YWN0aW9uKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmlld01vZGVsLm9uKCduZXdQYWdlJywgX3JlbG9hZCk7XHJcblx0XHR2aWV3TW9kZWwub24oJ3NvcnRCeScsIF9yZWxvYWQpO1xyXG5cdFx0c3RvcmFnZS5vbignZmlsdGVyJywgX3JlbG9hZCk7XHJcblx0fTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5TW9kZWwgaW1wbGVtZW50cyBJRGlzcGFseU1vZGVsIHtcclxuXHRkYXRhOiBJUmF3RGF0YVtdO1xyXG5cdHBhZ2UgPSAxO1xyXG5cdHRvdGFsUGFnZXM6IG51bWJlcjtcclxuXHR0b3RhbFJvd3M6IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoZGF0YVRvRGlzcGxheTogSVJhd0RhdGFbXSwgcGFnZTogbnVtYmVyLCB0b3RhbFBhZ2VzOiBudW1iZXIsIHRvdGFsUm93czogbnVtYmVyKSB7XHJcblx0XHR0aGlzLmRhdGEgPSBkYXRhVG9EaXNwbGF5O1xyXG5cdFx0aWYgKHBhZ2UgPiAwKSB7XHJcblx0XHRcdHRoaXMucGFnZSA9IHBhZ2U7XHJcblx0XHR9XHJcblx0XHR0aGlzLnRvdGFsUGFnZXMgPSB0b3RhbFBhZ2VzO1xyXG5cdFx0dGhpcy50b3RhbFJvd3MgPSB0b3RhbFJvd3M7XHJcblx0fVxyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5jbGFzcyBGaWxsIHtcclxuXHRjb25zdHJ1Y3RvcihzdG9yYWdlLCB2aWV3TW9kZWwpIHtcclxuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHR9O1xyXG5cclxuXHR0aGVhZCgpIHtcclxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHRjbGFzc1J1bGVzID0gWydyZXNpemFibGUnLCAnc29ydGFibGUnLCAnZmlsdGVyYWJsZScsICdoaWRkZW4nXSxcclxuXHRcdFx0Y29sTW9kZWxzID0gc3RvcmFnZS5jb2xNb2RlbHM7XHJcblxyXG5cdFx0c3RvcmFnZS4kaGVhZExhYmVscy5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdGNvbnN0ICR0aCA9ICQodGhpcyksXHJcblx0XHRcdFx0JHdyYXBwZXIgPSAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKSxcclxuXHRcdFx0XHRjb2xNb2RlbCA9IGNvbE1vZGVsc1tpXTtcclxuXHJcblx0XHRcdCR0aC5kYXRhKCdYZ3JpZC5kYXRhJywgY29sTW9kZWwpO1xyXG5cdFx0XHRsZXQgZGF0YSA9IGNvbE1vZGVsLmxhYmVsRm9ybWF0dGVyKCR3cmFwcGVyLCAkdGgsIGNvbE1vZGVsLCBpKTtcclxuXHRcdFx0aWYgKHR5cGVvZiAoZGF0YSkgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0JHdyYXBwZXIuaHRtbChkYXRhKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JHRoLmh0bWwoJHdyYXBwZXIpO1xyXG5cdFx0XHQkLmVhY2goY2xhc3NSdWxlcywgZnVuY3Rpb24gKGksIG1hcmspIHtcclxuXHRcdFx0XHRpZiAoY29sTW9kZWxbbWFya10pIHtcclxuXHRcdFx0XHRcdCR0aC5hZGRDbGFzcyhtYXJrKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JHRoLnJlbW92ZUNsYXNzKG1hcmspO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuZmlsdGVyVG9vbGJhcigpO1xyXG5cdH07XHJcblxyXG5cdGZpbHRlclRvb2xiYXIoKSB7XHJcblx0XHRjb25zdCBzZWxmID0gdGhpcyxcclxuXHRcdFx0c3RvcmFnZSA9IHRoaXMuc3RvcmFnZSxcclxuXHRcdFx0dmlld01vZGVsID0gdGhpcy52aWV3TW9kZWwsXHJcblx0XHRcdGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzO1xyXG5cdFx0aWYgKHN0b3JhZ2UuJGZpbHRlclRvb2xiYXJJdGVtcykge1xyXG5cdFx0XHRzdG9yYWdlLiRmaWx0ZXJUb29sYmFySXRlbXMuZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRcdGNvbnN0ICRjZWxsID0gJCh0aGlzKSxcclxuXHRcdFx0XHRcdGNvbE1vZGVsID0gY29sTW9kZWxzW2ldO1xyXG5cdFx0XHRcdGlmIChjb2xNb2RlbC5maWx0ZXJhYmxlICYmIGNvbE1vZGVsLmZpbHRlclRvb2xiYXJGb3JtYXR0ZXIpIHtcclxuXHRcdFx0XHRcdGxldCBkYXRhID0gY29sTW9kZWwuZmlsdGVyVG9vbGJhckZvcm1hdHRlcigkY2VsbCwgY29sTW9kZWwpO1xyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiAoZGF0YSkgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHRcdCRjZWxsLmh0bWwoZGF0YSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCRjZWxsLmVtcHR5KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHRib2R5KCkge1xyXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMsXHJcblx0XHRcdHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxyXG5cdFx0XHRjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscyxcclxuXHRcdFx0dmlld01vZGVsID0gdGhpcy52aWV3TW9kZWwsXHJcblx0XHRcdGRhdGFUb0Rpc3BsYXkgPSB2aWV3TW9kZWwuZGF0YSxcclxuXHRcdFx0JGhlYWRXcmFwID0gc3RvcmFnZS4kaGVhZFRhYmxlLnBhcmVudCgpLFxyXG5cdFx0XHQkZ3JpZFdyYXAgPSBzdG9yYWdlLiRncmlkVGFibGUucGFyZW50KCksXHJcblx0XHRcdGRhdGEgPSBzdG9yYWdlLmRhdGE7XHJcblxyXG5cdFx0bGV0IHRib2R5LFxyXG5cdFx0XHRudW0gPSAwO1xyXG5cclxuXHRcdGNvbE1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xNb2RlbCwgaSkge1xyXG5cdFx0XHRjb2xNb2RlbC5fY2hlY2soKTtcclxuXHRcdFx0Y29uc3QgJHRkID0gc3RvcmFnZS4kaGVhZExhYmVscy5lcShpKTtcclxuXHRcdFx0aWYgKCFjb2xNb2RlbC5oaWRkZW4pIHtcclxuXHRcdFx0XHRudW0rKztcclxuXHRcdFx0XHRpZiAobnVtICUgMikge1xyXG5cdFx0XHRcdFx0JHRkLmFkZENsYXNzKCdvZGQnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JHRkLmFkZENsYXNzKCdldmVuJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0Ym9keSA9IHRoaXMuX2NyZWF0ZVNoYWRvd0JvZHkoZnJhZ21lbnQpO1xyXG5cclxuXHRcdCQodGJvZHkpLmZpbmQoJ3RyJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRjb25zdCByb3dEYXRhID0gZGF0YVRvRGlzcGxheVtpXTtcclxuXHRcdFx0c2VsZi5fZmlsbFJvdygkKHRoaXMpLCByb3dEYXRhLCBkYXRhKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHN0b3JhZ2UuJGdyaWRUYWJsZS5maW5kKCc+dGJvZHknKS5yZW1vdmUoKTtcclxuXHRcdCRoZWFkV3JhcC5jc3MoeyAncGFkZGluZy1yaWdodCc6ICcnIH0pO1xyXG5cdFx0c3RvcmFnZS4kZ3JpZFRhYmxlLmFwcGVuZCh0Ym9keSk7XHJcblxyXG5cdFx0aWYgKCRncmlkV3JhcC5nZXQoMCkub2Zmc2V0V2lkdGggLSAkZ3JpZFdyYXAuZ2V0KDApLmNsaWVudFdpZHRoKSB7XHJcblx0XHRcdCRoZWFkV3JhcC5jc3MoeyAncGFkZGluZy1yaWdodCc6IHN0b3JhZ2Uuc2Nyb2xsYmFyV2lkdGggKyAncHgnIH0pO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fdXBkYXRlSGVhZCgpO1xyXG5cdH07XHJcblxyXG5cdF9jcmVhdGVTaGFkb3dCb2R5KGZyYWdtZW50LCBhbW91bnQpIHtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXHJcblx0XHRcdHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzLFxyXG5cdFx0XHR0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5JyksXHJcblx0XHRcdHZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsLFxyXG5cdFx0XHRyb3dzQ291bnQgPSB2aWV3TW9kZWwuZGF0YS5sZW5ndGg7XHJcblxyXG5cdFx0bGV0IHRyID0gJzx0cj4nICsgQXJyYXkoY29sTW9kZWxzLmxlbmd0aCArIDEpLmpvaW4oJzx0ZD48L3RkPicpICsgJzwvdHI+JyxcclxuXHRcdFx0dHJzID0gJzx0Ym9keT4nICsgbmV3IEFycmF5KHJvd3NDb3VudCArIDEpLmpvaW4odHIpICsgJzx0Ym9keT4nO1xyXG5cclxuXHRcdGlmICghZnJhZ21lbnQpIHtcclxuXHRcdFx0ZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGJvZHkuaW5uZXJIVE1MID0gdHJzO1xyXG5cclxuXHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKHRib2R5KTtcclxuXHRcdHJldHVybiB0Ym9keTtcclxuXHR9O1xyXG5cclxuXHRfZmlsbFJvdygkdHIsIHJvd0RhdGEsIGRhdGEpIHtcclxuXHJcblx0XHRjb25zdCAkdGRzID0gJHRyLmZpbmQoJ3RkJyksXHJcblx0XHRcdHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzO1xyXG5cdFx0bGV0IG51bSA9IDA7XHJcblxyXG5cdFx0JHRyLmRhdGEoJ1hncmlkLmRhdGEnLCByb3dEYXRhKTtcclxuXHJcblx0XHQkLmVhY2goY29sTW9kZWxzLCBmdW5jdGlvbiAoaSwgY29sTW9kZWwpIHtcclxuXHRcdFx0bGV0IHZhbHVlID0gcm93RGF0YVtjb2xNb2RlbC5rZXldLFxyXG5cdFx0XHRcdCR0ZCA9ICR0ZHMuZXEoaSksXHJcblx0XHRcdFx0ZGF0YTtcclxuXHJcblx0XHRcdGlmIChjb2xNb2RlbC5oaWRkZW4pIHtcclxuXHRcdFx0XHQkdGQucmVtb3ZlKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bnVtKys7XHJcblx0XHRcdFx0ZGF0YSA9IGNvbE1vZGVsLmNlbGxGb3JtYXR0ZXIoJHRkLCB2YWx1ZSwgcm93RGF0YSwgZGF0YSk7XHJcblx0XHRcdFx0aWYgKG51bSAlIDIpIHtcclxuXHRcdFx0XHRcdCR0ZC5hZGRDbGFzcygnb2RkJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCR0ZC5hZGRDbGFzcygnZXZlbicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodHlwZW9mIChkYXRhKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRcdCR0ZC5odG1sKGRhdGEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0X3VwZGF0ZUhlYWQoKSB7XHJcblx0XHRjb25zdCBzZWxmID0gdGhpcyxcclxuXHRcdFx0c3RvcmFnZSA9IHRoaXMuc3RvcmFnZSxcclxuXHRcdFx0Y29sTW9kZWxzID0gc3RvcmFnZS5jb2xNb2RlbHMsXHJcblx0XHRcdHZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsLFxyXG5cdFx0XHQkaGVhZExhYmVscyA9IHN0b3JhZ2UuJGhlYWRMYWJlbHMsXHJcblx0XHRcdHNvcnRCeSA9IHt9O1xyXG5cclxuXHRcdHZpZXdNb2RlbC5zb3J0QnkuZm9yRWFjaChmdW5jdGlvbiAoc29ydFJ1bGUpIHtcclxuXHRcdFx0c29ydEJ5W3NvcnRSdWxlLmJ5XSA9IHNvcnRSdWxlLm9yZGVyO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29sTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGNvbE1vZGVsLCBpKSB7XHJcblx0XHRcdGNvbnN0ICRsYWJlbCA9ICRoZWFkTGFiZWxzLmVxKGkpLFxyXG5cdFx0XHRcdG9yZGVyID0gc29ydEJ5W2NvbE1vZGVsLmFsaWFzXTtcclxuXHRcdFx0aWYgKG9yZGVyKSB7XHJcblx0XHRcdFx0JGxhYmVsLmF0dHIoJ2RhdGEtc29ydCcsIG9yZGVyKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkbGFiZWwucmVtb3ZlQXR0cignZGF0YS1zb3J0Jyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxsO1xyXG4iLCJpbXBvcnQgb3BlcmF0b3JzIGZyb20gJy4vT3BlcmF0b3JzJztcclxuY2xhc3MgRmlsdGVyIHtcclxuXHRleGVjKGRhdGEsIGdyb3VwLCBnZXREYXRhKSB7XHJcblx0XHRjb25zdCBuZXdEYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0sIGkpID0+IHtcclxuXHRcdFx0Y29uc3QgZ2V0ID0gZ2V0RGF0YSgpLFxyXG5cdFx0XHRcdHN0YXRlID0gdGhpcy5fY2hlY2soZ3JvdXAsIGl0ZW0sIGdldCk7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG5ld0RhdGE7XHJcblx0fTtcclxuXHRwcml2YXRlIF9vcihydWxlcywgcm93RGF0YSwgZ2V0KSB7XHJcblx0XHRsZXQgaSA9IHJ1bGVzLmxlbmd0aDtcclxuXHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0Y29uc3QgcnVsZSA9IHJ1bGVzW2ldO1xyXG5cdFx0XHRpZiAoIW9wZXJhdG9yc1tydWxlLm9wXSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB2YWx1ZSA9IGdldChydWxlLmZpZWxkLCByb3dEYXRhKSxcclxuXHRcdFx0XHRzdGF0ZSA9IG9wZXJhdG9yc1tydWxlLm9wXShydWxlLmRhdGEsIHZhbHVlKTtcclxuXHRcdFx0aWYgKHN0YXRlKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9O1xyXG5cdHByaXZhdGUgX2FuZChydWxlcywgcm93RGF0YSwgZ2V0KSB7XHJcblx0XHRsZXQgaSA9IHJ1bGVzLmxlbmd0aDtcclxuXHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0Y29uc3QgcnVsZSA9IHJ1bGVzW2ldO1xyXG5cdFx0XHRpZiAoIW9wZXJhdG9yc1tydWxlLm9wXSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB2YWx1ZSA9IGdldChydWxlLmZpZWxkLCByb3dEYXRhKSxcclxuXHRcdFx0XHRzdGF0ZSA9IG9wZXJhdG9yc1tydWxlLm9wXShydWxlLmRhdGEsIHZhbHVlKTtcclxuXHRcdFx0aWYgKCFzdGF0ZSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxuXHRwcml2YXRlIF9jaGVjayhncm91cCwgcm93RGF0YSwgZ2V0KSB7XHJcblx0XHRjb25zdCBpc09yID0gZ3JvdXAucnVsZXMubGVuZ3RoICYmIFN0cmluZyhncm91cC5ncm91cE9wKS50b1VwcGVyQ2FzZSgpID09PSBcIk9SXCI7XHJcblx0XHRpZiAoJC5pc0FycmF5KGdyb3VwLnJ1bGVzKSAmJiBncm91cC5ydWxlcy5sZW5ndGgpIHtcclxuXHRcdFx0aWYgKGlzT3IpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fb3IoZ3JvdXAucnVsZXMsIHJvd0RhdGEsIGdldCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2FuZChncm91cC5ydWxlcywgcm93RGF0YSwgZ2V0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBGaWx0ZXIoKTsiLCIndXNlIHN0cmljdCc7XHJcbmNsYXNzIEZpbHRlclRvb2xiYXIge1xyXG5cdGNvbnN0cnVjdG9yKHN0b3JhZ2UsIHZpZXdNb2RlbCwgb3B0aW9ucykge1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHRcdHRoaXMuX2JpbmQoKTtcclxuXHRcdHRoaXMudGltZW91dE9uS2V5ZG93biA9IG51bGw7XHJcblx0fVxyXG5cdHRyaWdnZXJUb29sYmFyKCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZSxcclxuXHRcdFx0dmlld01vZGVsID0gdGhpcy52aWV3TW9kZWwsXHJcblx0XHRcdGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzLFxyXG5cdFx0XHRvcHRpb25zID0gdGhpcy5vcHRpb25zLFxyXG5cdFx0XHRydWxlcyA9IFtdLFxyXG5cdFx0XHRkZWZhdWx0U2VhcmNoID0gJ2NuJyxcclxuXHRcdFx0Z3JvdXBPcCA9IG9wdGlvbnMuZmlsdGVyVG9vbGJhckdyb3VwT3AgPT09ICdBTkQnID8gJ0FORCcgOiAnT1InO1xyXG5cdFx0bGV0IHJ1bGVHcm91cCA9IG51bGw7XHJcblxyXG5cdFx0aWYgKCFzdG9yYWdlLiRmaWx0ZXJUb29sYmFySXRlbXMpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblxyXG5cdFx0c3RvcmFnZS4kZmlsdGVyVG9vbGJhckl0ZW1zLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0Y29uc3QgJGZpbHRlciA9ICQodGhpcyksXHJcblx0XHRcdFx0JGVsZW0gPSAkZmlsdGVyLmZpbmQoJy5YZ3JpZC1maWx0ZXInKVxyXG5cdFx0XHRpZiAoJGVsZW0ubGVuZ3RoKSB7XHJcblx0XHRcdFx0Y29uc3QgY29sTW9kZWwgPSBjb2xNb2RlbHNbaV0sXHJcblx0XHRcdFx0XHRzZXR0aW5ncyA9IGNvbE1vZGVsLmZpbHRlclRvb2xiYXJTZXR0aW5ncyB8fCB7fSxcclxuXHRcdFx0XHRcdGZpbHRlck9wdGlvbiA9IGNvbE1vZGVsLmZpbHRlck9wdGlvbiB8fCBkZWZhdWx0U2VhcmNoLFxyXG5cdFx0XHRcdFx0ZmllbGROYW1lID0gY29sTW9kZWwuYWxpYXMgfHwgY29sTW9kZWwua2V5O1xyXG5cclxuXHRcdFx0XHRsZXQgdmFsdWUgPSAkZWxlbS52YWwoKTtcclxuXHJcblx0XHRcdFx0aWYgKHR5cGVvZiAoc2V0dGluZ3MudHJhbnNmb3JtRGF0YSkgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRcdHZhbHVlID0gc2V0dGluZ3MudHJhbnNmb3JtRGF0YSh2YWx1ZSwgc2V0dGluZ3MpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHZhbHVlIHx8IGZpbHRlck9wdGlvbiA9PT0gXCJudVwiIHx8IGZpbHRlck9wdGlvbiA9PT0gXCJublwiKSB7XHJcblx0XHRcdFx0XHRydWxlcy5wdXNoKHtcclxuXHRcdFx0XHRcdFx0ZmllbGQ6IGZpZWxkTmFtZSxcclxuXHRcdFx0XHRcdFx0b3A6IGZpbHRlck9wdGlvbixcclxuXHRcdFx0XHRcdFx0ZGF0YTogdmFsdWVcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKHJ1bGVzLmxlbmd0aCkge1xyXG5cdFx0XHRydWxlR3JvdXAgPSB7XHJcblx0XHRcdFx0Z3JvdXBPcCxcclxuXHRcdFx0XHRydWxlc1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRzdG9yYWdlLmZpbHRlciA9IHJ1bGVHcm91cDtcclxuXHR9O1xyXG5cclxuXHRfYmluZCgpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUub24oJ2tleXByZXNzJywgJ2lucHV0LlhncmlkLWlucHV0LlhncmlkLW9uRW50ZXInLCB0aGlzLl9oYW5kbGVyRmlsdGVyT25FbnRlci5iaW5kKHRoaXMpKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5vbigna2V5ZG93bicsICdpbnB1dC5YZ3JpZC1pbnB1dC5YZ3JpZC1vbktleWRvd24nLCB0aGlzLl9oYW5kbGVyRmlsdGVyT25LZXlkb3duLmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLm9uKCdjaGFuZ2UnLCAnLlhncmlkLWZpbHRlci5YZ3JpZC1vbkNoYW5nZScsIHRoaXMuX2hhbmRsZXJGaWx0ZXJPbkNoYW5nZS5iaW5kKHRoaXMpKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5vbignY2xpY2snLCAnLlhncmlkLXJlc2V0JywgdGhpcy5faGFuZGxlckZpbHRlck9uUmVzZXQuYmluZCh0aGlzKSk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUub24oJ2NsaWNrJywgJy5YZ3JpZC1vblN1Ym1pdCcsIHRoaXMuX2hhbmRsZXJGaWx0ZXJPblN1Ym1pdC5iaW5kKHRoaXMpKTtcclxuXHR9O1xyXG5cclxuXHRfaGFuZGxlckZpbHRlck9uU3VibWl0KGUpIHtcclxuXHRcdCQoZS5jdXJyZW50VGFyZ2V0KS5ibHVyKCk7XHJcblx0XHR0aGlzLnRyaWdnZXJUb29sYmFyKCk7XHJcblx0fTtcclxuXHJcblx0X2hhbmRsZXJGaWx0ZXJPblJlc2V0KGUpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdCRzZWxsID0gJChlLmN1cnJlbnRUYXJnZXQpLmJsdXIoKS5wYXJlbnRzKCcuWGdyaWQtZmlsdGVyLWNlbGw6ZXEoMCknKSxcclxuXHRcdFx0YWxpYXMgPSAkc2VsbC5hdHRyKCdkYXRhLWFsaWFzJyksXHJcblx0XHRcdCRjb250cm9sID0gJHNlbGwuZmluZCgnLlhncmlkLWZpbHRlcicpLFxyXG5cdFx0XHRjb2xNb2RlbCA9IHN0b3JhZ2UuY29sTW9kZWxzRGljdGlvbmFyeVthbGlhc10sXHJcblx0XHRcdGRhdGEgPSAkY29udHJvbC52YWwoKTtcclxuXHJcblx0XHRpZiAoY29sTW9kZWwpIHtcclxuXHRcdFx0aWYgKGNvbE1vZGVsLmZpbHRlclRvb2xiYXJTZXR0aW5ncy5mb3JtQ29udHJvbFR5cGUgPT09ICdzZWxlY3QnKSB7XHJcblx0XHRcdFx0JGNvbnRyb2wudmFsKFtdKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCRjb250cm9sLnZhbCgnJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy50cmlnZ2VyVG9vbGJhcigpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0X2hhbmRsZXJGaWx0ZXJPbkNoYW5nZShlKSB7XHJcblx0XHR0aGlzLnRyaWdnZXJUb29sYmFyKCk7XHJcblx0fTtcclxuXHRfaGFuZGxlckZpbHRlck9uS2V5ZG93bihlKSB7XHJcblxyXG5cdFx0dmFyIGtleSA9IGUud2hpY2g7XHJcblx0XHRzd2l0Y2ggKGtleSkge1xyXG5cdFx0XHRjYXNlIDEzOlxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0Y2FzZSA5OlxyXG5cdFx0XHRjYXNlIDE2OlxyXG5cdFx0XHRjYXNlIDM3OlxyXG5cdFx0XHRjYXNlIDM4OlxyXG5cdFx0XHRjYXNlIDM5OlxyXG5cdFx0XHRjYXNlIDQwOlxyXG5cdFx0XHRjYXNlIDI3OlxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cclxuXHRcdFx0XHRpZiAodGhpcy50aW1lb3V0T25LZXlkb3duKSB7XHJcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0T25LZXlkb3duKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy50aW1lb3V0T25LZXlkb3duID0gc2V0VGltZW91dChcclxuXHRcdFx0XHRcdCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy50cmlnZ2VyVG9vbGJhcigpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdDUwMFxyXG5cdFx0XHRcdCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0X2hhbmRsZXJGaWx0ZXJPbkVudGVyKGUpIHtcclxuXHRcdHZhciBrZXkgPSBlLmNoYXJDb2RlIHx8IGUua2V5Q29kZSB8fCAwO1xyXG5cdFx0aWYgKGtleSA9PT0gMTMpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR0aGlzLnRyaWdnZXJUb29sYmFyKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlclRvb2xiYXI7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyVG9vbGJhck1vZGVsIGltcGxlbWVudHMgSUZpbHRlclRvb2xiYXJNb2RlbCB7XHJcblx0Zm9ybUNvbnRyb2xUeXBlID0gJ3RleHQnO1xyXG5cdHNlbGVjdE9wdGlvbnMgPSBbXTtcclxuXHRwbGFjZWhvbGRlciA9ICcnO1xyXG5cdG9uRW50ZXIgPSB0cnVlO1xyXG5cdG9uS2V5ZG93biA9IGZhbHNlO1xyXG5cdG9uQ2hhbmdlID0gZmFsc2U7XHJcblx0YWxsb3dSZXNldEJ1dHRvbiA9IHRydWU7XHJcblx0YWxsb3dTdWJtaXRCdXR0b24gPSB0cnVlO1xyXG5cdHRyYW5zZm9ybURhdGE/OiBGdW5jdGlvbjsgXHJcblxyXG5cdGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XHJcblx0XHQkLmV4dGVuZCh0aGlzLCBzZXR0aW5ncyk7XHJcblx0XHRpZiAoIXRoaXMudHJhbnNmb3JtRGF0YSkge1xyXG5cdFx0XHRpZiAodGhpcy5mb3JtQ29udHJvbFR5cGUgPT09ICdzZWxlY3QnKSB7XHJcblx0XHRcdFx0dGhpcy50cmFuc2Zvcm1EYXRhID0gKChkYXRhKSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgcmVzdWx0O1xyXG5cdFx0XHRcdFx0Y29uc3Qgc2VsZWN0T3B0aW9ucyA9IHRoaXMuc2VsZWN0T3B0aW9ucztcclxuXHRcdFx0XHRcdGlmICgkLmlzQXJyYXkoZGF0YSkpIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0ID0gW107XHJcblx0XHRcdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgaXRlbSA9IHNlbGVjdE9wdGlvbnNba2V5XTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbS52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGtleSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXN1bHQubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmIChzZWxlY3RPcHRpb25zW2RhdGFdKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNlbGVjdE9wdGlvbnNbZGF0YV0udmFsdWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuIiwiY2xhc3MgRml4ZWRIZWFkZXIge1xyXG5cdGNvbnN0cnVjdG9yKHN0b3JhZ2UpIHtcclxuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblx0XHR0aGlzLnByb3BlcnRpZXMgPSB7XHJcblxyXG5cdFx0fVxyXG5cdFx0dGhpcy5fZXhlYygpO1xyXG5cdH1cclxuXHJcblx0cmVzaXplKCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZSxcclxuXHRcdFx0c2VsZiA9IHRoaXM7XHJcblx0XHRsZXQgdyA9IDA7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuZmluZCgnLlhncmlkLXRoZWFkLXcgaWZyYW1lJykuZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRjb25zdCAkaWZyYW1lID0gJCh0aGlzKSxcclxuXHRcdFx0XHR3aWR0aCA9ICRpZnJhbWUud2lkdGgoKSxcclxuXHRcdFx0XHRhbGlhcyA9ICRpZnJhbWUuYXR0cignZGF0YS1hbGlhcycpO1xyXG5cdFx0XHRzZWxmLl9oYW5kbGVyUmVzaXplZENlbGxXaWR0aCh3aWR0aCwgaSwgYWxpYXMpO1xyXG5cdFx0fSk7XHJcblxyXG5cdH07XHJcblxyXG5cdF9leGVjKCkge1xyXG5cdFx0dGhpcy5fYnVpbGQoKTtcclxuXHRcdHRoaXMuX2JpbmQoKTtcclxuXHR9O1xyXG5cclxuXHRfYnVpbGQoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHRjZWxsV2lkdGhMaXN0ZW5lcnMgPSBbXSxcclxuXHRcdFx0Y29sTW9kZWxzID0gc3RvcmFnZS5jb2xNb2RlbHMsXHJcblx0XHRcdHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXM7XHJcblxyXG5cdFx0cHJvcGVydGllcy4kY2VsbFdpZHRoUmVjaXBpZW50cyA9IHN0b3JhZ2UuJGdyaWRUYWJsZS5maW5kKCcuWGdyaWQtdGJvZHktdyBpJyk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuZmluZCgnLlhncmlkLXRoZWFkLXcgdGQnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdGNvbnN0IGlmcmFtZSA9ICQodGhpcykuZmluZCgnaWZyYW1lJykuZ2V0KDApO1xyXG5cdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdkYXRhLWNvbCcsIGkpO1xyXG5cdFx0XHRjZWxsV2lkdGhMaXN0ZW5lcnMucHVzaChpZnJhbWUpO1xyXG5cdFx0fSk7XHJcblx0XHRwcm9wZXJ0aWVzLiRjZWxsV2lkdGhMaXN0ZW5lcnMgPSAkKGNlbGxXaWR0aExpc3RlbmVycyk7XHJcblx0fTtcclxuXHJcblx0X2JpbmQoKSB7XHJcblx0XHRjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG5cdFx0XHRzZWxmID0gdGhpcztcclxuXHJcblx0XHRwcm9wZXJ0aWVzLiRjZWxsV2lkdGhMaXN0ZW5lcnMuZWFjaChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRjb25zdCBpZnJhbWUgPSB0aGlzLFxyXG5cdFx0XHRcdCRpZnJhbWUgPSAkKGlmcmFtZSk7XHJcblxyXG5cdFx0XHRzZWxmLl9oYW5kbGVyUmVzaXplZENlbGxXaWR0aCgkaWZyYW1lLndpZHRoKCksIGksICRpZnJhbWUuYXR0cignZGF0YS1hbGlhcycpKTtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0JChpZnJhbWUuY29udGVudFdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdHNlbGYuX2hhbmRsZXJSZXNpemVkQ2VsbFdpZHRoKCRpZnJhbWUud2lkdGgoKSwgaSwgJGlmcmFtZS5hdHRyKCdkYXRhLWFsaWFzJykpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LCAxMDApO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0X2hhbmRsZXJSZXNpemVkQ2VsbFdpZHRoKHdpZHRoLCBudW0sIGFsaWFzKSB7XHJcblx0XHRjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG5cdFx0XHQkaXRlbSA9IHByb3BlcnRpZXMuJGNlbGxXaWR0aFJlY2lwaWVudHMuZmlsdGVyKCdbZGF0YS1hbGlhcz1cIicgKyBhbGlhcyArICdcIl0nKTtcclxuXHRcdCRpdGVtLndpZHRoKHdpZHRoKTtcclxuXHRcdCRpdGVtLnBhcmVudCgpLndpZHRoKHdpZHRoKTtcclxuXHR9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZpeGVkSGVhZGVyOyIsImltcG9ydCBwaXBlcyBmcm9tICcuL1BpcGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsU29ydFJ1bGVNb2RlbCBpbXBsZW1lbnRzIElMb2NhbFNvcnRSdWxlIHtcclxuXHRieTogc3RyaW5nO1xyXG5cdG9yZGVyOiBzdHJpbmc7XHJcblx0Y29sTW9kZWw/OiBJQ29sTW9kZWw7XHJcblx0Z2V0OiBGdW5jdGlvbiA9IHBpcGVzLmdldEJ5VHlwZSgpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcmRlcjogc3RyaW5nLCBieTogc3RyaW5nLCBjb2xNb2RlbDogbnVsbCB8IElDb2xNb2RlbCkge1xyXG5cdFx0dGhpcy5vcmRlciA9IG9yZGVyO1xyXG5cdFx0dGhpcy5ieSA9IGJ5O1xyXG5cclxuXHRcdGlmIChjb2xNb2RlbCkge1xyXG5cdFx0XHR0aGlzLmNvbE1vZGVsID0gY29sTW9kZWw7XHJcblx0XHRcdHRoaXMuZ2V0ID0gY29sTW9kZWwuc29ydEZvcm1hdHRlcjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiY2xhc3MgT3BlcmF0b3JzIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuZXEgPSB0aGlzLmVxdWFscztcclxuXHRcdHRoaXMubmUgPSB0aGlzLm5vdEVxdWFscztcclxuXHRcdHRoaXMubHQgPSB0aGlzLmxlc3M7XHJcblx0XHR0aGlzLmxlID0gdGhpcy5sZXNzT3JFcXVhbHM7XHJcblx0XHR0aGlzLmd0ID0gdGhpcy5ncmVhdGVyO1xyXG5cdFx0dGhpcy5nZSA9IHRoaXMuZ3JlYXRlck9yRXF1YWxzO1xyXG5cdFx0dGhpcy5jbiA9IHRoaXMuY29udGFpbnM7XHJcblx0XHR0aGlzLm5jID0gKCguLi5hcmcpID0+IHtcclxuXHRcdFx0cmV0dXJuICF0aGlzLmNvbnRhaW5zLmFwcGx5KHRoaXMsIGFyZyk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuYncgPSB0aGlzLnN0YXJ0c1dpdGg7XHJcblx0XHR0aGlzLmJuID0gKCguLi5hcmcpID0+IHtcclxuXHRcdFx0cmV0dXJuICF0aGlzLnN0YXJ0c1dpdGguYXBwbHkodGhpcywgYXJnKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5lbiA9ICgoLi4uYXJnKSA9PiB7XHJcblx0XHRcdHJldHVybiAhdGhpcy5lbmRzV2l0aC5hcHBseSh0aGlzLCBhcmcpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmV3ID0gdGhpcy5lbmRzV2l0aDtcclxuXHRcdHRoaXMuaW4gPSB0aGlzLmluQXJyYXk7XHJcblx0XHR0aGlzLm5pID0gKCguLi5hcmcpID0+IHtcclxuXHRcdFx0cmV0dXJuICF0aGlzLmluQXJyYXkuYXBwbHkodGhpcywgYXJnKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5udSA9IHRoaXMuaXNOdWxsO1xyXG5cdFx0dGhpcy5ubiA9ICgoLi4uYXJnKSA9PiB7XHJcblx0XHRcdHJldHVybiAhdGhpcy5pc051bGwuYXBwbHkodGhpcywgYXJnKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0ZXF1YWxzKGEsIGIpIHtcclxuXHRcdHJldHVybiBhID09PSBiO1xyXG5cdH07XHJcblx0bm90RXF1YWxzKGEsIGIpIHtcclxuXHRcdHJldHVybiBhICE9PSBiO1xyXG5cdH07XHJcblx0aXNOdWxsKGEpIHtcclxuXHRcdHJldHVybiBhID09PSBudWxsO1xyXG5cdH07XHJcblx0Z3JlYXRlcihhLCBiKSB7XHJcblx0XHRyZXR1cm4gYSA+IGI7XHJcblx0fTtcclxuXHRsZXNzKGEsIGIpIHtcclxuXHRcdHJldHVybiBhIDwgYjtcclxuXHR9O1xyXG5cdGdyZWF0ZXJPckVxdWFscyhhLCBiKSB7XHJcblx0XHRyZXR1cm4gYSA+PSBiO1xyXG5cdH07XHJcblx0bGVzc09yRXF1YWxzKGEsIGIpIHtcclxuXHRcdHJldHVybiBhIDw9IGI7XHJcblx0fTtcclxuXHRpbkFycmF5KGFycmF5LCBiKSB7XHJcblx0XHRyZXR1cm4gJC5pbkFycmF5KGIsIGFycmF5KSAhPT0gLTE7XHJcblx0fTtcclxuXHRzdGFydHNXaXRoKGEsIGIsIGluc2Vuc2l0aXZlKSB7XHJcblx0XHRhID0gU3RyaW5nKGEpO1xyXG5cdFx0YiA9IFN0cmluZyhiKTtcclxuXHRcdGlmIChpbnNlbnNpdGl2ZSkge1xyXG5cdFx0XHRhID0gYS50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0XHRiID0gYi50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGxlbmd0aCA9IGEubGVuZ3RoLFxyXG5cdFx0XHRzdHIgPSBhLnN1YnN0cigwLCBsZW5ndGgpO1xyXG5cdFx0cmV0dXJuIHN0ciA9PT0gYlxyXG5cdH07XHJcblx0ZW5kc1dpdGgoYSwgYiwgaW5zZW5zaXRpdmUpIHtcclxuXHRcdGEgPSBTdHJpbmcoYSk7XHJcblx0XHRiID0gU3RyaW5nKGIpO1xyXG5cdFx0aWYgKGluc2Vuc2l0aXZlKSB7XHJcblx0XHRcdGEgPSBhLnRvVXBwZXJDYXNlKCk7XHJcblx0XHRcdGIgPSBiLnRvVXBwZXJDYXNlKCk7XHJcblx0XHR9XHJcblx0XHRsZXQgbGVuZ3RoID0gYi5sZW5ndGggKiAtMSxcclxuXHRcdFx0c3RyID0gYS5zdWJzdHIobGVuZ3RoKTtcclxuXHRcdHJldHVybiBzdHIgPT09IGI7XHJcblx0fTtcclxuXHRjb250YWlucyhhLCBiLCBpbnNlbnNpdGl2ZSkge1xyXG5cdFx0YSA9IFN0cmluZyhhKTtcclxuXHRcdGIgPSBTdHJpbmcoYik7XHJcblx0XHRpZiAoaW5zZW5zaXRpdmUpIHtcclxuXHRcdFx0YSA9IGEudG9VcHBlckNhc2UoKTtcclxuXHRcdFx0YiA9IGIudG9VcHBlckNhc2UoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBiLmluZGV4T2YoYSkgIT09IC0xO1xyXG5cdH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE9wZXJhdG9ycygpOyIsIid1c2Ugc3RyaWN0JztcclxuY2xhc3MgUGFnaW5hdGlvbiB7XHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucywgc3RvcmFnZSwgdmlld01vZGVsLCApIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblx0XHR0aGlzLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcclxuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblxyXG5cdFx0dGhpcy5fc3Vic2NyaWJlKCk7XHJcblx0XHR0aGlzLnBhZ2UoKTtcclxuXHRcdHRoaXMudG90YWxQYWdlcygpO1xyXG5cdFx0dGhpcy5leGVjKCk7XHJcblx0fTtcclxuXHRleGVjKCkge1xyXG5cdFx0dGhpcy5fYmluZCgpO1xyXG5cdH07XHJcblxyXG5cdHBhZ2UoKSB7XHJcblx0XHR0aGlzLnN0b3JhZ2UuJHBhZ2luYXRpb25Cb3guZmluZCgnLlhncmlkLWN1cnJlbnQtcGFnZScpLnZhbCh0aGlzLnZpZXdNb2RlbC5wYWdlKTtcclxuXHR9O1xyXG5cclxuXHR0b3RhbFBhZ2VzKCkge1xyXG5cdFx0dGhpcy5zdG9yYWdlLiRwYWdpbmF0aW9uQm94LmZpbmQoJy5YZ3JpZC10b3RhbC1wYWdlcycpLnRleHQodGhpcy52aWV3TW9kZWwudG90YWxQYWdlcyk7XHJcblx0fTtcclxuXHJcblx0X3N1YnNjcmliZSgpIHtcclxuXHRcdGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsO1xyXG5cdFx0dmlld01vZGVsLm9uKCdwYWdlJywgdGhpcy5wYWdlLmJpbmQodGhpcykpO1xyXG5cdFx0dmlld01vZGVsLm9uKCd0b3RhbFBhZ2VzJywgdGhpcy50b3RhbFBhZ2VzLmJpbmQodGhpcykpO1xyXG5cdH07XHJcblxyXG5cdF9iaW5kKCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdHN0b3JhZ2UuJHBhZ2luYXRpb25Cb3gub24oJ2NsaWNrLnhncmlkJywgJy5YZ3JpZC1maXJzdCcsIHRoaXMuX2hhbmRsZXJGaXJzdC5iaW5kKHRoaXMpKTtcclxuXHRcdHN0b3JhZ2UuJHBhZ2luYXRpb25Cb3gub24oJ2NsaWNrLnhncmlkJywgJy5YZ3JpZC1wcmV2JywgdGhpcy5faGFuZGxlclByZXYuYmluZCh0aGlzKSk7XHJcblx0XHRzdG9yYWdlLiRwYWdpbmF0aW9uQm94Lm9uKCdjbGljay54Z3JpZCcsICcuWGdyaWQtbmV4dCcsIHRoaXMuX2hhbmRsZXJOZXh0LmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveC5vbignY2xpY2sueGdyaWQnLCAnLlhncmlkLWxhc3QnLCB0aGlzLl9oYW5kbGVyTGFzdC5iaW5kKHRoaXMpKTtcclxuXHRcdHN0b3JhZ2UuJHBhZ2luYXRpb25Cb3gub24oJ2tleXByZXNzLnhncmlkJywgJy5YZ3JpZC1jdXJyZW50LXBhZ2UnLCB0aGlzLl9oYW5kbGVyR29Uby5iaW5kKHRoaXMpKTtcclxuXHR9O1xyXG5cclxuXHRfaGFuZGxlckZpcnN0KGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGlmICh0aGlzLnZpZXdNb2RlbC5wYWdlICE9PSAxKSB7XHJcblx0XHRcdHRoaXMudmlld01vZGVsLm5ld1BhZ2UgPSAxO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0X2hhbmRsZXJMYXN0KGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGlmICh0aGlzLnZpZXdNb2RlbC5wYWdlICE9PSB0aGlzLnZpZXdNb2RlbC50b3RhbFBhZ2VzKSB7XHJcblx0XHRcdHRoaXMudmlld01vZGVsLm5ld1BhZ2UgPSB0aGlzLnZpZXdNb2RlbC50b3RhbFBhZ2VzO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0X2hhbmRsZXJOZXh0KGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IHBhZ2UgPSB0aGlzLnZpZXdNb2RlbC5wYWdlICsgMTtcclxuXHRcdGlmIChwYWdlIDw9IHRoaXMudmlld01vZGVsLnRvdGFsUGFnZXMpIHtcclxuXHRcdFx0dGhpcy52aWV3TW9kZWwubmV3UGFnZSA9IHBhZ2U7XHJcblx0XHR9XHJcblx0fTtcclxuXHRfaGFuZGxlclByZXYoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgcGFnZSA9IHRoaXMudmlld01vZGVsLnBhZ2UgLSAxO1xyXG5cdFx0aWYgKHBhZ2UgPiAwKSB7XHJcblx0XHRcdHRoaXMudmlld01vZGVsLm5ld1BhZ2UgPSBwYWdlO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0X2hhbmRsZXJHb1RvKGUpIHtcclxuXHRcdGlmIChlLndoaWNoID09PSAxMykge1xyXG5cdFx0XHRsZXQgcGFnZSA9ICQoZS5jdXJyZW50VGFyZ2V0KS52YWwoKTtcclxuXHRcdFx0aWYgKCFpc05hTihwYWdlKSkge1xyXG5cdFx0XHRcdHBhZ2UgPSArcGFnZTtcclxuXHRcdFx0XHRpZiAocGFnZSA8IDEpIHtcclxuXHRcdFx0XHRcdHBhZ2UgPSAxO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAocGFnZSA+IHRoaXMudmlld01vZGVsLnRvdGFsUGFnZXMpIHtcclxuXHRcdFx0XHRcdHBhZ2UgPSB0aGlzLnZpZXdNb2RlbC50b3RhbFBhZ2VzO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnZpZXdNb2RlbC5uZXdQYWdlID0gcGFnZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnZpZXdNb2RlbC5wYWdlID0gdGhpcy52aWV3TW9kZWwubmV3UGFnZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247IiwiY2xhc3MgUGlwZXMge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5pbnRlZ2VyID0gdGhpcy5pbnRlZ2VyLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmludCA9IHRoaXMuaW50ZWdlcjtcclxuXHJcblx0XHR0aGlzLm51bWVyaWMgPSB0aGlzLm51bWVyaWMuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuZmxvYXQgPSB0aGlzLm51bWVyaWM7XHJcblx0XHR0aGlzLm51bWJlciA9IHRoaXMubnVtZXJpYztcclxuXHJcblx0XHQvL3RoaXMuZGF0ZXRpbWUgPSB0aGlzLmRhdGUuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMudGV4dCA9ICgodmFsdWUsIHJvd0RhdGEsIGNvbE1vZGVsKSA9PiB7XHJcblx0XHRcdGlmIChjb2xNb2RlbC5pbnNlbnNpdGl2ZSkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmluc2Vuc2l0aXZldGV4dC5jYWxsKHRoaXMsIHZhbHVlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zZW5zaXRpdmV0ZXh0LmNhbGwodGhpcywgdmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmlzTm90WmVybyA9IHtcclxuXHRcdFx0dW5kZWZpbmVkOiAxXHJcblx0XHR9O1xyXG5cclxuXHRcdFsnJywgbnVsbCwgZmFsc2UsIHRydWVdLmZvckVhY2goKGtleSkgPT4ge1xyXG5cdFx0XHR0aGlzLmlzTm90WmVyb1trZXldID0gMTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGdldEJ5VHlwZSh0eXBlKSB7XHJcblx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0Y2FzZSAnaW50JzpcclxuXHRcdFx0Y2FzZSAnaW50ZWdlcic6XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW50ZWdlcjtcclxuXHRcdFx0Y2FzZSAnZmxvYXQnOlxyXG5cdFx0XHRjYXNlICdudW1iZXInOlxyXG5cdFx0XHRjYXNlICdudW1lcmljJzpcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5udW1lcmljO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiB0aGlzLnRleHQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRudW1lcmljKHZhbHVlKSB7XHJcblx0XHRsZXQgcmVzdWx0O1xyXG5cdFx0aWYgKHRoaXMuaXNOb3RaZXJvW3ZhbHVlXSkge1xyXG5cdFx0XHRyZXN1bHQgPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoaXNOYU4odmFsdWUpKSB7XHJcblx0XHRcdFx0cmVzdWx0ID0gcGFyc2VGbG9hdChTdHJpbmcodmFsdWUpLnJlcGxhY2UoLywvZywgJy4nKS5yZXBsYWNlKC9bXFwkJV0vZywgJycpKTtcclxuXHRcdFx0XHRyZXN1bHQgPSBpc05hTihyZXN1bHQpID8gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZIDogcmVzdWx0O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdCA9ICt2YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG5cclxuXHRpbnRlZ2VyKHZhbHVlKSB7XHJcblx0XHRsZXQgcmVzdWx0O1xyXG5cdFx0aWYgKHRoaXMuaXNOb3RaZXJvW3ZhbHVlXSkge1xyXG5cdFx0XHRyZXN1bHQgPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoaXNOYU4odmFsdWUpKSB7XHJcblx0XHRcdFx0cmVzdWx0ID0gU3RyaW5nKHZhbHVlKS5yZXBsYWNlKC9bXFwkLCVdL2csICcnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXN1bHQgPSBwYXJzZUludChyZXN1bHQpO1xyXG5cdFx0XHRyZXN1bHQgPSBpc05hTihyZXN1bHQpID8gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZIDogcmVzdWx0O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9O1xyXG5cclxuXHRpbnNlbnNpdGl2ZXRleHQodmFsdWUpIHtcclxuXHRcdHJldHVybiB2YWx1ZSA/ICQudHJpbShTdHJpbmcodmFsdWUpKSA6IFwiXCI7XHJcblx0fTtcclxuXHJcblx0c2Vuc2l0aXZldGV4dCh2YWx1ZSkge1xyXG5cdFx0cmV0dXJuICh2YWx1ZSA/ICQudHJpbShTdHJpbmcodmFsdWUpKSA6IFwiXCIpLnRvTG93ZXJDYXNlKCk7XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFBpcGVzKCk7IiwiaW1wb3J0IENvbE1vZGVsIGZyb20gJy4vQ29sTW9kZWwnO1xyXG5pbXBvcnQgU29ydFJ1bGUgZnJvbSAnLi9Tb3J0UnVsZSc7XHJcblxyXG5jbGFzcyBQcm9jZXNzU2V0dGluZ3Mge1xyXG5cdHZpZXdNb2RlbDogSVZpZXdNb2RlbDtcclxuXHRzdG9yYWdlOiBJU3RvcmFnZTtcclxuXHRwcm9wZXJ0aWVzOiBJUHJvY2Vzc1NldHRpbmdzUHJvcGVydGllcztcclxuXHRvcHRpb25zOiBJUHJvY2Vzc1NldHRpbmdzT3B0aW9uc1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCBzdG9yYWdlLCB2aWV3TW9kZWwpIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHtcclxuXHRcdFx0Y29sTW9kZWxzOiBbXSxcclxuXHRcdFx0ZmlsdGVyVG9vbGJhcjogZmFsc2VcclxuXHRcdH0sIG9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMucHJvcGVydGllcyA9IHtcclxuXHRcdFx0c2Nyb2xsYmFyV2lkdGg6IG51bGxcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcclxuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblx0XHR0aGlzLl9leGVjKCk7XHJcblx0fTtcclxuXHJcblx0X2dldFNjcm9sbGJhcldpZHRoKCkge1xyXG5cdFx0bGV0IGRpdiwgd2lkdGg7XHJcblx0XHRpZiAodGhpcy5wcm9wZXJ0aWVzLnNjcm9sbGJhcldpZHRoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnByb3BlcnRpZXMuc2Nyb2xsYmFyV2lkdGg7XHJcblx0XHR9XHJcblxyXG5cdFx0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRkaXYuaW5uZXJIVE1MID0gJzxkaXYgc3R5bGU9XCJ3aWR0aDo1MHB4O2hlaWdodDo1MHB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTUwcHg7dG9wOi01MHB4O292ZXJmbG93OmF1dG87XCI+PGRpdiBzdHlsZT1cIndpZHRoOjFweDtoZWlnaHQ6MTAwcHg7XCI+PC9kaXY+PC9kaXY+JztcclxuXHRcdGRpdiA9IGRpdi5maXJzdENoaWxkO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdFx0d2lkdGggPSBkaXYub2Zmc2V0V2lkdGggLSBkaXYuY2xpZW50V2lkdGg7XHJcblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XHJcblx0XHR0aGlzLnByb3BlcnRpZXMuc2Nyb2xsYmFyV2lkdGggPSB3aWR0aDtcclxuXHRcdHJldHVybiB3aWR0aDtcclxuXHR9O1xyXG5cclxuXHRfY29sdW1uTW9kZWwoKSB7XHJcblx0XHRjb25zdCB7IHN0b3JhZ2UsIG9wdGlvbnMgfSA9IHRoaXM7XHJcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBbXTtcclxuXHRcdGNvbnN0IGFsaWFzZXMgPSB7fTtcclxuXHRcdGNvbnN0IGNvbE1vZGVsc0RpY3Rpb25hcnkgPSB7fTtcclxuXHJcblx0XHQkLmVhY2gob3B0aW9ucy5jb2xNb2RlbHMsIChpLCBtb2RlbCkgPT4ge1xyXG5cdFx0XHRjb25zdCBjb2xNb2RlbCA9IG5ldyBDb2xNb2RlbChtb2RlbCwgaSk7XHJcblxyXG5cdFx0XHRpZiAoIWFsaWFzZXNbY29sTW9kZWwuYWxpYXNdKSB7XHJcblx0XHRcdFx0YWxpYXNlc1tjb2xNb2RlbC5hbGlhc10gPSAxO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRocm93IHtcclxuXHRcdFx0XHRcdHZhbHVlOiB7XHJcblx0XHRcdFx0XHRcdGk6IGksXHJcblx0XHRcdFx0XHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KG1vZGVsKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6ICdhbGlhcyBpcyBub3QgdW5pcXVlJyxcclxuXHRcdFx0XHRcdG5hbWU6ICdFcnJvcjogY29sTW9kZWwnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbE1vZGVsc0RpY3Rpb25hcnlbY29sTW9kZWwuYWxpYXNdID0gY29sTW9kZWw7XHJcblx0XHRcdGNvbE1vZGVscy5wdXNoKGNvbE1vZGVsKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHN0b3JhZ2UuY29sTW9kZWxzID0gY29sTW9kZWxzO1xyXG5cdFx0c3RvcmFnZS5jb2xNb2RlbHNEaWN0aW9uYXJ5ID0gY29sTW9kZWxzRGljdGlvbmFyeTtcclxuXHR9O1xyXG5cclxuXHRfZXhlYygpIHtcclxuXHRcdGNvbnN0IHsgc3RvcmFnZSB9ID0gdGhpcztcclxuXHJcblx0XHR0aGlzLl9jb2x1bW5Nb2RlbCgpO1xyXG5cdFx0c3RvcmFnZS5zY3JvbGxiYXJXaWR0aCA9IHRoaXMuX2dldFNjcm9sbGJhcldpZHRoKCk7XHJcblx0XHR0aGlzLl9wcm9jZXNzU29ydGluZygpO1xyXG5cdH07XHJcblxyXG5cdF9wcm9jZXNzU29ydGluZygpIHtcclxuXHRcdGNvbnN0IHt2aWV3TW9kZWwsIG9wdGlvbnN9ID0gdGhpcztcclxuXHRcdGxldCBzb3J0QnkgPSBvcHRpb25zLnNvcnRCeSxcclxuXHRcdFx0ZGF0YSA9IFtdO1xyXG5cclxuXHRcdGlmIChvcHRpb25zLmZpbHRlclRvb2xiYXIpIHtcclxuXHRcdFx0dmlld01vZGVsLmZpbHRlclRvb2xiYXIgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNvcnRCeSAmJiB0eXBlb2YgKHNvcnRCeSkgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdGNvbnN0IHNvcnRCeUl0ZW1zID0gc29ydEJ5LnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKCkuc3BsaXQoJywnKTtcclxuXHRcdFx0aWYgKHNvcnRCeUl0ZW1zLmxlbmd0aCkge1xyXG5cdFx0XHRcdHNvcnRCeUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHNvcnRSdWxlID0gaXRlbS50cmltKCkuc3BsaXQoJyAnKTtcclxuXHRcdFx0XHRcdGNvbnN0IGJ5ID0gc29ydFJ1bGVbMF07XHJcblxyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiAoYnkpICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdFx0XHRsZXQgcnVsZTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChTdHJpbmcoc29ydFJ1bGVbMV0pLnRvVXBwZXJDYXNlKCkgPT09ICdERVNDJykge1xyXG5cdFx0XHRcdFx0XHRcdHJ1bGUgPSBuZXcgU29ydFJ1bGUoYnksICdERVNDJyk7XHJcblxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJ1bGUgPSBuZXcgU29ydFJ1bGUoYnkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGRhdGEucHVzaChydWxlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICgkLmlzQXJyYXkoc29ydEJ5KSAmJiBzb3J0QnkubGVuZ3RoKSB7XHJcblx0XHRcdHNvcnRCeS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgeyBieSwgb3JkZXIgfSA9IGl0ZW07XHJcblx0XHRcdFx0bGV0IHJ1bGU7XHJcblxyXG5cdFx0XHRcdGlmIChieSkge1xyXG5cdFx0XHRcdFx0aWYgKFN0cmluZyhvcmRlcikudG9VcHBlckNhc2UoKSAhPT0gJ0RFU0MnKSB7XHJcblx0XHRcdFx0XHRcdHJ1bGUgPSBuZXcgU29ydFJ1bGUoYnkpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cnVsZSA9IG5ldyBTb3J0UnVsZShieSwgJ0RFU0MnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGRhdGEucHVzaChydWxlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGRhdGEubGVuZ3RoKSB7XHJcblx0XHRcdHZpZXdNb2RlbC5zb3J0QnkgPSBkYXRhO1xyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvY2Vzc1NldHRpbmdzOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXJ5TW9kZWwgaW1wbGVtZW50cyBJUXVlcnlNb2RlbCB7XHJcblx0ZmlsdGVyID0ge307XHJcblx0c29ydCA9IFtdO1xyXG5cdHJvd3MgPSAwO1xyXG5cdHBhZ2UgPSAxO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XHJcblx0XHQkLmV4dGVuZCh0aGlzLCBkYXRhKTtcclxuXHR9XHJcbn1cclxuIiwiY2xhc3MgU29ydCB7XHJcblx0ZXhlYyhkYXRhID0gW10sIHJ1bGVzOiBJTG9jYWxTb3J0UnVsZVtdID0gW10pIHtcclxuXHRcdGxldCBzb3VyY2U7XHJcblx0XHRpZiAoIWRhdGEubGVuZ3RoIHx8ICFydWxlcy5sZW5ndGgpIHtcclxuXHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHR9XHJcblx0XHRzb3VyY2UgPSB0aGlzLl9nZXRTb3VyY2UoZGF0YSwgcnVsZXMpO1xyXG5cdFx0c291cmNlLnNvcnQoKGEsIGIpID0+IHtcclxuXHRcdFx0bGV0IHJlc3VsdCA9IDA7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwLCBqID0gcnVsZXMubGVuZ3RoOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRsZXQga2V5ID0gcnVsZXNbaV0uYnk7XHJcblx0XHRcdFx0aWYgKHJ1bGVzW2ldLm9yZGVyID09PSAnQVNDJykge1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gdGhpcy5BU0MoYS5mb3JtYXR0ZWRba2V5XSwgYi5mb3JtYXR0ZWRba2V5XSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gdGhpcy5ERVNDKGEuZm9ybWF0dGVkW2tleV0sIGIuZm9ybWF0dGVkW2tleV0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChyZXN1bHQgIT09IDApIHtcclxuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBzb3VyY2UubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRcdHJldHVybiBpdGVtLl87XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdEFTQyhhLCBiKSB7XHJcblx0XHRpZiAoYSA8IGIpIHtcclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGEgPiBiKSB7XHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIDA7XHJcblx0fTtcclxuXHJcblx0REVTQyhhLCBiKSB7XHJcblx0XHRpZiAoYSA8IGIpIHtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9XHJcblx0XHRpZiAoYSA+IGIpIHtcclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIDA7XHJcblx0fTtcclxuXHRfZ2V0U291cmNlKGRhdGEsIHJ1bGVzKSB7XHJcblx0XHRyZXR1cm4gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRcdFx0bGV0IGZvcm1hdHRlZCA9IHt9O1xyXG5cdFx0XHRydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XHJcblx0XHRcdFx0Zm9ybWF0dGVkW3J1bGUuYnldID0gcnVsZS5nZXQoaXRlbVtydWxlLmJ5XSwgaXRlbSwgcnVsZS5jb2xNb2RlbCwgZGF0YSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdF86IGl0ZW0sXHJcblx0XHRcdFx0Zm9ybWF0dGVkLFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgU29ydCgpOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvcnRSdWxlIGltcGxlbWVudHMgSVNvcnRSdWxlIHtcclxuXHRieTogc3RyaW5nO1xyXG5cdG9yZGVyOiBzdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGJ5LCBvcmRlciA9ICdBU0MnKSB7XHJcblx0XHR0aGlzLmJ5ID0gYnk7XHJcblx0XHR0aGlzLm9yZGVyID0gb3JkZXI7XHJcblx0fVxyXG5cdHRyaWdnZXJPcmRlcigpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLm9yZGVyID09PSAnQVNDJykge1xyXG5cdFx0XHR0aGlzLm9yZGVyID0gJ0RFU0MnO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5vcmRlciA9ICdBU0MnO1xyXG5cdFx0fVxyXG5cdH07XHJcbn07IiwiaW1wb3J0IFNvcnRSdWxlIGZyb20gJy4vU29ydFJ1bGUnO1xyXG5jbGFzcyBTb3J0aW5nIHtcclxuXHRjb25zdHJ1Y3RvcihzdG9yYWdlLCB2aWV3TW9kZWwsIG9wdGlvbnMpIHtcclxuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblx0XHR0aGlzLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcclxuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblx0XHR0aGlzLmJpbmQoKTtcclxuXHR9O1xyXG5cdHNvcnRCeUFsaWFzKGFsaWFzKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlLFxyXG5cdFx0XHR2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbCxcclxuXHRcdFx0Y29sTW9kZWwgPSBzdG9yYWdlLmNvbE1vZGVsc0RpY3Rpb25hcnlbYWxpYXNdO1xyXG5cdFx0bGV0IHNvcnRCeTtcclxuXHRcdGlmIChjb2xNb2RlbCkge1xyXG5cdFx0XHRzb3J0QnkgPSB2aWV3TW9kZWwuc29ydEJ5O1xyXG5cdFx0XHRsZXQgaSA9IHNvcnRCeS5sZW5ndGgsXHJcblx0XHRcdFx0c29ydFJ1bGU7XHJcblxyXG5cdFx0XHR3aGlsZSAoaS0tKSB7XHJcblx0XHRcdFx0aWYgKHNvcnRCeVtpXS5ieSA9PT0gYWxpYXMpIHtcclxuXHRcdFx0XHRcdHNvcnRSdWxlID0gc29ydEJ5LnNwbGljZShpLCAxKVswXTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFzb3J0UnVsZSkge1xyXG5cdFx0XHRcdHNvcnRSdWxlID0gbmV3IFNvcnRSdWxlKGFsaWFzKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzb3J0UnVsZS50cmlnZ2VyT3JkZXIoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5tdWx0aVNvcnRpbmcpIHtcclxuXHRcdFx0XHRzb3J0QnkudW5zaGlmdChzb3J0UnVsZSlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzb3J0QnkgPSBbc29ydFJ1bGVdXHJcblx0XHRcdH1cclxuXHRcdFx0dmlld01vZGVsLnNvcnRCeSA9IHNvcnRCeTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRiaW5kKCkge1xyXG5cdFx0Y29uc3QgJGhlYWRUYWJsZSA9IHRoaXMuc3RvcmFnZS4kaGVhZFRhYmxlO1xyXG5cdFx0dGhpcy5fb2ZmKCk7XHJcblx0XHQkaGVhZFRhYmxlLm9uKCdjbGljay5YZ3JpZCcsICcuWGdyaWQtdGhlYWQtbGFiZWwuc29ydGFibGUnLCB0aGlzLl9oYW5kbGVyU29ydENvbHVtbi5iaW5kKHRoaXMpKTtcclxuXHR9O1xyXG5cclxuXHRfb2ZmKCkge1xyXG5cdFx0dGhpcy5zdG9yYWdlLiRoZWFkVGFibGUub2ZmKCcuWGdyaWQnKTtcclxuXHR9O1xyXG5cclxuXHRfaGFuZGxlclNvcnRDb2x1bW4oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgJGl0ZW0gPSAkKGUuY3VycmVudFRhcmdldCksXHJcblx0XHRcdGFsaWFzID0gJGl0ZW0uYXR0cignZGF0YS1hbGlhcycpLFxyXG5cdFx0XHRjb2xtb2RlbCA9IHRoaXMuc3RvcmFnZS5jb2xNb2RlbHNEaWN0aW9uYXJ5W2FsaWFzXTtcclxuXHRcdCRpdGVtLmJsdXIoKTtcclxuXHRcdGlmIChjb2xtb2RlbCAmJiBjb2xtb2RlbC5zb3J0YWJsZSkge1xyXG5cdFx0XHR0aGlzLnNvcnRCeUFsaWFzKGFsaWFzKTtcclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29ydGluZzsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIGltcGxlbWVudHMgSVN0b3JhZ2Uge1xyXG5cdHByaXZhdGUgX21vZGVsOiBJU3RvcmFnZU1vZGVsO1xyXG5cdHByaXZhdGUgX3N1YnNjcmliZXJzOiB7IFtrZXk6IHN0cmluZ106IEZ1bmN0aW9uW10gfSA9IHt9O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihtb2RlbCkge1xyXG5cdFx0dGhpcy5fbW9kZWwgPSAkLmV4dGVuZCh7XHJcblx0XHRcdCRib3g6IG51bGwsXHJcblx0XHRcdCRoZWFkVGFibGU6IG51bGwsXHJcblx0XHRcdCRncmlkVGFibGU6IG51bGwsXHJcblx0XHRcdCRoZWFkTGFiZWxzOiBudWxsLFxyXG5cdFx0XHQkcGFnaW5hdGlvbkJveDogbnVsbCxcclxuXHRcdFx0JGZpbHRlclRvb2xiYXJJdGVtczogbnVsbCxcclxuXHRcdFx0cXVlcnk6IG51bGwsXHJcblx0XHRcdHNjcm9sbGJhcldpZHRoOiAwLFxyXG5cdFx0XHRjb2xNb2RlbHM6IFtdLFxyXG5cdFx0XHRjb2xNb2RlbHNEaWN0aW9uYXJ5OiB7fSxcclxuXHRcdFx0ZmlsdGVyOiBudWxsLFxyXG5cdFx0XHRkYXRhOiBbXSxcclxuXHRcdFx0cHJvY2Vzc2VkRGF0YTogW11cclxuXHRcdH0sIG1vZGVsKTtcclxuXHR9XHJcblxyXG5cdGdldCAkYm94KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLiRib3g7XHJcblx0fVxyXG5cclxuXHRnZXQgJGhlYWRUYWJsZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kaGVhZFRhYmxlO1xyXG5cdH07XHJcblx0c2V0ICRoZWFkVGFibGUodmFsdWU6IEpRdWVyeTxIVE1MRWxlbWVudD4pIHtcclxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mICQpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuJGhlYWRUYWJsZSA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnJGhlYWRUYWJsZScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCAkZ3JpZFRhYmxlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLiRncmlkVGFibGU7XHJcblx0fTtcclxuXHRzZXQgJGdyaWRUYWJsZSh2YWx1ZTogSlF1ZXJ5PEhUTUxFbGVtZW50Pikge1xyXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgJCkge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC4kZ3JpZFRhYmxlID0gdmFsdWU7XHJcblx0XHRcdHRoaXMubm90aWZ5KCckZ3JpZFRhYmxlJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0ICRoZWFkTGFiZWxzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLiRoZWFkTGFiZWxzO1xyXG5cdH07XHJcblx0c2V0ICRoZWFkTGFiZWxzKHZhbHVlOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSB7XHJcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiAkKSB7XHJcblx0XHRcdHRoaXMuX21vZGVsLiRoZWFkTGFiZWxzID0gdmFsdWU7XHJcblx0XHRcdHRoaXMubm90aWZ5KCckaGVhZExhYmVscycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCAkcGFnaW5hdGlvbkJveCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kcGFnaW5hdGlvbkJveDtcclxuXHR9O1xyXG5cdHNldCAkcGFnaW5hdGlvbkJveCh2YWx1ZTogSlF1ZXJ5PEhUTUxFbGVtZW50Pikge1xyXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgJCkge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC4kcGFnaW5hdGlvbkJveCA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnJHBhZ2luYXRpb25Cb3gnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgJGZpbHRlclRvb2xiYXJJdGVtcygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kZmlsdGVyVG9vbGJhckl0ZW1zO1xyXG5cdH07XHJcblx0c2V0ICRmaWx0ZXJUb29sYmFySXRlbXModmFsdWU6IEpRdWVyeTxIVE1MRWxlbWVudD4pIHtcclxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mICQpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuJGZpbHRlclRvb2xiYXJJdGVtcyA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnJGZpbHRlclRvb2xiYXJJdGVtcycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBzY3JvbGxiYXJXaWR0aCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5zY3JvbGxiYXJXaWR0aDtcclxuXHR9O1xyXG5cclxuXHRzZXQgc2Nyb2xsYmFyV2lkdGgodmFsdWU6IG51bWJlcikge1xyXG5cdFx0aWYgKHR5cGVvZiAodmFsdWUpID09PSBcIm51bWJlclwiICYmIHZhbHVlID4gMCkge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC5zY3JvbGxiYXJXaWR0aCA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnc2Nyb2xsYmFyV2lkdGgnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgY29sTW9kZWxzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLmNvbE1vZGVscztcclxuXHR9O1xyXG5cdHNldCBjb2xNb2RlbHModmFsdWU6IElDb2xNb2RlbFtdKSB7XHJcblx0XHRpZiAoJC5pc0FycmF5KHZhbHVlKSkge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC5jb2xNb2RlbHMgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ2NvbE1vZGVscycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBjb2xNb2RlbHNEaWN0aW9uYXJ5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLmNvbE1vZGVsc0RpY3Rpb25hcnk7XHJcblx0fTtcclxuXHRzZXQgY29sTW9kZWxzRGljdGlvbmFyeSh2YWx1ZSkge1xyXG5cdFx0dGhpcy5fbW9kZWwuY29sTW9kZWxzRGljdGlvbmFyeSA9IHZhbHVlO1xyXG5cdFx0dGhpcy5ub3RpZnkoJ2NvbE1vZGVsc0RpY3Rpb25hcnknLCB0aGlzKTtcclxuXHR9O1xyXG5cclxuXHRnZXQgZmlsdGVyKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLmZpbHRlcjtcclxuXHR9O1xyXG5cdHNldCBmaWx0ZXIoZGF0YSkge1xyXG5cdFx0aWYgKGRhdGEgPT09IG51bGwgfHwgdHlwZW9mIChkYXRhKSA9PT0gJ29iamVjdCcpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuZmlsdGVyID0gZGF0YTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ2ZpbHRlcicsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLmRhdGE7XHJcblx0fTtcclxuXHRzZXQgZGF0YShkYXRhOiBJUmF3RGF0YVtdKSB7XHJcblx0XHRpZiAoJC5pc0FycmF5KGRhdGEpKSB7XHJcblx0XHRcdHRoaXMuX21vZGVsLmRhdGEgPSBkYXRhO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnZGF0YScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBxdWVyeSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5xdWVyeTtcclxuXHR9O1xyXG5cdHNldCBxdWVyeShkYXRhKSB7XHJcblx0XHR0aGlzLl9tb2RlbC5xdWVyeSA9IGRhdGE7XHJcblx0XHR0aGlzLm5vdGlmeSgncXVlcnknLCB0aGlzKTtcclxuXHR9O1xyXG5cclxuXHRnZXQgcHJvY2Vzc2VkRGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5wcm9jZXNzZWREYXRhO1xyXG5cdH07XHJcblx0c2V0IHByb2Nlc3NlZERhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fbW9kZWwucHJvY2Vzc2VkRGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLm5vdGlmeSgncHJvY2Vzc2VkRGF0YScsIHRoaXMpO1xyXG5cdH07XHJcblxyXG5cdG9uKG5hbWUsIHN1YnNjcmliZXIpIHtcclxuXHRcdHZhciBzdG9yZWdlID0gdGhpcy5fZ2V0U3RvcmFnZShuYW1lKTtcclxuXHRcdHN0b3JlZ2UucHVzaChzdWJzY3JpYmVyKTtcclxuXHR9O1xyXG5cclxuXHRub3RpZnkobmFtZSwgZGF0YSkge1xyXG5cdFx0dmFyIHN0b3JlZ2UgPSB0aGlzLl9nZXRTdG9yYWdlKG5hbWUpO1xyXG5cdFx0JC5lYWNoKHN0b3JlZ2UsIGZ1bmN0aW9uIChpLCBzdWJzY3JpYmVyKSB7XHJcblx0XHRcdGxldCBbLi4uYXJnXSA9IFtkYXRhLCBuYW1lLCBpXTtcclxuXHRcdFx0c3Vic2NyaWJlci5hcHBseShzdWJzY3JpYmVyLCBhcmcpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfZ2V0U3RvcmFnZShuYW1lKSB7XHJcblx0XHRjb25zdCBzdWJzY3JpYmVycyA9IHRoaXMuX3N1YnNjcmliZXJzO1xyXG5cdFx0aWYgKCFzdWJzY3JpYmVyc1tuYW1lXSkge1xyXG5cdFx0XHRzdWJzY3JpYmVyc1tuYW1lXSA9IFtdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN1YnNjcmliZXJzW25hbWVdO1xyXG5cdH1cclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcbmNsYXNzIFRvb2xzIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMubm93ID0gRGF0ZS5ub3cgfHwgKCgpID0+IHsgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpOyB9KTtcclxuXHR9XHJcblxyXG5cdGV4ZWN1dGUoZnVuY3Rpb25zLCBhcmdzLCBjb250ZXh0KSB7XHJcblx0XHRjb25zdCBhcHBseSA9IGZ1bmN0aW9uIChmb28pIHtcclxuXHRcdFx0aWYgKHR5cGVvZiAoZm9vKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdGZvby5hcHBseShjb250ZXh0ID8gY29udGV4dCA6IGZvbywgYXJncylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICgkLmlzQXJyYXkoZnVuY3Rpb25zKSkge1xyXG5cdFx0XHRmdW5jdGlvbnMuZm9yRWFjaChhcHBseSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhcHBseShmdW5jdGlvbnMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGluc2VydEVsZW1lbnQoJGNvbnRhaW5lciwgc2VhcmNoU3RyLCByZXBsYWNlbWVudCkge1xyXG5cdFx0Y29uc3QgJHJlcGxhY2VtZW50ID0gJChyZXBsYWNlbWVudCk7XHJcblxyXG5cdFx0aWYgKCEkcmVwbGFjZW1lbnQubGVuZ3RoKSB7XHJcblx0XHRcdHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VtZW50KTtcclxuXHRcdH1cclxuXHRcdCRjb250YWluZXIuZmluZChcIjpub3QoaWZyYW1lKVwiKS5hZGRCYWNrKCkuY29udGVudHMoKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5ub2RlVHlwZSA9PT0gMztcclxuXHRcdH0pLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLmluZGV4T2Yoc2VhcmNoU3RyKSAhPT0gLTEpIHtcclxuXHRcdFx0XHRpZiAoJHJlcGxhY2VtZW50Lmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5hZnRlcigkcmVwbGFjZW1lbnQpO1xyXG5cdFx0XHRcdFx0Y29uc3Qgc3RyID0gdGhpcy5kYXRhLFxyXG5cdFx0XHRcdFx0XHRwYXJ0MSA9IHN0ci5zdWJzdHIoMCwgc3RyLmluZGV4T2Yoc2VhcmNoU3RyKSksXHJcblx0XHRcdFx0XHRcdHBhcnQyID0gc3RyLnN1YnN0cihwYXJ0MS5sZW5ndGggKyBzZWFyY2hTdHIubGVuZ3RoLCBzdHIubGVuZ3RoKTtcclxuXHRcdFx0XHRcdGlmICghcGFydDEubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAocGFydDIubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdGlmIChwYXJ0MS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRhdGEgPSBwYXJ0MTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQkcmVwbGFjZW1lbnQuYWZ0ZXIocGFydDIpXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBhcnQxLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEgPSBwYXJ0MTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2Uoc2VhcmNoU3RyLHJlcGxhY2VtZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dGhyb3R0bGUoZnVuYywgd2FpdCA9IDEwKSB7XHJcblx0XHRsZXQgY29udGV4dCxcclxuXHRcdFx0YXJncyxcclxuXHRcdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKC4uLnByb3BzKSB7XHJcblx0XHRcdGNvbnRleHQgPSB0aGlzO1xyXG5cdFx0XHRhcmdzID0gcHJvcHM7XHJcblx0XHRcdGlmICghY29udGV4dCkge1xyXG5cdFx0XHRcdGNvbnRleHQgPSBmdW5jXHJcblx0XHRcdH0gZWxzZSBpZiAoY29udGV4dCA9PT0gd2luZG93KSB7XHJcblx0XHRcdFx0Y29udGV4dCA9IGZ1bmM7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCF0aW1lb3V0KSB7XHJcblx0XHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0XHRcdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRcdFx0XHRmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdFx0XHRcdH0sIHdhaXQpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBUb29scygpOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdNb2RlbCBpbXBsZW1lbnRzIElWaWV3TW9kZWwge1xyXG5cdG1vZGVsOiBJVmlld01vZGVsUGFydGlhbDtcclxuXHRzdWJzY3JpYmVyczogeyBba2V5OiBzdHJpbmddOiBGdW5jdGlvbltdIH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5tb2RlbCA9IHtcclxuXHRcdFx0cm93czogMTAsXHJcblx0XHRcdHRvdGFsUm93czogMCxcclxuXHRcdFx0cGFnZTogMSxcclxuXHRcdFx0dG90YWxQYWdlczogMCxcclxuXHRcdFx0bmV3UGFnZTogMSxcclxuXHRcdFx0ZGF0YTogW10sXHJcblx0XHRcdHNvcnRCeTogW10sXHJcblx0XHRcdGZpbHRlclRvb2xiYXI6IGZhbHNlXHJcblx0XHR9XHJcblx0XHR0aGlzLnN1YnNjcmliZXJzID0ge307XHJcblx0fVxyXG5cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vZGVsLmRhdGE7XHJcblx0fTtcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHRpZiAoJC5pc0FycmF5KGRhdGEpKSB7XHJcblx0XHRcdHRoaXMubW9kZWwuZGF0YSA9IGRhdGE7XHJcblx0XHRcdHRoaXMubm90aWZ5KCdkYXRhJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IHNvcnRCeSgpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vZGVsLnNvcnRCeTtcclxuXHR9O1xyXG5cdHNldCBzb3J0QnkoZGF0YSkge1xyXG5cdFx0aWYgKCQuaXNBcnJheShkYXRhKSkge1xyXG5cdFx0XHR0aGlzLm1vZGVsLnNvcnRCeSA9IGRhdGE7XHJcblx0XHRcdHRoaXMubm90aWZ5KCdzb3J0QnknLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgdG90YWxSb3dzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwudG90YWxSb3dzO1xyXG5cdH07XHJcblx0c2V0IHRvdGFsUm93cyh0b3RhbFJvd3MpIHtcclxuXHRcdGlmICh0eXBlb2YgKHRvdGFsUm93cykgPT09IFwibnVtYmVyXCIgJiYgdG90YWxSb3dzID4gLTEpIHtcclxuXHRcdFx0dGhpcy5tb2RlbC50b3RhbFJvd3MgPSB0b3RhbFJvd3M7XHJcblx0XHRcdHRoaXMubm90aWZ5KCd0b3RhbFJvd3MnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgdG90YWxQYWdlcygpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vZGVsLnRvdGFsUGFnZXM7XHJcblx0fTtcclxuXHRzZXQgdG90YWxQYWdlcyh0b3RhbFBhZ2VzKSB7XHJcblx0XHRpZiAodHlwZW9mICh0b3RhbFBhZ2VzKSA9PT0gXCJudW1iZXJcIiAmJiB0b3RhbFBhZ2VzID4gLTEpIHtcclxuXHRcdFx0dGhpcy5tb2RlbC50b3RhbFBhZ2VzID0gdG90YWxQYWdlcztcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ3RvdGFsUGFnZXMnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgcm93cygpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vZGVsLnJvd3M7XHJcblx0fTtcclxuXHRzZXQgcm93cyhyb3dzKSB7XHJcblx0XHRpZiAodHlwZW9mIChyb3dzKSA9PT0gXCJudW1iZXJcIiAmJiByb3dzID4gLTEpIHtcclxuXHRcdFx0dGhpcy5tb2RlbC5yb3dzID0gcm93cztcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ3Jvd3MnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgcGFnZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vZGVsLnBhZ2U7XHJcblx0fTtcclxuXHRzZXQgcGFnZShwYWdlKSB7XHJcblx0XHRpZiAodHlwZW9mIChwYWdlKSA9PT0gXCJudW1iZXJcIiAmJiBwYWdlID4gLTEpIHtcclxuXHRcdFx0dGhpcy5tb2RlbC5wYWdlID0gcGFnZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ3BhZ2UnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgbmV3UGFnZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vZGVsLm5ld1BhZ2U7XHJcblx0fTtcclxuXHRzZXQgbmV3UGFnZShwYWdlKSB7XHJcblx0XHRpZiAodHlwZW9mIChwYWdlKSA9PT0gXCJudW1iZXJcIiAmJiBwYWdlID4gLTEpIHtcclxuXHRcdFx0dGhpcy5tb2RlbC5uZXdQYWdlID0gcGFnZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ25ld1BhZ2UnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgZmlsdGVyVG9vbGJhcigpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vZGVsLmZpbHRlclRvb2xiYXI7XHJcblx0fTtcclxuXHRzZXQgZmlsdGVyVG9vbGJhcihkYXRhOiBib29sZWFuKSB7XHJcblx0XHR0aGlzLm1vZGVsLmZpbHRlclRvb2xiYXIgPSBkYXRhO1xyXG5cdFx0dGhpcy5ub3RpZnkoJ2ZpbHRlclRvb2xiYXInLCB0aGlzKTtcclxuXHR9O1xyXG5cclxuXHRvbihuYW1lLCBzdWJzY3JpYmVyKTogdm9pZCB7XHJcblx0XHR2YXIgc3RvcmVnZSA9IHRoaXMuX2dldFN0b3JhZ2UobmFtZSk7XHJcblx0XHRzdG9yZWdlLnB1c2goc3Vic2NyaWJlcik7XHJcblx0fTtcclxuXHJcblx0bm90aWZ5KG5hbWUsIGRhdGEpOiB2b2lkIHtcclxuXHRcdHZhciBzdG9yZWdlID0gdGhpcy5fZ2V0U3RvcmFnZShuYW1lKTtcclxuXHRcdCQuZWFjaChzdG9yZWdlLCBmdW5jdGlvbiAoaSwgc3Vic2NyaWJlcikge1xyXG5cdFx0XHRsZXQgWy4uLmFyZ10gPSBbZGF0YSwgbmFtZSwgaV07XHJcblx0XHRcdHN1YnNjcmliZXIuYXBwbHkoc3Vic2NyaWJlciwgYXJnKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2dldFN0b3JhZ2UobmFtZSkge1xyXG5cdFx0Y29uc3Qgc3Vic2NyaWJlcnMgPSB0aGlzLnN1YnNjcmliZXJzO1xyXG5cdFx0aWYgKCFzdWJzY3JpYmVyc1tuYW1lXSkge1xyXG5cdFx0XHRzdWJzY3JpYmVyc1tuYW1lXSA9IFtdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN1YnNjcmliZXJzW25hbWVdO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgVmlld01vZGVsIGZyb20gJy4vVmlld01vZGVsJztcclxuaW1wb3J0IFByb2Nlc3NTZXR0aW5ncyBmcm9tICcuL1Byb2Nlc3NTZXR0aW5ncyc7XHJcbmltcG9ydCBCdWlsZEluZnJhc3RydWN0dXJlIGZyb20gJy4vQnVpbGRJbmZyYXN0cnVjdHVyZSc7XHJcbmltcG9ydCBGaWx0ZXJUb29sYmFyIGZyb20gJy4vRmlsdGVyVG9vbGJhcic7XHJcbmltcG9ydCBTb3J0aW5nIGZyb20gJy4vU29ydGluZyc7XHJcbmltcG9ydCBEaXNwbGF5IGZyb20gJy4vRGlzcGxheSc7XHJcbmltcG9ydCBGaXhlZEhlYWRlciBmcm9tICcuL0ZpeGVkSGVhZGVyJztcclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9TdG9yYWdlJztcclxuaW1wb3J0IEZpbGwgZnJvbSAnLi9GaWxsJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9QYWdpbmF0aW9uJztcclxuaW1wb3J0IHRvb2xzIGZyb20gJy4vVG9vbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWGdyaWQge1xyXG5cdG9wdGlvbnM6IElPcHRpb25zO1xyXG5cdHByb3BlcnRpZXM6IElYZ3JpZFByb3BlcnRpZXM7XHJcblx0Vmlld01vZGVsOiBJVmlld01vZGVsO1xyXG5cdFByb2Nlc3NTZXR0aW5nczogUHJvY2Vzc1NldHRpbmdzO1xyXG5cdEJ1aWxkSW5mcmFzdHJ1Y3R1cmU6IEJ1aWxkSW5mcmFzdHJ1Y3R1cmU7XHJcblx0U29ydGluZzogU29ydGluZztcclxuXHRTdG9yYWdlOiBJU3RvcmFnZTtcclxuXHRGaWxsOiBGaWxsO1xyXG5cdERpc3BsYXk6IERpc3BsYXk7XHJcblx0Rml4ZWRIZWFkZXI6IEZpeGVkSGVhZGVyO1xyXG5cdEZpbHRlclRvb2xiYXI6IEZpbHRlclRvb2xiYXI7XHJcblx0UGFnaW5hdGlvbjogUGFnaW5hdGlvbjtcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9uczogSU9wdGlvbnMsICRib3g6IEpRdWVyeSkge1xyXG5cdFx0dGhpcy5wcm9wZXJ0aWVzID0ge1xyXG5cdFx0XHQkYm94LFxyXG5cdFx0XHRkYXRhOiBbXVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xyXG5cdFx0XHRiZWZvcmVSZXF1ZXN0OiBbXSxcclxuXHRcdFx0YWZ0ZXJSZXNwb25zZTogW10sXHJcblx0XHRcdHNvcnRCeTogW10sXHJcblx0XHRcdHBhZ2luYXRpb25TZWxlY3RvcjogJycsXHJcblx0XHRcdGFqYXhUeXBlOiAnUE9TVCcsXHJcblx0XHRcdGZpbHRlclRvb2xiYXJHcm91cE9wOiAnQU5EJyxcclxuXHRcdFx0dXJsOiAnJyxcclxuXHRcdFx0bXVsdGlTb3J0aW5nOiBmYWxzZSxcclxuXHRcdFx0ZmlsdGVyVG9vbGJhcjogZmFsc2VcclxuXHRcdH0sIG9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMuU3RvcmFnZSA9IG5ldyBTdG9yYWdlKHsgJGJveCB9KVxyXG5cdFx0dGhpcy5fZXhlYygpO1xyXG5cdH07XHJcblxyXG5cdGFqYXhGdW5jdGlvbihxdWVyeU9iamVjdDogYW55LCB1cmw6IHN0cmluZykge1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHRcdHJldHVybiAkLmFqYXgoe1xyXG5cdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0ZGF0YTogcXVlcnlPYmplY3QsXHJcblx0XHRcdHR5cGU6IG9wdGlvbnMuYWpheFR5cGUsXHJcblx0XHRcdGRhdGFUeXBlOiAnanNvbidcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0X3Jlc3BvbnNlKHJlc3BvbnNlT2JqZWN0OiBJUmVzcG9uc2UpIHtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblx0XHRpZiAob3B0aW9ucy5hZnRlclJlc3BvbnNlKSB7XHJcblx0XHRcdHRvb2xzLmV4ZWN1dGUob3B0aW9ucy5hZnRlclJlc3BvbnNlLCBbcmVzcG9uc2VPYmplY3RdKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRfcmVxdWVzdChxdWVyeU9iamVjdCA9IHt9KSB7XHJcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxyXG5cdFx0XHRkID0gJC5EZWZlcnJlZCgpO1xyXG5cdFx0aWYgKG9wdGlvbnMuYmVmb3JlUmVxdWVzdCkge1xyXG5cdFx0XHR0b29scy5leGVjdXRlKG9wdGlvbnMuYmVmb3JlUmVxdWVzdCwgW3F1ZXJ5T2JqZWN0XSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5hamF4RnVuY3Rpb24ocXVlcnlPYmplY3QsIG9wdGlvbnMudXJsKS5kb25lKHRoaXMuX3Jlc3BvbnNlLmJpbmQodGhpcykpLmFsd2F5cyhkLnJlc29sdmUpO1xyXG5cclxuXHRcdHJldHVybiBkO1xyXG5cdH07XHJcblxyXG5cdF9iaW5kKCkge1xyXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMsXHJcblx0XHRcdHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXMsXHJcblx0XHRcdG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblxyXG5cdFx0Ly8gdG8gRG8gaWYgbW9kZWwgd2lsbCBiZSBjaGFuZ2VkXHJcblx0XHR0aGlzLlN0b3JhZ2Uub24oJ2NvbE1vZGVscycsICgpID0+IHtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyh0aGlzLkZpbGwpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5TdG9yYWdlLm9uKCdkYXRhJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLkRpc3BsYXkuZXhlYygpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5WaWV3TW9kZWwub24oJ2RhdGEnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuRmlsbC50Ym9keSgpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLkZpeGVkSGVhZGVyLnJlc2l6ZSgpO1xyXG5cdFx0XHR9LCAxMDUwKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5TdG9yYWdlLm9uKCckcGFnaW5hdGlvbkJveCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy5QYWdpbmF0aW9uLmV4ZWMoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuU3RvcmFnZS5vbignJGhlYWRUYWJsZScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5Tb3J0aW5nLmJpbmQoKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0X2V4ZWMoKSB7XHJcblx0XHRjb25zdCBzZWxmID0gdGhpcyxcclxuXHRcdFx0b3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHJcblx0XHR0aGlzLlZpZXdNb2RlbCA9IG5ldyBWaWV3TW9kZWwoKTtcclxuXHRcdHRoaXMuUHJvY2Vzc1NldHRpbmdzID0gbmV3IFByb2Nlc3NTZXR0aW5ncyhvcHRpb25zLCB0aGlzLlN0b3JhZ2UsIHRoaXMuVmlld01vZGVsKTtcclxuXHRcdHRoaXMuQnVpbGRJbmZyYXN0cnVjdHVyZSA9IG5ldyBCdWlsZEluZnJhc3RydWN0dXJlKG9wdGlvbnMsIHRoaXMuU3RvcmFnZSwgdGhpcy5WaWV3TW9kZWwpO1xyXG5cdFx0dGhpcy5Tb3J0aW5nID0gbmV3IFNvcnRpbmcodGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCwgb3B0aW9ucyk7XHJcblx0XHR0aGlzLkZpbGwgPSBuZXcgRmlsbCh0aGlzLlN0b3JhZ2UsIHRoaXMuVmlld01vZGVsKTtcclxuXHRcdHRoaXMuRmlsdGVyVG9vbGJhciA9IG5ldyBGaWx0ZXJUb29sYmFyKHRoaXMuU3RvcmFnZSwgdGhpcy5WaWV3TW9kZWwsIG9wdGlvbnMpO1xyXG5cdFx0dGhpcy5EaXNwbGF5ID0gbmV3IERpc3BsYXkoe1xyXG5cdFx0XHRzdG9yYWdlOiB0aGlzLlN0b3JhZ2UsXHJcblx0XHRcdHZpZXdNb2RlbDogdGhpcy5WaWV3TW9kZWwsXHJcblx0XHRcdGFqYXg6ICgocXVlcnlPYmplY3Q6IElSZXF1ZXN0KSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3JlcXVlc3QocXVlcnlPYmplY3QpO1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0aXNMb2NhbDogb3B0aW9ucy51cmwgPyBmYWxzZSA6IHRydWVcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5GaXhlZEhlYWRlciA9IG5ldyBGaXhlZEhlYWRlcih0aGlzLlN0b3JhZ2UpO1xyXG5cdFx0dGhpcy5QYWdpbmF0aW9uID0gbmV3IFBhZ2luYXRpb24ob3B0aW9ucywgdGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCk7XHJcblxyXG5cdFx0dGhpcy5fYmluZCgpO1xyXG5cclxuXHRcdHRoaXMuRmlsbC50aGVhZCgpO1xyXG5cclxuXHRcdGlmICghJC5pc0FycmF5KG9wdGlvbnMuZGF0YSkpIHtcclxuXHRcdFx0b3B0aW9ucy5kYXRhID0gW107XHJcblx0XHR9XHJcblx0XHR0aGlzLlN0b3JhZ2UuZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuXHR9XHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=
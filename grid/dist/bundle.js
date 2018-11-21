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
/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tools */ "./src/modules/Tools.ts");

var BuildInfrastructure = /** @class */ (function () {
    function BuildInfrastructure(options, storage, viewModel) {
        this.viewModel = viewModel;
        this.options = $.extend({
            theadClass: 'table-grid-thead',
            tbodyClass: 'table-grid-tbody',
            firstBtnTemplate: '<span class="btn btn-outline-secondary">&#171;</span>',
            lastBtnTemplate: '<span class="btn btn-outline-secondary">&#187;</span>',
            prevBtnTemplate: '<span class="btn btn-outline-secondary">&#8249;</span>',
            nextBtnTemplate: '<span class="btn btn-outline-secondary">&#8250;</span>',
            currentPageTemplate: '<input type="text" class="form-control" />',
            paginationTemplate: "<div class=\"Xgrid-paggination input-group input-group-sm\">\n\t\t\t<div class=\"input-group-prepend\" >{firstBtnTemplate}{prevBtnTemplate}<span class=\"input-group-text\"> Page </span></div>\n\t\t\t\t{currentPageTemplate}\n\t\t\t\t<div class=\"input-group-prepend\" ><span class=\"input-group-text\"> of <span class=\"Xgrid-total-pages\"></span></span>{nextBtnTemplate}{lastBtnTemplate}</div>\n\t\t\t</div>"
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

/***/ "./src/modules/CellFormatters.ts":
/*!***************************************!*\
  !*** ./src/modules/CellFormatters.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CellFormatters = /** @class */ (function () {
    function CellFormatters() {
    }
    CellFormatters.prototype.booleanYesNo = function ($td, value, rowData, data) {
        if (value) {
            return 'Yes';
        }
        return 'No';
    };
    ;
    CellFormatters.prototype.text = function ($td, value, rowData, data) {
        if (typeof (value) === 'undefined' || value === null) {
            value = '';
        }
        var $item = $('<div class="ellipsis"></div>');
        $td.html($item);
        $item.text(value);
    };
    ;
    CellFormatters.prototype.html = function ($td, value, rowData, data) {
        if (typeof (value) === 'undefined' || value === null) {
            value = '';
        }
        return value;
    };
    ;
    return CellFormatters;
}());
/* harmony default export */ __webpack_exports__["default"] = (new CellFormatters());


/***/ }),

/***/ "./src/modules/ColModel.ts":
/*!*********************************!*\
  !*** ./src/modules/ColModel.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pipes */ "./src/modules/Pipes.ts");
/* harmony import */ var _FilterToolbarModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterToolbarModel */ "./src/modules/FilterToolbarModel.ts");
/* harmony import */ var _CellFormatters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CellFormatters */ "./src/modules/CellFormatters.ts");



var ColModel = /** @class */ (function () {
    function ColModel(model, order) {
        this.filterOption = 'cn';
        this.filterType = 'string';
        this.filterable = false;
        this.fixed = false;
        this.hidden = false;
        this.insensitive = false;
        this.label = '';
        this.resizable = false;
        this.sortType = 'string';
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
        if (typeof (model.cellFormatter) === 'string' && typeof (_CellFormatters__WEBPACK_IMPORTED_MODULE_2__["default"][model.cellFormatter]) === 'function') {
            this.cellFormatter = _CellFormatters__WEBPACK_IMPORTED_MODULE_2__["default"][model.cellFormatter];
        }
        else if (typeof (model.cellFormatter) === 'function') {
            this.cellFormatter = model.cellFormatter;
        }
        else {
            this.cellFormatter = _CellFormatters__WEBPACK_IMPORTED_MODULE_2__["default"]['text'];
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
/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tools */ "./src/modules/Tools.ts");
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
        var query = this.storage.query;
        var deferred = $.Deferred();
        this.ajax(JSON.parse(JSON.stringify(query))).always(function (data) {
            var displayModel = new _DisplayModel__WEBPACK_IMPORTED_MODULE_4__["default"]();
            $.extend(displayModel, data);
            deferred.resolve(displayModel);
        });
        return deferred;
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
                    viewModel.newPage = 1;
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
        if (dataToDisplay === void 0) { dataToDisplay = []; }
        if (page === void 0) { page = 1; }
        if (totalPages === void 0) { totalPages = 0; }
        if (totalRows === void 0) { totalRows = 0; }
        this.page = 1;
        this.totalPages = 0;
        this.totalRows = 0;
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

/***/ "./src/modules/Fill.ts":
/*!*****************************!*\
  !*** ./src/modules/Fill.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Fill = /** @class */ (function () {
    function Fill(storage, viewModel) {
        this.viewModel = viewModel;
        this.storage = storage;
    }
    ;
    Fill.prototype.thead = function () {
        var storage = this.storage;
        var classRules = ['resizable', 'sortable', 'filterable', 'hidden'];
        var colModels = storage.colModels;
        storage.$headLabels.each(function (i, th) {
            var $th = $(th);
            var $wrapper = $(document.createElement('div'));
            var colModel = colModels[i];
            $th.data('Xgrid.data', colModel);
            var data = colModel.labelFormatter($wrapper, $th, colModel, i);
            if (typeof (data) !== 'undefined') {
                $wrapper.html(data);
            }
            th.innerHTML = '';
            $th.append($wrapper);
            $.each(classRules, function (i, mark) {
                if (colModel[mark]) {
                    $th.addClass(mark);
                }
                else {
                    $th.removeClass(mark);
                }
            });
        });
        this.filterToolbar();
    };
    ;
    Fill.prototype.filterToolbar = function () {
        var storage = this.storage;
        var colModels = storage.colModels;
        if (storage.$filterToolbarItems) {
            storage.$filterToolbarItems.each(function (i) {
                var $cell = $(this), colModel = colModels[i];
                if (colModel.filterable && colModel.filterToolbarFormatter) {
                    var data = colModel.filterToolbarFormatter($cell, colModel);
                    if (typeof (data) !== 'undefined') {
                        $cell.html(data);
                    }
                    if (typeof (colModel.afterFilterToolbarFormatter) === 'function') {
                        colModel.afterFilterToolbarFormatter($cell, colModel);
                    }
                }
                else {
                    $cell.empty();
                }
            });
        }
    };
    ;
    Fill.prototype.tbody = function () {
        var _this = this;
        var _a = this, storage = _a.storage, viewModel = _a.viewModel;
        var fragment = document.createDocumentFragment();
        var dataToDisplay = viewModel.data;
        var colModels = storage.colModels;
        var $headWrap = storage.$headTable.parent();
        var $gridWrap = storage.$gridTable.parent();
        var data = storage.data;
        var tbody = this._createShadowBody(fragment);
        var num = 0;
        colModels.forEach(function (colModel, i) {
            colModel._check();
            var $td = storage.$headLabels.eq(i);
            if (!colModel.hidden) {
                num++;
                if (num % 2) {
                    $td.addClass('odd');
                }
                else {
                    $td.addClass('even');
                }
            }
        });
        $(tbody).find('tr').each(function (i, tr) {
            var rowData = dataToDisplay[i];
            _this._fillRow($(tr), rowData, data);
        });
        storage.$gridTable.find('>tbody').remove();
        $headWrap.css({ 'padding-right': '' });
        storage.$gridTable.append(tbody);
        if ($gridWrap[0].offsetWidth - $gridWrap[0].clientWidth) {
            $headWrap.css({ 'padding-right': storage.scrollbarWidth + 'px' });
        }
        this._updateHead();
    };
    ;
    Fill.prototype._createShadowBody = function (fragment) {
        var _a = this, storage = _a.storage, viewModel = _a.viewModel;
        var colModels = storage.colModels;
        var tbody = document.createElement('tbody');
        var rowsCount = viewModel.data.length;
        var tr = '<tr>' + Array(colModels.length + 1).join('<td></td>') + '</tr>';
        var trs = '<tbody>' + new Array(rowsCount + 1).join(tr) + '<tbody>';
        if (!fragment) {
            fragment = document.createDocumentFragment();
        }
        tbody.innerHTML = trs;
        fragment.appendChild(tbody);
        return tbody;
    };
    ;
    Fill.prototype._fillRow = function ($tr, rowData, data) {
        var $tds = $tr.find('td');
        var storage = this.storage;
        var colModels = storage.colModels;
        var num = 0;
        $tr.data('Xgrid.data', rowData);
        $.each(colModels, function (i, colModel) {
            var value = rowData[colModel.key], $td = $tds.eq(i), data;
            $td.attr('data-key', colModel.alias);
            if (colModel.hidden) {
                $td.remove();
            }
            else {
                num++;
                data = colModel.cellFormatter($td, value, rowData, data);
                if (num % 2) {
                    $td.addClass('odd');
                }
                else {
                    $td.addClass('even');
                }
                if (typeof (data) !== 'undefined') {
                    $td.html(data);
                }
            }
        });
    };
    ;
    Fill.prototype._updateHead = function () {
        var _a = this, storage = _a.storage, viewModel = _a.viewModel;
        var colModels = storage.colModels;
        var $headLabels = storage.$headLabels;
        var sortBy = {};
        viewModel.sortBy.forEach(function (sortRule) {
            sortBy[sortRule.by] = sortRule.order;
        });
        colModels.forEach(function (colModel, i) {
            var $label = $headLabels.eq(i);
            var order = sortBy[colModel.alias];
            if (order) {
                $label.attr('data-sort', order);
            }
            else {
                $label.removeAttr('data-sort');
            }
        });
    };
    ;
    return Fill;
}());
/* harmony default export */ __webpack_exports__["default"] = (Fill);
;


/***/ }),

/***/ "./src/modules/Filter.ts":
/*!*******************************!*\
  !*** ./src/modules/Filter.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Operators */ "./src/modules/Operators.ts");

var Filter = /** @class */ (function () {
    function Filter() {
    }
    Filter.prototype.exec = function (data, group, getData) {
        var _this = this;
        var newData = data.filter(function (item, i) {
            var get = getData();
            var state = _this._check(group, item, get);
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

/***/ "./src/modules/FilterModel.ts":
/*!************************************!*\
  !*** ./src/modules/FilterModel.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var FilterModel = /** @class */ (function () {
    function FilterModel(data, field, op) {
        this.data = data;
        this.field = field;
        this.op = op;
    }
    return FilterModel;
}());
/* harmony default export */ __webpack_exports__["default"] = (FilterModel);


/***/ }),

/***/ "./src/modules/FilterToolbar.ts":
/*!**************************************!*\
  !*** ./src/modules/FilterToolbar.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterModel */ "./src/modules/FilterModel.ts");

var FilterToolbar = /** @class */ (function () {
    function FilterToolbar(storage, viewModel, options) {
        this.timeoutOnKeydown = null;
        this.storage = storage;
        this.viewModel = viewModel;
        this.options = options;
        this._bind();
    }
    FilterToolbar.prototype.triggerToolbar = function () {
        var storage = this.storage;
        var options = this.options;
        var colModels = storage.colModels;
        var rules = [];
        var defaultSearch = 'cn';
        var groupOp = options.filterToolbarGroupOp === 'AND' ? 'AND' : 'OR';
        var ruleGroup = null;
        if (!storage.$filterToolbarItems) {
            return this;
        }
        storage.$filterToolbarItems.each(function (i) {
            var $filter = $(this);
            var $elem = $filter.find('.Xgrid-filter');
            if ($elem.length) {
                var colModel = colModels[i];
                var settings = colModel.filterToolbarSettings;
                var filterOption = colModel.filterOption || defaultSearch;
                var fieldName = colModel.filterAlias || colModel.alias || colModel.key;
                var value = $elem.val();
                if (typeof (settings.transformData) === 'function') {
                    value = settings.transformData(value, settings);
                }
                if (value && colModel.insensitive) {
                    value = String(value).toLowerCase();
                }
                if ((typeof (value) !== 'undefined' && value !== '' && value !== null) || filterOption === "nu" || filterOption === "nn") {
                    rules.push(new _FilterModel__WEBPACK_IMPORTED_MODULE_0__["default"](value, fieldName, filterOption));
                }
            }
        });
        if (rules.length) {
            ruleGroup = {
                groupOp: groupOp,
                rules: rules
            };
        }
        storage.filter = ruleGroup;
    };
    ;
    FilterToolbar.prototype._bind = function () {
        var storage = this.storage;
        storage.$headTable.on('keypress', 'input.Xgrid-input.Xgrid-onEnter', this._handlerFilterOnEnter.bind(this));
        storage.$headTable.on('keydown', 'input.Xgrid-input.Xgrid-onKeydown', this._handlerFilterOnKeydown.bind(this));
        storage.$headTable.on('change', '.Xgrid-filter.Xgrid-onChange', this._handlerFilterOnChange.bind(this));
        storage.$headTable.on('click', '.Xgrid-reset', this._handlerFilterOnReset.bind(this));
        storage.$headTable.on('click', '.Xgrid-onSubmit', this._handlerFilterOnSubmit.bind(this));
    };
    ;
    FilterToolbar.prototype._handlerFilterOnSubmit = function (e) {
        $(e.currentTarget).blur();
        this.triggerToolbar();
    };
    ;
    FilterToolbar.prototype._handlerFilterOnReset = function (e) {
        var storage = this.storage;
        var $sell = $(e.currentTarget).blur().parents('.Xgrid-filter-cell:eq(0)');
        var alias = $sell.attr('data-alias');
        var $control = $sell.find('.Xgrid-filter');
        var colModel = storage.colModelsDictionary[alias];
        if (colModel) {
            if (colModel.filterToolbarSettings.formControlType === 'select') {
                $control.val([]).each(function (i, select) {
                    select.selectedIndex = -1;
                });
            }
            else {
                $control.val('');
            }
            this.triggerToolbar();
        }
    };
    ;
    FilterToolbar.prototype._handlerFilterOnChange = function () {
        this.triggerToolbar();
    };
    ;
    FilterToolbar.prototype._handlerFilterOnKeydown = function (e) {
        var _this = this;
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
                this.timeoutOnKeydown = setTimeout(function () {
                    _this.triggerToolbar();
                }, 500);
        }
    };
    ;
    FilterToolbar.prototype._handlerFilterOnEnter = function (e) {
        var key = e.charCode || e.keyCode || 0;
        if (key === 13) {
            e.preventDefault();
            this.triggerToolbar();
        }
    };
    return FilterToolbar;
}());
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

/***/ "./src/modules/FixedHeader.ts":
/*!************************************!*\
  !*** ./src/modules/FixedHeader.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var FixedHeader = /** @class */ (function () {
    function FixedHeader(storage) {
        this.properties = {
            $cellWidthRecipients: null,
            $cellWidthListeners: null,
        };
        this.storage = storage;
        this._exec();
    }
    FixedHeader.prototype.resize = function () {
        var _this = this;
        var storage = this.storage;
        storage.$headTable.find('.Xgrid-thead-w iframe').each(function (i, element) {
            var $iframe = $(element);
            var width = $iframe.width();
            var alias = $iframe.attr('data-alias');
            _this._handlerResizedCellWidth(width, alias);
        });
    };
    ;
    FixedHeader.prototype._exec = function () {
        this._build();
        this._bind();
    };
    ;
    FixedHeader.prototype._build = function () {
        var _a = this, storage = _a.storage, properties = _a.properties;
        var cellWidthListeners = [];
        properties.$cellWidthRecipients = storage.$gridTable.find('.Xgrid-tbody-w i');
        storage.$headTable.find('.Xgrid-thead-w td').each(function (i) {
            var iframe = $(this).find('iframe')[0];
            iframe.setAttribute('data-col', String(i));
            cellWidthListeners.push(iframe);
        });
        properties.$cellWidthListeners = $(cellWidthListeners);
    };
    ;
    FixedHeader.prototype._bind = function () {
        var _this = this;
        var properties = this.properties;
        properties.$cellWidthListeners.each(function (i, iframe) {
            var $iframe = $(iframe);
            _this._handlerResizedCellWidth($iframe.width(), $iframe.attr('data-alias'));
            setTimeout(function () {
                $(iframe.contentWindow).on('resize', function () {
                    _this._handlerResizedCellWidth($iframe.width(), $iframe.attr('data-alias'));
                });
            }, 100);
        });
    };
    ;
    FixedHeader.prototype._handlerResizedCellWidth = function (width, alias) {
        var properties = this.properties;
        var $item = properties.$cellWidthRecipients.filter('[data-alias="' + alias + '"]');
        $item.width(width);
        $item.parent().width(width);
    };
    ;
    return FixedHeader;
}());
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
/* harmony import */ var _Pipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pipes */ "./src/modules/Pipes.ts");

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

/***/ "./src/modules/Operators.ts":
/*!**********************************!*\
  !*** ./src/modules/Operators.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Operators = /** @class */ (function () {
    function Operators() {
        var _this = this;
        this.eq = this.equals;
        this.ne = this.notEquals;
        this.lt = this.less;
        this.le = this.lessOrEquals;
        this.gt = this.greater;
        this.ge = this.greaterOrEquals;
        this.cn = this.contains;
        this.nc = (function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            return !_this.contains.apply(_this, arg);
        });
        this.bw = this.startsWith;
        this.bn = (function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            return !_this.startsWith.apply(_this, arg);
        });
        this.en = (function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            return !_this.endsWith.apply(_this, arg);
        });
        this.ew = this.endsWith;
        this.in = this.inArray;
        this.ni = (function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            return !_this.inArray.apply(_this, arg);
        });
        this.nu = this.isNull;
        this.nn = (function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            return !_this.isNull.apply(_this, arg);
        });
    }
    Operators.prototype.equals = function (a, b) {
        return a === b;
    };
    ;
    Operators.prototype.notEquals = function (a, b) {
        return a !== b;
    };
    ;
    Operators.prototype.isNull = function (a) {
        return a === null;
    };
    ;
    Operators.prototype.greater = function (a, b) {
        return a > b;
    };
    ;
    Operators.prototype.less = function (a, b) {
        return a < b;
    };
    ;
    Operators.prototype.greaterOrEquals = function (a, b) {
        return a >= b;
    };
    ;
    Operators.prototype.lessOrEquals = function (a, b) {
        return a <= b;
    };
    ;
    Operators.prototype.inArray = function (array, b) {
        return $.inArray(b, array) !== -1;
    };
    ;
    Operators.prototype.startsWith = function (a, b, insensitive) {
        a = String(a);
        b = String(b);
        if (insensitive) {
            a = a.toUpperCase();
            b = b.toUpperCase();
        }
        var length = a.length, str = a.substr(0, length);
        return str === b;
    };
    ;
    Operators.prototype.endsWith = function (a, b, insensitive) {
        a = String(a);
        b = String(b);
        if (insensitive) {
            a = a.toUpperCase();
            b = b.toUpperCase();
        }
        var length = b.length * -1, str = a.substr(length);
        return str === b;
    };
    ;
    Operators.prototype.contains = function (a, b, insensitive) {
        a = String(a);
        b = String(b);
        if (insensitive) {
            a = a.toUpperCase();
            b = b.toUpperCase();
        }
        return b.indexOf(a) !== -1;
    };
    ;
    return Operators;
}());
/* harmony default export */ __webpack_exports__["default"] = (new Operators());


/***/ }),

/***/ "./src/modules/Pagination.ts":
/*!***********************************!*\
  !*** ./src/modules/Pagination.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

var Pagination = /** @class */ (function () {
    function Pagination(options, storage, viewModel) {
        this.options = options;
        this.viewModel = viewModel;
        this.storage = storage;
        this._subscribe();
        this.page();
        this.totalPages();
        this.exec();
    }
    ;
    Pagination.prototype.exec = function () {
        this._bind();
    };
    ;
    Pagination.prototype.page = function () {
        this.storage.$paginationBox.find('.Xgrid-current-page').val(this.viewModel.page);
    };
    ;
    Pagination.prototype.totalPages = function () {
        this.storage.$paginationBox.find('.Xgrid-total-pages').text(this.viewModel.totalPages);
    };
    ;
    Pagination.prototype._subscribe = function () {
        var viewModel = this.viewModel;
        viewModel.on('page', this.page.bind(this));
        viewModel.on('totalPages', this.totalPages.bind(this));
    };
    ;
    Pagination.prototype._bind = function () {
        var storage = this.storage;
        storage.$paginationBox.on('click.xgrid', '.Xgrid-first', this._handlerFirst.bind(this));
        storage.$paginationBox.on('click.xgrid', '.Xgrid-prev', this._handlerPrev.bind(this));
        storage.$paginationBox.on('click.xgrid', '.Xgrid-next', this._handlerNext.bind(this));
        storage.$paginationBox.on('click.xgrid', '.Xgrid-last', this._handlerLast.bind(this));
        storage.$paginationBox.on('keypress.xgrid', '.Xgrid-current-page', this._handlerGoTo.bind(this));
    };
    ;
    Pagination.prototype._handlerFirst = function (e) {
        e.preventDefault();
        if (this.viewModel.page !== 1) {
            this.viewModel.newPage = 1;
        }
    };
    ;
    Pagination.prototype._handlerLast = function (e) {
        e.preventDefault();
        if (this.viewModel.page !== this.viewModel.totalPages) {
            this.viewModel.newPage = this.viewModel.totalPages;
        }
    };
    ;
    Pagination.prototype._handlerNext = function (e) {
        e.preventDefault();
        var page = this.viewModel.page + 1;
        if (page <= this.viewModel.totalPages) {
            this.viewModel.newPage = page;
        }
    };
    ;
    Pagination.prototype._handlerPrev = function (e) {
        e.preventDefault();
        var page = this.viewModel.page - 1;
        if (page > 0) {
            this.viewModel.newPage = page;
        }
    };
    ;
    Pagination.prototype._handlerGoTo = function (e) {
        if (e.which === 13) {
            var page = +$(e.currentTarget).val();
            if (!isNaN(page)) {
                if (page < 1) {
                    page = 1;
                }
                else if (page > this.viewModel.totalPages) {
                    page = this.viewModel.totalPages;
                }
                this.viewModel.newPage = page;
            }
            else {
                this.viewModel.page = this.viewModel.newPage;
            }
        }
    };
    return Pagination;
}());
/* harmony default export */ __webpack_exports__["default"] = (Pagination);
;


/***/ }),

/***/ "./src/modules/Pipes.ts":
/*!******************************!*\
  !*** ./src/modules/Pipes.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Pipes = /** @class */ (function () {
    function Pipes() {
        this.isNotZero = {
            undefined: 1,
            '': 1,
            null: 1,
            false: 1,
            true: 1,
        };
        this.integer = this.integer.bind(this);
        this.int = this.integer;
        this.numeric = this.numeric.bind(this);
        this.float = this.numeric;
        this.number = this.numeric;
        this.string = this.string.bind(this);
    }
    Pipes.prototype.float = function (val) { return val; };
    Pipes.prototype.int = function (val) { return val; };
    Pipes.prototype.number = function (val) { return val; };
    ;
    Pipes.prototype.getByType = function (type) {
        switch (type) {
            case 'int':
            case 'integer':
                return this.integer;
            case 'float':
            case 'number':
            case 'numeric':
                return this.numeric;
            case 'boolean':
                return this.boolean;
            default:
                return this.string;
        }
    };
    Pipes.prototype.string = function (value, rowData, colModel) {
        if (colModel.insensitive) {
            return this.insensitivetext.call(this, value);
        }
        else {
            return this.sensitivetext.call(this, value);
        }
    };
    ;
    Pipes.prototype.boolean = function (value) {
        return !!value;
    };
    ;
    Pipes.prototype.numeric = function (value) {
        var result;
        if (this.isNotZero[value]) {
            result = Number.NEGATIVE_INFINITY;
        }
        else {
            if (isNaN(value)) {
                result = parseFloat(String(value).replace(/,/g, '.').replace(/[\$%]/g, ''));
                result = isNaN(result) ? Number.NEGATIVE_INFINITY : result;
            }
            else {
                result = +value;
            }
        }
        return result;
    };
    ;
    Pipes.prototype.integer = function (value) {
        var result;
        if (this.isNotZero[value]) {
            result = Number.NEGATIVE_INFINITY;
        }
        else {
            if (!isNaN(value)) {
                result = String(value).replace(/[\$,%]/g, '');
            }
            result = parseInt(result);
            result = isNaN(result) ? Number.NEGATIVE_INFINITY : result;
        }
        return result;
    };
    ;
    Pipes.prototype.insensitivetext = function (value) {
        return (value ? $.trim(String(value)) : "").toLowerCase();
    };
    ;
    Pipes.prototype.sensitivetext = function (value) {
        return value ? $.trim(String(value)) : "";
    };
    ;
    return Pipes;
}());
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
        if (options.rows) {
            viewModel.rows = options.rows;
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
        this.filter = [];
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

/***/ "./src/modules/Sorting.ts":
/*!********************************!*\
  !*** ./src/modules/Sorting.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SortRule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SortRule */ "./src/modules/SortRule.ts");

var Sorting = /** @class */ (function () {
    function Sorting(storage, viewModel, options) {
        this.storage = storage;
        this.viewModel = viewModel;
        this.options = options;
        this.bind();
    }
    ;
    Sorting.prototype.sortByAlias = function (alias) {
        var _a = this, storage = _a.storage, viewModel = _a.viewModel;
        var colModel = storage.colModelsDictionary[alias];
        var sortBy;
        if (colModel) {
            sortBy = viewModel.sortBy;
            var i = sortBy.length;
            var sortRule = void 0;
            while (i--) {
                if (sortBy[i].by === alias) {
                    sortRule = sortBy.splice(i, 1)[0];
                    break;
                }
            }
            if (!sortRule) {
                sortRule = new _SortRule__WEBPACK_IMPORTED_MODULE_0__["default"](alias);
            }
            else {
                sortRule.triggerOrder();
            }
            if (this.options.multiSorting) {
                sortBy.unshift(sortRule);
            }
            else {
                sortBy = [sortRule];
            }
            viewModel.sortBy = sortBy;
        }
    };
    ;
    Sorting.prototype.bind = function () {
        var $headTable = this.storage.$headTable;
        this._off();
        $headTable.on('click.Xgrid', '.Xgrid-thead-label.sortable', this._handlerSortColumn.bind(this));
    };
    ;
    Sorting.prototype._off = function () {
        this.storage.$headTable.off('.Xgrid');
    };
    ;
    Sorting.prototype._handlerSortColumn = function (e) {
        e.preventDefault();
        var $item = $(e.currentTarget);
        var alias = $item.attr('data-alias');
        var colmodel = this.storage.colModelsDictionary[alias];
        $item.blur();
        if (colmodel && colmodel.sortable) {
            this.sortByAlias(alias);
        }
    };
    ;
    return Sorting;
}());
/* harmony default export */ __webpack_exports__["default"] = (Sorting);
;


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

/***/ "./src/modules/Tools.ts":
/*!******************************!*\
  !*** ./src/modules/Tools.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Tools = /** @class */ (function () {
    function Tools() {
        this.now = Date.now || (function () { return new Date().getTime(); });
    }
    Tools.prototype.execute = function (functions, args, context) {
        var apply = function (foo) {
            if (typeof (foo) === 'function') {
                foo.apply(context ? context : foo, args);
            }
        };
        if ($.isArray(functions)) {
            functions.forEach(apply);
        }
        else {
            apply(functions);
        }
    };
    ;
    Tools.prototype.insertElement = function ($container, searchStr, replacement) {
        var $replacement = $(replacement);
        if (!$replacement.length) {
            replacement = String(replacement);
        }
        $container.find(":not(iframe)").addBack().contents().filter(function () {
            return this.nodeType === 3;
        }).each(function () {
            if (this.data.indexOf(searchStr) !== -1) {
                if ($replacement.length) {
                    $(this).after($replacement);
                    var str = this.data, part1 = str.substr(0, str.indexOf(searchStr)), part2 = str.substr(part1.length + searchStr.length, str.length);
                    if (!part1.length) {
                        $(this).remove();
                    }
                    if (part2.length) {
                        if (part1.length) {
                            this.data = part1;
                        }
                        $replacement.after(part2);
                    }
                    else if (part1.length) {
                        this.data = part1;
                    }
                }
                else {
                    this.data = this.data.replace(searchStr, replacement);
                }
            }
        });
    };
    Tools.prototype.throttle = function (func, wait) {
        if (wait === void 0) { wait = 10; }
        var context, args, timeout = null;
        return function () {
            var props = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                props[_i] = arguments[_i];
            }
            context = this;
            args = props;
            if (!context) {
                context = func;
            }
            else if (context === window) {
                context = func;
            }
            if (!timeout) {
                timeout = setTimeout(function () {
                    clearTimeout(timeout);
                    timeout = null;
                    func.apply(context, args);
                }, wait);
            }
        };
    };
    ;
    return Tools;
}());
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
            filterToolbar: true
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
/* harmony import */ var _FilterToolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterToolbar */ "./src/modules/FilterToolbar.ts");
/* harmony import */ var _Sorting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sorting */ "./src/modules/Sorting.ts");
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Display */ "./src/modules/Display.ts");
/* harmony import */ var _FixedHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FixedHeader */ "./src/modules/FixedHeader.ts");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.ts");
/* harmony import */ var _Fill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Fill */ "./src/modules/Fill.ts");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pagination */ "./src/modules/Pagination.ts");
/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Tools */ "./src/modules/Tools.ts");











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
    Xgrid.prototype.setGridData = function (rows) {
        this.Storage.data = rows;
        return this;
    };
    ;
    Xgrid.prototype.refresh = function () {
        this.Storage.notify('data', this.Storage);
        return this;
    };
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
        var options = this.options;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0J1aWxkSW5mcmFzdHJ1Y3R1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ2VsbEZvcm1hdHRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ29sTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRGlzcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9EaXNwbGF5TW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRmlsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9GaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRmlsdGVyTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRmlsdGVyVG9vbGJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9GaWx0ZXJUb29sYmFyTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRml4ZWRIZWFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvTG9jYWxTb3J0UnVsZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL09wZXJhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9QYWdpbmF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1BpcGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1Byb2Nlc3NTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9RdWVyeU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1NvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvU29ydFJ1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvU29ydGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9TdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1Rvb2xzLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1ZpZXdNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9YZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFvQztBQUVwQyxDQUFDLFVBQUMsQ0FBQztJQUNGLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHO1FBQVUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDcEMsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFNLE9BQU8sR0FBc0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxD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QUksRUFBRSxDQUFDLFVBQUMsV0FBcUI7Z0JBQzVCLE9BQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUM7WUFDRixPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQ25DLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxvREFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksbURBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0IsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDbEI7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFDRixZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzlJRCx5QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgWGdyaWQgZnJvbSAnLi9tb2R1bGVzL1hncmlkJztcblxuKCgkKSA9PiB7XG5cdCQuZm4uWGdyaWQgPSBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pIHtcblx0XHRsZXQgZGF0YTtcblx0XHRjb25zdCBvcHRpb25zOiBJT3B0aW9ucyB8IHN0cmluZyA9IGFyZ3NbMF07XG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRkYXRhID0gJCh0aGlzKS5kYXRhKCdYZ3JpZCcpO1xuXHRcdFx0aWYgKCFkYXRhKSB7XG5cdFx0XHRcdGNvbnN0IHByb3BzOiBJT3B0aW9ucyA9ICh0eXBlb2YgKG9wdGlvbnMpID09PSAnc3RyaW5nJykgPyBhcmdzWzFdIDogb3B0aW9ucztcblx0XHRcdFx0JCh0aGlzKS5kYXRhKCdYZ3JpZCcsIG5ldyBYZ3JpZChwcm9wcywgJCh0aGlzKSkpO1xuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgKG9wdGlvbnMpID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLmluZGV4T2YoJ18nKSAhPT0gMCAmJiBkYXRhW29wdGlvbnNdID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNvbnN0IHByb3BzID0gYXJncy5zbGljZSgxKTtcblx0XHRcdFx0ZGF0YVtvcHRpb25zXS5hcHBseShkYXRhLCBwcm9wcyk7XG5cdFx0XHR9IGVsc2UgaWYgKGRhdGEucmVmcmVzaCkge1xuXHRcdFx0XHRkYXRhLnJlZnJlc2guYXBwbHkoZGF0YSwgYXJncyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0pKGpRdWVyeSk7XG4iLCJpbXBvcnQgdG9vbHMgZnJvbSAnLi9Ub29scyc7XG5cbmNsYXNzIEJ1aWxkSW5mcmFzdHJ1Y3R1cmUge1xuXHR2aWV3TW9kZWw6IElWaWV3TW9kZWw7XG5cdHN0b3JhZ2U6IElTdG9yYWdlO1xuXHRvcHRpb25zOiBJQnVpbGRJbmZyYXN0cnVjdHVyZU9wdGlvbnM7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucywgc3RvcmFnZSwgdmlld01vZGVsKSB7XG5cdFx0dGhpcy52aWV3TW9kZWwgPSB2aWV3TW9kZWw7XG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xuXHRcdFx0dGhlYWRDbGFzczogJ3RhYmxlLWdyaWQtdGhlYWQnLFxuXHRcdFx0dGJvZHlDbGFzczogJ3RhYmxlLWdyaWQtdGJvZHknLFxuXHRcdFx0Zmlyc3RCdG5UZW1wbGF0ZTogJzxzcGFuIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPiYjMTcxOzwvc3Bhbj4nLFxuXHRcdFx0bGFzdEJ0blRlbXBsYXRlOiAnPHNwYW4gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+JiMxODc7PC9zcGFuPicsXG5cdFx0XHRwcmV2QnRuVGVtcGxhdGU6ICc8c3BhbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj4mIzgyNDk7PC9zcGFuPicsXG5cdFx0XHRuZXh0QnRuVGVtcGxhdGU6ICc8c3BhbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj4mIzgyNTA7PC9zcGFuPicsXG5cdFx0XHRjdXJyZW50UGFnZVRlbXBsYXRlOiAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPicsXG5cdFx0XHRwYWdpbmF0aW9uVGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiWGdyaWQtcGFnZ2luYXRpb24gaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCIgPntmaXJzdEJ0blRlbXBsYXRlfXtwcmV2QnRuVGVtcGxhdGV9PHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+IFBhZ2UgPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHR7Y3VycmVudFBhZ2VUZW1wbGF0ZX1cblx0XHRcdFx0PGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIiA+PHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+IG9mIDxzcGFuIGNsYXNzPVwiWGdyaWQtdG90YWwtcGFnZXNcIj48L3NwYW4+PC9zcGFuPntuZXh0QnRuVGVtcGxhdGV9e2xhc3RCdG5UZW1wbGF0ZX08L2Rpdj5cblx0XHRcdDwvZGl2PmBcblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XG5cdFx0dGhpcy5fZXhlYygpO1xuXHR9O1xuXHRidWlsZEZpbHRlclRvb2xiYXIoKSB7XG5cdFx0aWYgKHRoaXMudmlld01vZGVsLmZpbHRlclRvb2xiYXIpIHtcblx0XHRcdHRoaXMuX2J1aWxkRmlsdGVyVG9vbGJhcigpO1xuXHRcdH1cblx0fTtcblx0X2V4ZWMoKSB7XG5cdFx0dGhpcy5fYnVpbGQoKTtcblx0XHR0aGlzLl9idWlsZFRoZWFkKCk7XG5cdFx0dGhpcy5fYnVpbGRUQm9keSgpO1xuXHRcdHRoaXMuX2J1aWxkUGFnaW5hdGlvbigpO1xuXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcblx0XHRjb25zdCAkdGZvb3RDZWxscyA9IHN0b3JhZ2UuJGdyaWRUYWJsZS5maW5kKCcuWGdyaWQtdGJvZHktdyB0ZCcpO1xuXHRcdGNvbnN0ICR0aGVhZENlbGxzID0gc3RvcmFnZS4kaGVhZFRhYmxlLmZpbmQoJ3RyJyk7XG5cblx0XHRjb2xNb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAobW9kZWwsIGkpIHtcblx0XHRcdGxldCBjZWxscyA9IFtdO1xuXG5cdFx0XHRjZWxscy5wdXNoKCR0Zm9vdENlbGxzLmdldChpKSk7XG5cdFx0XHQkdGhlYWRDZWxscy5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Y2VsbHMucHVzaCgkKHRoaXMpLmZpbmQoJz4qOmVxKCcgKyBpICsgJyknKS5nZXQoMCkpO1xuXHRcdFx0fSk7XG5cblx0XHRcdG1vZGVsLmRlcGVuZGVudCA9IGNlbGxzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSB7XG5cdFx0XHRcdFx0JGFuY2hvcjogJChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpLFxuXHRcdFx0XHRcdCRpdGVtOiAkKGl0ZW0pXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0cmVzdWx0LiRpdGVtLmJlZm9yZShyZXN1bHQuJGFuY2hvcik7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblx0X2FkZFByb3BzdG9IZWFkZXJDZWxscyhpLCBpdGVtKSB7XG5cdFx0Y29uc3QgJGl0ZW0gPSAkKGl0ZW0pO1xuXHRcdGNvbnN0IGNvbE1vZGVsID0gdGhpcy5zdG9yYWdlLmNvbE1vZGVsc1tpXTtcblxuXHRcdCRpdGVtLmF0dHIoJ2RhdGEtYWxpYXMnLCBjb2xNb2RlbFsnYWxpYXMnXSk7XG5cdFx0aWYgKGNvbE1vZGVsLmZpeGVkKSB7XG5cdFx0XHQkaXRlbS5hZGRDbGFzcygnZml4ZWQnKTtcblx0XHRcdGlmIChjb2xNb2RlbC53aWR0aCkge1xuXHRcdFx0XHQkaXRlbS53aWR0aChjb2xNb2RlbC53aWR0aCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRfYnVpbGRGaWx0ZXJUb29sYmFyKCkge1xuXHRcdGNvbnN0IHRhZyA9ICd0Zm9vdCc7XG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcblx0XHRjb25zdCAkZmlsdGVyID0gJChgPCR7dGFnfSBjbGFzcz1cIlhncmlkLXRoZWFkLWZpbHRlclwiPjx0cj4keyBuZXcgQXJyYXkoc3RvcmFnZS5jb2xNb2RlbHMubGVuZ3RoICsgMSkuam9pbignPHRkIGNsYXNzPVwiWGdyaWQtZmlsdGVyLWNlbGxcIj48L3RkPicpfTwvdHI+PC8ke3RhZ30+YCk7XG5cdFx0Y29uc3QgYWRkUHJvcCA9IHRoaXMuX2FkZFByb3BzdG9IZWFkZXJDZWxscy5iaW5kKHRoaXMpO1xuXG5cdFx0c3RvcmFnZS4kZmlsdGVyVG9vbGJhckl0ZW1zID0gJGZpbHRlci5maW5kKCcuWGdyaWQtZmlsdGVyLWNlbGwnKS5lYWNoKGFkZFByb3ApO1xuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5maW5kKCcuWGdyaWQtdGhlYWQtdyB0ZCcpLmVhY2goYWRkUHJvcCk7XG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLmFwcGVuZCgkZmlsdGVyKTtcblx0fTtcblxuXHRfYnVpbGRUaGVhZCgpIHtcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xuXHRcdGxldCB0YWcgPSAndGhlYWQnO1xuXHRcdGxldCB3aWR0aEhlbHBlciA9IGA8JHt0YWd9IGNsYXNzPVwiWGdyaWQtdGhlYWQtd1wiPjx0cj4ke25ldyBBcnJheShzdG9yYWdlLmNvbE1vZGVscy5sZW5ndGggKyAxKS5qb2luKCc8dGQ+PGRpdiBjbGFzcz1cIlhncmlkLVdpZHRoTGlzdGVuZXItd3JhcHBlclwiPjxpZnJhbWUgZGF0YS1jb2w9XCIwXCIgY2xhc3M9XCJYZ3JpZC1XaWR0aExpc3RlbmVyXCI+PC9pZnJhbWU+PC9kaXY+PC90ZD4nKX08L3RyPjwvJHt0YWd9PmA7XG5cblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuaHRtbCh3aWR0aEhlbHBlcik7XG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLmZpbmQoJy5YZ3JpZC10aGVhZC13IHRkJykuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0Y29uc3QgJHRkID0gJCh0aGlzKTtcblx0XHRcdGNvbnN0IGNvbE1vZGVsID0gc3RvcmFnZS5jb2xNb2RlbHNbaV07XG5cdFx0XHRjb25zdCBpZnJhbWU6IEhUTUxFbGVtZW50ID0gJHRkLmZpbmQoJ2lmcmFtZScpWzBdO1xuXG5cdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdkYXRhLWFsaWFzJywgY29sTW9kZWwuYWxpYXMpO1xuXHRcdH0pO1xuXG5cdFx0dGFnID0gJ3Rib2R5Jztcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuYXBwZW5kKGA8JHt0YWd9IGNsYXNzPVwiWGdyaWQtdGhlYWQtbGFiZWxzXCI+PHRyPiR7bmV3IEFycmF5KHN0b3JhZ2UuY29sTW9kZWxzLmxlbmd0aCArIDEpLmpvaW4oJzx0aCBjbGFzcz1cIlhncmlkLXRoZWFkLWxhYmVsXCI+PC90aD4nKX08L3RyPjwvJHt0YWd9PmApO1xuXHRcdHN0b3JhZ2UuJGhlYWRMYWJlbHMgPSBzdG9yYWdlLiRoZWFkVGFibGUuZmluZCgnLlhncmlkLXRoZWFkLWxhYmVsJyk7XG5cdFx0c3RvcmFnZS4kaGVhZExhYmVscy5lYWNoKChpLCBpdGVtKSA9PiB7XG5cdFx0XHR0aGlzLl9hZGRQcm9wc3RvSGVhZGVyQ2VsbHMoaSwgaXRlbSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLmJ1aWxkRmlsdGVyVG9vbGJhcigpO1xuXHR9O1xuXG5cdF9idWlsZFRCb2R5KCkge1xuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XG5cdFx0bGV0IHdpZHRoSGVscGVyID0gJzx0aGVhZCBjbGFzcz1cIlhncmlkLXRib2R5LXdcIj48dHI+JyArIG5ldyBBcnJheShzdG9yYWdlLmNvbE1vZGVscy5sZW5ndGggKyAxKS5qb2luKCc8dGQ+PGk+PC9pPjwvdGQ+JykgKyAnPC90cj48L3RoZWFkPic7XG5cblx0XHRzdG9yYWdlLiRncmlkVGFibGUuaHRtbCh3aWR0aEhlbHBlcik7XG5cdFx0c3RvcmFnZS4kZ3JpZFRhYmxlLmZpbmQoJy5YZ3JpZC10Ym9keS13IHRyIHRkJykuZWFjaCgoaSwgaXRlbSkgPT4ge1xuXHRcdFx0dGhpcy5fYWRkUHJvcHN0b0hlYWRlckNlbGxzKGksIGl0ZW0pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdF9idWlsZFBhZ2luYXRpb24oKSB7XG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXHRcdGNvbnN0ICRwYWdpbmF0aW9uID0gJChvcHRpb25zLnBhZ2luYXRpb25UZW1wbGF0ZSk7XG5cdFx0Y29uc3QgeyBmaXJzdEJ0blRlbXBsYXRlLCBsYXN0QnRuVGVtcGxhdGUsIHByZXZCdG5UZW1wbGF0ZSwgbmV4dEJ0blRlbXBsYXRlLCBjdXJyZW50UGFnZVRlbXBsYXRlIH0gPSBvcHRpb25zO1xuXHRcdGxldCAkcGFnaW5hdGlvbkJveDtcblxuXHRcdHRvb2xzLmluc2VydEVsZW1lbnQoJHBhZ2luYXRpb24sICd7Zmlyc3RCdG5UZW1wbGF0ZX0nLCBmaXJzdEJ0blRlbXBsYXRlID8gJChmaXJzdEJ0blRlbXBsYXRlKS5hZGRDbGFzcygnWGdyaWQtZmlyc3QnKSA6ICcnKTtcblx0XHR0b29scy5pbnNlcnRFbGVtZW50KCRwYWdpbmF0aW9uLCAne3ByZXZCdG5UZW1wbGF0ZX0nLCAkKHByZXZCdG5UZW1wbGF0ZSkuYWRkQ2xhc3MoJ1hncmlkLXByZXYnKSk7XG5cdFx0dG9vbHMuaW5zZXJ0RWxlbWVudCgkcGFnaW5hdGlvbiwgJ3tuZXh0QnRuVGVtcGxhdGV9JywgJChuZXh0QnRuVGVtcGxhdGUpLmFkZENsYXNzKCdYZ3JpZC1uZXh0JykpO1xuXHRcdHRvb2xzLmluc2VydEVsZW1lbnQoJHBhZ2luYXRpb24sICd7bGFzdEJ0blRlbXBsYXRlfScsICQobGFzdEJ0blRlbXBsYXRlKS5hZGRDbGFzcygnWGdyaWQtbGFzdCcpKTtcblx0XHR0b29scy5pbnNlcnRFbGVtZW50KCRwYWdpbmF0aW9uLCAne2N1cnJlbnRQYWdlVGVtcGxhdGV9JywgJChjdXJyZW50UGFnZVRlbXBsYXRlKS5hZGRDbGFzcygnWGdyaWQtY3VycmVudC1wYWdlJykpO1xuXG5cdFx0aWYgKG9wdGlvbnMucGFnaW5hdGlvblNlbGVjdG9yKSB7XG5cdFx0XHQkcGFnaW5hdGlvbkJveCA9ICQob3B0aW9ucy5wYWdpbmF0aW9uU2VsZWN0b3IpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkcGFnaW5hdGlvbkJveCA9IHN0b3JhZ2UuJGJveC5maW5kKCcuWGdyaWQtcGFnZ2luYXRpb24td3JhcHBlcicpO1xuXHRcdH1cblxuXHRcdCRwYWdpbmF0aW9uQm94Lmh0bWwoJHBhZ2luYXRpb24pO1xuXHRcdHN0b3JhZ2UuJHBhZ2luYXRpb25Cb3ggPSAkcGFnaW5hdGlvbkJveDtcblx0fTtcblxuXHRfYnVpbGQoKSB7XG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG5cdFx0c3RvcmFnZS4kYm94Lmh0bWwoYDxkaXYgY2xhc3M9XCJYZ3JpZFwiPlxuXHQ8ZGl2IGNsYXNzPVwiWGdyaWQtd3JhcHBlclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJYZ3JpZC13cmFwcGVyLWhvbGRlclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cIlhncmlkLXRoZWFkLXdyYXBwZXJcIj5cblx0XHRcdFx0PHRhYmxlIGNsYXNzPVwiWGdyaWQtdGhlYWQgJHtvcHRpb25zLnRoZWFkQ2xhc3N9XCI+PC90YWJsZT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cIlhncmlkLXRib2R5LXdyYXBwZXJcIj5cblx0XHRcdFx0PHRhYmxlIGNsYXNzPVwiWGdyaWQtdGJvZHkgJHtvcHRpb25zLnRib2R5Q2xhc3N9XCI+PC90YWJsZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJYZ3JpZC1wYWdnaW5hdGlvbi13cmFwcGVyXCI+PC9kaXY+XG5cdDwvZGl2PlxuPC9kaXY+YCk7XG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlID0gc3RvcmFnZS4kYm94LmZpbmQoJy5YZ3JpZC10aGVhZCcpO1xuXHRcdHN0b3JhZ2UuJGdyaWRUYWJsZSA9IHN0b3JhZ2UuJGJveC5maW5kKCcuWGdyaWQtdGJvZHknKTtcblx0fVxuXG59XG5leHBvcnQgZGVmYXVsdCBCdWlsZEluZnJhc3RydWN0dXJlOyIsImNsYXNzIENlbGxGb3JtYXR0ZXJzIHtcblx0Ym9vbGVhblllc05vKCR0ZCwgdmFsdWUsIHJvd0RhdGEsIGRhdGEpIHtcblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdHJldHVybiAnWWVzJ1xuXHRcdH1cblx0XHRyZXR1cm4gJ05vJztcblx0fTtcblx0dGV4dCgkdGQsIHZhbHVlLCByb3dEYXRhLCBkYXRhKSB7XG5cdFx0aWYgKHR5cGVvZiAodmFsdWUpID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0dmFsdWUgPSAnJztcblx0XHR9XG5cdFx0XG5cdFx0dmFyICRpdGVtID0gJCgnPGRpdiBjbGFzcz1cImVsbGlwc2lzXCI+PC9kaXY+Jylcblx0XHQkdGQuaHRtbCgkaXRlbSk7XG5cdFx0JGl0ZW0udGV4dCh2YWx1ZSk7XG5cdH07XG5cblx0aHRtbCgkdGQsIHZhbHVlLCByb3dEYXRhLCBkYXRhKSB7XG5cdFx0aWYgKHR5cGVvZiAodmFsdWUpID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0dmFsdWUgPSAnJztcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9O1xufVxuZXhwb3J0IGRlZmF1bHQgbmV3IENlbGxGb3JtYXR0ZXJzKCk7IiwiaW1wb3J0IHBpcGVzIGZyb20gJy4vUGlwZXMnO1xuaW1wb3J0IEZpbHRlclRvb2xiYXJNb2RlbCBmcm9tICcuL0ZpbHRlclRvb2xiYXJNb2RlbCc7XG5pbXBvcnQgQ2VsbEZvcm1hdHRlcnMgZnJvbSAnLi9DZWxsRm9ybWF0dGVycyc7XG5cbmNsYXNzIENvbE1vZGVsIGltcGxlbWVudHMgSUNvbE1vZGVsIHtcblx0YWxpYXM6IHN0cmluZztcblx0ZmlsdGVyRm9ybWF0dGVyOiBGdW5jdGlvbjtcblx0ZmlsdGVyT3B0aW9uID0gJ2NuJztcblx0ZmlsdGVyVG9vbGJhclNldHRpbmdzOiBJRmlsdGVyVG9vbGJhck1vZGVsO1xuXHRmaWx0ZXJUeXBlID0gJ3N0cmluZycgYXMgVEZpbHRlclR5cGU7XG5cdGZpbHRlcmFibGUgPSBmYWxzZTtcblx0Zml4ZWQgPSBmYWxzZTtcblx0aGlkZGVuID0gZmFsc2U7XG5cdGluc2Vuc2l0aXZlID0gZmFsc2U7XG5cdGtleTogc3RyaW5nO1xuXHRsYWJlbCA9ICcnO1xuXHRvcmRlcjogbnVtYmVyO1xuXHRyZXNpemFibGUgPSBmYWxzZTtcblx0c29ydEZvcm1hdHRlcjogRnVuY3Rpb247XG5cdHNvcnRUeXBlID0gJ3N0cmluZycgYXMgVFNvcnRUeXBlO1xuXHRzb3J0YWJsZSA9IGZhbHNlO1xuXHR3aWR0aDogbnVtYmVyO1xuXG5cdGRlcGVuZGVudCA9IFtdO1xuXHRfY2hlY2s6IEZ1bmN0aW9uO1xuXHRjZWxsRm9ybWF0dGVyOiBGdW5jdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihtb2RlbCwgb3JkZXIpIHtcblx0XHR0aGlzLm9yZGVyID0gb3JkZXI7XG5cblx0XHQkLmV4dGVuZCh0aGlzLCBtb2RlbCk7XG5cdFx0dGhpcy5maWx0ZXJUb29sYmFyU2V0dGluZ3MgPSBuZXcgRmlsdGVyVG9vbGJhck1vZGVsKG1vZGVsLmZpbHRlclRvb2xiYXJTZXR0aW5ncyk7XG5cblx0XHRpZiAodHlwZW9mICh0aGlzLmFsaWFzKSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHRoaXMuYWxpYXMgPSB0aGlzLmtleTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiAodGhpcy5rZXkpID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0dGhpcy5rZXkgPSB0aGlzLmFsaWFzO1xuXHRcdH1cblx0XHRpZiAobW9kZWwuc29ydFR5cGUgJiYgdHlwZW9mIChtb2RlbC5zb3J0VHlwZSkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMuc29ydEZvcm1hdHRlciA9IG1vZGVsLnNvcnRUeXBlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNvcnRGb3JtYXR0ZXIgPSBwaXBlcy5nZXRCeVR5cGUobW9kZWwuc29ydFR5cGUpO1xuXHRcdH1cblxuXHRcdGlmIChtb2RlbC5maWx0ZXJUeXBlICYmIHR5cGVvZiAobW9kZWwuZmlsdGVyVHlwZSkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMuZmlsdGVyRm9ybWF0dGVyID0gbW9kZWwuZmlsdGVyVHlwZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5maWx0ZXJGb3JtYXR0ZXIgPSBwaXBlcy5nZXRCeVR5cGUobW9kZWwuZmlsdGVyVHlwZSk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YobW9kZWwuY2VsbEZvcm1hdHRlcikgPT09ICdzdHJpbmcnICYmIHR5cGVvZihDZWxsRm9ybWF0dGVyc1ttb2RlbC5jZWxsRm9ybWF0dGVyXSkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMuY2VsbEZvcm1hdHRlciA9IENlbGxGb3JtYXR0ZXJzW21vZGVsLmNlbGxGb3JtYXR0ZXJdO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mKG1vZGVsLmNlbGxGb3JtYXR0ZXIpID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLmNlbGxGb3JtYXR0ZXIgPSBtb2RlbC5jZWxsRm9ybWF0dGVyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNlbGxGb3JtYXR0ZXIgPSBDZWxsRm9ybWF0dGVyc1sndGV4dCddO1xuXHRcdH1cblxuXHRcdHRoaXMuZGVwZW5kZW50ID0gW107XG5cdFx0dGhpcy5fY2hlY2sgPSBmdW5jdGlvbiAoKTogdm9pZCB7XG5cdFx0XHRpZiAodGhpcy5oaWRkZW4pIHtcblx0XHRcdFx0dGhpcy5kZXBlbmRlbnQuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0XHRcdGl0ZW0uJGl0ZW0uZGV0YWNoKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5kZXBlbmRlbnQuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0XHRcdGl0ZW0uJGFuY2hvci5hZnRlcihpdGVtLiRpdGVtKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bGFiZWxGb3JtYXR0ZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMubGFiZWw7XG5cdH07XG5cblx0ZmlsdGVyVG9vbGJhckZvcm1hdHRlcigkY2VsbCwgY29sTW9kZWwpIHtcblx0XHRjb25zdCBzZXR0aW5ncyA9IGNvbE1vZGVsLmZpbHRlclRvb2xiYXJTZXR0aW5ncyB8fCB7fTtcblx0XHRsZXQgJGNvbnRyb2wsXG5cdFx0XHQkY29udGFpbmVyLFxuXHRcdFx0JHdyYXAgPSAkKCc8ZGl2IGNsYXNzPVwiWGdyaWQtZmlsdGVyLWNvbnRyb2wtd3JhcFwiPjwvZGl2PicpLFxuXHRcdFx0c3RyID0gJzxkaXYgY2xhc3M9XCJYZ3JpZC1maWx0ZXItd3JhcHBlclwiPic7XG5cblx0XHRpZiAoc2V0dGluZ3MuYWxsb3dSZXNldEJ1dHRvbiB8fCBzZXR0aW5ncy5hbGxvd1N1Ym1pdEJ1dHRvbikge1xuXHRcdFx0c3RyICs9ICc8c3BhbiBjbGFzcz1cIlhncmlkLWZpbHRlci1idG5zXCI+Jztcblx0XHRcdGlmIChzZXR0aW5ncy5hbGxvd1Jlc2V0QnV0dG9uKSB7XG5cdFx0XHRcdHN0ciArPSAnPHNwYW4gY2xhc3M9XCJYZ3JpZC1idG4gWGdyaWQtcmVzZXRcIj4mIzEwMDA2Ozwvc3Bhbj4nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNldHRpbmdzLmFsbG93U3VibWl0QnV0dG9uKSB7XG5cdFx0XHRcdHN0ciArPSAnPHNwYW4gY2xhc3M9XCJYZ3JpZC1idG4gWGdyaWQtb25TdWJtaXRcIj4mIzEwMDA0Ozwvc3Bhbj4nO1xuXHRcdFx0fVxuXHRcdFx0c3RyICs9ICc8L3NwYW4+Jztcblx0XHR9XG5cdFx0c3RyICs9ICc8L2Rpdj4nXG5cdFx0c3dpdGNoIChzZXR0aW5ncy5mb3JtQ29udHJvbFR5cGUpIHtcblx0XHRcdGNhc2UgJ3NlbGVjdCc6XG5cdFx0XHRcdCRjb250cm9sID0gJCgnPHNlbGVjdCBjbGFzcz1cIlhncmlkLXNlbGVjdCBYZ3JpZC1maWx0ZXJcIiAgLz4nKTtcblx0XHRcdFx0c2V0dGluZ3Muc2VsZWN0T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpKSB7XG5cdFx0XHRcdFx0JGNvbnRyb2wuYXBwZW5kKCc8b3B0aW9uIHZhbHVlPVwiJyArIGkgKyAnXCI+JyArIGVsZW1lbnQubGFiZWwgKyAnPC9vcHRpb24+Jylcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCRjb250cm9sLnZhbChbXSkuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZEluZGV4ID0gLTE7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdCRjb250cm9sID0gJCgnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJYZ3JpZC1pbnB1dCBYZ3JpZC1maWx0ZXJcIiAvPicpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0aWYgKHNldHRpbmdzLm9uQ2hhbmdlKSB7XG5cdFx0XHQkY29udHJvbC5hZGRDbGFzcygnWGdyaWQtb25DaGFuZ2UnKTtcblx0XHR9XG5cdFx0aWYgKHNldHRpbmdzLm9uS2V5ZG93bikge1xuXHRcdFx0JGNvbnRyb2wuYWRkQ2xhc3MoJ1hncmlkLW9uS2V5ZG93bicpO1xuXHRcdH1cblx0XHRpZiAoc2V0dGluZ3Mub25FbnRlcikge1xuXHRcdFx0JGNvbnRyb2wuYWRkQ2xhc3MoJ1hncmlkLW9uRW50ZXInKTtcblx0XHR9XG5cdFx0aWYgKHNldHRpbmdzLmF0dHIpIHtcblx0XHRcdCRjb250cm9sLmF0dHIoc2V0dGluZ3MuYXR0cik7XG5cdFx0fVxuXG5cdFx0JGNvbnRhaW5lciA9ICQoc3RyKTtcblx0XHQkd3JhcC5hcHBlbmQoJGNvbnRyb2wpO1xuXHRcdCRjb250YWluZXIuYXBwZW5kKCR3cmFwKTtcblx0XHQkY2VsbC5odG1sKCRjb250YWluZXIpO1xuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sTW9kZWw7IiwiaW1wb3J0IHRvb2xzIGZyb20gJy4vVG9vbHMnO1xuaW1wb3J0IFF1ZXJ5TW9kZWwgZnJvbSAnLi9RdWVyeU1vZGVsJztcbmltcG9ydCBzb3J0IGZyb20gJy4vU29ydCc7XG5pbXBvcnQgZmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCBEaXNwbGF5TW9kZWwgZnJvbSAnLi9EaXNwbGF5TW9kZWwnO1xuaW1wb3J0IExvY2FsU29ydFJ1bGVNb2RlbCBmcm9tICcuL0xvY2FsU29ydFJ1bGVNb2RlbCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheSB7XG5cdHZpZXdNb2RlbDogSVZpZXdNb2RlbDtcblx0c3RvcmFnZTogSVN0b3JhZ2U7XG5cdGFqYXg6IEZ1bmN0aW9uO1xuXHRwcm9jZXNzOiBGdW5jdGlvbjtcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cdFx0dGhpcy52aWV3TW9kZWwgPSBvcHRpb25zLnZpZXdNb2RlbDtcblx0XHR0aGlzLnN0b3JhZ2UgPSBvcHRpb25zLnN0b3JhZ2U7XG5cdFx0dGhpcy5hamF4ID0gb3B0aW9ucy5hamF4O1xuXG5cdFx0aWYgKG9wdGlvbnMuaXNMb2NhbCkge1xuXHRcdFx0dGhpcy5wcm9jZXNzID0gdGhpcy5fbG9jYWxQcm9jZXNzLmJpbmQodGhpcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHJvY2VzcyA9IHRoaXMuX3NlcnZlclByb2Nlc3MuYmluZCh0aGlzKTtcblx0XHR9XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuX3N1YnNjcmliZSgpO1xuXHRcdH0sIDUwKTtcblx0fTtcblxuXHRleGVjKCk6IHZvaWQge1xuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XG5cdFx0Y29uc3Qgdmlld01vZGVsID0gdGhpcy52aWV3TW9kZWw7XG5cdFx0Y29uc3QgcXVlcnk6IElRdWVyeU1vZGVsID0gbmV3IFF1ZXJ5TW9kZWwoe1xuXHRcdFx0ZmlsdGVyOiBzdG9yYWdlLmZpbHRlcixcblx0XHRcdHNvcnQ6IHZpZXdNb2RlbC5zb3J0QnksXG5cdFx0XHRyb3dzOiB2aWV3TW9kZWwucm93cyxcblx0XHRcdHBhZ2U6IHZpZXdNb2RlbC5uZXdQYWdlLFxuXHRcdH0pO1xuXG5cdFx0c3RvcmFnZS5xdWVyeSA9IHF1ZXJ5O1xuXHRcdHN0b3JhZ2UuJGJveC5hZGRDbGFzcygnWGdyaWQtbG9hZGluZycpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnByb2Nlc3MoKS5kb25lKChkYXRhOiBJRGlzcGFseU1vZGVsKSA9PiB7XG5cdFx0XHRcdHRoaXMuX2ZpbGxlcihkYXRhKTtcblx0XHRcdFx0dGhpcy5zdG9yYWdlLiRib3gucmVtb3ZlQ2xhc3MoJ1hncmlkLWxvYWRpbmcnKTtcblx0XHRcdH0pO1xuXHRcdH0sIDApO1xuXHR9O1xuXG5cdF9maWxsZXIoZGF0YTogSURpc3BhbHlNb2RlbCk6IHZvaWQge1xuXHRcdGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsO1xuXG5cdFx0dmlld01vZGVsLnRvdGFsUGFnZXMgPSBkYXRhLnRvdGFsUGFnZXNcblx0XHR2aWV3TW9kZWwudG90YWxSb3dzID0gZGF0YS50b3RhbFJvd3M7XG5cdFx0dmlld01vZGVsLmRhdGEgPSBkYXRhLmRhdGE7XG5cdFx0dmlld01vZGVsLnBhZ2UgPSBkYXRhLnBhZ2U7XG5cdH07XG5cblx0cHJpdmF0ZSBfbG9jYWxGaWx0ZXIoZGF0YSwgZmlsdGVyUXVlcnkpIHtcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKSxcblx0XHRcdHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXG5cdFx0XHRyYXdEYXRhID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVsc0RpY3Rpb25hcnk7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Y29uc3Qgcm93ID0ge307XG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChhbGlhcywgcm93RGF0YSkge1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiAocm93W2FsaWFzXSkgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGNvbE1vZGVsID0gY29sTW9kZWxzW2FsaWFzXTtcblx0XHRcdFx0XHRcdFx0cm93W2FsaWFzXSA9IGNvbE1vZGVsLmZpbHRlckZvcm1hdHRlcihyb3dEYXRhW2NvbE1vZGVsLmtleV0sIHJvd0RhdGEsIGNvbE1vZGVsKTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRyZXR1cm4gcm93W2FsaWFzXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGlmIChmaWx0ZXJRdWVyeSkge1xuXHRcdFx0XHRkYXRhID0gZmlsdGVyLmV4ZWMoZGF0YSwgZmlsdGVyUXVlcnksIHJhd0RhdGEoKSk7XG5cdFx0XHR9XG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuXHRcdH0sIDApO1xuXHRcdHJldHVybiBkZWZlcnJlZDtcblx0fTtcblxuXHRwcml2YXRlIF9sb2NhbFNvcnQoZGF0YSwgc29ydFJ1bGVzKSB7XG5cdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcblxuXHRcdGlmIChzb3J0UnVsZXMubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBsb2NhbFNvcnRSdWxlczogSUxvY2FsU29ydFJ1bGVbXSA9IHNvcnRSdWxlcy5tYXAoKHJ1bGUpID0+IHtcblx0XHRcdFx0Y29uc3QgY29sTW9kZWwgPSBzdG9yYWdlLmNvbE1vZGVsc0RpY3Rpb25hcnlbcnVsZS5ieV07XG5cdFx0XHRcdGNvbnN0IGJ5ID0gY29sTW9kZWwgPyBjb2xNb2RlbC5rZXkgOiBydWxlLmJ5O1xuXG5cdFx0XHRcdHJldHVybiBuZXcgTG9jYWxTb3J0UnVsZU1vZGVsKHJ1bGUub3JkZXIsIGJ5LCBjb2xNb2RlbCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0ZGF0YSA9IHNvcnQuZXhlYyhkYXRhLCBsb2NhbFNvcnRSdWxlcyk7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcblx0XHRcdH0sIDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuXHRcdH1cblx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdH07XG5cblx0cHJpdmF0ZSBfZ2V0TG9jYWxEYXRhKGRhdGE6IElSYXdEYXRhW10sIHF1ZXJ5OiBJUXVlcnlNb2RlbCk6IElEaXNwYWx5TW9kZWwge1xuXHRcdGNvbnN0IHZpZXdNb2RlbDogSVZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsO1xuXHRcdGNvbnN0IGJlZ2luOiBudW1iZXIgPSAocXVlcnkucGFnZSAtIDEpICogdmlld01vZGVsLnJvd3M7XG5cdFx0Y29uc3QgZW5kOiBudW1iZXIgPSBxdWVyeS5wYWdlICogdmlld01vZGVsLnJvd3M7XG5cdFx0Y29uc3QgZGF0YVRvRGlzcGxheTogSVJhd0RhdGFbXSA9IGRhdGEuc2xpY2UoYmVnaW4sIGVuZCk7XG5cblx0XHRyZXR1cm4gbmV3IERpc3BsYXlNb2RlbChcblx0XHRcdGRhdGFUb0Rpc3BsYXksXG5cdFx0XHRxdWVyeS5wYWdlLFxuXHRcdFx0TWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gdmlld01vZGVsLnJvd3MpIHx8IDEsXG5cdFx0XHRkYXRhLmxlbmd0aCxcblx0XHQpO1xuXHR9O1xuXG5cdHByaXZhdGUgX2xvY2FsUHJvY2VzcygpOiBKUXVlcnlEZWZlcnJlZDxJRGlzcGFseU1vZGVsPiB7XG5cdFx0Y29uc3QgZGVmZXJyZWQ6IEpRdWVyeURlZmVycmVkPElEaXNwYWx5TW9kZWw+ID0gJC5EZWZlcnJlZCgpO1xuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XG5cdFx0Y29uc3QgcXVlcnk6IElRdWVyeU1vZGVsID0gc3RvcmFnZS5xdWVyeTtcblxuXHRcdHRoaXMuX2xvY2FsRmlsdGVyKHN0b3JhZ2UuZGF0YSwgcXVlcnkuZmlsdGVyKS5kb25lKChmaWx0ZXJlZERhdGEpID0+IHtcblx0XHRcdHRoaXMuX2xvY2FsU29ydChmaWx0ZXJlZERhdGEsIHF1ZXJ5LnNvcnQpLmRvbmUoKHNvcnRlZERhdGEpID0+IHtcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSh0aGlzLl9nZXRMb2NhbERhdGEoc29ydGVkRGF0YSwgcXVlcnkpKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHJldHVybiBkZWZlcnJlZDtcblx0fTtcblxuXHRwcml2YXRlIF9zZXJ2ZXJQcm9jZXNzKCk6IEpRdWVyeURlZmVycmVkPElEaXNwYWx5TW9kZWw+IHtcblx0XHRjb25zdCBxdWVyeTogSVF1ZXJ5TW9kZWwgPSB0aGlzLnN0b3JhZ2UucXVlcnk7XG5cdFx0Y29uc3QgZGVmZXJyZWQ6IEpRdWVyeURlZmVycmVkPElEaXNwYWx5TW9kZWw+ID0gJC5EZWZlcnJlZCgpO1xuXHRcdFxuXHRcdHRoaXMuYWpheChKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSkpLmFsd2F5cygoZGF0YSk9Pntcblx0XHRcdGNvbnN0IGRpc3BsYXlNb2RlbCA9IG5ldyBEaXNwbGF5TW9kZWwoKTtcblxuXHRcdFx0JC5leHRlbmQoZGlzcGxheU1vZGVsLCBkYXRhKTtcblx0XHRcdGRlZmVycmVkLnJlc29sdmUoZGlzcGxheU1vZGVsKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdH07XG5cdHByaXZhdGUgX3N1YnNjcmliZSgpIHtcblx0XHRjb25zdCB2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbDtcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xuXHRcdGNvbnN0IGFjdGlvbiA9IHRvb2xzLnRocm90dGxlKCgpID0+IHsgdGhpcy5leGVjKCk7IH0sIDEwMCk7XG5cdFx0Y29uc3QgX3JlbG9hZCA9IGZ1bmN0aW9uIChzLCB0eXBlKSB7XG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0Y2FzZSAnZmlsdGVyJzpcblx0XHRcdFx0XHR2aWV3TW9kZWwubmV3UGFnZSA9IDE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3NvcnRCeSc6XG5cdFx0XHRcdFx0dmlld01vZGVsLm5ld1BhZ2UgPSAxO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0YWN0aW9uKCk7XG5cdFx0fVxuXG5cdFx0dmlld01vZGVsLm9uKCduZXdQYWdlJywgX3JlbG9hZCk7XG5cdFx0dmlld01vZGVsLm9uKCdzb3J0QnknLCBfcmVsb2FkKTtcblx0XHRzdG9yYWdlLm9uKCdmaWx0ZXInLCBfcmVsb2FkKTtcblx0fTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlNb2RlbCBpbXBsZW1lbnRzIElEaXNwYWx5TW9kZWwge1xuXHRkYXRhOiBJUmF3RGF0YVtdO1xuXHRwYWdlOiBudW1iZXIgPSAxO1xuXHR0b3RhbFBhZ2VzOiBudW1iZXIgPSAwO1xuXHR0b3RhbFJvd3M6IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IoZGF0YVRvRGlzcGxheTogSVJhd0RhdGFbXSA9IFtdLCBwYWdlOiBudW1iZXIgPSAxLCB0b3RhbFBhZ2VzOiBudW1iZXIgPSAwLCB0b3RhbFJvd3M6IG51bWJlciA9IDApIHtcblx0XHR0aGlzLmRhdGEgPSBkYXRhVG9EaXNwbGF5O1xuXHRcdGlmIChwYWdlID4gMCkge1xuXHRcdFx0dGhpcy5wYWdlID0gcGFnZTtcblx0XHR9XG5cdFx0dGhpcy50b3RhbFBhZ2VzID0gdG90YWxQYWdlcztcblx0XHR0aGlzLnRvdGFsUm93cyA9IHRvdGFsUm93cztcblx0fVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGwge1xuXHR2aWV3TW9kZWw6IElWaWV3TW9kZWw7XG5cdHN0b3JhZ2U6IElTdG9yYWdlO1xuXG5cdGNvbnN0cnVjdG9yKHN0b3JhZ2UsIHZpZXdNb2RlbCkge1xuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XG5cdH07XG5cblx0dGhlYWQoKTogdm9pZCB7XG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcblx0XHRjb25zdCBjbGFzc1J1bGVzID0gWydyZXNpemFibGUnLCAnc29ydGFibGUnLCAnZmlsdGVyYWJsZScsICdoaWRkZW4nXTtcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcblxuXHRcdHN0b3JhZ2UuJGhlYWRMYWJlbHMuZWFjaCgoaTogbnVtYmVyLCB0aDogSFRNTEVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0ICR0aCA9ICQodGgpO1xuXHRcdFx0Y29uc3QgJHdyYXBwZXIgPSAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcblx0XHRcdGNvbnN0IGNvbE1vZGVsID0gY29sTW9kZWxzW2ldO1xuXG5cdFx0XHQkdGguZGF0YSgnWGdyaWQuZGF0YScsIGNvbE1vZGVsKTtcblxuXHRcdFx0bGV0IGRhdGEgPSBjb2xNb2RlbC5sYWJlbEZvcm1hdHRlcigkd3JhcHBlciwgJHRoLCBjb2xNb2RlbCwgaSk7XG5cdFx0XHRpZiAodHlwZW9mIChkYXRhKSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0JHdyYXBwZXIuaHRtbChkYXRhKTtcblx0XHRcdH1cblxuXHRcdFx0dGguaW5uZXJIVE1MID0gJyc7XG5cdFx0XHQkdGguYXBwZW5kKCR3cmFwcGVyKTtcblx0XHRcdCQuZWFjaChjbGFzc1J1bGVzLCBmdW5jdGlvbiAoaSwgbWFyaykge1xuXHRcdFx0XHRpZiAoY29sTW9kZWxbbWFya10pIHtcblx0XHRcdFx0XHQkdGguYWRkQ2xhc3MobWFyayk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JHRoLnJlbW92ZUNsYXNzKG1hcmspO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHR0aGlzLmZpbHRlclRvb2xiYXIoKTtcblx0fTtcblxuXHRmaWx0ZXJUb29sYmFyKCk6IHZvaWQge1xuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XG5cdFx0Y29uc3QgY29sTW9kZWxzID0gc3RvcmFnZS5jb2xNb2RlbHM7XG5cblx0XHRpZiAoc3RvcmFnZS4kZmlsdGVyVG9vbGJhckl0ZW1zKSB7XG5cdFx0XHRzdG9yYWdlLiRmaWx0ZXJUb29sYmFySXRlbXMuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHRjb25zdCAkY2VsbCA9ICQodGhpcyksXG5cdFx0XHRcdFx0Y29sTW9kZWwgPSBjb2xNb2RlbHNbaV07XG5cdFx0XHRcdGlmIChjb2xNb2RlbC5maWx0ZXJhYmxlICYmIGNvbE1vZGVsLmZpbHRlclRvb2xiYXJGb3JtYXR0ZXIpIHtcblx0XHRcdFx0XHRsZXQgZGF0YSA9IGNvbE1vZGVsLmZpbHRlclRvb2xiYXJGb3JtYXR0ZXIoJGNlbGwsIGNvbE1vZGVsKTtcblx0XHRcdFx0XHRpZiAodHlwZW9mIChkYXRhKSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdCRjZWxsLmh0bWwoZGF0YSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0eXBlb2YoY29sTW9kZWwuYWZ0ZXJGaWx0ZXJUb29sYmFyRm9ybWF0dGVyKSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0Y29sTW9kZWwuYWZ0ZXJGaWx0ZXJUb29sYmFyRm9ybWF0dGVyKCRjZWxsLCBjb2xNb2RlbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRjZWxsLmVtcHR5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXHR9O1xuXG5cdHRib2R5KCk6IHZvaWQge1xuXHRcdGNvbnN0IHsgc3RvcmFnZSwgdmlld01vZGVsIH0gPSB0aGlzO1xuXHRcdGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdGNvbnN0IGRhdGFUb0Rpc3BsYXkgPSB2aWV3TW9kZWwuZGF0YTtcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcblx0XHRjb25zdCAkaGVhZFdyYXAgPSBzdG9yYWdlLiRoZWFkVGFibGUucGFyZW50KCk7XG5cdFx0Y29uc3QgJGdyaWRXcmFwID0gc3RvcmFnZS4kZ3JpZFRhYmxlLnBhcmVudCgpO1xuXHRcdGNvbnN0IGRhdGEgPSBzdG9yYWdlLmRhdGE7XG5cdFx0Y29uc3QgdGJvZHkgPSB0aGlzLl9jcmVhdGVTaGFkb3dCb2R5KGZyYWdtZW50KTtcblx0XHRsZXQgbnVtID0gMDtcblxuXHRcdGNvbE1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xNb2RlbCwgaSkge1xuXHRcdFx0Y29sTW9kZWwuX2NoZWNrKCk7XG5cdFx0XHRjb25zdCAkdGQgPSBzdG9yYWdlLiRoZWFkTGFiZWxzLmVxKGkpO1xuXG5cdFx0XHRpZiAoIWNvbE1vZGVsLmhpZGRlbikge1xuXHRcdFx0XHRudW0rKztcblx0XHRcdFx0aWYgKG51bSAlIDIpIHtcblx0XHRcdFx0XHQkdGQuYWRkQ2xhc3MoJ29kZCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCR0ZC5hZGRDbGFzcygnZXZlbicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkKHRib2R5KS5maW5kKCd0cicpLmVhY2goKGksIHRyKSA9PiB7XG5cdFx0XHRjb25zdCByb3dEYXRhID0gZGF0YVRvRGlzcGxheVtpXTtcblxuXHRcdFx0dGhpcy5fZmlsbFJvdygkKHRyKSwgcm93RGF0YSwgZGF0YSk7XG5cdFx0fSk7XG5cblx0XHRzdG9yYWdlLiRncmlkVGFibGUuZmluZCgnPnRib2R5JykucmVtb3ZlKCk7XG5cdFx0JGhlYWRXcmFwLmNzcyh7ICdwYWRkaW5nLXJpZ2h0JzogJycgfSk7XG5cdFx0c3RvcmFnZS4kZ3JpZFRhYmxlLmFwcGVuZCh0Ym9keSk7XG5cblx0XHRpZiAoJGdyaWRXcmFwWzBdLm9mZnNldFdpZHRoIC0gJGdyaWRXcmFwWzBdLmNsaWVudFdpZHRoKSB7XG5cdFx0XHQkaGVhZFdyYXAuY3NzKHsgJ3BhZGRpbmctcmlnaHQnOiBzdG9yYWdlLnNjcm9sbGJhcldpZHRoICsgJ3B4JyB9KTtcblx0XHR9XG5cdFx0dGhpcy5fdXBkYXRlSGVhZCgpO1xuXHR9O1xuXG5cdHByaXZhdGUgX2NyZWF0ZVNoYWRvd0JvZHkoZnJhZ21lbnQ6IERvY3VtZW50RnJhZ21lbnQpIHtcblx0XHRjb25zdCB7IHN0b3JhZ2UsIHZpZXdNb2RlbCB9ID0gdGhpcztcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcblx0XHRjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG5cdFx0Y29uc3Qgcm93c0NvdW50ID0gdmlld01vZGVsLmRhdGEubGVuZ3RoO1xuXHRcdGxldCB0ciA9ICc8dHI+JyArIEFycmF5KGNvbE1vZGVscy5sZW5ndGggKyAxKS5qb2luKCc8dGQ+PC90ZD4nKSArICc8L3RyPic7XG5cdFx0bGV0IHRycyA9ICc8dGJvZHk+JyArIG5ldyBBcnJheShyb3dzQ291bnQgKyAxKS5qb2luKHRyKSArICc8dGJvZHk+JztcblxuXHRcdGlmICghZnJhZ21lbnQpIHtcblx0XHRcdGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdH1cblxuXHRcdHRib2R5LmlubmVySFRNTCA9IHRycztcblx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZCh0Ym9keSk7XG5cblx0XHRyZXR1cm4gdGJvZHk7XG5cdH07XG5cblx0cHJpdmF0ZSBfZmlsbFJvdygkdHIsIHJvd0RhdGEsIGRhdGEpOiB2b2lkIHtcblx0XHRjb25zdCAkdGRzID0gJHRyLmZpbmQoJ3RkJyk7XG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcblx0XHRsZXQgbnVtID0gMDtcblxuXHRcdCR0ci5kYXRhKCdYZ3JpZC5kYXRhJywgcm93RGF0YSk7XG5cblx0XHQkLmVhY2goY29sTW9kZWxzLCBmdW5jdGlvbiAoaSwgY29sTW9kZWwpIHtcblx0XHRcdGxldCB2YWx1ZSA9IHJvd0RhdGFbY29sTW9kZWwua2V5XSxcblx0XHRcdFx0JHRkID0gJHRkcy5lcShpKSxcblx0XHRcdFx0ZGF0YTtcblxuXHRcdFx0JHRkLmF0dHIoJ2RhdGEta2V5JywgY29sTW9kZWwuYWxpYXMpO1xuXG5cdFx0XHRpZiAoY29sTW9kZWwuaGlkZGVuKSB7XG5cdFx0XHRcdCR0ZC5yZW1vdmUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG51bSsrO1xuXHRcdFx0XHRkYXRhID0gY29sTW9kZWwuY2VsbEZvcm1hdHRlcigkdGQsIHZhbHVlLCByb3dEYXRhLCBkYXRhKTtcblx0XHRcdFx0aWYgKG51bSAlIDIpIHtcblx0XHRcdFx0XHQkdGQuYWRkQ2xhc3MoJ29kZCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCR0ZC5hZGRDbGFzcygnZXZlbicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0eXBlb2YgKGRhdGEpICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdCR0ZC5odG1sKGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0cHJpdmF0ZSBfdXBkYXRlSGVhZCgpOiB2b2lkIHtcblx0XHRjb25zdCB7IHN0b3JhZ2UsIHZpZXdNb2RlbCB9ID0gdGhpcztcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcblx0XHRjb25zdCAkaGVhZExhYmVscyA9IHN0b3JhZ2UuJGhlYWRMYWJlbHM7XG5cdFx0Y29uc3Qgc29ydEJ5ID0ge307XG5cblx0XHR2aWV3TW9kZWwuc29ydEJ5LmZvckVhY2goKHNvcnRSdWxlKSA9PiB7XG5cdFx0XHRzb3J0Qnlbc29ydFJ1bGUuYnldID0gc29ydFJ1bGUub3JkZXI7XG5cdFx0fSk7XG5cblx0XHRjb2xNb2RlbHMuZm9yRWFjaCgoY29sTW9kZWwsIGkpID0+IHtcblx0XHRcdGNvbnN0ICRsYWJlbCA9ICRoZWFkTGFiZWxzLmVxKGkpO1xuXHRcdFx0Y29uc3Qgb3JkZXIgPSBzb3J0QnlbY29sTW9kZWwuYWxpYXNdO1xuXG5cdFx0XHRpZiAob3JkZXIpIHtcblx0XHRcdFx0JGxhYmVsLmF0dHIoJ2RhdGEtc29ydCcsIG9yZGVyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRsYWJlbC5yZW1vdmVBdHRyKCdkYXRhLXNvcnQnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcbn07XG4iLCJpbXBvcnQgb3BlcmF0b3JzIGZyb20gJy4vT3BlcmF0b3JzJztcbmNsYXNzIEZpbHRlciB7XG5cdGV4ZWMoZGF0YSwgZ3JvdXAsIGdldERhdGEpIHtcblx0XHRjb25zdCBuZXdEYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0sIGkpID0+IHtcblx0XHRcdGNvbnN0IGdldCA9IGdldERhdGEoKTtcblx0XHRcdGNvbnN0IHN0YXRlID0gdGhpcy5fY2hlY2soZ3JvdXAsIGl0ZW0sIGdldCk7XG5cblx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHR9KTtcblx0XHRyZXR1cm4gbmV3RGF0YTtcblx0fTtcblx0cHJpdmF0ZSBfb3IocnVsZXMsIHJvd0RhdGEsIGdldCkge1xuXHRcdGxldCBpID0gcnVsZXMubGVuZ3RoO1xuXHRcdFxuXHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdGNvbnN0IHJ1bGUgPSBydWxlc1tpXTtcblx0XHRcdGlmICghb3BlcmF0b3JzW3J1bGUub3BdKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHZhbHVlID0gZ2V0KHJ1bGUuZmllbGQsIHJvd0RhdGEpLFxuXHRcdFx0XHRzdGF0ZSA9IG9wZXJhdG9yc1tydWxlLm9wXShydWxlLmRhdGEsIHZhbHVlKTtcblx0XHRcdGlmIChzdGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHRwcml2YXRlIF9hbmQocnVsZXMsIHJvd0RhdGEsIGdldCkge1xuXHRcdGxldCBpID0gcnVsZXMubGVuZ3RoO1xuXG5cdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0Y29uc3QgcnVsZSA9IHJ1bGVzW2ldO1xuXHRcdFx0aWYgKCFvcGVyYXRvcnNbcnVsZS5vcF0pIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRsZXQgdmFsdWUgPSBnZXQocnVsZS5maWVsZCwgcm93RGF0YSksXG5cdFx0XHRcdHN0YXRlID0gb3BlcmF0b3JzW3J1bGUub3BdKHJ1bGUuZGF0YSwgdmFsdWUpO1xuXHRcdFx0aWYgKCFzdGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXHRwcml2YXRlIF9jaGVjayhncm91cCwgcm93RGF0YSwgZ2V0KSB7XG5cdFx0Y29uc3QgaXNPciA9IGdyb3VwLnJ1bGVzLmxlbmd0aCAmJiBTdHJpbmcoZ3JvdXAuZ3JvdXBPcCkudG9VcHBlckNhc2UoKSA9PT0gXCJPUlwiO1xuXG5cdFx0aWYgKCQuaXNBcnJheShncm91cC5ydWxlcykgJiYgZ3JvdXAucnVsZXMubGVuZ3RoKSB7XG5cdFx0XHRpZiAoaXNPcikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fb3IoZ3JvdXAucnVsZXMsIHJvd0RhdGEsIGdldCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fYW5kKGdyb3VwLnJ1bGVzLCByb3dEYXRhLCBnZXQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGaWx0ZXIoKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJNb2RlbCBpbXBsZW1lbnRzIElGaWx0ZXJNb2RlbCB7XG5cdGRhdGE6IGFueTtcblx0ZmllbGQ6IHN0cmluZztcblx0b3A6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBhbnksIGZpZWxkOiBzdHJpbmcsIG9wOiBzdHJpbmcpIHtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0XHR0aGlzLm9wID0gb3A7XG5cdH1cbn0iLCJpbXBvcnQgRmlsdGVyTW9kZWwgZnJvbSAnLi9GaWx0ZXJNb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlclRvb2xiYXIge1xuXHRzdG9yYWdlOiBJU3RvcmFnZTtcblx0dmlld01vZGVsOiBJVmlld01vZGVsO1xuXHRvcHRpb25zOiBJT3B0aW9ucztcblx0dGltZW91dE9uS2V5ZG93biA9IG51bGw7XG5cblx0Y29uc3RydWN0b3Ioc3RvcmFnZSwgdmlld01vZGVsLCBvcHRpb25zKSB7XG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcblx0XHR0aGlzLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMuX2JpbmQoKTtcblx0fVxuXG5cdHRyaWdnZXJUb29sYmFyKCkge1xuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcblx0XHRjb25zdCBydWxlcyA9IFtdO1xuXHRcdGNvbnN0IGRlZmF1bHRTZWFyY2ggPSAnY24nO1xuXHRcdGNvbnN0IGdyb3VwT3AgPSBvcHRpb25zLmZpbHRlclRvb2xiYXJHcm91cE9wID09PSAnQU5EJyA/ICdBTkQnIDogJ09SJztcblx0XHRsZXQgcnVsZUdyb3VwID0gbnVsbDtcblxuXHRcdGlmICghc3RvcmFnZS4kZmlsdGVyVG9vbGJhckl0ZW1zKSB7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRzdG9yYWdlLiRmaWx0ZXJUb29sYmFySXRlbXMuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0Y29uc3QgJGZpbHRlciA9ICQodGhpcyk7XG5cdFx0XHRjb25zdCAkZWxlbSA9ICRmaWx0ZXIuZmluZCgnLlhncmlkLWZpbHRlcicpXG5cblx0XHRcdGlmICgkZWxlbS5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgY29sTW9kZWwgPSBjb2xNb2RlbHNbaV07XG5cdFx0XHRcdGNvbnN0IHNldHRpbmdzID0gY29sTW9kZWwuZmlsdGVyVG9vbGJhclNldHRpbmdzO1xuXHRcdFx0XHRjb25zdCBmaWx0ZXJPcHRpb24gPSBjb2xNb2RlbC5maWx0ZXJPcHRpb24gfHwgZGVmYXVsdFNlYXJjaDtcblx0XHRcdFx0Y29uc3QgZmllbGROYW1lID0gY29sTW9kZWwuZmlsdGVyQWxpYXMgfHwgY29sTW9kZWwuYWxpYXMgfHwgY29sTW9kZWwua2V5O1xuXHRcdFx0XHRsZXQgdmFsdWUgPSAkZWxlbS52YWwoKTtcblxuXHRcdFx0XHRpZiAodHlwZW9mIChzZXR0aW5ncy50cmFuc2Zvcm1EYXRhKSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdHZhbHVlID0gc2V0dGluZ3MudHJhbnNmb3JtRGF0YSh2YWx1ZSwgc2V0dGluZ3MpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHZhbHVlICYmIGNvbE1vZGVsLmluc2Vuc2l0aXZlKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBTdHJpbmcodmFsdWUpLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoKHR5cGVvZih2YWx1ZSkgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlICE9PSAnJyAmJiB2YWx1ZSAhPT0gbnVsbCkgfHwgZmlsdGVyT3B0aW9uID09PSBcIm51XCIgfHwgZmlsdGVyT3B0aW9uID09PSBcIm5uXCIpIHtcblx0XHRcdFx0XHRydWxlcy5wdXNoKG5ldyBGaWx0ZXJNb2RlbCh2YWx1ZSwgZmllbGROYW1lLCBmaWx0ZXJPcHRpb24pKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKHJ1bGVzLmxlbmd0aCkge1xuXHRcdFx0cnVsZUdyb3VwID0ge1xuXHRcdFx0XHRncm91cE9wLFxuXHRcdFx0XHRydWxlc1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzdG9yYWdlLmZpbHRlciA9IHJ1bGVHcm91cDtcblx0fTtcblxuXHRwcml2YXRlIF9iaW5kKCk6IHZvaWQge1xuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XG5cblx0XHRzdG9yYWdlLiRoZWFkVGFibGUub24oJ2tleXByZXNzJywgJ2lucHV0LlhncmlkLWlucHV0LlhncmlkLW9uRW50ZXInLCB0aGlzLl9oYW5kbGVyRmlsdGVyT25FbnRlci5iaW5kKHRoaXMpKTtcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUub24oJ2tleWRvd24nLCAnaW5wdXQuWGdyaWQtaW5wdXQuWGdyaWQtb25LZXlkb3duJywgdGhpcy5faGFuZGxlckZpbHRlck9uS2V5ZG93bi5iaW5kKHRoaXMpKTtcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUub24oJ2NoYW5nZScsICcuWGdyaWQtZmlsdGVyLlhncmlkLW9uQ2hhbmdlJywgdGhpcy5faGFuZGxlckZpbHRlck9uQ2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5vbignY2xpY2snLCAnLlhncmlkLXJlc2V0JywgdGhpcy5faGFuZGxlckZpbHRlck9uUmVzZXQuYmluZCh0aGlzKSk7XG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLm9uKCdjbGljaycsICcuWGdyaWQtb25TdWJtaXQnLCB0aGlzLl9oYW5kbGVyRmlsdGVyT25TdWJtaXQuYmluZCh0aGlzKSk7XG5cdH07XG5cblx0cHJpdmF0ZSBfaGFuZGxlckZpbHRlck9uU3VibWl0KGU6IEpRdWVyeUV2ZW50T2JqZWN0KSB7XG5cdFx0JChlLmN1cnJlbnRUYXJnZXQpLmJsdXIoKTtcblx0XHR0aGlzLnRyaWdnZXJUb29sYmFyKCk7XG5cdH07XG5cblx0cHJpdmF0ZSBfaGFuZGxlckZpbHRlck9uUmVzZXQoZTogSlF1ZXJ5RXZlbnRPYmplY3QpIHtcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xuXHRcdGNvbnN0ICRzZWxsID0gJChlLmN1cnJlbnRUYXJnZXQpLmJsdXIoKS5wYXJlbnRzKCcuWGdyaWQtZmlsdGVyLWNlbGw6ZXEoMCknKTtcblx0XHRjb25zdCBhbGlhcyA9ICRzZWxsLmF0dHIoJ2RhdGEtYWxpYXMnKTtcblx0XHRjb25zdCAkY29udHJvbCA9ICRzZWxsLmZpbmQoJy5YZ3JpZC1maWx0ZXInKTtcblx0XHRjb25zdCBjb2xNb2RlbCA9IHN0b3JhZ2UuY29sTW9kZWxzRGljdGlvbmFyeVthbGlhc107XG5cblx0XHRpZiAoY29sTW9kZWwpIHtcblx0XHRcdGlmIChjb2xNb2RlbC5maWx0ZXJUb29sYmFyU2V0dGluZ3MuZm9ybUNvbnRyb2xUeXBlID09PSAnc2VsZWN0Jykge1xuXHRcdFx0XHQkY29udHJvbC52YWwoW10pLmVhY2goKGk6IG51bWJlciwgc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdHNlbGVjdC5zZWxlY3RlZEluZGV4ID0gLTE7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JGNvbnRyb2wudmFsKCcnKTtcblx0XHRcdH1cblx0XHRcdHRoaXMudHJpZ2dlclRvb2xiYXIoKTtcblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSBfaGFuZGxlckZpbHRlck9uQ2hhbmdlKCkge1xuXHRcdHRoaXMudHJpZ2dlclRvb2xiYXIoKTtcblx0fTtcblxuXHRwcml2YXRlIF9oYW5kbGVyRmlsdGVyT25LZXlkb3duKGU6IEpRdWVyeUV2ZW50T2JqZWN0KSB7XG5cdFx0Y29uc3Qga2V5ID0gZS53aGljaDtcblxuXHRcdHN3aXRjaCAoa2V5KSB7XG5cdFx0XHRjYXNlIDEzOlxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRjYXNlIDk6XG5cdFx0XHRjYXNlIDE2OlxuXHRcdFx0Y2FzZSAzNzpcblx0XHRcdGNhc2UgMzg6XG5cdFx0XHRjYXNlIDM5OlxuXHRcdFx0Y2FzZSA0MDpcblx0XHRcdGNhc2UgMjc6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0aWYgKHRoaXMudGltZW91dE9uS2V5ZG93bikge1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRPbktleWRvd24pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudGltZW91dE9uS2V5ZG93biA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMudHJpZ2dlclRvb2xiYXIoKTtcblx0XHRcdFx0fSwgNTAwKTtcblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSBfaGFuZGxlckZpbHRlck9uRW50ZXIoZTogSlF1ZXJ5RXZlbnRPYmplY3QpIHtcblx0XHRjb25zdCBrZXkgPSBlLmNoYXJDb2RlIHx8IGUua2V5Q29kZSB8fCAwO1xuXHRcdGlmIChrZXkgPT09IDEzKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLnRyaWdnZXJUb29sYmFyKCk7XG5cdFx0fVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJUb29sYmFyTW9kZWwgaW1wbGVtZW50cyBJRmlsdGVyVG9vbGJhck1vZGVsIHtcblx0Zm9ybUNvbnRyb2xUeXBlID0gJ3RleHQnO1xuXHRzZWxlY3RPcHRpb25zID0gW107XG5cdHBsYWNlaG9sZGVyID0gJyc7XG5cdG9uRW50ZXIgPSB0cnVlO1xuXHRvbktleWRvd24gPSBmYWxzZTtcblx0b25DaGFuZ2UgPSBmYWxzZTtcblx0YWxsb3dSZXNldEJ1dHRvbiA9IHRydWU7XG5cdGFsbG93U3VibWl0QnV0dG9uID0gdHJ1ZTtcblx0dHJhbnNmb3JtRGF0YT86IEZ1bmN0aW9uOyBcblxuXHRjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuXHRcdCQuZXh0ZW5kKHRoaXMsIHNldHRpbmdzKTtcblx0XHRpZiAoIXRoaXMudHJhbnNmb3JtRGF0YSkge1xuXHRcdFx0aWYgKHRoaXMuZm9ybUNvbnRyb2xUeXBlID09PSAnc2VsZWN0Jykge1xuXHRcdFx0XHR0aGlzLnRyYW5zZm9ybURhdGEgPSAoKGRhdGEpID0+IHtcblx0XHRcdFx0XHRsZXQgcmVzdWx0O1xuXHRcdFx0XHRcdGNvbnN0IHNlbGVjdE9wdGlvbnMgPSB0aGlzLnNlbGVjdE9wdGlvbnM7XG5cdFx0XHRcdFx0aWYgKCQuaXNBcnJheShkYXRhKSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gW107XG5cdFx0XHRcdFx0XHRkYXRhLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBpdGVtID0gc2VsZWN0T3B0aW9uc1trZXldO1xuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbSkge1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW0udmFsdWUpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGtleSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0aWYgKCFyZXN1bHQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoc2VsZWN0T3B0aW9uc1tkYXRhXSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VsZWN0T3B0aW9uc1tkYXRhXS52YWx1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml4ZWRIZWFkZXIge1xuXHRzdG9yYWdlOiBJU3RvcmFnZTtcblx0cHJvcGVydGllcyA9IHtcblx0XHQkY2VsbFdpZHRoUmVjaXBpZW50czogbnVsbCxcblx0XHQkY2VsbFdpZHRoTGlzdGVuZXJzOiBudWxsLFxuXHR9O1xuXG5cdGNvbnN0cnVjdG9yKHN0b3JhZ2UpIHtcblx0XHR0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xuXHRcdHRoaXMuX2V4ZWMoKTtcblx0fVxuXG5cdHJlc2l6ZSgpIHtcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xuXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLmZpbmQoJy5YZ3JpZC10aGVhZC13IGlmcmFtZScpLmVhY2goKGksIGVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0ICRpZnJhbWUgPSAkKGVsZW1lbnQpO1xuXHRcdFx0Y29uc3Qgd2lkdGggPSAkaWZyYW1lLndpZHRoKCk7XG5cdFx0XHRjb25zdCBhbGlhcyA9ICRpZnJhbWUuYXR0cignZGF0YS1hbGlhcycpO1xuXG5cdFx0XHR0aGlzLl9oYW5kbGVyUmVzaXplZENlbGxXaWR0aCh3aWR0aCwgYWxpYXMpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHByaXZhdGUgX2V4ZWMoKSB7XG5cdFx0dGhpcy5fYnVpbGQoKTtcblx0XHR0aGlzLl9iaW5kKCk7XG5cdH07XG5cblx0cHJpdmF0ZSBfYnVpbGQoKSB7XG5cdFx0Y29uc3QgeyBzdG9yYWdlLCBwcm9wZXJ0aWVzIH0gPSB0aGlzO1xuXHRcdGNvbnN0IGNlbGxXaWR0aExpc3RlbmVycyA9IFtdO1xuXG5cdFx0cHJvcGVydGllcy4kY2VsbFdpZHRoUmVjaXBpZW50cyA9IHN0b3JhZ2UuJGdyaWRUYWJsZS5maW5kKCcuWGdyaWQtdGJvZHktdyBpJyk7XG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLmZpbmQoJy5YZ3JpZC10aGVhZC13IHRkJykuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0Y29uc3QgaWZyYW1lOiBIVE1MRWxlbWVudCA9ICQodGhpcykuZmluZCgnaWZyYW1lJylbMF07XG5cblx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sJywgU3RyaW5nKGkpKTtcblx0XHRcdGNlbGxXaWR0aExpc3RlbmVycy5wdXNoKGlmcmFtZSk7XG5cdFx0fSk7XG5cdFx0cHJvcGVydGllcy4kY2VsbFdpZHRoTGlzdGVuZXJzID0gJChjZWxsV2lkdGhMaXN0ZW5lcnMpO1xuXHR9O1xuXG5cdHByaXZhdGUgX2JpbmQoKSB7XG5cdFx0Y29uc3QgeyBwcm9wZXJ0aWVzIH0gPSB0aGlzO1xuXG5cdFx0cHJvcGVydGllcy4kY2VsbFdpZHRoTGlzdGVuZXJzLmVhY2goKGksIGlmcmFtZSkgPT4ge1xuXHRcdFx0Y29uc3QgJGlmcmFtZSA9ICQoaWZyYW1lKTtcblxuXHRcdFx0dGhpcy5faGFuZGxlclJlc2l6ZWRDZWxsV2lkdGgoJGlmcmFtZS53aWR0aCgpLCAkaWZyYW1lLmF0dHIoJ2RhdGEtYWxpYXMnKSk7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0JChpZnJhbWUuY29udGVudFdpbmRvdykub24oJ3Jlc2l6ZScsICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLl9oYW5kbGVyUmVzaXplZENlbGxXaWR0aCgkaWZyYW1lLndpZHRoKCksICRpZnJhbWUuYXR0cignZGF0YS1hbGlhcycpKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LCAxMDApO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHByaXZhdGUgX2hhbmRsZXJSZXNpemVkQ2VsbFdpZHRoKHdpZHRoOiBudW1iZXIsIGFsaWFzOiBzdHJpbmcpIHtcblx0XHRjb25zdCB7IHByb3BlcnRpZXMgfSA9IHRoaXM7XG5cdFx0Y29uc3QgJGl0ZW0gPSBwcm9wZXJ0aWVzLiRjZWxsV2lkdGhSZWNpcGllbnRzLmZpbHRlcignW2RhdGEtYWxpYXM9XCInICsgYWxpYXMgKyAnXCJdJyk7XG5cblx0XHQkaXRlbS53aWR0aCh3aWR0aCk7XG5cdFx0JGl0ZW0ucGFyZW50KCkud2lkdGgod2lkdGgpO1xuXHR9O1xufVxuIiwiaW1wb3J0IHBpcGVzIGZyb20gJy4vUGlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhbFNvcnRSdWxlTW9kZWwgaW1wbGVtZW50cyBJTG9jYWxTb3J0UnVsZSB7XG5cdGJ5OiBzdHJpbmc7XG5cdG9yZGVyOiBzdHJpbmc7XG5cdGNvbE1vZGVsPzogSUNvbE1vZGVsO1xuXHRnZXQ6IEZ1bmN0aW9uID0gcGlwZXMuZ2V0QnlUeXBlKCk7XG5cblx0Y29uc3RydWN0b3Iob3JkZXI6IHN0cmluZywgYnk6IHN0cmluZywgY29sTW9kZWw6IG51bGwgfCBJQ29sTW9kZWwpIHtcblx0XHR0aGlzLm9yZGVyID0gb3JkZXI7XG5cdFx0dGhpcy5ieSA9IGJ5O1xuXG5cdFx0aWYgKGNvbE1vZGVsKSB7XG5cdFx0XHR0aGlzLmNvbE1vZGVsID0gY29sTW9kZWw7XG5cdFx0XHR0aGlzLmdldCA9IGNvbE1vZGVsLnNvcnRGb3JtYXR0ZXI7XG5cdFx0fVxuXHR9XG59XG4iLCJjbGFzcyBPcGVyYXRvcnMge1xuXHRlcSA9IHRoaXMuZXF1YWxzO1xuXHRuZSA9IHRoaXMubm90RXF1YWxzO1xuXHRsdCA9IHRoaXMubGVzcztcblx0bGUgPSB0aGlzLmxlc3NPckVxdWFscztcblx0Z3QgPSB0aGlzLmdyZWF0ZXI7XG5cdGdlID0gdGhpcy5ncmVhdGVyT3JFcXVhbHM7XG5cdGNuID0gdGhpcy5jb250YWlucztcblx0bmMgPSAoKC4uLmFyZykgPT4ge1xuXHRcdHJldHVybiAhdGhpcy5jb250YWlucy5hcHBseSh0aGlzLCBhcmcpO1xuXHR9KTtcblx0YncgPSB0aGlzLnN0YXJ0c1dpdGg7XG5cdGJuID0gKCguLi5hcmcpID0+IHtcblx0XHRyZXR1cm4gIXRoaXMuc3RhcnRzV2l0aC5hcHBseSh0aGlzLCBhcmcpO1xuXHR9KTtcblx0ZW4gPSAoKC4uLmFyZykgPT4ge1xuXHRcdHJldHVybiAhdGhpcy5lbmRzV2l0aC5hcHBseSh0aGlzLCBhcmcpO1xuXHR9KTtcblx0ZXcgPSB0aGlzLmVuZHNXaXRoO1xuXHRpbiA9IHRoaXMuaW5BcnJheTtcblx0bmkgPSAoKC4uLmFyZykgPT4ge1xuXHRcdHJldHVybiAhdGhpcy5pbkFycmF5LmFwcGx5KHRoaXMsIGFyZyk7XG5cdH0pO1xuXHRudSA9IHRoaXMuaXNOdWxsO1xuXHRubiA9ICgoLi4uYXJnKSA9PiB7XG5cdFx0cmV0dXJuICF0aGlzLmlzTnVsbC5hcHBseSh0aGlzLCBhcmcpO1xuXHR9KTtcblxuXHRlcXVhbHMoYSwgYikge1xuXHRcdHJldHVybiBhID09PSBiO1xuXHR9O1xuXHRub3RFcXVhbHMoYSwgYikge1xuXHRcdHJldHVybiBhICE9PSBiO1xuXHR9O1xuXHRpc051bGwoYSkge1xuXHRcdHJldHVybiBhID09PSBudWxsO1xuXHR9O1xuXHRncmVhdGVyKGEsIGIpIHtcblx0XHRyZXR1cm4gYSA+IGI7XG5cdH07XG5cdGxlc3MoYSwgYikge1xuXHRcdHJldHVybiBhIDwgYjtcblx0fTtcblx0Z3JlYXRlck9yRXF1YWxzKGEsIGIpIHtcblx0XHRyZXR1cm4gYSA+PSBiO1xuXHR9O1xuXHRsZXNzT3JFcXVhbHMoYSwgYikge1xuXHRcdHJldHVybiBhIDw9IGI7XG5cdH07XG5cdGluQXJyYXkoYXJyYXksIGIpIHtcblx0XHRyZXR1cm4gJC5pbkFycmF5KGIsIGFycmF5KSAhPT0gLTE7XG5cdH07XG5cdHN0YXJ0c1dpdGgoYSwgYiwgaW5zZW5zaXRpdmUpIHtcblx0XHRhID0gU3RyaW5nKGEpO1xuXHRcdGIgPSBTdHJpbmcoYik7XG5cdFx0aWYgKGluc2Vuc2l0aXZlKSB7XG5cdFx0XHRhID0gYS50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0YiA9IGIudG9VcHBlckNhc2UoKTtcblx0XHR9XG5cdFx0bGV0IGxlbmd0aCA9IGEubGVuZ3RoLFxuXHRcdFx0c3RyID0gYS5zdWJzdHIoMCwgbGVuZ3RoKTtcblx0XHRyZXR1cm4gc3RyID09PSBiXG5cdH07XG5cdGVuZHNXaXRoKGEsIGIsIGluc2Vuc2l0aXZlKSB7XG5cdFx0YSA9IFN0cmluZyhhKTtcblx0XHRiID0gU3RyaW5nKGIpO1xuXHRcdGlmIChpbnNlbnNpdGl2ZSkge1xuXHRcdFx0YSA9IGEudG9VcHBlckNhc2UoKTtcblx0XHRcdGIgPSBiLnRvVXBwZXJDYXNlKCk7XG5cdFx0fVxuXHRcdGxldCBsZW5ndGggPSBiLmxlbmd0aCAqIC0xLFxuXHRcdFx0c3RyID0gYS5zdWJzdHIobGVuZ3RoKTtcblx0XHRyZXR1cm4gc3RyID09PSBiO1xuXHR9O1xuXHRjb250YWlucyhhLCBiLCBpbnNlbnNpdGl2ZSkge1xuXHRcdGEgPSBTdHJpbmcoYSk7XG5cdFx0YiA9IFN0cmluZyhiKTtcblx0XHRpZiAoaW5zZW5zaXRpdmUpIHtcblx0XHRcdGEgPSBhLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRiID0gYi50b1VwcGVyQ2FzZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gYi5pbmRleE9mKGEpICE9PSAtMTtcblx0fTtcbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBPcGVyYXRvcnMoKTsiLCIndXNlIHN0cmljdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdpbmF0aW9uIHtcblx0b3B0aW9uczogSU9wdGlvbnM7XG5cdHZpZXdNb2RlbDogSVZpZXdNb2RlbDtcblx0c3RvcmFnZTogSVN0b3JhZ2U7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucywgc3RvcmFnZSwgdmlld01vZGVsLCApIHtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XG5cblx0XHR0aGlzLl9zdWJzY3JpYmUoKTtcblx0XHR0aGlzLnBhZ2UoKTtcblx0XHR0aGlzLnRvdGFsUGFnZXMoKTtcblx0XHR0aGlzLmV4ZWMoKTtcblx0fTtcblx0ZXhlYygpIHtcblx0XHR0aGlzLl9iaW5kKCk7XG5cdH07XG5cblx0cGFnZSgpIHtcblx0XHR0aGlzLnN0b3JhZ2UuJHBhZ2luYXRpb25Cb3guZmluZCgnLlhncmlkLWN1cnJlbnQtcGFnZScpLnZhbCh0aGlzLnZpZXdNb2RlbC5wYWdlKTtcblx0fTtcblxuXHR0b3RhbFBhZ2VzKCkge1xuXHRcdHRoaXMuc3RvcmFnZS4kcGFnaW5hdGlvbkJveC5maW5kKCcuWGdyaWQtdG90YWwtcGFnZXMnKS50ZXh0KHRoaXMudmlld01vZGVsLnRvdGFsUGFnZXMpO1xuXHR9O1xuXG5cdHByaXZhdGUgX3N1YnNjcmliZSgpIHtcblx0XHRjb25zdCB7IHZpZXdNb2RlbCB9ID0gdGhpcztcblxuXHRcdHZpZXdNb2RlbC5vbigncGFnZScsIHRoaXMucGFnZS5iaW5kKHRoaXMpKTtcblx0XHR2aWV3TW9kZWwub24oJ3RvdGFsUGFnZXMnLCB0aGlzLnRvdGFsUGFnZXMuYmluZCh0aGlzKSk7XG5cdH07XG5cblx0cHJpdmF0ZSBfYmluZCgpIHtcblx0XHRjb25zdCB7IHN0b3JhZ2UgfSA9IHRoaXM7XG5cblx0XHRzdG9yYWdlLiRwYWdpbmF0aW9uQm94Lm9uKCdjbGljay54Z3JpZCcsICcuWGdyaWQtZmlyc3QnLCB0aGlzLl9oYW5kbGVyRmlyc3QuYmluZCh0aGlzKSk7XG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveC5vbignY2xpY2sueGdyaWQnLCAnLlhncmlkLXByZXYnLCB0aGlzLl9oYW5kbGVyUHJldi5iaW5kKHRoaXMpKTtcblx0XHRzdG9yYWdlLiRwYWdpbmF0aW9uQm94Lm9uKCdjbGljay54Z3JpZCcsICcuWGdyaWQtbmV4dCcsIHRoaXMuX2hhbmRsZXJOZXh0LmJpbmQodGhpcykpO1xuXHRcdHN0b3JhZ2UuJHBhZ2luYXRpb25Cb3gub24oJ2NsaWNrLnhncmlkJywgJy5YZ3JpZC1sYXN0JywgdGhpcy5faGFuZGxlckxhc3QuYmluZCh0aGlzKSk7XG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveC5vbigna2V5cHJlc3MueGdyaWQnLCAnLlhncmlkLWN1cnJlbnQtcGFnZScsIHRoaXMuX2hhbmRsZXJHb1RvLmJpbmQodGhpcykpO1xuXHR9O1xuXG5cdHByaXZhdGUgX2hhbmRsZXJGaXJzdChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmICh0aGlzLnZpZXdNb2RlbC5wYWdlICE9PSAxKSB7XG5cdFx0XHR0aGlzLnZpZXdNb2RlbC5uZXdQYWdlID0gMTtcblx0XHR9XG5cdH07XG5cdHByaXZhdGUgX2hhbmRsZXJMYXN0KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aWYgKHRoaXMudmlld01vZGVsLnBhZ2UgIT09IHRoaXMudmlld01vZGVsLnRvdGFsUGFnZXMpIHtcblx0XHRcdHRoaXMudmlld01vZGVsLm5ld1BhZ2UgPSB0aGlzLnZpZXdNb2RlbC50b3RhbFBhZ2VzO1xuXHRcdH1cblx0fTtcblx0cHJpdmF0ZSBfaGFuZGxlck5leHQoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zdCBwYWdlID0gdGhpcy52aWV3TW9kZWwucGFnZSArIDE7XG5cdFx0aWYgKHBhZ2UgPD0gdGhpcy52aWV3TW9kZWwudG90YWxQYWdlcykge1xuXHRcdFx0dGhpcy52aWV3TW9kZWwubmV3UGFnZSA9IHBhZ2U7XG5cdFx0fVxuXHR9O1xuXHRwcml2YXRlIF9oYW5kbGVyUHJldihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IHBhZ2UgPSB0aGlzLnZpZXdNb2RlbC5wYWdlIC0gMTtcblx0XHRpZiAocGFnZSA+IDApIHtcblx0XHRcdHRoaXMudmlld01vZGVsLm5ld1BhZ2UgPSBwYWdlO1xuXHRcdH1cblx0fTtcblx0cHJpdmF0ZSBfaGFuZGxlckdvVG8oZSkge1xuXHRcdGlmIChlLndoaWNoID09PSAxMykge1xuXHRcdFx0bGV0IHBhZ2U6IG51bWJlciA9ICskKGUuY3VycmVudFRhcmdldCkudmFsKCk7XG5cdFx0XHRpZiAoIWlzTmFOKHBhZ2UpKSB7XG5cdFx0XHRcdGlmIChwYWdlIDwgMSkge1xuXHRcdFx0XHRcdHBhZ2UgPSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHBhZ2UgPiB0aGlzLnZpZXdNb2RlbC50b3RhbFBhZ2VzKSB7XG5cdFx0XHRcdFx0cGFnZSA9IHRoaXMudmlld01vZGVsLnRvdGFsUGFnZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy52aWV3TW9kZWwubmV3UGFnZSA9IHBhZ2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnZpZXdNb2RlbC5wYWdlID0gdGhpcy52aWV3TW9kZWwubmV3UGFnZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG4iLCJjbGFzcyBQaXBlcyBpbXBsZW1lbnRzIElQaXBlcyB7XG5cdGZsb2F0KHZhbCl7cmV0dXJuIHZhbH1cblx0aW50KHZhbCl7cmV0dXJuIHZhbH1cblx0bnVtYmVyKHZhbCl7cmV0dXJuIHZhbH1cblxuXHRpc05vdFplcm8gPSB7XG5cdFx0dW5kZWZpbmVkOiAxLFxuXHRcdCcnOiAxLFxuXHRcdG51bGw6IDEsXG5cdFx0ZmFsc2U6IDEsXG5cdFx0dHJ1ZTogMSxcblx0fTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmludGVnZXIgPSB0aGlzLmludGVnZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmludCA9IHRoaXMuaW50ZWdlcjtcblx0XHR0aGlzLm51bWVyaWMgPSB0aGlzLm51bWVyaWMuYmluZCh0aGlzKTtcblx0XHR0aGlzLmZsb2F0ID0gdGhpcy5udW1lcmljO1xuXHRcdHRoaXMubnVtYmVyID0gdGhpcy5udW1lcmljO1xuXHRcdHRoaXMuc3RyaW5nID0gdGhpcy5zdHJpbmcuYmluZCh0aGlzKTtcblx0fTtcblx0XG5cdGdldEJ5VHlwZSh0eXBlPzogVFBpcGVzKTogRnVuY3Rpb24ge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSAnaW50Jzpcblx0XHRcdGNhc2UgJ2ludGVnZXInOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbnRlZ2VyO1xuXHRcdFx0Y2FzZSAnZmxvYXQnOlxuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdGNhc2UgJ251bWVyaWMnOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5udW1lcmljO1xuXHRcdFx0Y2FzZSAnYm9vbGVhbic6XG5cdFx0XHRcdHJldHVybiB0aGlzLmJvb2xlYW47XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zdHJpbmc7XG5cdFx0fVxuXHR9XG5cblx0c3RyaW5nICh2YWx1ZSwgcm93RGF0YSwgY29sTW9kZWwpIHtcblx0XHRpZiAoY29sTW9kZWwuaW5zZW5zaXRpdmUpIHtcblx0XHRcdHJldHVybiB0aGlzLmluc2Vuc2l0aXZldGV4dC5jYWxsKHRoaXMsIHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2Vuc2l0aXZldGV4dC5jYWxsKHRoaXMsIHZhbHVlKTtcblx0XHR9XG5cdH07XG5cblx0Ym9vbGVhbih2YWx1ZTogYW55KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEhdmFsdWU7XG5cdH07XG5cblx0bnVtZXJpYyh2YWx1ZTogYW55KTogbnVtYmVyIHtcblx0XHRsZXQgcmVzdWx0OiBudW1iZXI7XG5cdFx0aWYgKHRoaXMuaXNOb3RaZXJvW3ZhbHVlXSkge1xuXHRcdFx0cmVzdWx0ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoaXNOYU4odmFsdWUpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHBhcnNlRmxvYXQoU3RyaW5nKHZhbHVlKS5yZXBsYWNlKC8sL2csICcuJykucmVwbGFjZSgvW1xcJCVdL2csICcnKSk7XG5cdFx0XHRcdHJlc3VsdCA9IGlzTmFOKHJlc3VsdCkgPyBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgOiByZXN1bHQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQgPSArdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0aW50ZWdlcih2YWx1ZSk6IG51bWJlciB7XG5cdFx0bGV0IHJlc3VsdDtcblx0XHRpZiAodGhpcy5pc05vdFplcm9bdmFsdWVdKSB7XG5cdFx0XHRyZXN1bHQgPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghaXNOYU4odmFsdWUpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvW1xcJCwlXS9nLCAnJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXN1bHQgPSBwYXJzZUludChyZXN1bHQpO1xuXHRcdFx0cmVzdWx0ID0gaXNOYU4ocmVzdWx0KSA/IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSA6IHJlc3VsdDtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHRpbnNlbnNpdGl2ZXRleHQodmFsdWUpOiBzdHJpbmcge1xuXHRcdHJldHVybiAodmFsdWUgPyAkLnRyaW0oU3RyaW5nKHZhbHVlKSkgOiBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXHR9O1xuXG5cdHNlbnNpdGl2ZXRleHQodmFsdWUpOiBzdHJpbmcge1xuXHRcdHJldHVybiB2YWx1ZSA/ICQudHJpbShTdHJpbmcodmFsdWUpKSA6IFwiXCI7XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQaXBlcygpOyIsImltcG9ydCBDb2xNb2RlbCBmcm9tICcuL0NvbE1vZGVsJztcbmltcG9ydCBTb3J0UnVsZSBmcm9tICcuL1NvcnRSdWxlJztcblxuY2xhc3MgUHJvY2Vzc1NldHRpbmdzIHtcblx0dmlld01vZGVsOiBJVmlld01vZGVsO1xuXHRzdG9yYWdlOiBJU3RvcmFnZTtcblx0cHJvcGVydGllczogSVByb2Nlc3NTZXR0aW5nc1Byb3BlcnRpZXM7XG5cdG9wdGlvbnM6IElQcm9jZXNzU2V0dGluZ3NPcHRpb25zXG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucywgc3RvcmFnZSwgdmlld01vZGVsKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xuXHRcdFx0Y29sTW9kZWxzOiBbXSxcblx0XHRcdGZpbHRlclRvb2xiYXI6IGZhbHNlXG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnByb3BlcnRpZXMgPSB7XG5cdFx0XHRzY3JvbGxiYXJXaWR0aDogbnVsbFxuXHRcdH1cblxuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XG5cdFx0dGhpcy5fZXhlYygpO1xuXHR9O1xuXG5cdF9nZXRTY3JvbGxiYXJXaWR0aCgpIHtcblx0XHRsZXQgZGl2LCB3aWR0aDtcblx0XHRpZiAodGhpcy5wcm9wZXJ0aWVzLnNjcm9sbGJhcldpZHRoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wZXJ0aWVzLnNjcm9sbGJhcldpZHRoO1xuXHRcdH1cblxuXHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGRpdi5pbm5lckhUTUwgPSAnPGRpdiBzdHlsZT1cIndpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotNTBweDt0b3A6LTUwcHg7b3ZlcmZsb3c6YXV0bztcIj48ZGl2IHN0eWxlPVwid2lkdGg6MXB4O2hlaWdodDoxMDBweDtcIj48L2Rpdj48L2Rpdj4nO1xuXHRcdGRpdiA9IGRpdi5maXJzdENoaWxkO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcblx0XHR3aWR0aCA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aDtcblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XG5cdFx0dGhpcy5wcm9wZXJ0aWVzLnNjcm9sbGJhcldpZHRoID0gd2lkdGg7XG5cdFx0cmV0dXJuIHdpZHRoO1xuXHR9O1xuXG5cdF9jb2x1bW5Nb2RlbCgpIHtcblx0XHRjb25zdCB7IHN0b3JhZ2UsIG9wdGlvbnMgfSA9IHRoaXM7XG5cdFx0Y29uc3QgY29sTW9kZWxzID0gW107XG5cdFx0Y29uc3QgYWxpYXNlcyA9IHt9O1xuXHRcdGNvbnN0IGNvbE1vZGVsc0RpY3Rpb25hcnkgPSB7fTtcblxuXHRcdCQuZWFjaChvcHRpb25zLmNvbE1vZGVscywgKGksIG1vZGVsKSA9PiB7XG5cdFx0XHRjb25zdCBjb2xNb2RlbCA9IG5ldyBDb2xNb2RlbChtb2RlbCwgaSk7XG5cblx0XHRcdGlmICghYWxpYXNlc1tjb2xNb2RlbC5hbGlhc10pIHtcblx0XHRcdFx0YWxpYXNlc1tjb2xNb2RlbC5hbGlhc10gPSAxO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cge1xuXHRcdFx0XHRcdHZhbHVlOiB7XG5cdFx0XHRcdFx0XHRpOiBpLFxuXHRcdFx0XHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkobW9kZWwpXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRtZXNzYWdlOiAnYWxpYXMgaXMgbm90IHVuaXF1ZScsXG5cdFx0XHRcdFx0bmFtZTogJ0Vycm9yOiBjb2xNb2RlbCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y29sTW9kZWxzRGljdGlvbmFyeVtjb2xNb2RlbC5hbGlhc10gPSBjb2xNb2RlbDtcblx0XHRcdGNvbE1vZGVscy5wdXNoKGNvbE1vZGVsKTtcblx0XHR9KTtcblxuXHRcdHN0b3JhZ2UuY29sTW9kZWxzID0gY29sTW9kZWxzO1xuXHRcdHN0b3JhZ2UuY29sTW9kZWxzRGljdGlvbmFyeSA9IGNvbE1vZGVsc0RpY3Rpb25hcnk7XG5cdH07XG5cblx0X2V4ZWMoKSB7XG5cdFx0Y29uc3QgeyBzdG9yYWdlIH0gPSB0aGlzO1xuXG5cdFx0dGhpcy5fY29sdW1uTW9kZWwoKTtcblx0XHRzdG9yYWdlLnNjcm9sbGJhcldpZHRoID0gdGhpcy5fZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcblx0XHR0aGlzLl9wcm9jZXNzU29ydGluZygpO1xuXHR9O1xuXG5cdF9wcm9jZXNzU29ydGluZygpIHtcblx0XHRjb25zdCB7dmlld01vZGVsLCBvcHRpb25zfSA9IHRoaXM7XG5cdFx0bGV0IHNvcnRCeSA9IG9wdGlvbnMuc29ydEJ5LFxuXHRcdFx0ZGF0YSA9IFtdO1xuXG5cdFx0aWYgKG9wdGlvbnMuZmlsdGVyVG9vbGJhcikge1xuXHRcdFx0dmlld01vZGVsLmZpbHRlclRvb2xiYXIgPSB0cnVlO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5yb3dzKSB7XG5cdFx0XHR2aWV3TW9kZWwucm93cyA9IG9wdGlvbnMucm93cztcblx0XHR9XG5cdFx0aWYgKHNvcnRCeSAmJiB0eXBlb2YgKHNvcnRCeSkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRjb25zdCBzb3J0QnlJdGVtcyA9IHNvcnRCeS5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpLnNwbGl0KCcsJyk7XG5cdFx0XHRpZiAoc29ydEJ5SXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRcdHNvcnRCeUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcblx0XHRcdFx0XHRjb25zdCBzb3J0UnVsZSA9IGl0ZW0udHJpbSgpLnNwbGl0KCcgJyk7XG5cdFx0XHRcdFx0Y29uc3QgYnkgPSBzb3J0UnVsZVswXTtcblxuXHRcdFx0XHRcdGlmICh0eXBlb2YgKGJ5KSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdGxldCBydWxlO1xuXG5cdFx0XHRcdFx0XHRpZiAoU3RyaW5nKHNvcnRSdWxlWzFdKS50b1VwcGVyQ2FzZSgpID09PSAnREVTQycpIHtcblx0XHRcdFx0XHRcdFx0cnVsZSA9IG5ldyBTb3J0UnVsZShieSwgJ0RFU0MnKTtcblxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cnVsZSA9IG5ldyBTb3J0UnVsZShieSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRkYXRhLnB1c2gocnVsZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCQuaXNBcnJheShzb3J0QnkpICYmIHNvcnRCeS5sZW5ndGgpIHtcblx0XHRcdHNvcnRCeS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHsgYnksIG9yZGVyIH0gPSBpdGVtO1xuXHRcdFx0XHRsZXQgcnVsZTtcblxuXHRcdFx0XHRpZiAoYnkpIHtcblx0XHRcdFx0XHRpZiAoU3RyaW5nKG9yZGVyKS50b1VwcGVyQ2FzZSgpICE9PSAnREVTQycpIHtcblx0XHRcdFx0XHRcdHJ1bGUgPSBuZXcgU29ydFJ1bGUoYnkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRydWxlID0gbmV3IFNvcnRSdWxlKGJ5LCAnREVTQycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkYXRhLnB1c2gocnVsZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAoZGF0YS5sZW5ndGgpIHtcblx0XHRcdHZpZXdNb2RlbC5zb3J0QnkgPSBkYXRhO1xuXHRcdH1cblx0fTtcbn1cbmV4cG9ydCBkZWZhdWx0IFByb2Nlc3NTZXR0aW5nczsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVyeU1vZGVsIGltcGxlbWVudHMgSVF1ZXJ5TW9kZWwge1xuXHRmaWx0ZXIgPSBbXTtcblx0c29ydCA9IFtdO1xuXHRyb3dzID0gMDtcblx0cGFnZSA9IDE7XG5cblx0Y29uc3RydWN0b3IoZGF0YSkge1xuXHRcdCQuZXh0ZW5kKHRoaXMsIGRhdGEpO1xuXHR9XG59XG4iLCJjbGFzcyBTb3J0IHtcblx0ZXhlYyhkYXRhID0gW10sIHJ1bGVzOiBJTG9jYWxTb3J0UnVsZVtdID0gW10pIHtcblx0XHRsZXQgc291cmNlO1xuXHRcdGlmICghZGF0YS5sZW5ndGggfHwgIXJ1bGVzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fVxuXHRcdHNvdXJjZSA9IHRoaXMuX2dldFNvdXJjZShkYXRhLCBydWxlcyk7XG5cdFx0c291cmNlLnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSAwO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDAsIGogPSBydWxlcy5sZW5ndGg7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQga2V5ID0gcnVsZXNbaV0uYnk7XG5cdFx0XHRcdGlmIChydWxlc1tpXS5vcmRlciA9PT0gJ0FTQycpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSB0aGlzLkFTQyhhLmZvcm1hdHRlZFtrZXldLCBiLmZvcm1hdHRlZFtrZXldKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHRoaXMuREVTQyhhLmZvcm1hdHRlZFtrZXldLCBiLmZvcm1hdHRlZFtrZXldKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZXN1bHQgIT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0pO1xuXHRcdHJldHVybiBzb3VyY2UubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRyZXR1cm4gaXRlbS5fO1xuXHRcdH0pO1xuXHR9XG5cblx0QVNDKGEsIGIpIHtcblx0XHRpZiAoYSA8IGIpIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cdFx0aWYgKGEgPiBiKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9XG5cdFx0cmV0dXJuIDA7XG5cdH07XG5cblx0REVTQyhhLCBiKSB7XG5cdFx0aWYgKGEgPCBiKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9XG5cdFx0aWYgKGEgPiBiKSB7XG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fVxuXHRcdHJldHVybiAwO1xuXHR9O1xuXHRfZ2V0U291cmNlKGRhdGEsIHJ1bGVzKSB7XG5cdFx0cmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRsZXQgZm9ybWF0dGVkID0ge307XG5cdFx0XHRydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG5cdFx0XHRcdGZvcm1hdHRlZFtydWxlLmJ5XSA9IHJ1bGUuZ2V0KGl0ZW1bcnVsZS5ieV0sIGl0ZW0sIHJ1bGUuY29sTW9kZWwsIGRhdGEpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRfOiBpdGVtLFxuXHRcdFx0XHRmb3JtYXR0ZWQsXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTb3J0KCk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ydFJ1bGUgaW1wbGVtZW50cyBJU29ydFJ1bGUge1xuXHRieTogc3RyaW5nO1xuXHRvcmRlcjogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGJ5OiBzdHJpbmcsIG9yZGVyID0gJ0FTQycpIHtcblx0XHR0aGlzLmJ5ID0gYnk7XG5cdFx0dGhpcy5vcmRlciA9IG9yZGVyO1xuXHR9XG5cblx0dHJpZ2dlck9yZGVyKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLm9yZGVyID09PSAnQVNDJykge1xuXHRcdFx0dGhpcy5vcmRlciA9ICdERVNDJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vcmRlciA9ICdBU0MnO1xuXHRcdH1cblx0fTtcbn07IiwiaW1wb3J0IFNvcnRSdWxlIGZyb20gJy4vU29ydFJ1bGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3J0aW5nIHtcblx0c3RvcmFnZTogSVN0b3JhZ2U7XG5cdHZpZXdNb2RlbDogSVZpZXdNb2RlbDtcblx0b3B0aW9uczogSU9wdGlvbnM7XG5cblx0Y29uc3RydWN0b3Ioc3RvcmFnZSwgdmlld01vZGVsLCBvcHRpb25zKSB7XG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcblx0XHR0aGlzLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG5cdFx0dGhpcy5iaW5kKCk7XG5cdH07XG5cblx0c29ydEJ5QWxpYXMoYWxpYXM6IHN0cmluZykge1xuXHRcdGNvbnN0IHsgc3RvcmFnZSwgdmlld01vZGVsIH0gPSB0aGlzO1xuXHRcdGNvbnN0IGNvbE1vZGVsID0gc3RvcmFnZS5jb2xNb2RlbHNEaWN0aW9uYXJ5W2FsaWFzXTtcblx0XHRsZXQgc29ydEJ5OiBJU29ydFJ1bGVbXTtcblxuXHRcdGlmIChjb2xNb2RlbCkge1xuXHRcdFx0c29ydEJ5ID0gdmlld01vZGVsLnNvcnRCeTtcblx0XHRcdGxldCBpID0gc29ydEJ5Lmxlbmd0aDtcblx0XHRcdGxldCBzb3J0UnVsZTogSVNvcnRSdWxlO1xuXG5cdFx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRcdGlmIChzb3J0QnlbaV0uYnkgPT09IGFsaWFzKSB7XG5cdFx0XHRcdFx0c29ydFJ1bGUgPSBzb3J0Qnkuc3BsaWNlKGksIDEpWzBdO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICghc29ydFJ1bGUpIHtcblx0XHRcdFx0c29ydFJ1bGUgPSBuZXcgU29ydFJ1bGUoYWxpYXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c29ydFJ1bGUudHJpZ2dlck9yZGVyKCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLm9wdGlvbnMubXVsdGlTb3J0aW5nKSB7XG5cdFx0XHRcdHNvcnRCeS51bnNoaWZ0KHNvcnRSdWxlKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c29ydEJ5ID0gW3NvcnRSdWxlXVxuXHRcdFx0fVxuXHRcdFx0dmlld01vZGVsLnNvcnRCeSA9IHNvcnRCeTtcblx0XHR9XG5cdH07XG5cblx0YmluZCgpOiB2b2lkIHtcblx0XHRjb25zdCAkaGVhZFRhYmxlID0gdGhpcy5zdG9yYWdlLiRoZWFkVGFibGU7XG5cblx0XHR0aGlzLl9vZmYoKTtcblx0XHQkaGVhZFRhYmxlLm9uKCdjbGljay5YZ3JpZCcsICcuWGdyaWQtdGhlYWQtbGFiZWwuc29ydGFibGUnLCB0aGlzLl9oYW5kbGVyU29ydENvbHVtbi5iaW5kKHRoaXMpKTtcblx0fTtcblxuXHRwcml2YXRlIF9vZmYoKTogdm9pZCB7XG5cdFx0dGhpcy5zdG9yYWdlLiRoZWFkVGFibGUub2ZmKCcuWGdyaWQnKTtcblx0fTtcblxuXHRwcml2YXRlIF9oYW5kbGVyU29ydENvbHVtbihlOiBKUXVlcnlFdmVudE9iamVjdCk6IHZvaWQge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zdCAkaXRlbSA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblx0XHRjb25zdCBhbGlhcyA9ICRpdGVtLmF0dHIoJ2RhdGEtYWxpYXMnKTtcblx0XHRjb25zdCBjb2xtb2RlbCA9IHRoaXMuc3RvcmFnZS5jb2xNb2RlbHNEaWN0aW9uYXJ5W2FsaWFzXTtcblxuXHRcdCRpdGVtLmJsdXIoKTtcblx0XHRpZiAoY29sbW9kZWwgJiYgY29sbW9kZWwuc29ydGFibGUpIHtcblx0XHRcdHRoaXMuc29ydEJ5QWxpYXMoYWxpYXMpO1xuXHRcdH1cblx0fTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIGltcGxlbWVudHMgSVN0b3JhZ2Uge1xuXHRwcml2YXRlIF9tb2RlbDogSVN0b3JhZ2VNb2RlbDtcblx0cHJpdmF0ZSBfc3Vic2NyaWJlcnM6IHsgW2tleTogc3RyaW5nXTogRnVuY3Rpb25bXSB9ID0ge307XG5cblx0Y29uc3RydWN0b3IobW9kZWwpIHtcblx0XHR0aGlzLl9tb2RlbCA9ICQuZXh0ZW5kKHtcblx0XHRcdCRib3g6IG51bGwsXG5cdFx0XHQkaGVhZFRhYmxlOiBudWxsLFxuXHRcdFx0JGdyaWRUYWJsZTogbnVsbCxcblx0XHRcdCRoZWFkTGFiZWxzOiBudWxsLFxuXHRcdFx0JHBhZ2luYXRpb25Cb3g6IG51bGwsXG5cdFx0XHQkZmlsdGVyVG9vbGJhckl0ZW1zOiBudWxsLFxuXHRcdFx0cXVlcnk6IG51bGwsXG5cdFx0XHRzY3JvbGxiYXJXaWR0aDogMCxcblx0XHRcdGNvbE1vZGVsczogW10sXG5cdFx0XHRjb2xNb2RlbHNEaWN0aW9uYXJ5OiB7fSxcblx0XHRcdGZpbHRlcjogbnVsbCxcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0cHJvY2Vzc2VkRGF0YTogW11cblx0XHR9LCBtb2RlbCk7XG5cdH1cblxuXHRnZXQgJGJveCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuJGJveDtcblx0fVxuXG5cdGdldCAkaGVhZFRhYmxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kaGVhZFRhYmxlO1xuXHR9O1xuXHRzZXQgJGhlYWRUYWJsZSh2YWx1ZTogSlF1ZXJ5PEhUTUxFbGVtZW50Pikge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mICQpIHtcblx0XHRcdHRoaXMuX21vZGVsLiRoZWFkVGFibGUgPSB2YWx1ZTtcblx0XHRcdHRoaXMubm90aWZ5KCckaGVhZFRhYmxlJywgdGhpcyk7XG5cdFx0fVxuXHR9O1xuXG5cdGdldCAkZ3JpZFRhYmxlKCkge1xuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kZ3JpZFRhYmxlO1xuXHR9O1xuXHRzZXQgJGdyaWRUYWJsZSh2YWx1ZTogSlF1ZXJ5PEhUTUxFbGVtZW50Pikge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mICQpIHtcblx0XHRcdHRoaXMuX21vZGVsLiRncmlkVGFibGUgPSB2YWx1ZTtcblx0XHRcdHRoaXMubm90aWZ5KCckZ3JpZFRhYmxlJywgdGhpcyk7XG5cdFx0fVxuXHR9O1xuXG5cdGdldCAkaGVhZExhYmVscygpIHtcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuJGhlYWRMYWJlbHM7XG5cdH07XG5cdHNldCAkaGVhZExhYmVscyh2YWx1ZTogSlF1ZXJ5PEhUTUxFbGVtZW50Pikge1xuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mICQpIHtcblx0XHRcdHRoaXMuX21vZGVsLiRoZWFkTGFiZWxzID0gdmFsdWU7XG5cdFx0XHR0aGlzLm5vdGlmeSgnJGhlYWRMYWJlbHMnLCB0aGlzKTtcblx0XHR9XG5cdH07XG5cblx0Z2V0ICRwYWdpbmF0aW9uQm94KCkge1xuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kcGFnaW5hdGlvbkJveDtcblx0fTtcblx0c2V0ICRwYWdpbmF0aW9uQm94KHZhbHVlOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgJCkge1xuXHRcdFx0dGhpcy5fbW9kZWwuJHBhZ2luYXRpb25Cb3ggPSB2YWx1ZTtcblx0XHRcdHRoaXMubm90aWZ5KCckcGFnaW5hdGlvbkJveCcsIHRoaXMpO1xuXHRcdH1cblx0fTtcblxuXHRnZXQgJGZpbHRlclRvb2xiYXJJdGVtcygpIHtcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuJGZpbHRlclRvb2xiYXJJdGVtcztcblx0fTtcblx0c2V0ICRmaWx0ZXJUb29sYmFySXRlbXModmFsdWU6IEpRdWVyeTxIVE1MRWxlbWVudD4pIHtcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiAkKSB7XG5cdFx0XHR0aGlzLl9tb2RlbC4kZmlsdGVyVG9vbGJhckl0ZW1zID0gdmFsdWU7XG5cdFx0XHR0aGlzLm5vdGlmeSgnJGZpbHRlclRvb2xiYXJJdGVtcycsIHRoaXMpO1xuXHRcdH1cblx0fTtcblxuXHRnZXQgc2Nyb2xsYmFyV2lkdGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLnNjcm9sbGJhcldpZHRoO1xuXHR9O1xuXG5cdHNldCBzY3JvbGxiYXJXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0aWYgKHR5cGVvZiAodmFsdWUpID09PSBcIm51bWJlclwiICYmIHZhbHVlID4gMCkge1xuXHRcdFx0dGhpcy5fbW9kZWwuc2Nyb2xsYmFyV2lkdGggPSB2YWx1ZTtcblx0XHRcdHRoaXMubm90aWZ5KCdzY3JvbGxiYXJXaWR0aCcsIHRoaXMpO1xuXHRcdH1cblx0fTtcblxuXHRnZXQgY29sTW9kZWxzKCkge1xuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5jb2xNb2RlbHM7XG5cdH07XG5cdHNldCBjb2xNb2RlbHModmFsdWU6IElDb2xNb2RlbFtdKSB7XG5cdFx0aWYgKCQuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdHRoaXMuX21vZGVsLmNvbE1vZGVscyA9IHZhbHVlO1xuXHRcdFx0dGhpcy5ub3RpZnkoJ2NvbE1vZGVscycsIHRoaXMpO1xuXHRcdH1cblx0fTtcblxuXHRnZXQgY29sTW9kZWxzRGljdGlvbmFyeSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuY29sTW9kZWxzRGljdGlvbmFyeTtcblx0fTtcblx0c2V0IGNvbE1vZGVsc0RpY3Rpb25hcnkodmFsdWUpIHtcblx0XHR0aGlzLl9tb2RlbC5jb2xNb2RlbHNEaWN0aW9uYXJ5ID0gdmFsdWU7XG5cdFx0dGhpcy5ub3RpZnkoJ2NvbE1vZGVsc0RpY3Rpb25hcnknLCB0aGlzKTtcblx0fTtcblxuXHRnZXQgZmlsdGVyKCkge1xuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5maWx0ZXI7XG5cdH07XG5cdHNldCBmaWx0ZXIoZGF0YSkge1xuXHRcdGlmIChkYXRhID09PSBudWxsIHx8IHR5cGVvZiAoZGF0YSkgPT09ICdvYmplY3QnKSB7XG5cdFx0XHR0aGlzLl9tb2RlbC5maWx0ZXIgPSBkYXRhO1xuXHRcdFx0dGhpcy5ub3RpZnkoJ2ZpbHRlcicsIHRoaXMpO1xuXHRcdH1cblx0fTtcblxuXHRnZXQgZGF0YSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuZGF0YTtcblx0fTtcblx0c2V0IGRhdGEoZGF0YTogSVJhd0RhdGFbXSkge1xuXHRcdGlmICgkLmlzQXJyYXkoZGF0YSkpIHtcblx0XHRcdHRoaXMuX21vZGVsLmRhdGEgPSBkYXRhO1xuXHRcdFx0dGhpcy5ub3RpZnkoJ2RhdGEnLCB0aGlzKTtcblx0XHR9XG5cdH07XG5cblx0Z2V0IHF1ZXJ5KCkge1xuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5xdWVyeTtcblx0fTtcblx0c2V0IHF1ZXJ5KGRhdGEpIHtcblx0XHR0aGlzLl9tb2RlbC5xdWVyeSA9IGRhdGE7XG5cdFx0dGhpcy5ub3RpZnkoJ3F1ZXJ5JywgdGhpcyk7XG5cdH07XG5cblx0Z2V0IHByb2Nlc3NlZERhdGEoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLnByb2Nlc3NlZERhdGE7XG5cdH07XG5cdHNldCBwcm9jZXNzZWREYXRhKGRhdGEpIHtcblx0XHR0aGlzLl9tb2RlbC5wcm9jZXNzZWREYXRhID0gZGF0YTtcblx0XHR0aGlzLm5vdGlmeSgncHJvY2Vzc2VkRGF0YScsIHRoaXMpO1xuXHR9O1xuXG5cdG9uKG5hbWUsIHN1YnNjcmliZXIpIHtcblx0XHR2YXIgc3RvcmVnZSA9IHRoaXMuX2dldFN0b3JhZ2UobmFtZSk7XG5cdFx0c3RvcmVnZS5wdXNoKHN1YnNjcmliZXIpO1xuXHR9O1xuXG5cdG5vdGlmeShuYW1lLCBkYXRhKSB7XG5cdFx0dmFyIHN0b3JlZ2UgPSB0aGlzLl9nZXRTdG9yYWdlKG5hbWUpO1xuXHRcdCQuZWFjaChzdG9yZWdlLCBmdW5jdGlvbiAoaSwgc3Vic2NyaWJlcikge1xuXHRcdFx0bGV0IFsuLi5hcmddID0gW2RhdGEsIG5hbWUsIGldO1xuXHRcdFx0c3Vic2NyaWJlci5hcHBseShzdWJzY3JpYmVyLCBhcmcpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHByaXZhdGUgX2dldFN0b3JhZ2UobmFtZSkge1xuXHRcdGNvbnN0IHN1YnNjcmliZXJzID0gdGhpcy5fc3Vic2NyaWJlcnM7XG5cdFx0aWYgKCFzdWJzY3JpYmVyc1tuYW1lXSkge1xuXHRcdFx0c3Vic2NyaWJlcnNbbmFtZV0gPSBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIHN1YnNjcmliZXJzW25hbWVdO1xuXHR9XG59XG4iLCJjbGFzcyBUb29scyB7XG5cdG5vdzogRnVuY3Rpb247XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5ub3cgPSBEYXRlLm5vdyB8fCAoKCkgPT4geyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH0pO1xuXHR9XG5cblx0ZXhlY3V0ZShmdW5jdGlvbnMsIGFyZ3MsIGNvbnRleHQ/KSB7XG5cdFx0Y29uc3QgYXBwbHkgPSBmdW5jdGlvbiAoZm9vKSB7XG5cdFx0XHRpZiAodHlwZW9mIChmb28pID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGZvby5hcHBseShjb250ZXh0ID8gY29udGV4dCA6IGZvbywgYXJncylcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoJC5pc0FycmF5KGZ1bmN0aW9ucykpIHtcblx0XHRcdGZ1bmN0aW9ucy5mb3JFYWNoKGFwcGx5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXBwbHkoZnVuY3Rpb25zKTtcblx0XHR9XG5cdH07XG5cblx0aW5zZXJ0RWxlbWVudCgkY29udGFpbmVyLCBzZWFyY2hTdHIsIHJlcGxhY2VtZW50KSB7XG5cdFx0Y29uc3QgJHJlcGxhY2VtZW50ID0gJChyZXBsYWNlbWVudCk7XG5cblx0XHRpZiAoISRyZXBsYWNlbWVudC5sZW5ndGgpIHtcblx0XHRcdHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VtZW50KTtcblx0XHR9XG5cdFx0JGNvbnRhaW5lci5maW5kKFwiOm5vdChpZnJhbWUpXCIpLmFkZEJhY2soKS5jb250ZW50cygpLmZpbHRlcihmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5ub2RlVHlwZSA9PT0gMztcblx0XHR9KS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0aGlzLmRhdGEuaW5kZXhPZihzZWFyY2hTdHIpICE9PSAtMSkge1xuXHRcdFx0XHRpZiAoJHJlcGxhY2VtZW50Lmxlbmd0aCkge1xuXHRcdFx0XHRcdCQodGhpcykuYWZ0ZXIoJHJlcGxhY2VtZW50KTtcblx0XHRcdFx0XHRjb25zdCBzdHIgPSB0aGlzLmRhdGEsXG5cdFx0XHRcdFx0XHRwYXJ0MSA9IHN0ci5zdWJzdHIoMCwgc3RyLmluZGV4T2Yoc2VhcmNoU3RyKSksXG5cdFx0XHRcdFx0XHRwYXJ0MiA9IHN0ci5zdWJzdHIocGFydDEubGVuZ3RoICsgc2VhcmNoU3RyLmxlbmd0aCwgc3RyLmxlbmd0aCk7XG5cdFx0XHRcdFx0aWYgKCFwYXJ0MS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwYXJ0Mi5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGlmIChwYXJ0MS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhID0gcGFydDE7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQkcmVwbGFjZW1lbnQuYWZ0ZXIocGFydDIpXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwYXJ0MS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHRoaXMuZGF0YSA9IHBhcnQxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZShzZWFyY2hTdHIsIHJlcGxhY2VtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0dGhyb3R0bGUoZnVuYywgd2FpdCA9IDEwKSB7XG5cdFx0bGV0IGNvbnRleHQsXG5cdFx0XHRhcmdzLFxuXHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICguLi5wcm9wcykge1xuXHRcdFx0Y29udGV4dCA9IHRoaXM7XG5cdFx0XHRhcmdzID0gcHJvcHM7XG5cdFx0XHRpZiAoIWNvbnRleHQpIHtcblx0XHRcdFx0Y29udGV4dCA9IGZ1bmNcblx0XHRcdH0gZWxzZSBpZiAoY29udGV4dCA9PT0gd2luZG93KSB7XG5cdFx0XHRcdGNvbnRleHQgPSBmdW5jO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCF0aW1lb3V0KSB7XG5cdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0XHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRcdFx0ZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHRcdFx0fSwgd2FpdCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRvb2xzKCk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld01vZGVsIGltcGxlbWVudHMgSVZpZXdNb2RlbCB7XG5cdG1vZGVsOiBJVmlld01vZGVsUGFydGlhbDtcblx0c3Vic2NyaWJlcnM6IHsgW2tleTogc3RyaW5nXTogRnVuY3Rpb25bXSB9O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMubW9kZWwgPSB7XG5cdFx0XHRyb3dzOiAxMCxcblx0XHRcdHRvdGFsUm93czogMCxcblx0XHRcdHBhZ2U6IDEsXG5cdFx0XHR0b3RhbFBhZ2VzOiAwLFxuXHRcdFx0bmV3UGFnZTogMSxcblx0XHRcdGRhdGE6IFtdLFxuXHRcdFx0c29ydEJ5OiBbXSxcblx0XHRcdGZpbHRlclRvb2xiYXI6IHRydWVcblx0XHR9XG5cdFx0dGhpcy5zdWJzY3JpYmVycyA9IHt9O1xuXHR9XG5cblx0Z2V0IGRhdGEoKSB7XG5cdFx0cmV0dXJuIHRoaXMubW9kZWwuZGF0YTtcblx0fTtcblx0c2V0IGRhdGEoZGF0YSkge1xuXHRcdGlmICgkLmlzQXJyYXkoZGF0YSkpIHtcblx0XHRcdHRoaXMubW9kZWwuZGF0YSA9IGRhdGE7XG5cdFx0XHR0aGlzLm5vdGlmeSgnZGF0YScsIHRoaXMpO1xuXHRcdH1cblx0fTtcblxuXHRnZXQgc29ydEJ5KCkge1xuXHRcdHJldHVybiB0aGlzLm1vZGVsLnNvcnRCeTtcblx0fTtcblx0c2V0IHNvcnRCeShkYXRhKSB7XG5cdFx0aWYgKCQuaXNBcnJheShkYXRhKSkge1xuXHRcdFx0dGhpcy5tb2RlbC5zb3J0QnkgPSBkYXRhO1xuXHRcdFx0dGhpcy5ub3RpZnkoJ3NvcnRCeScsIHRoaXMpO1xuXHRcdH1cblx0fTtcblxuXHRnZXQgdG90YWxSb3dzKCkge1xuXHRcdHJldHVybiB0aGlzLm1vZGVsLnRvdGFsUm93cztcblx0fTtcblx0c2V0IHRvdGFsUm93cyh0b3RhbFJvd3MpIHtcblx0XHRpZiAodHlwZW9mICh0b3RhbFJvd3MpID09PSBcIm51bWJlclwiICYmIHRvdGFsUm93cyA+IC0xKSB7XG5cdFx0XHR0aGlzLm1vZGVsLnRvdGFsUm93cyA9IHRvdGFsUm93cztcblx0XHRcdHRoaXMubm90aWZ5KCd0b3RhbFJvd3MnLCB0aGlzKTtcblx0XHR9XG5cdH07XG5cblx0Z2V0IHRvdGFsUGFnZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMubW9kZWwudG90YWxQYWdlcztcblx0fTtcblx0c2V0IHRvdGFsUGFnZXModG90YWxQYWdlcykge1xuXHRcdGlmICh0eXBlb2YgKHRvdGFsUGFnZXMpID09PSBcIm51bWJlclwiICYmIHRvdGFsUGFnZXMgPiAtMSkge1xuXHRcdFx0dGhpcy5tb2RlbC50b3RhbFBhZ2VzID0gdG90YWxQYWdlcztcblx0XHRcdHRoaXMubm90aWZ5KCd0b3RhbFBhZ2VzJywgdGhpcyk7XG5cdFx0fVxuXHR9O1xuXG5cdGdldCByb3dzKCkge1xuXHRcdHJldHVybiB0aGlzLm1vZGVsLnJvd3M7XG5cdH07XG5cdHNldCByb3dzKHJvd3MpIHtcblx0XHRpZiAodHlwZW9mIChyb3dzKSA9PT0gXCJudW1iZXJcIiAmJiByb3dzID4gLTEpIHtcblx0XHRcdHRoaXMubW9kZWwucm93cyA9IHJvd3M7XG5cdFx0XHR0aGlzLm5vdGlmeSgncm93cycsIHRoaXMpO1xuXHRcdH1cblx0fTtcblxuXHRnZXQgcGFnZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5tb2RlbC5wYWdlO1xuXHR9O1xuXHRzZXQgcGFnZShwYWdlKSB7XG5cdFx0aWYgKHR5cGVvZiAocGFnZSkgPT09IFwibnVtYmVyXCIgJiYgcGFnZSA+IC0xKSB7XG5cdFx0XHR0aGlzLm1vZGVsLnBhZ2UgPSBwYWdlO1xuXHRcdFx0dGhpcy5ub3RpZnkoJ3BhZ2UnLCB0aGlzKTtcblx0XHR9XG5cdH07XG5cblx0Z2V0IG5ld1BhZ2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMubW9kZWwubmV3UGFnZTtcblx0fTtcblx0c2V0IG5ld1BhZ2UocGFnZSkge1xuXHRcdGlmICh0eXBlb2YgKHBhZ2UpID09PSBcIm51bWJlclwiICYmIHBhZ2UgPiAtMSkge1xuXHRcdFx0dGhpcy5tb2RlbC5uZXdQYWdlID0gcGFnZTtcblx0XHRcdHRoaXMubm90aWZ5KCduZXdQYWdlJywgdGhpcyk7XG5cdFx0fVxuXHR9O1xuXG5cdGdldCBmaWx0ZXJUb29sYmFyKCkge1xuXHRcdHJldHVybiB0aGlzLm1vZGVsLmZpbHRlclRvb2xiYXI7XG5cdH07XG5cdHNldCBmaWx0ZXJUb29sYmFyKGRhdGE6IGJvb2xlYW4pIHtcblx0XHR0aGlzLm1vZGVsLmZpbHRlclRvb2xiYXIgPSBkYXRhO1xuXHRcdHRoaXMubm90aWZ5KCdmaWx0ZXJUb29sYmFyJywgdGhpcyk7XG5cdH07XG5cblx0b24obmFtZSwgc3Vic2NyaWJlcik6IHZvaWQge1xuXHRcdHZhciBzdG9yZWdlID0gdGhpcy5fZ2V0U3RvcmFnZShuYW1lKTtcblx0XHRzdG9yZWdlLnB1c2goc3Vic2NyaWJlcik7XG5cdH07XG5cblx0bm90aWZ5KG5hbWUsIGRhdGEpOiB2b2lkIHtcblx0XHR2YXIgc3RvcmVnZSA9IHRoaXMuX2dldFN0b3JhZ2UobmFtZSk7XG5cdFx0JC5lYWNoKHN0b3JlZ2UsIGZ1bmN0aW9uIChpLCBzdWJzY3JpYmVyKSB7XG5cdFx0XHRsZXQgWy4uLmFyZ10gPSBbZGF0YSwgbmFtZSwgaV07XG5cdFx0XHRzdWJzY3JpYmVyLmFwcGx5KHN1YnNjcmliZXIsIGFyZyk7XG5cdFx0fSk7XG5cdH07XG5cblx0cHJpdmF0ZSBfZ2V0U3RvcmFnZShuYW1lKSB7XG5cdFx0Y29uc3Qgc3Vic2NyaWJlcnMgPSB0aGlzLnN1YnNjcmliZXJzO1xuXHRcdGlmICghc3Vic2NyaWJlcnNbbmFtZV0pIHtcblx0XHRcdHN1YnNjcmliZXJzW25hbWVdID0gW107XG5cdFx0fVxuXHRcdHJldHVybiBzdWJzY3JpYmVyc1tuYW1lXTtcblx0fVxufVxuIiwiaW1wb3J0IFZpZXdNb2RlbCBmcm9tICcuL1ZpZXdNb2RlbCc7XG5pbXBvcnQgUHJvY2Vzc1NldHRpbmdzIGZyb20gJy4vUHJvY2Vzc1NldHRpbmdzJztcbmltcG9ydCBCdWlsZEluZnJhc3RydWN0dXJlIGZyb20gJy4vQnVpbGRJbmZyYXN0cnVjdHVyZSc7XG5pbXBvcnQgRmlsdGVyVG9vbGJhciBmcm9tICcuL0ZpbHRlclRvb2xiYXInO1xuaW1wb3J0IFNvcnRpbmcgZnJvbSAnLi9Tb3J0aW5nJztcbmltcG9ydCBEaXNwbGF5IGZyb20gJy4vRGlzcGxheSc7XG5pbXBvcnQgRml4ZWRIZWFkZXIgZnJvbSAnLi9GaXhlZEhlYWRlcic7XG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL1N0b3JhZ2UnO1xuaW1wb3J0IEZpbGwgZnJvbSAnLi9GaWxsJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vUGFnaW5hdGlvbic7XG5pbXBvcnQgdG9vbHMgZnJvbSAnLi9Ub29scyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhncmlkIHtcblx0dmVyc2lvbjogJzEuMC4wJztcblx0b3B0aW9uczogSU9wdGlvbnM7XG5cdHByb3BlcnRpZXM6IElYZ3JpZFByb3BlcnRpZXM7XG5cdFZpZXdNb2RlbDogSVZpZXdNb2RlbDtcblx0UHJvY2Vzc1NldHRpbmdzOiBQcm9jZXNzU2V0dGluZ3M7XG5cdEJ1aWxkSW5mcmFzdHJ1Y3R1cmU6IEJ1aWxkSW5mcmFzdHJ1Y3R1cmU7XG5cdFNvcnRpbmc6IFNvcnRpbmc7XG5cdFN0b3JhZ2U6IElTdG9yYWdlO1xuXHRGaWxsOiBGaWxsO1xuXHREaXNwbGF5OiBEaXNwbGF5O1xuXHRGaXhlZEhlYWRlcjogRml4ZWRIZWFkZXI7XG5cdEZpbHRlclRvb2xiYXI6IEZpbHRlclRvb2xiYXI7XG5cdFBhZ2luYXRpb246IFBhZ2luYXRpb247XG5cblx0Y29uc3RydWN0b3Iob3B0aW9uczogSU9wdGlvbnMsICRib3g6IEpRdWVyeSkge1xuXHRcdHRoaXMucHJvcGVydGllcyA9IHtcblx0XHRcdCRib3gsXG5cdFx0XHRkYXRhOiBbXVxuXHRcdH1cblx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7XG5cdFx0XHRiZWZvcmVSZXF1ZXN0OiBbXSxcblx0XHRcdGFmdGVyUmVzcG9uc2U6IFtdLFxuXHRcdFx0c29ydEJ5OiBbXSxcblx0XHRcdHBhZ2luYXRpb25TZWxlY3RvcjogJycsXG5cdFx0XHRhamF4VHlwZTogJ1BPU1QnLFxuXHRcdFx0ZmlsdGVyVG9vbGJhckdyb3VwT3A6ICdBTkQnLFxuXHRcdFx0dXJsOiAnJyxcblx0XHRcdG11bHRpU29ydGluZzogZmFsc2UsXG5cdFx0XHRmaWx0ZXJUb29sYmFyOiBmYWxzZVxuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5TdG9yYWdlID0gbmV3IFN0b3JhZ2UoeyAkYm94IH0pXG5cdFx0dGhpcy5fZXhlYygpO1xuXHR9O1xuXG5cdHB1YmxpYyBzZXRHcmlkRGF0YShyb3dzKTogWGdyaWQge1xuXHRcdHRoaXMuU3RvcmFnZS5kYXRhID0gcm93cztcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblx0cHVibGljIHJlZnJlc2goKTogWGdyaWQge1xuXHRcdHRoaXMuU3RvcmFnZS5ub3RpZnkoJ2RhdGEnLCB0aGlzLlN0b3JhZ2UpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdGFqYXhGdW5jdGlvbihxdWVyeU9iamVjdDogSVJlcXVlc3QsIHVybDogc3RyaW5nKTogSlF1ZXJ5LmpxWEhSPElSZXNwb25zZT4ge1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cblx0XHRyZXR1cm4gJC5hamF4KHtcblx0XHRcdHVybDogdXJsLFxuXHRcdFx0ZGF0YTogcXVlcnlPYmplY3QsXG5cdFx0XHR0eXBlOiBvcHRpb25zLmFqYXhUeXBlLFxuXHRcdFx0ZGF0YVR5cGU6ICdqc29uJ1xuXHRcdH0pO1xuXHR9O1xuXG5cdHByaXZhdGUgX3Jlc3BvbnNlKHJlc3BvbnNlT2JqZWN0OiBJUmVzcG9uc2UpIHtcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXHRcdGlmIChvcHRpb25zLmFmdGVyUmVzcG9uc2UpIHtcblx0XHRcdHRvb2xzLmV4ZWN1dGUob3B0aW9ucy5hZnRlclJlc3BvbnNlLCBbcmVzcG9uc2VPYmplY3RdKTtcblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSBfcmVxdWVzdChxdWVyeU9iamVjdDogSVJlcXVlc3QgPSB7fSkge1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG5cdFx0XHRkID0gJC5EZWZlcnJlZCgpO1xuXG5cdFx0aWYgKG9wdGlvbnMuYmVmb3JlUmVxdWVzdCkge1xuXHRcdFx0dG9vbHMuZXhlY3V0ZShvcHRpb25zLmJlZm9yZVJlcXVlc3QsIFtxdWVyeU9iamVjdF0pO1xuXHRcdH1cblxuXHRcdHRoaXMuYWpheEZ1bmN0aW9uKHF1ZXJ5T2JqZWN0LCBvcHRpb25zLnVybCkuZG9uZSh0aGlzLl9yZXNwb25zZS5iaW5kKHRoaXMpKS5hbHdheXMoZC5yZXNvbHZlKTtcblxuXHRcdHJldHVybiBkO1xuXHR9O1xuXG5cdHByaXZhdGUgX2JpbmQoKTogdm9pZCB7XG5cdFx0Ly8gdG8gRG8gaWYgbW9kZWwgd2lsbCBiZSBjaGFuZ2VkXG5cdFx0dGhpcy5TdG9yYWdlLm9uKCdjb2xNb2RlbHMnLCAoKSA9PiB7XG5cdFx0XHQvL2NvbnNvbGUubG9nKHRoaXMuRmlsbCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLlN0b3JhZ2Uub24oJ2RhdGEnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLkRpc3BsYXkuZXhlYygpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5WaWV3TW9kZWwub24oJ2RhdGEnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLkZpbGwudGJvZHkoKTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLkZpeGVkSGVhZGVyLnJlc2l6ZSgpO1xuXHRcdFx0fSwgMTA1MClcblx0XHR9KTtcblxuXHRcdHRoaXMuU3RvcmFnZS5vbignJHBhZ2luYXRpb25Cb3gnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLlBhZ2luYXRpb24uZXhlYygpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5TdG9yYWdlLm9uKCckaGVhZFRhYmxlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5Tb3J0aW5nLmJpbmQoKTtcblx0XHR9KTtcblx0fTtcblx0cHJpdmF0ZSBfZXhlYygpOiB2b2lkIHtcblx0XHRjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXM7XG5cblx0XHR0aGlzLlZpZXdNb2RlbCA9IG5ldyBWaWV3TW9kZWwoKTtcblx0XHR0aGlzLlByb2Nlc3NTZXR0aW5ncyA9IG5ldyBQcm9jZXNzU2V0dGluZ3Mob3B0aW9ucywgdGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCk7XG5cdFx0dGhpcy5CdWlsZEluZnJhc3RydWN0dXJlID0gbmV3IEJ1aWxkSW5mcmFzdHJ1Y3R1cmUob3B0aW9ucywgdGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCk7XG5cdFx0dGhpcy5Tb3J0aW5nID0gbmV3IFNvcnRpbmcodGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCwgb3B0aW9ucyk7XG5cdFx0dGhpcy5GaWxsID0gbmV3IEZpbGwodGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCk7XG5cdFx0dGhpcy5GaWx0ZXJUb29sYmFyID0gbmV3IEZpbHRlclRvb2xiYXIodGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCwgb3B0aW9ucyk7XG5cdFx0dGhpcy5EaXNwbGF5ID0gbmV3IERpc3BsYXkoe1xuXHRcdFx0c3RvcmFnZTogdGhpcy5TdG9yYWdlLFxuXHRcdFx0dmlld01vZGVsOiB0aGlzLlZpZXdNb2RlbCxcblx0XHRcdGFqYXg6ICgocXVlcnlPYmplY3Q6IElSZXF1ZXN0KSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9yZXF1ZXN0KHF1ZXJ5T2JqZWN0KTtcblx0XHRcdH0pLFxuXHRcdFx0aXNMb2NhbDogb3B0aW9ucy51cmwgPyBmYWxzZSA6IHRydWVcblx0XHR9KTtcblx0XHR0aGlzLkZpeGVkSGVhZGVyID0gbmV3IEZpeGVkSGVhZGVyKHRoaXMuU3RvcmFnZSk7XG5cdFx0dGhpcy5QYWdpbmF0aW9uID0gbmV3IFBhZ2luYXRpb24ob3B0aW9ucywgdGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCk7XG5cblx0XHR0aGlzLl9iaW5kKCk7XG5cblx0XHR0aGlzLkZpbGwudGhlYWQoKTtcblxuXHRcdGlmICghJC5pc0FycmF5KG9wdGlvbnMuZGF0YSkpIHtcblx0XHRcdG9wdGlvbnMuZGF0YSA9IFtdO1xuXHRcdH1cblx0XHR0aGlzLlN0b3JhZ2UuZGF0YSA9IG9wdGlvbnMuZGF0YTtcblx0fVxufSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==
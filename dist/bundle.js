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
                var settings = colModel.filterToolbarSettings || {};
                var filterOption = colModel.filterOption || defaultSearch;
                var fieldName = colModel.filterAlias || colModel.alias || colModel.key;
                var value = $elem.val();
                if (typeof (settings.transformData) === 'function') {
                    value = settings.transformData(value, settings);
                }
                if (value || filterOption === "nu" || filterOption === "nn") {
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
        var _this = this;
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
        //this.datetime = this.date.bind(this);
        this.text = (function (value, rowData, colModel) {
            if (colModel.insensitive) {
                return _this.insensitivetext.call(_this, value);
            }
            else {
                return _this.sensitivetext.call(_this, value);
            }
        });
    }
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
            default:
                return this.text;
        }
    };
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
        return value ? $.trim(String(value)) : "";
    };
    ;
    Pipes.prototype.sensitivetext = function (value) {
        return (value ? $.trim(String(value)) : "").toLowerCase();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0J1aWxkSW5mcmFzdHJ1Y3R1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ29sTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRGlzcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9EaXNwbGF5TW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRmlsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9GaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRmlsdGVyTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRmlsdGVyVG9vbGJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9GaWx0ZXJUb29sYmFyTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRml4ZWRIZWFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvTG9jYWxTb3J0UnVsZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL09wZXJhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9QYWdpbmF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1BpcGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1Byb2Nlc3NTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9RdWVyeU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1NvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvU29ydFJ1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvU29ydGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9TdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1Rvb2xzLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1ZpZXdNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9YZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGb0M7QUFFcEMsQ0FBQyxVQUFDLENBQUM7SUFDRixDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRztRQUFVLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ3BDLElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBTSxPQUFPLEdBQXNCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxHQUFHLENB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LE9BQU8sR0FBRyxJQUFJLGdEQUFPLENBQUM7WUFDMUIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixJQUFJLEVBQUUsQ0FBQyxVQUFDLFdBQXFCO2dCQUM1QixPQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDO1lBQ0YsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUNuQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksb0RBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLG1EQUFVLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXhFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBQ0YsWUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7QUM3SUQseUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFhncmlkIGZyb20gJy4vbW9kdWxlcy9YZ3JpZCc7XHJcblxyXG4oKCQpID0+IHtcclxuXHQkLmZuLlhncmlkID0gZnVuY3Rpb24gKC4uLmFyZ3M6IGFueVtdKSB7XHJcblx0XHRsZXQgZGF0YTtcclxuXHRcdGNvbnN0IG9wdGlvbnM6IElPcHRpb25zIHwgc3RyaW5nID0gYXJnc1swXTtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRkYXRhID0gJCh0aGlzKS5kYXRhKCdYZ3JpZCcpO1xyXG5cdFx0XHRpZiAoIWRhdGEpIHtcclxuXHRcdFx0XHRjb25zdCBwcm9wczogSU9wdGlvbnMgPSAodHlwZW9mIChvcHRpb25zKSA9PT0gJ3N0cmluZycpID8gYXJnc1sxXSA6IG9wdGlvbnM7XHJcblx0XHRcdFx0JCh0aGlzKS5kYXRhKCdYZ3JpZCcsIG5ldyBYZ3JpZChwcm9wcywgJCh0aGlzKSkpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiAob3B0aW9ucykgPT09ICdzdHJpbmcnICYmIG9wdGlvbnMuaW5kZXhPZignXycpICE9PSAwICYmIGRhdGFbb3B0aW9uc10gPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRjb25zdCBwcm9wcyA9IGFyZ3Muc2xpY2UoMSk7XHJcblx0XHRcdFx0ZGF0YVtvcHRpb25zXS5hcHBseShkYXRhLCBwcm9wcyk7XHJcblx0XHRcdH0gZWxzZSBpZiAoZGF0YS5yZWZyZXNoKSB7XHJcblx0XHRcdFx0ZGF0YS5yZWZyZXNoLmFwcGx5KGRhdGEsIGFyZ3MpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn0pKGpRdWVyeSk7XHJcbiIsImltcG9ydCB0b29scyBmcm9tICcuL1Rvb2xzJztcclxuXHJcbmNsYXNzIEJ1aWxkSW5mcmFzdHJ1Y3R1cmUge1xyXG5cdHZpZXdNb2RlbDogSVZpZXdNb2RlbDtcclxuXHRzdG9yYWdlOiBJU3RvcmFnZTtcclxuXHRvcHRpb25zOiBJQnVpbGRJbmZyYXN0cnVjdHVyZU9wdGlvbnM7XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMsIHN0b3JhZ2UsIHZpZXdNb2RlbCkge1xyXG5cdFx0dGhpcy52aWV3TW9kZWwgPSB2aWV3TW9kZWw7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7XHJcblx0XHRcdHRoZWFkQ2xhc3M6ICd0YWJsZS1ncmlkLXRoZWFkJyxcclxuXHRcdFx0dGJvZHlDbGFzczogJ3RhYmxlLWdyaWQtdGJvZHknLFxyXG5cdFx0XHRmaXJzdEJ0blRlbXBsYXRlOiAnPHNwYW4gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+JiMxNzE7PC9zcGFuPicsXHJcblx0XHRcdGxhc3RCdG5UZW1wbGF0ZTogJzxzcGFuIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPiYjMTg3Ozwvc3Bhbj4nLFxyXG5cdFx0XHRwcmV2QnRuVGVtcGxhdGU6ICc8c3BhbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj4mIzgyNDk7PC9zcGFuPicsXHJcblx0XHRcdG5leHRCdG5UZW1wbGF0ZTogJzxzcGFuIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPiYjODI1MDs8L3NwYW4+JyxcclxuXHRcdFx0Y3VycmVudFBhZ2VUZW1wbGF0ZTogJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz4nLFxyXG5cdFx0XHRwYWdpbmF0aW9uVGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiWGdyaWQtcGFnZ2luYXRpb24gaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIiA+e2ZpcnN0QnRuVGVtcGxhdGV9e3ByZXZCdG5UZW1wbGF0ZX08c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj4gUGFnZSA8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0e2N1cnJlbnRQYWdlVGVtcGxhdGV9XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIiA+PHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+IG9mIDxzcGFuIGNsYXNzPVwiWGdyaWQtdG90YWwtcGFnZXNcIj48L3NwYW4+PC9zcGFuPntuZXh0QnRuVGVtcGxhdGV9e2xhc3RCdG5UZW1wbGF0ZX08L2Rpdj5cclxuXHRcdFx0PC9kaXY+YFxyXG5cdFx0fSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHRcdHRoaXMuX2V4ZWMoKTtcclxuXHR9O1xyXG5cdGJ1aWxkRmlsdGVyVG9vbGJhcigpIHtcclxuXHRcdGlmICh0aGlzLnZpZXdNb2RlbC5maWx0ZXJUb29sYmFyKSB7XHJcblx0XHRcdHRoaXMuX2J1aWxkRmlsdGVyVG9vbGJhcigpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0X2V4ZWMoKSB7XHJcblx0XHR0aGlzLl9idWlsZCgpO1xyXG5cdFx0dGhpcy5fYnVpbGRUaGVhZCgpO1xyXG5cdFx0dGhpcy5fYnVpbGRUQm9keSgpO1xyXG5cdFx0dGhpcy5fYnVpbGRQYWdpbmF0aW9uKCk7XHJcblxyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGNvbnN0IGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzO1xyXG5cdFx0Y29uc3QgJHRmb290Q2VsbHMgPSBzdG9yYWdlLiRncmlkVGFibGUuZmluZCgnLlhncmlkLXRib2R5LXcgdGQnKTtcclxuXHRcdGNvbnN0ICR0aGVhZENlbGxzID0gc3RvcmFnZS4kaGVhZFRhYmxlLmZpbmQoJ3RyJyk7XHJcblxyXG5cdFx0Y29sTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsLCBpKSB7XHJcblx0XHRcdGxldCBjZWxscyA9IFtdO1xyXG5cclxuXHRcdFx0Y2VsbHMucHVzaCgkdGZvb3RDZWxscy5nZXQoaSkpO1xyXG5cdFx0XHQkdGhlYWRDZWxscy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRjZWxscy5wdXNoKCQodGhpcykuZmluZCgnPio6ZXEoJyArIGkgKyAnKScpLmdldCgwKSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0bW9kZWwuZGVwZW5kZW50ID0gY2VsbHMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0ge1xyXG5cdFx0XHRcdFx0JGFuY2hvcjogJChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpLFxyXG5cdFx0XHRcdFx0JGl0ZW06ICQoaXRlbSlcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRyZXN1bHQuJGl0ZW0uYmVmb3JlKHJlc3VsdC4kYW5jaG9yKTtcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0X2FkZFByb3BzdG9IZWFkZXJDZWxscyhpLCBpdGVtKSB7XHJcblx0XHRjb25zdCAkaXRlbSA9ICQoaXRlbSk7XHJcblx0XHRjb25zdCBjb2xNb2RlbCA9IHRoaXMuc3RvcmFnZS5jb2xNb2RlbHNbaV07XHJcblxyXG5cdFx0JGl0ZW0uYXR0cignZGF0YS1hbGlhcycsIGNvbE1vZGVsWydhbGlhcyddKTtcclxuXHRcdGlmIChjb2xNb2RlbC5maXhlZCkge1xyXG5cdFx0XHQkaXRlbS5hZGRDbGFzcygnZml4ZWQnKTtcclxuXHRcdFx0aWYgKGNvbE1vZGVsLndpZHRoKSB7XHJcblx0XHRcdFx0JGl0ZW0ud2lkdGgoY29sTW9kZWwud2lkdGgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRfYnVpbGRGaWx0ZXJUb29sYmFyKCkge1xyXG5cdFx0Y29uc3QgdGFnID0gJ3Rmb290JztcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRjb25zdCAkZmlsdGVyID0gJChgPCR7dGFnfSBjbGFzcz1cIlhncmlkLXRoZWFkLWZpbHRlclwiPjx0cj4keyBuZXcgQXJyYXkoc3RvcmFnZS5jb2xNb2RlbHMubGVuZ3RoICsgMSkuam9pbignPHRkIGNsYXNzPVwiWGdyaWQtZmlsdGVyLWNlbGxcIj48L3RkPicpfTwvdHI+PC8ke3RhZ30+YCk7XHJcblx0XHRjb25zdCBhZGRQcm9wID0gdGhpcy5fYWRkUHJvcHN0b0hlYWRlckNlbGxzLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0c3RvcmFnZS4kZmlsdGVyVG9vbGJhckl0ZW1zID0gJGZpbHRlci5maW5kKCcuWGdyaWQtZmlsdGVyLWNlbGwnKS5lYWNoKGFkZFByb3ApO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLmZpbmQoJy5YZ3JpZC10aGVhZC13IHRkJykuZWFjaChhZGRQcm9wKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5hcHBlbmQoJGZpbHRlcik7XHJcblx0fTtcclxuXHJcblx0X2J1aWxkVGhlYWQoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0bGV0IHRhZyA9ICd0aGVhZCc7XHJcblx0XHRsZXQgd2lkdGhIZWxwZXIgPSBgPCR7dGFnfSBjbGFzcz1cIlhncmlkLXRoZWFkLXdcIj48dHI+JHtuZXcgQXJyYXkoc3RvcmFnZS5jb2xNb2RlbHMubGVuZ3RoICsgMSkuam9pbignPHRkPjxkaXYgY2xhc3M9XCJYZ3JpZC1XaWR0aExpc3RlbmVyLXdyYXBwZXJcIj48aWZyYW1lIGRhdGEtY29sPVwiMFwiIGNsYXNzPVwiWGdyaWQtV2lkdGhMaXN0ZW5lclwiPjwvaWZyYW1lPjwvZGl2PjwvdGQ+Jyl9PC90cj48LyR7dGFnfT5gO1xyXG5cclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5odG1sKHdpZHRoSGVscGVyKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5maW5kKCcuWGdyaWQtdGhlYWQtdyB0ZCcpLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0Y29uc3QgJHRkID0gJCh0aGlzKTtcclxuXHRcdFx0Y29uc3QgY29sTW9kZWwgPSBzdG9yYWdlLmNvbE1vZGVsc1tpXTtcclxuXHRcdFx0Y29uc3QgaWZyYW1lOiBIVE1MRWxlbWVudCA9ICR0ZC5maW5kKCdpZnJhbWUnKVswXTtcclxuXHJcblx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWxpYXMnLCBjb2xNb2RlbC5hbGlhcyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0YWcgPSAndGJvZHknO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLmFwcGVuZChgPCR7dGFnfSBjbGFzcz1cIlhncmlkLXRoZWFkLWxhYmVsc1wiPjx0cj4ke25ldyBBcnJheShzdG9yYWdlLmNvbE1vZGVscy5sZW5ndGggKyAxKS5qb2luKCc8dGggY2xhc3M9XCJYZ3JpZC10aGVhZC1sYWJlbFwiPjwvdGg+Jyl9PC90cj48LyR7dGFnfT5gKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRMYWJlbHMgPSBzdG9yYWdlLiRoZWFkVGFibGUuZmluZCgnLlhncmlkLXRoZWFkLWxhYmVsJyk7XHJcblx0XHRzdG9yYWdlLiRoZWFkTGFiZWxzLmVhY2goKGksIGl0ZW0pID0+IHtcclxuXHRcdFx0dGhpcy5fYWRkUHJvcHN0b0hlYWRlckNlbGxzKGksIGl0ZW0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5idWlsZEZpbHRlclRvb2xiYXIoKTtcclxuXHR9O1xyXG5cclxuXHRfYnVpbGRUQm9keSgpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRsZXQgd2lkdGhIZWxwZXIgPSAnPHRoZWFkIGNsYXNzPVwiWGdyaWQtdGJvZHktd1wiPjx0cj4nICsgbmV3IEFycmF5KHN0b3JhZ2UuY29sTW9kZWxzLmxlbmd0aCArIDEpLmpvaW4oJzx0ZD48aT48L2k+PC90ZD4nKSArICc8L3RyPjwvdGhlYWQ+JztcclxuXHJcblx0XHRzdG9yYWdlLiRncmlkVGFibGUuaHRtbCh3aWR0aEhlbHBlcik7XHJcblx0XHRzdG9yYWdlLiRncmlkVGFibGUuZmluZCgnLlhncmlkLXRib2R5LXcgdHIgdGQnKS5lYWNoKChpLCBpdGVtKSA9PiB7XHJcblx0XHRcdHRoaXMuX2FkZFByb3BzdG9IZWFkZXJDZWxscyhpLCBpdGVtKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdF9idWlsZFBhZ2luYXRpb24oKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHRcdGNvbnN0ICRwYWdpbmF0aW9uID0gJChvcHRpb25zLnBhZ2luYXRpb25UZW1wbGF0ZSk7XHJcblx0XHRjb25zdCB7IGZpcnN0QnRuVGVtcGxhdGUsIGxhc3RCdG5UZW1wbGF0ZSwgcHJldkJ0blRlbXBsYXRlLCBuZXh0QnRuVGVtcGxhdGUsIGN1cnJlbnRQYWdlVGVtcGxhdGUgfSA9IG9wdGlvbnM7XHJcblx0XHRsZXQgJHBhZ2luYXRpb25Cb3g7XHJcblxyXG5cdFx0dG9vbHMuaW5zZXJ0RWxlbWVudCgkcGFnaW5hdGlvbiwgJ3tmaXJzdEJ0blRlbXBsYXRlfScsIGZpcnN0QnRuVGVtcGxhdGUgPyAkKGZpcnN0QnRuVGVtcGxhdGUpLmFkZENsYXNzKCdYZ3JpZC1maXJzdCcpIDogJycpO1xyXG5cdFx0dG9vbHMuaW5zZXJ0RWxlbWVudCgkcGFnaW5hdGlvbiwgJ3twcmV2QnRuVGVtcGxhdGV9JywgJChwcmV2QnRuVGVtcGxhdGUpLmFkZENsYXNzKCdYZ3JpZC1wcmV2JykpO1xyXG5cdFx0dG9vbHMuaW5zZXJ0RWxlbWVudCgkcGFnaW5hdGlvbiwgJ3tuZXh0QnRuVGVtcGxhdGV9JywgJChuZXh0QnRuVGVtcGxhdGUpLmFkZENsYXNzKCdYZ3JpZC1uZXh0JykpO1xyXG5cdFx0dG9vbHMuaW5zZXJ0RWxlbWVudCgkcGFnaW5hdGlvbiwgJ3tsYXN0QnRuVGVtcGxhdGV9JywgJChsYXN0QnRuVGVtcGxhdGUpLmFkZENsYXNzKCdYZ3JpZC1sYXN0JykpO1xyXG5cdFx0dG9vbHMuaW5zZXJ0RWxlbWVudCgkcGFnaW5hdGlvbiwgJ3tjdXJyZW50UGFnZVRlbXBsYXRlfScsICQoY3VycmVudFBhZ2VUZW1wbGF0ZSkuYWRkQ2xhc3MoJ1hncmlkLWN1cnJlbnQtcGFnZScpKTtcclxuXHJcblx0XHRpZiAob3B0aW9ucy5wYWdpbmF0aW9uU2VsZWN0b3IpIHtcclxuXHRcdFx0JHBhZ2luYXRpb25Cb3ggPSAkKG9wdGlvbnMucGFnaW5hdGlvblNlbGVjdG9yKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCRwYWdpbmF0aW9uQm94ID0gc3RvcmFnZS4kYm94LmZpbmQoJy5YZ3JpZC1wYWdnaW5hdGlvbi13cmFwcGVyJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0JHBhZ2luYXRpb25Cb3guaHRtbCgkcGFnaW5hdGlvbik7XHJcblx0XHRzdG9yYWdlLiRwYWdpbmF0aW9uQm94ID0gJHBhZ2luYXRpb25Cb3g7XHJcblx0fTtcclxuXHJcblx0X2J1aWxkKCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblxyXG5cdFx0c3RvcmFnZS4kYm94Lmh0bWwoYDxkaXYgY2xhc3M9XCJYZ3JpZFwiPlxyXG5cdDxkaXYgY2xhc3M9XCJYZ3JpZC13cmFwcGVyXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiWGdyaWQtd3JhcHBlci1ob2xkZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIlhncmlkLXRoZWFkLXdyYXBwZXJcIj5cclxuXHRcdFx0XHQ8dGFibGUgY2xhc3M9XCJYZ3JpZC10aGVhZCAke29wdGlvbnMudGhlYWRDbGFzc31cIj48L3RhYmxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIlhncmlkLXRib2R5LXdyYXBwZXJcIj5cclxuXHRcdFx0XHQ8dGFibGUgY2xhc3M9XCJYZ3JpZC10Ym9keSAke29wdGlvbnMudGJvZHlDbGFzc31cIj48L3RhYmxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cIlhncmlkLXBhZ2dpbmF0aW9uLXdyYXBwZXJcIj48L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+YCk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUgPSBzdG9yYWdlLiRib3guZmluZCgnLlhncmlkLXRoZWFkJyk7XHJcblx0XHRzdG9yYWdlLiRncmlkVGFibGUgPSBzdG9yYWdlLiRib3guZmluZCgnLlhncmlkLXRib2R5Jyk7XHJcblx0fVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCdWlsZEluZnJhc3RydWN0dXJlOyIsImltcG9ydCBwaXBlcyBmcm9tICcuL1BpcGVzJztcclxuaW1wb3J0IEZpbHRlclRvb2xiYXJNb2RlbCBmcm9tICcuL0ZpbHRlclRvb2xiYXJNb2RlbCc7XHJcblxyXG5jbGFzcyBDb2xNb2RlbCBpbXBsZW1lbnRzIElDb2xNb2RlbCB7XHJcblx0YWxpYXM6IHN0cmluZztcclxuXHRmaWx0ZXJGb3JtYXR0ZXI6IEZ1bmN0aW9uO1xyXG5cdGZpbHRlck9wdGlvbiA9ICdjbic7XHJcblx0ZmlsdGVyVG9vbGJhclNldHRpbmdzOiBhbnk7XHJcblx0ZmlsdGVyVHlwZSA9ICd0ZXh0JztcclxuXHRmaWx0ZXJhYmxlID0gZmFsc2U7XHJcblx0Zml4ZWQgPSBmYWxzZTtcclxuXHRoaWRkZW4gPSBmYWxzZTtcclxuXHRpbnNlbnNpdGl2ZSA9IGZhbHNlO1xyXG5cdGtleTogc3RyaW5nO1xyXG5cdGxhYmVsID0gJyc7XHJcblx0b3JkZXI6IG51bWJlcjtcclxuXHRyZXNpemFibGUgPSBmYWxzZTtcclxuXHRzb3J0Rm9ybWF0dGVyOiBGdW5jdGlvbjtcclxuXHRzb3J0VHlwZSA9ICd0ZXh0JztcclxuXHRzb3J0YWJsZSA9IGZhbHNlO1xyXG5cdHdpZHRoOiBudW1iZXI7XHJcblxyXG5cdGRlcGVuZGVudCA9IFtdO1xyXG5cdF9jaGVjazogRnVuY3Rpb247XHJcblxyXG5cdGNvbnN0cnVjdG9yKG1vZGVsLCBvcmRlcikge1xyXG5cdFx0dGhpcy5vcmRlciA9IG9yZGVyO1xyXG5cclxuXHRcdCQuZXh0ZW5kKHRoaXMsIG1vZGVsKTtcclxuXHRcdHRoaXMuZmlsdGVyVG9vbGJhclNldHRpbmdzID0gbmV3IEZpbHRlclRvb2xiYXJNb2RlbChtb2RlbC5maWx0ZXJUb29sYmFyU2V0dGluZ3MpO1xyXG5cclxuXHRcdGlmICh0eXBlb2YgKHRoaXMuYWxpYXMpID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHR0aGlzLmFsaWFzID0gdGhpcy5rZXk7XHJcblx0XHR9XHJcblx0XHRpZiAodHlwZW9mICh0aGlzLmtleSkgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdHRoaXMua2V5ID0gdGhpcy5hbGlhcztcclxuXHRcdH1cclxuXHRcdGlmIChtb2RlbC5zb3J0VHlwZSAmJiB0eXBlb2YgKG1vZGVsLnNvcnRUeXBlKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHR0aGlzLnNvcnRGb3JtYXR0ZXIgPSBtb2RlbC5zb3J0VHlwZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc29ydEZvcm1hdHRlciA9IHBpcGVzLmdldEJ5VHlwZShtb2RlbC5zb3J0VHlwZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG1vZGVsLmZpbHRlclR5cGUgJiYgdHlwZW9mIChtb2RlbC5maWx0ZXJUeXBlKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHR0aGlzLmZpbHRlckZvcm1hdHRlciA9IG1vZGVsLmZpbHRlclR5cGU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmZpbHRlckZvcm1hdHRlciA9IHBpcGVzLmdldEJ5VHlwZShtb2RlbC5maWx0ZXJUeXBlKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmRlcGVuZGVudCA9IFtdO1xyXG5cdFx0dGhpcy5fY2hlY2sgPSBmdW5jdGlvbiAoKTogdm9pZCB7XHJcblx0XHRcdGlmICh0aGlzLmhpZGRlbikge1xyXG5cdFx0XHRcdHRoaXMuZGVwZW5kZW50LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRcdFx0XHRcdGl0ZW0uJGl0ZW0uZGV0YWNoKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5kZXBlbmRlbnQuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG5cdFx0XHRcdFx0aXRlbS4kYW5jaG9yLmFmdGVyKGl0ZW0uJGl0ZW0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsYWJlbEZvcm1hdHRlcigpIHtcclxuXHRcdHJldHVybiB0aGlzLmxhYmVsO1xyXG5cdH07XHJcblxyXG5cdGNlbGxGb3JtYXR0ZXIoJHRkLCB2YWx1ZSwgcm93RGF0YSwgZGF0YSkge1xyXG5cdFx0aWYgKHR5cGVvZiAodmFsdWUpID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHR2YWx1ZSA9ICcnO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICc8ZGl2IGNsYXNzPVwiZWxsaXBzaXNcIj4nICsgdmFsdWUgKyAnPC9kaXY+JztcclxuXHR9O1xyXG5cclxuXHRmaWx0ZXJUb29sYmFyRm9ybWF0dGVyKCRjZWxsLCBjb2xNb2RlbCkge1xyXG5cdFx0Y29uc3Qgc2V0dGluZ3MgPSBjb2xNb2RlbC5maWx0ZXJUb29sYmFyU2V0dGluZ3MgfHwge307XHJcblx0XHRsZXQgJGNvbnRyb2wsXHJcblx0XHRcdCRjb250YWluZXIsXHJcblx0XHRcdCR3cmFwID0gJCgnPGRpdiBjbGFzcz1cIlhncmlkLWZpbHRlci1jb250cm9sLXdyYXBcIj48L2Rpdj4nKSxcclxuXHRcdFx0c3RyID0gJzxkaXYgY2xhc3M9XCJYZ3JpZC1maWx0ZXItd3JhcHBlclwiPic7XHJcblxyXG5cdFx0aWYgKHNldHRpbmdzLmFsbG93UmVzZXRCdXR0b24gfHwgc2V0dGluZ3MuYWxsb3dTdWJtaXRCdXR0b24pIHtcclxuXHRcdFx0c3RyICs9ICc8c3BhbiBjbGFzcz1cIlhncmlkLWZpbHRlci1idG5zXCI+JztcclxuXHRcdFx0aWYgKHNldHRpbmdzLmFsbG93UmVzZXRCdXR0b24pIHtcclxuXHRcdFx0XHRzdHIgKz0gJzxzcGFuIGNsYXNzPVwiWGdyaWQtYnRuIFhncmlkLXJlc2V0XCI+JiMxMDAwNjs8L3NwYW4+JztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc2V0dGluZ3MuYWxsb3dTdWJtaXRCdXR0b24pIHtcclxuXHRcdFx0XHRzdHIgKz0gJzxzcGFuIGNsYXNzPVwiWGdyaWQtYnRuIFhncmlkLW9uU3VibWl0XCI+JiMxMDAwNDs8L3NwYW4+JztcclxuXHRcdFx0fVxyXG5cdFx0XHRzdHIgKz0gJzwvc3Bhbj4nO1xyXG5cdFx0fVxyXG5cdFx0c3RyICs9ICc8L2Rpdj4nXHJcblx0XHRzd2l0Y2ggKHNldHRpbmdzLmZvcm1Db250cm9sVHlwZSkge1xyXG5cdFx0XHRjYXNlICdzZWxlY3QnOlxyXG5cdFx0XHRcdCRjb250cm9sID0gJCgnPHNlbGVjdCBjbGFzcz1cIlhncmlkLXNlbGVjdCBYZ3JpZC1maWx0ZXJcIiAgLz4nKTtcclxuXHRcdFx0XHRzZXR0aW5ncy5zZWxlY3RPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGkpIHtcclxuXHRcdFx0XHRcdCRjb250cm9sLmFwcGVuZCgnPG9wdGlvbiB2YWx1ZT1cIicgKyBpICsgJ1wiPicgKyBlbGVtZW50LmxhYmVsICsgJzwvb3B0aW9uPicpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0JGNvbnRyb2wudmFsKFtdKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdCRjb250cm9sID0gJCgnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJYZ3JpZC1pbnB1dCBYZ3JpZC1maWx0ZXJcIiAvPicpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNldHRpbmdzLm9uQ2hhbmdlKSB7XHJcblx0XHRcdCRjb250cm9sLmFkZENsYXNzKCdYZ3JpZC1vbkNoYW5nZScpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNldHRpbmdzLm9uS2V5ZG93bikge1xyXG5cdFx0XHQkY29udHJvbC5hZGRDbGFzcygnWGdyaWQtb25LZXlkb3duJyk7XHJcblx0XHR9XHJcblx0XHRpZiAoc2V0dGluZ3Mub25FbnRlcikge1xyXG5cdFx0XHQkY29udHJvbC5hZGRDbGFzcygnWGdyaWQtb25FbnRlcicpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNldHRpbmdzLmF0dHIpIHtcclxuXHRcdFx0JGNvbnRyb2wuYXR0cihzZXR0aW5ncy5hdHRyKTtcclxuXHRcdH1cclxuXHJcblx0XHQkY29udGFpbmVyID0gJChzdHIpO1xyXG5cdFx0JHdyYXAuYXBwZW5kKCRjb250cm9sKTtcclxuXHRcdCRjb250YWluZXIuYXBwZW5kKCR3cmFwKTtcclxuXHRcdCRjZWxsLmh0bWwoJGNvbnRhaW5lcik7XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbE1vZGVsOyIsImltcG9ydCB0b29scyBmcm9tICcuL1Rvb2xzJztcclxuaW1wb3J0IFF1ZXJ5TW9kZWwgZnJvbSAnLi9RdWVyeU1vZGVsJztcclxuaW1wb3J0IHNvcnQgZnJvbSAnLi9Tb3J0JztcclxuaW1wb3J0IGZpbHRlciBmcm9tICcuL0ZpbHRlcic7XHJcbmltcG9ydCBEaXNwbGF5TW9kZWwgZnJvbSAnLi9EaXNwbGF5TW9kZWwnO1xyXG5pbXBvcnQgTG9jYWxTb3J0UnVsZU1vZGVsIGZyb20gJy4vTG9jYWxTb3J0UnVsZU1vZGVsJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5IHtcclxuXHR2aWV3TW9kZWw6IElWaWV3TW9kZWw7XHJcblx0c3RvcmFnZTogSVN0b3JhZ2U7XHJcblx0YWpheDogRnVuY3Rpb247XHJcblx0cHJvY2VzczogRnVuY3Rpb247XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuXHRcdHRoaXMudmlld01vZGVsID0gb3B0aW9ucy52aWV3TW9kZWw7XHJcblx0XHR0aGlzLnN0b3JhZ2UgPSBvcHRpb25zLnN0b3JhZ2U7XHJcblx0XHR0aGlzLmFqYXggPSBvcHRpb25zLmFqYXg7XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMuaXNMb2NhbCkge1xyXG5cdFx0XHR0aGlzLnByb2Nlc3MgPSB0aGlzLl9sb2NhbFByb2Nlc3MuYmluZCh0aGlzKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucHJvY2VzcyA9IHRoaXMuX3NlcnZlclByb2Nlc3MuYmluZCh0aGlzKTtcclxuXHRcdH1cclxuXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5fc3Vic2NyaWJlKCk7XHJcblx0XHR9LCA1MCk7XHJcblx0fTtcclxuXHJcblx0ZXhlYygpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRjb25zdCB2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbDtcclxuXHRcdGNvbnN0IHF1ZXJ5OiBJUXVlcnlNb2RlbCA9IG5ldyBRdWVyeU1vZGVsKHtcclxuXHRcdFx0ZmlsdGVyOiBzdG9yYWdlLmZpbHRlcixcclxuXHRcdFx0c29ydDogdmlld01vZGVsLnNvcnRCeSxcclxuXHRcdFx0cm93czogdmlld01vZGVsLnJvd3MsXHJcblx0XHRcdHBhZ2U6IHZpZXdNb2RlbC5uZXdQYWdlLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0c3RvcmFnZS5xdWVyeSA9IHF1ZXJ5O1xyXG5cdFx0c3RvcmFnZS4kYm94LmFkZENsYXNzKCdYZ3JpZC1sb2FkaW5nJyk7XHJcblxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMucHJvY2VzcygpLmRvbmUoKGRhdGE6IElEaXNwYWx5TW9kZWwpID0+IHtcclxuXHRcdFx0XHR0aGlzLl9maWxsZXIoZGF0YSk7XHJcblx0XHRcdFx0dGhpcy5zdG9yYWdlLiRib3gucmVtb3ZlQ2xhc3MoJ1hncmlkLWxvYWRpbmcnKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9LCAwKTtcclxuXHR9O1xyXG5cclxuXHRfZmlsbGVyKGRhdGE6IElEaXNwYWx5TW9kZWwpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsO1xyXG5cclxuXHRcdHZpZXdNb2RlbC50b3RhbFBhZ2VzID0gZGF0YS50b3RhbFBhZ2VzXHJcblx0XHR2aWV3TW9kZWwudG90YWxSb3dzID0gZGF0YS50b3RhbFJvd3M7XHJcblx0XHR2aWV3TW9kZWwuZGF0YSA9IGRhdGEuZGF0YTtcclxuXHRcdHZpZXdNb2RlbC5wYWdlID0gZGF0YS5wYWdlO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2xvY2FsRmlsdGVyKGRhdGEsIGZpbHRlclF1ZXJ5KSB7XHJcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKSxcclxuXHRcdFx0c3RvcmFnZSA9IHRoaXMuc3RvcmFnZSxcclxuXHRcdFx0cmF3RGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVsc0RpY3Rpb25hcnk7XHJcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHJvdyA9IHt9O1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChhbGlhcywgcm93RGF0YSkge1xyXG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIChyb3dbYWxpYXNdKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBjb2xNb2RlbCA9IGNvbE1vZGVsc1thbGlhc107XHJcblx0XHRcdFx0XHRcdFx0cm93W2FsaWFzXSA9IGNvbE1vZGVsLmZpbHRlckZvcm1hdHRlcihyb3dEYXRhW2NvbE1vZGVsLmtleV0sIHJvd0RhdGEsIGNvbE1vZGVsKTtcclxuXHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHJvd1thbGlhc107XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0aWYgKGZpbHRlclF1ZXJ5KSB7XHJcblx0XHRcdFx0ZGF0YSA9IGZpbHRlci5leGVjKGRhdGEsIGZpbHRlclF1ZXJ5LCByYXdEYXRhKCkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XHJcblx0XHR9LCAwKTtcclxuXHRcdHJldHVybiBkZWZlcnJlZDtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIF9sb2NhbFNvcnQoZGF0YSwgc29ydFJ1bGVzKSB7XHJcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblxyXG5cdFx0aWYgKHNvcnRSdWxlcy5sZW5ndGgpIHtcclxuXHRcdFx0Y29uc3QgbG9jYWxTb3J0UnVsZXM6IElMb2NhbFNvcnRSdWxlW10gPSBzb3J0UnVsZXMubWFwKChydWxlKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgY29sTW9kZWwgPSBzdG9yYWdlLmNvbE1vZGVsc0RpY3Rpb25hcnlbcnVsZS5ieV07XHJcblx0XHRcdFx0Y29uc3QgYnkgPSBjb2xNb2RlbCA/IGNvbE1vZGVsLmtleSA6IHJ1bGUuYnk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBuZXcgTG9jYWxTb3J0UnVsZU1vZGVsKHJ1bGUub3JkZXIsIGJ5LCBjb2xNb2RlbCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0ZGF0YSA9IHNvcnQuZXhlYyhkYXRhLCBsb2NhbFNvcnRSdWxlcyk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XHJcblx0XHRcdH0sIDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBkZWZlcnJlZDtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIF9nZXRMb2NhbERhdGEoZGF0YTogSVJhd0RhdGFbXSwgcXVlcnk6IElRdWVyeU1vZGVsKTogSURpc3BhbHlNb2RlbCB7XHJcblx0XHRjb25zdCB2aWV3TW9kZWw6IElWaWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbDtcclxuXHRcdGNvbnN0IGJlZ2luOiBudW1iZXIgPSAocXVlcnkucGFnZSAtIDEpICogdmlld01vZGVsLnJvd3M7XHJcblx0XHRjb25zdCBlbmQ6IG51bWJlciA9IHF1ZXJ5LnBhZ2UgKiB2aWV3TW9kZWwucm93cztcclxuXHRcdGNvbnN0IGRhdGFUb0Rpc3BsYXk6IElSYXdEYXRhW10gPSBkYXRhLnNsaWNlKGJlZ2luLCBlbmQpO1xyXG5cclxuXHRcdHJldHVybiBuZXcgRGlzcGxheU1vZGVsKFxyXG5cdFx0XHRkYXRhVG9EaXNwbGF5LFxyXG5cdFx0XHRxdWVyeS5wYWdlLFxyXG5cdFx0XHRNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyB2aWV3TW9kZWwucm93cykgfHwgMSxcclxuXHRcdFx0ZGF0YS5sZW5ndGgsXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2xvY2FsUHJvY2VzcygpOiBKUXVlcnlEZWZlcnJlZDxJRGlzcGFseU1vZGVsPiB7XHJcblx0XHRjb25zdCBkZWZlcnJlZDogSlF1ZXJ5RGVmZXJyZWQ8SURpc3BhbHlNb2RlbD4gPSAkLkRlZmVycmVkKCk7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3QgcXVlcnk6IElRdWVyeU1vZGVsID0gc3RvcmFnZS5xdWVyeTtcclxuXHJcblx0XHR0aGlzLl9sb2NhbEZpbHRlcihzdG9yYWdlLmRhdGEsIHF1ZXJ5LmZpbHRlcikuZG9uZSgoZmlsdGVyZWREYXRhKSA9PiB7XHJcblx0XHRcdHRoaXMuX2xvY2FsU29ydChmaWx0ZXJlZERhdGEsIHF1ZXJ5LnNvcnQpLmRvbmUoKHNvcnRlZERhdGEpID0+IHtcclxuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHRoaXMuX2dldExvY2FsRGF0YShzb3J0ZWREYXRhLCBxdWVyeSkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGRlZmVycmVkO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX3NlcnZlclByb2Nlc3MoKTogSlF1ZXJ5RGVmZXJyZWQ8SURpc3BhbHlNb2RlbD4ge1xyXG5cdFx0Y29uc3QgcXVlcnk6IElRdWVyeU1vZGVsID0gdGhpcy5zdG9yYWdlLnF1ZXJ5O1xyXG5cdFx0Y29uc3QgZGVmZXJyZWQ6IEpRdWVyeURlZmVycmVkPElEaXNwYWx5TW9kZWw+ID0gJC5EZWZlcnJlZCgpO1xyXG5cdFx0XHJcblx0XHR0aGlzLmFqYXgoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShxdWVyeSkpKS5hbHdheXMoKGRhdGEpPT57XHJcblx0XHRcdGNvbnN0IGRpc3BsYXlNb2RlbCA9IG5ldyBEaXNwbGF5TW9kZWwoKTtcclxuXHJcblx0XHRcdCQuZXh0ZW5kKGRpc3BsYXlNb2RlbCwgZGF0YSk7XHJcblx0XHRcdGRlZmVycmVkLnJlc29sdmUoZGlzcGxheU1vZGVsKTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGRlZmVycmVkO1xyXG5cdH07XHJcblx0cHJpdmF0ZSBfc3Vic2NyaWJlKCkge1xyXG5cdFx0Y29uc3Qgdmlld01vZGVsID0gdGhpcy52aWV3TW9kZWw7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3QgYWN0aW9uID0gdG9vbHMudGhyb3R0bGUoKCkgPT4geyB0aGlzLmV4ZWMoKTsgfSwgMTAwKTtcclxuXHRcdGNvbnN0IF9yZWxvYWQgPSBmdW5jdGlvbiAocywgdHlwZSkge1xyXG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0XHRjYXNlICdmaWx0ZXInOlxyXG5cdFx0XHRcdFx0dmlld01vZGVsLm5ld1BhZ2UgPSAxO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnc29ydEJ5JzpcclxuXHRcdFx0XHRcdHZpZXdNb2RlbC5uZXdQYWdlID0gMTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGFjdGlvbigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZpZXdNb2RlbC5vbignbmV3UGFnZScsIF9yZWxvYWQpO1xyXG5cdFx0dmlld01vZGVsLm9uKCdzb3J0QnknLCBfcmVsb2FkKTtcclxuXHRcdHN0b3JhZ2Uub24oJ2ZpbHRlcicsIF9yZWxvYWQpO1xyXG5cdH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheU1vZGVsIGltcGxlbWVudHMgSURpc3BhbHlNb2RlbCB7XHJcblx0ZGF0YTogSVJhd0RhdGFbXTtcclxuXHRwYWdlOiBudW1iZXIgPSAxO1xyXG5cdHRvdGFsUGFnZXM6IG51bWJlciA9IDA7XHJcblx0dG90YWxSb3dzOiBudW1iZXIgPSAwO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihkYXRhVG9EaXNwbGF5OiBJUmF3RGF0YVtdID0gW10sIHBhZ2U6IG51bWJlciA9IDEsIHRvdGFsUGFnZXM6IG51bWJlciA9IDAsIHRvdGFsUm93czogbnVtYmVyID0gMCkge1xyXG5cdFx0dGhpcy5kYXRhID0gZGF0YVRvRGlzcGxheTtcclxuXHRcdGlmIChwYWdlID4gMCkge1xyXG5cdFx0XHR0aGlzLnBhZ2UgPSBwYWdlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy50b3RhbFBhZ2VzID0gdG90YWxQYWdlcztcclxuXHRcdHRoaXMudG90YWxSb3dzID0gdG90YWxSb3dzO1xyXG5cdH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGwge1xyXG5cdHZpZXdNb2RlbDogSVZpZXdNb2RlbDtcclxuXHRzdG9yYWdlOiBJU3RvcmFnZTtcclxuXHJcblx0Y29uc3RydWN0b3Ioc3RvcmFnZSwgdmlld01vZGVsKSB7XHJcblx0XHR0aGlzLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcclxuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblx0fTtcclxuXHJcblx0dGhlYWQoKTogdm9pZCB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3QgY2xhc3NSdWxlcyA9IFsncmVzaXphYmxlJywgJ3NvcnRhYmxlJywgJ2ZpbHRlcmFibGUnLCAnaGlkZGVuJ107XHJcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcclxuXHJcblx0XHRzdG9yYWdlLiRoZWFkTGFiZWxzLmVhY2goKGk6IG51bWJlciwgdGg6IEhUTUxFbGVtZW50KSA9PiB7XHJcblx0XHRcdGNvbnN0ICR0aCA9ICQodGgpO1xyXG5cdFx0XHRjb25zdCAkd3JhcHBlciA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xyXG5cdFx0XHRjb25zdCBjb2xNb2RlbCA9IGNvbE1vZGVsc1tpXTtcclxuXHJcblx0XHRcdCR0aC5kYXRhKCdYZ3JpZC5kYXRhJywgY29sTW9kZWwpO1xyXG5cclxuXHRcdFx0bGV0IGRhdGEgPSBjb2xNb2RlbC5sYWJlbEZvcm1hdHRlcigkd3JhcHBlciwgJHRoLCBjb2xNb2RlbCwgaSk7XHJcblx0XHRcdGlmICh0eXBlb2YgKGRhdGEpICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdCR3cmFwcGVyLmh0bWwoZGF0YSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHQkdGguYXBwZW5kKCR3cmFwcGVyKTtcclxuXHRcdFx0JC5lYWNoKGNsYXNzUnVsZXMsIGZ1bmN0aW9uIChpLCBtYXJrKSB7XHJcblx0XHRcdFx0aWYgKGNvbE1vZGVsW21hcmtdKSB7XHJcblx0XHRcdFx0XHQkdGguYWRkQ2xhc3MobWFyayk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCR0aC5yZW1vdmVDbGFzcyhtYXJrKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmZpbHRlclRvb2xiYXIoKTtcclxuXHR9O1xyXG5cclxuXHRmaWx0ZXJUb29sYmFyKCk6IHZvaWQge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGNvbnN0IGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzO1xyXG5cclxuXHRcdGlmIChzdG9yYWdlLiRmaWx0ZXJUb29sYmFySXRlbXMpIHtcclxuXHRcdFx0c3RvcmFnZS4kZmlsdGVyVG9vbGJhckl0ZW1zLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0XHRjb25zdCAkY2VsbCA9ICQodGhpcyksXHJcblx0XHRcdFx0XHRjb2xNb2RlbCA9IGNvbE1vZGVsc1tpXTtcclxuXHRcdFx0XHRpZiAoY29sTW9kZWwuZmlsdGVyYWJsZSAmJiBjb2xNb2RlbC5maWx0ZXJUb29sYmFyRm9ybWF0dGVyKSB7XHJcblx0XHRcdFx0XHRsZXQgZGF0YSA9IGNvbE1vZGVsLmZpbHRlclRvb2xiYXJGb3JtYXR0ZXIoJGNlbGwsIGNvbE1vZGVsKTtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2YgKGRhdGEpICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdFx0XHQkY2VsbC5odG1sKGRhdGEpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkY2VsbC5lbXB0eSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR0Ym9keSgpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHsgc3RvcmFnZSwgdmlld01vZGVsIH0gPSB0aGlzO1xyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblx0XHRjb25zdCBkYXRhVG9EaXNwbGF5ID0gdmlld01vZGVsLmRhdGE7XHJcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcclxuXHRcdGNvbnN0ICRoZWFkV3JhcCA9IHN0b3JhZ2UuJGhlYWRUYWJsZS5wYXJlbnQoKTtcclxuXHRcdGNvbnN0ICRncmlkV3JhcCA9IHN0b3JhZ2UuJGdyaWRUYWJsZS5wYXJlbnQoKTtcclxuXHRcdGNvbnN0IGRhdGEgPSBzdG9yYWdlLmRhdGE7XHJcblx0XHRjb25zdCB0Ym9keSA9IHRoaXMuX2NyZWF0ZVNoYWRvd0JvZHkoZnJhZ21lbnQpO1xyXG5cdFx0bGV0IG51bSA9IDA7XHJcblxyXG5cdFx0Y29sTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGNvbE1vZGVsLCBpKSB7XHJcblx0XHRcdGNvbE1vZGVsLl9jaGVjaygpO1xyXG5cdFx0XHRjb25zdCAkdGQgPSBzdG9yYWdlLiRoZWFkTGFiZWxzLmVxKGkpO1xyXG5cclxuXHRcdFx0aWYgKCFjb2xNb2RlbC5oaWRkZW4pIHtcclxuXHRcdFx0XHRudW0rKztcclxuXHRcdFx0XHRpZiAobnVtICUgMikge1xyXG5cdFx0XHRcdFx0JHRkLmFkZENsYXNzKCdvZGQnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JHRkLmFkZENsYXNzKCdldmVuJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKHRib2R5KS5maW5kKCd0cicpLmVhY2goKGksIHRyKSA9PiB7XHJcblx0XHRcdGNvbnN0IHJvd0RhdGEgPSBkYXRhVG9EaXNwbGF5W2ldO1xyXG5cclxuXHRcdFx0dGhpcy5fZmlsbFJvdygkKHRyKSwgcm93RGF0YSwgZGF0YSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRzdG9yYWdlLiRncmlkVGFibGUuZmluZCgnPnRib2R5JykucmVtb3ZlKCk7XHJcblx0XHQkaGVhZFdyYXAuY3NzKHsgJ3BhZGRpbmctcmlnaHQnOiAnJyB9KTtcclxuXHRcdHN0b3JhZ2UuJGdyaWRUYWJsZS5hcHBlbmQodGJvZHkpO1xyXG5cclxuXHRcdGlmICgkZ3JpZFdyYXBbMF0ub2Zmc2V0V2lkdGggLSAkZ3JpZFdyYXBbMF0uY2xpZW50V2lkdGgpIHtcclxuXHRcdFx0JGhlYWRXcmFwLmNzcyh7ICdwYWRkaW5nLXJpZ2h0Jzogc3RvcmFnZS5zY3JvbGxiYXJXaWR0aCArICdweCcgfSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLl91cGRhdGVIZWFkKCk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfY3JlYXRlU2hhZG93Qm9keShmcmFnbWVudDogRG9jdW1lbnRGcmFnbWVudCkge1xyXG5cdFx0Y29uc3QgeyBzdG9yYWdlLCB2aWV3TW9kZWwgfSA9IHRoaXM7XHJcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcclxuXHRcdGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcclxuXHRcdGNvbnN0IHJvd3NDb3VudCA9IHZpZXdNb2RlbC5kYXRhLmxlbmd0aDtcclxuXHRcdGxldCB0ciA9ICc8dHI+JyArIEFycmF5KGNvbE1vZGVscy5sZW5ndGggKyAxKS5qb2luKCc8dGQ+PC90ZD4nKSArICc8L3RyPic7XHJcblx0XHRsZXQgdHJzID0gJzx0Ym9keT4nICsgbmV3IEFycmF5KHJvd3NDb3VudCArIDEpLmpvaW4odHIpICsgJzx0Ym9keT4nO1xyXG5cclxuXHRcdGlmICghZnJhZ21lbnQpIHtcclxuXHRcdFx0ZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGJvZHkuaW5uZXJIVE1MID0gdHJzO1xyXG5cdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGJvZHkpO1xyXG5cclxuXHRcdHJldHVybiB0Ym9keTtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIF9maWxsUm93KCR0ciwgcm93RGF0YSwgZGF0YSk6IHZvaWQge1xyXG5cclxuXHRcdGNvbnN0ICR0ZHMgPSAkdHIuZmluZCgndGQnKTtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcclxuXHRcdGxldCBudW0gPSAwO1xyXG5cclxuXHRcdCR0ci5kYXRhKCdYZ3JpZC5kYXRhJywgcm93RGF0YSk7XHJcblxyXG5cdFx0JC5lYWNoKGNvbE1vZGVscywgZnVuY3Rpb24gKGksIGNvbE1vZGVsKSB7XHJcblx0XHRcdGxldCB2YWx1ZSA9IHJvd0RhdGFbY29sTW9kZWwua2V5XSxcclxuXHRcdFx0XHQkdGQgPSAkdGRzLmVxKGkpLFxyXG5cdFx0XHRcdGRhdGE7XHJcblxyXG5cdFx0XHRpZiAoY29sTW9kZWwuaGlkZGVuKSB7XHJcblx0XHRcdFx0JHRkLnJlbW92ZSgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG51bSsrO1xyXG5cdFx0XHRcdGRhdGEgPSBjb2xNb2RlbC5jZWxsRm9ybWF0dGVyKCR0ZCwgdmFsdWUsIHJvd0RhdGEsIGRhdGEpO1xyXG5cdFx0XHRcdGlmIChudW0gJSAyKSB7XHJcblx0XHRcdFx0XHQkdGQuYWRkQ2xhc3MoJ29kZCcpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkdGQuYWRkQ2xhc3MoJ2V2ZW4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHR5cGVvZiAoZGF0YSkgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHQkdGQuaHRtbChkYXRhKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX3VwZGF0ZUhlYWQoKTogdm9pZCB7XHJcblx0XHRjb25zdCB7IHN0b3JhZ2UsIHZpZXdNb2RlbCB9ID0gdGhpcztcclxuXHRcdGNvbnN0IGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzO1xyXG5cdFx0Y29uc3QgJGhlYWRMYWJlbHMgPSBzdG9yYWdlLiRoZWFkTGFiZWxzO1xyXG5cdFx0Y29uc3Qgc29ydEJ5ID0ge307XHJcblxyXG5cdFx0dmlld01vZGVsLnNvcnRCeS5mb3JFYWNoKChzb3J0UnVsZSkgPT4ge1xyXG5cdFx0XHRzb3J0Qnlbc29ydFJ1bGUuYnldID0gc29ydFJ1bGUub3JkZXI7XHJcblx0XHR9KTtcclxuXHJcblx0XHRjb2xNb2RlbHMuZm9yRWFjaCgoY29sTW9kZWwsIGkpID0+IHtcclxuXHRcdFx0Y29uc3QgJGxhYmVsID0gJGhlYWRMYWJlbHMuZXEoaSk7XHJcblx0XHRcdGNvbnN0IG9yZGVyID0gc29ydEJ5W2NvbE1vZGVsLmFsaWFzXTtcclxuXHJcblx0XHRcdGlmIChvcmRlcikge1xyXG5cdFx0XHRcdCRsYWJlbC5hdHRyKCdkYXRhLXNvcnQnLCBvcmRlcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JGxhYmVsLnJlbW92ZUF0dHIoJ2RhdGEtc29ydCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG59O1xyXG4iLCJpbXBvcnQgb3BlcmF0b3JzIGZyb20gJy4vT3BlcmF0b3JzJztcclxuY2xhc3MgRmlsdGVyIHtcclxuXHRleGVjKGRhdGEsIGdyb3VwLCBnZXREYXRhKSB7XHJcblx0XHRjb25zdCBuZXdEYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0sIGkpID0+IHtcclxuXHRcdFx0Y29uc3QgZ2V0ID0gZ2V0RGF0YSgpLFxyXG5cdFx0XHRcdHN0YXRlID0gdGhpcy5fY2hlY2soZ3JvdXAsIGl0ZW0sIGdldCk7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG5ld0RhdGE7XHJcblx0fTtcclxuXHRwcml2YXRlIF9vcihydWxlcywgcm93RGF0YSwgZ2V0KSB7XHJcblx0XHRsZXQgaSA9IHJ1bGVzLmxlbmd0aDtcclxuXHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0Y29uc3QgcnVsZSA9IHJ1bGVzW2ldO1xyXG5cdFx0XHRpZiAoIW9wZXJhdG9yc1tydWxlLm9wXSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB2YWx1ZSA9IGdldChydWxlLmZpZWxkLCByb3dEYXRhKSxcclxuXHRcdFx0XHRzdGF0ZSA9IG9wZXJhdG9yc1tydWxlLm9wXShydWxlLmRhdGEsIHZhbHVlKTtcclxuXHRcdFx0aWYgKHN0YXRlKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9O1xyXG5cdHByaXZhdGUgX2FuZChydWxlcywgcm93RGF0YSwgZ2V0KSB7XHJcblx0XHRsZXQgaSA9IHJ1bGVzLmxlbmd0aDtcclxuXHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0Y29uc3QgcnVsZSA9IHJ1bGVzW2ldO1xyXG5cdFx0XHRpZiAoIW9wZXJhdG9yc1tydWxlLm9wXSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB2YWx1ZSA9IGdldChydWxlLmZpZWxkLCByb3dEYXRhKSxcclxuXHRcdFx0XHRzdGF0ZSA9IG9wZXJhdG9yc1tydWxlLm9wXShydWxlLmRhdGEsIHZhbHVlKTtcclxuXHRcdFx0aWYgKCFzdGF0ZSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxuXHRwcml2YXRlIF9jaGVjayhncm91cCwgcm93RGF0YSwgZ2V0KSB7XHJcblx0XHRjb25zdCBpc09yID0gZ3JvdXAucnVsZXMubGVuZ3RoICYmIFN0cmluZyhncm91cC5ncm91cE9wKS50b1VwcGVyQ2FzZSgpID09PSBcIk9SXCI7XHJcblx0XHRpZiAoJC5pc0FycmF5KGdyb3VwLnJ1bGVzKSAmJiBncm91cC5ydWxlcy5sZW5ndGgpIHtcclxuXHRcdFx0aWYgKGlzT3IpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fb3IoZ3JvdXAucnVsZXMsIHJvd0RhdGEsIGdldCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2FuZChncm91cC5ydWxlcywgcm93RGF0YSwgZ2V0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBGaWx0ZXIoKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJNb2RlbCBpbXBsZW1lbnRzIElGaWx0ZXJNb2RlbCB7XHJcblx0ZGF0YTogYW55O1xyXG5cdGZpZWxkOiBzdHJpbmc7XHJcblx0b3A6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoZGF0YTogYW55LCBmaWVsZDogc3RyaW5nLCBvcDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xyXG5cdFx0dGhpcy5vcCA9IG9wO1xyXG5cdH1cclxufSIsImltcG9ydCBGaWx0ZXJNb2RlbCBmcm9tICcuL0ZpbHRlck1vZGVsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlclRvb2xiYXIge1xyXG5cdHN0b3JhZ2U6IElTdG9yYWdlO1xyXG5cdHZpZXdNb2RlbDogSVZpZXdNb2RlbDtcclxuXHRvcHRpb25zOiBJT3B0aW9ucztcclxuXHR0aW1lb3V0T25LZXlkb3duID0gbnVsbDtcclxuXHJcblx0Y29uc3RydWN0b3Ioc3RvcmFnZSwgdmlld01vZGVsLCBvcHRpb25zKSB7XHJcblx0XHR0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xyXG5cdFx0dGhpcy52aWV3TW9kZWwgPSB2aWV3TW9kZWw7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cdFx0dGhpcy5fYmluZCgpO1xyXG5cdH1cclxuXHJcblx0dHJpZ2dlclRvb2xiYXIoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHRcdGNvbnN0IGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzO1xyXG5cdFx0Y29uc3QgcnVsZXMgPSBbXTtcclxuXHRcdGNvbnN0IGRlZmF1bHRTZWFyY2ggPSAnY24nO1xyXG5cdFx0Y29uc3QgZ3JvdXBPcCA9IG9wdGlvbnMuZmlsdGVyVG9vbGJhckdyb3VwT3AgPT09ICdBTkQnID8gJ0FORCcgOiAnT1InO1xyXG5cdFx0bGV0IHJ1bGVHcm91cCA9IG51bGw7XHJcblxyXG5cdFx0aWYgKCFzdG9yYWdlLiRmaWx0ZXJUb29sYmFySXRlbXMpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblxyXG5cdFx0c3RvcmFnZS4kZmlsdGVyVG9vbGJhckl0ZW1zLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0Y29uc3QgJGZpbHRlciA9ICQodGhpcyk7XHJcblx0XHRcdGNvbnN0ICRlbGVtID0gJGZpbHRlci5maW5kKCcuWGdyaWQtZmlsdGVyJylcclxuXHJcblx0XHRcdGlmICgkZWxlbS5sZW5ndGgpIHtcclxuXHRcdFx0XHRjb25zdCBjb2xNb2RlbCA9IGNvbE1vZGVsc1tpXTtcclxuXHRcdFx0XHRjb25zdCBzZXR0aW5ncyA9IGNvbE1vZGVsLmZpbHRlclRvb2xiYXJTZXR0aW5ncyB8fCB7fTtcclxuXHRcdFx0XHRjb25zdCBmaWx0ZXJPcHRpb24gPSBjb2xNb2RlbC5maWx0ZXJPcHRpb24gfHwgZGVmYXVsdFNlYXJjaDtcclxuXHRcdFx0XHRjb25zdCBmaWVsZE5hbWUgPSBjb2xNb2RlbC5maWx0ZXJBbGlhcyB8fCBjb2xNb2RlbC5hbGlhcyB8fCBjb2xNb2RlbC5rZXk7XHJcblx0XHRcdFx0bGV0IHZhbHVlID0gJGVsZW0udmFsKCk7XHJcblxyXG5cdFx0XHRcdGlmICh0eXBlb2YgKHNldHRpbmdzLnRyYW5zZm9ybURhdGEpID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IHNldHRpbmdzLnRyYW5zZm9ybURhdGEodmFsdWUsIHNldHRpbmdzKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh2YWx1ZSB8fCBmaWx0ZXJPcHRpb24gPT09IFwibnVcIiB8fCBmaWx0ZXJPcHRpb24gPT09IFwibm5cIikge1xyXG5cdFx0XHRcdFx0cnVsZXMucHVzaChuZXcgRmlsdGVyTW9kZWwodmFsdWUsIGZpZWxkTmFtZSwgZmlsdGVyT3B0aW9uKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAocnVsZXMubGVuZ3RoKSB7XHJcblx0XHRcdHJ1bGVHcm91cCA9IHtcclxuXHRcdFx0XHRncm91cE9wLFxyXG5cdFx0XHRcdHJ1bGVzXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHN0b3JhZ2UuZmlsdGVyID0gcnVsZUdyb3VwO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2JpbmQoKTogdm9pZCB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5vbigna2V5cHJlc3MnLCAnaW5wdXQuWGdyaWQtaW5wdXQuWGdyaWQtb25FbnRlcicsIHRoaXMuX2hhbmRsZXJGaWx0ZXJPbkVudGVyLmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLm9uKCdrZXlkb3duJywgJ2lucHV0LlhncmlkLWlucHV0LlhncmlkLW9uS2V5ZG93bicsIHRoaXMuX2hhbmRsZXJGaWx0ZXJPbktleWRvd24uYmluZCh0aGlzKSk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUub24oJ2NoYW5nZScsICcuWGdyaWQtZmlsdGVyLlhncmlkLW9uQ2hhbmdlJywgdGhpcy5faGFuZGxlckZpbHRlck9uQ2hhbmdlLmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLm9uKCdjbGljaycsICcuWGdyaWQtcmVzZXQnLCB0aGlzLl9oYW5kbGVyRmlsdGVyT25SZXNldC5iaW5kKHRoaXMpKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5vbignY2xpY2snLCAnLlhncmlkLW9uU3VibWl0JywgdGhpcy5faGFuZGxlckZpbHRlck9uU3VibWl0LmJpbmQodGhpcykpO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2hhbmRsZXJGaWx0ZXJPblN1Ym1pdChlOiBKUXVlcnlFdmVudE9iamVjdCkge1xyXG5cdFx0JChlLmN1cnJlbnRUYXJnZXQpLmJsdXIoKTtcclxuXHRcdHRoaXMudHJpZ2dlclRvb2xiYXIoKTtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIF9oYW5kbGVyRmlsdGVyT25SZXNldChlOiBKUXVlcnlFdmVudE9iamVjdCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGNvbnN0ICRzZWxsID0gJChlLmN1cnJlbnRUYXJnZXQpLmJsdXIoKS5wYXJlbnRzKCcuWGdyaWQtZmlsdGVyLWNlbGw6ZXEoMCknKTtcclxuXHRcdGNvbnN0IGFsaWFzID0gJHNlbGwuYXR0cignZGF0YS1hbGlhcycpO1xyXG5cdFx0Y29uc3QgJGNvbnRyb2wgPSAkc2VsbC5maW5kKCcuWGdyaWQtZmlsdGVyJyk7XHJcblx0XHRjb25zdCBjb2xNb2RlbCA9IHN0b3JhZ2UuY29sTW9kZWxzRGljdGlvbmFyeVthbGlhc107XHJcblxyXG5cdFx0aWYgKGNvbE1vZGVsKSB7XHJcblx0XHRcdGlmIChjb2xNb2RlbC5maWx0ZXJUb29sYmFyU2V0dGluZ3MuZm9ybUNvbnRyb2xUeXBlID09PSAnc2VsZWN0Jykge1xyXG5cdFx0XHRcdCRjb250cm9sLnZhbChbXSkuZWFjaCgoaTogbnVtYmVyLCBzZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50KSA9PiB7XHJcblx0XHRcdFx0XHRzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCRjb250cm9sLnZhbCgnJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy50cmlnZ2VyVG9vbGJhcigpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2hhbmRsZXJGaWx0ZXJPbkNoYW5nZSgpIHtcclxuXHRcdHRoaXMudHJpZ2dlclRvb2xiYXIoKTtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIF9oYW5kbGVyRmlsdGVyT25LZXlkb3duKGU6IEpRdWVyeUV2ZW50T2JqZWN0KSB7XHJcblx0XHRjb25zdCBrZXkgPSBlLndoaWNoO1xyXG5cclxuXHRcdHN3aXRjaCAoa2V5KSB7XHJcblx0XHRcdGNhc2UgMTM6XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRjYXNlIDk6XHJcblx0XHRcdGNhc2UgMTY6XHJcblx0XHRcdGNhc2UgMzc6XHJcblx0XHRcdGNhc2UgMzg6XHJcblx0XHRcdGNhc2UgMzk6XHJcblx0XHRcdGNhc2UgNDA6XHJcblx0XHRcdGNhc2UgMjc6XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0aWYgKHRoaXMudGltZW91dE9uS2V5ZG93bikge1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dE9uS2V5ZG93bik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudGltZW91dE9uS2V5ZG93biA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyVG9vbGJhcigpO1xyXG5cdFx0XHRcdH0sIDUwMCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfaGFuZGxlckZpbHRlck9uRW50ZXIoZTogSlF1ZXJ5RXZlbnRPYmplY3QpIHtcclxuXHRcdGNvbnN0IGtleSA9IGUuY2hhckNvZGUgfHwgZS5rZXlDb2RlIHx8IDA7XHJcblx0XHRpZiAoa2V5ID09PSAxMykge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHRoaXMudHJpZ2dlclRvb2xiYXIoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyVG9vbGJhck1vZGVsIGltcGxlbWVudHMgSUZpbHRlclRvb2xiYXJNb2RlbCB7XHJcblx0Zm9ybUNvbnRyb2xUeXBlID0gJ3RleHQnO1xyXG5cdHNlbGVjdE9wdGlvbnMgPSBbXTtcclxuXHRwbGFjZWhvbGRlciA9ICcnO1xyXG5cdG9uRW50ZXIgPSB0cnVlO1xyXG5cdG9uS2V5ZG93biA9IGZhbHNlO1xyXG5cdG9uQ2hhbmdlID0gZmFsc2U7XHJcblx0YWxsb3dSZXNldEJ1dHRvbiA9IHRydWU7XHJcblx0YWxsb3dTdWJtaXRCdXR0b24gPSB0cnVlO1xyXG5cdHRyYW5zZm9ybURhdGE/OiBGdW5jdGlvbjsgXHJcblxyXG5cdGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XHJcblx0XHQkLmV4dGVuZCh0aGlzLCBzZXR0aW5ncyk7XHJcblx0XHRpZiAoIXRoaXMudHJhbnNmb3JtRGF0YSkge1xyXG5cdFx0XHRpZiAodGhpcy5mb3JtQ29udHJvbFR5cGUgPT09ICdzZWxlY3QnKSB7XHJcblx0XHRcdFx0dGhpcy50cmFuc2Zvcm1EYXRhID0gKChkYXRhKSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgcmVzdWx0O1xyXG5cdFx0XHRcdFx0Y29uc3Qgc2VsZWN0T3B0aW9ucyA9IHRoaXMuc2VsZWN0T3B0aW9ucztcclxuXHRcdFx0XHRcdGlmICgkLmlzQXJyYXkoZGF0YSkpIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0ID0gW107XHJcblx0XHRcdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgaXRlbSA9IHNlbGVjdE9wdGlvbnNba2V5XTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbS52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGtleSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXN1bHQubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmIChzZWxlY3RPcHRpb25zW2RhdGFdKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNlbGVjdE9wdGlvbnNbZGF0YV0udmFsdWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml4ZWRIZWFkZXIge1xyXG5cdHN0b3JhZ2U6IElTdG9yYWdlO1xyXG5cdHByb3BlcnRpZXMgPSB7XHJcblx0XHQkY2VsbFdpZHRoUmVjaXBpZW50czogbnVsbCxcclxuXHRcdCRjZWxsV2lkdGhMaXN0ZW5lcnM6IG51bGwsXHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3Ioc3RvcmFnZSkge1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHRcdHRoaXMuX2V4ZWMoKTtcclxuXHR9XHJcblxyXG5cdHJlc2l6ZSgpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblxyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLmZpbmQoJy5YZ3JpZC10aGVhZC13IGlmcmFtZScpLmVhY2goKGksIGVsZW1lbnQpID0+IHtcclxuXHRcdFx0Y29uc3QgJGlmcmFtZSA9ICQoZWxlbWVudCk7XHJcblx0XHRcdGNvbnN0IHdpZHRoID0gJGlmcmFtZS53aWR0aCgpO1xyXG5cdFx0XHRjb25zdCBhbGlhcyA9ICRpZnJhbWUuYXR0cignZGF0YS1hbGlhcycpO1xyXG5cclxuXHRcdFx0dGhpcy5faGFuZGxlclJlc2l6ZWRDZWxsV2lkdGgod2lkdGgsIGFsaWFzKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2V4ZWMoKSB7XHJcblx0XHR0aGlzLl9idWlsZCgpO1xyXG5cdFx0dGhpcy5fYmluZCgpO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2J1aWxkKCkge1xyXG5cdFx0Y29uc3QgeyBzdG9yYWdlLCBwcm9wZXJ0aWVzIH0gPSB0aGlzO1xyXG5cdFx0Y29uc3QgY2VsbFdpZHRoTGlzdGVuZXJzID0gW107XHJcblxyXG5cdFx0cHJvcGVydGllcy4kY2VsbFdpZHRoUmVjaXBpZW50cyA9IHN0b3JhZ2UuJGdyaWRUYWJsZS5maW5kKCcuWGdyaWQtdGJvZHktdyBpJyk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuZmluZCgnLlhncmlkLXRoZWFkLXcgdGQnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdGNvbnN0IGlmcmFtZTogSFRNTEVsZW1lbnQgPSAkKHRoaXMpLmZpbmQoJ2lmcmFtZScpWzBdO1xyXG5cclxuXHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2wnLCBTdHJpbmcoaSkpO1xyXG5cdFx0XHRjZWxsV2lkdGhMaXN0ZW5lcnMucHVzaChpZnJhbWUpO1xyXG5cdFx0fSk7XHJcblx0XHRwcm9wZXJ0aWVzLiRjZWxsV2lkdGhMaXN0ZW5lcnMgPSAkKGNlbGxXaWR0aExpc3RlbmVycyk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfYmluZCgpIHtcclxuXHRcdGNvbnN0IHsgcHJvcGVydGllcyB9ID0gdGhpcztcclxuXHJcblx0XHRwcm9wZXJ0aWVzLiRjZWxsV2lkdGhMaXN0ZW5lcnMuZWFjaCgoaSwgaWZyYW1lKSA9PiB7XHJcblx0XHRcdGNvbnN0ICRpZnJhbWUgPSAkKGlmcmFtZSk7XHJcblxyXG5cdFx0XHR0aGlzLl9oYW5kbGVyUmVzaXplZENlbGxXaWR0aCgkaWZyYW1lLndpZHRoKCksICRpZnJhbWUuYXR0cignZGF0YS1hbGlhcycpKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0JChpZnJhbWUuY29udGVudFdpbmRvdykub24oJ3Jlc2l6ZScsICgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuX2hhbmRsZXJSZXNpemVkQ2VsbFdpZHRoKCRpZnJhbWUud2lkdGgoKSwgJGlmcmFtZS5hdHRyKCdkYXRhLWFsaWFzJykpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LCAxMDApO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfaGFuZGxlclJlc2l6ZWRDZWxsV2lkdGgod2lkdGg6IG51bWJlciwgYWxpYXM6IHN0cmluZykge1xyXG5cdFx0Y29uc3QgeyBwcm9wZXJ0aWVzIH0gPSB0aGlzO1xyXG5cdFx0Y29uc3QgJGl0ZW0gPSBwcm9wZXJ0aWVzLiRjZWxsV2lkdGhSZWNpcGllbnRzLmZpbHRlcignW2RhdGEtYWxpYXM9XCInICsgYWxpYXMgKyAnXCJdJyk7XHJcblxyXG5cdFx0JGl0ZW0ud2lkdGgod2lkdGgpO1xyXG5cdFx0JGl0ZW0ucGFyZW50KCkud2lkdGgod2lkdGgpO1xyXG5cdH07XHJcbn1cclxuIiwiaW1wb3J0IHBpcGVzIGZyb20gJy4vUGlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxTb3J0UnVsZU1vZGVsIGltcGxlbWVudHMgSUxvY2FsU29ydFJ1bGUge1xyXG5cdGJ5OiBzdHJpbmc7XHJcblx0b3JkZXI6IHN0cmluZztcclxuXHRjb2xNb2RlbD86IElDb2xNb2RlbDtcclxuXHRnZXQ6IEZ1bmN0aW9uID0gcGlwZXMuZ2V0QnlUeXBlKCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9yZGVyOiBzdHJpbmcsIGJ5OiBzdHJpbmcsIGNvbE1vZGVsOiBudWxsIHwgSUNvbE1vZGVsKSB7XHJcblx0XHR0aGlzLm9yZGVyID0gb3JkZXI7XHJcblx0XHR0aGlzLmJ5ID0gYnk7XHJcblxyXG5cdFx0aWYgKGNvbE1vZGVsKSB7XHJcblx0XHRcdHRoaXMuY29sTW9kZWwgPSBjb2xNb2RlbDtcclxuXHRcdFx0dGhpcy5nZXQgPSBjb2xNb2RlbC5zb3J0Rm9ybWF0dGVyO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJjbGFzcyBPcGVyYXRvcnMge1xyXG5cdGVxID0gdGhpcy5lcXVhbHM7XHJcblx0bmUgPSB0aGlzLm5vdEVxdWFscztcclxuXHRsdCA9IHRoaXMubGVzcztcclxuXHRsZSA9IHRoaXMubGVzc09yRXF1YWxzO1xyXG5cdGd0ID0gdGhpcy5ncmVhdGVyO1xyXG5cdGdlID0gdGhpcy5ncmVhdGVyT3JFcXVhbHM7XHJcblx0Y24gPSB0aGlzLmNvbnRhaW5zO1xyXG5cdG5jID0gKCguLi5hcmcpID0+IHtcclxuXHRcdHJldHVybiAhdGhpcy5jb250YWlucy5hcHBseSh0aGlzLCBhcmcpO1xyXG5cdH0pO1xyXG5cdGJ3ID0gdGhpcy5zdGFydHNXaXRoO1xyXG5cdGJuID0gKCguLi5hcmcpID0+IHtcclxuXHRcdHJldHVybiAhdGhpcy5zdGFydHNXaXRoLmFwcGx5KHRoaXMsIGFyZyk7XHJcblx0fSk7XHJcblx0ZW4gPSAoKC4uLmFyZykgPT4ge1xyXG5cdFx0cmV0dXJuICF0aGlzLmVuZHNXaXRoLmFwcGx5KHRoaXMsIGFyZyk7XHJcblx0fSk7XHJcblx0ZXcgPSB0aGlzLmVuZHNXaXRoO1xyXG5cdGluID0gdGhpcy5pbkFycmF5O1xyXG5cdG5pID0gKCguLi5hcmcpID0+IHtcclxuXHRcdHJldHVybiAhdGhpcy5pbkFycmF5LmFwcGx5KHRoaXMsIGFyZyk7XHJcblx0fSk7XHJcblx0bnUgPSB0aGlzLmlzTnVsbDtcclxuXHRubiA9ICgoLi4uYXJnKSA9PiB7XHJcblx0XHRyZXR1cm4gIXRoaXMuaXNOdWxsLmFwcGx5KHRoaXMsIGFyZyk7XHJcblx0fSk7XHJcblxyXG5cdGVxdWFscyhhLCBiKSB7XHJcblx0XHRyZXR1cm4gYSA9PT0gYjtcclxuXHR9O1xyXG5cdG5vdEVxdWFscyhhLCBiKSB7XHJcblx0XHRyZXR1cm4gYSAhPT0gYjtcclxuXHR9O1xyXG5cdGlzTnVsbChhKSB7XHJcblx0XHRyZXR1cm4gYSA9PT0gbnVsbDtcclxuXHR9O1xyXG5cdGdyZWF0ZXIoYSwgYikge1xyXG5cdFx0cmV0dXJuIGEgPiBiO1xyXG5cdH07XHJcblx0bGVzcyhhLCBiKSB7XHJcblx0XHRyZXR1cm4gYSA8IGI7XHJcblx0fTtcclxuXHRncmVhdGVyT3JFcXVhbHMoYSwgYikge1xyXG5cdFx0cmV0dXJuIGEgPj0gYjtcclxuXHR9O1xyXG5cdGxlc3NPckVxdWFscyhhLCBiKSB7XHJcblx0XHRyZXR1cm4gYSA8PSBiO1xyXG5cdH07XHJcblx0aW5BcnJheShhcnJheSwgYikge1xyXG5cdFx0cmV0dXJuICQuaW5BcnJheShiLCBhcnJheSkgIT09IC0xO1xyXG5cdH07XHJcblx0c3RhcnRzV2l0aChhLCBiLCBpbnNlbnNpdGl2ZSkge1xyXG5cdFx0YSA9IFN0cmluZyhhKTtcclxuXHRcdGIgPSBTdHJpbmcoYik7XHJcblx0XHRpZiAoaW5zZW5zaXRpdmUpIHtcclxuXHRcdFx0YSA9IGEudG9VcHBlckNhc2UoKTtcclxuXHRcdFx0YiA9IGIudG9VcHBlckNhc2UoKTtcclxuXHRcdH1cclxuXHRcdGxldCBsZW5ndGggPSBhLmxlbmd0aCxcclxuXHRcdFx0c3RyID0gYS5zdWJzdHIoMCwgbGVuZ3RoKTtcclxuXHRcdHJldHVybiBzdHIgPT09IGJcclxuXHR9O1xyXG5cdGVuZHNXaXRoKGEsIGIsIGluc2Vuc2l0aXZlKSB7XHJcblx0XHRhID0gU3RyaW5nKGEpO1xyXG5cdFx0YiA9IFN0cmluZyhiKTtcclxuXHRcdGlmIChpbnNlbnNpdGl2ZSkge1xyXG5cdFx0XHRhID0gYS50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0XHRiID0gYi50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGxlbmd0aCA9IGIubGVuZ3RoICogLTEsXHJcblx0XHRcdHN0ciA9IGEuc3Vic3RyKGxlbmd0aCk7XHJcblx0XHRyZXR1cm4gc3RyID09PSBiO1xyXG5cdH07XHJcblx0Y29udGFpbnMoYSwgYiwgaW5zZW5zaXRpdmUpIHtcclxuXHRcdGEgPSBTdHJpbmcoYSk7XHJcblx0XHRiID0gU3RyaW5nKGIpO1xyXG5cdFx0aWYgKGluc2Vuc2l0aXZlKSB7XHJcblx0XHRcdGEgPSBhLnRvVXBwZXJDYXNlKCk7XHJcblx0XHRcdGIgPSBiLnRvVXBwZXJDYXNlKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYi5pbmRleE9mKGEpICE9PSAtMTtcclxuXHR9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBPcGVyYXRvcnMoKTsiLCIndXNlIHN0cmljdCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2luYXRpb24ge1xyXG5cdG9wdGlvbnM6IElPcHRpb25zO1xyXG5cdHZpZXdNb2RlbDogSVZpZXdNb2RlbDtcclxuXHRzdG9yYWdlOiBJU3RvcmFnZTtcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucywgc3RvcmFnZSwgdmlld01vZGVsLCApIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblx0XHR0aGlzLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcclxuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblxyXG5cdFx0dGhpcy5fc3Vic2NyaWJlKCk7XHJcblx0XHR0aGlzLnBhZ2UoKTtcclxuXHRcdHRoaXMudG90YWxQYWdlcygpO1xyXG5cdFx0dGhpcy5leGVjKCk7XHJcblx0fTtcclxuXHRleGVjKCkge1xyXG5cdFx0dGhpcy5fYmluZCgpO1xyXG5cdH07XHJcblxyXG5cdHBhZ2UoKSB7XHJcblx0XHR0aGlzLnN0b3JhZ2UuJHBhZ2luYXRpb25Cb3guZmluZCgnLlhncmlkLWN1cnJlbnQtcGFnZScpLnZhbCh0aGlzLnZpZXdNb2RlbC5wYWdlKTtcclxuXHR9O1xyXG5cclxuXHR0b3RhbFBhZ2VzKCkge1xyXG5cdFx0dGhpcy5zdG9yYWdlLiRwYWdpbmF0aW9uQm94LmZpbmQoJy5YZ3JpZC10b3RhbC1wYWdlcycpLnRleHQodGhpcy52aWV3TW9kZWwudG90YWxQYWdlcyk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfc3Vic2NyaWJlKCkge1xyXG5cdFx0Y29uc3QgeyB2aWV3TW9kZWwgfSA9IHRoaXM7XHJcblxyXG5cdFx0dmlld01vZGVsLm9uKCdwYWdlJywgdGhpcy5wYWdlLmJpbmQodGhpcykpO1xyXG5cdFx0dmlld01vZGVsLm9uKCd0b3RhbFBhZ2VzJywgdGhpcy50b3RhbFBhZ2VzLmJpbmQodGhpcykpO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2JpbmQoKSB7XHJcblx0XHRjb25zdCB7IHN0b3JhZ2UgfSA9IHRoaXM7XHJcblxyXG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveC5vbignY2xpY2sueGdyaWQnLCAnLlhncmlkLWZpcnN0JywgdGhpcy5faGFuZGxlckZpcnN0LmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveC5vbignY2xpY2sueGdyaWQnLCAnLlhncmlkLXByZXYnLCB0aGlzLl9oYW5kbGVyUHJldi5iaW5kKHRoaXMpKTtcclxuXHRcdHN0b3JhZ2UuJHBhZ2luYXRpb25Cb3gub24oJ2NsaWNrLnhncmlkJywgJy5YZ3JpZC1uZXh0JywgdGhpcy5faGFuZGxlck5leHQuYmluZCh0aGlzKSk7XHJcblx0XHRzdG9yYWdlLiRwYWdpbmF0aW9uQm94Lm9uKCdjbGljay54Z3JpZCcsICcuWGdyaWQtbGFzdCcsIHRoaXMuX2hhbmRsZXJMYXN0LmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveC5vbigna2V5cHJlc3MueGdyaWQnLCAnLlhncmlkLWN1cnJlbnQtcGFnZScsIHRoaXMuX2hhbmRsZXJHb1RvLmJpbmQodGhpcykpO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2hhbmRsZXJGaXJzdChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRpZiAodGhpcy52aWV3TW9kZWwucGFnZSAhPT0gMSkge1xyXG5cdFx0XHR0aGlzLnZpZXdNb2RlbC5uZXdQYWdlID0gMTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdHByaXZhdGUgX2hhbmRsZXJMYXN0KGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGlmICh0aGlzLnZpZXdNb2RlbC5wYWdlICE9PSB0aGlzLnZpZXdNb2RlbC50b3RhbFBhZ2VzKSB7XHJcblx0XHRcdHRoaXMudmlld01vZGVsLm5ld1BhZ2UgPSB0aGlzLnZpZXdNb2RlbC50b3RhbFBhZ2VzO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0cHJpdmF0ZSBfaGFuZGxlck5leHQoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgcGFnZSA9IHRoaXMudmlld01vZGVsLnBhZ2UgKyAxO1xyXG5cdFx0aWYgKHBhZ2UgPD0gdGhpcy52aWV3TW9kZWwudG90YWxQYWdlcykge1xyXG5cdFx0XHR0aGlzLnZpZXdNb2RlbC5uZXdQYWdlID0gcGFnZTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdHByaXZhdGUgX2hhbmRsZXJQcmV2KGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IHBhZ2UgPSB0aGlzLnZpZXdNb2RlbC5wYWdlIC0gMTtcclxuXHRcdGlmIChwYWdlID4gMCkge1xyXG5cdFx0XHR0aGlzLnZpZXdNb2RlbC5uZXdQYWdlID0gcGFnZTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdHByaXZhdGUgX2hhbmRsZXJHb1RvKGUpIHtcclxuXHRcdGlmIChlLndoaWNoID09PSAxMykge1xyXG5cdFx0XHRsZXQgcGFnZTogbnVtYmVyID0gKyQoZS5jdXJyZW50VGFyZ2V0KS52YWwoKTtcclxuXHRcdFx0aWYgKCFpc05hTihwYWdlKSkge1xyXG5cdFx0XHRcdGlmIChwYWdlIDwgMSkge1xyXG5cdFx0XHRcdFx0cGFnZSA9IDE7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChwYWdlID4gdGhpcy52aWV3TW9kZWwudG90YWxQYWdlcykge1xyXG5cdFx0XHRcdFx0cGFnZSA9IHRoaXMudmlld01vZGVsLnRvdGFsUGFnZXM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudmlld01vZGVsLm5ld1BhZ2UgPSBwYWdlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMudmlld01vZGVsLnBhZ2UgPSB0aGlzLnZpZXdNb2RlbC5uZXdQYWdlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG4iLCJjbGFzcyBQaXBlcyB7XHJcblx0aW50OiBGdW5jdGlvbjtcclxuXHRmbG9hdDogRnVuY3Rpb247XHJcblx0bnVtYmVyOiBGdW5jdGlvbjtcclxuXHR0ZXh0OiBGdW5jdGlvbjtcclxuXHJcblx0aXNOb3RaZXJvID0ge1xyXG5cdFx0dW5kZWZpbmVkOiAxLFxyXG5cdFx0Jyc6IDEsXHJcblx0XHRudWxsOiAxLFxyXG5cdFx0ZmFsc2U6IDEsXHJcblx0XHR0cnVlOiAxLFxyXG5cdH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5pbnRlZ2VyID0gdGhpcy5pbnRlZ2VyLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmludCA9IHRoaXMuaW50ZWdlcjtcclxuXHJcblx0XHR0aGlzLm51bWVyaWMgPSB0aGlzLm51bWVyaWMuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuZmxvYXQgPSB0aGlzLm51bWVyaWM7XHJcblx0XHR0aGlzLm51bWJlciA9IHRoaXMubnVtZXJpYztcclxuXHJcblx0XHQvL3RoaXMuZGF0ZXRpbWUgPSB0aGlzLmRhdGUuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMudGV4dCA9ICgodmFsdWUsIHJvd0RhdGEsIGNvbE1vZGVsKSA9PiB7XHJcblx0XHRcdGlmIChjb2xNb2RlbC5pbnNlbnNpdGl2ZSkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmluc2Vuc2l0aXZldGV4dC5jYWxsKHRoaXMsIHZhbHVlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zZW5zaXRpdmV0ZXh0LmNhbGwodGhpcywgdmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRnZXRCeVR5cGUodHlwZT86IHN0cmluZyk6IEZ1bmN0aW9uIHtcclxuXHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRjYXNlICdpbnQnOlxyXG5cdFx0XHRjYXNlICdpbnRlZ2VyJzpcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbnRlZ2VyO1xyXG5cdFx0XHRjYXNlICdmbG9hdCc6XHJcblx0XHRcdGNhc2UgJ251bWJlcic6XHJcblx0XHRcdGNhc2UgJ251bWVyaWMnOlxyXG5cdFx0XHRcdHJldHVybiB0aGlzLm51bWVyaWM7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudGV4dDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG51bWVyaWModmFsdWU6IGFueSk6IG51bWJlciB7XHJcblx0XHRsZXQgcmVzdWx0OiBudW1iZXI7XHJcblx0XHRpZiAodGhpcy5pc05vdFplcm9bdmFsdWVdKSB7XHJcblx0XHRcdHJlc3VsdCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChpc05hTih2YWx1ZSkpIHtcclxuXHRcdFx0XHRyZXN1bHQgPSBwYXJzZUZsb2F0KFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvLC9nLCAnLicpLnJlcGxhY2UoL1tcXCQlXS9nLCAnJykpO1xyXG5cdFx0XHRcdHJlc3VsdCA9IGlzTmFOKHJlc3VsdCkgPyBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgOiByZXN1bHQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0ID0gK3ZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH07XHJcblxyXG5cdGludGVnZXIodmFsdWUpOiBudW1iZXIge1xyXG5cdFx0bGV0IHJlc3VsdDtcclxuXHRcdGlmICh0aGlzLmlzTm90WmVyb1t2YWx1ZV0pIHtcclxuXHRcdFx0cmVzdWx0ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKCFpc05hTih2YWx1ZSkpIHtcclxuXHRcdFx0XHRyZXN1bHQgPSBTdHJpbmcodmFsdWUpLnJlcGxhY2UoL1tcXCQsJV0vZywgJycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJlc3VsdCA9IHBhcnNlSW50KHJlc3VsdCk7XHJcblx0XHRcdHJlc3VsdCA9IGlzTmFOKHJlc3VsdCkgPyBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgOiByZXN1bHQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH07XHJcblxyXG5cdGluc2Vuc2l0aXZldGV4dCh2YWx1ZSk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdmFsdWUgPyAkLnRyaW0oU3RyaW5nKHZhbHVlKSkgOiBcIlwiO1xyXG5cdH07XHJcblxyXG5cdHNlbnNpdGl2ZXRleHQodmFsdWUpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuICh2YWx1ZSA/ICQudHJpbShTdHJpbmcodmFsdWUpKSA6IFwiXCIpLnRvTG93ZXJDYXNlKCk7XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFBpcGVzKCk7IiwiaW1wb3J0IENvbE1vZGVsIGZyb20gJy4vQ29sTW9kZWwnO1xyXG5pbXBvcnQgU29ydFJ1bGUgZnJvbSAnLi9Tb3J0UnVsZSc7XHJcblxyXG5jbGFzcyBQcm9jZXNzU2V0dGluZ3Mge1xyXG5cdHZpZXdNb2RlbDogSVZpZXdNb2RlbDtcclxuXHRzdG9yYWdlOiBJU3RvcmFnZTtcclxuXHRwcm9wZXJ0aWVzOiBJUHJvY2Vzc1NldHRpbmdzUHJvcGVydGllcztcclxuXHRvcHRpb25zOiBJUHJvY2Vzc1NldHRpbmdzT3B0aW9uc1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCBzdG9yYWdlLCB2aWV3TW9kZWwpIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHtcclxuXHRcdFx0Y29sTW9kZWxzOiBbXSxcclxuXHRcdFx0ZmlsdGVyVG9vbGJhcjogZmFsc2VcclxuXHRcdH0sIG9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMucHJvcGVydGllcyA9IHtcclxuXHRcdFx0c2Nyb2xsYmFyV2lkdGg6IG51bGxcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcclxuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblx0XHR0aGlzLl9leGVjKCk7XHJcblx0fTtcclxuXHJcblx0X2dldFNjcm9sbGJhcldpZHRoKCkge1xyXG5cdFx0bGV0IGRpdiwgd2lkdGg7XHJcblx0XHRpZiAodGhpcy5wcm9wZXJ0aWVzLnNjcm9sbGJhcldpZHRoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnByb3BlcnRpZXMuc2Nyb2xsYmFyV2lkdGg7XHJcblx0XHR9XHJcblxyXG5cdFx0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRkaXYuaW5uZXJIVE1MID0gJzxkaXYgc3R5bGU9XCJ3aWR0aDo1MHB4O2hlaWdodDo1MHB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTUwcHg7dG9wOi01MHB4O292ZXJmbG93OmF1dG87XCI+PGRpdiBzdHlsZT1cIndpZHRoOjFweDtoZWlnaHQ6MTAwcHg7XCI+PC9kaXY+PC9kaXY+JztcclxuXHRcdGRpdiA9IGRpdi5maXJzdENoaWxkO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdFx0d2lkdGggPSBkaXYub2Zmc2V0V2lkdGggLSBkaXYuY2xpZW50V2lkdGg7XHJcblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XHJcblx0XHR0aGlzLnByb3BlcnRpZXMuc2Nyb2xsYmFyV2lkdGggPSB3aWR0aDtcclxuXHRcdHJldHVybiB3aWR0aDtcclxuXHR9O1xyXG5cclxuXHRfY29sdW1uTW9kZWwoKSB7XHJcblx0XHRjb25zdCB7IHN0b3JhZ2UsIG9wdGlvbnMgfSA9IHRoaXM7XHJcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBbXTtcclxuXHRcdGNvbnN0IGFsaWFzZXMgPSB7fTtcclxuXHRcdGNvbnN0IGNvbE1vZGVsc0RpY3Rpb25hcnkgPSB7fTtcclxuXHJcblx0XHQkLmVhY2gob3B0aW9ucy5jb2xNb2RlbHMsIChpLCBtb2RlbCkgPT4ge1xyXG5cdFx0XHRjb25zdCBjb2xNb2RlbCA9IG5ldyBDb2xNb2RlbChtb2RlbCwgaSk7XHJcblxyXG5cdFx0XHRpZiAoIWFsaWFzZXNbY29sTW9kZWwuYWxpYXNdKSB7XHJcblx0XHRcdFx0YWxpYXNlc1tjb2xNb2RlbC5hbGlhc10gPSAxO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRocm93IHtcclxuXHRcdFx0XHRcdHZhbHVlOiB7XHJcblx0XHRcdFx0XHRcdGk6IGksXHJcblx0XHRcdFx0XHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KG1vZGVsKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6ICdhbGlhcyBpcyBub3QgdW5pcXVlJyxcclxuXHRcdFx0XHRcdG5hbWU6ICdFcnJvcjogY29sTW9kZWwnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGNvbE1vZGVsc0RpY3Rpb25hcnlbY29sTW9kZWwuYWxpYXNdID0gY29sTW9kZWw7XHJcblx0XHRcdGNvbE1vZGVscy5wdXNoKGNvbE1vZGVsKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHN0b3JhZ2UuY29sTW9kZWxzID0gY29sTW9kZWxzO1xyXG5cdFx0c3RvcmFnZS5jb2xNb2RlbHNEaWN0aW9uYXJ5ID0gY29sTW9kZWxzRGljdGlvbmFyeTtcclxuXHR9O1xyXG5cclxuXHRfZXhlYygpIHtcclxuXHRcdGNvbnN0IHsgc3RvcmFnZSB9ID0gdGhpcztcclxuXHJcblx0XHR0aGlzLl9jb2x1bW5Nb2RlbCgpO1xyXG5cdFx0c3RvcmFnZS5zY3JvbGxiYXJXaWR0aCA9IHRoaXMuX2dldFNjcm9sbGJhcldpZHRoKCk7XHJcblx0XHR0aGlzLl9wcm9jZXNzU29ydGluZygpO1xyXG5cdH07XHJcblxyXG5cdF9wcm9jZXNzU29ydGluZygpIHtcclxuXHRcdGNvbnN0IHt2aWV3TW9kZWwsIG9wdGlvbnN9ID0gdGhpcztcclxuXHRcdGxldCBzb3J0QnkgPSBvcHRpb25zLnNvcnRCeSxcclxuXHRcdFx0ZGF0YSA9IFtdO1xyXG5cclxuXHRcdGlmIChvcHRpb25zLmZpbHRlclRvb2xiYXIpIHtcclxuXHRcdFx0dmlld01vZGVsLmZpbHRlclRvb2xiYXIgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG9wdGlvbnMucm93cykge1xyXG5cdFx0XHR2aWV3TW9kZWwucm93cyA9IG9wdGlvbnMucm93cztcclxuXHRcdH1cclxuXHRcdGlmIChzb3J0QnkgJiYgdHlwZW9mIChzb3J0QnkpID09PSAnc3RyaW5nJykge1xyXG5cdFx0XHRjb25zdCBzb3J0QnlJdGVtcyA9IHNvcnRCeS5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpLnNwbGl0KCcsJyk7XHJcblx0XHRcdGlmIChzb3J0QnlJdGVtcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRzb3J0QnlJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XHJcblx0XHRcdFx0XHRjb25zdCBzb3J0UnVsZSA9IGl0ZW0udHJpbSgpLnNwbGl0KCcgJyk7XHJcblx0XHRcdFx0XHRjb25zdCBieSA9IHNvcnRSdWxlWzBdO1xyXG5cclxuXHRcdFx0XHRcdGlmICh0eXBlb2YgKGJ5KSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRcdFx0bGV0IHJ1bGU7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoU3RyaW5nKHNvcnRSdWxlWzFdKS50b1VwcGVyQ2FzZSgpID09PSAnREVTQycpIHtcclxuXHRcdFx0XHRcdFx0XHRydWxlID0gbmV3IFNvcnRSdWxlKGJ5LCAnREVTQycpO1xyXG5cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRydWxlID0gbmV3IFNvcnRSdWxlKGJ5KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRkYXRhLnB1c2gocnVsZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoJC5pc0FycmF5KHNvcnRCeSkgJiYgc29ydEJ5Lmxlbmd0aCkge1xyXG5cdFx0XHRzb3J0QnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHsgYnksIG9yZGVyIH0gPSBpdGVtO1xyXG5cdFx0XHRcdGxldCBydWxlO1xyXG5cclxuXHRcdFx0XHRpZiAoYnkpIHtcclxuXHRcdFx0XHRcdGlmIChTdHJpbmcob3JkZXIpLnRvVXBwZXJDYXNlKCkgIT09ICdERVNDJykge1xyXG5cdFx0XHRcdFx0XHRydWxlID0gbmV3IFNvcnRSdWxlKGJ5KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJ1bGUgPSBuZXcgU29ydFJ1bGUoYnksICdERVNDJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRkYXRhLnB1c2gocnVsZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGlmIChkYXRhLmxlbmd0aCkge1xyXG5cdFx0XHR2aWV3TW9kZWwuc29ydEJ5ID0gZGF0YTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2Nlc3NTZXR0aW5nczsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVyeU1vZGVsIGltcGxlbWVudHMgSVF1ZXJ5TW9kZWwge1xyXG5cdGZpbHRlciA9IFtdO1xyXG5cdHNvcnQgPSBbXTtcclxuXHRyb3dzID0gMDtcclxuXHRwYWdlID0gMTtcclxuXHJcblx0Y29uc3RydWN0b3IoZGF0YSkge1xyXG5cdFx0JC5leHRlbmQodGhpcywgZGF0YSk7XHJcblx0fVxyXG59XHJcbiIsImNsYXNzIFNvcnQge1xyXG5cdGV4ZWMoZGF0YSA9IFtdLCBydWxlczogSUxvY2FsU29ydFJ1bGVbXSA9IFtdKSB7XHJcblx0XHRsZXQgc291cmNlO1xyXG5cdFx0aWYgKCFkYXRhLmxlbmd0aCB8fCAhcnVsZXMubGVuZ3RoKSB7XHJcblx0XHRcdHJldHVybiBkYXRhO1xyXG5cdFx0fVxyXG5cdFx0c291cmNlID0gdGhpcy5fZ2V0U291cmNlKGRhdGEsIHJ1bGVzKTtcclxuXHRcdHNvdXJjZS5zb3J0KChhLCBiKSA9PiB7XHJcblx0XHRcdGxldCByZXN1bHQgPSAwO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMCwgaiA9IHJ1bGVzLmxlbmd0aDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0bGV0IGtleSA9IHJ1bGVzW2ldLmJ5O1xyXG5cdFx0XHRcdGlmIChydWxlc1tpXS5vcmRlciA9PT0gJ0FTQycpIHtcclxuXHRcdFx0XHRcdHJlc3VsdCA9IHRoaXMuQVNDKGEuZm9ybWF0dGVkW2tleV0sIGIuZm9ybWF0dGVkW2tleV0pXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJlc3VsdCA9IHRoaXMuREVTQyhhLmZvcm1hdHRlZFtrZXldLCBiLmZvcm1hdHRlZFtrZXldKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAocmVzdWx0ICE9PSAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gc291cmNlLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG5cdFx0XHRyZXR1cm4gaXRlbS5fO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRBU0MoYSwgYikge1xyXG5cdFx0aWYgKGEgPCBiKSB7XHJcblx0XHRcdHJldHVybiAtMTtcclxuXHRcdH1cclxuXHRcdGlmIChhID4gYikge1xyXG5cdFx0XHRyZXR1cm4gMTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAwO1xyXG5cdH07XHJcblxyXG5cdERFU0MoYSwgYikge1xyXG5cdFx0aWYgKGEgPCBiKSB7XHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGEgPiBiKSB7XHJcblx0XHRcdHJldHVybiAtMTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAwO1xyXG5cdH07XHJcblx0X2dldFNvdXJjZShkYXRhLCBydWxlcykge1xyXG5cdFx0cmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRcdGxldCBmb3JtYXR0ZWQgPSB7fTtcclxuXHRcdFx0cnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xyXG5cdFx0XHRcdGZvcm1hdHRlZFtydWxlLmJ5XSA9IHJ1bGUuZ2V0KGl0ZW1bcnVsZS5ieV0sIGl0ZW0sIHJ1bGUuY29sTW9kZWwsIGRhdGEpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRfOiBpdGVtLFxyXG5cdFx0XHRcdGZvcm1hdHRlZCxcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFNvcnQoKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTb3J0UnVsZSBpbXBsZW1lbnRzIElTb3J0UnVsZSB7XHJcblx0Ynk6IHN0cmluZztcclxuXHRvcmRlcjogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihieTogc3RyaW5nLCBvcmRlciA9ICdBU0MnKSB7XHJcblx0XHR0aGlzLmJ5ID0gYnk7XHJcblx0XHR0aGlzLm9yZGVyID0gb3JkZXI7XHJcblx0fVxyXG5cclxuXHR0cmlnZ2VyT3JkZXIoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5vcmRlciA9PT0gJ0FTQycpIHtcclxuXHRcdFx0dGhpcy5vcmRlciA9ICdERVNDJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMub3JkZXIgPSAnQVNDJztcclxuXHRcdH1cclxuXHR9O1xyXG59OyIsImltcG9ydCBTb3J0UnVsZSBmcm9tICcuL1NvcnRSdWxlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvcnRpbmcge1xyXG5cdHN0b3JhZ2U6IElTdG9yYWdlO1xyXG5cdHZpZXdNb2RlbDogSVZpZXdNb2RlbDtcclxuXHRvcHRpb25zOiBJT3B0aW9ucztcclxuXHJcblx0Y29uc3RydWN0b3Ioc3RvcmFnZSwgdmlld01vZGVsLCBvcHRpb25zKSB7XHJcblx0XHR0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xyXG5cdFx0dGhpcy52aWV3TW9kZWwgPSB2aWV3TW9kZWw7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cclxuXHRcdHRoaXMuYmluZCgpO1xyXG5cdH07XHJcblxyXG5cdHNvcnRCeUFsaWFzKGFsaWFzOiBzdHJpbmcpIHtcclxuXHRcdGNvbnN0IHsgc3RvcmFnZSwgdmlld01vZGVsIH0gPSB0aGlzO1xyXG5cdFx0Y29uc3QgY29sTW9kZWwgPSBzdG9yYWdlLmNvbE1vZGVsc0RpY3Rpb25hcnlbYWxpYXNdO1xyXG5cdFx0bGV0IHNvcnRCeTogSVNvcnRSdWxlW107XHJcblxyXG5cdFx0aWYgKGNvbE1vZGVsKSB7XHJcblx0XHRcdHNvcnRCeSA9IHZpZXdNb2RlbC5zb3J0Qnk7XHJcblx0XHRcdGxldCBpID0gc29ydEJ5Lmxlbmd0aDtcclxuXHRcdFx0bGV0IHNvcnRSdWxlOiBJU29ydFJ1bGU7XHJcblxyXG5cdFx0XHR3aGlsZSAoaS0tKSB7XHJcblx0XHRcdFx0aWYgKHNvcnRCeVtpXS5ieSA9PT0gYWxpYXMpIHtcclxuXHRcdFx0XHRcdHNvcnRSdWxlID0gc29ydEJ5LnNwbGljZShpLCAxKVswXTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFzb3J0UnVsZSkge1xyXG5cdFx0XHRcdHNvcnRSdWxlID0gbmV3IFNvcnRSdWxlKGFsaWFzKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzb3J0UnVsZS50cmlnZ2VyT3JkZXIoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5tdWx0aVNvcnRpbmcpIHtcclxuXHRcdFx0XHRzb3J0QnkudW5zaGlmdChzb3J0UnVsZSlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzb3J0QnkgPSBbc29ydFJ1bGVdXHJcblx0XHRcdH1cclxuXHRcdFx0dmlld01vZGVsLnNvcnRCeSA9IHNvcnRCeTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRiaW5kKCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgJGhlYWRUYWJsZSA9IHRoaXMuc3RvcmFnZS4kaGVhZFRhYmxlO1xyXG5cclxuXHRcdHRoaXMuX29mZigpO1xyXG5cdFx0JGhlYWRUYWJsZS5vbignY2xpY2suWGdyaWQnLCAnLlhncmlkLXRoZWFkLWxhYmVsLnNvcnRhYmxlJywgdGhpcy5faGFuZGxlclNvcnRDb2x1bW4uYmluZCh0aGlzKSk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfb2ZmKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5zdG9yYWdlLiRoZWFkVGFibGUub2ZmKCcuWGdyaWQnKTtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIF9oYW5kbGVyU29ydENvbHVtbihlOiBKUXVlcnlFdmVudE9iamVjdCk6IHZvaWQge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgJGl0ZW0gPSAkKGUuY3VycmVudFRhcmdldCk7XHJcblx0XHRjb25zdCBhbGlhcyA9ICRpdGVtLmF0dHIoJ2RhdGEtYWxpYXMnKTtcclxuXHRcdGNvbnN0IGNvbG1vZGVsID0gdGhpcy5zdG9yYWdlLmNvbE1vZGVsc0RpY3Rpb25hcnlbYWxpYXNdO1xyXG5cclxuXHRcdCRpdGVtLmJsdXIoKTtcclxuXHRcdGlmIChjb2xtb2RlbCAmJiBjb2xtb2RlbC5zb3J0YWJsZSkge1xyXG5cdFx0XHR0aGlzLnNvcnRCeUFsaWFzKGFsaWFzKTtcclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIGltcGxlbWVudHMgSVN0b3JhZ2Uge1xyXG5cdHByaXZhdGUgX21vZGVsOiBJU3RvcmFnZU1vZGVsO1xyXG5cdHByaXZhdGUgX3N1YnNjcmliZXJzOiB7IFtrZXk6IHN0cmluZ106IEZ1bmN0aW9uW10gfSA9IHt9O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihtb2RlbCkge1xyXG5cdFx0dGhpcy5fbW9kZWwgPSAkLmV4dGVuZCh7XHJcblx0XHRcdCRib3g6IG51bGwsXHJcblx0XHRcdCRoZWFkVGFibGU6IG51bGwsXHJcblx0XHRcdCRncmlkVGFibGU6IG51bGwsXHJcblx0XHRcdCRoZWFkTGFiZWxzOiBudWxsLFxyXG5cdFx0XHQkcGFnaW5hdGlvbkJveDogbnVsbCxcclxuXHRcdFx0JGZpbHRlclRvb2xiYXJJdGVtczogbnVsbCxcclxuXHRcdFx0cXVlcnk6IG51bGwsXHJcblx0XHRcdHNjcm9sbGJhcldpZHRoOiAwLFxyXG5cdFx0XHRjb2xNb2RlbHM6IFtdLFxyXG5cdFx0XHRjb2xNb2RlbHNEaWN0aW9uYXJ5OiB7fSxcclxuXHRcdFx0ZmlsdGVyOiBudWxsLFxyXG5cdFx0XHRkYXRhOiBbXSxcclxuXHRcdFx0cHJvY2Vzc2VkRGF0YTogW11cclxuXHRcdH0sIG1vZGVsKTtcclxuXHR9XHJcblxyXG5cdGdldCAkYm94KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLiRib3g7XHJcblx0fVxyXG5cclxuXHRnZXQgJGhlYWRUYWJsZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kaGVhZFRhYmxlO1xyXG5cdH07XHJcblx0c2V0ICRoZWFkVGFibGUodmFsdWU6IEpRdWVyeTxIVE1MRWxlbWVudD4pIHtcclxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mICQpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuJGhlYWRUYWJsZSA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnJGhlYWRUYWJsZScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCAkZ3JpZFRhYmxlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLiRncmlkVGFibGU7XHJcblx0fTtcclxuXHRzZXQgJGdyaWRUYWJsZSh2YWx1ZTogSlF1ZXJ5PEhUTUxFbGVtZW50Pikge1xyXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgJCkge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC4kZ3JpZFRhYmxlID0gdmFsdWU7XHJcblx0XHRcdHRoaXMubm90aWZ5KCckZ3JpZFRhYmxlJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0ICRoZWFkTGFiZWxzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLiRoZWFkTGFiZWxzO1xyXG5cdH07XHJcblx0c2V0ICRoZWFkTGFiZWxzKHZhbHVlOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSB7XHJcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiAkKSB7XHJcblx0XHRcdHRoaXMuX21vZGVsLiRoZWFkTGFiZWxzID0gdmFsdWU7XHJcblx0XHRcdHRoaXMubm90aWZ5KCckaGVhZExhYmVscycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCAkcGFnaW5hdGlvbkJveCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kcGFnaW5hdGlvbkJveDtcclxuXHR9O1xyXG5cdHNldCAkcGFnaW5hdGlvbkJveCh2YWx1ZTogSlF1ZXJ5PEhUTUxFbGVtZW50Pikge1xyXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgJCkge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC4kcGFnaW5hdGlvbkJveCA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnJHBhZ2luYXRpb25Cb3gnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgJGZpbHRlclRvb2xiYXJJdGVtcygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kZmlsdGVyVG9vbGJhckl0ZW1zO1xyXG5cdH07XHJcblx0c2V0ICRmaWx0ZXJUb29sYmFySXRlbXModmFsdWU6IEpRdWVyeTxIVE1MRWxlbWVudD4pIHtcclxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mICQpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuJGZpbHRlclRvb2xiYXJJdGVtcyA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnJGZpbHRlclRvb2xiYXJJdGVtcycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBzY3JvbGxiYXJXaWR0aCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5zY3JvbGxiYXJXaWR0aDtcclxuXHR9O1xyXG5cclxuXHRzZXQgc2Nyb2xsYmFyV2lkdGgodmFsdWU6IG51bWJlcikge1xyXG5cdFx0aWYgKHR5cGVvZiAodmFsdWUpID09PSBcIm51bWJlclwiICYmIHZhbHVlID4gMCkge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC5zY3JvbGxiYXJXaWR0aCA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnc2Nyb2xsYmFyV2lkdGgnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgY29sTW9kZWxzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLmNvbE1vZGVscztcclxuXHR9O1xyXG5cdHNldCBjb2xNb2RlbHModmFsdWU6IElDb2xNb2RlbFtdKSB7XHJcblx0XHRpZiAoJC5pc0FycmF5KHZhbHVlKSkge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC5jb2xNb2RlbHMgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ2NvbE1vZGVscycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBjb2xNb2RlbHNEaWN0aW9uYXJ5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLmNvbE1vZGVsc0RpY3Rpb25hcnk7XHJcblx0fTtcclxuXHRzZXQgY29sTW9kZWxzRGljdGlvbmFyeSh2YWx1ZSkge1xyXG5cdFx0dGhpcy5fbW9kZWwuY29sTW9kZWxzRGljdGlvbmFyeSA9IHZhbHVlO1xyXG5cdFx0dGhpcy5ub3RpZnkoJ2NvbE1vZGVsc0RpY3Rpb25hcnknLCB0aGlzKTtcclxuXHR9O1xyXG5cclxuXHRnZXQgZmlsdGVyKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLmZpbHRlcjtcclxuXHR9O1xyXG5cdHNldCBmaWx0ZXIoZGF0YSkge1xyXG5cdFx0aWYgKGRhdGEgPT09IG51bGwgfHwgdHlwZW9mIChkYXRhKSA9PT0gJ29iamVjdCcpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuZmlsdGVyID0gZGF0YTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ2ZpbHRlcicsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsLmRhdGE7XHJcblx0fTtcclxuXHRzZXQgZGF0YShkYXRhOiBJUmF3RGF0YVtdKSB7XHJcblx0XHRpZiAoJC5pc0FycmF5KGRhdGEpKSB7XHJcblx0XHRcdHRoaXMuX21vZGVsLmRhdGEgPSBkYXRhO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnZGF0YScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBxdWVyeSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5xdWVyeTtcclxuXHR9O1xyXG5cdHNldCBxdWVyeShkYXRhKSB7XHJcblx0XHR0aGlzLl9tb2RlbC5xdWVyeSA9IGRhdGE7XHJcblx0XHR0aGlzLm5vdGlmeSgncXVlcnknLCB0aGlzKTtcclxuXHR9O1xyXG5cclxuXHRnZXQgcHJvY2Vzc2VkRGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5wcm9jZXNzZWREYXRhO1xyXG5cdH07XHJcblx0c2V0IHByb2Nlc3NlZERhdGEoZGF0YSkge1xyXG5cdFx0dGhpcy5fbW9kZWwucHJvY2Vzc2VkRGF0YSA9IGRhdGE7XHJcblx0XHR0aGlzLm5vdGlmeSgncHJvY2Vzc2VkRGF0YScsIHRoaXMpO1xyXG5cdH07XHJcblxyXG5cdG9uKG5hbWUsIHN1YnNjcmliZXIpIHtcclxuXHRcdHZhciBzdG9yZWdlID0gdGhpcy5fZ2V0U3RvcmFnZShuYW1lKTtcclxuXHRcdHN0b3JlZ2UucHVzaChzdWJzY3JpYmVyKTtcclxuXHR9O1xyXG5cclxuXHRub3RpZnkobmFtZSwgZGF0YSkge1xyXG5cdFx0dmFyIHN0b3JlZ2UgPSB0aGlzLl9nZXRTdG9yYWdlKG5hbWUpO1xyXG5cdFx0JC5lYWNoKHN0b3JlZ2UsIGZ1bmN0aW9uIChpLCBzdWJzY3JpYmVyKSB7XHJcblx0XHRcdGxldCBbLi4uYXJnXSA9IFtkYXRhLCBuYW1lLCBpXTtcclxuXHRcdFx0c3Vic2NyaWJlci5hcHBseShzdWJzY3JpYmVyLCBhcmcpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfZ2V0U3RvcmFnZShuYW1lKSB7XHJcblx0XHRjb25zdCBzdWJzY3JpYmVycyA9IHRoaXMuX3N1YnNjcmliZXJzO1xyXG5cdFx0aWYgKCFzdWJzY3JpYmVyc1tuYW1lXSkge1xyXG5cdFx0XHRzdWJzY3JpYmVyc1tuYW1lXSA9IFtdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN1YnNjcmliZXJzW25hbWVdO1xyXG5cdH1cclxufVxyXG4iLCJjbGFzcyBUb29scyB7XHJcblx0bm93OiBGdW5jdGlvbjtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLm5vdyA9IERhdGUubm93IHx8ICgoKSA9PiB7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgfSk7XHJcblx0fVxyXG5cclxuXHRleGVjdXRlKGZ1bmN0aW9ucywgYXJncywgY29udGV4dD8pIHtcclxuXHRcdGNvbnN0IGFwcGx5ID0gZnVuY3Rpb24gKGZvbykge1xyXG5cdFx0XHRpZiAodHlwZW9mIChmb28pID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0Zm9vLmFwcGx5KGNvbnRleHQgPyBjb250ZXh0IDogZm9vLCBhcmdzKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCQuaXNBcnJheShmdW5jdGlvbnMpKSB7XHJcblx0XHRcdGZ1bmN0aW9ucy5mb3JFYWNoKGFwcGx5KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGFwcGx5KGZ1bmN0aW9ucyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0aW5zZXJ0RWxlbWVudCgkY29udGFpbmVyLCBzZWFyY2hTdHIsIHJlcGxhY2VtZW50KSB7XHJcblx0XHRjb25zdCAkcmVwbGFjZW1lbnQgPSAkKHJlcGxhY2VtZW50KTtcclxuXHJcblx0XHRpZiAoISRyZXBsYWNlbWVudC5sZW5ndGgpIHtcclxuXHRcdFx0cmVwbGFjZW1lbnQgPSBTdHJpbmcocmVwbGFjZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0JGNvbnRhaW5lci5maW5kKFwiOm5vdChpZnJhbWUpXCIpLmFkZEJhY2soKS5jb250ZW50cygpLmZpbHRlcihmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm5vZGVUeXBlID09PSAzO1xyXG5cdFx0fSkuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh0aGlzLmRhdGEuaW5kZXhPZihzZWFyY2hTdHIpICE9PSAtMSkge1xyXG5cdFx0XHRcdGlmICgkcmVwbGFjZW1lbnQubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmFmdGVyKCRyZXBsYWNlbWVudCk7XHJcblx0XHRcdFx0XHRjb25zdCBzdHIgPSB0aGlzLmRhdGEsXHJcblx0XHRcdFx0XHRcdHBhcnQxID0gc3RyLnN1YnN0cigwLCBzdHIuaW5kZXhPZihzZWFyY2hTdHIpKSxcclxuXHRcdFx0XHRcdFx0cGFydDIgPSBzdHIuc3Vic3RyKHBhcnQxLmxlbmd0aCArIHNlYXJjaFN0ci5sZW5ndGgsIHN0ci5sZW5ndGgpO1xyXG5cdFx0XHRcdFx0aWYgKCFwYXJ0MS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChwYXJ0Mi5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHBhcnQxLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGF0YSA9IHBhcnQxO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdCRyZXBsYWNlbWVudC5hZnRlcihwYXJ0MilcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAocGFydDEubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGF0YSA9IHBhcnQxO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZShzZWFyY2hTdHIsIHJlcGxhY2VtZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dGhyb3R0bGUoZnVuYywgd2FpdCA9IDEwKSB7XHJcblx0XHRsZXQgY29udGV4dCxcclxuXHRcdFx0YXJncyxcclxuXHRcdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKC4uLnByb3BzKSB7XHJcblx0XHRcdGNvbnRleHQgPSB0aGlzO1xyXG5cdFx0XHRhcmdzID0gcHJvcHM7XHJcblx0XHRcdGlmICghY29udGV4dCkge1xyXG5cdFx0XHRcdGNvbnRleHQgPSBmdW5jXHJcblx0XHRcdH0gZWxzZSBpZiAoY29udGV4dCA9PT0gd2luZG93KSB7XHJcblx0XHRcdFx0Y29udGV4dCA9IGZ1bmM7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCF0aW1lb3V0KSB7XHJcblx0XHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0XHRcdFx0dGltZW91dCA9IG51bGw7XHJcblx0XHRcdFx0XHRmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdFx0XHRcdH0sIHdhaXQpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBUb29scygpOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdNb2RlbCBpbXBsZW1lbnRzIElWaWV3TW9kZWwge1xyXG5cdG1vZGVsOiBJVmlld01vZGVsUGFydGlhbDtcclxuXHRzdWJzY3JpYmVyczogeyBba2V5OiBzdHJpbmddOiBGdW5jdGlvbltdIH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5tb2RlbCA9IHtcclxuXHRcdFx0cm93czogMTAsXHJcblx0XHRcdHRvdGFsUm93czogMCxcclxuXHRcdFx0cGFnZTogMSxcclxuXHRcdFx0dG90YWxQYWdlczogMCxcclxuXHRcdFx0bmV3UGFnZTogMSxcclxuXHRcdFx0ZGF0YTogW10sXHJcblx0XHRcdHNvcnRCeTogW10sXHJcblx0XHRcdGZpbHRlclRvb2xiYXI6IHRydWVcclxuXHRcdH1cclxuXHRcdHRoaXMuc3Vic2NyaWJlcnMgPSB7fTtcclxuXHR9XHJcblxyXG5cdGdldCBkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwuZGF0YTtcclxuXHR9O1xyXG5cdHNldCBkYXRhKGRhdGEpIHtcclxuXHRcdGlmICgkLmlzQXJyYXkoZGF0YSkpIHtcclxuXHRcdFx0dGhpcy5tb2RlbC5kYXRhID0gZGF0YTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ2RhdGEnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgc29ydEJ5KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwuc29ydEJ5O1xyXG5cdH07XHJcblx0c2V0IHNvcnRCeShkYXRhKSB7XHJcblx0XHRpZiAoJC5pc0FycmF5KGRhdGEpKSB7XHJcblx0XHRcdHRoaXMubW9kZWwuc29ydEJ5ID0gZGF0YTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ3NvcnRCeScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCB0b3RhbFJvd3MoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb2RlbC50b3RhbFJvd3M7XHJcblx0fTtcclxuXHRzZXQgdG90YWxSb3dzKHRvdGFsUm93cykge1xyXG5cdFx0aWYgKHR5cGVvZiAodG90YWxSb3dzKSA9PT0gXCJudW1iZXJcIiAmJiB0b3RhbFJvd3MgPiAtMSkge1xyXG5cdFx0XHR0aGlzLm1vZGVsLnRvdGFsUm93cyA9IHRvdGFsUm93cztcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ3RvdGFsUm93cycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCB0b3RhbFBhZ2VzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwudG90YWxQYWdlcztcclxuXHR9O1xyXG5cdHNldCB0b3RhbFBhZ2VzKHRvdGFsUGFnZXMpIHtcclxuXHRcdGlmICh0eXBlb2YgKHRvdGFsUGFnZXMpID09PSBcIm51bWJlclwiICYmIHRvdGFsUGFnZXMgPiAtMSkge1xyXG5cdFx0XHR0aGlzLm1vZGVsLnRvdGFsUGFnZXMgPSB0b3RhbFBhZ2VzO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgndG90YWxQYWdlcycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCByb3dzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwucm93cztcclxuXHR9O1xyXG5cdHNldCByb3dzKHJvd3MpIHtcclxuXHRcdGlmICh0eXBlb2YgKHJvd3MpID09PSBcIm51bWJlclwiICYmIHJvd3MgPiAtMSkge1xyXG5cdFx0XHR0aGlzLm1vZGVsLnJvd3MgPSByb3dzO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgncm93cycsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBwYWdlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwucGFnZTtcclxuXHR9O1xyXG5cdHNldCBwYWdlKHBhZ2UpIHtcclxuXHRcdGlmICh0eXBlb2YgKHBhZ2UpID09PSBcIm51bWJlclwiICYmIHBhZ2UgPiAtMSkge1xyXG5cdFx0XHR0aGlzLm1vZGVsLnBhZ2UgPSBwYWdlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgncGFnZScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBuZXdQYWdlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwubmV3UGFnZTtcclxuXHR9O1xyXG5cdHNldCBuZXdQYWdlKHBhZ2UpIHtcclxuXHRcdGlmICh0eXBlb2YgKHBhZ2UpID09PSBcIm51bWJlclwiICYmIHBhZ2UgPiAtMSkge1xyXG5cdFx0XHR0aGlzLm1vZGVsLm5ld1BhZ2UgPSBwYWdlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnbmV3UGFnZScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBmaWx0ZXJUb29sYmFyKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwuZmlsdGVyVG9vbGJhcjtcclxuXHR9O1xyXG5cdHNldCBmaWx0ZXJUb29sYmFyKGRhdGE6IGJvb2xlYW4pIHtcclxuXHRcdHRoaXMubW9kZWwuZmlsdGVyVG9vbGJhciA9IGRhdGE7XHJcblx0XHR0aGlzLm5vdGlmeSgnZmlsdGVyVG9vbGJhcicsIHRoaXMpO1xyXG5cdH07XHJcblxyXG5cdG9uKG5hbWUsIHN1YnNjcmliZXIpOiB2b2lkIHtcclxuXHRcdHZhciBzdG9yZWdlID0gdGhpcy5fZ2V0U3RvcmFnZShuYW1lKTtcclxuXHRcdHN0b3JlZ2UucHVzaChzdWJzY3JpYmVyKTtcclxuXHR9O1xyXG5cclxuXHRub3RpZnkobmFtZSwgZGF0YSk6IHZvaWQge1xyXG5cdFx0dmFyIHN0b3JlZ2UgPSB0aGlzLl9nZXRTdG9yYWdlKG5hbWUpO1xyXG5cdFx0JC5lYWNoKHN0b3JlZ2UsIGZ1bmN0aW9uIChpLCBzdWJzY3JpYmVyKSB7XHJcblx0XHRcdGxldCBbLi4uYXJnXSA9IFtkYXRhLCBuYW1lLCBpXTtcclxuXHRcdFx0c3Vic2NyaWJlci5hcHBseShzdWJzY3JpYmVyLCBhcmcpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfZ2V0U3RvcmFnZShuYW1lKSB7XHJcblx0XHRjb25zdCBzdWJzY3JpYmVycyA9IHRoaXMuc3Vic2NyaWJlcnM7XHJcblx0XHRpZiAoIXN1YnNjcmliZXJzW25hbWVdKSB7XHJcblx0XHRcdHN1YnNjcmliZXJzW25hbWVdID0gW107XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gc3Vic2NyaWJlcnNbbmFtZV07XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBWaWV3TW9kZWwgZnJvbSAnLi9WaWV3TW9kZWwnO1xyXG5pbXBvcnQgUHJvY2Vzc1NldHRpbmdzIGZyb20gJy4vUHJvY2Vzc1NldHRpbmdzJztcclxuaW1wb3J0IEJ1aWxkSW5mcmFzdHJ1Y3R1cmUgZnJvbSAnLi9CdWlsZEluZnJhc3RydWN0dXJlJztcclxuaW1wb3J0IEZpbHRlclRvb2xiYXIgZnJvbSAnLi9GaWx0ZXJUb29sYmFyJztcclxuaW1wb3J0IFNvcnRpbmcgZnJvbSAnLi9Tb3J0aW5nJztcclxuaW1wb3J0IERpc3BsYXkgZnJvbSAnLi9EaXNwbGF5JztcclxuaW1wb3J0IEZpeGVkSGVhZGVyIGZyb20gJy4vRml4ZWRIZWFkZXInO1xyXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL1N0b3JhZ2UnO1xyXG5pbXBvcnQgRmlsbCBmcm9tICcuL0ZpbGwnO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL1BhZ2luYXRpb24nO1xyXG5pbXBvcnQgdG9vbHMgZnJvbSAnLi9Ub29scyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYZ3JpZCB7XHJcblx0b3B0aW9uczogSU9wdGlvbnM7XHJcblx0cHJvcGVydGllczogSVhncmlkUHJvcGVydGllcztcclxuXHRWaWV3TW9kZWw6IElWaWV3TW9kZWw7XHJcblx0UHJvY2Vzc1NldHRpbmdzOiBQcm9jZXNzU2V0dGluZ3M7XHJcblx0QnVpbGRJbmZyYXN0cnVjdHVyZTogQnVpbGRJbmZyYXN0cnVjdHVyZTtcclxuXHRTb3J0aW5nOiBTb3J0aW5nO1xyXG5cdFN0b3JhZ2U6IElTdG9yYWdlO1xyXG5cdEZpbGw6IEZpbGw7XHJcblx0RGlzcGxheTogRGlzcGxheTtcclxuXHRGaXhlZEhlYWRlcjogRml4ZWRIZWFkZXI7XHJcblx0RmlsdGVyVG9vbGJhcjogRmlsdGVyVG9vbGJhcjtcclxuXHRQYWdpbmF0aW9uOiBQYWdpbmF0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zOiBJT3B0aW9ucywgJGJveDogSlF1ZXJ5KSB7XHJcblx0XHR0aGlzLnByb3BlcnRpZXMgPSB7XHJcblx0XHRcdCRib3gsXHJcblx0XHRcdGRhdGE6IFtdXHJcblx0XHR9XHJcblx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7XHJcblx0XHRcdGJlZm9yZVJlcXVlc3Q6IFtdLFxyXG5cdFx0XHRhZnRlclJlc3BvbnNlOiBbXSxcclxuXHRcdFx0c29ydEJ5OiBbXSxcclxuXHRcdFx0cGFnaW5hdGlvblNlbGVjdG9yOiAnJyxcclxuXHRcdFx0YWpheFR5cGU6ICdQT1NUJyxcclxuXHRcdFx0ZmlsdGVyVG9vbGJhckdyb3VwT3A6ICdBTkQnLFxyXG5cdFx0XHR1cmw6ICcnLFxyXG5cdFx0XHRtdWx0aVNvcnRpbmc6IGZhbHNlLFxyXG5cdFx0XHRmaWx0ZXJUb29sYmFyOiBmYWxzZVxyXG5cdFx0fSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0dGhpcy5TdG9yYWdlID0gbmV3IFN0b3JhZ2UoeyAkYm94IH0pXHJcblx0XHR0aGlzLl9leGVjKCk7XHJcblx0fTtcclxuXHJcblx0cHVibGljIHNldEdyaWREYXRhKHJvd3MpOiBYZ3JpZCB7XHJcblx0XHR0aGlzLlN0b3JhZ2UuZGF0YSA9IHJvd3M7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG5cdHB1YmxpYyByZWZyZXNoKCk6IFhncmlkIHtcclxuXHRcdHRoaXMuU3RvcmFnZS5ub3RpZnkoJ2RhdGEnLCB0aGlzLlN0b3JhZ2UpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxuXHJcblx0YWpheEZ1bmN0aW9uKHF1ZXJ5T2JqZWN0OiBJUmVxdWVzdCwgdXJsOiBzdHJpbmcpOiBKUXVlcnkuanFYSFI8SVJlc3BvbnNlPiB7XHJcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cclxuXHRcdHJldHVybiAkLmFqYXgoe1xyXG5cdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0ZGF0YTogcXVlcnlPYmplY3QsXHJcblx0XHRcdHR5cGU6IG9wdGlvbnMuYWpheFR5cGUsXHJcblx0XHRcdGRhdGFUeXBlOiAnanNvbidcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX3Jlc3BvbnNlKHJlc3BvbnNlT2JqZWN0OiBJUmVzcG9uc2UpIHtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblx0XHRpZiAob3B0aW9ucy5hZnRlclJlc3BvbnNlKSB7XHJcblx0XHRcdHRvb2xzLmV4ZWN1dGUob3B0aW9ucy5hZnRlclJlc3BvbnNlLCBbcmVzcG9uc2VPYmplY3RdKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIF9yZXF1ZXN0KHF1ZXJ5T2JqZWN0OiBJUmVxdWVzdCA9IHt9KSB7XHJcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxyXG5cdFx0XHRkID0gJC5EZWZlcnJlZCgpO1xyXG5cclxuXHRcdGlmIChvcHRpb25zLmJlZm9yZVJlcXVlc3QpIHtcclxuXHRcdFx0dG9vbHMuZXhlY3V0ZShvcHRpb25zLmJlZm9yZVJlcXVlc3QsIFtxdWVyeU9iamVjdF0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYWpheEZ1bmN0aW9uKHF1ZXJ5T2JqZWN0LCBvcHRpb25zLnVybCkuZG9uZSh0aGlzLl9yZXNwb25zZS5iaW5kKHRoaXMpKS5hbHdheXMoZC5yZXNvbHZlKTtcclxuXHJcblx0XHRyZXR1cm4gZDtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIF9iaW5kKCk6IHZvaWQge1xyXG5cdFx0Ly8gdG8gRG8gaWYgbW9kZWwgd2lsbCBiZSBjaGFuZ2VkXHJcblx0XHR0aGlzLlN0b3JhZ2Uub24oJ2NvbE1vZGVscycsICgpID0+IHtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyh0aGlzLkZpbGwpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5TdG9yYWdlLm9uKCdkYXRhJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLkRpc3BsYXkuZXhlYygpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5WaWV3TW9kZWwub24oJ2RhdGEnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuRmlsbC50Ym9keSgpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLkZpeGVkSGVhZGVyLnJlc2l6ZSgpO1xyXG5cdFx0XHR9LCAxMDUwKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5TdG9yYWdlLm9uKCckcGFnaW5hdGlvbkJveCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy5QYWdpbmF0aW9uLmV4ZWMoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuU3RvcmFnZS5vbignJGhlYWRUYWJsZScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5Tb3J0aW5nLmJpbmQoKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0cHJpdmF0ZSBfZXhlYygpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHsgb3B0aW9ucyB9ID0gdGhpcztcclxuXHJcblx0XHR0aGlzLlZpZXdNb2RlbCA9IG5ldyBWaWV3TW9kZWwoKTtcclxuXHRcdHRoaXMuUHJvY2Vzc1NldHRpbmdzID0gbmV3IFByb2Nlc3NTZXR0aW5ncyhvcHRpb25zLCB0aGlzLlN0b3JhZ2UsIHRoaXMuVmlld01vZGVsKTtcclxuXHRcdHRoaXMuQnVpbGRJbmZyYXN0cnVjdHVyZSA9IG5ldyBCdWlsZEluZnJhc3RydWN0dXJlKG9wdGlvbnMsIHRoaXMuU3RvcmFnZSwgdGhpcy5WaWV3TW9kZWwpO1xyXG5cdFx0dGhpcy5Tb3J0aW5nID0gbmV3IFNvcnRpbmcodGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCwgb3B0aW9ucyk7XHJcblx0XHR0aGlzLkZpbGwgPSBuZXcgRmlsbCh0aGlzLlN0b3JhZ2UsIHRoaXMuVmlld01vZGVsKTtcclxuXHRcdHRoaXMuRmlsdGVyVG9vbGJhciA9IG5ldyBGaWx0ZXJUb29sYmFyKHRoaXMuU3RvcmFnZSwgdGhpcy5WaWV3TW9kZWwsIG9wdGlvbnMpO1xyXG5cdFx0dGhpcy5EaXNwbGF5ID0gbmV3IERpc3BsYXkoe1xyXG5cdFx0XHRzdG9yYWdlOiB0aGlzLlN0b3JhZ2UsXHJcblx0XHRcdHZpZXdNb2RlbDogdGhpcy5WaWV3TW9kZWwsXHJcblx0XHRcdGFqYXg6ICgocXVlcnlPYmplY3Q6IElSZXF1ZXN0KSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3JlcXVlc3QocXVlcnlPYmplY3QpO1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0aXNMb2NhbDogb3B0aW9ucy51cmwgPyBmYWxzZSA6IHRydWVcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5GaXhlZEhlYWRlciA9IG5ldyBGaXhlZEhlYWRlcih0aGlzLlN0b3JhZ2UpO1xyXG5cdFx0dGhpcy5QYWdpbmF0aW9uID0gbmV3IFBhZ2luYXRpb24ob3B0aW9ucywgdGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCk7XHJcblxyXG5cdFx0dGhpcy5fYmluZCgpO1xyXG5cclxuXHRcdHRoaXMuRmlsbC50aGVhZCgpO1xyXG5cclxuXHRcdGlmICghJC5pc0FycmF5KG9wdGlvbnMuZGF0YSkpIHtcclxuXHRcdFx0b3B0aW9ucy5kYXRhID0gW107XHJcblx0XHR9XHJcblx0XHR0aGlzLlN0b3JhZ2UuZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuXHR9XHJcbn0iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=
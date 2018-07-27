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
                var fieldName = colModel.alias || colModel.key;
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
/* harmony import */ var _FilterToolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterToolbar */ "./src/modules/FilterToolbar.ts");
/* harmony import */ var _Sorting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sorting */ "./src/modules/Sorting.ts");
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Display */ "./src/modules/Display.ts");
/* harmony import */ var _FixedHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FixedHeader */ "./src/modules/FixedHeader.ts");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.ts");
/* harmony import */ var _Fill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Fill */ "./src/modules/Fill.ts");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0J1aWxkSW5mcmFzdHJ1Y3R1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ29sTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRGlzcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9EaXNwbGF5TW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRmlsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9GaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRmlsdGVyTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRmlsdGVyVG9vbGJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9GaWx0ZXJUb29sYmFyTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRml4ZWRIZWFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvTG9jYWxTb3J0UnVsZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL09wZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1BpcGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1Byb2Nlc3NTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9RdWVyeU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1NvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvU29ydFJ1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvU29ydGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9TdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1Rvb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1ZpZXdNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9YZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGb0M7QUFFcEMsQ0FBQyxVQUFDLENBQUM7SUFDRixDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRztRQUFVLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ3BDLElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBTSxPQUFPLEdBQXNCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxHQUFHLENB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O0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0Y7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJFOzs7Ozs7Ozs7Ozs7QUNuRkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNB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LENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0IsT0FBTyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDbEI7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFDRixZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3RJRCx5QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgWGdyaWQgZnJvbSAnLi9tb2R1bGVzL1hncmlkJztcclxuXHJcbigoJCkgPT4ge1xyXG5cdCQuZm4uWGdyaWQgPSBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pIHtcclxuXHRcdGxldCBkYXRhO1xyXG5cdFx0Y29uc3Qgb3B0aW9uczogSU9wdGlvbnMgfCBzdHJpbmcgPSBhcmdzWzBdO1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGRhdGEgPSAkKHRoaXMpLmRhdGEoJ1hncmlkJyk7XHJcblx0XHRcdGlmICghZGF0YSkge1xyXG5cdFx0XHRcdGNvbnN0IHByb3BzOiBJT3B0aW9ucyA9ICh0eXBlb2YgKG9wdGlvbnMpID09PSAnc3RyaW5nJykgPyBhcmdzWzFdIDogb3B0aW9ucztcclxuXHRcdFx0XHQkKHRoaXMpLmRhdGEoJ1hncmlkJywgbmV3IFhncmlkKHByb3BzLCAkKHRoaXMpKSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIChvcHRpb25zKSA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5pbmRleE9mKCdfJykgIT09IDAgJiYgZGF0YVtvcHRpb25zXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdGNvbnN0IHByb3BzID0gYXJncy5zbGljZSgxKTtcclxuXHRcdFx0XHRkYXRhW29wdGlvbnNdLmFwcGx5KGRhdGEsIHByb3BzKTtcclxuXHRcdFx0fSBlbHNlIGlmIChkYXRhLnJlZnJlc2gpIHtcclxuXHRcdFx0XHRkYXRhLnJlZnJlc2guYXBwbHkoZGF0YSwgYXJncyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufSkoalF1ZXJ5KTtcclxuIiwiaW1wb3J0IHRvb2xzIGZyb20gJy4vVG9vbHMnO1xyXG5cclxuY2xhc3MgQnVpbGRJbmZyYXN0cnVjdHVyZSB7XHJcblx0dmlld01vZGVsOiBJVmlld01vZGVsO1xyXG5cdHN0b3JhZ2U6IElTdG9yYWdlO1xyXG5cdG9wdGlvbnM6IElCdWlsZEluZnJhc3RydWN0dXJlT3B0aW9ucztcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucywgc3RvcmFnZSwgdmlld01vZGVsKSB7XHJcblx0XHR0aGlzLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcclxuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHtcclxuXHRcdFx0dGhlYWRDbGFzczogJ3RhYmxlLWdyaWQtdGhlYWQnLFxyXG5cdFx0XHR0Ym9keUNsYXNzOiAndGFibGUtZ3JpZC10Ym9keScsXHJcblx0XHRcdGZpcnN0QnRuVGVtcGxhdGU6ICc8c3BhbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPiYjMTcxOzwvc3Bhbj4nLFxyXG5cdFx0XHRsYXN0QnRuVGVtcGxhdGU6ICc8c3BhbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPiYjMTg3Ozwvc3Bhbj4nLFxyXG5cdFx0XHRwcmV2QnRuVGVtcGxhdGU6ICc8c3BhbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPiYjODI0OTs8L3NwYW4+JyxcclxuXHRcdFx0bmV4dEJ0blRlbXBsYXRlOiAnPHNwYW4gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj4mIzgyNTA7PC9zcGFuPicsXHJcblx0XHRcdGN1cnJlbnRQYWdlVGVtcGxhdGU6ICc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+JyxcclxuXHRcdFx0cGFnaW5hdGlvblRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIlhncmlkLXBhZ2dpbmF0aW9uIGlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIiA+e2ZpcnN0QnRuVGVtcGxhdGV9e3ByZXZCdG5UZW1wbGF0ZX08L2Rpdj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+IFBhZ2UgPC9zcGFuPlxyXG5cdFx0XHRcdHtjdXJyZW50UGFnZVRlbXBsYXRlfVxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj4gb2YgPHNwYW4gY2xhc3M9XCJYZ3JpZC10b3RhbC1wYWdlc1wiPjwvc3Bhbj48L3NwYW4+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWJ0blwiID57bmV4dEJ0blRlbXBsYXRlfXtsYXN0QnRuVGVtcGxhdGV9PC9kaXY+XHJcblx0XHRcdDwvZGl2PmBcclxuXHRcdH0sIG9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblx0XHR0aGlzLl9leGVjKCk7XHJcblx0fTtcclxuXHRidWlsZEZpbHRlclRvb2xiYXIoKSB7XHJcblx0XHRpZiAodGhpcy52aWV3TW9kZWwuZmlsdGVyVG9vbGJhcikge1xyXG5cdFx0XHR0aGlzLl9idWlsZEZpbHRlclRvb2xiYXIoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdF9leGVjKCkge1xyXG5cdFx0dGhpcy5fYnVpbGQoKTtcclxuXHRcdHRoaXMuX2J1aWxkVGhlYWQoKTtcclxuXHRcdHRoaXMuX2J1aWxkVEJvZHkoKTtcclxuXHRcdHRoaXMuX2J1aWxkUGFnaW5hdGlvbigpO1xyXG5cclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcclxuXHRcdGNvbnN0ICR0Zm9vdENlbGxzID0gc3RvcmFnZS4kZ3JpZFRhYmxlLmZpbmQoJy5YZ3JpZC10Ym9keS13IHRkJyk7XHJcblx0XHRjb25zdCAkdGhlYWRDZWxscyA9IHN0b3JhZ2UuJGhlYWRUYWJsZS5maW5kKCd0cicpO1xyXG5cclxuXHRcdGNvbE1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RlbCwgaSkge1xyXG5cdFx0XHRsZXQgY2VsbHMgPSBbXTtcclxuXHJcblx0XHRcdGNlbGxzLnB1c2goJHRmb290Q2VsbHMuZ2V0KGkpKTtcclxuXHRcdFx0JHRoZWFkQ2VsbHMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0Y2VsbHMucHVzaCgkKHRoaXMpLmZpbmQoJz4qOmVxKCcgKyBpICsgJyknKS5nZXQoMCkpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG1vZGVsLmRlcGVuZGVudCA9IGNlbGxzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHtcclxuXHRcdFx0XHRcdCRhbmNob3I6ICQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKSxcclxuXHRcdFx0XHRcdCRpdGVtOiAkKGl0ZW0pXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0cmVzdWx0LiRpdGVtLmJlZm9yZShyZXN1bHQuJGFuY2hvcik7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdF9hZGRQcm9wc3RvSGVhZGVyQ2VsbHMoaSwgaXRlbSkge1xyXG5cdFx0Y29uc3QgJGl0ZW0gPSAkKGl0ZW0pO1xyXG5cdFx0Y29uc3QgY29sTW9kZWwgPSB0aGlzLnN0b3JhZ2UuY29sTW9kZWxzW2ldO1xyXG5cclxuXHRcdCRpdGVtLmF0dHIoJ2RhdGEtYWxpYXMnLCBjb2xNb2RlbFsnYWxpYXMnXSk7XHJcblx0XHRpZiAoY29sTW9kZWwuZml4ZWQpIHtcclxuXHRcdFx0JGl0ZW0uYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcblx0XHRcdGlmIChjb2xNb2RlbC53aWR0aCkge1xyXG5cdFx0XHRcdCRpdGVtLndpZHRoKGNvbE1vZGVsLndpZHRoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0X2J1aWxkRmlsdGVyVG9vbGJhcigpIHtcclxuXHRcdGNvbnN0IHRhZyA9ICd0Zm9vdCc7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3QgJGZpbHRlciA9ICQoYDwke3RhZ30gY2xhc3M9XCJYZ3JpZC10aGVhZC1maWx0ZXJcIj48dHI+JHsgbmV3IEFycmF5KHN0b3JhZ2UuY29sTW9kZWxzLmxlbmd0aCArIDEpLmpvaW4oJzx0ZCBjbGFzcz1cIlhncmlkLWZpbHRlci1jZWxsXCI+PC90ZD4nKX08L3RyPjwvJHt0YWd9PmApO1xyXG5cdFx0Y29uc3QgYWRkUHJvcCA9IHRoaXMuX2FkZFByb3BzdG9IZWFkZXJDZWxscy5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdHN0b3JhZ2UuJGZpbHRlclRvb2xiYXJJdGVtcyA9ICRmaWx0ZXIuZmluZCgnLlhncmlkLWZpbHRlci1jZWxsJykuZWFjaChhZGRQcm9wKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5maW5kKCcuWGdyaWQtdGhlYWQtdyB0ZCcpLmVhY2goYWRkUHJvcCk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuYXBwZW5kKCRmaWx0ZXIpO1xyXG5cdH07XHJcblxyXG5cdF9idWlsZFRoZWFkKCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGxldCB0YWcgPSAndGhlYWQnO1xyXG5cdFx0bGV0IHdpZHRoSGVscGVyID0gYDwke3RhZ30gY2xhc3M9XCJYZ3JpZC10aGVhZC13XCI+PHRyPiR7bmV3IEFycmF5KHN0b3JhZ2UuY29sTW9kZWxzLmxlbmd0aCArIDEpLmpvaW4oJzx0ZD48ZGl2IGNsYXNzPVwiWGdyaWQtV2lkdGhMaXN0ZW5lci13cmFwcGVyXCI+PGlmcmFtZSBkYXRhLWNvbD1cIjBcIiBjbGFzcz1cIlhncmlkLVdpZHRoTGlzdGVuZXJcIj48L2lmcmFtZT48L2Rpdj48L3RkPicpfTwvdHI+PC8ke3RhZ30+YDtcclxuXHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuaHRtbCh3aWR0aEhlbHBlcik7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuZmluZCgnLlhncmlkLXRoZWFkLXcgdGQnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdGNvbnN0ICR0ZCA9ICQodGhpcyk7XHJcblx0XHRcdGNvbnN0IGNvbE1vZGVsID0gc3RvcmFnZS5jb2xNb2RlbHNbaV07XHJcblx0XHRcdGNvbnN0IGlmcmFtZTogSFRNTEVsZW1lbnQgPSAkdGQuZmluZCgnaWZyYW1lJylbMF07XHJcblxyXG5cdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdkYXRhLWFsaWFzJywgY29sTW9kZWwuYWxpYXMpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGFnID0gJ3Rib2R5JztcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5hcHBlbmQoYDwke3RhZ30gY2xhc3M9XCJYZ3JpZC10aGVhZC1sYWJlbHNcIj48dHI+JHtuZXcgQXJyYXkoc3RvcmFnZS5jb2xNb2RlbHMubGVuZ3RoICsgMSkuam9pbignPHRoIGNsYXNzPVwiWGdyaWQtdGhlYWQtbGFiZWxcIj48L3RoPicpfTwvdHI+PC8ke3RhZ30+YCk7XHJcblx0XHRzdG9yYWdlLiRoZWFkTGFiZWxzID0gc3RvcmFnZS4kaGVhZFRhYmxlLmZpbmQoJy5YZ3JpZC10aGVhZC1sYWJlbCcpO1xyXG5cdFx0c3RvcmFnZS4kaGVhZExhYmVscy5lYWNoKChpLCBpdGVtKSA9PiB7XHJcblx0XHRcdHRoaXMuX2FkZFByb3BzdG9IZWFkZXJDZWxscyhpLCBpdGVtKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuYnVpbGRGaWx0ZXJUb29sYmFyKCk7XHJcblx0fTtcclxuXHJcblx0X2J1aWxkVEJvZHkoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0bGV0IHdpZHRoSGVscGVyID0gJzx0aGVhZCBjbGFzcz1cIlhncmlkLXRib2R5LXdcIj48dHI+JyArIG5ldyBBcnJheShzdG9yYWdlLmNvbE1vZGVscy5sZW5ndGggKyAxKS5qb2luKCc8dGQ+PGk+PC9pPjwvdGQ+JykgKyAnPC90cj48L3RoZWFkPic7XHJcblxyXG5cdFx0c3RvcmFnZS4kZ3JpZFRhYmxlLmh0bWwod2lkdGhIZWxwZXIpO1xyXG5cdFx0c3RvcmFnZS4kZ3JpZFRhYmxlLmZpbmQoJy5YZ3JpZC10Ym9keS13IHRyIHRkJykuZWFjaCgoaSwgaXRlbSkgPT4ge1xyXG5cdFx0XHR0aGlzLl9hZGRQcm9wc3RvSGVhZGVyQ2VsbHMoaSwgaXRlbSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRfYnVpbGRQYWdpbmF0aW9uKCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblx0XHRjb25zdCAkcGFnaW5hdGlvbiA9ICQob3B0aW9ucy5wYWdpbmF0aW9uVGVtcGxhdGUpO1xyXG5cdFx0Y29uc3QgeyBmaXJzdEJ0blRlbXBsYXRlLCBsYXN0QnRuVGVtcGxhdGUsIHByZXZCdG5UZW1wbGF0ZSwgbmV4dEJ0blRlbXBsYXRlLCBjdXJyZW50UGFnZVRlbXBsYXRlIH0gPSBvcHRpb25zO1xyXG5cdFx0bGV0ICRwYWdpbmF0aW9uQm94O1xyXG5cclxuXHRcdHRvb2xzLmluc2VydEVsZW1lbnQoJHBhZ2luYXRpb24sICd7Zmlyc3RCdG5UZW1wbGF0ZX0nLCBmaXJzdEJ0blRlbXBsYXRlID8gJChmaXJzdEJ0blRlbXBsYXRlKS5hZGRDbGFzcygnWGdyaWQtZmlyc3QnKSA6ICcnKTtcclxuXHRcdHRvb2xzLmluc2VydEVsZW1lbnQoJHBhZ2luYXRpb24sICd7cHJldkJ0blRlbXBsYXRlfScsICQocHJldkJ0blRlbXBsYXRlKS5hZGRDbGFzcygnWGdyaWQtcHJldicpKTtcclxuXHRcdHRvb2xzLmluc2VydEVsZW1lbnQoJHBhZ2luYXRpb24sICd7bmV4dEJ0blRlbXBsYXRlfScsICQobmV4dEJ0blRlbXBsYXRlKS5hZGRDbGFzcygnWGdyaWQtbmV4dCcpKTtcclxuXHRcdHRvb2xzLmluc2VydEVsZW1lbnQoJHBhZ2luYXRpb24sICd7bGFzdEJ0blRlbXBsYXRlfScsICQobGFzdEJ0blRlbXBsYXRlKS5hZGRDbGFzcygnWGdyaWQtbGFzdCcpKTtcclxuXHRcdHRvb2xzLmluc2VydEVsZW1lbnQoJHBhZ2luYXRpb24sICd7Y3VycmVudFBhZ2VUZW1wbGF0ZX0nLCAkKGN1cnJlbnRQYWdlVGVtcGxhdGUpLmFkZENsYXNzKCdYZ3JpZC1jdXJyZW50LXBhZ2UnKSk7XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMucGFnaW5hdGlvblNlbGVjdG9yKSB7XHJcblx0XHRcdCRwYWdpbmF0aW9uQm94ID0gJChvcHRpb25zLnBhZ2luYXRpb25TZWxlY3Rvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkcGFnaW5hdGlvbkJveCA9IHN0b3JhZ2UuJGJveC5maW5kKCcuWGdyaWQtcGFnZ2luYXRpb24td3JhcHBlcicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRwYWdpbmF0aW9uQm94Lmh0bWwoJHBhZ2luYXRpb24pO1xyXG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveCA9ICRwYWdpbmF0aW9uQm94O1xyXG5cdH07XHJcblxyXG5cdF9idWlsZCgpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cclxuXHRcdHN0b3JhZ2UuJGJveC5odG1sKGA8ZGl2IGNsYXNzPVwiWGdyaWRcIj5cclxuXHQ8ZGl2IGNsYXNzPVwiWGdyaWQtd3JhcHBlclwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cIlhncmlkLXdyYXBwZXItaG9sZGVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJYZ3JpZC10aGVhZC13cmFwcGVyXCI+XHJcblx0XHRcdFx0PHRhYmxlIGNsYXNzPVwiWGdyaWQtdGhlYWQgJHtvcHRpb25zLnRoZWFkQ2xhc3N9XCI+PC90YWJsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJYZ3JpZC10Ym9keS13cmFwcGVyXCI+XHJcblx0XHRcdFx0PHRhYmxlIGNsYXNzPVwiWGdyaWQtdGJvZHkgJHtvcHRpb25zLnRib2R5Q2xhc3N9XCI+PC90YWJsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJYZ3JpZC1wYWdnaW5hdGlvbi13cmFwcGVyXCI+PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PmApO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlID0gc3RvcmFnZS4kYm94LmZpbmQoJy5YZ3JpZC10aGVhZCcpO1xyXG5cdFx0c3RvcmFnZS4kZ3JpZFRhYmxlID0gc3RvcmFnZS4kYm94LmZpbmQoJy5YZ3JpZC10Ym9keScpO1xyXG5cdH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQnVpbGRJbmZyYXN0cnVjdHVyZTsiLCJpbXBvcnQgcGlwZXMgZnJvbSAnLi9QaXBlcyc7XHJcbmltcG9ydCBGaWx0ZXJUb29sYmFyTW9kZWwgZnJvbSAnLi9GaWx0ZXJUb29sYmFyTW9kZWwnO1xyXG5cclxuY2xhc3MgQ29sTW9kZWwgaW1wbGVtZW50cyBJQ29sTW9kZWwge1xyXG5cdGFsaWFzOiBzdHJpbmc7XHJcblx0ZmlsdGVyRm9ybWF0dGVyOiBGdW5jdGlvbjtcclxuXHRmaWx0ZXJPcHRpb24gPSAnY24nO1xyXG5cdGZpbHRlclRvb2xiYXJTZXR0aW5nczogYW55O1xyXG5cdGZpbHRlclR5cGUgPSAndGV4dCc7XHJcblx0ZmlsdGVyYWJsZSA9IGZhbHNlO1xyXG5cdGZpeGVkID0gZmFsc2U7XHJcblx0aGlkZGVuID0gZmFsc2U7XHJcblx0aW5zZW5zaXRpdmUgPSBmYWxzZTtcclxuXHRrZXk6IHN0cmluZztcclxuXHRsYWJlbCA9ICcnO1xyXG5cdG9yZGVyOiBudW1iZXI7XHJcblx0cmVzaXphYmxlID0gZmFsc2U7XHJcblx0c29ydEZvcm1hdHRlcjogRnVuY3Rpb247XHJcblx0c29ydFR5cGUgPSAndGV4dCc7XHJcblx0c29ydGFibGUgPSBmYWxzZTtcclxuXHR3aWR0aDogbnVtYmVyO1xyXG5cclxuXHRkZXBlbmRlbnQgPSBbXTtcclxuXHRfY2hlY2s6IEZ1bmN0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihtb2RlbCwgb3JkZXIpIHtcclxuXHRcdHRoaXMub3JkZXIgPSBvcmRlcjtcclxuXHJcblx0XHQkLmV4dGVuZCh0aGlzLCBtb2RlbCk7XHJcblx0XHR0aGlzLmZpbHRlclRvb2xiYXJTZXR0aW5ncyA9IG5ldyBGaWx0ZXJUb29sYmFyTW9kZWwobW9kZWwuZmlsdGVyVG9vbGJhclNldHRpbmdzKTtcclxuXHJcblx0XHRpZiAodHlwZW9mICh0aGlzLmFsaWFzKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0dGhpcy5hbGlhcyA9IHRoaXMua2V5O1xyXG5cdFx0fVxyXG5cdFx0aWYgKHR5cGVvZiAodGhpcy5rZXkpID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHR0aGlzLmtleSA9IHRoaXMuYWxpYXM7XHJcblx0XHR9XHJcblx0XHRpZiAobW9kZWwuc29ydFR5cGUgJiYgdHlwZW9mIChtb2RlbC5zb3J0VHlwZSkgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0dGhpcy5zb3J0Rm9ybWF0dGVyID0gbW9kZWwuc29ydFR5cGU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNvcnRGb3JtYXR0ZXIgPSBwaXBlcy5nZXRCeVR5cGUobW9kZWwuc29ydFR5cGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChtb2RlbC5maWx0ZXJUeXBlICYmIHR5cGVvZiAobW9kZWwuZmlsdGVyVHlwZSkgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0dGhpcy5maWx0ZXJGb3JtYXR0ZXIgPSBtb2RlbC5maWx0ZXJUeXBlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5maWx0ZXJGb3JtYXR0ZXIgPSBwaXBlcy5nZXRCeVR5cGUobW9kZWwuZmlsdGVyVHlwZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5kZXBlbmRlbnQgPSBbXTtcclxuXHRcdHRoaXMuX2NoZWNrID0gZnVuY3Rpb24gKCk6IHZvaWQge1xyXG5cdFx0XHRpZiAodGhpcy5oaWRkZW4pIHtcclxuXHRcdFx0XHR0aGlzLmRlcGVuZGVudC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRcdFx0XHRpdGVtLiRpdGVtLmRldGFjaCgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZGVwZW5kZW50LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRcdFx0XHRcdGl0ZW0uJGFuY2hvci5hZnRlcihpdGVtLiRpdGVtKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGFiZWxGb3JtYXR0ZXIoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sYWJlbDtcclxuXHR9O1xyXG5cclxuXHRjZWxsRm9ybWF0dGVyKCR0ZCwgdmFsdWUsIHJvd0RhdGEsIGRhdGEpIHtcclxuXHRcdGlmICh0eXBlb2YgKHZhbHVlKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0dmFsdWUgPSAnJztcclxuXHRcdH1cclxuXHRcdHJldHVybiAnPGRpdiBjbGFzcz1cImVsbGlwc2lzXCI+JyArIHZhbHVlICsgJzwvZGl2Pic7XHJcblx0fTtcclxuXHJcblx0ZmlsdGVyVG9vbGJhckZvcm1hdHRlcigkY2VsbCwgY29sTW9kZWwpIHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gY29sTW9kZWwuZmlsdGVyVG9vbGJhclNldHRpbmdzIHx8IHt9O1xyXG5cdFx0bGV0ICRjb250cm9sLFxyXG5cdFx0XHQkY29udGFpbmVyLFxyXG5cdFx0XHQkd3JhcCA9ICQoJzxkaXYgY2xhc3M9XCJYZ3JpZC1maWx0ZXItY29udHJvbC13cmFwXCI+PC9kaXY+JyksXHJcblx0XHRcdHN0ciA9ICc8ZGl2IGNsYXNzPVwiWGdyaWQtZmlsdGVyLXdyYXBwZXJcIj4nO1xyXG5cclxuXHRcdGlmIChzZXR0aW5ncy5hbGxvd1Jlc2V0QnV0dG9uIHx8IHNldHRpbmdzLmFsbG93U3VibWl0QnV0dG9uKSB7XHJcblx0XHRcdHN0ciArPSAnPHNwYW4gY2xhc3M9XCJYZ3JpZC1maWx0ZXItYnRuc1wiPic7XHJcblx0XHRcdGlmIChzZXR0aW5ncy5hbGxvd1Jlc2V0QnV0dG9uKSB7XHJcblx0XHRcdFx0c3RyICs9ICc8c3BhbiBjbGFzcz1cIlhncmlkLWJ0biBYZ3JpZC1yZXNldFwiPiYjMTAwMDY7PC9zcGFuPic7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHNldHRpbmdzLmFsbG93U3VibWl0QnV0dG9uKSB7XHJcblx0XHRcdFx0c3RyICs9ICc8c3BhbiBjbGFzcz1cIlhncmlkLWJ0biBYZ3JpZC1vblN1Ym1pdFwiPiYjMTAwMDQ7PC9zcGFuPic7XHJcblx0XHRcdH1cclxuXHRcdFx0c3RyICs9ICc8L3NwYW4+JztcclxuXHRcdH1cclxuXHRcdHN0ciArPSAnPC9kaXY+J1xyXG5cdFx0c3dpdGNoIChzZXR0aW5ncy5mb3JtQ29udHJvbFR5cGUpIHtcclxuXHRcdFx0Y2FzZSAnc2VsZWN0JzpcclxuXHRcdFx0XHQkY29udHJvbCA9ICQoJzxzZWxlY3QgY2xhc3M9XCJYZ3JpZC1zZWxlY3QgWGdyaWQtZmlsdGVyXCIgIC8+Jyk7XHJcblx0XHRcdFx0c2V0dGluZ3Muc2VsZWN0T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpKSB7XHJcblx0XHRcdFx0XHQkY29udHJvbC5hcHBlbmQoJzxvcHRpb24gdmFsdWU9XCInICsgaSArICdcIj4nICsgZWxlbWVudC5sYWJlbCArICc8L29wdGlvbj4nKVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdCRjb250cm9sLnZhbChbXSkuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkSW5kZXggPSAtMTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHQkY29udHJvbCA9ICQoJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiWGdyaWQtaW5wdXQgWGdyaWQtZmlsdGVyXCIgLz4nKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGlmIChzZXR0aW5ncy5vbkNoYW5nZSkge1xyXG5cdFx0XHQkY29udHJvbC5hZGRDbGFzcygnWGdyaWQtb25DaGFuZ2UnKTtcclxuXHRcdH1cclxuXHRcdGlmIChzZXR0aW5ncy5vbktleWRvd24pIHtcclxuXHRcdFx0JGNvbnRyb2wuYWRkQ2xhc3MoJ1hncmlkLW9uS2V5ZG93bicpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNldHRpbmdzLm9uRW50ZXIpIHtcclxuXHRcdFx0JGNvbnRyb2wuYWRkQ2xhc3MoJ1hncmlkLW9uRW50ZXInKTtcclxuXHRcdH1cclxuXHRcdGlmIChzZXR0aW5ncy5hdHRyKSB7XHJcblx0XHRcdCRjb250cm9sLmF0dHIoc2V0dGluZ3MuYXR0cik7XHJcblx0XHR9XHJcblxyXG5cdFx0JGNvbnRhaW5lciA9ICQoc3RyKTtcclxuXHRcdCR3cmFwLmFwcGVuZCgkY29udHJvbCk7XHJcblx0XHQkY29udGFpbmVyLmFwcGVuZCgkd3JhcCk7XHJcblx0XHQkY2VsbC5odG1sKCRjb250YWluZXIpO1xyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xNb2RlbDsiLCJpbXBvcnQgdG9vbHMgZnJvbSAnLi9Ub29scyc7XHJcbmltcG9ydCBRdWVyeU1vZGVsIGZyb20gJy4vUXVlcnlNb2RlbCc7XHJcbmltcG9ydCBzb3J0IGZyb20gJy4vU29ydCc7XHJcbmltcG9ydCBmaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgRGlzcGxheU1vZGVsIGZyb20gJy4vRGlzcGxheU1vZGVsJztcclxuaW1wb3J0IExvY2FsU29ydFJ1bGVNb2RlbCBmcm9tICcuL0xvY2FsU29ydFJ1bGVNb2RlbCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheSB7XHJcblx0dmlld01vZGVsOiBJVmlld01vZGVsO1xyXG5cdHN0b3JhZ2U6IElTdG9yYWdlO1xyXG5cdGFqYXg6IEZ1bmN0aW9uO1xyXG5cdHByb2Nlc3M6IEZ1bmN0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcblx0XHR0aGlzLnZpZXdNb2RlbCA9IG9wdGlvbnMudmlld01vZGVsO1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gb3B0aW9ucy5zdG9yYWdlO1xyXG5cdFx0dGhpcy5hamF4ID0gb3B0aW9ucy5hamF4O1xyXG5cclxuXHRcdGlmIChvcHRpb25zLmlzTG9jYWwpIHtcclxuXHRcdFx0dGhpcy5wcm9jZXNzID0gdGhpcy5fbG9jYWxQcm9jZXNzLmJpbmQodGhpcyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnByb2Nlc3MgPSB0aGlzLl9zZXJ2ZXJQcm9jZXNzLmJpbmQodGhpcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuX3N1YnNjcmliZSgpO1xyXG5cdFx0fSwgNTApO1xyXG5cdH07XHJcblxyXG5cdGV4ZWMoKTogdm9pZCB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3Qgdmlld01vZGVsID0gdGhpcy52aWV3TW9kZWw7XHJcblx0XHRjb25zdCBxdWVyeTogSVF1ZXJ5TW9kZWwgPSBuZXcgUXVlcnlNb2RlbCh7XHJcblx0XHRcdGZpbHRlcjogc3RvcmFnZS5maWx0ZXIsXHJcblx0XHRcdHNvcnQ6IHZpZXdNb2RlbC5zb3J0QnksXHJcblx0XHRcdHJvd3M6IHZpZXdNb2RlbC5yb3dzLFxyXG5cdFx0XHRwYWdlOiB2aWV3TW9kZWwubmV3UGFnZSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdHN0b3JhZ2UucXVlcnkgPSBxdWVyeTtcclxuXHRcdHN0b3JhZ2UuJGJveC5hZGRDbGFzcygnWGdyaWQtbG9hZGluZycpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnByb2Nlc3MoKS5kb25lKChkYXRhOiBJRGlzcGFseU1vZGVsKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5fZmlsbGVyKGRhdGEpO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmFnZS4kYm94LnJlbW92ZUNsYXNzKCdYZ3JpZC1sb2FkaW5nJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSwgMCk7XHJcblx0fTtcclxuXHJcblx0X2ZpbGxlcihkYXRhOiBJRGlzcGFseU1vZGVsKTogdm9pZCB7XHJcblx0XHRjb25zdCB2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbDtcclxuXHRcdHZpZXdNb2RlbC50b3RhbFBhZ2VzID0gZGF0YS50b3RhbFBhZ2VzXHJcblx0XHR2aWV3TW9kZWwudG90YWxSb3dzID0gZGF0YS50b3RhbFJvd3M7XHJcblx0XHR2aWV3TW9kZWwuZGF0YSA9IGRhdGEuZGF0YTtcclxuXHRcdHZpZXdNb2RlbC5wYWdlID0gZGF0YS5wYWdlO1xyXG5cdH07XHJcblxyXG5cdF9sb2NhbEZpbHRlcihkYXRhLCBmaWx0ZXJRdWVyeSkge1xyXG5cdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCksXHJcblx0XHRcdHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdHJhd0RhdGEgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0Y29uc3QgY29sTW9kZWxzID0gc3RvcmFnZS5jb2xNb2RlbHNEaWN0aW9uYXJ5O1xyXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRjb25zdCByb3cgPSB7fTtcclxuXHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoYWxpYXMsIHJvd0RhdGEpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiAocm93W2FsaWFzXSkgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgY29sTW9kZWwgPSBjb2xNb2RlbHNbYWxpYXNdO1xyXG5cdFx0XHRcdFx0XHRcdHJvd1thbGlhc10gPSBjb2xNb2RlbC5maWx0ZXJGb3JtYXR0ZXIocm93RGF0YVtjb2xNb2RlbC5rZXldLCByb3dEYXRhLCBjb2xNb2RlbCk7XHJcblx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdHJldHVybiByb3dbYWxpYXNdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGlmIChmaWx0ZXJRdWVyeSkge1xyXG5cdFx0XHRcdGRhdGEgPSBmaWx0ZXIuZXhlYyhkYXRhLCBmaWx0ZXJRdWVyeSwgcmF3RGF0YSgpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xyXG5cdFx0fSwgMCk7XHJcblx0XHRyZXR1cm4gZGVmZXJyZWQ7XHJcblx0fTtcclxuXHJcblx0X2xvY2FsU29ydChkYXRhLCBzb3J0UnVsZXMpIHtcclxuXHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHJcblx0XHRpZiAoc29ydFJ1bGVzLmxlbmd0aCkge1xyXG5cdFx0XHRjb25zdCBsb2NhbFNvcnRSdWxlczogSUxvY2FsU29ydFJ1bGVbXSA9IHNvcnRSdWxlcy5tYXAoKHJ1bGUpID0+IHtcclxuXHRcdFx0XHRjb25zdCBjb2xNb2RlbCA9IHN0b3JhZ2UuY29sTW9kZWxzRGljdGlvbmFyeVtydWxlLmJ5XTtcclxuXHRcdFx0XHRjb25zdCBieSA9IGNvbE1vZGVsID8gY29sTW9kZWwua2V5IDogcnVsZS5ieTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIG5ldyBMb2NhbFNvcnRSdWxlTW9kZWwocnVsZS5vcmRlciwgYnksIGNvbE1vZGVsKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRkYXRhID0gc29ydC5leGVjKGRhdGEsIGxvY2FsU29ydFJ1bGVzKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcclxuXHRcdFx0fSwgMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGRlZmVycmVkO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2dldExvY2FsRGF0YShkYXRhOiBJUmF3RGF0YVtdLCBxdWVyeTogSVF1ZXJ5TW9kZWwpOiBJRGlzcGFseU1vZGVsIHtcclxuXHRcdGNvbnN0IHZpZXdNb2RlbDogSVZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsO1xyXG5cdFx0Y29uc3QgYmVnaW46IG51bWJlciA9IChxdWVyeS5wYWdlIC0gMSkgKiB2aWV3TW9kZWwucm93cztcclxuXHRcdGNvbnN0IGVuZDogbnVtYmVyID0gcXVlcnkucGFnZSAqIHZpZXdNb2RlbC5yb3dzO1xyXG5cdFx0Y29uc3QgZGF0YVRvRGlzcGxheTogSVJhd0RhdGFbXSA9IGRhdGEuc2xpY2UoYmVnaW4sIGVuZCk7XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBEaXNwbGF5TW9kZWwoXHJcblx0XHRcdGRhdGFUb0Rpc3BsYXksXHJcblx0XHRcdHF1ZXJ5LnBhZ2UsXHJcblx0XHRcdE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIHZpZXdNb2RlbC5yb3dzKSB8fCAxLFxyXG5cdFx0XHRkYXRhLmxlbmd0aCxcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfbG9jYWxQcm9jZXNzKCk6IEpRdWVyeURlZmVycmVkPElEaXNwYWx5TW9kZWw+IHtcclxuXHRcdGNvbnN0IGRlZmVycmVkOiBKUXVlcnlEZWZlcnJlZDxJRGlzcGFseU1vZGVsPiA9ICQuRGVmZXJyZWQoKTtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRjb25zdCBxdWVyeTogSVF1ZXJ5TW9kZWwgPSBzdG9yYWdlLnF1ZXJ5O1xyXG5cclxuXHRcdHRoaXMuX2xvY2FsRmlsdGVyKHN0b3JhZ2UuZGF0YSwgcXVlcnkuZmlsdGVyKS5kb25lKChmaWx0ZXJlZERhdGEpID0+IHtcclxuXHRcdFx0dGhpcy5fbG9jYWxTb3J0KGZpbHRlcmVkRGF0YSwgcXVlcnkuc29ydCkuZG9uZSgoc29ydGVkRGF0YSkgPT4ge1xyXG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmUodGhpcy5fZ2V0TG9jYWxEYXRhKHNvcnRlZERhdGEsIHF1ZXJ5KSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZGVmZXJyZWQ7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfc2VydmVyUHJvY2VzcygpOiBKUXVlcnlEZWZlcnJlZDxJRGlzcGFseU1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5hamF4KHRoaXMuc3RvcmFnZS5xdWVyeSk7XHJcblx0fTtcclxuXHRwcml2YXRlIF9zdWJzY3JpYmUoKSB7XHJcblx0XHRjb25zdCB2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbDtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRjb25zdCBhY3Rpb24gPSB0b29scy50aHJvdHRsZSgoKSA9PiB7IHRoaXMuZXhlYygpOyB9LCAxMDApO1xyXG5cdFx0Y29uc3QgX3JlbG9hZCA9IGZ1bmN0aW9uIChzLCB0eXBlKSB7XHJcblx0XHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRcdGNhc2UgJ2ZpbHRlcic6XHJcblx0XHRcdFx0XHR2aWV3TW9kZWwubmV3UGFnZSA9IDE7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdzb3J0QnknOlxyXG5cdFx0XHRcdFx0Ly92aWV3TW9kZWwubmV3UGFnZSA9IDE7ID9cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGFjdGlvbigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZpZXdNb2RlbC5vbignbmV3UGFnZScsIF9yZWxvYWQpO1xyXG5cdFx0dmlld01vZGVsLm9uKCdzb3J0QnknLCBfcmVsb2FkKTtcclxuXHRcdHN0b3JhZ2Uub24oJ2ZpbHRlcicsIF9yZWxvYWQpO1xyXG5cdH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheU1vZGVsIGltcGxlbWVudHMgSURpc3BhbHlNb2RlbCB7XHJcblx0ZGF0YTogSVJhd0RhdGFbXTtcclxuXHRwYWdlID0gMTtcclxuXHR0b3RhbFBhZ2VzOiBudW1iZXI7XHJcblx0dG90YWxSb3dzOiBudW1iZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGRhdGFUb0Rpc3BsYXk6IElSYXdEYXRhW10sIHBhZ2U6IG51bWJlciwgdG90YWxQYWdlczogbnVtYmVyLCB0b3RhbFJvd3M6IG51bWJlcikge1xyXG5cdFx0dGhpcy5kYXRhID0gZGF0YVRvRGlzcGxheTtcclxuXHRcdGlmIChwYWdlID4gMCkge1xyXG5cdFx0XHR0aGlzLnBhZ2UgPSBwYWdlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy50b3RhbFBhZ2VzID0gdG90YWxQYWdlcztcclxuXHRcdHRoaXMudG90YWxSb3dzID0gdG90YWxSb3dzO1xyXG5cdH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGwge1xyXG5cdHZpZXdNb2RlbDogSVZpZXdNb2RlbDtcclxuXHRzdG9yYWdlOiBJU3RvcmFnZTtcclxuXHJcblx0Y29uc3RydWN0b3Ioc3RvcmFnZSwgdmlld01vZGVsKSB7XHJcblx0XHR0aGlzLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcclxuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblx0fTtcclxuXHJcblx0dGhlYWQoKTogdm9pZCB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3QgY2xhc3NSdWxlcyA9IFsncmVzaXphYmxlJywgJ3NvcnRhYmxlJywgJ2ZpbHRlcmFibGUnLCAnaGlkZGVuJ107XHJcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcclxuXHJcblx0XHRzdG9yYWdlLiRoZWFkTGFiZWxzLmVhY2goKGk6IG51bWJlciwgdGg6IEhUTUxFbGVtZW50KSA9PiB7XHJcblx0XHRcdGNvbnN0ICR0aCA9ICQodGgpO1xyXG5cdFx0XHRjb25zdCAkd3JhcHBlciA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xyXG5cdFx0XHRjb25zdCBjb2xNb2RlbCA9IGNvbE1vZGVsc1tpXTtcclxuXHJcblx0XHRcdCR0aC5kYXRhKCdYZ3JpZC5kYXRhJywgY29sTW9kZWwpO1xyXG5cclxuXHRcdFx0bGV0IGRhdGEgPSBjb2xNb2RlbC5sYWJlbEZvcm1hdHRlcigkd3JhcHBlciwgJHRoLCBjb2xNb2RlbCwgaSk7XHJcblx0XHRcdGlmICh0eXBlb2YgKGRhdGEpICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdCR3cmFwcGVyLmh0bWwoZGF0YSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHQkdGguYXBwZW5kKCR3cmFwcGVyKTtcclxuXHRcdFx0JC5lYWNoKGNsYXNzUnVsZXMsIGZ1bmN0aW9uIChpLCBtYXJrKSB7XHJcblx0XHRcdFx0aWYgKGNvbE1vZGVsW21hcmtdKSB7XHJcblx0XHRcdFx0XHQkdGguYWRkQ2xhc3MobWFyayk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCR0aC5yZW1vdmVDbGFzcyhtYXJrKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmZpbHRlclRvb2xiYXIoKTtcclxuXHR9O1xyXG5cclxuXHRmaWx0ZXJUb29sYmFyKCk6IHZvaWQge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGNvbnN0IGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzO1xyXG5cclxuXHRcdGlmIChzdG9yYWdlLiRmaWx0ZXJUb29sYmFySXRlbXMpIHtcclxuXHRcdFx0c3RvcmFnZS4kZmlsdGVyVG9vbGJhckl0ZW1zLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0XHRjb25zdCAkY2VsbCA9ICQodGhpcyksXHJcblx0XHRcdFx0XHRjb2xNb2RlbCA9IGNvbE1vZGVsc1tpXTtcclxuXHRcdFx0XHRpZiAoY29sTW9kZWwuZmlsdGVyYWJsZSAmJiBjb2xNb2RlbC5maWx0ZXJUb29sYmFyRm9ybWF0dGVyKSB7XHJcblx0XHRcdFx0XHRsZXQgZGF0YSA9IGNvbE1vZGVsLmZpbHRlclRvb2xiYXJGb3JtYXR0ZXIoJGNlbGwsIGNvbE1vZGVsKTtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2YgKGRhdGEpICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdFx0XHQkY2VsbC5odG1sKGRhdGEpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkY2VsbC5lbXB0eSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR0Ym9keSgpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHsgc3RvcmFnZSwgdmlld01vZGVsIH0gPSB0aGlzO1xyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblx0XHRjb25zdCBkYXRhVG9EaXNwbGF5ID0gdmlld01vZGVsLmRhdGE7XHJcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcclxuXHRcdGNvbnN0ICRoZWFkV3JhcCA9IHN0b3JhZ2UuJGhlYWRUYWJsZS5wYXJlbnQoKTtcclxuXHRcdGNvbnN0ICRncmlkV3JhcCA9IHN0b3JhZ2UuJGdyaWRUYWJsZS5wYXJlbnQoKTtcclxuXHRcdGNvbnN0IGRhdGEgPSBzdG9yYWdlLmRhdGE7XHJcblx0XHRjb25zdCB0Ym9keSA9IHRoaXMuX2NyZWF0ZVNoYWRvd0JvZHkoZnJhZ21lbnQpO1xyXG5cdFx0bGV0IG51bSA9IDA7XHJcblxyXG5cdFx0Y29sTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGNvbE1vZGVsLCBpKSB7XHJcblx0XHRcdGNvbE1vZGVsLl9jaGVjaygpO1xyXG5cdFx0XHRjb25zdCAkdGQgPSBzdG9yYWdlLiRoZWFkTGFiZWxzLmVxKGkpO1xyXG5cclxuXHRcdFx0aWYgKCFjb2xNb2RlbC5oaWRkZW4pIHtcclxuXHRcdFx0XHRudW0rKztcclxuXHRcdFx0XHRpZiAobnVtICUgMikge1xyXG5cdFx0XHRcdFx0JHRkLmFkZENsYXNzKCdvZGQnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JHRkLmFkZENsYXNzKCdldmVuJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKHRib2R5KS5maW5kKCd0cicpLmVhY2goKGksIHRyKSA9PiB7XHJcblx0XHRcdGNvbnN0IHJvd0RhdGEgPSBkYXRhVG9EaXNwbGF5W2ldO1xyXG5cclxuXHRcdFx0dGhpcy5fZmlsbFJvdygkKHRyKSwgcm93RGF0YSwgZGF0YSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRzdG9yYWdlLiRncmlkVGFibGUuZmluZCgnPnRib2R5JykucmVtb3ZlKCk7XHJcblx0XHQkaGVhZFdyYXAuY3NzKHsgJ3BhZGRpbmctcmlnaHQnOiAnJyB9KTtcclxuXHRcdHN0b3JhZ2UuJGdyaWRUYWJsZS5hcHBlbmQodGJvZHkpO1xyXG5cclxuXHRcdGlmICgkZ3JpZFdyYXBbMF0ub2Zmc2V0V2lkdGggLSAkZ3JpZFdyYXBbMF0uY2xpZW50V2lkdGgpIHtcclxuXHRcdFx0JGhlYWRXcmFwLmNzcyh7ICdwYWRkaW5nLXJpZ2h0Jzogc3RvcmFnZS5zY3JvbGxiYXJXaWR0aCArICdweCcgfSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLl91cGRhdGVIZWFkKCk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfY3JlYXRlU2hhZG93Qm9keShmcmFnbWVudDogRG9jdW1lbnRGcmFnbWVudCkge1xyXG5cdFx0Y29uc3QgeyBzdG9yYWdlLCB2aWV3TW9kZWwgfSA9IHRoaXM7XHJcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcclxuXHRcdGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcclxuXHRcdGNvbnN0IHJvd3NDb3VudCA9IHZpZXdNb2RlbC5kYXRhLmxlbmd0aDtcclxuXHRcdGxldCB0ciA9ICc8dHI+JyArIEFycmF5KGNvbE1vZGVscy5sZW5ndGggKyAxKS5qb2luKCc8dGQ+PC90ZD4nKSArICc8L3RyPic7XHJcblx0XHRsZXQgdHJzID0gJzx0Ym9keT4nICsgbmV3IEFycmF5KHJvd3NDb3VudCArIDEpLmpvaW4odHIpICsgJzx0Ym9keT4nO1xyXG5cclxuXHRcdGlmICghZnJhZ21lbnQpIHtcclxuXHRcdFx0ZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGJvZHkuaW5uZXJIVE1MID0gdHJzO1xyXG5cdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGJvZHkpO1xyXG5cclxuXHRcdHJldHVybiB0Ym9keTtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIF9maWxsUm93KCR0ciwgcm93RGF0YSwgZGF0YSk6IHZvaWQge1xyXG5cclxuXHRcdGNvbnN0ICR0ZHMgPSAkdHIuZmluZCgndGQnKTtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcclxuXHRcdGxldCBudW0gPSAwO1xyXG5cclxuXHRcdCR0ci5kYXRhKCdYZ3JpZC5kYXRhJywgcm93RGF0YSk7XHJcblxyXG5cdFx0JC5lYWNoKGNvbE1vZGVscywgZnVuY3Rpb24gKGksIGNvbE1vZGVsKSB7XHJcblx0XHRcdGxldCB2YWx1ZSA9IHJvd0RhdGFbY29sTW9kZWwua2V5XSxcclxuXHRcdFx0XHQkdGQgPSAkdGRzLmVxKGkpLFxyXG5cdFx0XHRcdGRhdGE7XHJcblxyXG5cdFx0XHRpZiAoY29sTW9kZWwuaGlkZGVuKSB7XHJcblx0XHRcdFx0JHRkLnJlbW92ZSgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG51bSsrO1xyXG5cdFx0XHRcdGRhdGEgPSBjb2xNb2RlbC5jZWxsRm9ybWF0dGVyKCR0ZCwgdmFsdWUsIHJvd0RhdGEsIGRhdGEpO1xyXG5cdFx0XHRcdGlmIChudW0gJSAyKSB7XHJcblx0XHRcdFx0XHQkdGQuYWRkQ2xhc3MoJ29kZCcpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkdGQuYWRkQ2xhc3MoJ2V2ZW4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHR5cGVvZiAoZGF0YSkgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHQkdGQuaHRtbChkYXRhKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX3VwZGF0ZUhlYWQoKTogdm9pZCB7XHJcblx0XHRjb25zdCB7IHN0b3JhZ2UsIHZpZXdNb2RlbCB9ID0gdGhpcztcclxuXHRcdGNvbnN0IGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzO1xyXG5cdFx0Y29uc3QgJGhlYWRMYWJlbHMgPSBzdG9yYWdlLiRoZWFkTGFiZWxzO1xyXG5cdFx0Y29uc3Qgc29ydEJ5ID0ge307XHJcblxyXG5cdFx0dmlld01vZGVsLnNvcnRCeS5mb3JFYWNoKChzb3J0UnVsZSkgPT4ge1xyXG5cdFx0XHRzb3J0Qnlbc29ydFJ1bGUuYnldID0gc29ydFJ1bGUub3JkZXI7XHJcblx0XHR9KTtcclxuXHJcblx0XHRjb2xNb2RlbHMuZm9yRWFjaCgoY29sTW9kZWwsIGkpID0+IHtcclxuXHRcdFx0Y29uc3QgJGxhYmVsID0gJGhlYWRMYWJlbHMuZXEoaSk7XHJcblx0XHRcdGNvbnN0IG9yZGVyID0gc29ydEJ5W2NvbE1vZGVsLmFsaWFzXTtcclxuXHJcblx0XHRcdGlmIChvcmRlcikge1xyXG5cdFx0XHRcdCRsYWJlbC5hdHRyKCdkYXRhLXNvcnQnLCBvcmRlcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JGxhYmVsLnJlbW92ZUF0dHIoJ2RhdGEtc29ydCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG59O1xyXG4iLCJpbXBvcnQgb3BlcmF0b3JzIGZyb20gJy4vT3BlcmF0b3JzJztcclxuY2xhc3MgRmlsdGVyIHtcclxuXHRleGVjKGRhdGEsIGdyb3VwLCBnZXREYXRhKSB7XHJcblx0XHRjb25zdCBuZXdEYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0sIGkpID0+IHtcclxuXHRcdFx0Y29uc3QgZ2V0ID0gZ2V0RGF0YSgpLFxyXG5cdFx0XHRcdHN0YXRlID0gdGhpcy5fY2hlY2soZ3JvdXAsIGl0ZW0sIGdldCk7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG5ld0RhdGE7XHJcblx0fTtcclxuXHRwcml2YXRlIF9vcihydWxlcywgcm93RGF0YSwgZ2V0KSB7XHJcblx0XHRsZXQgaSA9IHJ1bGVzLmxlbmd0aDtcclxuXHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0Y29uc3QgcnVsZSA9IHJ1bGVzW2ldO1xyXG5cdFx0XHRpZiAoIW9wZXJhdG9yc1tydWxlLm9wXSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB2YWx1ZSA9IGdldChydWxlLmZpZWxkLCByb3dEYXRhKSxcclxuXHRcdFx0XHRzdGF0ZSA9IG9wZXJhdG9yc1tydWxlLm9wXShydWxlLmRhdGEsIHZhbHVlKTtcclxuXHRcdFx0aWYgKHN0YXRlKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9O1xyXG5cdHByaXZhdGUgX2FuZChydWxlcywgcm93RGF0YSwgZ2V0KSB7XHJcblx0XHRsZXQgaSA9IHJ1bGVzLmxlbmd0aDtcclxuXHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0Y29uc3QgcnVsZSA9IHJ1bGVzW2ldO1xyXG5cdFx0XHRpZiAoIW9wZXJhdG9yc1tydWxlLm9wXSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB2YWx1ZSA9IGdldChydWxlLmZpZWxkLCByb3dEYXRhKSxcclxuXHRcdFx0XHRzdGF0ZSA9IG9wZXJhdG9yc1tydWxlLm9wXShydWxlLmRhdGEsIHZhbHVlKTtcclxuXHRcdFx0aWYgKCFzdGF0ZSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxuXHRwcml2YXRlIF9jaGVjayhncm91cCwgcm93RGF0YSwgZ2V0KSB7XHJcblx0XHRjb25zdCBpc09yID0gZ3JvdXAucnVsZXMubGVuZ3RoICYmIFN0cmluZyhncm91cC5ncm91cE9wKS50b1VwcGVyQ2FzZSgpID09PSBcIk9SXCI7XHJcblx0XHRpZiAoJC5pc0FycmF5KGdyb3VwLnJ1bGVzKSAmJiBncm91cC5ydWxlcy5sZW5ndGgpIHtcclxuXHRcdFx0aWYgKGlzT3IpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fb3IoZ3JvdXAucnVsZXMsIHJvd0RhdGEsIGdldCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2FuZChncm91cC5ydWxlcywgcm93RGF0YSwgZ2V0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBGaWx0ZXIoKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJNb2RlbCBpbXBsZW1lbnRzIElGaWx0ZXJNb2RlbCB7XHJcblx0ZGF0YTogYW55O1xyXG5cdGZpZWxkOiBzdHJpbmc7XHJcblx0b3A6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoZGF0YTogYW55LCBmaWVsZDogc3RyaW5nLCBvcDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xyXG5cdFx0dGhpcy5vcCA9IG9wO1xyXG5cdH1cclxufSIsImltcG9ydCBGaWx0ZXJNb2RlbCBmcm9tICcuL0ZpbHRlck1vZGVsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlclRvb2xiYXIge1xyXG5cdHN0b3JhZ2U6IElTdG9yYWdlO1xyXG5cdHZpZXdNb2RlbDogSVZpZXdNb2RlbDtcclxuXHRvcHRpb25zOiBJT3B0aW9ucztcclxuXHR0aW1lb3V0T25LZXlkb3duID0gbnVsbDtcclxuXHJcblx0Y29uc3RydWN0b3Ioc3RvcmFnZSwgdmlld01vZGVsLCBvcHRpb25zKSB7XHJcblx0XHR0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xyXG5cdFx0dGhpcy52aWV3TW9kZWwgPSB2aWV3TW9kZWw7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cdFx0dGhpcy5fYmluZCgpO1xyXG5cdH1cclxuXHJcblx0dHJpZ2dlclRvb2xiYXIoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHRcdGNvbnN0IGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzO1xyXG5cdFx0Y29uc3QgcnVsZXMgPSBbXTtcclxuXHRcdGNvbnN0IGRlZmF1bHRTZWFyY2ggPSAnY24nO1xyXG5cdFx0Y29uc3QgZ3JvdXBPcCA9IG9wdGlvbnMuZmlsdGVyVG9vbGJhckdyb3VwT3AgPT09ICdBTkQnID8gJ0FORCcgOiAnT1InO1xyXG5cdFx0bGV0IHJ1bGVHcm91cCA9IG51bGw7XHJcblxyXG5cdFx0aWYgKCFzdG9yYWdlLiRmaWx0ZXJUb29sYmFySXRlbXMpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblxyXG5cdFx0c3RvcmFnZS4kZmlsdGVyVG9vbGJhckl0ZW1zLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0Y29uc3QgJGZpbHRlciA9ICQodGhpcyk7XHJcblx0XHRcdGNvbnN0ICRlbGVtID0gJGZpbHRlci5maW5kKCcuWGdyaWQtZmlsdGVyJylcclxuXHJcblx0XHRcdGlmICgkZWxlbS5sZW5ndGgpIHtcclxuXHRcdFx0XHRjb25zdCBjb2xNb2RlbCA9IGNvbE1vZGVsc1tpXTtcclxuXHRcdFx0XHRjb25zdCBzZXR0aW5ncyA9IGNvbE1vZGVsLmZpbHRlclRvb2xiYXJTZXR0aW5ncyB8fCB7fTtcclxuXHRcdFx0XHRjb25zdCBmaWx0ZXJPcHRpb24gPSBjb2xNb2RlbC5maWx0ZXJPcHRpb24gfHwgZGVmYXVsdFNlYXJjaDtcclxuXHRcdFx0XHRjb25zdCBmaWVsZE5hbWUgPSBjb2xNb2RlbC5hbGlhcyB8fCBjb2xNb2RlbC5rZXk7XHJcblx0XHRcdFx0bGV0IHZhbHVlID0gJGVsZW0udmFsKCk7XHJcblxyXG5cdFx0XHRcdGlmICh0eXBlb2YgKHNldHRpbmdzLnRyYW5zZm9ybURhdGEpID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IHNldHRpbmdzLnRyYW5zZm9ybURhdGEodmFsdWUsIHNldHRpbmdzKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh2YWx1ZSB8fCBmaWx0ZXJPcHRpb24gPT09IFwibnVcIiB8fCBmaWx0ZXJPcHRpb24gPT09IFwibm5cIikge1xyXG5cdFx0XHRcdFx0cnVsZXMucHVzaChuZXcgRmlsdGVyTW9kZWwodmFsdWUsIGZpZWxkTmFtZSwgZmlsdGVyT3B0aW9uKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAocnVsZXMubGVuZ3RoKSB7XHJcblx0XHRcdHJ1bGVHcm91cCA9IHtcclxuXHRcdFx0XHRncm91cE9wLFxyXG5cdFx0XHRcdHJ1bGVzXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHN0b3JhZ2UuZmlsdGVyID0gcnVsZUdyb3VwO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2JpbmQoKTogdm9pZCB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5vbigna2V5cHJlc3MnLCAnaW5wdXQuWGdyaWQtaW5wdXQuWGdyaWQtb25FbnRlcicsIHRoaXMuX2hhbmRsZXJGaWx0ZXJPbkVudGVyLmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLm9uKCdrZXlkb3duJywgJ2lucHV0LlhncmlkLWlucHV0LlhncmlkLW9uS2V5ZG93bicsIHRoaXMuX2hhbmRsZXJGaWx0ZXJPbktleWRvd24uYmluZCh0aGlzKSk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUub24oJ2NoYW5nZScsICcuWGdyaWQtZmlsdGVyLlhncmlkLW9uQ2hhbmdlJywgdGhpcy5faGFuZGxlckZpbHRlck9uQ2hhbmdlLmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLm9uKCdjbGljaycsICcuWGdyaWQtcmVzZXQnLCB0aGlzLl9oYW5kbGVyRmlsdGVyT25SZXNldC5iaW5kKHRoaXMpKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5vbignY2xpY2snLCAnLlhncmlkLW9uU3VibWl0JywgdGhpcy5faGFuZGxlckZpbHRlck9uU3VibWl0LmJpbmQodGhpcykpO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2hhbmRsZXJGaWx0ZXJPblN1Ym1pdChlOiBKUXVlcnlFdmVudE9iamVjdCkge1xyXG5cdFx0JChlLmN1cnJlbnRUYXJnZXQpLmJsdXIoKTtcclxuXHRcdHRoaXMudHJpZ2dlclRvb2xiYXIoKTtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIF9oYW5kbGVyRmlsdGVyT25SZXNldChlOiBKUXVlcnlFdmVudE9iamVjdCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGNvbnN0ICRzZWxsID0gJChlLmN1cnJlbnRUYXJnZXQpLmJsdXIoKS5wYXJlbnRzKCcuWGdyaWQtZmlsdGVyLWNlbGw6ZXEoMCknKTtcclxuXHRcdGNvbnN0IGFsaWFzID0gJHNlbGwuYXR0cignZGF0YS1hbGlhcycpO1xyXG5cdFx0Y29uc3QgJGNvbnRyb2wgPSAkc2VsbC5maW5kKCcuWGdyaWQtZmlsdGVyJyk7XHJcblx0XHRjb25zdCBjb2xNb2RlbCA9IHN0b3JhZ2UuY29sTW9kZWxzRGljdGlvbmFyeVthbGlhc107XHJcblxyXG5cdFx0aWYgKGNvbE1vZGVsKSB7XHJcblx0XHRcdGlmIChjb2xNb2RlbC5maWx0ZXJUb29sYmFyU2V0dGluZ3MuZm9ybUNvbnRyb2xUeXBlID09PSAnc2VsZWN0Jykge1xyXG5cdFx0XHRcdCRjb250cm9sLnZhbChbXSkuZWFjaCgoaTogbnVtYmVyLCBzZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50KSA9PiB7XHJcblx0XHRcdFx0XHRzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCRjb250cm9sLnZhbCgnJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy50cmlnZ2VyVG9vbGJhcigpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2hhbmRsZXJGaWx0ZXJPbkNoYW5nZSgpIHtcclxuXHRcdHRoaXMudHJpZ2dlclRvb2xiYXIoKTtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIF9oYW5kbGVyRmlsdGVyT25LZXlkb3duKGU6IEpRdWVyeUV2ZW50T2JqZWN0KSB7XHJcblx0XHRjb25zdCBrZXkgPSBlLndoaWNoO1xyXG5cclxuXHRcdHN3aXRjaCAoa2V5KSB7XHJcblx0XHRcdGNhc2UgMTM6XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRjYXNlIDk6XHJcblx0XHRcdGNhc2UgMTY6XHJcblx0XHRcdGNhc2UgMzc6XHJcblx0XHRcdGNhc2UgMzg6XHJcblx0XHRcdGNhc2UgMzk6XHJcblx0XHRcdGNhc2UgNDA6XHJcblx0XHRcdGNhc2UgMjc6XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0aWYgKHRoaXMudGltZW91dE9uS2V5ZG93bikge1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dE9uS2V5ZG93bik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudGltZW91dE9uS2V5ZG93biA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyVG9vbGJhcigpO1xyXG5cdFx0XHRcdH0sIDUwMCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfaGFuZGxlckZpbHRlck9uRW50ZXIoZTogSlF1ZXJ5RXZlbnRPYmplY3QpIHtcclxuXHRcdGNvbnN0IGtleSA9IGUuY2hhckNvZGUgfHwgZS5rZXlDb2RlIHx8IDA7XHJcblx0XHRpZiAoa2V5ID09PSAxMykge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHRoaXMudHJpZ2dlclRvb2xiYXIoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyVG9vbGJhck1vZGVsIGltcGxlbWVudHMgSUZpbHRlclRvb2xiYXJNb2RlbCB7XHJcblx0Zm9ybUNvbnRyb2xUeXBlID0gJ3RleHQnO1xyXG5cdHNlbGVjdE9wdGlvbnMgPSBbXTtcclxuXHRwbGFjZWhvbGRlciA9ICcnO1xyXG5cdG9uRW50ZXIgPSB0cnVlO1xyXG5cdG9uS2V5ZG93biA9IGZhbHNlO1xyXG5cdG9uQ2hhbmdlID0gZmFsc2U7XHJcblx0YWxsb3dSZXNldEJ1dHRvbiA9IHRydWU7XHJcblx0YWxsb3dTdWJtaXRCdXR0b24gPSB0cnVlO1xyXG5cdHRyYW5zZm9ybURhdGE/OiBGdW5jdGlvbjsgXHJcblxyXG5cdGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XHJcblx0XHQkLmV4dGVuZCh0aGlzLCBzZXR0aW5ncyk7XHJcblx0XHRpZiAoIXRoaXMudHJhbnNmb3JtRGF0YSkge1xyXG5cdFx0XHRpZiAodGhpcy5mb3JtQ29udHJvbFR5cGUgPT09ICdzZWxlY3QnKSB7XHJcblx0XHRcdFx0dGhpcy50cmFuc2Zvcm1EYXRhID0gKChkYXRhKSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgcmVzdWx0O1xyXG5cdFx0XHRcdFx0Y29uc3Qgc2VsZWN0T3B0aW9ucyA9IHRoaXMuc2VsZWN0T3B0aW9ucztcclxuXHRcdFx0XHRcdGlmICgkLmlzQXJyYXkoZGF0YSkpIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0ID0gW107XHJcblx0XHRcdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgaXRlbSA9IHNlbGVjdE9wdGlvbnNba2V5XTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbS52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGtleSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXN1bHQubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmIChzZWxlY3RPcHRpb25zW2RhdGFdKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNlbGVjdE9wdGlvbnNbZGF0YV0udmFsdWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml4ZWRIZWFkZXIge1xyXG5cdHN0b3JhZ2U6IElTdG9yYWdlO1xyXG5cdHByb3BlcnRpZXMgPSB7XHJcblx0XHQkY2VsbFdpZHRoUmVjaXBpZW50czogbnVsbCxcclxuXHRcdCRjZWxsV2lkdGhMaXN0ZW5lcnM6IG51bGwsXHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3Ioc3RvcmFnZSkge1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHRcdHRoaXMuX2V4ZWMoKTtcclxuXHR9XHJcblxyXG5cdHJlc2l6ZSgpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblxyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLmZpbmQoJy5YZ3JpZC10aGVhZC13IGlmcmFtZScpLmVhY2goKGksIGVsZW1lbnQpID0+IHtcclxuXHRcdFx0Y29uc3QgJGlmcmFtZSA9ICQoZWxlbWVudCk7XHJcblx0XHRcdGNvbnN0IHdpZHRoID0gJGlmcmFtZS53aWR0aCgpO1xyXG5cdFx0XHRjb25zdCBhbGlhcyA9ICRpZnJhbWUuYXR0cignZGF0YS1hbGlhcycpO1xyXG5cclxuXHRcdFx0dGhpcy5faGFuZGxlclJlc2l6ZWRDZWxsV2lkdGgod2lkdGgsIGFsaWFzKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2V4ZWMoKSB7XHJcblx0XHR0aGlzLl9idWlsZCgpO1xyXG5cdFx0dGhpcy5fYmluZCgpO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2J1aWxkKCkge1xyXG5cdFx0Y29uc3QgeyBzdG9yYWdlLCBwcm9wZXJ0aWVzIH0gPSB0aGlzO1xyXG5cdFx0Y29uc3QgY2VsbFdpZHRoTGlzdGVuZXJzID0gW107XHJcblxyXG5cdFx0cHJvcGVydGllcy4kY2VsbFdpZHRoUmVjaXBpZW50cyA9IHN0b3JhZ2UuJGdyaWRUYWJsZS5maW5kKCcuWGdyaWQtdGJvZHktdyBpJyk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuZmluZCgnLlhncmlkLXRoZWFkLXcgdGQnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdGNvbnN0IGlmcmFtZTogSFRNTEVsZW1lbnQgPSAkKHRoaXMpLmZpbmQoJ2lmcmFtZScpWzBdO1xyXG5cclxuXHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2wnLCBTdHJpbmcoaSkpO1xyXG5cdFx0XHRjZWxsV2lkdGhMaXN0ZW5lcnMucHVzaChpZnJhbWUpO1xyXG5cdFx0fSk7XHJcblx0XHRwcm9wZXJ0aWVzLiRjZWxsV2lkdGhMaXN0ZW5lcnMgPSAkKGNlbGxXaWR0aExpc3RlbmVycyk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfYmluZCgpIHtcclxuXHRcdGNvbnN0IHsgcHJvcGVydGllcyB9ID0gdGhpcztcclxuXHJcblx0XHRwcm9wZXJ0aWVzLiRjZWxsV2lkdGhMaXN0ZW5lcnMuZWFjaCgoaSwgaWZyYW1lKSA9PiB7XHJcblx0XHRcdGNvbnN0ICRpZnJhbWUgPSAkKGlmcmFtZSk7XHJcblxyXG5cdFx0XHR0aGlzLl9oYW5kbGVyUmVzaXplZENlbGxXaWR0aCgkaWZyYW1lLndpZHRoKCksICRpZnJhbWUuYXR0cignZGF0YS1hbGlhcycpKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0JChpZnJhbWUuY29udGVudFdpbmRvdykub24oJ3Jlc2l6ZScsICgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuX2hhbmRsZXJSZXNpemVkQ2VsbFdpZHRoKCRpZnJhbWUud2lkdGgoKSwgJGlmcmFtZS5hdHRyKCdkYXRhLWFsaWFzJykpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LCAxMDApO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfaGFuZGxlclJlc2l6ZWRDZWxsV2lkdGgod2lkdGg6IG51bWJlciwgYWxpYXM6IHN0cmluZykge1xyXG5cdFx0Y29uc3QgeyBwcm9wZXJ0aWVzIH0gPSB0aGlzO1xyXG5cdFx0Y29uc3QgJGl0ZW0gPSBwcm9wZXJ0aWVzLiRjZWxsV2lkdGhSZWNpcGllbnRzLmZpbHRlcignW2RhdGEtYWxpYXM9XCInICsgYWxpYXMgKyAnXCJdJyk7XHJcblxyXG5cdFx0JGl0ZW0ud2lkdGgod2lkdGgpO1xyXG5cdFx0JGl0ZW0ucGFyZW50KCkud2lkdGgod2lkdGgpO1xyXG5cdH07XHJcbn1cclxuIiwiaW1wb3J0IHBpcGVzIGZyb20gJy4vUGlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxTb3J0UnVsZU1vZGVsIGltcGxlbWVudHMgSUxvY2FsU29ydFJ1bGUge1xyXG5cdGJ5OiBzdHJpbmc7XHJcblx0b3JkZXI6IHN0cmluZztcclxuXHRjb2xNb2RlbD86IElDb2xNb2RlbDtcclxuXHRnZXQ6IEZ1bmN0aW9uID0gcGlwZXMuZ2V0QnlUeXBlKCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9yZGVyOiBzdHJpbmcsIGJ5OiBzdHJpbmcsIGNvbE1vZGVsOiBudWxsIHwgSUNvbE1vZGVsKSB7XHJcblx0XHR0aGlzLm9yZGVyID0gb3JkZXI7XHJcblx0XHR0aGlzLmJ5ID0gYnk7XHJcblxyXG5cdFx0aWYgKGNvbE1vZGVsKSB7XHJcblx0XHRcdHRoaXMuY29sTW9kZWwgPSBjb2xNb2RlbDtcclxuXHRcdFx0dGhpcy5nZXQgPSBjb2xNb2RlbC5zb3J0Rm9ybWF0dGVyO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJjbGFzcyBPcGVyYXRvcnMge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5lcSA9IHRoaXMuZXF1YWxzO1xyXG5cdFx0dGhpcy5uZSA9IHRoaXMubm90RXF1YWxzO1xyXG5cdFx0dGhpcy5sdCA9IHRoaXMubGVzcztcclxuXHRcdHRoaXMubGUgPSB0aGlzLmxlc3NPckVxdWFscztcclxuXHRcdHRoaXMuZ3QgPSB0aGlzLmdyZWF0ZXI7XHJcblx0XHR0aGlzLmdlID0gdGhpcy5ncmVhdGVyT3JFcXVhbHM7XHJcblx0XHR0aGlzLmNuID0gdGhpcy5jb250YWlucztcclxuXHRcdHRoaXMubmMgPSAoKC4uLmFyZykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gIXRoaXMuY29udGFpbnMuYXBwbHkodGhpcywgYXJnKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5idyA9IHRoaXMuc3RhcnRzV2l0aDtcclxuXHRcdHRoaXMuYm4gPSAoKC4uLmFyZykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gIXRoaXMuc3RhcnRzV2l0aC5hcHBseSh0aGlzLCBhcmcpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmVuID0gKCguLi5hcmcpID0+IHtcclxuXHRcdFx0cmV0dXJuICF0aGlzLmVuZHNXaXRoLmFwcGx5KHRoaXMsIGFyZyk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuZXcgPSB0aGlzLmVuZHNXaXRoO1xyXG5cdFx0dGhpcy5pbiA9IHRoaXMuaW5BcnJheTtcclxuXHRcdHRoaXMubmkgPSAoKC4uLmFyZykgPT4ge1xyXG5cdFx0XHRyZXR1cm4gIXRoaXMuaW5BcnJheS5hcHBseSh0aGlzLCBhcmcpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLm51ID0gdGhpcy5pc051bGw7XHJcblx0XHR0aGlzLm5uID0gKCguLi5hcmcpID0+IHtcclxuXHRcdFx0cmV0dXJuICF0aGlzLmlzTnVsbC5hcHBseSh0aGlzLCBhcmcpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRlcXVhbHMoYSwgYikge1xyXG5cdFx0cmV0dXJuIGEgPT09IGI7XHJcblx0fTtcclxuXHRub3RFcXVhbHMoYSwgYikge1xyXG5cdFx0cmV0dXJuIGEgIT09IGI7XHJcblx0fTtcclxuXHRpc051bGwoYSkge1xyXG5cdFx0cmV0dXJuIGEgPT09IG51bGw7XHJcblx0fTtcclxuXHRncmVhdGVyKGEsIGIpIHtcclxuXHRcdHJldHVybiBhID4gYjtcclxuXHR9O1xyXG5cdGxlc3MoYSwgYikge1xyXG5cdFx0cmV0dXJuIGEgPCBiO1xyXG5cdH07XHJcblx0Z3JlYXRlck9yRXF1YWxzKGEsIGIpIHtcclxuXHRcdHJldHVybiBhID49IGI7XHJcblx0fTtcclxuXHRsZXNzT3JFcXVhbHMoYSwgYikge1xyXG5cdFx0cmV0dXJuIGEgPD0gYjtcclxuXHR9O1xyXG5cdGluQXJyYXkoYXJyYXksIGIpIHtcclxuXHRcdHJldHVybiAkLmluQXJyYXkoYiwgYXJyYXkpICE9PSAtMTtcclxuXHR9O1xyXG5cdHN0YXJ0c1dpdGgoYSwgYiwgaW5zZW5zaXRpdmUpIHtcclxuXHRcdGEgPSBTdHJpbmcoYSk7XHJcblx0XHRiID0gU3RyaW5nKGIpO1xyXG5cdFx0aWYgKGluc2Vuc2l0aXZlKSB7XHJcblx0XHRcdGEgPSBhLnRvVXBwZXJDYXNlKCk7XHJcblx0XHRcdGIgPSBiLnRvVXBwZXJDYXNlKCk7XHJcblx0XHR9XHJcblx0XHRsZXQgbGVuZ3RoID0gYS5sZW5ndGgsXHJcblx0XHRcdHN0ciA9IGEuc3Vic3RyKDAsIGxlbmd0aCk7XHJcblx0XHRyZXR1cm4gc3RyID09PSBiXHJcblx0fTtcclxuXHRlbmRzV2l0aChhLCBiLCBpbnNlbnNpdGl2ZSkge1xyXG5cdFx0YSA9IFN0cmluZyhhKTtcclxuXHRcdGIgPSBTdHJpbmcoYik7XHJcblx0XHRpZiAoaW5zZW5zaXRpdmUpIHtcclxuXHRcdFx0YSA9IGEudG9VcHBlckNhc2UoKTtcclxuXHRcdFx0YiA9IGIudG9VcHBlckNhc2UoKTtcclxuXHRcdH1cclxuXHRcdGxldCBsZW5ndGggPSBiLmxlbmd0aCAqIC0xLFxyXG5cdFx0XHRzdHIgPSBhLnN1YnN0cihsZW5ndGgpO1xyXG5cdFx0cmV0dXJuIHN0ciA9PT0gYjtcclxuXHR9O1xyXG5cdGNvbnRhaW5zKGEsIGIsIGluc2Vuc2l0aXZlKSB7XHJcblx0XHRhID0gU3RyaW5nKGEpO1xyXG5cdFx0YiA9IFN0cmluZyhiKTtcclxuXHRcdGlmIChpbnNlbnNpdGl2ZSkge1xyXG5cdFx0XHRhID0gYS50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0XHRiID0gYi50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGIuaW5kZXhPZihhKSAhPT0gLTE7XHJcblx0fTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgT3BlcmF0b3JzKCk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5jbGFzcyBQYWdpbmF0aW9uIHtcclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCBzdG9yYWdlLCB2aWV3TW9kZWwsICkge1xyXG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHJcblx0XHR0aGlzLl9zdWJzY3JpYmUoKTtcclxuXHRcdHRoaXMucGFnZSgpO1xyXG5cdFx0dGhpcy50b3RhbFBhZ2VzKCk7XHJcblx0XHR0aGlzLmV4ZWMoKTtcclxuXHR9O1xyXG5cdGV4ZWMoKSB7XHJcblx0XHR0aGlzLl9iaW5kKCk7XHJcblx0fTtcclxuXHJcblx0cGFnZSgpIHtcclxuXHRcdHRoaXMuc3RvcmFnZS4kcGFnaW5hdGlvbkJveC5maW5kKCcuWGdyaWQtY3VycmVudC1wYWdlJykudmFsKHRoaXMudmlld01vZGVsLnBhZ2UpO1xyXG5cdH07XHJcblxyXG5cdHRvdGFsUGFnZXMoKSB7XHJcblx0XHR0aGlzLnN0b3JhZ2UuJHBhZ2luYXRpb25Cb3guZmluZCgnLlhncmlkLXRvdGFsLXBhZ2VzJykudGV4dCh0aGlzLnZpZXdNb2RlbC50b3RhbFBhZ2VzKTtcclxuXHR9O1xyXG5cclxuXHRfc3Vic2NyaWJlKCkge1xyXG5cdFx0Y29uc3Qgdmlld01vZGVsID0gdGhpcy52aWV3TW9kZWw7XHJcblx0XHR2aWV3TW9kZWwub24oJ3BhZ2UnLCB0aGlzLnBhZ2UuYmluZCh0aGlzKSk7XHJcblx0XHR2aWV3TW9kZWwub24oJ3RvdGFsUGFnZXMnLCB0aGlzLnRvdGFsUGFnZXMuYmluZCh0aGlzKSk7XHJcblx0fTtcclxuXHJcblx0X2JpbmQoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveC5vbignY2xpY2sueGdyaWQnLCAnLlhncmlkLWZpcnN0JywgdGhpcy5faGFuZGxlckZpcnN0LmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveC5vbignY2xpY2sueGdyaWQnLCAnLlhncmlkLXByZXYnLCB0aGlzLl9oYW5kbGVyUHJldi5iaW5kKHRoaXMpKTtcclxuXHRcdHN0b3JhZ2UuJHBhZ2luYXRpb25Cb3gub24oJ2NsaWNrLnhncmlkJywgJy5YZ3JpZC1uZXh0JywgdGhpcy5faGFuZGxlck5leHQuYmluZCh0aGlzKSk7XHJcblx0XHRzdG9yYWdlLiRwYWdpbmF0aW9uQm94Lm9uKCdjbGljay54Z3JpZCcsICcuWGdyaWQtbGFzdCcsIHRoaXMuX2hhbmRsZXJMYXN0LmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveC5vbigna2V5cHJlc3MueGdyaWQnLCAnLlhncmlkLWN1cnJlbnQtcGFnZScsIHRoaXMuX2hhbmRsZXJHb1RvLmJpbmQodGhpcykpO1xyXG5cdH07XHJcblxyXG5cdF9oYW5kbGVyRmlyc3QoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0aWYgKHRoaXMudmlld01vZGVsLnBhZ2UgIT09IDEpIHtcclxuXHRcdFx0dGhpcy52aWV3TW9kZWwubmV3UGFnZSA9IDE7XHJcblx0XHR9XHJcblx0fTtcclxuXHRfaGFuZGxlckxhc3QoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0aWYgKHRoaXMudmlld01vZGVsLnBhZ2UgIT09IHRoaXMudmlld01vZGVsLnRvdGFsUGFnZXMpIHtcclxuXHRcdFx0dGhpcy52aWV3TW9kZWwubmV3UGFnZSA9IHRoaXMudmlld01vZGVsLnRvdGFsUGFnZXM7XHJcblx0XHR9XHJcblx0fTtcclxuXHRfaGFuZGxlck5leHQoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgcGFnZSA9IHRoaXMudmlld01vZGVsLnBhZ2UgKyAxO1xyXG5cdFx0aWYgKHBhZ2UgPD0gdGhpcy52aWV3TW9kZWwudG90YWxQYWdlcykge1xyXG5cdFx0XHR0aGlzLnZpZXdNb2RlbC5uZXdQYWdlID0gcGFnZTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdF9oYW5kbGVyUHJldihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBwYWdlID0gdGhpcy52aWV3TW9kZWwucGFnZSAtIDE7XHJcblx0XHRpZiAocGFnZSA+IDApIHtcclxuXHRcdFx0dGhpcy52aWV3TW9kZWwubmV3UGFnZSA9IHBhZ2U7XHJcblx0XHR9XHJcblx0fTtcclxuXHRfaGFuZGxlckdvVG8oZSkge1xyXG5cdFx0aWYgKGUud2hpY2ggPT09IDEzKSB7XHJcblx0XHRcdGxldCBwYWdlID0gJChlLmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xyXG5cdFx0XHRpZiAoIWlzTmFOKHBhZ2UpKSB7XHJcblx0XHRcdFx0cGFnZSA9ICtwYWdlO1xyXG5cdFx0XHRcdGlmIChwYWdlIDwgMSkge1xyXG5cdFx0XHRcdFx0cGFnZSA9IDE7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChwYWdlID4gdGhpcy52aWV3TW9kZWwudG90YWxQYWdlcykge1xyXG5cdFx0XHRcdFx0cGFnZSA9IHRoaXMudmlld01vZGVsLnRvdGFsUGFnZXM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudmlld01vZGVsLm5ld1BhZ2UgPSBwYWdlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMudmlld01vZGVsLnBhZ2UgPSB0aGlzLnZpZXdNb2RlbC5uZXdQYWdlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjsiLCJjbGFzcyBQaXBlcyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmludGVnZXIgPSB0aGlzLmludGVnZXIuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaW50ID0gdGhpcy5pbnRlZ2VyO1xyXG5cclxuXHRcdHRoaXMubnVtZXJpYyA9IHRoaXMubnVtZXJpYy5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5mbG9hdCA9IHRoaXMubnVtZXJpYztcclxuXHRcdHRoaXMubnVtYmVyID0gdGhpcy5udW1lcmljO1xyXG5cclxuXHRcdC8vdGhpcy5kYXRldGltZSA9IHRoaXMuZGF0ZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy50ZXh0ID0gKCh2YWx1ZSwgcm93RGF0YSwgY29sTW9kZWwpID0+IHtcclxuXHRcdFx0aWYgKGNvbE1vZGVsLmluc2Vuc2l0aXZlKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5zZW5zaXRpdmV0ZXh0LmNhbGwodGhpcywgdmFsdWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnNlbnNpdGl2ZXRleHQuY2FsbCh0aGlzLCB2YWx1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuaXNOb3RaZXJvID0ge1xyXG5cdFx0XHR1bmRlZmluZWQ6IDFcclxuXHRcdH07XHJcblxyXG5cdFx0WycnLCBudWxsLCBmYWxzZSwgdHJ1ZV0uZm9yRWFjaCgoa2V5KSA9PiB7XHJcblx0XHRcdHRoaXMuaXNOb3RaZXJvW2tleV0gPSAxO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Z2V0QnlUeXBlKHR5cGUpIHtcclxuXHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRjYXNlICdpbnQnOlxyXG5cdFx0XHRjYXNlICdpbnRlZ2VyJzpcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbnRlZ2VyO1xyXG5cdFx0XHRjYXNlICdmbG9hdCc6XHJcblx0XHRcdGNhc2UgJ251bWJlcic6XHJcblx0XHRcdGNhc2UgJ251bWVyaWMnOlxyXG5cdFx0XHRcdHJldHVybiB0aGlzLm51bWVyaWM7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudGV4dDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG51bWVyaWModmFsdWUpIHtcclxuXHRcdGxldCByZXN1bHQ7XHJcblx0XHRpZiAodGhpcy5pc05vdFplcm9bdmFsdWVdKSB7XHJcblx0XHRcdHJlc3VsdCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChpc05hTih2YWx1ZSkpIHtcclxuXHRcdFx0XHRyZXN1bHQgPSBwYXJzZUZsb2F0KFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvLC9nLCAnLicpLnJlcGxhY2UoL1tcXCQlXS9nLCAnJykpO1xyXG5cdFx0XHRcdHJlc3VsdCA9IGlzTmFOKHJlc3VsdCkgPyBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgOiByZXN1bHQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0ID0gK3ZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH07XHJcblxyXG5cdGludGVnZXIodmFsdWUpIHtcclxuXHRcdGxldCByZXN1bHQ7XHJcblx0XHRpZiAodGhpcy5pc05vdFplcm9bdmFsdWVdKSB7XHJcblx0XHRcdHJlc3VsdCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChpc05hTih2YWx1ZSkpIHtcclxuXHRcdFx0XHRyZXN1bHQgPSBTdHJpbmcodmFsdWUpLnJlcGxhY2UoL1tcXCQsJV0vZywgJycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJlc3VsdCA9IHBhcnNlSW50KHJlc3VsdCk7XHJcblx0XHRcdHJlc3VsdCA9IGlzTmFOKHJlc3VsdCkgPyBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgOiByZXN1bHQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH07XHJcblxyXG5cdGluc2Vuc2l0aXZldGV4dCh2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIHZhbHVlID8gJC50cmltKFN0cmluZyh2YWx1ZSkpIDogXCJcIjtcclxuXHR9O1xyXG5cclxuXHRzZW5zaXRpdmV0ZXh0KHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gKHZhbHVlID8gJC50cmltKFN0cmluZyh2YWx1ZSkpIDogXCJcIikudG9Mb3dlckNhc2UoKTtcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUGlwZXMoKTsiLCJpbXBvcnQgQ29sTW9kZWwgZnJvbSAnLi9Db2xNb2RlbCc7XHJcbmltcG9ydCBTb3J0UnVsZSBmcm9tICcuL1NvcnRSdWxlJztcclxuXHJcbmNsYXNzIFByb2Nlc3NTZXR0aW5ncyB7XHJcblx0dmlld01vZGVsOiBJVmlld01vZGVsO1xyXG5cdHN0b3JhZ2U6IElTdG9yYWdlO1xyXG5cdHByb3BlcnRpZXM6IElQcm9jZXNzU2V0dGluZ3NQcm9wZXJ0aWVzO1xyXG5cdG9wdGlvbnM6IElQcm9jZXNzU2V0dGluZ3NPcHRpb25zXHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMsIHN0b3JhZ2UsIHZpZXdNb2RlbCkge1xyXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xyXG5cdFx0XHRjb2xNb2RlbHM6IFtdLFxyXG5cdFx0XHRmaWx0ZXJUb29sYmFyOiBmYWxzZVxyXG5cdFx0fSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0dGhpcy5wcm9wZXJ0aWVzID0ge1xyXG5cdFx0XHRzY3JvbGxiYXJXaWR0aDogbnVsbFxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHRcdHRoaXMuX2V4ZWMoKTtcclxuXHR9O1xyXG5cclxuXHRfZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XHJcblx0XHRsZXQgZGl2LCB3aWR0aDtcclxuXHRcdGlmICh0aGlzLnByb3BlcnRpZXMuc2Nyb2xsYmFyV2lkdGgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucHJvcGVydGllcy5zY3JvbGxiYXJXaWR0aDtcclxuXHRcdH1cclxuXHJcblx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGRpdi5pbm5lckhUTUwgPSAnPGRpdiBzdHlsZT1cIndpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotNTBweDt0b3A6LTUwcHg7b3ZlcmZsb3c6YXV0bztcIj48ZGl2IHN0eWxlPVwid2lkdGg6MXB4O2hlaWdodDoxMDBweDtcIj48L2Rpdj48L2Rpdj4nO1xyXG5cdFx0ZGl2ID0gZGl2LmZpcnN0Q2hpbGQ7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcblx0XHR3aWR0aCA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aDtcclxuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcclxuXHRcdHRoaXMucHJvcGVydGllcy5zY3JvbGxiYXJXaWR0aCA9IHdpZHRoO1xyXG5cdFx0cmV0dXJuIHdpZHRoO1xyXG5cdH07XHJcblxyXG5cdF9jb2x1bW5Nb2RlbCgpIHtcclxuXHRcdGNvbnN0IHsgc3RvcmFnZSwgb3B0aW9ucyB9ID0gdGhpcztcclxuXHRcdGNvbnN0IGNvbE1vZGVscyA9IFtdO1xyXG5cdFx0Y29uc3QgYWxpYXNlcyA9IHt9O1xyXG5cdFx0Y29uc3QgY29sTW9kZWxzRGljdGlvbmFyeSA9IHt9O1xyXG5cclxuXHRcdCQuZWFjaChvcHRpb25zLmNvbE1vZGVscywgKGksIG1vZGVsKSA9PiB7XHJcblx0XHRcdGNvbnN0IGNvbE1vZGVsID0gbmV3IENvbE1vZGVsKG1vZGVsLCBpKTtcclxuXHJcblx0XHRcdGlmICghYWxpYXNlc1tjb2xNb2RlbC5hbGlhc10pIHtcclxuXHRcdFx0XHRhbGlhc2VzW2NvbE1vZGVsLmFsaWFzXSA9IDE7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhyb3cge1xyXG5cdFx0XHRcdFx0dmFsdWU6IHtcclxuXHRcdFx0XHRcdFx0aTogaSxcclxuXHRcdFx0XHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkobW9kZWwpXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogJ2FsaWFzIGlzIG5vdCB1bmlxdWUnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ0Vycm9yOiBjb2xNb2RlbCdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y29sTW9kZWxzRGljdGlvbmFyeVtjb2xNb2RlbC5hbGlhc10gPSBjb2xNb2RlbDtcclxuXHRcdFx0Y29sTW9kZWxzLnB1c2goY29sTW9kZWwpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0c3RvcmFnZS5jb2xNb2RlbHMgPSBjb2xNb2RlbHM7XHJcblx0XHRzdG9yYWdlLmNvbE1vZGVsc0RpY3Rpb25hcnkgPSBjb2xNb2RlbHNEaWN0aW9uYXJ5O1xyXG5cdH07XHJcblxyXG5cdF9leGVjKCkge1xyXG5cdFx0Y29uc3QgeyBzdG9yYWdlIH0gPSB0aGlzO1xyXG5cclxuXHRcdHRoaXMuX2NvbHVtbk1vZGVsKCk7XHJcblx0XHRzdG9yYWdlLnNjcm9sbGJhcldpZHRoID0gdGhpcy5fZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcclxuXHRcdHRoaXMuX3Byb2Nlc3NTb3J0aW5nKCk7XHJcblx0fTtcclxuXHJcblx0X3Byb2Nlc3NTb3J0aW5nKCkge1xyXG5cdFx0Y29uc3Qge3ZpZXdNb2RlbCwgb3B0aW9uc30gPSB0aGlzO1xyXG5cdFx0bGV0IHNvcnRCeSA9IG9wdGlvbnMuc29ydEJ5LFxyXG5cdFx0XHRkYXRhID0gW107XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMuZmlsdGVyVG9vbGJhcikge1xyXG5cdFx0XHR2aWV3TW9kZWwuZmlsdGVyVG9vbGJhciA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRpZiAoc29ydEJ5ICYmIHR5cGVvZiAoc29ydEJ5KSA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0Y29uc3Qgc29ydEJ5SXRlbXMgPSBzb3J0QnkucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKS5zcGxpdCgnLCcpO1xyXG5cdFx0XHRpZiAoc29ydEJ5SXRlbXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0c29ydEJ5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSkge1xyXG5cdFx0XHRcdFx0Y29uc3Qgc29ydFJ1bGUgPSBpdGVtLnRyaW0oKS5zcGxpdCgnICcpO1xyXG5cdFx0XHRcdFx0Y29uc3QgYnkgPSBzb3J0UnVsZVswXTtcclxuXHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIChieSkgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHRcdGxldCBydWxlO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKFN0cmluZyhzb3J0UnVsZVsxXSkudG9VcHBlckNhc2UoKSA9PT0gJ0RFU0MnKSB7XHJcblx0XHRcdFx0XHRcdFx0cnVsZSA9IG5ldyBTb3J0UnVsZShieSwgJ0RFU0MnKTtcclxuXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cnVsZSA9IG5ldyBTb3J0UnVsZShieSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZGF0YS5wdXNoKHJ1bGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKCQuaXNBcnJheShzb3J0QnkpICYmIHNvcnRCeS5sZW5ndGgpIHtcclxuXHRcdFx0c29ydEJ5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRjb25zdCB7IGJ5LCBvcmRlciB9ID0gaXRlbTtcclxuXHRcdFx0XHRsZXQgcnVsZTtcclxuXHJcblx0XHRcdFx0aWYgKGJ5KSB7XHJcblx0XHRcdFx0XHRpZiAoU3RyaW5nKG9yZGVyKS50b1VwcGVyQ2FzZSgpICE9PSAnREVTQycpIHtcclxuXHRcdFx0XHRcdFx0cnVsZSA9IG5ldyBTb3J0UnVsZShieSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRydWxlID0gbmV3IFNvcnRSdWxlKGJ5LCAnREVTQycpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZGF0YS5wdXNoKHJ1bGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRpZiAoZGF0YS5sZW5ndGgpIHtcclxuXHRcdFx0dmlld01vZGVsLnNvcnRCeSA9IGRhdGE7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzU2V0dGluZ3M7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlcnlNb2RlbCBpbXBsZW1lbnRzIElRdWVyeU1vZGVsIHtcclxuXHRmaWx0ZXIgPSB7fTtcclxuXHRzb3J0ID0gW107XHJcblx0cm93cyA9IDA7XHJcblx0cGFnZSA9IDE7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuXHRcdCQuZXh0ZW5kKHRoaXMsIGRhdGEpO1xyXG5cdH1cclxufVxyXG4iLCJjbGFzcyBTb3J0IHtcclxuXHRleGVjKGRhdGEgPSBbXSwgcnVsZXM6IElMb2NhbFNvcnRSdWxlW10gPSBbXSkge1xyXG5cdFx0bGV0IHNvdXJjZTtcclxuXHRcdGlmICghZGF0YS5sZW5ndGggfHwgIXJ1bGVzLmxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdH1cclxuXHRcdHNvdXJjZSA9IHRoaXMuX2dldFNvdXJjZShkYXRhLCBydWxlcyk7XHJcblx0XHRzb3VyY2Uuc29ydCgoYSwgYikgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gMDtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDAsIGogPSBydWxlcy5sZW5ndGg7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGxldCBrZXkgPSBydWxlc1tpXS5ieTtcclxuXHRcdFx0XHRpZiAocnVsZXNbaV0ub3JkZXIgPT09ICdBU0MnKSB7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSB0aGlzLkFTQyhhLmZvcm1hdHRlZFtrZXldLCBiLmZvcm1hdHRlZFtrZXldKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSB0aGlzLkRFU0MoYS5mb3JtYXR0ZWRba2V5XSwgYi5mb3JtYXR0ZWRba2V5XSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHJlc3VsdCAhPT0gMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHNvdXJjZS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRcdFx0cmV0dXJuIGl0ZW0uXztcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0QVNDKGEsIGIpIHtcclxuXHRcdGlmIChhIDwgYikge1xyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblx0XHRpZiAoYSA+IGIpIHtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gMDtcclxuXHR9O1xyXG5cclxuXHRERVNDKGEsIGIpIHtcclxuXHRcdGlmIChhIDwgYikge1xyXG5cdFx0XHRyZXR1cm4gMTtcclxuXHRcdH1cclxuXHRcdGlmIChhID4gYikge1xyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gMDtcclxuXHR9O1xyXG5cdF9nZXRTb3VyY2UoZGF0YSwgcnVsZXMpIHtcclxuXHRcdHJldHVybiBkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG5cdFx0XHRsZXQgZm9ybWF0dGVkID0ge307XHJcblx0XHRcdHJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcclxuXHRcdFx0XHRmb3JtYXR0ZWRbcnVsZS5ieV0gPSBydWxlLmdldChpdGVtW3J1bGUuYnldLCBpdGVtLCBydWxlLmNvbE1vZGVsLCBkYXRhKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XzogaXRlbSxcclxuXHRcdFx0XHRmb3JtYXR0ZWQsXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBTb3J0KCk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ydFJ1bGUgaW1wbGVtZW50cyBJU29ydFJ1bGUge1xyXG5cdGJ5OiBzdHJpbmc7XHJcblx0b3JkZXI6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoYnk6IHN0cmluZywgb3JkZXIgPSAnQVNDJykge1xyXG5cdFx0dGhpcy5ieSA9IGJ5O1xyXG5cdFx0dGhpcy5vcmRlciA9IG9yZGVyO1xyXG5cdH1cclxuXHJcblx0dHJpZ2dlck9yZGVyKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMub3JkZXIgPT09ICdBU0MnKSB7XHJcblx0XHRcdHRoaXMub3JkZXIgPSAnREVTQyc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLm9yZGVyID0gJ0FTQyc7XHJcblx0XHR9XHJcblx0fTtcclxufTsiLCJpbXBvcnQgU29ydFJ1bGUgZnJvbSAnLi9Tb3J0UnVsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3J0aW5nIHtcclxuXHRzdG9yYWdlOiBJU3RvcmFnZTtcclxuXHR2aWV3TW9kZWw6IElWaWV3TW9kZWw7XHJcblx0b3B0aW9uczogSU9wdGlvbnM7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHN0b3JhZ2UsIHZpZXdNb2RlbCwgb3B0aW9ucykge1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHJcblx0XHR0aGlzLmJpbmQoKTtcclxuXHR9O1xyXG5cclxuXHRzb3J0QnlBbGlhcyhhbGlhczogc3RyaW5nKSB7XHJcblx0XHRjb25zdCB7IHN0b3JhZ2UsIHZpZXdNb2RlbCB9ID0gdGhpcztcclxuXHRcdGNvbnN0IGNvbE1vZGVsID0gc3RvcmFnZS5jb2xNb2RlbHNEaWN0aW9uYXJ5W2FsaWFzXTtcclxuXHRcdGxldCBzb3J0Qnk6IElTb3J0UnVsZVtdO1xyXG5cclxuXHRcdGlmIChjb2xNb2RlbCkge1xyXG5cdFx0XHRzb3J0QnkgPSB2aWV3TW9kZWwuc29ydEJ5O1xyXG5cdFx0XHRsZXQgaSA9IHNvcnRCeS5sZW5ndGg7XHJcblx0XHRcdGxldCBzb3J0UnVsZTogSVNvcnRSdWxlO1xyXG5cclxuXHRcdFx0d2hpbGUgKGktLSkge1xyXG5cdFx0XHRcdGlmIChzb3J0QnlbaV0uYnkgPT09IGFsaWFzKSB7XHJcblx0XHRcdFx0XHRzb3J0UnVsZSA9IHNvcnRCeS5zcGxpY2UoaSwgMSlbMF07XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghc29ydFJ1bGUpIHtcclxuXHRcdFx0XHRzb3J0UnVsZSA9IG5ldyBTb3J0UnVsZShhbGlhcyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c29ydFJ1bGUudHJpZ2dlck9yZGVyKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMubXVsdGlTb3J0aW5nKSB7XHJcblx0XHRcdFx0c29ydEJ5LnVuc2hpZnQoc29ydFJ1bGUpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c29ydEJ5ID0gW3NvcnRSdWxlXVxyXG5cdFx0XHR9XHJcblx0XHRcdHZpZXdNb2RlbC5zb3J0QnkgPSBzb3J0Qnk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0YmluZCgpOiB2b2lkIHtcclxuXHRcdGNvbnN0ICRoZWFkVGFibGUgPSB0aGlzLnN0b3JhZ2UuJGhlYWRUYWJsZTtcclxuXHJcblx0XHR0aGlzLl9vZmYoKTtcclxuXHRcdCRoZWFkVGFibGUub24oJ2NsaWNrLlhncmlkJywgJy5YZ3JpZC10aGVhZC1sYWJlbC5zb3J0YWJsZScsIHRoaXMuX2hhbmRsZXJTb3J0Q29sdW1uLmJpbmQodGhpcykpO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX29mZigpOiB2b2lkIHtcclxuXHRcdHRoaXMuc3RvcmFnZS4kaGVhZFRhYmxlLm9mZignLlhncmlkJyk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfaGFuZGxlclNvcnRDb2x1bW4oZTogSlF1ZXJ5RXZlbnRPYmplY3QpOiB2b2lkIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0ICRpdGVtID0gJChlLmN1cnJlbnRUYXJnZXQpO1xyXG5cdFx0Y29uc3QgYWxpYXMgPSAkaXRlbS5hdHRyKCdkYXRhLWFsaWFzJyk7XHJcblx0XHRjb25zdCBjb2xtb2RlbCA9IHRoaXMuc3RvcmFnZS5jb2xNb2RlbHNEaWN0aW9uYXJ5W2FsaWFzXTtcclxuXHJcblx0XHQkaXRlbS5ibHVyKCk7XHJcblx0XHRpZiAoY29sbW9kZWwgJiYgY29sbW9kZWwuc29ydGFibGUpIHtcclxuXHRcdFx0dGhpcy5zb3J0QnlBbGlhcyhhbGlhcyk7XHJcblx0XHR9XHJcblx0fTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSBpbXBsZW1lbnRzIElTdG9yYWdlIHtcclxuXHRwcml2YXRlIF9tb2RlbDogSVN0b3JhZ2VNb2RlbDtcclxuXHRwcml2YXRlIF9zdWJzY3JpYmVyczogeyBba2V5OiBzdHJpbmddOiBGdW5jdGlvbltdIH0gPSB7fTtcclxuXHJcblx0Y29uc3RydWN0b3IobW9kZWwpIHtcclxuXHRcdHRoaXMuX21vZGVsID0gJC5leHRlbmQoe1xyXG5cdFx0XHQkYm94OiBudWxsLFxyXG5cdFx0XHQkaGVhZFRhYmxlOiBudWxsLFxyXG5cdFx0XHQkZ3JpZFRhYmxlOiBudWxsLFxyXG5cdFx0XHQkaGVhZExhYmVsczogbnVsbCxcclxuXHRcdFx0JHBhZ2luYXRpb25Cb3g6IG51bGwsXHJcblx0XHRcdCRmaWx0ZXJUb29sYmFySXRlbXM6IG51bGwsXHJcblx0XHRcdHF1ZXJ5OiBudWxsLFxyXG5cdFx0XHRzY3JvbGxiYXJXaWR0aDogMCxcclxuXHRcdFx0Y29sTW9kZWxzOiBbXSxcclxuXHRcdFx0Y29sTW9kZWxzRGljdGlvbmFyeToge30sXHJcblx0XHRcdGZpbHRlcjogbnVsbCxcclxuXHRcdFx0ZGF0YTogW10sXHJcblx0XHRcdHByb2Nlc3NlZERhdGE6IFtdXHJcblx0XHR9LCBtb2RlbCk7XHJcblx0fVxyXG5cclxuXHRnZXQgJGJveCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kYm94O1xyXG5cdH1cclxuXHJcblx0Z2V0ICRoZWFkVGFibGUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuJGhlYWRUYWJsZTtcclxuXHR9O1xyXG5cdHNldCAkaGVhZFRhYmxlKHZhbHVlOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSB7XHJcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiAkKSB7XHJcblx0XHRcdHRoaXMuX21vZGVsLiRoZWFkVGFibGUgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJyRoZWFkVGFibGUnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgJGdyaWRUYWJsZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kZ3JpZFRhYmxlO1xyXG5cdH07XHJcblx0c2V0ICRncmlkVGFibGUodmFsdWU6IEpRdWVyeTxIVE1MRWxlbWVudD4pIHtcclxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mICQpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuJGdyaWRUYWJsZSA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnJGdyaWRUYWJsZScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCAkaGVhZExhYmVscygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kaGVhZExhYmVscztcclxuXHR9O1xyXG5cdHNldCAkaGVhZExhYmVscyh2YWx1ZTogSlF1ZXJ5PEhUTUxFbGVtZW50Pikge1xyXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgJCkge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC4kaGVhZExhYmVscyA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnJGhlYWRMYWJlbHMnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgJHBhZ2luYXRpb25Cb3goKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuJHBhZ2luYXRpb25Cb3g7XHJcblx0fTtcclxuXHRzZXQgJHBhZ2luYXRpb25Cb3godmFsdWU6IEpRdWVyeTxIVE1MRWxlbWVudD4pIHtcclxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mICQpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuJHBhZ2luYXRpb25Cb3ggPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJyRwYWdpbmF0aW9uQm94JywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0ICRmaWx0ZXJUb29sYmFySXRlbXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuJGZpbHRlclRvb2xiYXJJdGVtcztcclxuXHR9O1xyXG5cdHNldCAkZmlsdGVyVG9vbGJhckl0ZW1zKHZhbHVlOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSB7XHJcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiAkKSB7XHJcblx0XHRcdHRoaXMuX21vZGVsLiRmaWx0ZXJUb29sYmFySXRlbXMgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJyRmaWx0ZXJUb29sYmFySXRlbXMnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgc2Nyb2xsYmFyV2lkdGgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuc2Nyb2xsYmFyV2lkdGg7XHJcblx0fTtcclxuXHJcblx0c2V0IHNjcm9sbGJhcldpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuXHRcdGlmICh0eXBlb2YgKHZhbHVlKSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZSA+IDApIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuc2Nyb2xsYmFyV2lkdGggPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ3Njcm9sbGJhcldpZHRoJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IGNvbE1vZGVscygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5jb2xNb2RlbHM7XHJcblx0fTtcclxuXHRzZXQgY29sTW9kZWxzKHZhbHVlOiBJQ29sTW9kZWxbXSkge1xyXG5cdFx0aWYgKCQuaXNBcnJheSh2YWx1ZSkpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuY29sTW9kZWxzID0gdmFsdWU7XHJcblx0XHRcdHRoaXMubm90aWZ5KCdjb2xNb2RlbHMnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgY29sTW9kZWxzRGljdGlvbmFyeSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5jb2xNb2RlbHNEaWN0aW9uYXJ5O1xyXG5cdH07XHJcblx0c2V0IGNvbE1vZGVsc0RpY3Rpb25hcnkodmFsdWUpIHtcclxuXHRcdHRoaXMuX21vZGVsLmNvbE1vZGVsc0RpY3Rpb25hcnkgPSB2YWx1ZTtcclxuXHRcdHRoaXMubm90aWZ5KCdjb2xNb2RlbHNEaWN0aW9uYXJ5JywgdGhpcyk7XHJcblx0fTtcclxuXHJcblx0Z2V0IGZpbHRlcigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5maWx0ZXI7XHJcblx0fTtcclxuXHRzZXQgZmlsdGVyKGRhdGEpIHtcclxuXHRcdGlmIChkYXRhID09PSBudWxsIHx8IHR5cGVvZiAoZGF0YSkgPT09ICdvYmplY3QnKSB7XHJcblx0XHRcdHRoaXMuX21vZGVsLmZpbHRlciA9IGRhdGE7XHJcblx0XHRcdHRoaXMubm90aWZ5KCdmaWx0ZXInLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5kYXRhO1xyXG5cdH07XHJcblx0c2V0IGRhdGEoZGF0YTogSVJhd0RhdGFbXSkge1xyXG5cdFx0aWYgKCQuaXNBcnJheShkYXRhKSkge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC5kYXRhID0gZGF0YTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ2RhdGEnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgcXVlcnkoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwucXVlcnk7XHJcblx0fTtcclxuXHRzZXQgcXVlcnkoZGF0YSkge1xyXG5cdFx0dGhpcy5fbW9kZWwucXVlcnkgPSBkYXRhO1xyXG5cdFx0dGhpcy5ub3RpZnkoJ3F1ZXJ5JywgdGhpcyk7XHJcblx0fTtcclxuXHJcblx0Z2V0IHByb2Nlc3NlZERhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwucHJvY2Vzc2VkRGF0YTtcclxuXHR9O1xyXG5cdHNldCBwcm9jZXNzZWREYXRhKGRhdGEpIHtcclxuXHRcdHRoaXMuX21vZGVsLnByb2Nlc3NlZERhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5ub3RpZnkoJ3Byb2Nlc3NlZERhdGEnLCB0aGlzKTtcclxuXHR9O1xyXG5cclxuXHRvbihuYW1lLCBzdWJzY3JpYmVyKSB7XHJcblx0XHR2YXIgc3RvcmVnZSA9IHRoaXMuX2dldFN0b3JhZ2UobmFtZSk7XHJcblx0XHRzdG9yZWdlLnB1c2goc3Vic2NyaWJlcik7XHJcblx0fTtcclxuXHJcblx0bm90aWZ5KG5hbWUsIGRhdGEpIHtcclxuXHRcdHZhciBzdG9yZWdlID0gdGhpcy5fZ2V0U3RvcmFnZShuYW1lKTtcclxuXHRcdCQuZWFjaChzdG9yZWdlLCBmdW5jdGlvbiAoaSwgc3Vic2NyaWJlcikge1xyXG5cdFx0XHRsZXQgWy4uLmFyZ10gPSBbZGF0YSwgbmFtZSwgaV07XHJcblx0XHRcdHN1YnNjcmliZXIuYXBwbHkoc3Vic2NyaWJlciwgYXJnKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2dldFN0b3JhZ2UobmFtZSkge1xyXG5cdFx0Y29uc3Qgc3Vic2NyaWJlcnMgPSB0aGlzLl9zdWJzY3JpYmVycztcclxuXHRcdGlmICghc3Vic2NyaWJlcnNbbmFtZV0pIHtcclxuXHRcdFx0c3Vic2NyaWJlcnNbbmFtZV0gPSBbXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBzdWJzY3JpYmVyc1tuYW1lXTtcclxuXHR9XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5jbGFzcyBUb29scyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLm5vdyA9IERhdGUubm93IHx8ICgoKSA9PiB7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgfSk7XHJcblx0fVxyXG5cclxuXHRleGVjdXRlKGZ1bmN0aW9ucywgYXJncywgY29udGV4dCkge1xyXG5cdFx0Y29uc3QgYXBwbHkgPSBmdW5jdGlvbiAoZm9vKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgKGZvbykgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRmb28uYXBwbHkoY29udGV4dCA/IGNvbnRleHQgOiBmb28sIGFyZ3MpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoJC5pc0FycmF5KGZ1bmN0aW9ucykpIHtcclxuXHRcdFx0ZnVuY3Rpb25zLmZvckVhY2goYXBwbHkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YXBwbHkoZnVuY3Rpb25zKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRpbnNlcnRFbGVtZW50KCRjb250YWluZXIsIHNlYXJjaFN0ciwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdGNvbnN0ICRyZXBsYWNlbWVudCA9ICQocmVwbGFjZW1lbnQpO1xyXG5cclxuXHRcdGlmICghJHJlcGxhY2VtZW50Lmxlbmd0aCkge1xyXG5cdFx0XHRyZXBsYWNlbWVudCA9IFN0cmluZyhyZXBsYWNlbWVudCk7XHJcblx0XHR9XHJcblx0XHQkY29udGFpbmVyLmZpbmQoXCI6bm90KGlmcmFtZSlcIikuYWRkQmFjaygpLmNvbnRlbnRzKCkuZmlsdGVyKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMubm9kZVR5cGUgPT09IDM7XHJcblx0XHR9KS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHRoaXMuZGF0YS5pbmRleE9mKHNlYXJjaFN0cikgIT09IC0xKSB7XHJcblx0XHRcdFx0aWYgKCRyZXBsYWNlbWVudC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdCQodGhpcykuYWZ0ZXIoJHJlcGxhY2VtZW50KTtcclxuXHRcdFx0XHRcdGNvbnN0IHN0ciA9IHRoaXMuZGF0YSxcclxuXHRcdFx0XHRcdFx0cGFydDEgPSBzdHIuc3Vic3RyKDAsIHN0ci5pbmRleE9mKHNlYXJjaFN0cikpLFxyXG5cdFx0XHRcdFx0XHRwYXJ0MiA9IHN0ci5zdWJzdHIocGFydDEubGVuZ3RoICsgc2VhcmNoU3RyLmxlbmd0aCwgc3RyLmxlbmd0aCk7XHJcblx0XHRcdFx0XHRpZiAoIXBhcnQxLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHBhcnQyLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRpZiAocGFydDEubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhID0gcGFydDE7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0JHJlcGxhY2VtZW50LmFmdGVyKHBhcnQyKVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwYXJ0MS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kYXRhID0gcGFydDE7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKHNlYXJjaFN0cixyZXBsYWNlbWVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHRocm90dGxlKGZ1bmMsIHdhaXQgPSAxMCkge1xyXG5cdFx0bGV0IGNvbnRleHQsXHJcblx0XHRcdGFyZ3MsXHJcblx0XHRcdHRpbWVvdXQgPSBudWxsO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICguLi5wcm9wcykge1xyXG5cdFx0XHRjb250ZXh0ID0gdGhpcztcclxuXHRcdFx0YXJncyA9IHByb3BzO1xyXG5cdFx0XHRpZiAoIWNvbnRleHQpIHtcclxuXHRcdFx0XHRjb250ZXh0ID0gZnVuY1xyXG5cdFx0XHR9IGVsc2UgaWYgKGNvbnRleHQgPT09IHdpbmRvdykge1xyXG5cdFx0XHRcdGNvbnRleHQgPSBmdW5jO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghdGltZW91dCkge1xyXG5cdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHRcdFx0XHRcdHRpbWVvdXQgPSBudWxsO1xyXG5cdFx0XHRcdFx0ZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHRcdFx0XHR9LCB3YWl0KTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVG9vbHMoKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3TW9kZWwgaW1wbGVtZW50cyBJVmlld01vZGVsIHtcclxuXHRtb2RlbDogSVZpZXdNb2RlbFBhcnRpYWw7XHJcblx0c3Vic2NyaWJlcnM6IHsgW2tleTogc3RyaW5nXTogRnVuY3Rpb25bXSB9O1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMubW9kZWwgPSB7XHJcblx0XHRcdHJvd3M6IDEwLFxyXG5cdFx0XHR0b3RhbFJvd3M6IDAsXHJcblx0XHRcdHBhZ2U6IDEsXHJcblx0XHRcdHRvdGFsUGFnZXM6IDAsXHJcblx0XHRcdG5ld1BhZ2U6IDEsXHJcblx0XHRcdGRhdGE6IFtdLFxyXG5cdFx0XHRzb3J0Qnk6IFtdLFxyXG5cdFx0XHRmaWx0ZXJUb29sYmFyOiBmYWxzZVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zdWJzY3JpYmVycyA9IHt9O1xyXG5cdH1cclxuXHJcblx0Z2V0IGRhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb2RlbC5kYXRhO1xyXG5cdH07XHJcblx0c2V0IGRhdGEoZGF0YSkge1xyXG5cdFx0aWYgKCQuaXNBcnJheShkYXRhKSkge1xyXG5cdFx0XHR0aGlzLm1vZGVsLmRhdGEgPSBkYXRhO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnZGF0YScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCBzb3J0QnkoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb2RlbC5zb3J0Qnk7XHJcblx0fTtcclxuXHRzZXQgc29ydEJ5KGRhdGEpIHtcclxuXHRcdGlmICgkLmlzQXJyYXkoZGF0YSkpIHtcclxuXHRcdFx0dGhpcy5tb2RlbC5zb3J0QnkgPSBkYXRhO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnc29ydEJ5JywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IHRvdGFsUm93cygpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vZGVsLnRvdGFsUm93cztcclxuXHR9O1xyXG5cdHNldCB0b3RhbFJvd3ModG90YWxSb3dzKSB7XHJcblx0XHRpZiAodHlwZW9mICh0b3RhbFJvd3MpID09PSBcIm51bWJlclwiICYmIHRvdGFsUm93cyA+IC0xKSB7XHJcblx0XHRcdHRoaXMubW9kZWwudG90YWxSb3dzID0gdG90YWxSb3dzO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgndG90YWxSb3dzJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IHRvdGFsUGFnZXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb2RlbC50b3RhbFBhZ2VzO1xyXG5cdH07XHJcblx0c2V0IHRvdGFsUGFnZXModG90YWxQYWdlcykge1xyXG5cdFx0aWYgKHR5cGVvZiAodG90YWxQYWdlcykgPT09IFwibnVtYmVyXCIgJiYgdG90YWxQYWdlcyA+IC0xKSB7XHJcblx0XHRcdHRoaXMubW9kZWwudG90YWxQYWdlcyA9IHRvdGFsUGFnZXM7XHJcblx0XHRcdHRoaXMubm90aWZ5KCd0b3RhbFBhZ2VzJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IHJvd3MoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb2RlbC5yb3dzO1xyXG5cdH07XHJcblx0c2V0IHJvd3Mocm93cykge1xyXG5cdFx0aWYgKHR5cGVvZiAocm93cykgPT09IFwibnVtYmVyXCIgJiYgcm93cyA+IC0xKSB7XHJcblx0XHRcdHRoaXMubW9kZWwucm93cyA9IHJvd3M7XHJcblx0XHRcdHRoaXMubm90aWZ5KCdyb3dzJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IHBhZ2UoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb2RlbC5wYWdlO1xyXG5cdH07XHJcblx0c2V0IHBhZ2UocGFnZSkge1xyXG5cdFx0aWYgKHR5cGVvZiAocGFnZSkgPT09IFwibnVtYmVyXCIgJiYgcGFnZSA+IC0xKSB7XHJcblx0XHRcdHRoaXMubW9kZWwucGFnZSA9IHBhZ2U7XHJcblx0XHRcdHRoaXMubm90aWZ5KCdwYWdlJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IG5ld1BhZ2UoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb2RlbC5uZXdQYWdlO1xyXG5cdH07XHJcblx0c2V0IG5ld1BhZ2UocGFnZSkge1xyXG5cdFx0aWYgKHR5cGVvZiAocGFnZSkgPT09IFwibnVtYmVyXCIgJiYgcGFnZSA+IC0xKSB7XHJcblx0XHRcdHRoaXMubW9kZWwubmV3UGFnZSA9IHBhZ2U7XHJcblx0XHRcdHRoaXMubm90aWZ5KCduZXdQYWdlJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IGZpbHRlclRvb2xiYXIoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb2RlbC5maWx0ZXJUb29sYmFyO1xyXG5cdH07XHJcblx0c2V0IGZpbHRlclRvb2xiYXIoZGF0YTogYm9vbGVhbikge1xyXG5cdFx0dGhpcy5tb2RlbC5maWx0ZXJUb29sYmFyID0gZGF0YTtcclxuXHRcdHRoaXMubm90aWZ5KCdmaWx0ZXJUb29sYmFyJywgdGhpcyk7XHJcblx0fTtcclxuXHJcblx0b24obmFtZSwgc3Vic2NyaWJlcik6IHZvaWQge1xyXG5cdFx0dmFyIHN0b3JlZ2UgPSB0aGlzLl9nZXRTdG9yYWdlKG5hbWUpO1xyXG5cdFx0c3RvcmVnZS5wdXNoKHN1YnNjcmliZXIpO1xyXG5cdH07XHJcblxyXG5cdG5vdGlmeShuYW1lLCBkYXRhKTogdm9pZCB7XHJcblx0XHR2YXIgc3RvcmVnZSA9IHRoaXMuX2dldFN0b3JhZ2UobmFtZSk7XHJcblx0XHQkLmVhY2goc3RvcmVnZSwgZnVuY3Rpb24gKGksIHN1YnNjcmliZXIpIHtcclxuXHRcdFx0bGV0IFsuLi5hcmddID0gW2RhdGEsIG5hbWUsIGldO1xyXG5cdFx0XHRzdWJzY3JpYmVyLmFwcGx5KHN1YnNjcmliZXIsIGFyZyk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIF9nZXRTdG9yYWdlKG5hbWUpIHtcclxuXHRcdGNvbnN0IHN1YnNjcmliZXJzID0gdGhpcy5zdWJzY3JpYmVycztcclxuXHRcdGlmICghc3Vic2NyaWJlcnNbbmFtZV0pIHtcclxuXHRcdFx0c3Vic2NyaWJlcnNbbmFtZV0gPSBbXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBzdWJzY3JpYmVyc1tuYW1lXTtcclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFZpZXdNb2RlbCBmcm9tICcuL1ZpZXdNb2RlbCc7XHJcbmltcG9ydCBQcm9jZXNzU2V0dGluZ3MgZnJvbSAnLi9Qcm9jZXNzU2V0dGluZ3MnO1xyXG5pbXBvcnQgQnVpbGRJbmZyYXN0cnVjdHVyZSBmcm9tICcuL0J1aWxkSW5mcmFzdHJ1Y3R1cmUnO1xyXG5pbXBvcnQgRmlsdGVyVG9vbGJhciBmcm9tICcuL0ZpbHRlclRvb2xiYXInO1xyXG5pbXBvcnQgU29ydGluZyBmcm9tICcuL1NvcnRpbmcnO1xyXG5pbXBvcnQgRGlzcGxheSBmcm9tICcuL0Rpc3BsYXknO1xyXG5pbXBvcnQgRml4ZWRIZWFkZXIgZnJvbSAnLi9GaXhlZEhlYWRlcic7XHJcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vU3RvcmFnZSc7XHJcbmltcG9ydCBGaWxsIGZyb20gJy4vRmlsbCc7XHJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vUGFnaW5hdGlvbic7XHJcbmltcG9ydCB0b29scyBmcm9tICcuL1Rvb2xzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhncmlkIHtcclxuXHRvcHRpb25zOiBJT3B0aW9ucztcclxuXHRwcm9wZXJ0aWVzOiBJWGdyaWRQcm9wZXJ0aWVzO1xyXG5cdFZpZXdNb2RlbDogSVZpZXdNb2RlbDtcclxuXHRQcm9jZXNzU2V0dGluZ3M6IFByb2Nlc3NTZXR0aW5ncztcclxuXHRCdWlsZEluZnJhc3RydWN0dXJlOiBCdWlsZEluZnJhc3RydWN0dXJlO1xyXG5cdFNvcnRpbmc6IFNvcnRpbmc7XHJcblx0U3RvcmFnZTogSVN0b3JhZ2U7XHJcblx0RmlsbDogRmlsbDtcclxuXHREaXNwbGF5OiBEaXNwbGF5O1xyXG5cdEZpeGVkSGVhZGVyOiBGaXhlZEhlYWRlcjtcclxuXHRGaWx0ZXJUb29sYmFyOiBGaWx0ZXJUb29sYmFyO1xyXG5cdFBhZ2luYXRpb246IFBhZ2luYXRpb247XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM6IElPcHRpb25zLCAkYm94OiBKUXVlcnkpIHtcclxuXHRcdHRoaXMucHJvcGVydGllcyA9IHtcclxuXHRcdFx0JGJveCxcclxuXHRcdFx0ZGF0YTogW11cclxuXHRcdH1cclxuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHtcclxuXHRcdFx0YmVmb3JlUmVxdWVzdDogW10sXHJcblx0XHRcdGFmdGVyUmVzcG9uc2U6IFtdLFxyXG5cdFx0XHRzb3J0Qnk6IFtdLFxyXG5cdFx0XHRwYWdpbmF0aW9uU2VsZWN0b3I6ICcnLFxyXG5cdFx0XHRhamF4VHlwZTogJ1BPU1QnLFxyXG5cdFx0XHRmaWx0ZXJUb29sYmFyR3JvdXBPcDogJ0FORCcsXHJcblx0XHRcdHVybDogJycsXHJcblx0XHRcdG11bHRpU29ydGluZzogZmFsc2UsXHJcblx0XHRcdGZpbHRlclRvb2xiYXI6IGZhbHNlXHJcblx0XHR9LCBvcHRpb25zKTtcclxuXHJcblx0XHR0aGlzLlN0b3JhZ2UgPSBuZXcgU3RvcmFnZSh7ICRib3ggfSlcclxuXHRcdHRoaXMuX2V4ZWMoKTtcclxuXHR9O1xyXG5cclxuXHRhamF4RnVuY3Rpb24ocXVlcnlPYmplY3Q6IGFueSwgdXJsOiBzdHJpbmcpIHtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblx0XHRyZXR1cm4gJC5hamF4KHtcclxuXHRcdFx0dXJsOiB1cmwsXHJcblx0XHRcdGRhdGE6IHF1ZXJ5T2JqZWN0LFxyXG5cdFx0XHR0eXBlOiBvcHRpb25zLmFqYXhUeXBlLFxyXG5cdFx0XHRkYXRhVHlwZTogJ2pzb24nXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdF9yZXNwb25zZShyZXNwb25zZU9iamVjdDogSVJlc3BvbnNlKSB7XHJcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cdFx0aWYgKG9wdGlvbnMuYWZ0ZXJSZXNwb25zZSkge1xyXG5cdFx0XHR0b29scy5leGVjdXRlKG9wdGlvbnMuYWZ0ZXJSZXNwb25zZSwgW3Jlc3BvbnNlT2JqZWN0XSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0X3JlcXVlc3QocXVlcnlPYmplY3QgPSB7fSkge1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcclxuXHRcdFx0ZCA9ICQuRGVmZXJyZWQoKTtcclxuXHRcdGlmIChvcHRpb25zLmJlZm9yZVJlcXVlc3QpIHtcclxuXHRcdFx0dG9vbHMuZXhlY3V0ZShvcHRpb25zLmJlZm9yZVJlcXVlc3QsIFtxdWVyeU9iamVjdF0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYWpheEZ1bmN0aW9uKHF1ZXJ5T2JqZWN0LCBvcHRpb25zLnVybCkuZG9uZSh0aGlzLl9yZXNwb25zZS5iaW5kKHRoaXMpKS5hbHdheXMoZC5yZXNvbHZlKTtcclxuXHJcblx0XHRyZXR1cm4gZDtcclxuXHR9O1xyXG5cclxuXHRfYmluZCgpIHtcclxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRwcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG5cdFx0XHRvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cclxuXHRcdC8vIHRvIERvIGlmIG1vZGVsIHdpbGwgYmUgY2hhbmdlZFxyXG5cdFx0dGhpcy5TdG9yYWdlLm9uKCdjb2xNb2RlbHMnLCAoKSA9PiB7XHJcblx0XHRcdC8vY29uc29sZS5sb2codGhpcy5GaWxsKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuU3RvcmFnZS5vbignZGF0YScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5EaXNwbGF5LmV4ZWMoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuVmlld01vZGVsLm9uKCdkYXRhJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLkZpbGwudGJvZHkoKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5GaXhlZEhlYWRlci5yZXNpemUoKTtcclxuXHRcdFx0fSwgMTA1MClcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuU3RvcmFnZS5vbignJHBhZ2luYXRpb25Cb3gnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuUGFnaW5hdGlvbi5leGVjKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLlN0b3JhZ2Uub24oJyRoZWFkVGFibGUnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuU29ydGluZy5iaW5kKCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdF9leGVjKCkge1xyXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMsXHJcblx0XHRcdG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblxyXG5cdFx0dGhpcy5WaWV3TW9kZWwgPSBuZXcgVmlld01vZGVsKCk7XHJcblx0XHR0aGlzLlByb2Nlc3NTZXR0aW5ncyA9IG5ldyBQcm9jZXNzU2V0dGluZ3Mob3B0aW9ucywgdGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCk7XHJcblx0XHR0aGlzLkJ1aWxkSW5mcmFzdHJ1Y3R1cmUgPSBuZXcgQnVpbGRJbmZyYXN0cnVjdHVyZShvcHRpb25zLCB0aGlzLlN0b3JhZ2UsIHRoaXMuVmlld01vZGVsKTtcclxuXHRcdHRoaXMuU29ydGluZyA9IG5ldyBTb3J0aW5nKHRoaXMuU3RvcmFnZSwgdGhpcy5WaWV3TW9kZWwsIG9wdGlvbnMpO1xyXG5cdFx0dGhpcy5GaWxsID0gbmV3IEZpbGwodGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCk7XHJcblx0XHR0aGlzLkZpbHRlclRvb2xiYXIgPSBuZXcgRmlsdGVyVG9vbGJhcih0aGlzLlN0b3JhZ2UsIHRoaXMuVmlld01vZGVsLCBvcHRpb25zKTtcclxuXHRcdHRoaXMuRGlzcGxheSA9IG5ldyBEaXNwbGF5KHtcclxuXHRcdFx0c3RvcmFnZTogdGhpcy5TdG9yYWdlLFxyXG5cdFx0XHR2aWV3TW9kZWw6IHRoaXMuVmlld01vZGVsLFxyXG5cdFx0XHRhamF4OiAoKHF1ZXJ5T2JqZWN0OiBJUmVxdWVzdCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLl9yZXF1ZXN0KHF1ZXJ5T2JqZWN0KTtcclxuXHRcdFx0fSksXHJcblx0XHRcdGlzTG9jYWw6IG9wdGlvbnMudXJsID8gZmFsc2UgOiB0cnVlXHJcblx0XHR9KTtcclxuXHRcdHRoaXMuRml4ZWRIZWFkZXIgPSBuZXcgRml4ZWRIZWFkZXIodGhpcy5TdG9yYWdlKTtcclxuXHRcdHRoaXMuUGFnaW5hdGlvbiA9IG5ldyBQYWdpbmF0aW9uKG9wdGlvbnMsIHRoaXMuU3RvcmFnZSwgdGhpcy5WaWV3TW9kZWwpO1xyXG5cclxuXHRcdHRoaXMuX2JpbmQoKTtcclxuXHJcblx0XHR0aGlzLkZpbGwudGhlYWQoKTtcclxuXHJcblx0XHRpZiAoISQuaXNBcnJheShvcHRpb25zLmRhdGEpKSB7XHJcblx0XHRcdG9wdGlvbnMuZGF0YSA9IFtdO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5TdG9yYWdlLmRhdGEgPSBvcHRpb25zLmRhdGE7XHJcblx0fVxyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9
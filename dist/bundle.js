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
            if (isNaN(value)) {
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
        this.triggerOrder = this.triggerOrder.bind(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0J1aWxkSW5mcmFzdHJ1Y3R1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ29sTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRGlzcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9EaXNwbGF5TW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRmlsbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9GaWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRmlsdGVyTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRmlsdGVyVG9vbGJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9GaWx0ZXJUb29sYmFyTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvRml4ZWRIZWFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvTG9jYWxTb3J0UnVsZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL09wZXJhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9QYWdpbmF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1BpcGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1Byb2Nlc3NTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9RdWVyeU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1NvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvU29ydFJ1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvU29ydGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9TdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1Rvb2xzLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL1ZpZXdNb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9YZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGb0M7QUFFcEMsQ0FBQyxVQUFDLENBQUM7SUFDRixDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRztRQUFVLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ3BDLElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBTSxPQUFPLEdBQXNCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxHQUFHLENB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QUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUNGLFlBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDcklELHlDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBYZ3JpZCBmcm9tICcuL21vZHVsZXMvWGdyaWQnO1xyXG5cclxuKCgkKSA9PiB7XHJcblx0JC5mbi5YZ3JpZCA9IGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSkge1xyXG5cdFx0bGV0IGRhdGE7XHJcblx0XHRjb25zdCBvcHRpb25zOiBJT3B0aW9ucyB8IHN0cmluZyA9IGFyZ3NbMF07XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0ZGF0YSA9ICQodGhpcykuZGF0YSgnWGdyaWQnKTtcclxuXHRcdFx0aWYgKCFkYXRhKSB7XHJcblx0XHRcdFx0Y29uc3QgcHJvcHM6IElPcHRpb25zID0gKHR5cGVvZiAob3B0aW9ucykgPT09ICdzdHJpbmcnKSA/IGFyZ3NbMV0gOiBvcHRpb25zO1xyXG5cdFx0XHRcdCQodGhpcykuZGF0YSgnWGdyaWQnLCBuZXcgWGdyaWQocHJvcHMsICQodGhpcykpKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgKG9wdGlvbnMpID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLmluZGV4T2YoJ18nKSAhPT0gMCAmJiBkYXRhW29wdGlvbnNdID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0Y29uc3QgcHJvcHMgPSBhcmdzLnNsaWNlKDEpO1xyXG5cdFx0XHRcdGRhdGFbb3B0aW9uc10uYXBwbHkoZGF0YSwgcHJvcHMpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGRhdGEucmVmcmVzaCkge1xyXG5cdFx0XHRcdGRhdGEucmVmcmVzaC5hcHBseShkYXRhLCBhcmdzKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59KShqUXVlcnkpO1xyXG4iLCJpbXBvcnQgdG9vbHMgZnJvbSAnLi9Ub29scyc7XHJcblxyXG5jbGFzcyBCdWlsZEluZnJhc3RydWN0dXJlIHtcclxuXHR2aWV3TW9kZWw6IElWaWV3TW9kZWw7XHJcblx0c3RvcmFnZTogSVN0b3JhZ2U7XHJcblx0b3B0aW9uczogSUJ1aWxkSW5mcmFzdHJ1Y3R1cmVPcHRpb25zO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCBzdG9yYWdlLCB2aWV3TW9kZWwpIHtcclxuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xyXG5cdFx0XHR0aGVhZENsYXNzOiAndGFibGUtZ3JpZC10aGVhZCcsXHJcblx0XHRcdHRib2R5Q2xhc3M6ICd0YWJsZS1ncmlkLXRib2R5JyxcclxuXHRcdFx0Zmlyc3RCdG5UZW1wbGF0ZTogJzxzcGFuIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPiYjMTcxOzwvc3Bhbj4nLFxyXG5cdFx0XHRsYXN0QnRuVGVtcGxhdGU6ICc8c3BhbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj4mIzE4Nzs8L3NwYW4+JyxcclxuXHRcdFx0cHJldkJ0blRlbXBsYXRlOiAnPHNwYW4gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+JiM4MjQ5Ozwvc3Bhbj4nLFxyXG5cdFx0XHRuZXh0QnRuVGVtcGxhdGU6ICc8c3BhbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj4mIzgyNTA7PC9zcGFuPicsXHJcblx0XHRcdGN1cnJlbnRQYWdlVGVtcGxhdGU6ICc8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+JyxcclxuXHRcdFx0cGFnaW5hdGlvblRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIlhncmlkLXBhZ2dpbmF0aW9uIGlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCIgPntmaXJzdEJ0blRlbXBsYXRlfXtwcmV2QnRuVGVtcGxhdGV9PHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+IFBhZ2UgPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdHtjdXJyZW50UGFnZVRlbXBsYXRlfVxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCIgPjxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPiBvZiA8c3BhbiBjbGFzcz1cIlhncmlkLXRvdGFsLXBhZ2VzXCI+PC9zcGFuPjwvc3Bhbj57bmV4dEJ0blRlbXBsYXRlfXtsYXN0QnRuVGVtcGxhdGV9PC9kaXY+XHJcblx0XHRcdDwvZGl2PmBcclxuXHRcdH0sIG9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblx0XHR0aGlzLl9leGVjKCk7XHJcblx0fTtcclxuXHRidWlsZEZpbHRlclRvb2xiYXIoKSB7XHJcblx0XHRpZiAodGhpcy52aWV3TW9kZWwuZmlsdGVyVG9vbGJhcikge1xyXG5cdFx0XHR0aGlzLl9idWlsZEZpbHRlclRvb2xiYXIoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdF9leGVjKCkge1xyXG5cdFx0dGhpcy5fYnVpbGQoKTtcclxuXHRcdHRoaXMuX2J1aWxkVGhlYWQoKTtcclxuXHRcdHRoaXMuX2J1aWxkVEJvZHkoKTtcclxuXHRcdHRoaXMuX2J1aWxkUGFnaW5hdGlvbigpO1xyXG5cclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcclxuXHRcdGNvbnN0ICR0Zm9vdENlbGxzID0gc3RvcmFnZS4kZ3JpZFRhYmxlLmZpbmQoJy5YZ3JpZC10Ym9keS13IHRkJyk7XHJcblx0XHRjb25zdCAkdGhlYWRDZWxscyA9IHN0b3JhZ2UuJGhlYWRUYWJsZS5maW5kKCd0cicpO1xyXG5cclxuXHRcdGNvbE1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RlbCwgaSkge1xyXG5cdFx0XHRsZXQgY2VsbHMgPSBbXTtcclxuXHJcblx0XHRcdGNlbGxzLnB1c2goJHRmb290Q2VsbHMuZ2V0KGkpKTtcclxuXHRcdFx0JHRoZWFkQ2VsbHMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0Y2VsbHMucHVzaCgkKHRoaXMpLmZpbmQoJz4qOmVxKCcgKyBpICsgJyknKS5nZXQoMCkpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG1vZGVsLmRlcGVuZGVudCA9IGNlbGxzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHtcclxuXHRcdFx0XHRcdCRhbmNob3I6ICQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKSxcclxuXHRcdFx0XHRcdCRpdGVtOiAkKGl0ZW0pXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0cmVzdWx0LiRpdGVtLmJlZm9yZShyZXN1bHQuJGFuY2hvcik7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cdF9hZGRQcm9wc3RvSGVhZGVyQ2VsbHMoaSwgaXRlbSkge1xyXG5cdFx0Y29uc3QgJGl0ZW0gPSAkKGl0ZW0pO1xyXG5cdFx0Y29uc3QgY29sTW9kZWwgPSB0aGlzLnN0b3JhZ2UuY29sTW9kZWxzW2ldO1xyXG5cclxuXHRcdCRpdGVtLmF0dHIoJ2RhdGEtYWxpYXMnLCBjb2xNb2RlbFsnYWxpYXMnXSk7XHJcblx0XHRpZiAoY29sTW9kZWwuZml4ZWQpIHtcclxuXHRcdFx0JGl0ZW0uYWRkQ2xhc3MoJ2ZpeGVkJyk7XHJcblx0XHRcdGlmIChjb2xNb2RlbC53aWR0aCkge1xyXG5cdFx0XHRcdCRpdGVtLndpZHRoKGNvbE1vZGVsLndpZHRoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0X2J1aWxkRmlsdGVyVG9vbGJhcigpIHtcclxuXHRcdGNvbnN0IHRhZyA9ICd0Zm9vdCc7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3QgJGZpbHRlciA9ICQoYDwke3RhZ30gY2xhc3M9XCJYZ3JpZC10aGVhZC1maWx0ZXJcIj48dHI+JHsgbmV3IEFycmF5KHN0b3JhZ2UuY29sTW9kZWxzLmxlbmd0aCArIDEpLmpvaW4oJzx0ZCBjbGFzcz1cIlhncmlkLWZpbHRlci1jZWxsXCI+PC90ZD4nKX08L3RyPjwvJHt0YWd9PmApO1xyXG5cdFx0Y29uc3QgYWRkUHJvcCA9IHRoaXMuX2FkZFByb3BzdG9IZWFkZXJDZWxscy5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdHN0b3JhZ2UuJGZpbHRlclRvb2xiYXJJdGVtcyA9ICRmaWx0ZXIuZmluZCgnLlhncmlkLWZpbHRlci1jZWxsJykuZWFjaChhZGRQcm9wKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5maW5kKCcuWGdyaWQtdGhlYWQtdyB0ZCcpLmVhY2goYWRkUHJvcCk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuYXBwZW5kKCRmaWx0ZXIpO1xyXG5cdH07XHJcblxyXG5cdF9idWlsZFRoZWFkKCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGxldCB0YWcgPSAndGhlYWQnO1xyXG5cdFx0bGV0IHdpZHRoSGVscGVyID0gYDwke3RhZ30gY2xhc3M9XCJYZ3JpZC10aGVhZC13XCI+PHRyPiR7bmV3IEFycmF5KHN0b3JhZ2UuY29sTW9kZWxzLmxlbmd0aCArIDEpLmpvaW4oJzx0ZD48ZGl2IGNsYXNzPVwiWGdyaWQtV2lkdGhMaXN0ZW5lci13cmFwcGVyXCI+PGlmcmFtZSBkYXRhLWNvbD1cIjBcIiBjbGFzcz1cIlhncmlkLVdpZHRoTGlzdGVuZXJcIj48L2lmcmFtZT48L2Rpdj48L3RkPicpfTwvdHI+PC8ke3RhZ30+YDtcclxuXHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuaHRtbCh3aWR0aEhlbHBlcik7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuZmluZCgnLlhncmlkLXRoZWFkLXcgdGQnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdGNvbnN0ICR0ZCA9ICQodGhpcyk7XHJcblx0XHRcdGNvbnN0IGNvbE1vZGVsID0gc3RvcmFnZS5jb2xNb2RlbHNbaV07XHJcblx0XHRcdGNvbnN0IGlmcmFtZTogSFRNTEVsZW1lbnQgPSAkdGQuZmluZCgnaWZyYW1lJylbMF07XHJcblxyXG5cdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdkYXRhLWFsaWFzJywgY29sTW9kZWwuYWxpYXMpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGFnID0gJ3Rib2R5JztcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5hcHBlbmQoYDwke3RhZ30gY2xhc3M9XCJYZ3JpZC10aGVhZC1sYWJlbHNcIj48dHI+JHtuZXcgQXJyYXkoc3RvcmFnZS5jb2xNb2RlbHMubGVuZ3RoICsgMSkuam9pbignPHRoIGNsYXNzPVwiWGdyaWQtdGhlYWQtbGFiZWxcIj48L3RoPicpfTwvdHI+PC8ke3RhZ30+YCk7XHJcblx0XHRzdG9yYWdlLiRoZWFkTGFiZWxzID0gc3RvcmFnZS4kaGVhZFRhYmxlLmZpbmQoJy5YZ3JpZC10aGVhZC1sYWJlbCcpO1xyXG5cdFx0c3RvcmFnZS4kaGVhZExhYmVscy5lYWNoKChpLCBpdGVtKSA9PiB7XHJcblx0XHRcdHRoaXMuX2FkZFByb3BzdG9IZWFkZXJDZWxscyhpLCBpdGVtKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuYnVpbGRGaWx0ZXJUb29sYmFyKCk7XHJcblx0fTtcclxuXHJcblx0X2J1aWxkVEJvZHkoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0bGV0IHdpZHRoSGVscGVyID0gJzx0aGVhZCBjbGFzcz1cIlhncmlkLXRib2R5LXdcIj48dHI+JyArIG5ldyBBcnJheShzdG9yYWdlLmNvbE1vZGVscy5sZW5ndGggKyAxKS5qb2luKCc8dGQ+PGk+PC9pPjwvdGQ+JykgKyAnPC90cj48L3RoZWFkPic7XHJcblxyXG5cdFx0c3RvcmFnZS4kZ3JpZFRhYmxlLmh0bWwod2lkdGhIZWxwZXIpO1xyXG5cdFx0c3RvcmFnZS4kZ3JpZFRhYmxlLmZpbmQoJy5YZ3JpZC10Ym9keS13IHRyIHRkJykuZWFjaCgoaSwgaXRlbSkgPT4ge1xyXG5cdFx0XHR0aGlzLl9hZGRQcm9wc3RvSGVhZGVyQ2VsbHMoaSwgaXRlbSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRfYnVpbGRQYWdpbmF0aW9uKCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblx0XHRjb25zdCAkcGFnaW5hdGlvbiA9ICQob3B0aW9ucy5wYWdpbmF0aW9uVGVtcGxhdGUpO1xyXG5cdFx0Y29uc3QgeyBmaXJzdEJ0blRlbXBsYXRlLCBsYXN0QnRuVGVtcGxhdGUsIHByZXZCdG5UZW1wbGF0ZSwgbmV4dEJ0blRlbXBsYXRlLCBjdXJyZW50UGFnZVRlbXBsYXRlIH0gPSBvcHRpb25zO1xyXG5cdFx0bGV0ICRwYWdpbmF0aW9uQm94O1xyXG5cclxuXHRcdHRvb2xzLmluc2VydEVsZW1lbnQoJHBhZ2luYXRpb24sICd7Zmlyc3RCdG5UZW1wbGF0ZX0nLCBmaXJzdEJ0blRlbXBsYXRlID8gJChmaXJzdEJ0blRlbXBsYXRlKS5hZGRDbGFzcygnWGdyaWQtZmlyc3QnKSA6ICcnKTtcclxuXHRcdHRvb2xzLmluc2VydEVsZW1lbnQoJHBhZ2luYXRpb24sICd7cHJldkJ0blRlbXBsYXRlfScsICQocHJldkJ0blRlbXBsYXRlKS5hZGRDbGFzcygnWGdyaWQtcHJldicpKTtcclxuXHRcdHRvb2xzLmluc2VydEVsZW1lbnQoJHBhZ2luYXRpb24sICd7bmV4dEJ0blRlbXBsYXRlfScsICQobmV4dEJ0blRlbXBsYXRlKS5hZGRDbGFzcygnWGdyaWQtbmV4dCcpKTtcclxuXHRcdHRvb2xzLmluc2VydEVsZW1lbnQoJHBhZ2luYXRpb24sICd7bGFzdEJ0blRlbXBsYXRlfScsICQobGFzdEJ0blRlbXBsYXRlKS5hZGRDbGFzcygnWGdyaWQtbGFzdCcpKTtcclxuXHRcdHRvb2xzLmluc2VydEVsZW1lbnQoJHBhZ2luYXRpb24sICd7Y3VycmVudFBhZ2VUZW1wbGF0ZX0nLCAkKGN1cnJlbnRQYWdlVGVtcGxhdGUpLmFkZENsYXNzKCdYZ3JpZC1jdXJyZW50LXBhZ2UnKSk7XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMucGFnaW5hdGlvblNlbGVjdG9yKSB7XHJcblx0XHRcdCRwYWdpbmF0aW9uQm94ID0gJChvcHRpb25zLnBhZ2luYXRpb25TZWxlY3Rvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkcGFnaW5hdGlvbkJveCA9IHN0b3JhZ2UuJGJveC5maW5kKCcuWGdyaWQtcGFnZ2luYXRpb24td3JhcHBlcicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRwYWdpbmF0aW9uQm94Lmh0bWwoJHBhZ2luYXRpb24pO1xyXG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveCA9ICRwYWdpbmF0aW9uQm94O1xyXG5cdH07XHJcblxyXG5cdF9idWlsZCgpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG5cclxuXHRcdHN0b3JhZ2UuJGJveC5odG1sKGA8ZGl2IGNsYXNzPVwiWGdyaWRcIj5cclxuXHQ8ZGl2IGNsYXNzPVwiWGdyaWQtd3JhcHBlclwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cIlhncmlkLXdyYXBwZXItaG9sZGVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJYZ3JpZC10aGVhZC13cmFwcGVyXCI+XHJcblx0XHRcdFx0PHRhYmxlIGNsYXNzPVwiWGdyaWQtdGhlYWQgJHtvcHRpb25zLnRoZWFkQ2xhc3N9XCI+PC90YWJsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJYZ3JpZC10Ym9keS13cmFwcGVyXCI+XHJcblx0XHRcdFx0PHRhYmxlIGNsYXNzPVwiWGdyaWQtdGJvZHkgJHtvcHRpb25zLnRib2R5Q2xhc3N9XCI+PC90YWJsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJYZ3JpZC1wYWdnaW5hdGlvbi13cmFwcGVyXCI+PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PmApO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlID0gc3RvcmFnZS4kYm94LmZpbmQoJy5YZ3JpZC10aGVhZCcpO1xyXG5cdFx0c3RvcmFnZS4kZ3JpZFRhYmxlID0gc3RvcmFnZS4kYm94LmZpbmQoJy5YZ3JpZC10Ym9keScpO1xyXG5cdH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQnVpbGRJbmZyYXN0cnVjdHVyZTsiLCJpbXBvcnQgcGlwZXMgZnJvbSAnLi9QaXBlcyc7XHJcbmltcG9ydCBGaWx0ZXJUb29sYmFyTW9kZWwgZnJvbSAnLi9GaWx0ZXJUb29sYmFyTW9kZWwnO1xyXG5cclxuY2xhc3MgQ29sTW9kZWwgaW1wbGVtZW50cyBJQ29sTW9kZWwge1xyXG5cdGFsaWFzOiBzdHJpbmc7XHJcblx0ZmlsdGVyRm9ybWF0dGVyOiBGdW5jdGlvbjtcclxuXHRmaWx0ZXJPcHRpb24gPSAnY24nO1xyXG5cdGZpbHRlclRvb2xiYXJTZXR0aW5nczogYW55O1xyXG5cdGZpbHRlclR5cGUgPSAndGV4dCc7XHJcblx0ZmlsdGVyYWJsZSA9IGZhbHNlO1xyXG5cdGZpeGVkID0gZmFsc2U7XHJcblx0aGlkZGVuID0gZmFsc2U7XHJcblx0aW5zZW5zaXRpdmUgPSBmYWxzZTtcclxuXHRrZXk6IHN0cmluZztcclxuXHRsYWJlbCA9ICcnO1xyXG5cdG9yZGVyOiBudW1iZXI7XHJcblx0cmVzaXphYmxlID0gZmFsc2U7XHJcblx0c29ydEZvcm1hdHRlcjogRnVuY3Rpb247XHJcblx0c29ydFR5cGUgPSAndGV4dCc7XHJcblx0c29ydGFibGUgPSBmYWxzZTtcclxuXHR3aWR0aDogbnVtYmVyO1xyXG5cclxuXHRkZXBlbmRlbnQgPSBbXTtcclxuXHRfY2hlY2s6IEZ1bmN0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihtb2RlbCwgb3JkZXIpIHtcclxuXHRcdHRoaXMub3JkZXIgPSBvcmRlcjtcclxuXHJcblx0XHQkLmV4dGVuZCh0aGlzLCBtb2RlbCk7XHJcblx0XHR0aGlzLmZpbHRlclRvb2xiYXJTZXR0aW5ncyA9IG5ldyBGaWx0ZXJUb29sYmFyTW9kZWwobW9kZWwuZmlsdGVyVG9vbGJhclNldHRpbmdzKTtcclxuXHJcblx0XHRpZiAodHlwZW9mICh0aGlzLmFsaWFzKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0dGhpcy5hbGlhcyA9IHRoaXMua2V5O1xyXG5cdFx0fVxyXG5cdFx0aWYgKHR5cGVvZiAodGhpcy5rZXkpID09PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHR0aGlzLmtleSA9IHRoaXMuYWxpYXM7XHJcblx0XHR9XHJcblx0XHRpZiAobW9kZWwuc29ydFR5cGUgJiYgdHlwZW9mIChtb2RlbC5zb3J0VHlwZSkgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0dGhpcy5zb3J0Rm9ybWF0dGVyID0gbW9kZWwuc29ydFR5cGU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNvcnRGb3JtYXR0ZXIgPSBwaXBlcy5nZXRCeVR5cGUobW9kZWwuc29ydFR5cGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChtb2RlbC5maWx0ZXJUeXBlICYmIHR5cGVvZiAobW9kZWwuZmlsdGVyVHlwZSkgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0dGhpcy5maWx0ZXJGb3JtYXR0ZXIgPSBtb2RlbC5maWx0ZXJUeXBlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5maWx0ZXJGb3JtYXR0ZXIgPSBwaXBlcy5nZXRCeVR5cGUobW9kZWwuZmlsdGVyVHlwZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5kZXBlbmRlbnQgPSBbXTtcclxuXHRcdHRoaXMuX2NoZWNrID0gZnVuY3Rpb24gKCk6IHZvaWQge1xyXG5cdFx0XHRpZiAodGhpcy5oaWRkZW4pIHtcclxuXHRcdFx0XHR0aGlzLmRlcGVuZGVudC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRcdFx0XHRpdGVtLiRpdGVtLmRldGFjaCgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZGVwZW5kZW50LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRcdFx0XHRcdGl0ZW0uJGFuY2hvci5hZnRlcihpdGVtLiRpdGVtKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bGFiZWxGb3JtYXR0ZXIoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5sYWJlbDtcclxuXHR9O1xyXG5cclxuXHRjZWxsRm9ybWF0dGVyKCR0ZCwgdmFsdWUsIHJvd0RhdGEsIGRhdGEpIHtcclxuXHRcdGlmICh0eXBlb2YgKHZhbHVlKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0dmFsdWUgPSAnJztcclxuXHRcdH1cclxuXHRcdHJldHVybiAnPGRpdiBjbGFzcz1cImVsbGlwc2lzXCI+JyArIHZhbHVlICsgJzwvZGl2Pic7XHJcblx0fTtcclxuXHJcblx0ZmlsdGVyVG9vbGJhckZvcm1hdHRlcigkY2VsbCwgY29sTW9kZWwpIHtcclxuXHRcdGNvbnN0IHNldHRpbmdzID0gY29sTW9kZWwuZmlsdGVyVG9vbGJhclNldHRpbmdzIHx8IHt9O1xyXG5cdFx0bGV0ICRjb250cm9sLFxyXG5cdFx0XHQkY29udGFpbmVyLFxyXG5cdFx0XHQkd3JhcCA9ICQoJzxkaXYgY2xhc3M9XCJYZ3JpZC1maWx0ZXItY29udHJvbC13cmFwXCI+PC9kaXY+JyksXHJcblx0XHRcdHN0ciA9ICc8ZGl2IGNsYXNzPVwiWGdyaWQtZmlsdGVyLXdyYXBwZXJcIj4nO1xyXG5cclxuXHRcdGlmIChzZXR0aW5ncy5hbGxvd1Jlc2V0QnV0dG9uIHx8IHNldHRpbmdzLmFsbG93U3VibWl0QnV0dG9uKSB7XHJcblx0XHRcdHN0ciArPSAnPHNwYW4gY2xhc3M9XCJYZ3JpZC1maWx0ZXItYnRuc1wiPic7XHJcblx0XHRcdGlmIChzZXR0aW5ncy5hbGxvd1Jlc2V0QnV0dG9uKSB7XHJcblx0XHRcdFx0c3RyICs9ICc8c3BhbiBjbGFzcz1cIlhncmlkLWJ0biBYZ3JpZC1yZXNldFwiPiYjMTAwMDY7PC9zcGFuPic7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHNldHRpbmdzLmFsbG93U3VibWl0QnV0dG9uKSB7XHJcblx0XHRcdFx0c3RyICs9ICc8c3BhbiBjbGFzcz1cIlhncmlkLWJ0biBYZ3JpZC1vblN1Ym1pdFwiPiYjMTAwMDQ7PC9zcGFuPic7XHJcblx0XHRcdH1cclxuXHRcdFx0c3RyICs9ICc8L3NwYW4+JztcclxuXHRcdH1cclxuXHRcdHN0ciArPSAnPC9kaXY+J1xyXG5cdFx0c3dpdGNoIChzZXR0aW5ncy5mb3JtQ29udHJvbFR5cGUpIHtcclxuXHRcdFx0Y2FzZSAnc2VsZWN0JzpcclxuXHRcdFx0XHQkY29udHJvbCA9ICQoJzxzZWxlY3QgY2xhc3M9XCJYZ3JpZC1zZWxlY3QgWGdyaWQtZmlsdGVyXCIgIC8+Jyk7XHJcblx0XHRcdFx0c2V0dGluZ3Muc2VsZWN0T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpKSB7XHJcblx0XHRcdFx0XHQkY29udHJvbC5hcHBlbmQoJzxvcHRpb24gdmFsdWU9XCInICsgaSArICdcIj4nICsgZWxlbWVudC5sYWJlbCArICc8L29wdGlvbj4nKVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdCRjb250cm9sLnZhbChbXSkuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkSW5kZXggPSAtMTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHQkY29udHJvbCA9ICQoJzxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiWGdyaWQtaW5wdXQgWGdyaWQtZmlsdGVyXCIgLz4nKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGlmIChzZXR0aW5ncy5vbkNoYW5nZSkge1xyXG5cdFx0XHQkY29udHJvbC5hZGRDbGFzcygnWGdyaWQtb25DaGFuZ2UnKTtcclxuXHRcdH1cclxuXHRcdGlmIChzZXR0aW5ncy5vbktleWRvd24pIHtcclxuXHRcdFx0JGNvbnRyb2wuYWRkQ2xhc3MoJ1hncmlkLW9uS2V5ZG93bicpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNldHRpbmdzLm9uRW50ZXIpIHtcclxuXHRcdFx0JGNvbnRyb2wuYWRkQ2xhc3MoJ1hncmlkLW9uRW50ZXInKTtcclxuXHRcdH1cclxuXHRcdGlmIChzZXR0aW5ncy5hdHRyKSB7XHJcblx0XHRcdCRjb250cm9sLmF0dHIoc2V0dGluZ3MuYXR0cik7XHJcblx0XHR9XHJcblxyXG5cdFx0JGNvbnRhaW5lciA9ICQoc3RyKTtcclxuXHRcdCR3cmFwLmFwcGVuZCgkY29udHJvbCk7XHJcblx0XHQkY29udGFpbmVyLmFwcGVuZCgkd3JhcCk7XHJcblx0XHQkY2VsbC5odG1sKCRjb250YWluZXIpO1xyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xNb2RlbDsiLCJpbXBvcnQgdG9vbHMgZnJvbSAnLi9Ub29scyc7XHJcbmltcG9ydCBRdWVyeU1vZGVsIGZyb20gJy4vUXVlcnlNb2RlbCc7XHJcbmltcG9ydCBzb3J0IGZyb20gJy4vU29ydCc7XHJcbmltcG9ydCBmaWx0ZXIgZnJvbSAnLi9GaWx0ZXInO1xyXG5pbXBvcnQgRGlzcGxheU1vZGVsIGZyb20gJy4vRGlzcGxheU1vZGVsJztcclxuaW1wb3J0IExvY2FsU29ydFJ1bGVNb2RlbCBmcm9tICcuL0xvY2FsU29ydFJ1bGVNb2RlbCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheSB7XHJcblx0dmlld01vZGVsOiBJVmlld01vZGVsO1xyXG5cdHN0b3JhZ2U6IElTdG9yYWdlO1xyXG5cdGFqYXg6IEZ1bmN0aW9uO1xyXG5cdHByb2Nlc3M6IEZ1bmN0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcblx0XHR0aGlzLnZpZXdNb2RlbCA9IG9wdGlvbnMudmlld01vZGVsO1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gb3B0aW9ucy5zdG9yYWdlO1xyXG5cdFx0dGhpcy5hamF4ID0gb3B0aW9ucy5hamF4O1xyXG5cclxuXHRcdGlmIChvcHRpb25zLmlzTG9jYWwpIHtcclxuXHRcdFx0dGhpcy5wcm9jZXNzID0gdGhpcy5fbG9jYWxQcm9jZXNzLmJpbmQodGhpcyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnByb2Nlc3MgPSB0aGlzLl9zZXJ2ZXJQcm9jZXNzLmJpbmQodGhpcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuX3N1YnNjcmliZSgpO1xyXG5cdFx0fSwgNTApO1xyXG5cdH07XHJcblxyXG5cdGV4ZWMoKTogdm9pZCB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3Qgdmlld01vZGVsID0gdGhpcy52aWV3TW9kZWw7XHJcblx0XHRjb25zdCBxdWVyeTogSVF1ZXJ5TW9kZWwgPSBuZXcgUXVlcnlNb2RlbCh7XHJcblx0XHRcdGZpbHRlcjogc3RvcmFnZS5maWx0ZXIsXHJcblx0XHRcdHNvcnQ6IHZpZXdNb2RlbC5zb3J0QnksXHJcblx0XHRcdHJvd3M6IHZpZXdNb2RlbC5yb3dzLFxyXG5cdFx0XHRwYWdlOiB2aWV3TW9kZWwubmV3UGFnZSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdHN0b3JhZ2UucXVlcnkgPSBxdWVyeTtcclxuXHRcdHN0b3JhZ2UuJGJveC5hZGRDbGFzcygnWGdyaWQtbG9hZGluZycpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnByb2Nlc3MoKS5kb25lKChkYXRhOiBJRGlzcGFseU1vZGVsKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5fZmlsbGVyKGRhdGEpO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmFnZS4kYm94LnJlbW92ZUNsYXNzKCdYZ3JpZC1sb2FkaW5nJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSwgMCk7XHJcblx0fTtcclxuXHJcblx0X2ZpbGxlcihkYXRhOiBJRGlzcGFseU1vZGVsKTogdm9pZCB7XHJcblx0XHRjb25zdCB2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbDtcclxuXHRcdHZpZXdNb2RlbC50b3RhbFBhZ2VzID0gZGF0YS50b3RhbFBhZ2VzXHJcblx0XHR2aWV3TW9kZWwudG90YWxSb3dzID0gZGF0YS50b3RhbFJvd3M7XHJcblx0XHR2aWV3TW9kZWwuZGF0YSA9IGRhdGEuZGF0YTtcclxuXHRcdHZpZXdNb2RlbC5wYWdlID0gZGF0YS5wYWdlO1xyXG5cdH07XHJcblxyXG5cdF9sb2NhbEZpbHRlcihkYXRhLCBmaWx0ZXJRdWVyeSkge1xyXG5cdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCksXHJcblx0XHRcdHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UsXHJcblx0XHRcdHJhd0RhdGEgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0Y29uc3QgY29sTW9kZWxzID0gc3RvcmFnZS5jb2xNb2RlbHNEaWN0aW9uYXJ5O1xyXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRjb25zdCByb3cgPSB7fTtcclxuXHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoYWxpYXMsIHJvd0RhdGEpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiAocm93W2FsaWFzXSkgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgY29sTW9kZWwgPSBjb2xNb2RlbHNbYWxpYXNdO1xyXG5cdFx0XHRcdFx0XHRcdHJvd1thbGlhc10gPSBjb2xNb2RlbC5maWx0ZXJGb3JtYXR0ZXIocm93RGF0YVtjb2xNb2RlbC5rZXldLCByb3dEYXRhLCBjb2xNb2RlbCk7XHJcblx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdHJldHVybiByb3dbYWxpYXNdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGlmIChmaWx0ZXJRdWVyeSkge1xyXG5cdFx0XHRcdGRhdGEgPSBmaWx0ZXIuZXhlYyhkYXRhLCBmaWx0ZXJRdWVyeSwgcmF3RGF0YSgpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xyXG5cdFx0fSwgMCk7XHJcblx0XHRyZXR1cm4gZGVmZXJyZWQ7XHJcblx0fTtcclxuXHJcblx0X2xvY2FsU29ydChkYXRhLCBzb3J0UnVsZXMpIHtcclxuXHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHJcblx0XHRpZiAoc29ydFJ1bGVzLmxlbmd0aCkge1xyXG5cdFx0XHRjb25zdCBsb2NhbFNvcnRSdWxlczogSUxvY2FsU29ydFJ1bGVbXSA9IHNvcnRSdWxlcy5tYXAoKHJ1bGUpID0+IHtcclxuXHRcdFx0XHRjb25zdCBjb2xNb2RlbCA9IHN0b3JhZ2UuY29sTW9kZWxzRGljdGlvbmFyeVtydWxlLmJ5XTtcclxuXHRcdFx0XHRjb25zdCBieSA9IGNvbE1vZGVsID8gY29sTW9kZWwua2V5IDogcnVsZS5ieTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIG5ldyBMb2NhbFNvcnRSdWxlTW9kZWwocnVsZS5vcmRlciwgYnksIGNvbE1vZGVsKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRkYXRhID0gc29ydC5leGVjKGRhdGEsIGxvY2FsU29ydFJ1bGVzKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcclxuXHRcdFx0fSwgMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGRlZmVycmVkO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2dldExvY2FsRGF0YShkYXRhOiBJUmF3RGF0YVtdLCBxdWVyeTogSVF1ZXJ5TW9kZWwpOiBJRGlzcGFseU1vZGVsIHtcclxuXHRcdGNvbnN0IHZpZXdNb2RlbDogSVZpZXdNb2RlbCA9IHRoaXMudmlld01vZGVsO1xyXG5cdFx0Y29uc3QgYmVnaW46IG51bWJlciA9IChxdWVyeS5wYWdlIC0gMSkgKiB2aWV3TW9kZWwucm93cztcclxuXHRcdGNvbnN0IGVuZDogbnVtYmVyID0gcXVlcnkucGFnZSAqIHZpZXdNb2RlbC5yb3dzO1xyXG5cdFx0Y29uc3QgZGF0YVRvRGlzcGxheTogSVJhd0RhdGFbXSA9IGRhdGEuc2xpY2UoYmVnaW4sIGVuZCk7XHJcblxyXG5cdFx0cmV0dXJuIG5ldyBEaXNwbGF5TW9kZWwoXHJcblx0XHRcdGRhdGFUb0Rpc3BsYXksXHJcblx0XHRcdHF1ZXJ5LnBhZ2UsXHJcblx0XHRcdE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIHZpZXdNb2RlbC5yb3dzKSB8fCAxLFxyXG5cdFx0XHRkYXRhLmxlbmd0aCxcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfbG9jYWxQcm9jZXNzKCk6IEpRdWVyeURlZmVycmVkPElEaXNwYWx5TW9kZWw+IHtcclxuXHRcdGNvbnN0IGRlZmVycmVkOiBKUXVlcnlEZWZlcnJlZDxJRGlzcGFseU1vZGVsPiA9ICQuRGVmZXJyZWQoKTtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRjb25zdCBxdWVyeTogSVF1ZXJ5TW9kZWwgPSBzdG9yYWdlLnF1ZXJ5O1xyXG5cclxuXHRcdHRoaXMuX2xvY2FsRmlsdGVyKHN0b3JhZ2UuZGF0YSwgcXVlcnkuZmlsdGVyKS5kb25lKChmaWx0ZXJlZERhdGEpID0+IHtcclxuXHRcdFx0dGhpcy5fbG9jYWxTb3J0KGZpbHRlcmVkRGF0YSwgcXVlcnkuc29ydCkuZG9uZSgoc29ydGVkRGF0YSkgPT4ge1xyXG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmUodGhpcy5fZ2V0TG9jYWxEYXRhKHNvcnRlZERhdGEsIHF1ZXJ5KSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZGVmZXJyZWQ7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfc2VydmVyUHJvY2VzcygpOiBKUXVlcnlEZWZlcnJlZDxJRGlzcGFseU1vZGVsPiB7XHJcblx0XHRyZXR1cm4gdGhpcy5hamF4KHRoaXMuc3RvcmFnZS5xdWVyeSk7XHJcblx0fTtcclxuXHRwcml2YXRlIF9zdWJzY3JpYmUoKSB7XHJcblx0XHRjb25zdCB2aWV3TW9kZWwgPSB0aGlzLnZpZXdNb2RlbDtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRjb25zdCBhY3Rpb24gPSB0b29scy50aHJvdHRsZSgoKSA9PiB7IHRoaXMuZXhlYygpOyB9LCAxMDApO1xyXG5cdFx0Y29uc3QgX3JlbG9hZCA9IGZ1bmN0aW9uIChzLCB0eXBlKSB7XHJcblx0XHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRcdGNhc2UgJ2ZpbHRlcic6XHJcblx0XHRcdFx0XHR2aWV3TW9kZWwubmV3UGFnZSA9IDE7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdzb3J0QnknOlxyXG5cdFx0XHRcdFx0Ly92aWV3TW9kZWwubmV3UGFnZSA9IDE7ID9cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGFjdGlvbigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZpZXdNb2RlbC5vbignbmV3UGFnZScsIF9yZWxvYWQpO1xyXG5cdFx0dmlld01vZGVsLm9uKCdzb3J0QnknLCBfcmVsb2FkKTtcclxuXHRcdHN0b3JhZ2Uub24oJ2ZpbHRlcicsIF9yZWxvYWQpO1xyXG5cdH07XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheU1vZGVsIGltcGxlbWVudHMgSURpc3BhbHlNb2RlbCB7XHJcblx0ZGF0YTogSVJhd0RhdGFbXTtcclxuXHRwYWdlID0gMTtcclxuXHR0b3RhbFBhZ2VzOiBudW1iZXI7XHJcblx0dG90YWxSb3dzOiBudW1iZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGRhdGFUb0Rpc3BsYXk6IElSYXdEYXRhW10sIHBhZ2U6IG51bWJlciwgdG90YWxQYWdlczogbnVtYmVyLCB0b3RhbFJvd3M6IG51bWJlcikge1xyXG5cdFx0dGhpcy5kYXRhID0gZGF0YVRvRGlzcGxheTtcclxuXHRcdGlmIChwYWdlID4gMCkge1xyXG5cdFx0XHR0aGlzLnBhZ2UgPSBwYWdlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy50b3RhbFBhZ2VzID0gdG90YWxQYWdlcztcclxuXHRcdHRoaXMudG90YWxSb3dzID0gdG90YWxSb3dzO1xyXG5cdH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGwge1xyXG5cdHZpZXdNb2RlbDogSVZpZXdNb2RlbDtcclxuXHRzdG9yYWdlOiBJU3RvcmFnZTtcclxuXHJcblx0Y29uc3RydWN0b3Ioc3RvcmFnZSwgdmlld01vZGVsKSB7XHJcblx0XHR0aGlzLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcclxuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblx0fTtcclxuXHJcblx0dGhlYWQoKTogdm9pZCB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3QgY2xhc3NSdWxlcyA9IFsncmVzaXphYmxlJywgJ3NvcnRhYmxlJywgJ2ZpbHRlcmFibGUnLCAnaGlkZGVuJ107XHJcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcclxuXHJcblx0XHRzdG9yYWdlLiRoZWFkTGFiZWxzLmVhY2goKGk6IG51bWJlciwgdGg6IEhUTUxFbGVtZW50KSA9PiB7XHJcblx0XHRcdGNvbnN0ICR0aCA9ICQodGgpO1xyXG5cdFx0XHRjb25zdCAkd3JhcHBlciA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xyXG5cdFx0XHRjb25zdCBjb2xNb2RlbCA9IGNvbE1vZGVsc1tpXTtcclxuXHJcblx0XHRcdCR0aC5kYXRhKCdYZ3JpZC5kYXRhJywgY29sTW9kZWwpO1xyXG5cclxuXHRcdFx0bGV0IGRhdGEgPSBjb2xNb2RlbC5sYWJlbEZvcm1hdHRlcigkd3JhcHBlciwgJHRoLCBjb2xNb2RlbCwgaSk7XHJcblx0XHRcdGlmICh0eXBlb2YgKGRhdGEpICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdCR3cmFwcGVyLmh0bWwoZGF0YSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHQkdGguYXBwZW5kKCR3cmFwcGVyKTtcclxuXHRcdFx0JC5lYWNoKGNsYXNzUnVsZXMsIGZ1bmN0aW9uIChpLCBtYXJrKSB7XHJcblx0XHRcdFx0aWYgKGNvbE1vZGVsW21hcmtdKSB7XHJcblx0XHRcdFx0XHQkdGguYWRkQ2xhc3MobWFyayk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCR0aC5yZW1vdmVDbGFzcyhtYXJrKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmZpbHRlclRvb2xiYXIoKTtcclxuXHR9O1xyXG5cclxuXHRmaWx0ZXJUb29sYmFyKCk6IHZvaWQge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGNvbnN0IGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzO1xyXG5cclxuXHRcdGlmIChzdG9yYWdlLiRmaWx0ZXJUb29sYmFySXRlbXMpIHtcclxuXHRcdFx0c3RvcmFnZS4kZmlsdGVyVG9vbGJhckl0ZW1zLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0XHRjb25zdCAkY2VsbCA9ICQodGhpcyksXHJcblx0XHRcdFx0XHRjb2xNb2RlbCA9IGNvbE1vZGVsc1tpXTtcclxuXHRcdFx0XHRpZiAoY29sTW9kZWwuZmlsdGVyYWJsZSAmJiBjb2xNb2RlbC5maWx0ZXJUb29sYmFyRm9ybWF0dGVyKSB7XHJcblx0XHRcdFx0XHRsZXQgZGF0YSA9IGNvbE1vZGVsLmZpbHRlclRvb2xiYXJGb3JtYXR0ZXIoJGNlbGwsIGNvbE1vZGVsKTtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2YgKGRhdGEpICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdFx0XHQkY2VsbC5odG1sKGRhdGEpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkY2VsbC5lbXB0eSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR0Ym9keSgpOiB2b2lkIHtcclxuXHRcdGNvbnN0IHsgc3RvcmFnZSwgdmlld01vZGVsIH0gPSB0aGlzO1xyXG5cdFx0Y29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblx0XHRjb25zdCBkYXRhVG9EaXNwbGF5ID0gdmlld01vZGVsLmRhdGE7XHJcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcclxuXHRcdGNvbnN0ICRoZWFkV3JhcCA9IHN0b3JhZ2UuJGhlYWRUYWJsZS5wYXJlbnQoKTtcclxuXHRcdGNvbnN0ICRncmlkV3JhcCA9IHN0b3JhZ2UuJGdyaWRUYWJsZS5wYXJlbnQoKTtcclxuXHRcdGNvbnN0IGRhdGEgPSBzdG9yYWdlLmRhdGE7XHJcblx0XHRjb25zdCB0Ym9keSA9IHRoaXMuX2NyZWF0ZVNoYWRvd0JvZHkoZnJhZ21lbnQpO1xyXG5cdFx0bGV0IG51bSA9IDA7XHJcblxyXG5cdFx0Y29sTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGNvbE1vZGVsLCBpKSB7XHJcblx0XHRcdGNvbE1vZGVsLl9jaGVjaygpO1xyXG5cdFx0XHRjb25zdCAkdGQgPSBzdG9yYWdlLiRoZWFkTGFiZWxzLmVxKGkpO1xyXG5cclxuXHRcdFx0aWYgKCFjb2xNb2RlbC5oaWRkZW4pIHtcclxuXHRcdFx0XHRudW0rKztcclxuXHRcdFx0XHRpZiAobnVtICUgMikge1xyXG5cdFx0XHRcdFx0JHRkLmFkZENsYXNzKCdvZGQnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JHRkLmFkZENsYXNzKCdldmVuJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKHRib2R5KS5maW5kKCd0cicpLmVhY2goKGksIHRyKSA9PiB7XHJcblx0XHRcdGNvbnN0IHJvd0RhdGEgPSBkYXRhVG9EaXNwbGF5W2ldO1xyXG5cclxuXHRcdFx0dGhpcy5fZmlsbFJvdygkKHRyKSwgcm93RGF0YSwgZGF0YSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRzdG9yYWdlLiRncmlkVGFibGUuZmluZCgnPnRib2R5JykucmVtb3ZlKCk7XHJcblx0XHQkaGVhZFdyYXAuY3NzKHsgJ3BhZGRpbmctcmlnaHQnOiAnJyB9KTtcclxuXHRcdHN0b3JhZ2UuJGdyaWRUYWJsZS5hcHBlbmQodGJvZHkpO1xyXG5cclxuXHRcdGlmICgkZ3JpZFdyYXBbMF0ub2Zmc2V0V2lkdGggLSAkZ3JpZFdyYXBbMF0uY2xpZW50V2lkdGgpIHtcclxuXHRcdFx0JGhlYWRXcmFwLmNzcyh7ICdwYWRkaW5nLXJpZ2h0Jzogc3RvcmFnZS5zY3JvbGxiYXJXaWR0aCArICdweCcgfSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLl91cGRhdGVIZWFkKCk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfY3JlYXRlU2hhZG93Qm9keShmcmFnbWVudDogRG9jdW1lbnRGcmFnbWVudCkge1xyXG5cdFx0Y29uc3QgeyBzdG9yYWdlLCB2aWV3TW9kZWwgfSA9IHRoaXM7XHJcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcclxuXHRcdGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcclxuXHRcdGNvbnN0IHJvd3NDb3VudCA9IHZpZXdNb2RlbC5kYXRhLmxlbmd0aDtcclxuXHRcdGxldCB0ciA9ICc8dHI+JyArIEFycmF5KGNvbE1vZGVscy5sZW5ndGggKyAxKS5qb2luKCc8dGQ+PC90ZD4nKSArICc8L3RyPic7XHJcblx0XHRsZXQgdHJzID0gJzx0Ym9keT4nICsgbmV3IEFycmF5KHJvd3NDb3VudCArIDEpLmpvaW4odHIpICsgJzx0Ym9keT4nO1xyXG5cclxuXHRcdGlmICghZnJhZ21lbnQpIHtcclxuXHRcdFx0ZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGJvZHkuaW5uZXJIVE1MID0gdHJzO1xyXG5cdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGJvZHkpO1xyXG5cclxuXHRcdHJldHVybiB0Ym9keTtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIF9maWxsUm93KCR0ciwgcm93RGF0YSwgZGF0YSk6IHZvaWQge1xyXG5cclxuXHRcdGNvbnN0ICR0ZHMgPSAkdHIuZmluZCgndGQnKTtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblx0XHRjb25zdCBjb2xNb2RlbHMgPSBzdG9yYWdlLmNvbE1vZGVscztcclxuXHRcdGxldCBudW0gPSAwO1xyXG5cclxuXHRcdCR0ci5kYXRhKCdYZ3JpZC5kYXRhJywgcm93RGF0YSk7XHJcblxyXG5cdFx0JC5lYWNoKGNvbE1vZGVscywgZnVuY3Rpb24gKGksIGNvbE1vZGVsKSB7XHJcblx0XHRcdGxldCB2YWx1ZSA9IHJvd0RhdGFbY29sTW9kZWwua2V5XSxcclxuXHRcdFx0XHQkdGQgPSAkdGRzLmVxKGkpLFxyXG5cdFx0XHRcdGRhdGE7XHJcblxyXG5cdFx0XHRpZiAoY29sTW9kZWwuaGlkZGVuKSB7XHJcblx0XHRcdFx0JHRkLnJlbW92ZSgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG51bSsrO1xyXG5cdFx0XHRcdGRhdGEgPSBjb2xNb2RlbC5jZWxsRm9ybWF0dGVyKCR0ZCwgdmFsdWUsIHJvd0RhdGEsIGRhdGEpO1xyXG5cdFx0XHRcdGlmIChudW0gJSAyKSB7XHJcblx0XHRcdFx0XHQkdGQuYWRkQ2xhc3MoJ29kZCcpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkdGQuYWRkQ2xhc3MoJ2V2ZW4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHR5cGVvZiAoZGF0YSkgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHQkdGQuaHRtbChkYXRhKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX3VwZGF0ZUhlYWQoKTogdm9pZCB7XHJcblx0XHRjb25zdCB7IHN0b3JhZ2UsIHZpZXdNb2RlbCB9ID0gdGhpcztcclxuXHRcdGNvbnN0IGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzO1xyXG5cdFx0Y29uc3QgJGhlYWRMYWJlbHMgPSBzdG9yYWdlLiRoZWFkTGFiZWxzO1xyXG5cdFx0Y29uc3Qgc29ydEJ5ID0ge307XHJcblxyXG5cdFx0dmlld01vZGVsLnNvcnRCeS5mb3JFYWNoKChzb3J0UnVsZSkgPT4ge1xyXG5cdFx0XHRzb3J0Qnlbc29ydFJ1bGUuYnldID0gc29ydFJ1bGUub3JkZXI7XHJcblx0XHR9KTtcclxuXHJcblx0XHRjb2xNb2RlbHMuZm9yRWFjaCgoY29sTW9kZWwsIGkpID0+IHtcclxuXHRcdFx0Y29uc3QgJGxhYmVsID0gJGhlYWRMYWJlbHMuZXEoaSk7XHJcblx0XHRcdGNvbnN0IG9yZGVyID0gc29ydEJ5W2NvbE1vZGVsLmFsaWFzXTtcclxuXHJcblx0XHRcdGlmIChvcmRlcikge1xyXG5cdFx0XHRcdCRsYWJlbC5hdHRyKCdkYXRhLXNvcnQnLCBvcmRlcik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JGxhYmVsLnJlbW92ZUF0dHIoJ2RhdGEtc29ydCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG59O1xyXG4iLCJpbXBvcnQgb3BlcmF0b3JzIGZyb20gJy4vT3BlcmF0b3JzJztcclxuY2xhc3MgRmlsdGVyIHtcclxuXHRleGVjKGRhdGEsIGdyb3VwLCBnZXREYXRhKSB7XHJcblx0XHRjb25zdCBuZXdEYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0sIGkpID0+IHtcclxuXHRcdFx0Y29uc3QgZ2V0ID0gZ2V0RGF0YSgpLFxyXG5cdFx0XHRcdHN0YXRlID0gdGhpcy5fY2hlY2soZ3JvdXAsIGl0ZW0sIGdldCk7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIG5ld0RhdGE7XHJcblx0fTtcclxuXHRwcml2YXRlIF9vcihydWxlcywgcm93RGF0YSwgZ2V0KSB7XHJcblx0XHRsZXQgaSA9IHJ1bGVzLmxlbmd0aDtcclxuXHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0Y29uc3QgcnVsZSA9IHJ1bGVzW2ldO1xyXG5cdFx0XHRpZiAoIW9wZXJhdG9yc1tydWxlLm9wXSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB2YWx1ZSA9IGdldChydWxlLmZpZWxkLCByb3dEYXRhKSxcclxuXHRcdFx0XHRzdGF0ZSA9IG9wZXJhdG9yc1tydWxlLm9wXShydWxlLmRhdGEsIHZhbHVlKTtcclxuXHRcdFx0aWYgKHN0YXRlKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9O1xyXG5cdHByaXZhdGUgX2FuZChydWxlcywgcm93RGF0YSwgZ2V0KSB7XHJcblx0XHRsZXQgaSA9IHJ1bGVzLmxlbmd0aDtcclxuXHRcdHdoaWxlIChpLS0pIHtcclxuXHRcdFx0Y29uc3QgcnVsZSA9IHJ1bGVzW2ldO1xyXG5cdFx0XHRpZiAoIW9wZXJhdG9yc1tydWxlLm9wXSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxldCB2YWx1ZSA9IGdldChydWxlLmZpZWxkLCByb3dEYXRhKSxcclxuXHRcdFx0XHRzdGF0ZSA9IG9wZXJhdG9yc1tydWxlLm9wXShydWxlLmRhdGEsIHZhbHVlKTtcclxuXHRcdFx0aWYgKCFzdGF0ZSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxuXHRwcml2YXRlIF9jaGVjayhncm91cCwgcm93RGF0YSwgZ2V0KSB7XHJcblx0XHRjb25zdCBpc09yID0gZ3JvdXAucnVsZXMubGVuZ3RoICYmIFN0cmluZyhncm91cC5ncm91cE9wKS50b1VwcGVyQ2FzZSgpID09PSBcIk9SXCI7XHJcblx0XHRpZiAoJC5pc0FycmF5KGdyb3VwLnJ1bGVzKSAmJiBncm91cC5ydWxlcy5sZW5ndGgpIHtcclxuXHRcdFx0aWYgKGlzT3IpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fb3IoZ3JvdXAucnVsZXMsIHJvd0RhdGEsIGdldCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2FuZChncm91cC5ydWxlcywgcm93RGF0YSwgZ2V0KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBGaWx0ZXIoKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJNb2RlbCBpbXBsZW1lbnRzIElGaWx0ZXJNb2RlbCB7XHJcblx0ZGF0YTogYW55O1xyXG5cdGZpZWxkOiBzdHJpbmc7XHJcblx0b3A6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoZGF0YTogYW55LCBmaWVsZDogc3RyaW5nLCBvcDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5maWVsZCA9IGZpZWxkO1xyXG5cdFx0dGhpcy5vcCA9IG9wO1xyXG5cdH1cclxufSIsImltcG9ydCBGaWx0ZXJNb2RlbCBmcm9tICcuL0ZpbHRlck1vZGVsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlclRvb2xiYXIge1xyXG5cdHN0b3JhZ2U6IElTdG9yYWdlO1xyXG5cdHZpZXdNb2RlbDogSVZpZXdNb2RlbDtcclxuXHRvcHRpb25zOiBJT3B0aW9ucztcclxuXHR0aW1lb3V0T25LZXlkb3duID0gbnVsbDtcclxuXHJcblx0Y29uc3RydWN0b3Ioc3RvcmFnZSwgdmlld01vZGVsLCBvcHRpb25zKSB7XHJcblx0XHR0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xyXG5cdFx0dGhpcy52aWV3TW9kZWwgPSB2aWV3TW9kZWw7XHJcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG5cdFx0dGhpcy5fYmluZCgpO1xyXG5cdH1cclxuXHJcblx0dHJpZ2dlclRvb2xiYXIoKSB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHRcdGNvbnN0IGNvbE1vZGVscyA9IHN0b3JhZ2UuY29sTW9kZWxzO1xyXG5cdFx0Y29uc3QgcnVsZXMgPSBbXTtcclxuXHRcdGNvbnN0IGRlZmF1bHRTZWFyY2ggPSAnY24nO1xyXG5cdFx0Y29uc3QgZ3JvdXBPcCA9IG9wdGlvbnMuZmlsdGVyVG9vbGJhckdyb3VwT3AgPT09ICdBTkQnID8gJ0FORCcgOiAnT1InO1xyXG5cdFx0bGV0IHJ1bGVHcm91cCA9IG51bGw7XHJcblxyXG5cdFx0aWYgKCFzdG9yYWdlLiRmaWx0ZXJUb29sYmFySXRlbXMpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblxyXG5cdFx0c3RvcmFnZS4kZmlsdGVyVG9vbGJhckl0ZW1zLmVhY2goZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0Y29uc3QgJGZpbHRlciA9ICQodGhpcyk7XHJcblx0XHRcdGNvbnN0ICRlbGVtID0gJGZpbHRlci5maW5kKCcuWGdyaWQtZmlsdGVyJylcclxuXHJcblx0XHRcdGlmICgkZWxlbS5sZW5ndGgpIHtcclxuXHRcdFx0XHRjb25zdCBjb2xNb2RlbCA9IGNvbE1vZGVsc1tpXTtcclxuXHRcdFx0XHRjb25zdCBzZXR0aW5ncyA9IGNvbE1vZGVsLmZpbHRlclRvb2xiYXJTZXR0aW5ncyB8fCB7fTtcclxuXHRcdFx0XHRjb25zdCBmaWx0ZXJPcHRpb24gPSBjb2xNb2RlbC5maWx0ZXJPcHRpb24gfHwgZGVmYXVsdFNlYXJjaDtcclxuXHRcdFx0XHRjb25zdCBmaWVsZE5hbWUgPSBjb2xNb2RlbC5hbGlhcyB8fCBjb2xNb2RlbC5rZXk7XHJcblx0XHRcdFx0bGV0IHZhbHVlID0gJGVsZW0udmFsKCk7XHJcblxyXG5cdFx0XHRcdGlmICh0eXBlb2YgKHNldHRpbmdzLnRyYW5zZm9ybURhdGEpID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IHNldHRpbmdzLnRyYW5zZm9ybURhdGEodmFsdWUsIHNldHRpbmdzKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh2YWx1ZSB8fCBmaWx0ZXJPcHRpb24gPT09IFwibnVcIiB8fCBmaWx0ZXJPcHRpb24gPT09IFwibm5cIikge1xyXG5cdFx0XHRcdFx0cnVsZXMucHVzaChuZXcgRmlsdGVyTW9kZWwodmFsdWUsIGZpZWxkTmFtZSwgZmlsdGVyT3B0aW9uKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAocnVsZXMubGVuZ3RoKSB7XHJcblx0XHRcdHJ1bGVHcm91cCA9IHtcclxuXHRcdFx0XHRncm91cE9wLFxyXG5cdFx0XHRcdHJ1bGVzXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHN0b3JhZ2UuZmlsdGVyID0gcnVsZUdyb3VwO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2JpbmQoKTogdm9pZCB7XHJcblx0XHRjb25zdCBzdG9yYWdlID0gdGhpcy5zdG9yYWdlO1xyXG5cclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5vbigna2V5cHJlc3MnLCAnaW5wdXQuWGdyaWQtaW5wdXQuWGdyaWQtb25FbnRlcicsIHRoaXMuX2hhbmRsZXJGaWx0ZXJPbkVudGVyLmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLm9uKCdrZXlkb3duJywgJ2lucHV0LlhncmlkLWlucHV0LlhncmlkLW9uS2V5ZG93bicsIHRoaXMuX2hhbmRsZXJGaWx0ZXJPbktleWRvd24uYmluZCh0aGlzKSk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUub24oJ2NoYW5nZScsICcuWGdyaWQtZmlsdGVyLlhncmlkLW9uQ2hhbmdlJywgdGhpcy5faGFuZGxlckZpbHRlck9uQ2hhbmdlLmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLm9uKCdjbGljaycsICcuWGdyaWQtcmVzZXQnLCB0aGlzLl9oYW5kbGVyRmlsdGVyT25SZXNldC5iaW5kKHRoaXMpKTtcclxuXHRcdHN0b3JhZ2UuJGhlYWRUYWJsZS5vbignY2xpY2snLCAnLlhncmlkLW9uU3VibWl0JywgdGhpcy5faGFuZGxlckZpbHRlck9uU3VibWl0LmJpbmQodGhpcykpO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2hhbmRsZXJGaWx0ZXJPblN1Ym1pdChlOiBKUXVlcnlFdmVudE9iamVjdCkge1xyXG5cdFx0JChlLmN1cnJlbnRUYXJnZXQpLmJsdXIoKTtcclxuXHRcdHRoaXMudHJpZ2dlclRvb2xiYXIoKTtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIF9oYW5kbGVyRmlsdGVyT25SZXNldChlOiBKUXVlcnlFdmVudE9iamVjdCkge1xyXG5cdFx0Y29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZTtcclxuXHRcdGNvbnN0ICRzZWxsID0gJChlLmN1cnJlbnRUYXJnZXQpLmJsdXIoKS5wYXJlbnRzKCcuWGdyaWQtZmlsdGVyLWNlbGw6ZXEoMCknKTtcclxuXHRcdGNvbnN0IGFsaWFzID0gJHNlbGwuYXR0cignZGF0YS1hbGlhcycpO1xyXG5cdFx0Y29uc3QgJGNvbnRyb2wgPSAkc2VsbC5maW5kKCcuWGdyaWQtZmlsdGVyJyk7XHJcblx0XHRjb25zdCBjb2xNb2RlbCA9IHN0b3JhZ2UuY29sTW9kZWxzRGljdGlvbmFyeVthbGlhc107XHJcblxyXG5cdFx0aWYgKGNvbE1vZGVsKSB7XHJcblx0XHRcdGlmIChjb2xNb2RlbC5maWx0ZXJUb29sYmFyU2V0dGluZ3MuZm9ybUNvbnRyb2xUeXBlID09PSAnc2VsZWN0Jykge1xyXG5cdFx0XHRcdCRjb250cm9sLnZhbChbXSkuZWFjaCgoaTogbnVtYmVyLCBzZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50KSA9PiB7XHJcblx0XHRcdFx0XHRzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IC0xO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCRjb250cm9sLnZhbCgnJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy50cmlnZ2VyVG9vbGJhcigpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2hhbmRsZXJGaWx0ZXJPbkNoYW5nZSgpIHtcclxuXHRcdHRoaXMudHJpZ2dlclRvb2xiYXIoKTtcclxuXHR9O1xyXG5cclxuXHRwcml2YXRlIF9oYW5kbGVyRmlsdGVyT25LZXlkb3duKGU6IEpRdWVyeUV2ZW50T2JqZWN0KSB7XHJcblx0XHRjb25zdCBrZXkgPSBlLndoaWNoO1xyXG5cclxuXHRcdHN3aXRjaCAoa2V5KSB7XHJcblx0XHRcdGNhc2UgMTM6XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRjYXNlIDk6XHJcblx0XHRcdGNhc2UgMTY6XHJcblx0XHRcdGNhc2UgMzc6XHJcblx0XHRcdGNhc2UgMzg6XHJcblx0XHRcdGNhc2UgMzk6XHJcblx0XHRcdGNhc2UgNDA6XHJcblx0XHRcdGNhc2UgMjc6XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0aWYgKHRoaXMudGltZW91dE9uS2V5ZG93bikge1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dE9uS2V5ZG93bik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudGltZW91dE9uS2V5ZG93biA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyVG9vbGJhcigpO1xyXG5cdFx0XHRcdH0sIDUwMCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfaGFuZGxlckZpbHRlck9uRW50ZXIoZTogSlF1ZXJ5RXZlbnRPYmplY3QpIHtcclxuXHRcdGNvbnN0IGtleSA9IGUuY2hhckNvZGUgfHwgZS5rZXlDb2RlIHx8IDA7XHJcblx0XHRpZiAoa2V5ID09PSAxMykge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHRoaXMudHJpZ2dlclRvb2xiYXIoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyVG9vbGJhck1vZGVsIGltcGxlbWVudHMgSUZpbHRlclRvb2xiYXJNb2RlbCB7XHJcblx0Zm9ybUNvbnRyb2xUeXBlID0gJ3RleHQnO1xyXG5cdHNlbGVjdE9wdGlvbnMgPSBbXTtcclxuXHRwbGFjZWhvbGRlciA9ICcnO1xyXG5cdG9uRW50ZXIgPSB0cnVlO1xyXG5cdG9uS2V5ZG93biA9IGZhbHNlO1xyXG5cdG9uQ2hhbmdlID0gZmFsc2U7XHJcblx0YWxsb3dSZXNldEJ1dHRvbiA9IHRydWU7XHJcblx0YWxsb3dTdWJtaXRCdXR0b24gPSB0cnVlO1xyXG5cdHRyYW5zZm9ybURhdGE/OiBGdW5jdGlvbjsgXHJcblxyXG5cdGNvbnN0cnVjdG9yKHNldHRpbmdzKSB7XHJcblx0XHQkLmV4dGVuZCh0aGlzLCBzZXR0aW5ncyk7XHJcblx0XHRpZiAoIXRoaXMudHJhbnNmb3JtRGF0YSkge1xyXG5cdFx0XHRpZiAodGhpcy5mb3JtQ29udHJvbFR5cGUgPT09ICdzZWxlY3QnKSB7XHJcblx0XHRcdFx0dGhpcy50cmFuc2Zvcm1EYXRhID0gKChkYXRhKSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgcmVzdWx0O1xyXG5cdFx0XHRcdFx0Y29uc3Qgc2VsZWN0T3B0aW9ucyA9IHRoaXMuc2VsZWN0T3B0aW9ucztcclxuXHRcdFx0XHRcdGlmICgkLmlzQXJyYXkoZGF0YSkpIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0ID0gW107XHJcblx0XHRcdFx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgaXRlbSA9IHNlbGVjdE9wdGlvbnNba2V5XTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbS52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGtleSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXN1bHQubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmIChzZWxlY3RPcHRpb25zW2RhdGFdKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNlbGVjdE9wdGlvbnNbZGF0YV0udmFsdWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRml4ZWRIZWFkZXIge1xyXG5cdHN0b3JhZ2U6IElTdG9yYWdlO1xyXG5cdHByb3BlcnRpZXMgPSB7XHJcblx0XHQkY2VsbFdpZHRoUmVjaXBpZW50czogbnVsbCxcclxuXHRcdCRjZWxsV2lkdGhMaXN0ZW5lcnM6IG51bGwsXHJcblx0fTtcclxuXHJcblx0Y29uc3RydWN0b3Ioc3RvcmFnZSkge1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHRcdHRoaXMuX2V4ZWMoKTtcclxuXHR9XHJcblxyXG5cdHJlc2l6ZSgpIHtcclxuXHRcdGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2U7XHJcblxyXG5cdFx0c3RvcmFnZS4kaGVhZFRhYmxlLmZpbmQoJy5YZ3JpZC10aGVhZC13IGlmcmFtZScpLmVhY2goKGksIGVsZW1lbnQpID0+IHtcclxuXHRcdFx0Y29uc3QgJGlmcmFtZSA9ICQoZWxlbWVudCk7XHJcblx0XHRcdGNvbnN0IHdpZHRoID0gJGlmcmFtZS53aWR0aCgpO1xyXG5cdFx0XHRjb25zdCBhbGlhcyA9ICRpZnJhbWUuYXR0cignZGF0YS1hbGlhcycpO1xyXG5cclxuXHRcdFx0dGhpcy5faGFuZGxlclJlc2l6ZWRDZWxsV2lkdGgod2lkdGgsIGFsaWFzKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2V4ZWMoKSB7XHJcblx0XHR0aGlzLl9idWlsZCgpO1xyXG5cdFx0dGhpcy5fYmluZCgpO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2J1aWxkKCkge1xyXG5cdFx0Y29uc3QgeyBzdG9yYWdlLCBwcm9wZXJ0aWVzIH0gPSB0aGlzO1xyXG5cdFx0Y29uc3QgY2VsbFdpZHRoTGlzdGVuZXJzID0gW107XHJcblxyXG5cdFx0cHJvcGVydGllcy4kY2VsbFdpZHRoUmVjaXBpZW50cyA9IHN0b3JhZ2UuJGdyaWRUYWJsZS5maW5kKCcuWGdyaWQtdGJvZHktdyBpJyk7XHJcblx0XHRzdG9yYWdlLiRoZWFkVGFibGUuZmluZCgnLlhncmlkLXRoZWFkLXcgdGQnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdGNvbnN0IGlmcmFtZTogSFRNTEVsZW1lbnQgPSAkKHRoaXMpLmZpbmQoJ2lmcmFtZScpWzBdO1xyXG5cclxuXHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2wnLCBTdHJpbmcoaSkpO1xyXG5cdFx0XHRjZWxsV2lkdGhMaXN0ZW5lcnMucHVzaChpZnJhbWUpO1xyXG5cdFx0fSk7XHJcblx0XHRwcm9wZXJ0aWVzLiRjZWxsV2lkdGhMaXN0ZW5lcnMgPSAkKGNlbGxXaWR0aExpc3RlbmVycyk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfYmluZCgpIHtcclxuXHRcdGNvbnN0IHsgcHJvcGVydGllcyB9ID0gdGhpcztcclxuXHJcblx0XHRwcm9wZXJ0aWVzLiRjZWxsV2lkdGhMaXN0ZW5lcnMuZWFjaCgoaSwgaWZyYW1lKSA9PiB7XHJcblx0XHRcdGNvbnN0ICRpZnJhbWUgPSAkKGlmcmFtZSk7XHJcblxyXG5cdFx0XHR0aGlzLl9oYW5kbGVyUmVzaXplZENlbGxXaWR0aCgkaWZyYW1lLndpZHRoKCksICRpZnJhbWUuYXR0cignZGF0YS1hbGlhcycpKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0JChpZnJhbWUuY29udGVudFdpbmRvdykub24oJ3Jlc2l6ZScsICgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuX2hhbmRsZXJSZXNpemVkQ2VsbFdpZHRoKCRpZnJhbWUud2lkdGgoKSwgJGlmcmFtZS5hdHRyKCdkYXRhLWFsaWFzJykpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LCAxMDApO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfaGFuZGxlclJlc2l6ZWRDZWxsV2lkdGgod2lkdGg6IG51bWJlciwgYWxpYXM6IHN0cmluZykge1xyXG5cdFx0Y29uc3QgeyBwcm9wZXJ0aWVzIH0gPSB0aGlzO1xyXG5cdFx0Y29uc3QgJGl0ZW0gPSBwcm9wZXJ0aWVzLiRjZWxsV2lkdGhSZWNpcGllbnRzLmZpbHRlcignW2RhdGEtYWxpYXM9XCInICsgYWxpYXMgKyAnXCJdJyk7XHJcblxyXG5cdFx0JGl0ZW0ud2lkdGgod2lkdGgpO1xyXG5cdFx0JGl0ZW0ucGFyZW50KCkud2lkdGgod2lkdGgpO1xyXG5cdH07XHJcbn1cclxuIiwiaW1wb3J0IHBpcGVzIGZyb20gJy4vUGlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYWxTb3J0UnVsZU1vZGVsIGltcGxlbWVudHMgSUxvY2FsU29ydFJ1bGUge1xyXG5cdGJ5OiBzdHJpbmc7XHJcblx0b3JkZXI6IHN0cmluZztcclxuXHRjb2xNb2RlbD86IElDb2xNb2RlbDtcclxuXHRnZXQ6IEZ1bmN0aW9uID0gcGlwZXMuZ2V0QnlUeXBlKCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKG9yZGVyOiBzdHJpbmcsIGJ5OiBzdHJpbmcsIGNvbE1vZGVsOiBudWxsIHwgSUNvbE1vZGVsKSB7XHJcblx0XHR0aGlzLm9yZGVyID0gb3JkZXI7XHJcblx0XHR0aGlzLmJ5ID0gYnk7XHJcblxyXG5cdFx0aWYgKGNvbE1vZGVsKSB7XHJcblx0XHRcdHRoaXMuY29sTW9kZWwgPSBjb2xNb2RlbDtcclxuXHRcdFx0dGhpcy5nZXQgPSBjb2xNb2RlbC5zb3J0Rm9ybWF0dGVyO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJjbGFzcyBPcGVyYXRvcnMge1xyXG5cdGVxID0gdGhpcy5lcXVhbHM7XHJcblx0bmUgPSB0aGlzLm5vdEVxdWFscztcclxuXHRsdCA9IHRoaXMubGVzcztcclxuXHRsZSA9IHRoaXMubGVzc09yRXF1YWxzO1xyXG5cdGd0ID0gdGhpcy5ncmVhdGVyO1xyXG5cdGdlID0gdGhpcy5ncmVhdGVyT3JFcXVhbHM7XHJcblx0Y24gPSB0aGlzLmNvbnRhaW5zO1xyXG5cdG5jID0gKCguLi5hcmcpID0+IHtcclxuXHRcdHJldHVybiAhdGhpcy5jb250YWlucy5hcHBseSh0aGlzLCBhcmcpO1xyXG5cdH0pO1xyXG5cdGJ3ID0gdGhpcy5zdGFydHNXaXRoO1xyXG5cdGJuID0gKCguLi5hcmcpID0+IHtcclxuXHRcdHJldHVybiAhdGhpcy5zdGFydHNXaXRoLmFwcGx5KHRoaXMsIGFyZyk7XHJcblx0fSk7XHJcblx0ZW4gPSAoKC4uLmFyZykgPT4ge1xyXG5cdFx0cmV0dXJuICF0aGlzLmVuZHNXaXRoLmFwcGx5KHRoaXMsIGFyZyk7XHJcblx0fSk7XHJcblx0ZXcgPSB0aGlzLmVuZHNXaXRoO1xyXG5cdGluID0gdGhpcy5pbkFycmF5O1xyXG5cdG5pID0gKCguLi5hcmcpID0+IHtcclxuXHRcdHJldHVybiAhdGhpcy5pbkFycmF5LmFwcGx5KHRoaXMsIGFyZyk7XHJcblx0fSk7XHJcblx0bnUgPSB0aGlzLmlzTnVsbDtcclxuXHRubiA9ICgoLi4uYXJnKSA9PiB7XHJcblx0XHRyZXR1cm4gIXRoaXMuaXNOdWxsLmFwcGx5KHRoaXMsIGFyZyk7XHJcblx0fSk7XHJcblxyXG5cdGVxdWFscyhhLCBiKSB7XHJcblx0XHRyZXR1cm4gYSA9PT0gYjtcclxuXHR9O1xyXG5cdG5vdEVxdWFscyhhLCBiKSB7XHJcblx0XHRyZXR1cm4gYSAhPT0gYjtcclxuXHR9O1xyXG5cdGlzTnVsbChhKSB7XHJcblx0XHRyZXR1cm4gYSA9PT0gbnVsbDtcclxuXHR9O1xyXG5cdGdyZWF0ZXIoYSwgYikge1xyXG5cdFx0cmV0dXJuIGEgPiBiO1xyXG5cdH07XHJcblx0bGVzcyhhLCBiKSB7XHJcblx0XHRyZXR1cm4gYSA8IGI7XHJcblx0fTtcclxuXHRncmVhdGVyT3JFcXVhbHMoYSwgYikge1xyXG5cdFx0cmV0dXJuIGEgPj0gYjtcclxuXHR9O1xyXG5cdGxlc3NPckVxdWFscyhhLCBiKSB7XHJcblx0XHRyZXR1cm4gYSA8PSBiO1xyXG5cdH07XHJcblx0aW5BcnJheShhcnJheSwgYikge1xyXG5cdFx0cmV0dXJuICQuaW5BcnJheShiLCBhcnJheSkgIT09IC0xO1xyXG5cdH07XHJcblx0c3RhcnRzV2l0aChhLCBiLCBpbnNlbnNpdGl2ZSkge1xyXG5cdFx0YSA9IFN0cmluZyhhKTtcclxuXHRcdGIgPSBTdHJpbmcoYik7XHJcblx0XHRpZiAoaW5zZW5zaXRpdmUpIHtcclxuXHRcdFx0YSA9IGEudG9VcHBlckNhc2UoKTtcclxuXHRcdFx0YiA9IGIudG9VcHBlckNhc2UoKTtcclxuXHRcdH1cclxuXHRcdGxldCBsZW5ndGggPSBhLmxlbmd0aCxcclxuXHRcdFx0c3RyID0gYS5zdWJzdHIoMCwgbGVuZ3RoKTtcclxuXHRcdHJldHVybiBzdHIgPT09IGJcclxuXHR9O1xyXG5cdGVuZHNXaXRoKGEsIGIsIGluc2Vuc2l0aXZlKSB7XHJcblx0XHRhID0gU3RyaW5nKGEpO1xyXG5cdFx0YiA9IFN0cmluZyhiKTtcclxuXHRcdGlmIChpbnNlbnNpdGl2ZSkge1xyXG5cdFx0XHRhID0gYS50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0XHRiID0gYi50b1VwcGVyQ2FzZSgpO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGxlbmd0aCA9IGIubGVuZ3RoICogLTEsXHJcblx0XHRcdHN0ciA9IGEuc3Vic3RyKGxlbmd0aCk7XHJcblx0XHRyZXR1cm4gc3RyID09PSBiO1xyXG5cdH07XHJcblx0Y29udGFpbnMoYSwgYiwgaW5zZW5zaXRpdmUpIHtcclxuXHRcdGEgPSBTdHJpbmcoYSk7XHJcblx0XHRiID0gU3RyaW5nKGIpO1xyXG5cdFx0aWYgKGluc2Vuc2l0aXZlKSB7XHJcblx0XHRcdGEgPSBhLnRvVXBwZXJDYXNlKCk7XHJcblx0XHRcdGIgPSBiLnRvVXBwZXJDYXNlKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYi5pbmRleE9mKGEpICE9PSAtMTtcclxuXHR9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBPcGVyYXRvcnMoKTsiLCIndXNlIHN0cmljdCc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2luYXRpb24ge1xyXG5cdG9wdGlvbnM6IElPcHRpb25zO1xyXG5cdHZpZXdNb2RlbDogSVZpZXdNb2RlbDtcclxuXHRzdG9yYWdlOiBJU3RvcmFnZTtcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucywgc3RvcmFnZSwgdmlld01vZGVsLCApIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcblx0XHR0aGlzLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcclxuXHRcdHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XHJcblxyXG5cdFx0dGhpcy5fc3Vic2NyaWJlKCk7XHJcblx0XHR0aGlzLnBhZ2UoKTtcclxuXHRcdHRoaXMudG90YWxQYWdlcygpO1xyXG5cdFx0dGhpcy5leGVjKCk7XHJcblx0fTtcclxuXHRleGVjKCkge1xyXG5cdFx0dGhpcy5fYmluZCgpO1xyXG5cdH07XHJcblxyXG5cdHBhZ2UoKSB7XHJcblx0XHR0aGlzLnN0b3JhZ2UuJHBhZ2luYXRpb25Cb3guZmluZCgnLlhncmlkLWN1cnJlbnQtcGFnZScpLnZhbCh0aGlzLnZpZXdNb2RlbC5wYWdlKTtcclxuXHR9O1xyXG5cclxuXHR0b3RhbFBhZ2VzKCkge1xyXG5cdFx0dGhpcy5zdG9yYWdlLiRwYWdpbmF0aW9uQm94LmZpbmQoJy5YZ3JpZC10b3RhbC1wYWdlcycpLnRleHQodGhpcy52aWV3TW9kZWwudG90YWxQYWdlcyk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfc3Vic2NyaWJlKCkge1xyXG5cdFx0Y29uc3QgeyB2aWV3TW9kZWwgfSA9IHRoaXM7XHJcblxyXG5cdFx0dmlld01vZGVsLm9uKCdwYWdlJywgdGhpcy5wYWdlLmJpbmQodGhpcykpO1xyXG5cdFx0dmlld01vZGVsLm9uKCd0b3RhbFBhZ2VzJywgdGhpcy50b3RhbFBhZ2VzLmJpbmQodGhpcykpO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2JpbmQoKSB7XHJcblx0XHRjb25zdCB7IHN0b3JhZ2UgfSA9IHRoaXM7XHJcblxyXG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveC5vbignY2xpY2sueGdyaWQnLCAnLlhncmlkLWZpcnN0JywgdGhpcy5faGFuZGxlckZpcnN0LmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveC5vbignY2xpY2sueGdyaWQnLCAnLlhncmlkLXByZXYnLCB0aGlzLl9oYW5kbGVyUHJldi5iaW5kKHRoaXMpKTtcclxuXHRcdHN0b3JhZ2UuJHBhZ2luYXRpb25Cb3gub24oJ2NsaWNrLnhncmlkJywgJy5YZ3JpZC1uZXh0JywgdGhpcy5faGFuZGxlck5leHQuYmluZCh0aGlzKSk7XHJcblx0XHRzdG9yYWdlLiRwYWdpbmF0aW9uQm94Lm9uKCdjbGljay54Z3JpZCcsICcuWGdyaWQtbGFzdCcsIHRoaXMuX2hhbmRsZXJMYXN0LmJpbmQodGhpcykpO1xyXG5cdFx0c3RvcmFnZS4kcGFnaW5hdGlvbkJveC5vbigna2V5cHJlc3MueGdyaWQnLCAnLlhncmlkLWN1cnJlbnQtcGFnZScsIHRoaXMuX2hhbmRsZXJHb1RvLmJpbmQodGhpcykpO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2hhbmRsZXJGaXJzdChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRpZiAodGhpcy52aWV3TW9kZWwucGFnZSAhPT0gMSkge1xyXG5cdFx0XHR0aGlzLnZpZXdNb2RlbC5uZXdQYWdlID0gMTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdHByaXZhdGUgX2hhbmRsZXJMYXN0KGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGlmICh0aGlzLnZpZXdNb2RlbC5wYWdlICE9PSB0aGlzLnZpZXdNb2RlbC50b3RhbFBhZ2VzKSB7XHJcblx0XHRcdHRoaXMudmlld01vZGVsLm5ld1BhZ2UgPSB0aGlzLnZpZXdNb2RlbC50b3RhbFBhZ2VzO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0cHJpdmF0ZSBfaGFuZGxlck5leHQoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgcGFnZSA9IHRoaXMudmlld01vZGVsLnBhZ2UgKyAxO1xyXG5cdFx0aWYgKHBhZ2UgPD0gdGhpcy52aWV3TW9kZWwudG90YWxQYWdlcykge1xyXG5cdFx0XHR0aGlzLnZpZXdNb2RlbC5uZXdQYWdlID0gcGFnZTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdHByaXZhdGUgX2hhbmRsZXJQcmV2KGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IHBhZ2UgPSB0aGlzLnZpZXdNb2RlbC5wYWdlIC0gMTtcclxuXHRcdGlmIChwYWdlID4gMCkge1xyXG5cdFx0XHR0aGlzLnZpZXdNb2RlbC5uZXdQYWdlID0gcGFnZTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdHByaXZhdGUgX2hhbmRsZXJHb1RvKGUpIHtcclxuXHRcdGlmIChlLndoaWNoID09PSAxMykge1xyXG5cdFx0XHRsZXQgcGFnZTogbnVtYmVyID0gKyQoZS5jdXJyZW50VGFyZ2V0KS52YWwoKTtcclxuXHRcdFx0aWYgKCFpc05hTihwYWdlKSkge1xyXG5cdFx0XHRcdGlmIChwYWdlIDwgMSkge1xyXG5cdFx0XHRcdFx0cGFnZSA9IDE7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChwYWdlID4gdGhpcy52aWV3TW9kZWwudG90YWxQYWdlcykge1xyXG5cdFx0XHRcdFx0cGFnZSA9IHRoaXMudmlld01vZGVsLnRvdGFsUGFnZXM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudmlld01vZGVsLm5ld1BhZ2UgPSBwYWdlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMudmlld01vZGVsLnBhZ2UgPSB0aGlzLnZpZXdNb2RlbC5uZXdQYWdlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG4iLCJjbGFzcyBQaXBlcyB7XHJcblx0aW50OiBGdW5jdGlvbjtcclxuXHRmbG9hdDogRnVuY3Rpb247XHJcblx0bnVtYmVyOiBGdW5jdGlvbjtcclxuXHR0ZXh0OiBGdW5jdGlvbjtcclxuXHJcblx0aXNOb3RaZXJvID0ge1xyXG5cdFx0dW5kZWZpbmVkOiAxLFxyXG5cdFx0Jyc6IDEsXHJcblx0XHRudWxsOiAxLFxyXG5cdFx0ZmFsc2U6IDEsXHJcblx0XHR0cnVlOiAxLFxyXG5cdH07XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5pbnRlZ2VyID0gdGhpcy5pbnRlZ2VyLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmludCA9IHRoaXMuaW50ZWdlcjtcclxuXHJcblx0XHR0aGlzLm51bWVyaWMgPSB0aGlzLm51bWVyaWMuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuZmxvYXQgPSB0aGlzLm51bWVyaWM7XHJcblx0XHR0aGlzLm51bWJlciA9IHRoaXMubnVtZXJpYztcclxuXHJcblx0XHQvL3RoaXMuZGF0ZXRpbWUgPSB0aGlzLmRhdGUuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMudGV4dCA9ICgodmFsdWUsIHJvd0RhdGEsIGNvbE1vZGVsKSA9PiB7XHJcblx0XHRcdGlmIChjb2xNb2RlbC5pbnNlbnNpdGl2ZSkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmluc2Vuc2l0aXZldGV4dC5jYWxsKHRoaXMsIHZhbHVlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zZW5zaXRpdmV0ZXh0LmNhbGwodGhpcywgdmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRnZXRCeVR5cGUodHlwZT86IHN0cmluZyk6IEZ1bmN0aW9uIHtcclxuXHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRjYXNlICdpbnQnOlxyXG5cdFx0XHRjYXNlICdpbnRlZ2VyJzpcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5pbnRlZ2VyO1xyXG5cdFx0XHRjYXNlICdmbG9hdCc6XHJcblx0XHRcdGNhc2UgJ251bWJlcic6XHJcblx0XHRcdGNhc2UgJ251bWVyaWMnOlxyXG5cdFx0XHRcdHJldHVybiB0aGlzLm51bWVyaWM7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudGV4dDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG51bWVyaWModmFsdWU6IGFueSk6IG51bWJlciB7XHJcblx0XHRsZXQgcmVzdWx0OiBudW1iZXI7XHJcblx0XHRpZiAodGhpcy5pc05vdFplcm9bdmFsdWVdKSB7XHJcblx0XHRcdHJlc3VsdCA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChpc05hTih2YWx1ZSkpIHtcclxuXHRcdFx0XHRyZXN1bHQgPSBwYXJzZUZsb2F0KFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvLC9nLCAnLicpLnJlcGxhY2UoL1tcXCQlXS9nLCAnJykpO1xyXG5cdFx0XHRcdHJlc3VsdCA9IGlzTmFOKHJlc3VsdCkgPyBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgOiByZXN1bHQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0ID0gK3ZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH07XHJcblxyXG5cdGludGVnZXIodmFsdWUpOiBudW1iZXIge1xyXG5cdFx0bGV0IHJlc3VsdDtcclxuXHRcdGlmICh0aGlzLmlzTm90WmVyb1t2YWx1ZV0pIHtcclxuXHRcdFx0cmVzdWx0ID0gTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGlzTmFOKHZhbHVlKSkge1xyXG5cdFx0XHRcdHJlc3VsdCA9IFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvW1xcJCwlXS9nLCAnJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzdWx0ID0gcGFyc2VJbnQocmVzdWx0KTtcclxuXHRcdFx0cmVzdWx0ID0gaXNOYU4ocmVzdWx0KSA/IE51bWJlci5ORUdBVElWRV9JTkZJTklUWSA6IHJlc3VsdDtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fTtcclxuXHJcblx0aW5zZW5zaXRpdmV0ZXh0KHZhbHVlKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB2YWx1ZSA/ICQudHJpbShTdHJpbmcodmFsdWUpKSA6IFwiXCI7XHJcblx0fTtcclxuXHJcblx0c2Vuc2l0aXZldGV4dCh2YWx1ZSk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gKHZhbHVlID8gJC50cmltKFN0cmluZyh2YWx1ZSkpIDogXCJcIikudG9Mb3dlckNhc2UoKTtcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUGlwZXMoKTsiLCJpbXBvcnQgQ29sTW9kZWwgZnJvbSAnLi9Db2xNb2RlbCc7XHJcbmltcG9ydCBTb3J0UnVsZSBmcm9tICcuL1NvcnRSdWxlJztcclxuXHJcbmNsYXNzIFByb2Nlc3NTZXR0aW5ncyB7XHJcblx0dmlld01vZGVsOiBJVmlld01vZGVsO1xyXG5cdHN0b3JhZ2U6IElTdG9yYWdlO1xyXG5cdHByb3BlcnRpZXM6IElQcm9jZXNzU2V0dGluZ3NQcm9wZXJ0aWVzO1xyXG5cdG9wdGlvbnM6IElQcm9jZXNzU2V0dGluZ3NPcHRpb25zXHJcblxyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMsIHN0b3JhZ2UsIHZpZXdNb2RlbCkge1xyXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xyXG5cdFx0XHRjb2xNb2RlbHM6IFtdLFxyXG5cdFx0XHRmaWx0ZXJUb29sYmFyOiBmYWxzZVxyXG5cdFx0fSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0dGhpcy5wcm9wZXJ0aWVzID0ge1xyXG5cdFx0XHRzY3JvbGxiYXJXaWR0aDogbnVsbFxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHRcdHRoaXMuX2V4ZWMoKTtcclxuXHR9O1xyXG5cclxuXHRfZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XHJcblx0XHRsZXQgZGl2LCB3aWR0aDtcclxuXHRcdGlmICh0aGlzLnByb3BlcnRpZXMuc2Nyb2xsYmFyV2lkdGgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMucHJvcGVydGllcy5zY3JvbGxiYXJXaWR0aDtcclxuXHRcdH1cclxuXHJcblx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdGRpdi5pbm5lckhUTUwgPSAnPGRpdiBzdHlsZT1cIndpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotNTBweDt0b3A6LTUwcHg7b3ZlcmZsb3c6YXV0bztcIj48ZGl2IHN0eWxlPVwid2lkdGg6MXB4O2hlaWdodDoxMDBweDtcIj48L2Rpdj48L2Rpdj4nO1xyXG5cdFx0ZGl2ID0gZGl2LmZpcnN0Q2hpbGQ7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcblx0XHR3aWR0aCA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aDtcclxuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcclxuXHRcdHRoaXMucHJvcGVydGllcy5zY3JvbGxiYXJXaWR0aCA9IHdpZHRoO1xyXG5cdFx0cmV0dXJuIHdpZHRoO1xyXG5cdH07XHJcblxyXG5cdF9jb2x1bW5Nb2RlbCgpIHtcclxuXHRcdGNvbnN0IHsgc3RvcmFnZSwgb3B0aW9ucyB9ID0gdGhpcztcclxuXHRcdGNvbnN0IGNvbE1vZGVscyA9IFtdO1xyXG5cdFx0Y29uc3QgYWxpYXNlcyA9IHt9O1xyXG5cdFx0Y29uc3QgY29sTW9kZWxzRGljdGlvbmFyeSA9IHt9O1xyXG5cclxuXHRcdCQuZWFjaChvcHRpb25zLmNvbE1vZGVscywgKGksIG1vZGVsKSA9PiB7XHJcblx0XHRcdGNvbnN0IGNvbE1vZGVsID0gbmV3IENvbE1vZGVsKG1vZGVsLCBpKTtcclxuXHJcblx0XHRcdGlmICghYWxpYXNlc1tjb2xNb2RlbC5hbGlhc10pIHtcclxuXHRcdFx0XHRhbGlhc2VzW2NvbE1vZGVsLmFsaWFzXSA9IDE7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhyb3cge1xyXG5cdFx0XHRcdFx0dmFsdWU6IHtcclxuXHRcdFx0XHRcdFx0aTogaSxcclxuXHRcdFx0XHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkobW9kZWwpXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogJ2FsaWFzIGlzIG5vdCB1bmlxdWUnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ0Vycm9yOiBjb2xNb2RlbCdcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Y29sTW9kZWxzRGljdGlvbmFyeVtjb2xNb2RlbC5hbGlhc10gPSBjb2xNb2RlbDtcclxuXHRcdFx0Y29sTW9kZWxzLnB1c2goY29sTW9kZWwpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0c3RvcmFnZS5jb2xNb2RlbHMgPSBjb2xNb2RlbHM7XHJcblx0XHRzdG9yYWdlLmNvbE1vZGVsc0RpY3Rpb25hcnkgPSBjb2xNb2RlbHNEaWN0aW9uYXJ5O1xyXG5cdH07XHJcblxyXG5cdF9leGVjKCkge1xyXG5cdFx0Y29uc3QgeyBzdG9yYWdlIH0gPSB0aGlzO1xyXG5cclxuXHRcdHRoaXMuX2NvbHVtbk1vZGVsKCk7XHJcblx0XHRzdG9yYWdlLnNjcm9sbGJhcldpZHRoID0gdGhpcy5fZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcclxuXHRcdHRoaXMuX3Byb2Nlc3NTb3J0aW5nKCk7XHJcblx0fTtcclxuXHJcblx0X3Byb2Nlc3NTb3J0aW5nKCkge1xyXG5cdFx0Y29uc3Qge3ZpZXdNb2RlbCwgb3B0aW9uc30gPSB0aGlzO1xyXG5cdFx0bGV0IHNvcnRCeSA9IG9wdGlvbnMuc29ydEJ5LFxyXG5cdFx0XHRkYXRhID0gW107XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMuZmlsdGVyVG9vbGJhcikge1xyXG5cdFx0XHR2aWV3TW9kZWwuZmlsdGVyVG9vbGJhciA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRpZiAoc29ydEJ5ICYmIHR5cGVvZiAoc29ydEJ5KSA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0Y29uc3Qgc29ydEJ5SXRlbXMgPSBzb3J0QnkucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKS5zcGxpdCgnLCcpO1xyXG5cdFx0XHRpZiAoc29ydEJ5SXRlbXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0c29ydEJ5SXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSkge1xyXG5cdFx0XHRcdFx0Y29uc3Qgc29ydFJ1bGUgPSBpdGVtLnRyaW0oKS5zcGxpdCgnICcpO1xyXG5cdFx0XHRcdFx0Y29uc3QgYnkgPSBzb3J0UnVsZVswXTtcclxuXHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIChieSkgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHRcdGxldCBydWxlO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKFN0cmluZyhzb3J0UnVsZVsxXSkudG9VcHBlckNhc2UoKSA9PT0gJ0RFU0MnKSB7XHJcblx0XHRcdFx0XHRcdFx0cnVsZSA9IG5ldyBTb3J0UnVsZShieSwgJ0RFU0MnKTtcclxuXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cnVsZSA9IG5ldyBTb3J0UnVsZShieSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZGF0YS5wdXNoKHJ1bGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKCQuaXNBcnJheShzb3J0QnkpICYmIHNvcnRCeS5sZW5ndGgpIHtcclxuXHRcdFx0c29ydEJ5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRjb25zdCB7IGJ5LCBvcmRlciB9ID0gaXRlbTtcclxuXHRcdFx0XHRsZXQgcnVsZTtcclxuXHJcblx0XHRcdFx0aWYgKGJ5KSB7XHJcblx0XHRcdFx0XHRpZiAoU3RyaW5nKG9yZGVyKS50b1VwcGVyQ2FzZSgpICE9PSAnREVTQycpIHtcclxuXHRcdFx0XHRcdFx0cnVsZSA9IG5ldyBTb3J0UnVsZShieSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRydWxlID0gbmV3IFNvcnRSdWxlKGJ5LCAnREVTQycpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZGF0YS5wdXNoKHJ1bGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRpZiAoZGF0YS5sZW5ndGgpIHtcclxuXHRcdFx0dmlld01vZGVsLnNvcnRCeSA9IGRhdGE7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzU2V0dGluZ3M7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlcnlNb2RlbCBpbXBsZW1lbnRzIElRdWVyeU1vZGVsIHtcclxuXHRmaWx0ZXIgPSB7fTtcclxuXHRzb3J0ID0gW107XHJcblx0cm93cyA9IDA7XHJcblx0cGFnZSA9IDE7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuXHRcdCQuZXh0ZW5kKHRoaXMsIGRhdGEpO1xyXG5cdH1cclxufVxyXG4iLCJjbGFzcyBTb3J0IHtcclxuXHRleGVjKGRhdGEgPSBbXSwgcnVsZXM6IElMb2NhbFNvcnRSdWxlW10gPSBbXSkge1xyXG5cdFx0bGV0IHNvdXJjZTtcclxuXHRcdGlmICghZGF0YS5sZW5ndGggfHwgIXJ1bGVzLmxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdH1cclxuXHRcdHNvdXJjZSA9IHRoaXMuX2dldFNvdXJjZShkYXRhLCBydWxlcyk7XHJcblx0XHRzb3VyY2Uuc29ydCgoYSwgYikgPT4ge1xyXG5cdFx0XHRsZXQgcmVzdWx0ID0gMDtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDAsIGogPSBydWxlcy5sZW5ndGg7IGkgPCBydWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGxldCBrZXkgPSBydWxlc1tpXS5ieTtcclxuXHRcdFx0XHRpZiAocnVsZXNbaV0ub3JkZXIgPT09ICdBU0MnKSB7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSB0aGlzLkFTQyhhLmZvcm1hdHRlZFtrZXldLCBiLmZvcm1hdHRlZFtrZXldKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSB0aGlzLkRFU0MoYS5mb3JtYXR0ZWRba2V5XSwgYi5mb3JtYXR0ZWRba2V5XSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHJlc3VsdCAhPT0gMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHNvdXJjZS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHRcdFx0cmV0dXJuIGl0ZW0uXztcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0QVNDKGEsIGIpIHtcclxuXHRcdGlmIChhIDwgYikge1xyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblx0XHRpZiAoYSA+IGIpIHtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gMDtcclxuXHR9O1xyXG5cclxuXHRERVNDKGEsIGIpIHtcclxuXHRcdGlmIChhIDwgYikge1xyXG5cdFx0XHRyZXR1cm4gMTtcclxuXHRcdH1cclxuXHRcdGlmIChhID4gYikge1xyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gMDtcclxuXHR9O1xyXG5cdF9nZXRTb3VyY2UoZGF0YSwgcnVsZXMpIHtcclxuXHRcdHJldHVybiBkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG5cdFx0XHRsZXQgZm9ybWF0dGVkID0ge307XHJcblx0XHRcdHJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcclxuXHRcdFx0XHRmb3JtYXR0ZWRbcnVsZS5ieV0gPSBydWxlLmdldChpdGVtW3J1bGUuYnldLCBpdGVtLCBydWxlLmNvbE1vZGVsLCBkYXRhKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XzogaXRlbSxcclxuXHRcdFx0XHRmb3JtYXR0ZWQsXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBTb3J0KCk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ydFJ1bGUgaW1wbGVtZW50cyBJU29ydFJ1bGUge1xyXG5cdGJ5OiBzdHJpbmc7XHJcblx0b3JkZXI6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IoYnk6IHN0cmluZywgb3JkZXIgPSAnQVNDJykge1xyXG5cdFx0dGhpcy5ieSA9IGJ5O1xyXG5cdFx0dGhpcy5vcmRlciA9IG9yZGVyO1xyXG5cdFx0dGhpcy50cmlnZ2VyT3JkZXIgPSB0aGlzLnRyaWdnZXJPcmRlci5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0dHJpZ2dlck9yZGVyKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMub3JkZXIgPT09ICdBU0MnKSB7XHJcblx0XHRcdHRoaXMub3JkZXIgPSAnREVTQyc7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLm9yZGVyID0gJ0FTQyc7XHJcblx0XHR9XHJcblx0fTtcclxufTsiLCJpbXBvcnQgU29ydFJ1bGUgZnJvbSAnLi9Tb3J0UnVsZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3J0aW5nIHtcclxuXHRzdG9yYWdlOiBJU3RvcmFnZTtcclxuXHR2aWV3TW9kZWw6IElWaWV3TW9kZWw7XHJcblx0b3B0aW9uczogSU9wdGlvbnM7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHN0b3JhZ2UsIHZpZXdNb2RlbCwgb3B0aW9ucykge1xyXG5cdFx0dGhpcy5zdG9yYWdlID0gc3RvcmFnZTtcclxuXHRcdHRoaXMudmlld01vZGVsID0gdmlld01vZGVsO1xyXG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuXHJcblx0XHR0aGlzLmJpbmQoKTtcclxuXHR9O1xyXG5cclxuXHRzb3J0QnlBbGlhcyhhbGlhczogc3RyaW5nKSB7XHJcblx0XHRjb25zdCB7IHN0b3JhZ2UsIHZpZXdNb2RlbCB9ID0gdGhpcztcclxuXHRcdGNvbnN0IGNvbE1vZGVsID0gc3RvcmFnZS5jb2xNb2RlbHNEaWN0aW9uYXJ5W2FsaWFzXTtcclxuXHRcdGxldCBzb3J0Qnk6IElTb3J0UnVsZVtdO1xyXG5cclxuXHRcdGlmIChjb2xNb2RlbCkge1xyXG5cdFx0XHRzb3J0QnkgPSB2aWV3TW9kZWwuc29ydEJ5O1xyXG5cdFx0XHRsZXQgaSA9IHNvcnRCeS5sZW5ndGg7XHJcblx0XHRcdGxldCBzb3J0UnVsZTogSVNvcnRSdWxlO1xyXG5cclxuXHRcdFx0d2hpbGUgKGktLSkge1xyXG5cdFx0XHRcdGlmIChzb3J0QnlbaV0uYnkgPT09IGFsaWFzKSB7XHJcblx0XHRcdFx0XHRzb3J0UnVsZSA9IHNvcnRCeS5zcGxpY2UoaSwgMSlbMF07XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghc29ydFJ1bGUpIHtcclxuXHRcdFx0XHRzb3J0UnVsZSA9IG5ldyBTb3J0UnVsZShhbGlhcyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c29ydFJ1bGUudHJpZ2dlck9yZGVyKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMubXVsdGlTb3J0aW5nKSB7XHJcblx0XHRcdFx0c29ydEJ5LnVuc2hpZnQoc29ydFJ1bGUpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c29ydEJ5ID0gW3NvcnRSdWxlXVxyXG5cdFx0XHR9XHJcblx0XHRcdHZpZXdNb2RlbC5zb3J0QnkgPSBzb3J0Qnk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0YmluZCgpOiB2b2lkIHtcclxuXHRcdGNvbnN0ICRoZWFkVGFibGUgPSB0aGlzLnN0b3JhZ2UuJGhlYWRUYWJsZTtcclxuXHJcblx0XHR0aGlzLl9vZmYoKTtcclxuXHRcdCRoZWFkVGFibGUub24oJ2NsaWNrLlhncmlkJywgJy5YZ3JpZC10aGVhZC1sYWJlbC5zb3J0YWJsZScsIHRoaXMuX2hhbmRsZXJTb3J0Q29sdW1uLmJpbmQodGhpcykpO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX29mZigpOiB2b2lkIHtcclxuXHRcdHRoaXMuc3RvcmFnZS4kaGVhZFRhYmxlLm9mZignLlhncmlkJyk7XHJcblx0fTtcclxuXHJcblx0cHJpdmF0ZSBfaGFuZGxlclNvcnRDb2x1bW4oZTogSlF1ZXJ5RXZlbnRPYmplY3QpOiB2b2lkIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0ICRpdGVtID0gJChlLmN1cnJlbnRUYXJnZXQpO1xyXG5cdFx0Y29uc3QgYWxpYXMgPSAkaXRlbS5hdHRyKCdkYXRhLWFsaWFzJyk7XHJcblx0XHRjb25zdCBjb2xtb2RlbCA9IHRoaXMuc3RvcmFnZS5jb2xNb2RlbHNEaWN0aW9uYXJ5W2FsaWFzXTtcclxuXHJcblx0XHQkaXRlbS5ibHVyKCk7XHJcblx0XHRpZiAoY29sbW9kZWwgJiYgY29sbW9kZWwuc29ydGFibGUpIHtcclxuXHRcdFx0dGhpcy5zb3J0QnlBbGlhcyhhbGlhcyk7XHJcblx0XHR9XHJcblx0fTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSBpbXBsZW1lbnRzIElTdG9yYWdlIHtcclxuXHRwcml2YXRlIF9tb2RlbDogSVN0b3JhZ2VNb2RlbDtcclxuXHRwcml2YXRlIF9zdWJzY3JpYmVyczogeyBba2V5OiBzdHJpbmddOiBGdW5jdGlvbltdIH0gPSB7fTtcclxuXHJcblx0Y29uc3RydWN0b3IobW9kZWwpIHtcclxuXHRcdHRoaXMuX21vZGVsID0gJC5leHRlbmQoe1xyXG5cdFx0XHQkYm94OiBudWxsLFxyXG5cdFx0XHQkaGVhZFRhYmxlOiBudWxsLFxyXG5cdFx0XHQkZ3JpZFRhYmxlOiBudWxsLFxyXG5cdFx0XHQkaGVhZExhYmVsczogbnVsbCxcclxuXHRcdFx0JHBhZ2luYXRpb25Cb3g6IG51bGwsXHJcblx0XHRcdCRmaWx0ZXJUb29sYmFySXRlbXM6IG51bGwsXHJcblx0XHRcdHF1ZXJ5OiBudWxsLFxyXG5cdFx0XHRzY3JvbGxiYXJXaWR0aDogMCxcclxuXHRcdFx0Y29sTW9kZWxzOiBbXSxcclxuXHRcdFx0Y29sTW9kZWxzRGljdGlvbmFyeToge30sXHJcblx0XHRcdGZpbHRlcjogbnVsbCxcclxuXHRcdFx0ZGF0YTogW10sXHJcblx0XHRcdHByb2Nlc3NlZERhdGE6IFtdXHJcblx0XHR9LCBtb2RlbCk7XHJcblx0fVxyXG5cclxuXHRnZXQgJGJveCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kYm94O1xyXG5cdH1cclxuXHJcblx0Z2V0ICRoZWFkVGFibGUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuJGhlYWRUYWJsZTtcclxuXHR9O1xyXG5cdHNldCAkaGVhZFRhYmxlKHZhbHVlOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSB7XHJcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiAkKSB7XHJcblx0XHRcdHRoaXMuX21vZGVsLiRoZWFkVGFibGUgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJyRoZWFkVGFibGUnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgJGdyaWRUYWJsZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kZ3JpZFRhYmxlO1xyXG5cdH07XHJcblx0c2V0ICRncmlkVGFibGUodmFsdWU6IEpRdWVyeTxIVE1MRWxlbWVudD4pIHtcclxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mICQpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuJGdyaWRUYWJsZSA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnJGdyaWRUYWJsZScsIHRoaXMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGdldCAkaGVhZExhYmVscygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC4kaGVhZExhYmVscztcclxuXHR9O1xyXG5cdHNldCAkaGVhZExhYmVscyh2YWx1ZTogSlF1ZXJ5PEhUTUxFbGVtZW50Pikge1xyXG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgJCkge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC4kaGVhZExhYmVscyA9IHZhbHVlO1xyXG5cdFx0XHR0aGlzLm5vdGlmeSgnJGhlYWRMYWJlbHMnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgJHBhZ2luYXRpb25Cb3goKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuJHBhZ2luYXRpb25Cb3g7XHJcblx0fTtcclxuXHRzZXQgJHBhZ2luYXRpb25Cb3godmFsdWU6IEpRdWVyeTxIVE1MRWxlbWVudD4pIHtcclxuXHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mICQpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuJHBhZ2luYXRpb25Cb3ggPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJyRwYWdpbmF0aW9uQm94JywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0ICRmaWx0ZXJUb29sYmFySXRlbXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuJGZpbHRlclRvb2xiYXJJdGVtcztcclxuXHR9O1xyXG5cdHNldCAkZmlsdGVyVG9vbGJhckl0ZW1zKHZhbHVlOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSB7XHJcblx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiAkKSB7XHJcblx0XHRcdHRoaXMuX21vZGVsLiRmaWx0ZXJUb29sYmFySXRlbXMgPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJyRmaWx0ZXJUb29sYmFySXRlbXMnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgc2Nyb2xsYmFyV2lkdGgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwuc2Nyb2xsYmFyV2lkdGg7XHJcblx0fTtcclxuXHJcblx0c2V0IHNjcm9sbGJhcldpZHRoKHZhbHVlOiBudW1iZXIpIHtcclxuXHRcdGlmICh0eXBlb2YgKHZhbHVlKSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZSA+IDApIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuc2Nyb2xsYmFyV2lkdGggPSB2YWx1ZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ3Njcm9sbGJhcldpZHRoJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IGNvbE1vZGVscygpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5jb2xNb2RlbHM7XHJcblx0fTtcclxuXHRzZXQgY29sTW9kZWxzKHZhbHVlOiBJQ29sTW9kZWxbXSkge1xyXG5cdFx0aWYgKCQuaXNBcnJheSh2YWx1ZSkpIHtcclxuXHRcdFx0dGhpcy5fbW9kZWwuY29sTW9kZWxzID0gdmFsdWU7XHJcblx0XHRcdHRoaXMubm90aWZ5KCdjb2xNb2RlbHMnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgY29sTW9kZWxzRGljdGlvbmFyeSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5jb2xNb2RlbHNEaWN0aW9uYXJ5O1xyXG5cdH07XHJcblx0c2V0IGNvbE1vZGVsc0RpY3Rpb25hcnkodmFsdWUpIHtcclxuXHRcdHRoaXMuX21vZGVsLmNvbE1vZGVsc0RpY3Rpb25hcnkgPSB2YWx1ZTtcclxuXHRcdHRoaXMubm90aWZ5KCdjb2xNb2RlbHNEaWN0aW9uYXJ5JywgdGhpcyk7XHJcblx0fTtcclxuXHJcblx0Z2V0IGZpbHRlcigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5maWx0ZXI7XHJcblx0fTtcclxuXHRzZXQgZmlsdGVyKGRhdGEpIHtcclxuXHRcdGlmIChkYXRhID09PSBudWxsIHx8IHR5cGVvZiAoZGF0YSkgPT09ICdvYmplY3QnKSB7XHJcblx0XHRcdHRoaXMuX21vZGVsLmZpbHRlciA9IGRhdGE7XHJcblx0XHRcdHRoaXMubm90aWZ5KCdmaWx0ZXInLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9tb2RlbC5kYXRhO1xyXG5cdH07XHJcblx0c2V0IGRhdGEoZGF0YTogSVJhd0RhdGFbXSkge1xyXG5cdFx0aWYgKCQuaXNBcnJheShkYXRhKSkge1xyXG5cdFx0XHR0aGlzLl9tb2RlbC5kYXRhID0gZGF0YTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ2RhdGEnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgcXVlcnkoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwucXVlcnk7XHJcblx0fTtcclxuXHRzZXQgcXVlcnkoZGF0YSkge1xyXG5cdFx0dGhpcy5fbW9kZWwucXVlcnkgPSBkYXRhO1xyXG5cdFx0dGhpcy5ub3RpZnkoJ3F1ZXJ5JywgdGhpcyk7XHJcblx0fTtcclxuXHJcblx0Z2V0IHByb2Nlc3NlZERhdGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWwucHJvY2Vzc2VkRGF0YTtcclxuXHR9O1xyXG5cdHNldCBwcm9jZXNzZWREYXRhKGRhdGEpIHtcclxuXHRcdHRoaXMuX21vZGVsLnByb2Nlc3NlZERhdGEgPSBkYXRhO1xyXG5cdFx0dGhpcy5ub3RpZnkoJ3Byb2Nlc3NlZERhdGEnLCB0aGlzKTtcclxuXHR9O1xyXG5cclxuXHRvbihuYW1lLCBzdWJzY3JpYmVyKSB7XHJcblx0XHR2YXIgc3RvcmVnZSA9IHRoaXMuX2dldFN0b3JhZ2UobmFtZSk7XHJcblx0XHRzdG9yZWdlLnB1c2goc3Vic2NyaWJlcik7XHJcblx0fTtcclxuXHJcblx0bm90aWZ5KG5hbWUsIGRhdGEpIHtcclxuXHRcdHZhciBzdG9yZWdlID0gdGhpcy5fZ2V0U3RvcmFnZShuYW1lKTtcclxuXHRcdCQuZWFjaChzdG9yZWdlLCBmdW5jdGlvbiAoaSwgc3Vic2NyaWJlcikge1xyXG5cdFx0XHRsZXQgWy4uLmFyZ10gPSBbZGF0YSwgbmFtZSwgaV07XHJcblx0XHRcdHN1YnNjcmliZXIuYXBwbHkoc3Vic2NyaWJlciwgYXJnKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2dldFN0b3JhZ2UobmFtZSkge1xyXG5cdFx0Y29uc3Qgc3Vic2NyaWJlcnMgPSB0aGlzLl9zdWJzY3JpYmVycztcclxuXHRcdGlmICghc3Vic2NyaWJlcnNbbmFtZV0pIHtcclxuXHRcdFx0c3Vic2NyaWJlcnNbbmFtZV0gPSBbXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBzdWJzY3JpYmVyc1tuYW1lXTtcclxuXHR9XHJcbn1cclxuIiwiY2xhc3MgVG9vbHMge1xyXG5cdG5vdzogRnVuY3Rpb247XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5ub3cgPSBEYXRlLm5vdyB8fCAoKCkgPT4geyByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7IH0pO1xyXG5cdH1cclxuXHJcblx0ZXhlY3V0ZShmdW5jdGlvbnMsIGFyZ3MsIGNvbnRleHQ/KSB7XHJcblx0XHRjb25zdCBhcHBseSA9IGZ1bmN0aW9uIChmb28pIHtcclxuXHRcdFx0aWYgKHR5cGVvZiAoZm9vKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdGZvby5hcHBseShjb250ZXh0ID8gY29udGV4dCA6IGZvbywgYXJncylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICgkLmlzQXJyYXkoZnVuY3Rpb25zKSkge1xyXG5cdFx0XHRmdW5jdGlvbnMuZm9yRWFjaChhcHBseSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhcHBseShmdW5jdGlvbnMpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGluc2VydEVsZW1lbnQoJGNvbnRhaW5lciwgc2VhcmNoU3RyLCByZXBsYWNlbWVudCkge1xyXG5cdFx0Y29uc3QgJHJlcGxhY2VtZW50ID0gJChyZXBsYWNlbWVudCk7XHJcblxyXG5cdFx0aWYgKCEkcmVwbGFjZW1lbnQubGVuZ3RoKSB7XHJcblx0XHRcdHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VtZW50KTtcclxuXHRcdH1cclxuXHRcdCRjb250YWluZXIuZmluZChcIjpub3QoaWZyYW1lKVwiKS5hZGRCYWNrKCkuY29udGVudHMoKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5ub2RlVHlwZSA9PT0gMztcclxuXHRcdH0pLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodGhpcy5kYXRhLmluZGV4T2Yoc2VhcmNoU3RyKSAhPT0gLTEpIHtcclxuXHRcdFx0XHRpZiAoJHJlcGxhY2VtZW50Lmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5hZnRlcigkcmVwbGFjZW1lbnQpO1xyXG5cdFx0XHRcdFx0Y29uc3Qgc3RyID0gdGhpcy5kYXRhLFxyXG5cdFx0XHRcdFx0XHRwYXJ0MSA9IHN0ci5zdWJzdHIoMCwgc3RyLmluZGV4T2Yoc2VhcmNoU3RyKSksXHJcblx0XHRcdFx0XHRcdHBhcnQyID0gc3RyLnN1YnN0cihwYXJ0MS5sZW5ndGggKyBzZWFyY2hTdHIubGVuZ3RoLCBzdHIubGVuZ3RoKTtcclxuXHRcdFx0XHRcdGlmICghcGFydDEubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAocGFydDIubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdGlmIChwYXJ0MS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRhdGEgPSBwYXJ0MTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQkcmVwbGFjZW1lbnQuYWZ0ZXIocGFydDIpXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBhcnQxLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEgPSBwYXJ0MTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2Uoc2VhcmNoU3RyLCByZXBsYWNlbWVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHRocm90dGxlKGZ1bmMsIHdhaXQgPSAxMCkge1xyXG5cdFx0bGV0IGNvbnRleHQsXHJcblx0XHRcdGFyZ3MsXHJcblx0XHRcdHRpbWVvdXQgPSBudWxsO1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICguLi5wcm9wcykge1xyXG5cdFx0XHRjb250ZXh0ID0gdGhpcztcclxuXHRcdFx0YXJncyA9IHByb3BzO1xyXG5cdFx0XHRpZiAoIWNvbnRleHQpIHtcclxuXHRcdFx0XHRjb250ZXh0ID0gZnVuY1xyXG5cdFx0XHR9IGVsc2UgaWYgKGNvbnRleHQgPT09IHdpbmRvdykge1xyXG5cdFx0XHRcdGNvbnRleHQgPSBmdW5jO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghdGltZW91dCkge1xyXG5cdFx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHRcdFx0XHRcdHRpbWVvdXQgPSBudWxsO1xyXG5cdFx0XHRcdFx0ZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHRcdFx0XHR9LCB3YWl0KTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVG9vbHMoKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3TW9kZWwgaW1wbGVtZW50cyBJVmlld01vZGVsIHtcclxuXHRtb2RlbDogSVZpZXdNb2RlbFBhcnRpYWw7XHJcblx0c3Vic2NyaWJlcnM6IHsgW2tleTogc3RyaW5nXTogRnVuY3Rpb25bXSB9O1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMubW9kZWwgPSB7XHJcblx0XHRcdHJvd3M6IDEwLFxyXG5cdFx0XHR0b3RhbFJvd3M6IDAsXHJcblx0XHRcdHBhZ2U6IDEsXHJcblx0XHRcdHRvdGFsUGFnZXM6IDAsXHJcblx0XHRcdG5ld1BhZ2U6IDEsXHJcblx0XHRcdGRhdGE6IFtdLFxyXG5cdFx0XHRzb3J0Qnk6IFtdLFxyXG5cdFx0XHRmaWx0ZXJUb29sYmFyOiB0cnVlXHJcblx0XHR9XHJcblx0XHR0aGlzLnN1YnNjcmliZXJzID0ge307XHJcblx0fVxyXG5cclxuXHRnZXQgZGF0YSgpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vZGVsLmRhdGE7XHJcblx0fTtcclxuXHRzZXQgZGF0YShkYXRhKSB7XHJcblx0XHRpZiAoJC5pc0FycmF5KGRhdGEpKSB7XHJcblx0XHRcdHRoaXMubW9kZWwuZGF0YSA9IGRhdGE7XHJcblx0XHRcdHRoaXMubm90aWZ5KCdkYXRhJywgdGhpcyk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Z2V0IHNvcnRCeSgpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vZGVsLnNvcnRCeTtcclxuXHR9O1xyXG5cdHNldCBzb3J0QnkoZGF0YSkge1xyXG5cdFx0aWYgKCQuaXNBcnJheShkYXRhKSkge1xyXG5cdFx0XHR0aGlzLm1vZGVsLnNvcnRCeSA9IGRhdGE7XHJcblx0XHRcdHRoaXMubm90aWZ5KCdzb3J0QnknLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgdG90YWxSb3dzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW9kZWwudG90YWxSb3dzO1xyXG5cdH07XHJcblx0c2V0IHRvdGFsUm93cyh0b3RhbFJvd3MpIHtcclxuXHRcdGlmICh0eXBlb2YgKHRvdGFsUm93cykgPT09IFwibnVtYmVyXCIgJiYgdG90YWxSb3dzID4gLTEpIHtcclxuXHRcdFx0dGhpcy5tb2RlbC50b3RhbFJvd3MgPSB0b3RhbFJvd3M7XHJcblx0XHRcdHRoaXMubm90aWZ5KCd0b3RhbFJvd3MnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgdG90YWxQYWdlcygpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vZGVsLnRvdGFsUGFnZXM7XHJcblx0fTtcclxuXHRzZXQgdG90YWxQYWdlcyh0b3RhbFBhZ2VzKSB7XHJcblx0XHRpZiAodHlwZW9mICh0b3RhbFBhZ2VzKSA9PT0gXCJudW1iZXJcIiAmJiB0b3RhbFBhZ2VzID4gLTEpIHtcclxuXHRcdFx0dGhpcy5tb2RlbC50b3RhbFBhZ2VzID0gdG90YWxQYWdlcztcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ3RvdGFsUGFnZXMnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgcm93cygpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vZGVsLnJvd3M7XHJcblx0fTtcclxuXHRzZXQgcm93cyhyb3dzKSB7XHJcblx0XHRpZiAodHlwZW9mIChyb3dzKSA9PT0gXCJudW1iZXJcIiAmJiByb3dzID4gLTEpIHtcclxuXHRcdFx0dGhpcy5tb2RlbC5yb3dzID0gcm93cztcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ3Jvd3MnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgcGFnZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vZGVsLnBhZ2U7XHJcblx0fTtcclxuXHRzZXQgcGFnZShwYWdlKSB7XHJcblx0XHRpZiAodHlwZW9mIChwYWdlKSA9PT0gXCJudW1iZXJcIiAmJiBwYWdlID4gLTEpIHtcclxuXHRcdFx0dGhpcy5tb2RlbC5wYWdlID0gcGFnZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ3BhZ2UnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgbmV3UGFnZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vZGVsLm5ld1BhZ2U7XHJcblx0fTtcclxuXHRzZXQgbmV3UGFnZShwYWdlKSB7XHJcblx0XHRpZiAodHlwZW9mIChwYWdlKSA9PT0gXCJudW1iZXJcIiAmJiBwYWdlID4gLTEpIHtcclxuXHRcdFx0dGhpcy5tb2RlbC5uZXdQYWdlID0gcGFnZTtcclxuXHRcdFx0dGhpcy5ub3RpZnkoJ25ld1BhZ2UnLCB0aGlzKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRnZXQgZmlsdGVyVG9vbGJhcigpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vZGVsLmZpbHRlclRvb2xiYXI7XHJcblx0fTtcclxuXHRzZXQgZmlsdGVyVG9vbGJhcihkYXRhOiBib29sZWFuKSB7XHJcblx0XHR0aGlzLm1vZGVsLmZpbHRlclRvb2xiYXIgPSBkYXRhO1xyXG5cdFx0dGhpcy5ub3RpZnkoJ2ZpbHRlclRvb2xiYXInLCB0aGlzKTtcclxuXHR9O1xyXG5cclxuXHRvbihuYW1lLCBzdWJzY3JpYmVyKTogdm9pZCB7XHJcblx0XHR2YXIgc3RvcmVnZSA9IHRoaXMuX2dldFN0b3JhZ2UobmFtZSk7XHJcblx0XHRzdG9yZWdlLnB1c2goc3Vic2NyaWJlcik7XHJcblx0fTtcclxuXHJcblx0bm90aWZ5KG5hbWUsIGRhdGEpOiB2b2lkIHtcclxuXHRcdHZhciBzdG9yZWdlID0gdGhpcy5fZ2V0U3RvcmFnZShuYW1lKTtcclxuXHRcdCQuZWFjaChzdG9yZWdlLCBmdW5jdGlvbiAoaSwgc3Vic2NyaWJlcikge1xyXG5cdFx0XHRsZXQgWy4uLmFyZ10gPSBbZGF0YSwgbmFtZSwgaV07XHJcblx0XHRcdHN1YnNjcmliZXIuYXBwbHkoc3Vic2NyaWJlciwgYXJnKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHByaXZhdGUgX2dldFN0b3JhZ2UobmFtZSkge1xyXG5cdFx0Y29uc3Qgc3Vic2NyaWJlcnMgPSB0aGlzLnN1YnNjcmliZXJzO1xyXG5cdFx0aWYgKCFzdWJzY3JpYmVyc1tuYW1lXSkge1xyXG5cdFx0XHRzdWJzY3JpYmVyc1tuYW1lXSA9IFtdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN1YnNjcmliZXJzW25hbWVdO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgVmlld01vZGVsIGZyb20gJy4vVmlld01vZGVsJztcclxuaW1wb3J0IFByb2Nlc3NTZXR0aW5ncyBmcm9tICcuL1Byb2Nlc3NTZXR0aW5ncyc7XHJcbmltcG9ydCBCdWlsZEluZnJhc3RydWN0dXJlIGZyb20gJy4vQnVpbGRJbmZyYXN0cnVjdHVyZSc7XHJcbmltcG9ydCBGaWx0ZXJUb29sYmFyIGZyb20gJy4vRmlsdGVyVG9vbGJhcic7XHJcbmltcG9ydCBTb3J0aW5nIGZyb20gJy4vU29ydGluZyc7XHJcbmltcG9ydCBEaXNwbGF5IGZyb20gJy4vRGlzcGxheSc7XHJcbmltcG9ydCBGaXhlZEhlYWRlciBmcm9tICcuL0ZpeGVkSGVhZGVyJztcclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9TdG9yYWdlJztcclxuaW1wb3J0IEZpbGwgZnJvbSAnLi9GaWxsJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9QYWdpbmF0aW9uJztcclxuaW1wb3J0IHRvb2xzIGZyb20gJy4vVG9vbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWGdyaWQge1xyXG5cdG9wdGlvbnM6IElPcHRpb25zO1xyXG5cdHByb3BlcnRpZXM6IElYZ3JpZFByb3BlcnRpZXM7XHJcblx0Vmlld01vZGVsOiBJVmlld01vZGVsO1xyXG5cdFByb2Nlc3NTZXR0aW5nczogUHJvY2Vzc1NldHRpbmdzO1xyXG5cdEJ1aWxkSW5mcmFzdHJ1Y3R1cmU6IEJ1aWxkSW5mcmFzdHJ1Y3R1cmU7XHJcblx0U29ydGluZzogU29ydGluZztcclxuXHRTdG9yYWdlOiBJU3RvcmFnZTtcclxuXHRGaWxsOiBGaWxsO1xyXG5cdERpc3BsYXk6IERpc3BsYXk7XHJcblx0Rml4ZWRIZWFkZXI6IEZpeGVkSGVhZGVyO1xyXG5cdEZpbHRlclRvb2xiYXI6IEZpbHRlclRvb2xiYXI7XHJcblx0UGFnaW5hdGlvbjogUGFnaW5hdGlvbjtcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9uczogSU9wdGlvbnMsICRib3g6IEpRdWVyeSkge1xyXG5cdFx0dGhpcy5wcm9wZXJ0aWVzID0ge1xyXG5cdFx0XHQkYm94LFxyXG5cdFx0XHRkYXRhOiBbXVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xyXG5cdFx0XHRiZWZvcmVSZXF1ZXN0OiBbXSxcclxuXHRcdFx0YWZ0ZXJSZXNwb25zZTogW10sXHJcblx0XHRcdHNvcnRCeTogW10sXHJcblx0XHRcdHBhZ2luYXRpb25TZWxlY3RvcjogJycsXHJcblx0XHRcdGFqYXhUeXBlOiAnUE9TVCcsXHJcblx0XHRcdGZpbHRlclRvb2xiYXJHcm91cE9wOiAnQU5EJyxcclxuXHRcdFx0dXJsOiAnJyxcclxuXHRcdFx0bXVsdGlTb3J0aW5nOiBmYWxzZSxcclxuXHRcdFx0ZmlsdGVyVG9vbGJhcjogZmFsc2VcclxuXHRcdH0sIG9wdGlvbnMpO1xyXG5cclxuXHRcdHRoaXMuU3RvcmFnZSA9IG5ldyBTdG9yYWdlKHsgJGJveCB9KVxyXG5cdFx0dGhpcy5fZXhlYygpO1xyXG5cdH07XHJcblxyXG5cdGFqYXhGdW5jdGlvbihxdWVyeU9iamVjdDogYW55LCB1cmw6IHN0cmluZykge1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHRcdHJldHVybiAkLmFqYXgoe1xyXG5cdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0ZGF0YTogcXVlcnlPYmplY3QsXHJcblx0XHRcdHR5cGU6IG9wdGlvbnMuYWpheFR5cGUsXHJcblx0XHRcdGRhdGFUeXBlOiAnanNvbidcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0X3Jlc3BvbnNlKHJlc3BvbnNlT2JqZWN0OiBJUmVzcG9uc2UpIHtcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblx0XHRpZiAob3B0aW9ucy5hZnRlclJlc3BvbnNlKSB7XHJcblx0XHRcdHRvb2xzLmV4ZWN1dGUob3B0aW9ucy5hZnRlclJlc3BvbnNlLCBbcmVzcG9uc2VPYmplY3RdKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRfcmVxdWVzdChxdWVyeU9iamVjdCA9IHt9KSB7XHJcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxyXG5cdFx0XHRkID0gJC5EZWZlcnJlZCgpO1xyXG5cdFx0aWYgKG9wdGlvbnMuYmVmb3JlUmVxdWVzdCkge1xyXG5cdFx0XHR0b29scy5leGVjdXRlKG9wdGlvbnMuYmVmb3JlUmVxdWVzdCwgW3F1ZXJ5T2JqZWN0XSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5hamF4RnVuY3Rpb24ocXVlcnlPYmplY3QsIG9wdGlvbnMudXJsKS5kb25lKHRoaXMuX3Jlc3BvbnNlLmJpbmQodGhpcykpLmFsd2F5cyhkLnJlc29sdmUpO1xyXG5cclxuXHRcdHJldHVybiBkO1xyXG5cdH07XHJcblxyXG5cdF9iaW5kKCkge1xyXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMsXHJcblx0XHRcdHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXMsXHJcblx0XHRcdG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcblxyXG5cdFx0Ly8gdG8gRG8gaWYgbW9kZWwgd2lsbCBiZSBjaGFuZ2VkXHJcblx0XHR0aGlzLlN0b3JhZ2Uub24oJ2NvbE1vZGVscycsICgpID0+IHtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyh0aGlzLkZpbGwpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5TdG9yYWdlLm9uKCdkYXRhJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLkRpc3BsYXkuZXhlYygpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5WaWV3TW9kZWwub24oJ2RhdGEnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuRmlsbC50Ym9keSgpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLkZpeGVkSGVhZGVyLnJlc2l6ZSgpO1xyXG5cdFx0XHR9LCAxMDUwKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5TdG9yYWdlLm9uKCckcGFnaW5hdGlvbkJveCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy5QYWdpbmF0aW9uLmV4ZWMoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuU3RvcmFnZS5vbignJGhlYWRUYWJsZScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5Tb3J0aW5nLmJpbmQoKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0X2V4ZWMoKSB7XHJcblx0XHRjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXM7XHJcblxyXG5cdFx0dGhpcy5WaWV3TW9kZWwgPSBuZXcgVmlld01vZGVsKCk7XHJcblx0XHR0aGlzLlByb2Nlc3NTZXR0aW5ncyA9IG5ldyBQcm9jZXNzU2V0dGluZ3Mob3B0aW9ucywgdGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCk7XHJcblx0XHR0aGlzLkJ1aWxkSW5mcmFzdHJ1Y3R1cmUgPSBuZXcgQnVpbGRJbmZyYXN0cnVjdHVyZShvcHRpb25zLCB0aGlzLlN0b3JhZ2UsIHRoaXMuVmlld01vZGVsKTtcclxuXHRcdHRoaXMuU29ydGluZyA9IG5ldyBTb3J0aW5nKHRoaXMuU3RvcmFnZSwgdGhpcy5WaWV3TW9kZWwsIG9wdGlvbnMpO1xyXG5cdFx0dGhpcy5GaWxsID0gbmV3IEZpbGwodGhpcy5TdG9yYWdlLCB0aGlzLlZpZXdNb2RlbCk7XHJcblx0XHR0aGlzLkZpbHRlclRvb2xiYXIgPSBuZXcgRmlsdGVyVG9vbGJhcih0aGlzLlN0b3JhZ2UsIHRoaXMuVmlld01vZGVsLCBvcHRpb25zKTtcclxuXHRcdHRoaXMuRGlzcGxheSA9IG5ldyBEaXNwbGF5KHtcclxuXHRcdFx0c3RvcmFnZTogdGhpcy5TdG9yYWdlLFxyXG5cdFx0XHR2aWV3TW9kZWw6IHRoaXMuVmlld01vZGVsLFxyXG5cdFx0XHRhamF4OiAoKHF1ZXJ5T2JqZWN0OiBJUmVxdWVzdCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLl9yZXF1ZXN0KHF1ZXJ5T2JqZWN0KTtcclxuXHRcdFx0fSksXHJcblx0XHRcdGlzTG9jYWw6IG9wdGlvbnMudXJsID8gZmFsc2UgOiB0cnVlXHJcblx0XHR9KTtcclxuXHRcdHRoaXMuRml4ZWRIZWFkZXIgPSBuZXcgRml4ZWRIZWFkZXIodGhpcy5TdG9yYWdlKTtcclxuXHRcdHRoaXMuUGFnaW5hdGlvbiA9IG5ldyBQYWdpbmF0aW9uKG9wdGlvbnMsIHRoaXMuU3RvcmFnZSwgdGhpcy5WaWV3TW9kZWwpO1xyXG5cclxuXHRcdHRoaXMuX2JpbmQoKTtcclxuXHJcblx0XHR0aGlzLkZpbGwudGhlYWQoKTtcclxuXHJcblx0XHRpZiAoISQuaXNBcnJheShvcHRpb25zLmRhdGEpKSB7XHJcblx0XHRcdG9wdGlvbnMuZGF0YSA9IFtdO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5TdG9yYWdlLmRhdGEgPSBvcHRpb25zLmRhdGE7XHJcblx0fVxyXG59IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9
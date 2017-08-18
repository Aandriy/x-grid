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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tools = function () {
	function Tools() {
		_classCallCheck(this, Tools);

		this.now = Date.now || function () {
			return new Date().getTime();
		};
	}

	_createClass(Tools, [{
		key: 'execute',
		value: function execute(functions, args, context) {
			var apply = function apply(foo) {
				if (typeof foo === 'function') {
					foo.apply(context ? context : foo, args);
				}
			};

			if ($.isArray(functions)) {
				functions.forEach(apply);
			} else {
				apply(functions);
			}
		}
	}, {
		key: 'insertElement',
		value: function insertElement($container, searchStr, replacement) {
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
						var str = this.data,
						    part1 = str.substr(0, str.indexOf(searchStr)),
						    part2 = str.substr(part1.length + searchStr.length, str.length);
						if (!part1.length) {
							$(this).remove();
						}
						if (part2.length) {
							if (part1.length) {
								this.data = part1;
							}
							$replacement.after(part2);
						} else if (part1.length) {
							this.data = part1;
						}
					} else {
						this.data = this.data.replace(searchStr, replacement);
					}
				}
			});
		}
	}, {
		key: 'throttle',
		value: function throttle(func) {
			var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

			var context = void 0,
			    args = void 0,
			    timeout = null;
			return function () {
				context = this;

				for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
					props[_key] = arguments[_key];
				}

				args = props;
				if (!context) {
					context = func;
				} else if (context === window) {
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
		}
	}]);

	return Tools;
}();

exports.default = new Tools();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ViewModel = __webpack_require__(2);

var _ViewModel2 = _interopRequireDefault(_ViewModel);

var _ProcessSettings = __webpack_require__(3);

var _ProcessSettings2 = _interopRequireDefault(_ProcessSettings);

var _BuildInfrastructure = __webpack_require__(5);

var _BuildInfrastructure2 = _interopRequireDefault(_BuildInfrastructure);

var _Display = __webpack_require__(6);

var _Display2 = _interopRequireDefault(_Display);

var _FixedHeader = __webpack_require__(8);

var _FixedHeader2 = _interopRequireDefault(_FixedHeader);

var _Storage = __webpack_require__(9);

var _Storage2 = _interopRequireDefault(_Storage);

var _Fill = __webpack_require__(10);

var _Fill2 = _interopRequireDefault(_Fill);

var _Pagination = __webpack_require__(11);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Tools = __webpack_require__(0);

var _Tools2 = _interopRequireDefault(_Tools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function ($) {
	//Xgrid
	var Xgrid = function () {
		function Xgrid(options, box) {
			_classCallCheck(this, Xgrid);

			this.properties = {
				$box: box,
				data: []

			};
			this.options = $.extend({
				beforeRequest: [],
				afterResponse: [],
				paginationSelector: '',
				ajaxType: 'POST',
				url: ''
			}, options);
			this.Storage = new _Storage2.default({ $box: box });
			this._exec();
		}

		_createClass(Xgrid, [{
			key: 'ajaxFunction',
			value: function ajaxFunction(queryObject, url) {
				var options = this.options;
				$.ajax({
					url: url,
					data: queryObject,
					type: options.ajaxType,
					dataType: 'json'
				});
			}
		}, {
			key: '_response',
			value: function _response(responseObject) {
				var options = this.options;

				if (options.afterResponse) {
					_Tools2.default.execute(options.afterResponse, responseObject);
				}
			}
		}, {
			key: '_request',
			value: function _request() {
				var queryObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				var options = this.options,
				    d = $.Deferred();
				if (options.beforeRequest) {
					_Tools2.default.execute(options.beforeRequest, queryObject);
				}

				this.ajaxFunction(queryObject, options.url).done(this._response.bind(this)).always(function () {
					d.resolve();
				});

				return d;
			}
		}, {
			key: '_bind',
			value: function _bind() {
				var _this = this;

				var self = this,
				    properties = this.properties,
				    options = this.options;

				// to Do if model will be changed
				this.Storage.on('colModels', function () {
					//console.log(this.Fill);
				});

				this.Storage.on('data', function () {
					_this.Display.exec();
				});

				this.ViewModel.on('data', function () {
					_this.Fill.tbody();
					_this.FixedHeader.resize();
				});

				this.Storage.on('$paginationBox', function () {
					_this.Pagination.exec();
				});
			}
		}, {
			key: '_exec',
			value: function _exec() {
				var _this2 = this;

				var self = this,
				    properties = this.properties,
				    options = this.options;

				this.ViewModel = new _ViewModel2.default();
				this.ProcessSettings = new _ProcessSettings2.default(options, this.Storage);
				this.BuildInfrastructure = new _BuildInfrastructure2.default(options, this.Storage);
				this.Fill = new _Fill2.default(this.Storage, this.ViewModel);
				this.Display = new _Display2.default({
					storage: this.Storage,
					viewModel: this.ViewModel,
					ajax: function ajax(queryObject) {
						return _this2._request(queryObject);
					},
					isLocal: options.url ? false : true
				});
				this.FixedHeader = new _FixedHeader2.default(this.Storage);
				this.Pagination = new _Pagination2.default(options, this.Storage, this.ViewModel);

				this._bind();

				this.Fill.thead();

				if ($.isArray(options.data)) {
					this.Storage.data = options.data;
				}
			}
		}]);

		return Xgrid;
	}();

	$.fn.Xgrid = function (o) {
		var args = arguments,
		    data;
		return this.each(function () {
			data = $(this).data('Xgrid');
			if (!data) {
				$(this).data('Xgrid', new Xgrid(o, $(this)));
			} else if (typeof o === 'string' && o.indexOf('_') !== 0 && data[o] === 'function') {
				args = Array.prototype.slice.call(args, 1);
				data[o].apply(data, args);
			} else if (data.refresh) {
				data.refresh.apply(data, args);
			}
		});
	};
})(jQuery);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewModel = function () {
	function ViewModel() {
		_classCallCheck(this, ViewModel);

		this.model = {
			rows: 10,
			totalRows: 0,
			page: 1,
			totalPages: 0,
			data: [],
			newPage: 1
		};
		this.subscribers = {};
	}

	_createClass(ViewModel, [{
		key: 'on',
		value: function on(name, subscriber) {
			var storege = this._getStorage(name);
			storege.push(subscriber);
		}
	}, {
		key: 'notify',
		value: function notify(name, data) {
			var _this = this;

			setTimeout(function () {
				var storege = _this._getStorage(name);
				$.each(storege, function (i, subscriber) {
					subscriber.apply(subscriber, data);
				});
			}, 1);
		}
	}, {
		key: '_getStorage',
		value: function _getStorage(name) {
			var subscribers = this.subscribers;
			if (!subscribers[name]) {
				subscribers[name] = [];
			}
			return subscribers[name];
		}
	}, {
		key: 'data',
		get: function get() {
			return this.model.data;
		},
		set: function set(data) {
			if ($.isArray(data)) {
				this.model.data = data;
				this.notify('data', this);
			}
		}
	}, {
		key: 'totalRows',
		get: function get() {
			return this.model.totalRows;
		},
		set: function set(totalRows) {
			if (typeof totalRows === "number" && totalRows > -1) {
				this.model.totalRows = totalRows;
				this.notify('totalRows', this);
			}
		}
	}, {
		key: 'totalPages',
		get: function get() {
			return this.model.totalPages;
		},
		set: function set(totalPages) {
			if (typeof totalPages === "number" && totalPages > -1) {
				this.model.totalPages = totalPages;
				this.notify('totalPages', this);
			}
		}
	}, {
		key: 'rows',
		get: function get() {
			return this.model.rows;
		},
		set: function set(rows) {
			if (typeof rows === "number" && rows > -1) {
				this.model.rows = rows;
				this.notify('rows', this);
			}
		}
	}, {
		key: 'page',
		get: function get() {
			return this.model.page;
		},
		set: function set(page) {
			if (typeof page === "number" && page > -1) {
				this.model.page = page;
				this.notify('page', this);
			}
		}
	}, {
		key: 'newPage',
		get: function get() {
			return this.model.newPage;
		},
		set: function set(page) {
			if (typeof page === "number" && page > -1) {
				this.model.newPage = page;
				this.notify('newPage', this);
			}
		}
	}]);

	return ViewModel;
}();

exports.default = ViewModel;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ColModel = __webpack_require__(4);

var _ColModel2 = _interopRequireDefault(_ColModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProcessSettings = function () {
	function ProcessSettings(options, storage) {
		_classCallCheck(this, ProcessSettings);

		this.options = $.extend({
			colModels: []
		}, options);

		this.properties = {
			scrollbarWidth: null
		};
		this.storage = storage;
		this._exec();
	}

	_createClass(ProcessSettings, [{
		key: '_getScrollbarWidth',
		value: function _getScrollbarWidth() {
			var div = void 0,
			    width = void 0;
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
		}
	}, {
		key: '_columnModel',
		value: function _columnModel() {
			var _this = this;

			var storage = this.storage,
			    options = this.options,
			    colModels = [],
			    aliases = {},
			    colModelsDictionary = {};

			$.each(options.colModels, function (i, model) {
				var colModel = new _ColModel2.default(model, i, _this.storage);

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
					};
				}
				colModelsDictionary[colModel.alias] = colModel;
				colModels.push(colModel);
			});

			storage.colModels = colModels;
			storage.colModelsDictionary = colModelsDictionary;
		}
	}, {
		key: '_exec',
		value: function _exec() {
			var storage = this.storage;
			this._columnModel();
			storage.scrollbarWidth = this._getScrollbarWidth();
		}
	}]);

	return ProcessSettings;
}();

exports.default = ProcessSettings;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColModel = function () {
	function ColModel(model, order) {
		_classCallCheck(this, ColModel);

		this.label = '';
		this.hidden = false;
		this.resizable = false;
		this.sortable = false;
		this.order = order;
		$.extend(this, model);

		if (typeof this.alias === 'undefined') {
			this.alias = this.key;
		}
		if (typeof this.key === 'undefined') {
			this.alias = this.alias;
		}
	}

	_createClass(ColModel, [{
		key: 'labelFormatter',
		value: function labelFormatter() {
			return this.label;
		}
	}, {
		key: 'cellFormatter',
		value: function cellFormatter($td, value, rowData, data) {
			return '<div class="ellipsis">' + value + '</div>';
		}
	}, {
		key: 'filterFormatter',
		value: function filterFormatter(value, rowData, data) {
			return value;
		}
	}, {
		key: 'sortFormatter',
		value: function sortFormatter(value, rowData, data) {
			return value;
		}
	}]);

	return ColModel;
}();

;

exports.default = ColModel;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Tools = __webpack_require__(0);

var _Tools2 = _interopRequireDefault(_Tools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BuildInfrastructure = function () {
	function BuildInfrastructure(options, storage) {
		_classCallCheck(this, BuildInfrastructure);

		this.options = $.extend({
			theadClass: 'table table-bordered table-striped',
			tbodyClass: 'table table-bordered table-striped',
			firstBtnTemplate: '<span class="btn btn-default"><i class="glyphicon glyphicon-step-backward"></i></span>',
			lastBtnTemplate: '<span class="btn btn-default"><i class="glyphicon glyphicon-step-forward"></i></span>',
			prevBtnTemplate: '<span class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i></span>',
			nextBtnTemplate: '<span class="btn btn-default"><i class="glyphicon glyphicon-chevron-right"></i></span>',
			currentPageTemplate: '<input type="text" class="form-control" />',
			paginationTemplate: '<div class="Xgrid-paggination input-group input-group-sm">\n\t\t\t<div class="input-group-btn" >{firstBtnTemplate}{prevBtnTemplate}</div>\n\t\t\t\t<span class="input-group-addon"> Page </span>\n\t\t\t\t{currentPageTemplate}\n\t\t\t\t<span class="input-group-addon"> of <span class="Xgrid-total-pages"></span></span>\n\t\t\t\t<div class="input-group-btn" >{nextBtnTemplate}{lastBtnTemplate}</div>\n\t\t\t</div>'
		}, options);

		this.storage = storage;
		this._exec();
	}

	_createClass(BuildInfrastructure, [{
		key: '_exec',
		value: function _exec() {
			this._build();
			this._buildThead();
			this._buildTBody();
			this._buildPagination();
		}
	}, {
		key: '_buildThead',
		value: function _buildThead() {
			var storage = this.storage;
			var widthHelper = '<tbody class="Xgrid-thead-w"><tr>' + new Array(storage.colModels.length + 1).join('<td><div class="Xgrid-WidthListener-wrapper"><iframe data-col="0" class="Xgrid-WidthListener"></iframe></div></td>') + '</tr></tbody>';
			storage.$headTable.html(widthHelper);
			storage.$headTable.append('<thead class="Xgrid-thead-labels"><tr>' + new Array(storage.colModels.length + 1).join('<th class="Xgrid-thead-label"></th>') + '</tr></thead>');
			storage.$headLabels = storage.$headTable.find('.Xgrid-thead-label');
		}
	}, {
		key: '_buildTBody',
		value: function _buildTBody() {
			var storage = this.storage;
			var widthHelper = '<tfoot class="Xgrid-tbody-w"><tr>' + new Array(storage.colModels.length + 1).join('<td><i></i></td>') + '</tr></tfoot>';
			storage.$gridTable.html(widthHelper);
		}
	}, {
		key: '_buildPagination',
		value: function _buildPagination() {
			var storage = this.storage,
			    options = this.options,
			    $pagination = $(options.paginationTemplate),
			    firstBtnTemplate = options.firstBtnTemplate,
			    lastBtnTemplate = options.lastBtnTemplate,
			    prevBtnTemplate = options.prevBtnTemplate,
			    nextBtnTemplate = options.nextBtnTemplate,
			    currentPageTemplate = options.currentPageTemplate;

			var $paginationBox = void 0;

			_Tools2.default.insertElement($pagination, '{firstBtnTemplate}', firstBtnTemplate ? $(firstBtnTemplate).addClass('Xgrid-first') : '');
			_Tools2.default.insertElement($pagination, '{prevBtnTemplate}', $(prevBtnTemplate).addClass('Xgrid-prev'));
			_Tools2.default.insertElement($pagination, '{nextBtnTemplate}', $(nextBtnTemplate).addClass('Xgrid-next'));
			_Tools2.default.insertElement($pagination, '{lastBtnTemplate}', $(lastBtnTemplate).addClass('Xgrid-last'));
			_Tools2.default.insertElement($pagination, '{currentPageTemplate}', $(currentPageTemplate).addClass('Xgrid-current-page'));

			if (options.paginationSelector) {
				$paginationBox = $(options.paginationSelector);
			} else {
				$paginationBox = storage.$box.find('.Xgrid-paggination-wrapper');
			}

			$paginationBox.html($pagination);
			storage.$paginationBox = $paginationBox;
		}
	}, {
		key: '_build',
		value: function _build() {
			var storage = this.storage,
			    options = this.options;

			storage.$box.html('<div class="Xgrid">\n\t<div class="Xgrid-wrapper">\n\t\t<div class="Xgrid-thead-wrapper">\n\t\t\t<table class="Xgrid-thead ' + options.theadClass + '"></table>\n\t\t</div>\n\t\t<div class="Xgrid-tbody-wrapper">\n\t\t\t<table class="Xgrid-tbody ' + options.tbodyClass + '"></table>\n\t\t</div>\n\t\t<div class="Xgrid-paggination-wrapper"></div>\n\t</div>\n</div>');
			storage.$headTable = storage.$box.find('.Xgrid-thead');
			storage.$gridTable = storage.$box.find('.Xgrid-tbody');
		}
	}]);

	return BuildInfrastructure;
}();

exports.default = BuildInfrastructure;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Tools = __webpack_require__(0);

var _Tools2 = _interopRequireDefault(_Tools);

var _QueryModel = __webpack_require__(7);

var _QueryModel2 = _interopRequireDefault(_QueryModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Display = function () {
	function Display(options) {
		_classCallCheck(this, Display);

		this.viewModel = options.viewModel;
		this.storage = options.storage;
		this.ajax = options.ajax;

		if (options.isLocal) {
			this.process = this._localProcess.bind(this);
		} else {
			this.process = this._serverProcess.bind(this);
		}

		this._subscribe();
	}

	_createClass(Display, [{
		key: 'exec',
		value: function exec() {
			var _this = this;

			var storage = this.storage,
			    viewModel = this.viewModel,
			    query = new _QueryModel2.default({
				filter: [],
				sort: [],
				rows: viewModel.rows,
				page: viewModel.newPage
			});

			storage.query = query;
			storage.$box.addClass('Xgrid-loading');
			setTimeout(function () {
				_this.process().done(function (data) {
					_this._filler(data);
					_this.storage.$box.removeClass('Xgrid-loading');
				});
			}, 0);
		}
	}, {
		key: '_filler',
		value: function _filler(data) {
			var viewModel = this.viewModel;

			viewModel.totalPages = data.totalPages;
			viewModel.totalRows = data.totalRows;
			viewModel.data = data.data;
			viewModel.page = data.page;
		}
	}, {
		key: '_localFilter',
		value: function _localFilter(data) {
			var deferred = $.Deferred();
			setTimeout(function () {
				deferred.resolve(data);
			}, 0);
			return deferred;
		}
	}, {
		key: '_localSort',
		value: function _localSort(data) {
			var deferred = $.Deferred();
			setTimeout(function () {
				deferred.resolve(data);
			}, 0);
			return deferred;
		}
	}, {
		key: '_getLocalData',
		value: function _getLocalData(data, query) {
			var storage = this.storage,
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
		}
	}, {
		key: '_localProcess',
		value: function _localProcess() {
			var _this2 = this;

			var storage = this.storage,
			    deferred = $.Deferred(),
			    query = storage.query;

			this._localFilter(storage.data, query.filter).done(function (filteredData) {
				_this2._localSort(filteredData, query.sort).done(function (sortedData) {
					deferred.resolve(_this2._getLocalData(sortedData, query));
				});
			});
			return deferred;
		}
	}, {
		key: '_serverProcess',
		value: function _serverProcess() {
			var deferred = this.ajax(this.storage.query);
			return deferred;
		}
	}, {
		key: '_subscribe',
		value: function _subscribe() {
			var _this3 = this;

			var viewModel = this.viewModel,
			    action = _Tools2.default.throttle(function (x) {
				viewModel.page = viewModel.newPage;
				_this3.exec();
			}, 100);
			viewModel.on('newPage', action);
		}
	}]);

	return Display;
}();

exports.default = Display;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QueryModel = function QueryModel(data) {
	_classCallCheck(this, QueryModel);

	this.filter = [];
	this.sort = [];
	this.rows = 0;
	this.page = 1;
	$.extend(this, data);
};

exports.default = QueryModel;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FixedHeader = function () {
	function FixedHeader(storage) {
		_classCallCheck(this, FixedHeader);

		this.storage = storage;
		this.properties = {};
		this._exec();
	}

	_createClass(FixedHeader, [{
		key: 'resize',
		value: function resize() {
			var storage = this.storage,
			    self = this;
			storage.$headTable.find('.Xgrid-thead-w iframe').each(function (i) {
				var $iframe = $(this);
				self._handlerResizedCellWidth($iframe.width(), i);
			});
		}
	}, {
		key: '_exec',
		value: function _exec() {
			this._build();
			this._bind();
		}
	}, {
		key: '_build',
		value: function _build() {
			var storage = this.storage,
			    cellWidthListeners = [],
			    properties = this.properties;

			properties.$cellWidthRecipients = storage.$gridTable.find('.Xgrid-tbody-w i');

			storage.$headTable.find('.Xgrid-thead-w td').each(function (i) {
				var iframe = $(this).find('iframe').get(0);

				iframe.setAttribute('data-col', i);
				iframe.className = 'Xgrid-WidthListener';
				cellWidthListeners.push(iframe);
			});
			properties.$cellWidthListeners = $(cellWidthListeners);
		}
	}, {
		key: '_bind',
		value: function _bind() {
			var properties = this.properties,
			    self = this;

			properties.$cellWidthListeners.each(function (i) {
				var iframe = this,
				    $iframe = $(iframe);

				self._handlerResizedCellWidth($iframe.width(), i);
				setTimeout(function () {
					$(iframe.contentWindow).on('resize', function () {
						self._handlerResizedCellWidth($iframe.width(), i);
					});
				}, 100);
			});

			//var cellWidthListeners = storage.$headTable.find('.Xgrid-thead-w div')
		}
	}, {
		key: '_handlerResizedCellWidth',
		value: function _handlerResizedCellWidth(width, num) {
			var properties = this.properties;
			properties.$cellWidthRecipients.eq(num).width(width);
		}
	}]);

	return FixedHeader;
}();

exports.default = FixedHeader;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Storage = function () {
	function Storage(model) {
		_classCallCheck(this, Storage);

		this._model = $.extend({
			$box: null,
			$headTable: null,
			$gridTable: null,
			$headLabels: null,
			$paginationBox: null,
			query: null,
			scrollbarWidth: 0,
			colModels: [],
			colModelsDictionary: {},
			data: [],
			processedData: []
		}, model);
		this._subscribers = {};
	}

	_createClass(Storage, [{
		key: 'on',
		value: function on(name, subscriber) {
			var storege = this._getStorage(name);
			storege.push(subscriber);
		}
	}, {
		key: 'notify',
		value: function notify(name, data) {
			var storege = this._getStorage(name);
			$.each(storege, function (i, subscriber) {
				var arg = [data, name, i];

				subscriber.apply(subscriber, arg);
			});
		}
	}, {
		key: '_getStorage',
		value: function _getStorage(name) {
			var subscribers = this._subscribers;
			if (!subscribers[name]) {
				subscribers[name] = [];
			}
			return subscribers[name];
		}
	}, {
		key: '$box',
		get: function get() {
			return this._model.$box;
		}
	}, {
		key: '$headTable',
		get: function get() {
			return this._model.$headTable;
		},
		set: function set(value) {
			if (value instanceof $) {
				this._model.$headTable = value;
				this.notify('$headTable', this);
			}
		}
	}, {
		key: '$gridTable',
		get: function get() {
			return this._model.$gridTable;
		},
		set: function set(value) {
			if (value instanceof $) {
				this._model.$gridTable = value;
				this.notify('$gridTable', this);
			}
		}
	}, {
		key: '$headLabels',
		get: function get() {
			return this._model.$headLabels;
		},
		set: function set(value) {
			if (value instanceof $) {
				this._model.$headLabels = value;
				this.notify('$headLabels', this);
			}
		}
	}, {
		key: '$paginationBox',
		get: function get() {
			return this._model.$paginationBox;
		},
		set: function set(value) {
			if (value instanceof $) {
				this._model.$paginationBox = value;
				this.notify('$paginationBox', this);
			}
		}
	}, {
		key: 'scrollbarWidth',
		get: function get() {
			return this._model.scrollbarWidth;
		},
		set: function set(value) {
			if (typeof value === "number" && value > 0) {
				this._model.scrollbarWidth = value;
				this.notify('scrollbarWidth', this);
			}
		}
	}, {
		key: 'colModels',
		get: function get() {
			return this._model.colModels;
		},
		set: function set(value) {
			if ($.isArray(value)) {
				this._model.colModels = value;
				this.notify('colModels', this);
			}
		}
	}, {
		key: 'colModelsDictionary',
		get: function get() {
			return this._model.colModelsDictionary;
		},
		set: function set(value) {
			this._model.colModelsDictionary = value;
			this.notify('colModelsDictionary', this);
		}
	}, {
		key: 'data',
		get: function get() {
			return this._model.data;
		},
		set: function set(data) {
			if ($.isArray(data)) {
				this._model.data = data;
				this.notify('data', this);
			}
		}
	}, {
		key: 'query',
		get: function get() {
			return this._model.query;
		},
		set: function set(data) {
			this._model.query = data;
			this.notify('query', this);
		}
	}, {
		key: 'processedData',
		get: function get() {
			return this._model.query;
		},
		set: function set(data) {
			this._model.processedData = data;
			this.notify('processedData', this);
		}
	}]);

	return Storage;
}();

exports.default = Storage;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fill = function () {
	function Fill(storage, viewModel) {
		_classCallCheck(this, Fill);

		this.viewModel = viewModel;
		this.storage = storage;
	}

	_createClass(Fill, [{
		key: 'thead',
		value: function thead() {
			var self = this,
			    storage = this.storage,
			    classRules = ['resizable', 'sortable', 'hidden'],
			    colModels = storage.colModels;

			storage.$headLabels.each(function (i) {
				var $th = $(this),
				    $wrapper = $(document.createElement('div')),
				    colModel = colModels[i];

				$th.data('Xgrid.data', colModel);
				var data = colModel.labelFormatter($wrapper, $th, colModel, i);
				if (typeof data !== 'undefined') {
					$wrapper.html(data);
				}

				$th.html($wrapper);
				$th.attr('data-alias', colModel.alias);
				$.each(classRules, function (i, mark) {
					if (colModel[mark]) {
						$th.addClass(mark);
					} else {
						$th.removeClass(mark);
					}
				});
			});
		}
	}, {
		key: 'tbody',
		value: function tbody() {
			var self = this,
			    storage = this.storage,
			    fragment = document.createDocumentFragment(),
			    colModels = storage.colModels,
			    viewModel = this.viewModel,
			    dataToDisplay = viewModel.data,
			    $headWrap = storage.$headTable.parent(),
			    $gridWrap = storage.$gridTable.parent(),
			    data = storage.data,
			    $tfootCells = storage.$gridTable.find('.Xgrid-tbody-w td'),
			    $theadCells = storage.$headTable.find('tr'),
			    dependentCells = [];
			var tbody = void 0;
			colModels.forEach(function (model, i) {
				var cells = [];

				cells.push($tfootCells.get(i));
				$theadCells.each(function () {
					cells.push($(this).find('>*:eq(' + i + ')').get(0));
				});
				dependentCells.push($(cells));
			});
			tbody = this._createShadowBody(fragment);

			$(tbody).find('tr').each(function (i) {
				var rowData = dataToDisplay[i];
				self._fillRow($(this), rowData, data, dependentCells);
			});

			storage.$gridTable.find('>tbody').remove();
			$headWrap.css({ 'padding-right': '' });
			storage.$gridTable.append(tbody);

			if ($gridWrap.get(0).offsetWidth - $gridWrap.get(0).clientWidth) {
				$headWrap.css({ 'padding-right': storage.scrollbarWidth + 'px' });
			}
		}
	}, {
		key: '_createShadowBody',
		value: function _createShadowBody(fragment, amount) {
			var options = this.options,
			    storage = this.storage,
			    colModels = storage.colModels,
			    tbody = document.createElement('tbody'),
			    viewModel = this.viewModel,
			    rowsCount = viewModel.data.length;

			var tr = '<tr>' + Array(colModels.length + 1).join('<td></td>') + '</tr>',
			    trs = '<tbody>' + new Array(rowsCount + 1).join(tr) + '<tbody>';

			if (!fragment) {
				fragment = document.createDocumentFragment();
			}

			tbody.innerHTML = trs;

			fragment.appendChild(tbody);
			return tbody;
		}
	}, {
		key: '_fillRow',
		value: function _fillRow($tr, rowData, data, dependentCells) {

			var $tds = $tr.find('td'),
			    storage = this.storage,
			    colModels = storage.colModels;

			$tr.data('Xgrid.data', rowData);

			$.each(colModels, function (i, colModel) {
				var value = rowData[colModel.key],
				    $td = $tds.eq(i),
				    data = colModel.cellFormatter($td, value, rowData, data),
				    $dependentCell = dependentCells[i];

				if (colModel.hidden) {
					$td.addClass('hidden');
				}
				$dependentCell[colModel.hidden ? 'addClass' : 'removeClass']('hidden');

				if (typeof data !== 'undefined') {
					$td.html(data);
				}
			});
		}
	}]);

	return Fill;
}();

;

exports.default = Fill;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pagination = function () {
	function Pagination(options, storage, viewModel) {
		_classCallCheck(this, Pagination);

		this.options = options;
		this.viewModel = viewModel;
		this.storage = storage;

		this._subscribe();
		this.page();
		this.totalPages();
		this.exec();
	}

	_createClass(Pagination, [{
		key: 'exec',
		value: function exec() {
			this._bind();
		}
	}, {
		key: 'page',
		value: function page() {
			this.storage.$paginationBox.find('.Xgrid-current-page').val(this.viewModel.page);
		}
	}, {
		key: 'totalPages',
		value: function totalPages() {
			this.storage.$paginationBox.find('.Xgrid-total-pages').text(this.viewModel.totalPages);
		}
	}, {
		key: '_subscribe',
		value: function _subscribe() {
			var viewModel = this.viewModel;
			viewModel.on('page', this.page.bind(this));
			viewModel.on('totalPages', this.totalPages.bind(this));
		}
	}, {
		key: '_bind',
		value: function _bind() {
			var storage = this.storage;
			storage.$paginationBox.on('click.xgrid', '.Xgrid-first', this._handlerFirst.bind(this));
			storage.$paginationBox.on('click.xgrid', '.Xgrid-prev', this._handlerPrev.bind(this));
			storage.$paginationBox.on('click.xgrid', '.Xgrid-next', this._handlerNext.bind(this));
			storage.$paginationBox.on('click.xgrid', '.Xgrid-last', this._handlerLast.bind(this));
			storage.$paginationBox.on('keypress.xgrid', '.Xgrid-current-page', this._handlerGoTo.bind(this));
		}
	}, {
		key: '_handlerFirst',
		value: function _handlerFirst(e) {
			e.preventDefault();
			if (this.viewModel.page !== 1) {
				this.viewModel.newPage = 1;
			}
		}
	}, {
		key: '_handlerLast',
		value: function _handlerLast(e) {
			e.preventDefault();
			if (this.viewModel.page !== this.viewModel.totalPages) {
				this.viewModel.newPage = this.viewModel.totalPages;
			}
		}
	}, {
		key: '_handlerNext',
		value: function _handlerNext(e) {
			e.preventDefault();
			var page = this.viewModel.page + 1;
			if (page <= this.viewModel.totalPages) {
				this.viewModel.newPage = page;
			}
		}
	}, {
		key: '_handlerPrev',
		value: function _handlerPrev(e) {
			e.preventDefault();
			var page = this.viewModel.page - 1;
			if (page > 0) {
				this.viewModel.newPage = page;
			}
		}
	}, {
		key: '_handlerGoTo',
		value: function _handlerGoTo(e) {
			if (e.which === 13) {
				var page = $(e.currentTarget).val();
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
	}]);

	return Pagination;
}();

;

exports.default = Pagination;

/***/ })
/******/ ]);
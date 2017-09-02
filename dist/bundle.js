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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

var Pipes = function () {
	function Pipes() {
		var _this = this;

		_classCallCheck(this, Pipes);

		this.integer = this.integer.bind(this);
		this.int = this.integer;

		this.numeric = this.numeric.bind(this);
		this.float = this.numeric;
		this.number = this.numeric;

		//this.datetime = this.date.bind(this);
		this.text = function (value, rowData, colModel) {
			if (colModel.insensitive) {
				return _this.insensitivetext.call(_this, value);
			} else {
				return _this.sensitivetext.call(_this, value);
			}
		};

		this.isNotZero = {
			undefined: 1
		};

		['', null, false, true].forEach(function (key) {
			_this.isNotZero[key] = 1;
		});
	}

	_createClass(Pipes, [{
		key: 'getByType',
		value: function getByType(type) {
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
	}, {
		key: 'numeric',
		value: function numeric(value) {
			var result = void 0;
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
		}
	}, {
		key: 'integer',
		value: function integer(value) {
			var result = void 0;
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
		}
	}, {
		key: 'insensitivetext',
		value: function insensitivetext(value) {
			return value ? $.trim(String(value)) : "";
		}
	}, {
		key: 'sensitivetext',
		value: function sensitivetext(value) {
			return (value ? $.trim(String(value)) : "").toLowerCase();
		}
	}]);

	return Pipes;
}();

exports.default = new Pipes();

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SortRule = function () {
	function SortRule(by) {
		var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ASC';

		_classCallCheck(this, SortRule);

		this.by = by;
		this.order = order;
	}

	_createClass(SortRule, [{
		key: 'triggerOrder',
		value: function triggerOrder() {
			if (this.order === 'ASC') {
				this.order = 'DESC';
			} else {
				this.order = 'ASC';
			}
		}
	}]);

	return SortRule;
}();

;
exports.default = SortRule;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ViewModel = __webpack_require__(4);

var _ViewModel2 = _interopRequireDefault(_ViewModel);

var _ProcessSettings = __webpack_require__(5);

var _ProcessSettings2 = _interopRequireDefault(_ProcessSettings);

var _BuildInfrastructure = __webpack_require__(7);

var _BuildInfrastructure2 = _interopRequireDefault(_BuildInfrastructure);

var _FilterToolbar = __webpack_require__(8);

var _FilterToolbar2 = _interopRequireDefault(_FilterToolbar);

var _Sorting = __webpack_require__(9);

var _Sorting2 = _interopRequireDefault(_Sorting);

var _Display = __webpack_require__(10);

var _Display2 = _interopRequireDefault(_Display);

var _FixedHeader = __webpack_require__(16);

var _FixedHeader2 = _interopRequireDefault(_FixedHeader);

var _Storage = __webpack_require__(17);

var _Storage2 = _interopRequireDefault(_Storage);

var _Fill = __webpack_require__(18);

var _Fill2 = _interopRequireDefault(_Fill);

var _Pagination = __webpack_require__(19);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Tools = __webpack_require__(1);

var _Tools2 = _interopRequireDefault(_Tools);

var _Pipes = __webpack_require__(0);

var _Pipes2 = _interopRequireDefault(_Pipes);

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
				sortBy: [],
				paginationSelector: '',
				ajaxType: 'POST',
				url: '',
				multiSorting: false,
				filterToolbar: false
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

				this.Storage.on('$headTable', function () {
					_this.Sorting.bind();
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
				this.ProcessSettings = new _ProcessSettings2.default(options, this.Storage, this.ViewModel);
				this.BuildInfrastructure = new _BuildInfrastructure2.default(options, this.Storage, this.ViewModel);
				this.Sorting = new _Sorting2.default(this.Storage, this.ViewModel, options);
				this.Fill = new _Fill2.default(this.Storage, this.ViewModel);
				this.FilterToolbar = new _FilterToolbar2.default(this.Storage, this.ViewModel, options);
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
/* 4 */
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
			newPage: 1,
			data: [],
			sortBy: [],
			filterToolbar: false
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
			var storege = this._getStorage(name);
			$.each(storege, function (i, subscriber) {
				var arg = [data, name, i];

				subscriber.apply(subscriber, arg);
			});
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
		key: 'sortBy',
		get: function get() {
			return this.model.sortBy;
		},
		set: function set(data) {
			if ($.isArray(data)) {
				this.model.sortBy = data;
				this.notify('sortBy', this);
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
	}, {
		key: 'filterToolbar',
		get: function get() {
			return this.model.newPage;
		},
		set: function set(data) {
			this.model.filterToolbar = data;
			this.notify('filterToolbar', this);
		}
	}]);

	return ViewModel;
}();

exports.default = ViewModel;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ColModel = __webpack_require__(6);

var _ColModel2 = _interopRequireDefault(_ColModel);

var _SortRule = __webpack_require__(2);

var _SortRule2 = _interopRequireDefault(_SortRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProcessSettings = function () {
	function ProcessSettings(options, storage, viewModel) {
		_classCallCheck(this, ProcessSettings);

		this.options = $.extend({
			colModels: []
		}, options);

		this.properties = {
			scrollbarWidth: null
		};

		this.viewModel = viewModel;
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
			this._processSorting();
		}
	}, {
		key: '_processSorting',
		value: function _processSorting() {
			var viewModel = this.viewModel,
			    options = this.options;
			var sortBy = options.sortBy,
			    data = [];
			if (options.filterToolbar) {
				viewModel.filterToolbar = true;
			}
			if (sortBy && typeof sortBy === 'string') {
				sortBy = sortBy.replace(/\s+/g, ' ').trim().split(',');
				if (sortBy.length) {
					sortBy.forEach(function (item, i) {
						var sortRule = item.trim().split(' '),
						    by = sortRule[0];
						if (typeof by !== 'undefined') {
							var rule = void 0;

							if (String(sortRule[1]).toUpperCase() === 'DESC') {
								rule = new _SortRule2.default(by, 'DESC');
							} else {
								rule = new _SortRule2.default(by);
							}
							data.push(rule);
						}
					});
				}
			} else if ($.isArray(sortBy) && sortBy.length) {
				sortBy.forEach(function (item) {
					var rule = void 0,
					    by = item.by,
					    order = item.order;


					if (by) {
						if (String(order).toUpperCase() !== 'DESC') {
							rule = new _SortRule2.default(by);
						} else {
							rule = new _SortRule2.default(by, 'DESC');
						}
						data.push(rule);
					}
				});
			}
			if (data.length) {
				viewModel.sortBy = data;
			}
		}
	}]);

	return ProcessSettings;
}();

exports.default = ProcessSettings;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Pipes = __webpack_require__(0);

var _Pipes2 = _interopRequireDefault(_Pipes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColModel = function () {
	function ColModel(model, order) {
		_classCallCheck(this, ColModel);

		this.label = '';
		this.hidden = false;
		this.resizable = false;
		this.sortable = false;
		this.order = order;
		this.insensitive = false;
		$.extend(this, model);

		if (typeof this.alias === 'undefined') {
			this.alias = this.key;
		}
		if (typeof this.key === 'undefined') {
			this.alias = this.alias;
		}
		if (model.sorttype && typeof model.sorttype === 'function') {
			this.sortFormatter = model.sorttype;
		} else {
			this.sortFormatter = _Pipes2.default.getByType(model.sorttype);
		}

		if (model.filtertype && typeof model.filtertype === 'function') {
			this.filterFormatter = model.filtertype;
		} else {
			this.filterFormatter = _Pipes2.default.getByType(model.filtertype);
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
		key: 'filterToolbarFormatter',
		value: function filterToolbarFormatter($cell, colModel) {
			return '<div class="input-group input-group-sm">\n\t\t\t<input type="text" class="form-control Xgrid-input Xgrid-filter Xgrid-onEnter" placeholder="Username" />\n\t\t\t<span class="input-group-btn">\n\t\t\t\t<span class="btn btn-default"><i class="glyphicon glyphicon-remove"></i></span>\n\t\t\t\t<span class="btn btn-default"><i class="glyphicon glyphicon-ok"></i></span>\n\t\t\t</span>\n\t\t </div>';
		}
	}]);

	return ColModel;
}();

;

exports.default = ColModel;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Tools = __webpack_require__(1);

var _Tools2 = _interopRequireDefault(_Tools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BuildInfrastructure = function () {
	function BuildInfrastructure(options, storage, viewModel) {
		_classCallCheck(this, BuildInfrastructure);

		this.viewModel = viewModel;
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
		key: 'buildFilterToolbar',
		value: function buildFilterToolbar() {
			if (this.viewModel.filterToolbar) {
				this._buildFilterToolbar();
			}
		}
	}, {
		key: '_exec',
		value: function _exec() {
			this._build();
			this._buildThead();
			this._buildTBody();
			this._buildPagination();
		}
	}, {
		key: '_buildFilterToolbar',
		value: function _buildFilterToolbar() {
			var storage = this.storage,
			    viewModel = this.viewModel,
			    $filter = $('<tbody class="Xgrid-thead-filter"><tr>' + new Array(storage.colModels.length + 1).join('<td><div class="Xgrid-filter-wrapper"></div></td>') + '</tr></tbody>');

			storage.$filterToolbarItems = $filter.find('.Xgrid-filter-wrapper');
			storage.$headTable.append($filter);
		}
	}, {
		key: '_buildThead',
		value: function _buildThead() {
			var storage = this.storage;

			var widthHelper = '<tfoot class="Xgrid-thead-w"><tr>' + new Array(storage.colModels.length + 1).join('<td><div class="Xgrid-WidthListener-wrapper"><iframe data-col="0" class="Xgrid-WidthListener"></iframe></div></td>') + '</tr></tfoot>';

			storage.$headTable.html(widthHelper);
			storage.$headTable.append('<thead class="Xgrid-thead-labels"><tr>' + new Array(storage.colModels.length + 1).join('<th class="Xgrid-thead-label"></th>') + '</tr></thead>');
			storage.$headLabels = storage.$headTable.find('.Xgrid-thead-label');

			this.buildFilterToolbar();
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterToolbar = function () {
	function FilterToolbar(storage, viewModel, options) {
		_classCallCheck(this, FilterToolbar);

		this.storage = storage;
		this.viewModel = viewModel;
		this.options = options;
		this._bind();
	}

	_createClass(FilterToolbar, [{
		key: 'triggerToolbar',
		value: function triggerToolbar() {
			var storage = this.storage,
			    viewModel = this.viewModel,
			    colModels = storage.colModels;
			var sdata = {},
			    j = 0,
			    v,
			    nm,
			    sopt = {},
			    postData = {},
			    so,
			    defaultSearch = 'cn',
			    groupOp = 'AND';
			if (!storage.$filterToolbarItems) {
				return this;
			}

			storage.$filterToolbarItems.each(function (i) {
				var $filter = $(this),
				    colModel = colModels[i],
				    $elem = $filter.find('.Xgrid-filter');

				var nm = colModel.key || colModel.alias,
				    so = defaultSearch;
				v = $elem.val();

				if (v || so === "nu" || so === "nn") {
					sdata[nm] = v;
					sopt[nm] = so;
					j++;
				} else {
					try {
						delete postData[nm];
					} catch (z) {}
				}
			});

			var sd = j > 0 ? true : false;
			if (1) {
				// allow search
				var ruleGroup = "{\"groupOp\":\"" + groupOp + "\",\"rules\":[";
				var gi = 0;
				$.each(sdata, function (i, n) {
					if (gi > 0) {
						ruleGroup += ",";
					}
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
			storage.filter = JSON.parse(postData.filters) || null;
		}
	}, {
		key: '_bind',
		value: function _bind() {
			var storage = this.storage;
			storage.$headTable.on('keypress', 'input.Xgrid-input.Xgrid-onEnter', this._handlerFilterOnEnter.bind(this));
			//storage.$headTable.on('keydown', 'input.Xgrid-input.Xgrid-onKeydown', this._handlerFilterOnKeydown.bind(this));
		}
	}, {
		key: '_handlerFilterOnKeydown',
		value: function _handlerFilterOnKeydown(e) {
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
		}
	}, {
		key: '_handlerFilterOnEnter',
		value: function _handlerFilterOnEnter(e) {
			var key = e.charCode || e.keyCode || 0;
			if (key === 13) {
				e.preventDefault();
				this.triggerToolbar();
			}
		}
	}]);

	return FilterToolbar;
}();

exports.default = FilterToolbar;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SortRule = __webpack_require__(2);

var _SortRule2 = _interopRequireDefault(_SortRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sorting = function () {
	function Sorting(storage, viewModel, options) {
		_classCallCheck(this, Sorting);

		this.storage = storage;
		this.viewModel = viewModel;
		this.options = options;
		this.bind();
	}

	_createClass(Sorting, [{
		key: 'sortByAlias',
		value: function sortByAlias(alias) {
			var storage = this.storage,
			    viewModel = this.viewModel,
			    colModel = storage.colModelsDictionary[alias];
			var sortBy = void 0;
			if (colModel) {
				sortBy = viewModel.sortBy;
				var i = sortBy.length,
				    sortRule = void 0;

				while (i--) {
					if (sortBy[i].by === alias) {
						sortRule = sortBy.splice(i, 1)[0];
						break;
					}
				}

				if (!sortRule) {
					sortRule = new _SortRule2.default(alias);
				} else {
					sortRule.triggerOrder();
				}

				if (this.options.multiSorting) {
					sortBy.unshift(sortRule);
				} else {
					sortBy = [sortRule];
				}
				viewModel.sortBy = sortBy;
			}
		}
	}, {
		key: 'bind',
		value: function bind() {
			var $headTable = this.storage.$headTable;
			this._off();
			$headTable.on('click.Xgrid', '.Xgrid-thead-label.sortable', this._handlerSortColumn.bind(this));
		}
	}, {
		key: '_off',
		value: function _off() {
			this.storage.$headTable.off('.Xgrid');
		}
	}, {
		key: '_handlerSortColumn',
		value: function _handlerSortColumn(e) {
			e.preventDefault();
			var $item = $(e.currentTarget),
			    alias = $item.attr('data-alias'),
			    colmodel = this.storage.colModelsDictionary[alias];
			$item.blur();
			if (colmodel && colmodel.sortable) {
				this.sortByAlias(alias);
			}
		}
	}]);

	return Sorting;
}();

;

exports.default = Sorting;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Tools = __webpack_require__(1);

var _Tools2 = _interopRequireDefault(_Tools);

var _QueryModel = __webpack_require__(11);

var _QueryModel2 = _interopRequireDefault(_QueryModel);

var _Sort = __webpack_require__(12);

var _Sort2 = _interopRequireDefault(_Sort);

var _Filter = __webpack_require__(13);

var _Filter2 = _interopRequireDefault(_Filter);

var _Pipes = __webpack_require__(0);

var _Pipes2 = _interopRequireDefault(_Pipes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Display = function () {
	function Display(options) {
		var _this = this;

		_classCallCheck(this, Display);

		this.viewModel = options.viewModel;
		this.storage = options.storage;
		this.ajax = options.ajax;

		if (options.isLocal) {
			this.process = this._localProcess.bind(this);
		} else {
			this.process = this._serverProcess.bind(this);
		}

		setTimeout(function () {
			_this._subscribe();
		}, 50);
	}

	_createClass(Display, [{
		key: 'exec',
		value: function exec() {
			var _this2 = this;

			var storage = this.storage,
			    viewModel = this.viewModel,
			    query = new _QueryModel2.default({
				filter: storage.filter,
				sort: viewModel.sortBy,
				rows: viewModel.rows,
				page: viewModel.newPage
			});

			storage.query = query;
			storage.$box.addClass('Xgrid-loading');
			setTimeout(function () {
				_this2.process().done(function (data) {
					_this2._filler(data);
					_this2.storage.$box.removeClass('Xgrid-loading');
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
		value: function _localFilter(data, filterQuery) {
			var deferred = $.Deferred(),
			    storage = this.storage,
			    rawData = function rawData() {
				var colModels = storage.colModelsDictionary;
				return function () {
					var row = {};
					return function (alias, rowData) {
						if (typeof row[alias] === 'undefined') {
							var colModel = colModels[alias];
							row[alias] = colModel.filterFormatter(rowData[colModel.key], rowData, colModel);
						};
						return row[alias];
					};
				};
			};
			setTimeout(function () {
				if (filterQuery) {
					data = _Filter2.default.exec(data, filterQuery, rawData());
				}
				deferred.resolve(data);
			}, 0);
			return deferred;
		}
	}, {
		key: '_localSort',
		value: function _localSort(data, sortRules) {
			var deferred = $.Deferred(),
			    storage = this.storage;
			if (sortRules.length) {
				sortRules = sortRules.map(function (rule) {
					var colModel = storage.colModelsDictionary[rule.by];
					var result = {
						order: rule.order
					};

					if (colModel) {
						result.colModel = colModel;
						result['by'] = colModel.key;
						result['get'] = colModel.sortFormatter;
					} else {
						result['by'] = rule.by;
						result['get'] = _Pipes2.default.getByType();
					}
					return result;
				});
				data = _Sort2.default.exec(data, sortRules);
				setTimeout(function () {
					deferred.resolve(data);
				}, 0);
			} else {
				deferred.resolve(data);
			}
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
			var _this3 = this;

			var storage = this.storage,
			    deferred = $.Deferred(),
			    query = storage.query;
			this._localFilter(storage.data, query.filter).done(function (filteredData) {
				_this3._localSort(filteredData, query.sort).done(function (sortedData) {
					deferred.resolve(_this3._getLocalData(sortedData, query));
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
			var _this4 = this;

			var viewModel = this.viewModel,
			    storage = this.storage,
			    action = _Tools2.default.throttle(function () {
				_this4.exec();
			}, 100),
			    _reload = function _reload(s, type) {

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
		}
	}]);

	return Display;
}();

exports.default = Display;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QueryModel = function QueryModel(data) {
	_classCallCheck(this, QueryModel);

	this.filter = {};
	this.sort = [];
	this.rows = 0;
	this.page = 1;
	$.extend(this, data);
};

exports.default = QueryModel;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sort = function () {
	function Sort() {
		_classCallCheck(this, Sort);
	}

	_createClass(Sort, [{
		key: 'exec',
		value: function exec() {
			var _this = this;

			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
			var rules = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			var source = void 0;
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
					} else {
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
		}
	}, {
		key: 'ASC',
		value: function ASC(a, b) {
			if (a < b) {
				return -1;
			}
			if (a > b) {
				return 1;
			}
			return 0;
		}
	}, {
		key: 'DESC',
		value: function DESC(a, b) {
			if (a < b) {
				return 1;
			}
			if (a > b) {
				return -1;
			}
			return 0;
		}
	}, {
		key: '_getSource',
		value: function _getSource(data, rules) {
			return data.map(function (item) {
				var formatted = {};
				rules.forEach(function (rule) {
					formatted[rule.by] = rule.get(item[rule.by], item, rule.colModel, data);
				});
				return {
					_: item,
					formatted: formatted
				};
			});
		}
	}]);

	return Sort;
}();

;

exports.default = new Sort();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Operators = __webpack_require__(14);

var _Operators2 = _interopRequireDefault(_Operators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Filter = function () {
	function Filter() {
		_classCallCheck(this, Filter);
	}

	_createClass(Filter, [{
		key: "exec",
		value: function exec(data, group, getData) {
			var _this = this;

			var newData = data.filter(function (item, i) {
				var get = getData(),
				    state = _this._check(group, item, get);
				return state;
			});
			return newData;
		}
	}, {
		key: "_or",
		value: function _or(rules, rowData, get) {
			var i = rules.length;
			while (i--) {
				var rule = rules[i];
				if (!_Operators2.default[rule.op]) {
					return true;
				}
				var value = get(rule.field, rowData),
				    state = _Operators2.default[rule.op](rule.data, value);
				if (state) {
					return true;
				}
			}
			return false;
		}
	}, {
		key: "_and",
		value: function _and(rules, rowData, get) {
			var i = rules.length;
			while (i--) {
				var rule = rules[i];
				if (!_Operators2.default[rule.op]) {
					return true;
				}
				var value = get(rule.field, rowData),
				    state = _Operators2.default[rule.op](rule.data, value);
				if (!state) {
					return false;
				}
			}
			return true;
		}
	}, {
		key: "_check",
		value: function _check(group, rowData, get) {
			var isOr = group.rules.length && String(group.groupOp).toUpperCase() === "OR";
			if ($.isArray(group.rules) && group.rules.length) {
				if (isOr) {
					return this._or(group.rules, rowData, get);
				} else {
					return this._and(group.rules, rowData, get);
				}
			}
			return true;
		}
	}]);

	return Filter;
}();

;

exports.default = new Filter();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Operators = function () {
	function Operators() {
		var _this = this;

		_classCallCheck(this, Operators);

		this.eq = this.equals;
		this.ne = this.notEquals;
		this.lt = this.less;
		this.le = this.lessOrEquals;
		this.gt = this.greater;
		this.ge = this.greaterOrEquals;
		this.cn = this.contains;
		this.nc = function () {
			for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
				arg[_key] = arguments[_key];
			}

			return !_this.contains.apply(_this, arg);
		};
		this.bw = this.startsWith;
		this.bn = function () {
			for (var _len2 = arguments.length, arg = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				arg[_key2] = arguments[_key2];
			}

			return !_this.startsWith.apply(_this, arg);
		};
		this.en = function () {
			for (var _len3 = arguments.length, arg = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				arg[_key3] = arguments[_key3];
			}

			return !_this.endsWith.apply(_this, arg);
		};
		this.ew = this.endsWith;
		this.in = this.inArray;
		this.ni = function () {
			for (var _len4 = arguments.length, arg = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				arg[_key4] = arguments[_key4];
			}

			return !_this.inArray.apply(_this, arg);
		};
		this.nu = this.isNull;
		this.nn = function () {
			for (var _len5 = arguments.length, arg = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
				arg[_key5] = arguments[_key5];
			}

			return !_this.isNull.apply(_this, arg);
		};
	}

	_createClass(Operators, [{
		key: "equals",
		value: function equals(a, b) {
			return a === b;
		}
	}, {
		key: "notEquals",
		value: function notEquals(a, b) {
			return a !== b;
		}
	}, {
		key: "isNull",
		value: function isNull(a) {
			return a === null;
		}
	}, {
		key: "greater",
		value: function greater(a, b) {
			return a > b;
		}
	}, {
		key: "less",
		value: function less(a, b) {
			return a < b;
		}
	}, {
		key: "greaterOrEquals",
		value: function greaterOrEquals(a, b) {
			return a >= b;
		}
	}, {
		key: "lessOrEquals",
		value: function lessOrEquals(a, b) {
			return a <= b;
		}
	}, {
		key: "inArray",
		value: function inArray(a, array) {
			return $.inArray(a, array) !== -1;
		}
	}, {
		key: "startsWith",
		value: function startsWith(a, b, insensitive) {
			a = String(a);
			b = String(b);
			if (insensitive) {
				a = a.toUpperCase();
				b = b.toUpperCase();
			}
			var length = a.length,
			    str = a.substr(0, length);
			return str === b;
		}
	}, {
		key: "endsWith",
		value: function endsWith(a, b, insensitive) {
			a = String(a);
			b = String(b);
			if (insensitive) {
				a = a.toUpperCase();
				b = b.toUpperCase();
			}
			var length = b.length * -1,
			    str = a.substr(length);
			return str === b;
		}
	}, {
		key: "contains",
		value: function contains(a, b, insensitive) {
			a = String(a);
			b = String(b);
			if (insensitive) {
				a = a.toUpperCase();
				b = b.toUpperCase();
			}
			return b.indexOf(a) !== -1;
		}
	}]);

	return Operators;
}();

exports.default = new Operators();

/***/ }),
/* 15 */,
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
			$filterToolbarItems: null,
			query: null,
			scrollbarWidth: 0,
			colModels: [],
			colModelsDictionary: {},
			filter: null,
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
		key: '$filterToolbarItems',
		get: function get() {
			return this._model.$filterToolbarItems;
		},
		set: function set(value) {
			if (value instanceof $) {
				this._model.$filterToolbarItems = value;
				this.notify('$filterToolbarItems', this);
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
		key: 'filter',
		get: function get() {
			return this._model.filter;
		},
		set: function set(data) {
			if (data === null || (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
				this._model.filter = data;
				this.notify('filter', this);
			}
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
/* 18 */
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
			    classRules = ['resizable', 'sortable', 'filterable', 'hidden'],
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
			this.filterToolbar();
		}
	}, {
		key: 'filterToolbar',
		value: function filterToolbar() {
			var self = this,
			    storage = this.storage,
			    viewModel = this.viewModel,
			    colModels = storage.colModels;
			if (storage.$filterToolbarItems) {
				storage.$filterToolbarItems.each(function (i) {
					var $cell = $(this),
					    colModel = colModels[i];
					if (colModel.filterable && colModel.filterToolbarFormatter) {
						var data = colModel.filterToolbarFormatter($cell, colModel);
						if (typeof data !== 'undefined') {
							$cell.html(data);
						}
					} else {
						$cell.empty();
					}
				});
			}
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
			this._updateHead();
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
	}, {
		key: '_updateHead',
		value: function _updateHead() {
			var self = this,
			    storage = this.storage,
			    colModels = storage.colModels,
			    viewModel = this.viewModel,
			    $headLabels = storage.$headLabels,
			    sortBy = {};

			viewModel.sortBy.forEach(function (sortRule) {
				sortBy[sortRule.by] = sortRule.order;
			});

			colModels.forEach(function (colModel, i) {
				var $label = $headLabels.eq(i),
				    order = sortBy[colModel.alias];
				if (order) {
					$label.attr('data-sort', order);
				} else {
					$label.removeAttr('data-sort');
				}
			});
		}
	}]);

	return Fill;
}();

;

exports.default = Fill;

/***/ }),
/* 19 */
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
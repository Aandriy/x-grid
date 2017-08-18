'use strict';
class Operators {
	'>'(a, b) {
		return a > b;
	};
	'<'(a, b) {
		return a < b;
	};
	'>='(a, b) {
		return a >= b;
	};
	'<='(a, b) {
		return a <= b;
	};
	'='(a, b) {
		return a === b;
	};
	'!='(a, b) {
		return a !== b;
	};
}

class Filter {
	constructor(storage, viewModel) {
		this.storage = storage;
		this.operators = new Operators();
	};

	exec(data, rules) {
		if (!$.isArray(rules) || rules.length) {
			return data;
		}
		const getRowdata = this._getRowdata(rules),
			check = this._check();
		return data.filter((item, i) => {
			return check(getRowdata(item));
		});
		//colModels
	};



	_check(rules) {
		// TODO collect 
		const checklist = [],
			operators = this.operators,
			result = [];

		rules.forEach((rule) => {
			if (operators[rule.op]) { }
			result.push({
				do: operators[rule.op],

			})
		});
		return function (rowData) {
			return true;
		}
	};
	_getRowdata(rules) {
		const colModels = this.storage.colModels;

		return function (item) {
			return item;

		}
	}
};

export default Filter;
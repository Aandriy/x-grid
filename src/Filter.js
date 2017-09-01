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
		this.in = this.equals; //?
		this.ni = ((...arg) => {
			return !this.equals.apply(this, arg); //?
		});
		this.nu = this.isNull;
		this.nn = ((...arg) => {
			return !this.isNull.apply(this, arg);
		});
	}

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
		return a.indexOf(b) !== -1;
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
				alias: rule.alias,
				id: rule.id,
				operator: operators[rule.op],


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
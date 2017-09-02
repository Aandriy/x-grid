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
	inArray(a, array) {
		return $.inArray(a, array) !== -1;
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
export default new Operators();
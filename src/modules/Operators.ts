class Operators {
	eq = this.equals;
	ne = this.notEquals;
	lt = this.less;
	le = this.lessOrEquals;
	gt = this.greater;
	ge = this.greaterOrEquals;
	cn = this.contains;
	nc = ((...arg) => {
		return !this.contains.apply(this, arg);
	});
	bw = this.startsWith;
	bn = ((...arg) => {
		return !this.startsWith.apply(this, arg);
	});
	en = ((...arg) => {
		return !this.endsWith.apply(this, arg);
	});
	ew = this.endsWith;
	in = this.inArray;
	ni = ((...arg) => {
		return !this.inArray.apply(this, arg);
	});
	nu = this.isNull;
	nn = ((...arg) => {
		return !this.isNull.apply(this, arg);
	});

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
export default new Operators();
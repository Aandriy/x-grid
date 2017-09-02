import operators from './Operators.js';
class Filter {

	exec(data, group, getData) {
		const newData = data.filter((item, i) => {
			const get = getData(),
				state = this._check(group, item, get);
			return state;
		});
		return newData;
	};
	_or(rules, rowData, get) {
		let i = rules.length;
		while (i--) {
			const rule = rules[i];
			if (!operators[rule.op]) {
				return true;
			}
			let value = get(rule.field, rowData),
				state = operators[rule.op](rule.data, value);
			if (state) {
				return true;
			}
		}
		return false;
	};
	_and(rules, rowData, get) {
		let i = rules.length;
		while (i--) {
			const rule = rules[i];
			if (!operators[rule.op]) {
				return true;
			}
			let value = get(rule.field, rowData),
				state = operators[rule.op](rule.data, value);
			if (!state) {
				return false;
			}
		}
		return true;
	};
	_check(group, rowData, get) {
		const isOr = group.rules.length && String(group.groupOp).toUpperCase() === "OR";
		if ($.isArray(group.rules) && group.rules.length) {
			if (isOr) {
				return this._or(group.rules, rowData, get);
			} else {
				return this._and(group.rules, rowData, get);
			}
		}
		return true;
	};
};

export default new Filter();
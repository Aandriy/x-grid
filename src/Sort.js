

class Sort {
	constructor() {

	}

	exec(data = [], rules = []) {
		let source;
		if (!data.length || !rules.length) {
			return data;
		}
		source = this._getSource(data, rules);
		source.sort((a, b) => {
			let result = 0;
			for (let i = 0, j = rules.length; i < rules.length; i++) {
				let key = rules[i].by;
				if (rules[i].order === 'ASC') {
					result = this.ASC(a.formatted[key], b.formatted[key])
				} else {
					result = this.DESC(a.formatted[key], b.formatted[key])
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

	ASC(a, b) {
		if (a < b) {
			return -1;
		}
		if (a > b) {
			return 1;
		}
		return 0;
	};

	DESC(a, b) {
		if (a < b) {
			return 1;
		}
		if (a > b) {
			return -1;
		}
		return 0;
	};
	_getSource(data, rules) {
		return data.map(function (item) {
			let formatted = {};
			rules.forEach((rule) => {
				formatted[rule.by] = rule.get(item[rule.by], item, rule.colModel, data);
			});
			return {
				_: item,
				formatted,
			}
		});
	}
};

export default new Sort();
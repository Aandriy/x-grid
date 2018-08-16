class Pipes {
	int: Function;
	float: Function;
	number: Function;
	text: Function;

	isNotZero = {
		undefined: 1,
		'': 1,
		null: 1,
		false: 1,
		true: 1,
	};

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
	};

	getByType(type?: string): Function {
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

	numeric(value: any): number {
		let result: number;
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

	integer(value): number {
		let result;
		if (this.isNotZero[value]) {
			result = Number.NEGATIVE_INFINITY;
		} else {
			if (!isNaN(value)) {
				result = String(value).replace(/[\$,%]/g, '');
			}
			result = parseInt(result);
			result = isNaN(result) ? Number.NEGATIVE_INFINITY : result;
		}
		return result;
	};

	insensitivetext(value): string {
		return (value ? $.trim(String(value)) : "").toLowerCase();
	};

	sensitivetext(value): string {
		return value ? $.trim(String(value)) : "";
	};
}

export default new Pipes();
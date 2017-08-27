class SortFormatters {
	constructor() {
		this.float = this.number;
		this.currency = this.number;
		this.numeric = this.number;
		this.int = this.number;
		this.integer = this.number;
		this.text = this.insensitivetext;
	}

	number(value) {
		let result;
		if (isNaN(value)) {
			result = parseFloat( String(value).replace(/[\$,%]/g, ''));
			result = isNaN(result) ? Number.NEGATIVE_INFINITY : result;
		} else {
			result = +value;
		}
		return result;
	};
	
	insensitivetext(value){
		return value ? $.trim(String(value)) : "";
	};

	sensitivetext(value) {
		return (value ? $.trim(String(value)) : "").toLowerCase();
	};
}
export default new SortFormatters();
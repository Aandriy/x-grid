class QueryModel {
	constructor(data) {
		this.filter = [];
		this.sort = [];
		this.rows = 0;
		this.page = 1;
		$.extend(this, data);
	}
}
export default QueryModel;
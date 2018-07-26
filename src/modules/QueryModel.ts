export default class QueryModel implements IQueryModel {
	filter = {};
	sort = [];
	rows = 0;
	page = 1;

	constructor(data) {
		$.extend(this, data);
	}
}

export default class FilterModel implements IFilterModel {
	data: any;
	field: string;
	op: string;

	constructor(data: any, field: string, op: string) {
		this.data = data;
		this.field = field;
		this.op = op;
	}
}
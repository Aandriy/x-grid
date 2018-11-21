export default class FilterModel implements IFilterModel {
	data: any;
	field: string;
	op: TOperatorType;

	constructor(data: any, field: string, op: TOperatorType) {
		this.data = data;
		this.field = field;
		this.op = op;
	}
}
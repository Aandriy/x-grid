import pipes from './Pipes';

export default class LocalSortRuleModel implements ILocalSortRule {
	by: string;
	order: string;
	colModel?: IColModel;
	get: Function = pipes.getByType();

	constructor(order: string, by: string, colModel: null | IColModel) {
		this.order = order;
		this.by = by;

		if (colModel) {
			this.colModel = colModel;
			this.get = colModel.sortFormatter;
		}
	}
}

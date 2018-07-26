export default class SortRule implements ISortRule {
	by: string;
	order: string;

	constructor(by, order = 'ASC') {
		this.by = by;
		this.order = order;
	}
	triggerOrder(): void {
		if (this.order === 'ASC') {
			this.order = 'DESC';
		} else {
			this.order = 'ASC';
		}
	};
};
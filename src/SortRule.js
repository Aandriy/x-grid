class SortRule {
	constructor(by, order = 'ASC') {
		this.by = by;
		this.order = order;
	}
	triggerOrder() {
		if (this.order === 'ASC') {
			this.order = 'DESC';
		} else {
			this.order = 'ASC';
		}
	};
};
export default SortRule;
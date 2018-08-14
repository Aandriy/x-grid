interface IQueryModel {
	filter: null | IFilterModel[];
	sort: ISortBy[];
	rows: number;
	page: number;
}
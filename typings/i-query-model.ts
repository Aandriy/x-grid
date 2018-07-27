interface IQueryModel {
	filter: null | any;
	sort: ISortBy[];
	rows: number;
	page: number;
}
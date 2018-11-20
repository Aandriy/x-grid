interface IRequest {
	rows?:  number;
	page?:  number;
	sort?: ISortBy;
	filter?: null | IFilterModel[];
}
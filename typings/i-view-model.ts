interface IViewModel {
	rows: number;
	totalRows: number,
	page: number;
	totalPages: number;
	newPage: number;
	data: any[];
	sortBy: ISortBy[];
	filterToolbar: boolean;
}
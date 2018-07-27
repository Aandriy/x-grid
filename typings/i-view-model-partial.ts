interface IViewModelPartial {
	data: IRawData[];
	filterToolbar: boolean;
	newPage: number;
	page: number;
	rows: number;
	sortBy: ISortBy[];
	totalPages: number;
	totalRows: number,
}
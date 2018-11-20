interface IViewModelPartial {
	data: IRawData[];
	filterToolbar: boolean;
	newPage: number;
	page: number;
	rows: number;
	sortBy: ISortRule[];
	totalPages: number;
	totalRows: number,
}